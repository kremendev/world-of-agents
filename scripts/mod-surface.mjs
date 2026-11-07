// npm run mod:surface (part of npm run check): what the mod hooks and calls, as Claude Code itself reads its source.
//
// It runs `claude plugin validate plugin --json`, takes every line the validator reports about a hooks module (the
// events it hooks, the $ calls it makes, the state it reads and writes, which hooks can gate, and any other kind the
// validator names, env reads included) and compares them with scripts/mod-surface.json. Any difference fails: an item
// that appeared needs a review and an entry, and an item that went has to leave the list, so it can't come back
// unreviewed later. A plugin the validator refuses fails too.

import { spawnSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const REPO = resolve(import.meta.dirname, '..');
const EXPECTED = resolve(REPO, 'scripts/mod-surface.json');

function fail(message) {
  console.error(`mod:surface: ${message}`);
  process.exit(1);
}

const ran = spawnSync('claude', ['plugin', 'validate', 'plugin', '--json'], { cwd: REPO, encoding: 'utf8' });
if (ran.error) fail(`could not run claude (${ran.error.message}). Claude Code must be on the PATH.`);
let report;
try {
  report = JSON.parse(ran.stdout);
} catch {
  fail(`claude plugin validate printed no JSON report:\n${ran.stdout}${ran.stderr}`);
}
if (ran.status !== 0 || report.success !== true) {
  const errors = [report.manifest, ...(report.contents ?? [])].flatMap((part) => part?.errors ?? []);
  fail(
    `claude plugin validate refused the plugin:\n  ${errors.map((e) => e.message ?? JSON.stringify(e)).join('\n  ')}`,
  );
}

/** "a, b{x=1, y=2}, $.c (via d)" to ["a", "b{x=1, y=2}", "$.c"]: commas inside brackets don't split. */
function items(list) {
  const out = [];
  let depth = 0;
  let item = '';
  for (const char of list) {
    if ('{(['.includes(char)) depth += 1;
    if ('})]'.includes(char)) depth -= 1;
    if (char === ',' && depth === 0) {
      out.push(item);
      item = '';
    } else item += char;
  }
  out.push(item);
  // Which helper makes a call ("(via refreshAgents)") is no part of the surface.
  return out.map((s) => s.replace(/\s*\(via [^)]*\)$/, '').trim()).filter(Boolean);
}

// Each note about a module reads "<module> <kind>: <items>".
const surface = {};
for (const part of report.contents ?? []) {
  if (part.type !== 'hooks') continue;
  for (const note of part.notes ?? []) {
    const match = /^(\.\/\S+) ([^:]+): (.*)$/.exec(note);
    if (!match) continue;
    const [, module, kind, list] = match;
    const kinds = (surface[module] ??= {});
    kinds[kind] = [...new Set([...(kinds[kind] ?? []), ...items(list)])].sort();
  }
}
if (Object.keys(surface).length === 0) fail('the validator reported no hooks module at all.');

const expected = JSON.parse(readFileSync(EXPECTED, 'utf8'));
const flat = (s) =>
  Object.entries(s).flatMap(([module, kinds]) =>
    Object.entries(kinds).flatMap(([kind, list]) => list.map((item) => `${module} ${kind}: ${item}`)),
  );
const now = flat(surface);
const before = flat(expected);
const added = now.filter((line) => !before.includes(line));
const removed = before.filter((line) => !now.includes(line));

console.log('mod:surface: what the mod uses, as claude plugin validate reads it');
for (const line of now) console.log(`  ${line}`);
if (added.length > 0 || removed.length > 0) {
  const lines = [
    ...added.map((line) => `  new, not in the list: ${line}`),
    ...removed.map((line) => `  in the list, no longer used: ${line}`),
  ];
  fail(
    `the mod's surface differs from scripts/mod-surface.json. Review each one, then update the list:\n${lines.join('\n')}`,
  );
}
console.log('mod:surface: matches scripts/mod-surface.json');
