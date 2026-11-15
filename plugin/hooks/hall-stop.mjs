// World of Agents hall stop (v3.5b, docs/v3.5-plan.md, H2, H5). The team pane runs it as `node <plugin>/hooks/hall-stop.mjs`,
// no arguments, in the plugin's folder, when the hall on port 4319 knows the token but states an older version, 3.5.0 or
// later. It asks that hall to stop the way send.mjs posts a hook: only after the hall proves it holds the token, with the
// token, no redirect, the reply thrown away. It states this plugin's own version, read from plugin.json beside it, and the
// hall stops only for a newer one, so an older pane can never stop a newer hall. Never by a process id. Then it waits up
// to 5 s for the port to be free, and leaves.
//
// Its exit code is its answer, and it prints nothing:
//   0  that hall stopped, and the port is free
//   3  nothing listens
//   4  anything else: not our hall, no token, no answer, or the port still held after the wait
//   5  the hall refused: this plugin isn't newer than it
// Node built-ins, hall-check.mjs and send.mjs only.

import { readFileSync, realpathSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { DOWN, TAKEN, hallState } from './hall-check.mjs';
import { hallKnowsToken, readToken } from './send.mjs';

export const STOPPED = 0;
export const REFUSED = 5;

const HALL = 'http://127.0.0.1:4319';
const TIMEOUT_MS = 2000;
const WAIT_MS = 5000;
const STEP_MS = 200;
/** This plugin's own plugin.json, beside this script's folder. */
const PLUGIN_JSON = join(import.meta.dirname, '..', '.claude-plugin', 'plugin.json');
const VERSION = /^\d{1,4}\.\d{1,4}\.\d{1,4}$/;

/** This plugin's version, digits and dots only, or null. */
export function ownVersion(file = PLUGIN_JSON) {
  try {
    const version = JSON.parse(readFileSync(file, 'utf8'))?.version;
    return typeof version === 'string' && VERSION.test(version) ? version : null;
  } catch {
    return null;
  }
}

/** Asks the hall to stop, once it has proved itself, and says how it answered. Never throws. */
export async function askToStop(version, token, { hall = HALL, timeoutMs = TIMEOUT_MS } = {}) {
  const signal = AbortSignal.timeout(timeoutMs);
  try {
    if (!(await hallKnowsToken(hall, token, signal))) return TAKEN;
    const res = await fetch(`${hall}/api/stop`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ version }),
      redirect: 'error',
      signal,
    });
    await res.body?.cancel(); // only the status is read
    if (res.status === 204) return STOPPED;
    return res.status === 409 ? REFUSED : TAKEN;
  } catch (error) {
    return error?.cause?.code === 'ECONNREFUSED' ? DOWN : TAKEN;
  }
}

const pause = (ms) => new Promise((done) => setTimeout(done, ms));

/** Asks until nothing listens or `waitMs` is over. True when the port is free. Never throws. */
export async function waitForFree({ ask = hallState, waitMs = WAIT_MS, stepMs = STEP_MS } = {}) {
  const end = Date.now() + waitMs;
  for (;;) {
    if ((await ask()) === DOWN) return true;
    if (Date.now() >= end) return false;
    await pause(stepMs);
  }
}

async function main() {
  const version = ownVersion();
  const token = readToken();
  if (version === null || token === null) return TAKEN;
  const answer = await askToStop(version, token);
  if (answer !== STOPPED) return answer;
  return (await waitForFree()) ? STOPPED : TAKEN;
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

// Run only as a script, so tests can import it.
if (runAsScript()) {
  process.on('uncaughtException', () => process.exit(TAKEN));
  process.on('unhandledRejection', () => process.exit(TAKEN));
  main().then(
    (code) => process.exit(code),
    () => process.exit(TAKEN),
  );
}
