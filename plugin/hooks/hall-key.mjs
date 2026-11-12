// World of Agents hall key (v3.4c, docs/v3.4-plan.md, T8). The team pane runs it when Dima presses "Change skills", as
// `node <plugin>/hooks/hall-key.mjs` in the plugin's folder, with {"key": "<43 base64url characters>"} on stdin: a random
// one-time key the mod made. It hands the key to the hall the way send.mjs posts a hook: only after the hall proves it
// holds the token, with the token, no redirect, the reply thrown away. The key never goes on a command line or in an
// environment variable. The hall then takes it once, within 60 seconds, from the page the pane's link opens.
//
// It prints nothing. Its exit code is its whole answer: 0 the hall has the key, 1 it doesn't. Node built-ins and send.mjs only.

import { realpathSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { hallKnowsToken, readToken } from './send.mjs';

const HALL = 'http://127.0.0.1:4319';
const TIMEOUT_MS = 2000;
const MAX_STDIN = 256;
const KEY = /^[A-Za-z0-9_-]{43}$/;

/** The key in `raw` when it is exactly {"key": "<43 base64url characters>"}, else null. */
export function keyOf(raw) {
  if (typeof raw !== 'string' || raw.length > MAX_STDIN) return null;
  let v;
  try {
    v = JSON.parse(raw);
  } catch {
    return null;
  }
  if (v === null || typeof v !== 'object' || Array.isArray(v) || Object.keys(v).join() !== 'key') return null;
  return typeof v.key === 'string' && KEY.test(v.key) ? v.key : null;
}

/** Hands the key to the hall once it has proved itself, and says whether the hall took it. Never throws. */
export async function postKey(key, token, { hall = HALL, timeoutMs = TIMEOUT_MS } = {}) {
  const signal = AbortSignal.timeout(timeoutMs);
  try {
    if (!(await hallKnowsToken(hall, token, signal))) return false;
    const res = await fetch(`${hall}/api/key`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ key }),
      redirect: 'error',
      signal,
    });
    await res.body?.cancel(); // only the status is read
    return res.status === 204;
  } catch {
    return false;
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

async function main() {
  const key = keyOf(await readStdin());
  if (!key) return false;
  const token = readToken();
  if (!token) return false;
  return postKey(key, token);
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
  process.on('uncaughtException', () => process.exit(1));
  process.on('unhandledRejection', () => process.exit(1));
  main().then(
    (taken) => process.exit(taken ? 0 : 1),
    () => process.exit(1),
  );
}
