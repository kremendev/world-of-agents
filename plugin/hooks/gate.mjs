// World of Agents quality gate (v3.3, docs/v3.3-plan.md). Claude Code runs it at every SubagentStop (a normal hook,
// not async, timeout 600 s in hooks.json) and pipes the hook payload as JSON on stdin.
//
// Opt-in per project: it does anything only when the project's settings turn it on (env WOA_QUALITY_GATE=1, written
// by /world-of-agents:setup-gates-write) and the agent stopping is the Designer or a dev. Then it runs exactly
// `npm run check` in the session's folder. If the check fails, it sends the agent back with the output (a block), at
// most MAX_RETRIES times per run; after that the agent stops and the hall shows the task failed. It also forwards the
// stop to the hall itself, with its verdict, because send.mjs skips the stops it gates.
//
// It answers only with a block or nothing, and any error answers nothing: a gate that breaks must never trap an agent.
// `--status` answers with an exit code only: 0 on, 5 off (the team pane asks, and reads no env of its own).

import { spawn } from 'node:child_process';
import { mkdirSync, readFileSync, readdirSync, realpathSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { allowlist, deliver, gated, readToken } from './send.mjs';

/** The one command a gate runs. Never anything from an agent, a file or the payload. */
export const CHECK = 'npm run check';
export const MAX_RETRIES = 3;
/** Under the hook's own 600 s, so the gate answers before Claude Code gives up on it. */
export const CHECK_TIMEOUT_MS = 540_000;
/** How much of the check's output goes back to the agent: its end, where the failures are. */
export const MAX_OUTPUT = 4000;
export const ON = 0;
export const OFF = 5;
const MAX_STDIN = 5 * 1024 * 1024;
const ID = /^[A-Za-z0-9_-]{1,128}$/;
const COUNTS = join(homedir(), '.world-of-agents', 'gates');
/** A count file older than this is a run long over. */
const STALE_MS = 2 * 24 * 60 * 60 * 1000;

const ESC = String.fromCharCode(27);
const COLOURS = new RegExp(`${ESC}\\[[0-9;?]*[A-Za-z]`, 'g');
/** Every control (Cc) and format (Cf) character but tab and line breaks, as Copy leaves them out. */
const HIDDEN = /[\p{Cc}\p{Cf}]/gu;

/** The check's output as the agent gets it: no colour codes, no hidden characters, the last MAX_OUTPUT characters. */
export function cleanOutput(text) {
  const plain = text.replace(COLOURS, '').replace(HIDDEN, (c) => (c === '\n' || c === '\t' ? c : ''));
  return plain.length > MAX_OUTPUT ? `…${plain.slice(-MAX_OUTPUT)}` : plain;
}

/** The block's first line, fixed: the team pane reads only this, never the output under it. */
export const firstLine = (retry) =>
  `World of Agents quality gate: npm run check failed, retry ${retry} of ${MAX_RETRIES}. Fix what it reports, then finish again.`;

/** Does the project have a `check` script? Without one the gate stands aside: an agent must never add scripts to pass. */
export function hasCheck(cwd) {
  try {
    const scripts = JSON.parse(readFileSync(join(cwd, 'package.json'), 'utf8'))?.scripts;
    return typeof scripts?.check === 'string';
  } catch {
    return false;
  }
}

/**
 * Ends the check and everything it started. On Windows the shell's own children outlive a plain kill and keep its output
 * open, so taskkill takes the whole tree; elsewhere the check leads its own process group.
 */
function stopTree(child) {
  try {
    if (process.platform === 'win32') {
      spawn('taskkill', ['/pid', String(child.pid), '/T', '/F'], { windowsHide: true, stdio: 'ignore' });
    } else {
      process.kill(-child.pid, 'SIGKILL');
    }
  } catch {
    child.kill();
  }
}

/** Runs CHECK in `cwd`. Resolves whether it passed and what it printed, cleaned. A timeout is a failure, answered at once. */
export function runCheck(cwd, { timeoutMs = CHECK_TIMEOUT_MS, command = CHECK } = {}) {
  return new Promise((done) => {
    let output = '';
    let settled = false;
    const settle = (result) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      done(result);
    };
    const keep = (chunk) => {
      output = (output + chunk.toString('utf8')).slice(-4 * MAX_OUTPUT);
    };
    // A shell, because Node won't start npm.cmd without one on Windows; the command is one fixed string.
    const child = spawn(command, {
      cwd,
      shell: true,
      windowsHide: true,
      detached: process.platform !== 'win32',
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    const timer = setTimeout(() => {
      stopTree(child);
      settle({
        passed: false,
        output: cleanOutput(
          `${output}\n${command} took longer than ${Math.round(timeoutMs / 1000)} s and was stopped.`,
        ),
      });
    }, timeoutMs);
    child.stdout.on('data', keep);
    child.stderr.on('data', keep);
    child.on('error', () =>
      settle({ passed: false, output: cleanOutput(`${output}\n${command} could not start.`) }),
    );
    child.on('close', (code) => settle({ passed: code === 0, output: cleanOutput(output) }));
  });
}

/** How many times this run has been sent back so far. A file per session, agent ids only, numbers only. */
function readCounts(session, dir) {
  try {
    const data = JSON.parse(readFileSync(join(dir, `${session}.json`), 'utf8'));
    return data && typeof data === 'object' && !Array.isArray(data) ? data : {};
  } catch {
    return {};
  }
}

function writeCounts(session, counts, dir) {
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, `${session}.json`), JSON.stringify(counts));
  for (const name of readdirSync(dir)) {
    try {
      if (Date.now() - statSync(join(dir, name)).mtimeMs > STALE_MS) rmSync(join(dir, name));
    } catch {
      // Another gate got there first.
    }
  }
}

