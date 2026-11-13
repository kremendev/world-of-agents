// World of Agents hall check. The team pane runs it as `node <plugin>/hooks/hall-check.mjs`, no arguments, at session
// start and at each of the Lead's turns, to learn what holds port 4319 before it starts a hall there.
//
// A 200 from /api/health proves nothing: any program on the port can send one. So it asks the way send.mjs does, with
// send.mjs's own code: whatever holds the port gets a random nonce and must answer HMAC-SHA256(token, nonce). Nothing
// else is sent, no redirect is followed, and the answer is capped.
//
// Its exit code is its answer:
//   0  our hall: it knows the token
//   3  nothing listens on 127.0.0.1:4319
//   4  something else holds the port, or it couldn't tell (no token, no answer in time, a wrong one): no hall to start
// With 0 it also prints the plugin version the hall states (3.2d), digits and dots only, one line, so the pane can tell
// this install's hall from another's: two installs on one PC share one token file. A hall from before 3.2.0 states
// none, and then it prints nothing. It never prints anything else. Node built-ins and send.mjs only.

import { randomBytes } from 'node:crypto';
import { realpathSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { askHall, readToken } from './send.mjs';

export const OURS = 0;
export const DOWN = 3;
export const TAKEN = 4;

const HALL = 'http://127.0.0.1:4319';
/** 127.0.0.1 refuses a closed port at once (19 ms on Windows, measured), so this only bounds a program that never answers. */
const TIMEOUT_MS = 2000;

/** A refused connection: nothing listens, so the port is free for a hall. */
const refused = (error) => error?.cause?.code === 'ECONNREFUSED';

/**
 * What holds the hall's port, and for our hall the version it states (null when it states none). Never throws. The
 * version comes from askHall(), which takes it only beside an answer that proves the token, and only in its exact shape.
 */
export async function hallAnswer({ hall = HALL, token = readToken(), timeoutMs = TIMEOUT_MS } = {}) {
  try {
    // With no token nothing can prove it's ours, but whatever answers still holds the port: ask with one nobody has.
    const { ours, version } = await askHall(
      hall,
      token ?? randomBytes(32).toString('base64url'),
      AbortSignal.timeout(timeoutMs),
    );
    return ours && token !== null ? { state: OURS, version } : { state: TAKEN, version: null };
  } catch (error) {
    return { state: refused(error) ? DOWN : TAKEN, version: null };
  }
}

/** What holds the hall's port: OURS, DOWN or TAKEN. Never throws. */
export async function hallState(options) {
  return (await hallAnswer(options)).state;
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
  hallAnswer().then(
    ({ state, version }) => {
      // Exit once the line has reached the pipe: process.exit() at once could cut it off.
      const line = state === OURS && version !== null ? `${version}\n` : '';
      process.stdout.write(line, () => process.exit(state));
    },
    () => process.exit(TAKEN),
  );
}
