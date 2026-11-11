// World of Agents ledger post (v3.2, docs/v3.2-plan.md). The mod runs it after the Lead's turns and at session start,
// with the ledger's totals on stdin: numbers the mod built from the engine's token counts, never text. It checks they
// are exactly that shape, then posts them to the hall the way send.mjs posts a hook: only after the hall proves it holds
// the token, no redirect, the reply thrown away. It prints nothing and always exits 0. Node built-ins and send.mjs only.

import { realpathSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { hallKnowsToken, readToken } from './send.mjs';

const HALL = 'http://127.0.0.1:4319';
const TIMEOUT_MS = 800;
/** The totals are a few hundred bytes. Anything bigger is not from the mod. */
export const MAX_TOTALS = 4096;
const MODEL = /^(?:other|[a-z][a-z0-9.-]{0,63})$/;
const PRICED_ON = /^\d{1,2} [A-Z][a-z]{2} \d{4}$/;
const KEYS = ['cents', 'pricedOn', 'since', 'tokensIn', 'tokensOut', 'unpriced'].join();

const count = (n) => Number.isSafeInteger(n) && n >= 0;
const plain = (v) => v !== null && typeof v === 'object' && !Array.isArray(v);
const keysAre = (v, keys) => Object.keys(v).sort().join() === keys;

/** The totals in `raw` when they are exactly the mod's shape, else null. */
export function totalsOf(raw) {
  if (typeof raw !== 'string' || raw.length > MAX_TOTALS) return null;
  let v;
  try {
    v = JSON.parse(raw);
  } catch {
    return null;
  }
  if (!plain(v) || !keysAre(v, KEYS)) return null;
  if (![v.since, v.tokensIn, v.tokensOut, v.cents].every(count)) return null;
  if (typeof v.pricedOn !== 'string' || !PRICED_ON.test(v.pricedOn)) return null;
  if (!Array.isArray(v.unpriced) || v.unpriced.length > 3) return null;
  const unpricedOk = v.unpriced.every(
    (u) =>
      plain(u) &&
      keysAre(u, 'model,tokens') &&
      typeof u.model === 'string' &&
      MODEL.test(u.model) &&
      count(u.tokens),
  );
  return unpricedOk ? v : null;
}

/**
 * Posts the totals once the hall has proved itself, and says whether it did. Never throws. Both requests share one time
 * limit, and neither follows a redirect.
 */
export async function postLedger(totals, token, { hall = HALL, timeoutMs = TIMEOUT_MS } = {}) {
  const signal = AbortSignal.timeout(timeoutMs);
  try {
    if (!(await hallKnowsToken(hall, token, signal))) return false;
    const res = await fetch(`${hall}/api/ledger`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(totals),
      redirect: 'error',
      signal,
    });
    await res.body?.cancel(); // the reply is never read
    return true;
  } catch {
    return false;
  }
}

async function readStdin() {
  const chunks = [];
  let size = 0;
  for await (const chunk of process.stdin) {
    size += chunk.length;
    if (size > MAX_TOTALS) return null;
    chunks.push(chunk);
  }
  return Buffer.concat(chunks).toString('utf8');
}

async function main() {
  const totals = totalsOf(await readStdin());
  if (!totals) return;
  const token = readToken();
  if (!token) return;
  await postLedger(totals, token);
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
  process.on('uncaughtException', () => process.exit(0));
  process.on('unhandledRejection', () => process.exit(0));
  main()
    .catch(() => {})
    .finally(() => process.exit(0));
}