/**
 * The gate for one stop: its answer for Claude Code (a block, or null to let the agent stop) and the verdict for the hall
 * (`retry`, `passed`, `failed`, or null when it stands aside). Pure but for the check and the count file.
 */
export async function decide(payload, env, { run = runCheck, dir = COUNTS } = {}) {
  if (!gated(payload, env)) return { answer: null, verdict: null };
  const { session_id: session, agent_id: agent, cwd } = payload;
  if (!ID.test(session ?? '') || !ID.test(agent ?? '') || typeof cwd !== 'string' || !hasCheck(cwd)) {
    return { answer: null, verdict: null };
  }
  const counts = readCounts(session, dir);
  const result = await run(cwd);
  const sentBack = Number.isSafeInteger(counts[agent]) ? counts[agent] : 0;
  if (result.passed) {
    delete counts[agent];
    writeCounts(session, counts, dir);
    return { answer: null, verdict: 'passed' };
  }
  if (sentBack >= MAX_RETRIES) {
    delete counts[agent];
    writeCounts(session, counts, dir);
    return { answer: null, verdict: 'failed' };
  }
  counts[agent] = sentBack + 1;
  writeCounts(session, counts, dir);
  const reason = `${firstLine(sentBack + 1)}\n\n${result.output}`;
  return { answer: JSON.stringify({ decision: 'block', reason }), verdict: 'retry' };
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
  const raw = await readStdin();
  if (!raw) return;
  const payload = JSON.parse(raw);
  if (!payload || typeof payload !== 'object' || !gated(payload, process.env)) return;
  let outcome = { answer: null, verdict: null };
  try {
    outcome = await decide(payload, process.env);
  } catch {
    // A gate that breaks lets the agent stop.
  }
  // send.mjs skipped this stop, so the hall hears it from here: with the verdict, or plain when the gate stood aside.
  const token = readToken();
  if (token)
    await deliver({ ...allowlist(payload), ...(outcome.verdict ? { gate: outcome.verdict } : {}) }, token);
  if (outcome.answer) process.stdout.write(outcome.answer);
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
  if (process.argv[2] === '--status') {
    process.exit(process.env.WOA_QUALITY_GATE === '1' ? ON : OFF);
  }
  process.on('uncaughtException', () => process.exit(0));
  process.on('unhandledRejection', () => process.exit(0));
  main()
    .catch(() => {})
    .finally(() => process.exit(0));
}
