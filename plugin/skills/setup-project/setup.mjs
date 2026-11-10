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
// puts there (enabledPlugins, extraKnownMarketplaces), which it keeps exactly as it is. The settings it manages are
// `permissions` and its own env keys. When the file's managed settings are exactly those of an earlier template version
// (versions/), it replaces them with the current template and leaves every other setting as it is. Anything else, and it
// shows the template and the settings' names and stops. It never prints an existing file's values: settings can hold
// secrets in env, and this output goes into the conversation. An upgrade shows only rules and values from the two
// template versions, which the file matched exactly.

import { execFileSync } from 'node:child_process';
import { appendFileSync, existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { devNull } from 'node:os';
import { dirname, join, resolve } from 'node:path';

const TEMPLATE = join(import.meta.dirname, 'template.json');
/** Every earlier template.json main had, oldest first, byte for byte: 1.json, 2.json, … template.json is the newest. */
const VERSIONS = join(import.meta.dirname, 'versions');
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

/** The earlier templates, oldest first. */
const pastTemplates = () =>
  readdirSync(VERSIONS)
    .filter((name) => /^\d+\.json$/.test(name))
    .sort((a, b) => parseInt(a, 10) - parseInt(b, 10))
    .map((name) => JSON.parse(readFileSync(join(VERSIONS, name), 'utf8')));

/** The settings the templates manage, shaped like a template: `permissions`, and the env keys in `ours`. */
const managed = (settings, ours) => ({
  permissions: settings.permissions,
  env: Object.fromEntries(ours.map((key) => [key, isObject(settings.env) ? settings.env[key] : undefined])),
});

/** The dotted names of the managed settings where `have` differs from `want`. */
const managedDifferences = (want, have) =>
  ['permissions', 'env'].flatMap((key) => differences(want[key], have[key], key));

/** The names of every setting the templates don't manage: top-level keys, and other env keys as env.NAME. */
function otherNames(settings, ours) {
  return Object.keys(settings).flatMap((key) => {
    if (key === 'permissions') return [];
    if (key !== 'env') return [key];
    if (!isObject(settings.env)) return ['env'];
    return Object.keys(settings.env)
      .filter((name) => !ours.includes(name))
      .map((name) => `env.${name}`);
  });
}

/** The file with its managed settings replaced by the template's, every other setting where it was. */
function upgraded(settings, template, ours) {
  const env = isObject(settings.env) ? { ...settings.env } : {};
  for (const key of ours) if (!Object.hasOwn(template.env, key)) delete env[key];
  Object.assign(env, template.env);
  return { ...settings, permissions: template.permissions, env };
}

/** What going from one template version to another changes. Template values only, never the file's. */
function changes(from, to) {
  const lines = [];
  const kinds = new Set([...Object.keys(from.permissions), ...Object.keys(to.permissions)]);
  for (const kind of kinds) {
    const was = from.permissions[kind];
    const now = to.permissions[kind];
    if (Array.isArray(was) || Array.isArray(now)) {
      for (const rule of now ?? [])
        if (!(was ?? []).includes(rule)) lines.push(`adds the ${kind} rule ${rule}`);
      for (const rule of was ?? [])
        if (!(now ?? []).includes(rule)) lines.push(`removes the ${kind} rule ${rule}`);
    } else if (now === undefined) {
      lines.push(`removes permissions.${kind}`);
    } else if (JSON.stringify(was) !== JSON.stringify(now)) {
      lines.push(`sets permissions.${kind} to ${JSON.stringify(now)}`);
    }
  }
  for (const key of new Set([...Object.keys(from.env), ...Object.keys(to.env)])) {
    if (!Object.hasOwn(to.env, key)) lines.push(`removes env.${key}`);
    else if (from.env[key] !== to.env[key]) lines.push(`sets env.${key} to ${JSON.stringify(to.env[key])}`);
  }
  return lines.length > 0 ? lines : ['adds and removes no rule: only their order changes'];
}

/** What a write would do, worked out from scratch each time. */
function plan(root) {
  const template = JSON.parse(readFileSync(TEMPLATE, 'utf8'));
  const past = pastTemplates();
  const ours = [...new Set([...past, template].flatMap((version) => Object.keys(version.env)))];
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
  const others = otherNames(current, ours);
  const want = managed(template, ours);
  const present =
    Object.hasOwn(current, 'permissions') ||
    (isObject(current.env) && ours.some((key) => Object.hasOwn(current.env, key)));
  if (!present) {
    // None of our settings yet: add them only to a file that holds nothing but what an install wrote.
    const blocking = others.filter((name) => !INSTALL_KEYS.has(name));
    if (blocking.length > 0)
      return stop('the file holds settings that differ from the template', [
        ...blocking,
        ...managedDifferences(want, managed(current, ours)),
      ]);
    return {
      status: 'merge',
      target,
      template,
      raw,
      result: { ...current, ...template },
      ignore: ignoreState(root),
    };
  }
  // Our settings are there: they must be exactly the current template's, or exactly an earlier version's. Never a merge.
  const have = managed(current, ours);
  const differ = managedDifferences(want, have);
  if (differ.length === 0) return { status: 'done', target, template, others, ignore: ignoreState(root) };
  const from = past.findIndex((version) => managedDifferences(managed(version, ours), have).length === 0);
  if (from === -1) return stop('the file holds settings that differ from the template', differ);
  return {
    status: 'upgrade',
    target,
    template,
    raw,
    from: from + 1,
    to: past.length + 1,
    changes: changes(past[from], template),
    others,
    result: upgraded(current, template, ours),
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
  const kept = (others) =>
    others.length > 0 ? [`Every other setting stays exactly as it is: ${others.join(', ')}.`] : [];
  if (p.status === 'done') {
    lines.push('Already set up, nothing changed. The file already holds exactly the template settings.');
    lines.push(...kept(p.others));
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
  else if (p.status === 'upgrade')
    lines.push(
      writing
        ? `Upgraded the settings from version ${p.from} of the template to version ${p.to}, the current one. The upgrade:`
        : `The file holds version ${p.from} of the template's settings. Writing upgrades them to version ${p.to}, the current one. The upgrade:`,
      ...p.changes.map((change) => `- ${change}`),
      ...kept(p.others),
    );
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
