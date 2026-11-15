// World of Agents hall start (v3.5b, docs/v3.5-plan.md, H3). The team pane runs it as `node <plugin>/hooks/hall-start.mjs`,
// no arguments, in the plugin's folder, when nothing holds port 4319. It starts the plugin's prebuilt hall,
// <plugin>/hall/server.mjs in <plugin>/hall, with the very Node that runs this script, detached: a process group of its
// own, no console window, no input or output, not waited for. So the hall outlives this script, the session that ran it
// and any reload of the plugin, and stops itself when it has been idle (server/plugin-hall.ts). Then this script waits up
// to 5 s for the hall to answer the handshake (hall-check.mjs's own), and leaves.
//
// Its exit code is its answer, and it prints nothing:
//   0  our hall answers
//   3  nothing listens yet
//   4  something else holds the port, or it couldn't tell
// No shell, no argument or path from anywhere, no environment of its own. Node built-ins and hall-check.mjs only.

import { spawn } from 'node:child_process';
import { realpathSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { OURS, TAKEN, hallState } from './hall-check.mjs';

/** The plugin's prebuilt hall, in the plugin beside this script: never a path from anywhere else. */
export const SERVER = join(import.meta.dirname, '..', 'hall', 'server.mjs');
const WAIT_MS = 5000;
const STEP_MS = 200;

/** Starts `server` detached with this Node, in its own folder, and lets it go. Never throws. */
export function startHall(server = SERVER, start = spawn) {
  try {
    const child = start(process.execPath, [server], {
      cwd: dirname(server),
      detached: true,
      stdio: 'ignore',
      windowsHide: true,
    });
    child.on('error', () => {}); // it couldn't start: the wait says so
    child.unref();
  } catch {
    // The same: nothing will answer.
  }
}

const pause = (ms) => new Promise((done) => setTimeout(done, ms));

/** Asks until our hall answers or `waitMs` is over, and says what holds the port then. Never throws. */
export async function waitForHall({ ask = hallState, waitMs = WAIT_MS, stepMs = STEP_MS } = {}) {
  const end = Date.now() + waitMs;
  for (;;) {
    const state = await ask();
    if (state === OURS || Date.now() >= end) return state;
    await pause(stepMs);
  }
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
  startHall();
  waitForHall().then(
    (state) => process.exit(state),
    () => process.exit(TAKEN),
  );
}
