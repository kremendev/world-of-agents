// World of Agents quality gates: the switch (v3.3, docs/v3.3-plan.md). Claude Code runs it, never the model:
//   node gates.mjs         shows what gates do and whether they are on     (/world-of-agents:setup-gates)
//   node gates.mjs --on    turns them on: env.WOA_QUALITY_GATE = "1"        (/world-of-agents:setup-gates-write)
//   node gates.mjs --off   turns them off: removes that key                 (/world-of-agents:setup-gates-off)
//
// It works only on a project that /world-of-agents:setup-project-write already set up, changes only its own env key,
// keeps every other setting as it is, and never prints a value from the file (settings can hold secrets, and this
// output goes into the conversation). It exits 0 whenever it printed a result: a non-zero exit aborts the skill.

import { readFileSync, realpathSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

export const RELATIVE = '.claude/settings.local.json';
export const KEY = 'WOA_QUALITY_GATE';
/** The setup's own env key: a file that has it was set up by /world-of-agents:setup-project-write. */
const SET_UP = 'CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH';

export const ABOUT = [
  'Quality gates run this project\'s "npm run check" each time the Designer, the Frontend dev or the Backend dev',
  'finishes a task. If it fails, the agent gets the output and fixes it, at most 3 times; after that the task shows as',
  'failed for you. Only "npm run check", and only in a project that has that script.',
  '',
  'The check runs without asking you. An agent that changes package.json, a test file or a config changes what runs.',
  "Read every edit you approve, and keep gates off where you don't. The team pane warns about them while a session",
  'runs in Auto or Accept edits.',
];

const isObject = (v) => v !== null && typeof v === 'object' && !Array.isArray(v);

/** What the file says about gates, or why it can't say: `missing`, `broken`, `not-set-up`, `on` or `off`. */
export function stateOf(settings) {
  if (settings === undefined) return 'missing';
  if (!isObject(settings)) return 'broken';
  if (!isObject(settings.env) || !Object.hasOwn(settings.env, SET_UP)) return 'not-set-up';
  return settings.env[KEY] === '1' ? 'on' : 'off';
}

function load(root) {
  let text;
  try {
    text = readFileSync(join(root, RELATIVE), 'utf8');
  } catch {
    return undefined;
  }
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

/** Runs the switch in project folder `root` and returns what to print. `mode` is undefined, 'on' or 'off'. */
export function gates(root, mode) {
  const settings = load(root);
  const state = stateOf(settings);
  if (state === 'missing' || state === 'not-set-up') {
    return ['Not set up yet: type /world-of-agents:setup-project-write first. Nothing changed.'];
  }
  if (state === 'broken') return [`Stopped: ${RELATIVE} isn't a JSON object. Nothing changed.`];
  if (mode === undefined) {
    return [
      ...ABOUT,
      '',
      state === 'on'
        ? 'Quality gates are on in this project. To turn them off, type /world-of-agents:setup-gates-off.'
        : 'Quality gates are off in this project. To turn them on, type /world-of-agents:setup-gates-write.',
    ];
  }
  if (mode === 'on' && state === 'on') return ['Already on. Nothing changed.'];
  if (mode === 'off' && state === 'off' && !Object.hasOwn(settings.env, KEY))
    return ['Already off. Nothing changed.'];
  const env = { ...settings.env };
  if (mode === 'on') env[KEY] = '1';
  else delete env[KEY];
  writeFileSync(join(root, RELATIVE), `${JSON.stringify({ ...settings, env }, null, 2)}\n`);
  return mode === 'on'
    ? [`Turned on: env.${KEY} in ${RELATIVE}. It applies from the next new session in this project.`]
    : [
        `Turned off: env.${KEY} removed from ${RELATIVE}. It applies from the next new session in this project.`,
      ];
}

/**
 * True only when Node was started on this very file: the real path of process.argv[1] is this module's own. A name check
 * (endsWith) also fires for any file whose name ends the same, such as xguard.mjs importing guard.mjs.
 */
function runAsScript() {
  try {
    const script = process.argv[1];
    if (typeof script !== 'string' || script === '') return false;
    const own = pathToFileURL(realpathSync(fileURLToPath(import.meta.url))).href;
    return pathToFileURL(realpathSync(script)).href === own;
  } catch {
    return false;
  }
}

// Run only as a script, so tests can import its functions.
if (runAsScript()) {
  const args = process.argv.slice(2);
  const mode = args[0] === '--on' ? 'on' : args[0] === '--off' ? 'off' : undefined;
  if (args.length > 1 || (args.length === 1 && mode === undefined)) {
    console.log('Usage: node gates.mjs [--on | --off]');
    process.exit(1);
  }
  try {
    console.log(gates(process.cwd(), mode).join('\n'));
  } catch {
    console.log('Stopped: the settings file could not be read or written. Nothing changed.');
  }
}
