// World of Agents guard. Claude Code runs it before every Agent, Bash, PowerShell, Edit and Write call (a PreToolUse hook that is NOT
// async: an async hook runs in the background and can't block anything) and pipes the hook input as JSON on stdin.
//
// Deny-only: it prints a PreToolUse deny, or nothing. It never answers allow, because allow would skip your permission
// prompt; with no answer, Claude Code decides exactly as it would without the guard.
//
// Fail closed: input it can't read, a caller it doesn't know and an agent type not in its table are all denied, and so is
// any error it catches. hooks.json sets "onFailure": "block", so a crash, a timeout or a Node that won't start blocks the
// call too (Claude Code 2.1.295 or later; an older one lets the call through).
//
// It reads stdin and the team table (~/.world-of-agents/team/team.json, through team.mjs's strict schema), and answers.
// No network, no hall, no writes. Its imports are team.mjs and Node built-ins: to tell whether it runs as a script (the
// real path of the file Node started against its own), to look at BACKLOG.md before the Lead writes it (lstat: what
// kind of file, how many names, never its content), and to find where an edit really lands (paths, never content).

import { lstatSync, realpathSync } from 'node:fs';
import { homedir } from 'node:os';
import { basename, dirname, join, resolve, sep } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { LEADS, readTeam } from '../team/team.mjs';

const MAX_STDIN = 1024 * 1024;
const PREFIX = 'world-of-agents:';
const LEAD = `${PREFIX}lead`;
/** The team's specialists, a local plugin (v3.4): `woa-team:<guild>-<name>`. */
const TEAM_PREFIX = 'woa-team:';

/**
 * Who may start whom, by exact agent type. `main` is the main thread, which must be the Lead: real hook input from the
 * Lead's Agent calls has no agent_id and agent_type "world-of-agents:lead", whether the Lead is main through --agent or
 * through the plugin's settings.json (docs/v3-spike.md). `subagents` is keyed by a subagent's own agent_type, and kept
 * apart from `main` so no agent type can ever name the main thread's row. Every caller not listed may start nobody;
 * milestone 5 adds the guild leads. Claude Code's own agents (Explore, Plan, general-purpose, ...) are in no row, so they
 * are always denied: some run on Haiku.
 */
export const MAY_START = Object.freeze({
  main: Object.freeze([`${PREFIX}designer`, `${PREFIX}frontend`, `${PREFIX}backend`, `${PREFIX}reviewer`]),
});

/**
 * The subagents' rows (v3.4), from the team table: each guild lead may start its guild's specialists, and nobody else
 * may start anyone. A Map, so no agent type can name an inherited key.
 */
export function teamRows(team) {
  const rows = new Map();
  for (const [guild, lead] of Object.entries(LEADS)) {
    const specialists = team.specialists.filter((p) => p.guild === guild).map((p) => `${TEAM_PREFIX}${p.id}`);
    rows.set(`${PREFIX}${lead}`, Object.freeze(specialists));
  }
  return rows;
}

/**
 * A shell command that names a .env file: `.env`, `.env.<anything>`, `.envrc` (direnv's) or `.envrc.<anything>`, alone, at
 * the end of a path or quoted. Best effort:
 * it catches accidents and lazy prompt injection, not a determined attacker (a variable, an escape or a script that opens
 * the file itself gets past it). `process.env`, `printenv` and the word "environment" don't match.
 */
