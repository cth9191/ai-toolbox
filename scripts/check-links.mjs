// Re-verifies every link in data/tools.json and refreshes GitHub star counts.
//   node scripts/check-links.mjs          report only
//   node scripts/check-links.mjs --write  also write refreshed stars back to tools.json
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
const ex = promisify(execFile);

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const FILE = path.join(ROOT, 'data', 'tools.json');
const data = JSON.parse(fs.readFileSync(FILE, 'utf8'));
const WRITE = process.argv.includes('--write');

const all = data.domains.flatMap(d => d.entries.map(e => ({ ...e, domain: d.title, _ref: e })));
console.log(`checking ${all.length} links...\n`);

let hasGh = true;
try { await ex('gh', ['auth', 'status']); } catch { hasGh = false; console.log('note: gh CLI not authenticated — GitHub links fall back to HTTP checks, stars not refreshed.\n'); }

const bad = [];
let refreshed = 0;

async function checkGitHub(e) {
  const m = e.url.match(/github\.com\/([^/]+\/[^/#?]+)/);
  if (!m || !hasGh) return checkHttp(e);
  try {
    const { stdout } = await ex('gh', ['api', `repos/${m[1]}`, '--jq', '{stargazers_count,archived}']);
    const o = JSON.parse(stdout);
    if (e.stars !== o.stargazers_count) { e._ref.stars = o.stargazers_count; refreshed++; }
    if (o.archived) return { ok: true, warn: 'ARCHIVED' };
    return { ok: true };
  } catch {
    return { ok: false, reason: 'repo not found' };
  }
}

async function checkHttp(e) {
  try {
    const { stdout } = await ex('curl', ['-sS', '-o', '/dev/null', '-w', '%{http_code}', '-L', '--max-time', '15', e.url]);
    const code = Number(stdout.trim());
    // 403/405 are bot-blocks from real sites, not dead links
    if (code >= 200 && code < 400) return { ok: true };
    if (code === 403 || code === 405 || code === 429) return { ok: true, warn: `bot-blocked (${code})` };
    return { ok: false, reason: `HTTP ${code}` };
  } catch (err) {
    return { ok: false, reason: String(err.message).slice(0, 60) };
  }
}

const queue = [...all];
await Promise.all(Array.from({ length: 8 }, async () => {
  while (queue.length) {
    const e = queue.shift();
    const r = e.url.includes('github.com') ? await checkGitHub(e) : await checkHttp(e);
    if (!r.ok) { bad.push({ ...e, reason: r.reason }); console.log(`  DEAD  ${e.name} — ${r.reason}`); }
    else if (r.warn) console.log(`  warn  ${e.name} — ${r.warn}`);
  }
}));

if (WRITE && refreshed) {
  data.meta.starsAsOf = new Date().toISOString().slice(0, 10);
  fs.writeFileSync(FILE, JSON.stringify(data, null, 2) + '\n');
  console.log(`\nrefreshed ${refreshed} star counts, updated starsAsOf`);
}

console.log(`\n${all.length - bad.length}/${all.length} OK`);
if (bad.length) { console.error(`${bad.length} dead link(s)`); process.exit(1); }
