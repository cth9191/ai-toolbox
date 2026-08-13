// Verifies every link in data/tools.json still resolves, and flags entries that
// point at a fork rather than the original author's repo.
//   node scripts/check-links.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
const ex = promisify(execFile);

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const data = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'tools.json'), 'utf8'));

const all = data.domains.flatMap(d => d.entries.map(e => ({ ...e, domain: d.title })));
console.log(`checking ${all.length} links...\n`);

let hasGh = true;
try { await ex('gh', ['auth', 'status']); } catch {
  hasGh = false;
  console.log('note: gh CLI not authenticated — GitHub links fall back to plain HTTP checks.\n');
}

async function checkGitHub(e) {
  const m = e.url.match(/github\.com\/([^/]+\/[^/#?]+)/);
  if (!m || !hasGh) return checkHttp(e);
  try {
    const { stdout } = await ex('gh', ['api', `repos/${m[1]}`,
      '--jq', '{archived, fork, parent_full: (.parent.full_name // "")}']);
    const o = JSON.parse(stdout);
    // Listing a fork as if it were the source miscredits the real author.
    if (o.fork && o.parent_full) return { ok: true, warn: `FORK of ${o.parent_full} — link the original` };
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
    if (code >= 200 && code < 400) return { ok: true };
    // 403/405/429 are bot-blocks from real sites, not dead links
    if ([403, 405, 429].includes(code)) return { ok: true, warn: `bot-blocked (${code})` };
    return { ok: false, reason: `HTTP ${code}` };
  } catch (err) {
    return { ok: false, reason: String(err.message).slice(0, 60) };
  }
}

const bad = [];
const queue = [...all];
await Promise.all(Array.from({ length: 8 }, async () => {
  while (queue.length) {
    const e = queue.shift();
    const r = e.url.includes('github.com') ? await checkGitHub(e) : await checkHttp(e);
    if (!r.ok) { bad.push({ ...e, reason: r.reason }); console.log(`  DEAD  ${e.name} — ${r.reason}`); }
    else if (r.warn) console.log(`  warn  ${e.name} — ${r.warn}`);
  }
}));

console.log(`\n${all.length - bad.length}/${all.length} OK`);
if (bad.length) { console.error(`${bad.length} dead link(s)`); process.exit(1); }
