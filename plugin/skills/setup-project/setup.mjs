// Claude Code runs this script itself, through the skills' injected commands, before the model sees anything: the model
// never runs it and never types a permission rule. It copies template.json, next to it, into the project's
// .claude/settings.local.json. It runs in the session's folder, the project's top folder:
//
//   node setup.mjs           shows what it would do and writes nothing    (/world-of-agents:setup-project)
//   node setup.mjs --write   checks everything again, then writes         (/world-of-agents:setup-project-write)
//
// It exits 0 whenever it printed a result, a stop included: a non-zero exit would abort the skill, and the model could
// not explain the stop. Only a wrong argument exits 1. Running --write twice changes nothing: the second run compares the
// file with the template itself and says "Already set up" or names the settings that differ, never their values.
//
// It writes only into a file it fully understands: none yet, or one holding nothing but what a local-scope plugin install
// puts there (enabledPlugins, extraKnownMarketplaces), which it keeps exactly as it is. Anything else, and it shows the
// template and the file's key names and stops. It never prints an existing file's values: settings can hold secrets in
// env, and this output goes into the conversation.

import { execFileSync } from 'node:child_process';
import { appendFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { devNull } from 'node:os';
import { dirname, join, resolve } from 'node:path';

const TEMPLATE = join(import.meta.dirname, 'template.json');
const RELATIVE = '.claude/settings.local.json';
/** What installing the plugin at local scope writes into the file, and nothing else. */
const INSTALL_KEYS = new Set(['enabledPlugins', 'extraKnownMarketplaces']);

const isObject = (v) => v !== null && typeof v === 'object' && !Array.isArray(v);
const pretty = (value) => `${JSON.stringify(value, null, 2)}\n`;

/** Runs git with no shell; `ok` only when it exits 0. Git missing or not a repo is just "not ok". */
function git(root, args) {
  try {
    const out = execFileSync('git', args, {
      cwd: root,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    });
    return { ok: true, out };
  } catch {
    return { ok: false, out: '' };
  }
}

/**
 * Whether the project's own .gitignore covers the file. Only a .gitignore counts: a global ignore or .git/info/exclude
 * doesn't travel with the repo. With -v git also reports a negation rule (`!pattern`), which means not ignored.
 */
function ignoreState(root) {
  if (!git(root, ['rev-parse', '--is-inside-work-tree']).ok) return 'no-git';
  const found = git(root, [
    '-c',
    `core.excludesFile=${devNull}`,
    'check-ignore',
    '-v',
    '--no-index',
    '--',
    RELATIVE,
  ]);
  const match = /^(.*?):\d+:(.*)\t/.exec(found.out);
  const fromGitignore = match !== null && /(^|[\\/])\.gitignore$/.test(match[1] ?? '');
  return found.ok && fromGitignore && !match[2]?.startsWith('!') ? 'covered' : 'add';
}

/**
 * The dotted names of every setting where `have` differs from `want`: missing, extra or changed. Names only: the values
 * never leave this function, so nothing secret can reach the output.
 */
function differences(want, have, name) {
  if (isObject(want) && isObject(have)) {
    const keys = new Set([...Object.keys(want), ...Object.keys(have)]);
    return [...keys].flatMap((key) => differences(want[key], have[key], `${name}.${key}`));
  }
  return JSON.stringify(want) === JSON.stringify(have) ? [] : [name];
}

/** What a write would do, worked out from scratch each time. */
function plan(root) {
  const template = JSON.parse(readFileSync(TEMPLATE, 'utf8'));
  const target = resolve(root, RELATIVE);
  const stop = (reason, keys = []) => ({ status: 'stop', reason, target, template, keys });

  if (git(root, ['ls-files', '--error-unmatch', '--', RELATIVE]).ok)
    return stop('git tracks this file, so these settings could end up in a commit');
  if (!existsSync(target))
    return { status: 'new', target, template, result: template, ignore: ignoreState(root) };

  const raw = readFileSync(target, 'utf8');
  let current;
  try {
    current = JSON.parse(raw);
  } catch {
    return stop('the file is not valid JSON');
  }
  if (!isObject(current)) return stop('the file is not a JSON object');
  const own = Object.keys(template);
  const others = Object.keys(current).filter((key) => !INSTALL_KEYS.has(key) && !own.includes(key));
  if (others.length > 0 || own.some((key) => Object.hasOwn(current, key))) {
    // The template's keys (or other settings) are already there: compare, never merge.
    const differ = [...others, ...own.flatMap((key) => differences(template[key], current[key], key))];
    if (differ.length === 0) return { status: 'done', target, template, ignore: ignoreState(root) };
    return stop('the file holds settings that differ from the template', differ);
  }
  return {
    status: 'merge',
    target,
    template,
    raw,
    result: { ...current, ...template },
    ignore: ignoreState(root),
  };
}

function write(root) {
  const p = plan(root);
  if (p.status === 'stop' || p.status === 'done') return p;
  mkdirSync(dirname(p.target), { recursive: true });
  try {
    if (p.status === 'new') {
      writeFileSync(p.target, pretty(p.result), { flag: 'wx' }); // never over a file that appeared meanwhile
    } else {
      if (readFileSync(p.target, 'utf8') !== p.raw)
        return { ...p, status: 'stop', reason: 'the file changed meanwhile' };
      writeFileSync(p.target, pretty(p.result));
    }
  } catch {
    return { ...p, status: 'stop', reason: 'the file could not be written, or appeared meanwhile' };
  }
  if (p.ignore === 'add') {
    const file = join(root, '.gitignore');
    const before = existsSync(file) ? readFileSync(file, 'utf8') : '';
    appendFileSync(file, `${before && !before.endsWith('\n') ? '\n' : ''}${RELATIVE}\n`);
  }
  return { ...p, written: true };
}

function report(p, root, writing) {
  const lines = ['World of Agents project setup', `Settings file: ${p.target}`, ''];
  if (p.status === 'done') {
    lines.push('Already set up, nothing changed. The file already holds exactly the template settings.');
    if (p.ignore === 'add')
      lines.push(`.gitignore doesn't cover the file: add the line ${RELATIVE} by hand.`);
    return lines.join('\n');
  }
  if (p.status === 'stop') {
    lines.push(`Stopped: ${p.reason}. Nothing was written.`);
    if (p.keys.length > 0)
      lines.push(
        `Settings that differ from the template (missing, extra or changed): ${p.keys.join(', ')}.`,
        "Their values aren't shown: settings can hold secrets.",
      );
    lines.push('', 'The template the skill would have added:', pretty(p.template).trimEnd());
    lines.push('', 'To use it, add those keys to the file yourself.');
    return lines.join('\n');
  }
  if (p.status === 'new')
    lines.push('There is no settings file yet. It will hold:', pretty(p.result).trimEnd());
  else
    lines.push(
      'The file holds only what installing the plugin put there (enabledPlugins, extraKnownMarketplaces).',
      'Those stay exactly as they are. The whole file will read:',
      pretty(p.result).trimEnd(),
    );
  lines.push('');
  if (p.ignore === 'covered') lines.push('.gitignore: already covers the file.');
  else if (p.ignore === 'add')
    lines.push(
      `.gitignore: the line ${RELATIVE} ${writing ? 'was added to' : 'goes into'} ${join(root, '.gitignore')}.`,
    );
  else lines.push('.gitignore: this is not a git repository, so there is nothing to ignore.');
  lines.push(
    '',
    writing
      ? 'Written. New sessions in this project start in Manual mode with subagent depth 2.'
      : 'Nothing has been written.',
  );
  return lines.join('\n');
}

const args = process.argv.slice(2);
if (args.length > 1 || (args.length === 1 && args[0] !== '--write')) {
  console.log('Usage: node setup.mjs [--write]');
  process.exitCode = 1;
} else {
  const root = process.cwd();
  const writing = args[0] === '--write';
  const result = writing ? write(root) : plan(root);
  console.log(report(result, root, writing && result.written === true));
}
