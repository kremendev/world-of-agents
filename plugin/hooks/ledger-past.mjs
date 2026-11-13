// World of Agents Recount (v3.2c, L7; per session since 3.2d, docs/v3.2-plan.md). The team pane runs it only when Dima
// presses "Recount", as `node <plugin>/hooks/ledger-past.mjs` in the plugin's folder, with nothing on stdin.
//
// It reads Claude Code's transcripts on this PC, <config>/projects/<project>/<session>.jsonl and
// <project>/<session>/subagents/*.jsonl, following no link, and from each assistant entry keeps its model id, its usage
// counts and when it was written, each response once (one response spans several lines with one message.id). Cache
// writes are split as the transcript says: 5-minute and 1-hour.
//
// It prints one line: {"since": <ms>, "sessions": {<session id>: {"settled": <bool>, "models": {<id>: {...}}}}}, the
// shape the mod's recountOf() checks, and exits 0. A session is settled when no turn can still be running in it: nothing
// written for 10 minutes, and each of its files' newest response ended its turn (no tool call waiting), or nothing
// written for a day. The mod replaces only settled sessions' counts, so a turn that ends after the count is never added
// on top of its own first part. It never prints, keeps or sends a line, a path or any other text of a transcript.
// No network, no writes. Node built-ins only.

