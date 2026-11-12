// World of Agents past sessions (v3.2c, docs/v3.2-plan.md, L7). The team pane runs it only when Dima presses "Count past
// sessions", as `node <plugin>/hooks/ledger-past.mjs` in the plugin's folder, with {"before": <ms>} on stdin: when the
// live ledger began, so nothing is counted twice.
//
// It reads Claude Code's transcripts on this PC, <config>/projects/<project>/<session>.jsonl and
// <project>/<session>/subagents/*.jsonl, following no link, and from each assistant entry dated before the cut-off keeps
// its model id and its four usage counts, each response once (one response spans several lines with one message.id).
// It prints one line, a ledger of whole numbers per model id: {"since": <ms>, "models": {<id>: {...}}}, the shape the
// mod's pastOf() checks, and exits 0; or prints nothing and exits 1. It never prints, keeps or sends a line, a path or
// any other text of a transcript. No network, no writes. Node built-ins only.

import { createReadStream, lstatSync, readdirSync, realpathSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { createInterface } from 'node:readline';
import { fileURLToPath, pathToFileURL } from 'node:url';

const MAX_STDIN = 256;
/** As the mod's ledger: at most this many model ids, the rest together as OTHER. */
export const MAX_MODELS = 32;
const MODEL_ID = /^[a-z][a-z0-9.-]{0,63}$/;
export const OTHER = 'other';
/** A PC with more is counted up to here. */
export const MAX_FILES = 50_000;
const MAX_IDS = 5_000_000;
const COUNTS = ['inputTokens', 'outputTokens', 'cacheRead', 'cacheWrite', 'turns'];

const isObject = (v) => v !== null && typeof v === 'object' && !Array.isArray(v);
const count = (n) =>
  typeof n === 'number' && Number.isFinite(n) && n > 0 ? Math.min(Math.floor(n), Number.MAX_SAFE_INTEGER) : 0;
const plus = (a, b) => Math.min(a + b, Number.MAX_SAFE_INTEGER);

/** The cut-off in `raw` when it is exactly {"before": <whole ms>}, else null. */
export function beforeOf(raw) {
  if (typeof raw !== 'string' || raw.length > MAX_STDIN) return null;
  let v;
  try {
    v = JSON.parse(raw);
  } catch {
    return null;
  }
  if (!isObject(v) || Object.keys(v).join() !== 'before') return null;
  return Number.isSafeInteger(v.before) && v.before > 0 ? v.before : null;
}

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

const isFolder = (path) => {
  try {
    return lstatSync(path).isDirectory();
  } catch {
    return false;
  }
};

/** The transcript files under `projects`: each project's sessions and their subagents', no link followed, at most MAX_FILES. */
export function transcripts(projects) {
  const files = [];
  const add = (dir, entry) => {
    if (files.length < MAX_FILES && entry.isFile() && entry.name.endsWith('.jsonl'))
      files.push(join(dir, entry.name));
  };
  for (const project of entries(projects)) {
    if (!project.isDirectory()) continue;
    const dir = join(projects, project.name);
    for (const entry of entries(dir)) {
      if (entry.isFile()) add(dir, entry);
      else if (entry.isDirectory()) {
        const subagents = join(dir, entry.name, 'subagents');
        if (isFolder(subagents)) for (const sub of entries(subagents)) add(subagents, sub);
      }
    }
  }
  return files;
}

/** A new count: nothing yet, starting at the cut-off. */
export const emptyCount = (before) => ({ before, since: before, models: {}, seen: new Set() });

/** One transcript entry added to `tally` when it is an assistant response dated before the cut-off, not seen before. */
export function addEntry(tally, entry) {
  if (!isObject(entry) || entry.type !== 'assistant' || !isObject(entry.message)) return;
  const { message } = entry;
  if (!isObject(message.usage)) return;
  const at = typeof entry.timestamp === 'string' ? Date.parse(entry.timestamp) : NaN;
  if (!Number.isSafeInteger(at) || at < 0 || at >= tally.before) return;
  if (typeof message.id === 'string') {
    if (tally.seen.has(message.id) || tally.seen.size >= MAX_IDS) return;
    tally.seen.add(message.id);
  }
  const u = message.usage;
  const add = [
    count(u.input_tokens),
    count(u.output_tokens),
    count(u.cache_read_input_tokens),
    count(u.cache_creation_input_tokens),
  ];
  // A response that cost nothing (Claude Code's own error stand-ins) isn't a turn.
  if (add.every((n) => n === 0)) return;
  const id = typeof message.model === 'string' && MODEL_ID.test(message.model) ? message.model : OTHER;
  const room = Object.keys(tally.models).filter((m) => m !== OTHER).length < MAX_MODELS - 1;
  const key = Object.hasOwn(tally.models, id) || room ? id : OTHER;
  const was = Object.hasOwn(tally.models, key)
    ? tally.models[key]
    : { inputTokens: 0, outputTokens: 0, cacheRead: 0, cacheWrite: 0, turns: 0 };
  tally.models[key] = {
    inputTokens: plus(was.inputTokens, add[0]),
    outputTokens: plus(was.outputTokens, add[1]),
    cacheRead: plus(was.cacheRead, add[2]),
    cacheWrite: plus(was.cacheWrite, add[3]),
    turns: plus(was.turns, 1),
  };
  tally.since = Math.min(tally.since, at);
}

/** Every line of one transcript, read as JSON only when it could be an assistant response with usage. */
export async function addFile(tally, path) {
  const lines = createInterface({ input: createReadStream(path), crlfDelay: Infinity });
  for await (const line of lines) {
    if (!line.includes('"assistant"') || !line.includes('"usage"')) continue;
    let entry;
    try {
      entry = JSON.parse(line);
    } catch {
      continue;
    }
    addEntry(tally, entry);
  }
}

/** What it prints: the cut-off's ledger, whole numbers and model ids only, in a fixed key order. */
export function printed(tally) {
  const models = {};
  for (const [id, totals] of Object.entries(tally.models)) {
    models[id] = Object.fromEntries(COUNTS.map((k) => [k, totals[k]]));
  }
  return JSON.stringify({ since: tally.since, models });
}

/** Past sessions before `before`, counted from the transcripts under `projects`. */
export async function countPast(projects, before) {
  const tally = emptyCount(before);
  for (const file of transcripts(projects)) {
    try {
      await addFile(tally, file);
    } catch {
      // A file that went away or can't be read counts nothing.
    }
  }
  return tally;
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

async function main() {
  const before = beforeOf(await readStdin());
  if (before === null) return false;
  process.stdout.write(`${printed(await countPast(projectsDir(), before))}\n`);
  return true;
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
  main().then(
    (done) => {
      process.exitCode = done ? 0 : 1;
    },
    () => {
      process.exitCode = 1;
    },
  );
}