export const ENV_FILE =
  /(?:^|[\s'"`=:/\\<>|;&(){}[\],])\.env(?:rc)?(?:\.[\w.-]*)?(?=$|[\s'"`|;&()<>{}[\],:*?])/i;

/** A shell command that names the World of Agents folder (v3.4): the team and the hall's token live there. Best effort, as for .env. */
export const TEAM_FOLDER = /\.world-of-agents\b/i;

export const REASONS = Object.freeze({
  agent: 'World of Agents guard: that start is not in the team table of who may start whom.',
  env: 'World of Agents guard: this command names a .env or .envrc file, and the team never reads those.',
  input: 'World of Agents guard: this call could not be checked, so it is denied.',
  team: 'World of Agents guard: the team table (~/.world-of-agents/team/team.json) is missing or broken, so no agent may start. Type /world-of-agents:setup-team to create it.',
  folder:
    'World of Agents guard: this command names the World of Agents folder (~/.world-of-agents), which only Dima changes.',
  model:
    "World of Agents guard: the team's models are set in its agent files, so an Agent call may not choose one.",
  isolation:
    'World of Agents guard: an agent runs here or in a worktree, never remotely or in an isolation the guard does not know.',
  edit: 'World of Agents guard: the Lead/PM edits BACKLOG.md at the project root, and nothing else.',
  woa: 'World of Agents guard: that file is in the World of Agents folder (~/.world-of-agents), which only Dima changes.',
  backlog:
    'World of Agents guard: BACKLOG.md here is a link, a folder or a file with more than one name, so the Lead may not write it.',
});

/** The one answer the guard ever gives. */
export const denial = (reason) =>
  JSON.stringify({
    hookSpecificOutput: {
      hookEventName: 'PreToolUse',
      permissionDecision: 'deny',
      permissionDecisionReason: reason,
    },
  });

const isObject = (v) => v !== null && typeof v === 'object' && !Array.isArray(v);

/** What the caller may start: its table row, or undefined for a caller the guard doesn't know. */
function rowOf(input, team) {
  if (input.agent_id !== undefined) {
    const known = typeof input.agent_id === 'string' && typeof input.agent_type === 'string';
    return known ? teamRows(team).get(input.agent_type) : undefined;
  }
  return input.agent_type === LEAD ? MAY_START.main : undefined;
}

/**
 * The Agent tool's `model` argument takes precedence over the model an agent file sets, so a call that names one could
 * run the Reviewer on a weaker model, or anyone on a far dearer one. Whatever its value, a call that has it is denied:
 * the agent file's model always wins.
 *
 * `isolation` (v3.1 review): no isolation or "worktree" (a git worktree on this PC) only. "remote" runs the agent off this
 * PC, out of reach of these hooks and the hall, so it is denied, and so is any value the guard doesn't know, as for model.
 */
function checkAgent(input, team) {
  const call = isObject(input.tool_input) ? input.tool_input : undefined;
  if (typeof call?.subagent_type !== 'string') return denial(REASONS.input);
  // v3.4: no team table, no start at all, the Lead's included.
  if (team === null) return denial(REASONS.team);
  if (Object.hasOwn(call, 'model')) return denial(REASONS.model);
  if (Object.hasOwn(call, 'isolation') && call.isolation !== 'worktree') return denial(REASONS.isolation);
  return rowOf(input, team)?.includes(call.subagent_type) ? null : denial(REASONS.agent);
}

/** The agents whose edits the guard leaves to their own permission prompts (v3.3): the ones that write files. */
export const EDITORS = Object.freeze([`${PREFIX}designer`, `${PREFIX}frontend`, `${PREFIX}backend`]);

/** `file_path` is BACKLOG.md directly in `cwd`: exact, no `.` or `..` segment, case-blind on Windows only. */
function isBacklog(filePath, cwd) {
  if (typeof filePath !== 'string' || typeof cwd !== 'string' || cwd === '') return false;
  const norm = (p) => p.replace(/\\/g, '/').replace(/\/+$/, '');
  const got = norm(filePath);
  if (got.split('/').some((segment) => segment === '.' || segment === '..')) return false;
  const want = `${norm(cwd)}/BACKLOG.md`;
  return process.platform === 'win32' ? got.toLowerCase() === want.toLowerCase() : got === want;
}

/**
 * Edit and Write (v3.3). The Lead (the main thread) keeps the backlog and writes no code: it may edit BACKLOG.md at the
 * project root and nothing else. A subagent of ours that edits gets no answer: its own permission prompt decides. Anyone
 * else, an unknown caller included, is denied.
 */
/**
 * BACKLOG.md as it stands (v3.3 review): a plain file with one name, or none yet (the Lead's first write creates it). A
 * symbolic link, a junction, a folder, or a hard link (a file with more than one name) would carry the Lead's write to
 * another file, such as .claude/settings.local.json, so each is denied, and so is a file the guard can't look at. A dev
 * could still swap the file between this look and the write: the window is short, and the devs' own prompts decide.
 */
function plainOrMissing(filePath) {
  let stat;
  try {
    stat = lstatSync(filePath);
  } catch (error) {
    return error?.code === 'ENOENT';
  }
  return stat.isFile() && stat.nlink === 1;
}

/** The team's specialists that edit (v3.4): their edits go to their own permission prompts, as the guild leads' do. */
const teamEditors = (team) =>
  team === null ? [] : team.specialists.filter((p) => p.kind === 'edits').map((p) => `${TEAM_PREFIX}${p.id}`);

/** The deepest part of `path` that exists, through realpathSync.native, then the rest as written. */
function canonical(path) {
  const rest = [];
  let head = path;
  for (;;) {
    try {
      return join(realpathSync.native(head), ...rest);
    } catch (error) {
      if (error?.code !== 'ENOENT' && error?.code !== 'ENOTDIR') throw error;
    }
    const parent = dirname(head);
    if (parent === head) return path;
    rest.unshift(basename(head));
    head = parent;
  }
}

/**
 * Is `filePath` in ~/.world-of-agents (v3.4 review)? The team there loads as a plugin and the hall's token lives there, so
 * no agent edits it, whoever it is and whether or not the project ran the setup. Checked twice, case-blind on Windows:
 * as written, normalised (a leading ~ is home, `.` and `..` resolved against the call's cwd, a Windows \\?\ prefix
 * dropped), and as it really lands: the deepest existing part through realpathSync.native, so a junction, a link or an
 * 8.3 short name (WORLD-~1) that leads in is caught too. A path it can't resolve fails closed (the caller denies).
 */
export function inWoaFolder(filePath, cwd, home = homedir()) {
  const win = process.platform === 'win32';
  let path = filePath.replace(/^~(?=$|[\\/])/, () => home);
  if (win) path = path.replace(/^\\\\[?.]\\(?=[A-Za-z]:)/, '');
  const written = resolve(typeof cwd === 'string' && cwd !== '' ? cwd : home, path);
  const folder = resolve(home, '.world-of-agents');
  const fold = (p) => (win ? p.toLowerCase() : p);
  const within = (p, dir) =>
    fold(p) === fold(dir) || fold(p).startsWith(fold(dir).replace(/[\\/]+$/, '') + sep);
  return within(written, folder) || within(canonical(written), canonical(folder));
}

function checkEdit(input, team, home) {
  const filePath = isObject(input.tool_input) ? input.tool_input.file_path : undefined;
  if (typeof filePath !== 'string') return denial(REASONS.input);
  if (inWoaFolder(filePath, input.cwd, home)) return denial(REASONS.woa);
  if (input.agent_id !== undefined) {
    const ours =
      typeof input.agent_id === 'string' &&
      (EDITORS.includes(input.agent_type) || teamEditors(team).includes(input.agent_type));
    return ours ? null : denial(REASONS.edit);
  }
  if (input.agent_type !== LEAD) return denial(REASONS.edit);
  if (!isBacklog(filePath, input.cwd)) return denial(REASONS.edit);
  return plainOrMissing(filePath) ? null : denial(REASONS.backlog);
}

function checkShell(input) {
  const command = isObject(input.tool_input) ? input.tool_input.command : undefined;
  if (typeof command !== 'string') return denial(REASONS.input);
  if (ENV_FILE.test(command)) return denial(REASONS.env);
  return TEAM_FOLDER.test(command) ? denial(REASONS.folder) : null;
}

/**
 * The answer for one hook input: a deny to print, or null for no answer. `raw` is null when stdin was too big. `team` is the
 * team table, read from ~/.world-of-agents/team/team.json when not given (null: missing or broken). `home` is the home
 * folder, for tests.
 */
export function decide(raw, team, home = homedir()) {
  const table = () => (team === undefined ? readTeam() : team);
  try {
    if (typeof raw !== 'string') return denial(REASONS.input);
    const input = JSON.parse(raw);
    if (!isObject(input)) return denial(REASONS.input);
    if (input.tool_name === 'Agent') return checkAgent(input, table());
    if (input.tool_name === 'Bash' || input.tool_name === 'PowerShell') return checkShell(input);
    if (input.tool_name === 'Edit' || input.tool_name === 'Write') return checkEdit(input, table(), home);
    return denial(REASONS.input);
  } catch {
    return denial(REASONS.input);
  }
}

async function readStdin() {
  const chunks = [];
  let size = 0;
  for await (const chunk of process.stdin) {
    size += chunk.length;
    if (size > MAX_STDIN) return null;
    chunks.push(chunk);
  }
  return Buffer.concat(chunks).toString('utf8');
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
  readStdin()
    .then(decide, () => denial(REASONS.input))
    .then((answer) => {
      if (answer) process.stdout.write(answer);
    });
}