import { createReadStream, lstatSync, readdirSync, realpathSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { createInterface } from 'node:readline';
import { fileURLToPath, pathToFileURL } from 'node:url';

/** As the mod's ledger: at most this many sessions (the newest), and model ids per session, the rest as OTHER. */
export const MAX_SESSIONS = 1000;
export const MAX_MODELS = 8;
const MODEL_ID = /^[a-z][a-z0-9.-]{0,63}$/;
/** A session id as Claude Code names its transcripts. Files named otherwise are no session's. */
const SESSION_ID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
export const OTHER = 'other';
/** A PC with more is counted up to here. */
export const MAX_FILES = 50_000;
const MAX_IDS = 5_000_000;
/** Settled: nothing written for this long, and no tool call waiting; or nothing written for STALE_MS. */
export const QUIET_MS = 10 * 60_000;
export const STALE_MS = 24 * 3_600_000;
/** How a response that leaves its turn running ends: a tool call to answer, or a pause. */
const RUNNING = new Set(['tool_use', 'pause_turn']);
const KEYS = ['inputTokens', 'outputTokens', 'cacheRead', 'cacheWrite5m', 'cacheWrite1h'];

const isObject = (v) => v !== null && typeof v === 'object' && !Array.isArray(v);
const count = (n) =>
  typeof n === 'number' && Number.isFinite(n) && n > 0 ? Math.min(Math.floor(n), Number.MAX_SAFE_INTEGER) : 0;
const plus = (a, b) => Math.min(a + b, Number.MAX_SAFE_INTEGER);

/** Where Claude Code keeps its transcripts: CLAUDE_CONFIG_DIR's projects folder when set, else ~/.claude/projects. */
export const projectsDir = (env = process.env) =>
  join(env.CLAUDE_CONFIG_DIR ? env.CLAUDE_CONFIG_DIR : join(homedir(), '.claude'), 'projects');

/** A folder's entries, none when it can't be read. Dirents tell links apart: a link is never a folder or a file here. */
function entries(dir) {
  try {
    return readdirSync(dir, { withFileTypes: true });
  } catch {
    return [];
  }
}

const statOf = (path) => {
  try {
    return lstatSync(path);
  } catch {
    return null;
  }
};

/**
 * The transcript files under `projects`, each with its session id and whether it is the main thread's: each project's
 * sessions and their subagents', no link followed, at most MAX_FILES, oldest first (so a response a resumed session
 * copied counts for the session it came from).
 */
export function transcripts(projects) {
  const files = [];
  const add = (dir, entry, session, main) => {
    if (files.length < MAX_FILES && entry.isFile() && entry.name.endsWith('.jsonl')) {
      const path = join(dir, entry.name);
      files.push({ path, session, main, at: statOf(path)?.mtimeMs ?? 0 });
    }
  };
  for (const project of entries(projects)) {
    if (!project.isDirectory()) continue;
    const dir = join(projects, project.name);
    for (const entry of entries(dir)) {
      if (entry.isFile()) {
        const session = entry.name.slice(0, -'.jsonl'.length);
        if (SESSION_ID.test(session)) add(dir, entry, session, true);
      } else if (entry.isDirectory() && SESSION_ID.test(entry.name)) {
        const subagents = join(dir, entry.name, 'subagents');
        if (statOf(subagents)?.isDirectory()) {
          for (const sub of entries(subagents)) add(subagents, sub, entry.name, false);
        }
      }
    }
  }
  return files.sort((a, b) => a.at - b.at).map(({ path, session, main }) => ({ path, session, main }));
}

/** A new count, made at `now`. */
export const newTally = (now) => ({ now, seen: new Set(), sessions: new Map() });

const sessionOf = (tally, id) => {
  let s = tally.sessions.get(id);
  if (!s) {
    s = { first: Infinity, last: -Infinity, running: false, models: {} };
    tally.sessions.set(id, s);
  }
  return s;
};

/**
 * One transcript entry of `file` ({session, main}) added to `tally` when it is an assistant response with usage. Every
 * such entry moves the file's newest response (`seen` or not); its counts go in once per message.id.
 */
export function addEntry(tally, entry, file, newest) {
  if (!isObject(entry) || entry.type !== 'assistant' || !isObject(entry.message)) return;
  const { message } = entry;
  if (!isObject(message.usage)) return;
  const at = typeof entry.timestamp === 'string' ? Date.parse(entry.timestamp) : NaN;
  if (!Number.isSafeInteger(at) || at < 0) return;
  if (newest && at >= newest.at) {
    newest.at = at;
    newest.stop = typeof message.stop_reason === 'string' ? message.stop_reason : null;
  }
  if (typeof message.id === 'string') {
    if (tally.seen.has(message.id) || tally.seen.size >= MAX_IDS) return;
    tally.seen.add(message.id);
  }
  const u = message.usage;
  const written = count(u.cache_creation_input_tokens);
  // The transcript's own split; whatever it leaves out goes where the live count infers it (the Lead's are 1-hour).
  const split = isObject(u.cache_creation) ? u.cache_creation : {};
  let w5m = count(split.ephemeral_5m_input_tokens);
  let w1h = count(split.ephemeral_1h_input_tokens);
  const rest = Math.max(0, written - w5m - w1h);
  if (file.main) w1h = plus(w1h, rest);
  else w5m = plus(w5m, rest);
  const add = [count(u.input_tokens), count(u.output_tokens), count(u.cache_read_input_tokens), w5m, w1h];
  // A response that cost nothing (Claude Code's own error stand-ins) counts nothing.
  if (add.every((n) => n === 0)) return;
  const s = sessionOf(tally, file.session);
  const id = typeof message.model === 'string' && MODEL_ID.test(message.model) ? message.model : OTHER;
  const room = Object.keys(s.models).filter((m) => m !== OTHER).length < MAX_MODELS - 1;
  const key = Object.hasOwn(s.models, id) || room ? id : OTHER;
  const was = Object.hasOwn(s.models, key) ? s.models[key] : Object.fromEntries(KEYS.map((k) => [k, 0]));
  s.models[key] = Object.fromEntries(KEYS.map((k, i) => [k, plus(was[k], add[i])]));
  s.first = Math.min(s.first, at);
}

/** Every line of one transcript, read as JSON only when it could be an assistant response with usage. */
export async function addFile(tally, file) {
  const newest = { at: -Infinity, stop: null };
  const lines = createInterface({ input: createReadStream(file.path), crlfDelay: Infinity });
  for await (const line of lines) {
    if (!line.includes('"assistant"') || !line.includes('"usage"')) continue;
    let entry;
    try {
      entry = JSON.parse(line);
    } catch {
      continue;
    }
    addEntry(tally, entry, file, newest);
  }
  if (newest.at === -Infinity) return;
  const s = sessionOf(tally, file.session);
  s.last = Math.max(s.last, newest.at);
  if (newest.stop === null || RUNNING.has(newest.stop)) s.running = true;
}

/** Whether no turn can still be running in a session, at `now`. */
export const settled = (s, now) => s.last < now - QUIET_MS && (!s.running || s.last < now - STALE_MS);

/** What it prints: the newest MAX_SESSIONS sessions, oldest first, whole numbers and ids only, in a fixed key order. */
export function printed(tally) {
  const kept = [...tally.sessions]
    .sort((a, b) => b[1].last - a[1].last)
    .slice(0, MAX_SESSIONS)
    .sort((a, b) => Math.min(a[1].first, a[1].last) - Math.min(b[1].first, b[1].last));
  const sessions = {};
  let since = Infinity;
  for (const [id, s] of kept) {
    const models = {};
    for (const [model, totals] of Object.entries(s.models)) {
      models[model] = Object.fromEntries(KEYS.map((k) => [k, totals[k]]));
    }
    sessions[id] = { settled: settled(s, tally.now), models };
    if (Number.isFinite(s.first)) since = Math.min(since, s.first);
  }
  return JSON.stringify({ since: Number.isFinite(since) ? since : tally.now, sessions });
}

/** Every session in the transcripts under `projects`, counted at `now`. */
export async function countAll(projects, now) {
  const tally = newTally(now);
  for (const file of transcripts(projects)) {
    try {
      await addFile(tally, file);
    } catch {
      // A file that went away or can't be read counts nothing.
    }
  }
  return tally;
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
  // An exit code, not process.exit(): the line on stdout must reach the pipe first.
  countAll(projectsDir(), Date.now()).then(
    (tally) => {
      process.stdout.write(`${printed(tally)}\n`);
      process.exitCode = 0;
    },
    () => {
      process.exitCode = 1;
    },
  );
}
