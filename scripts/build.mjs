// Renders data/tools.json into:
//   README.md        — the GitHub-facing directory
//   dist/skool.html  — paste-into-Skool rich text (basic tags only)
//   dist/skool.txt   — plain-text fallback
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const data = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'tools.json'), 'utf8'));
const { meta, domains } = data;

const totalEntries = domains.reduce((n, d) => n + d.entries.length, 0);

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// ---------- README.md ----------
function buildReadme() {
  const L = [];
  L.push(`# ${meta.title}`, '', `**${meta.tagline}**`, '');
  L.push(`${totalEntries} curated skills, repos and tools across ${domains.length} domains.`, '');
  L.push(`> ${meta.note}`, '');
  L.push('## Contents', '');
  for (const d of domains) {
    L.push(`- [${d.title}](#${d.id}) — ${d.blurb}`);
  }
  L.push('');
  for (const d of domains) {
    L.push(`<a id="${d.id}"></a>`, '');
    L.push(`## ${d.title}`, '', `*${d.blurb}*`, '');
    L.push('| Tool | What it’s for |');
    L.push('|---|---|');
    for (const e of d.entries) {
      L.push(`| [${e.name}](${e.url}) | ${e.desc} |`);
    }
    L.push('');
  }
  L.push('---', '');
  L.push('## How this is built', '');
  L.push('`data/tools.json` is the single source of truth. Everything else is generated:', '');
  L.push('```bash');
  L.push('node scripts/build.mjs        # regenerate README.md + dist/');
  L.push('node scripts/check-links.mjs  # re-verify every link still resolves');
  L.push('```', '');
  L.push(`Star counts were captured on ${meta.starsAsOf} and will drift. Re-run \`check-links.mjs\` to refresh them.`, '');
  L.push('## Contributing', '');
  L.push('Add an entry to `data/tools.json` and run the build. Two rules:', '');
  L.push('1. **The link must resolve.** `check-links.mjs` runs against every entry — a dead link fails the check.');
  L.push('2. **The one-liner says what it’s *for*,** not what its README claims. If you can’t say why someone would open it, leave it out.', '');
  return L.join('\n');
}

// ---------- Skool HTML (basic tags only — no CSS, no classes) ----------
function buildSkool() {
  const H = [];
  H.push(`<h1>${esc(meta.title)}</h1>`);
  H.push(`<p><strong>${esc(meta.tagline)}</strong></p>`);
  H.push(`<p>${totalEntries} curated skills, repos and tools across ${domains.length} domains. Every link checked ${esc(meta.starsAsOf)}.</p>`);
  H.push(`<p><em>Jump to what you're trying to do:</em> ${domains.map(d => esc(d.title)).join(' &middot; ')}</p>`);
  H.push('<hr>');
  for (const d of domains) {
    H.push(`<h2>${esc(d.title)}</h2>`);
    H.push(`<p><em>${esc(d.blurb)}</em></p>`);
    H.push('<ul>');
    for (const e of d.entries) {
      H.push(`<li><a href="${esc(e.url)}"><strong>${esc(e.name)}</strong></a> — ${esc(e.desc)}</li>`);
    }
    H.push('</ul>');
  }
  H.push('<hr>');
  H.push('<p><em>Something missing? Reply with it and I’ll add it.</em></p>');
  return H.join('\n');
}

// ---------- plain text fallback ----------
// Plain text tuned for pasting straight into a rich-text composer that strips
// markup: no tags at all, bare URLs so the editor auto-links them.
function buildText() {
  const L = [];
  L.push(meta.title.toUpperCase());
  L.push(meta.tagline, '');
  L.push(`${totalEntries} curated skills, repos and tools across ${domains.length} domains.`);
  L.push(`Every link checked ${meta.starsAsOf}.`);
  for (const d of domains) {
    L.push('', '─────────────────────────────', `${d.title.toUpperCase()}`, d.blurb, '');
    for (const e of d.entries) {
      L.push(`${e.name} — ${e.desc}`);
      L.push(e.url, '');
    }
  }
  L.push('─────────────────────────────');
  L.push('Something missing? Drop it in the comments and I’ll add it.');
  return L.join('\n');
}

fs.writeFileSync(path.join(ROOT, 'README.md'), buildReadme());
fs.mkdirSync(path.join(ROOT, 'dist'), { recursive: true });
fs.writeFileSync(path.join(ROOT, 'dist', 'skool.html'), buildSkool());
fs.writeFileSync(path.join(ROOT, 'dist', 'skool.txt'), buildText());

console.log(`built: ${totalEntries} entries / ${domains.length} domains`);
console.log('  README.md');
console.log('  dist/skool.html');
console.log('  dist/skool.txt');
