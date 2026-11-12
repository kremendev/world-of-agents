// World of Agents hall check. The team pane runs it as `node <plugin>/hooks/hall-check.mjs`, no arguments, at session
// start and at each of the Lead's turns, to learn what holds port 4319 before it starts a hall there.
//
// A 200 from /api/health proves nothing: any program on the port can send one. So it asks the way send.mjs does, with
// send.mjs's own code: whatever holds the port gets a random nonce and must answer HMAC-SHA256(token, nonce). Nothing
// else is sent, no redirect is followed, and the answer is capped.
//
// It prints nothing. Its exit code is its whole answer:
//   0  our hall: it knows the token
//   3  nothing listens on 127.0.0.1:4319
//   4  something else holds the port, or it couldn't tell (no token, no answer in time, a wrong one): no hall to start
// Node built-ins and send.mjs only.

import { randomBytes } from 'node:crypto';
import { realpathSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { hallKnowsToken, readToken } from './send.mjs';

export const OURS = 0;
export const DOWN = 3;
export const TAKEN = 4;

const HALL = 'http://127.0.0.1:4319';
/** 127.0.0.1 refuses a closed port at once (19 ms on Windows, measured), so this only bounds a program that never answers. */
const TIMEOUT_MS = 2000;

/** A refused connection: nothing listens, so the port is free for a hall. */
const refused = (error) => error?.cause?.code === 'ECONNREFUSED';

/** What holds the hall's port: OURS, DOWN or TAKEN. Never throws. */
export async function hallState({ hall = HALL, token = readToken(), timeoutMs = TIMEOUT_MS } = {}) {
  try {
    // With no token nothing can prove it's ours, but whatever answers still holds the port: ask with one nobody has.
    const known = await hallKnowsToken(
      hall,
      token ?? randomBytes(32).toString('base64url'),
      AbortSignal.timeout(timeoutMs),
    );
    return known && token !== null ? OURS : TAKEN;
  } catch (error) {
    return refused(error) ? DOWN : TAKEN;
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
  hallState().then(
    (state) => process.exit(state),
    () => process.exit(TAKEN),
  );
}
