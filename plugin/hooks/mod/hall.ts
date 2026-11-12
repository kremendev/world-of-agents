// Node and the hall. The mod checks for Node at session start, then asks what holds port 4319 (at session start and at
// each of the Lead's turns) and starts the hall only when nothing does.
//
// Every command here is fixed: `node` with `--version` or with a script inside the plugin, no other argument, no shell,
// nothing from an agent, a file, the page or the environment. Each runs in the plugin's own folder. Claude Code already
// refuses a command found only in the working folder ("unsafe location (current directory)", checked on 2.1.318), so a
// node.exe in a project is never run; the plugin's folder is a second lock on that. Nothing any of them prints is kept,
// shown or sent anywhere, with three exceptions checked to the character: the digits of `node --version`, the version
// hall-check.mjs prints for our hall (3.2d), through hallVersionOf(), and (v3.2c, L7) the recount of whole numbers
// ledger-past.mjs prints, through recountOf().

import type { EngineInterface } from 'claude-code';

import { recountOf } from './ledger';
import type { Recount } from './ledger';
import type { PaneHall, PaneLedger, PaneNode } from './types';

/**
 * This plugin's version, as plugin.json states it: change both together (tests/plugin/mod.test.ts checks). The hall it
 * starts reports the same; a hall that reports another one is another install's (3.2d).
 */
export const PLUGIN_VERSION = '3.3.0';

export const NODE_VERSION = ['node', '--version'] as const;
/** hooks/hall-check.mjs: send.mjs's handshake, answered with an exit code only. */
export const checkCommand = (root: string) => ['node', `${root}/hooks/hall-check.mjs`];
/** The prebuilt hall: it finds its page beside itself and serves only what its manifest names. */
export const hallCommand = (root: string) => ['node', `${root}/hall/server.mjs`];
/** hooks/gate.mjs --status: are quality gates on in this project? An exit code only (v3.3). */
export const gateStatusCommand = (root: string) => ['node', `${root}/hooks/gate.mjs`, '--status'];
/** hooks/ledger-post.mjs: the token ledger's total, on stdin, posted to the hall after the handshake (v3.2). */
export const ledgerCommand = (root: string) => ['node', `${root}/hooks/ledger-post.mjs`];
/** hooks/ledger-past.mjs: Recount, every session's token counts from Claude Code's transcripts, numbers only. */
export const pastCommand = (root: string) => ['node', `${root}/hooks/ledger-past.mjs`];

/** hall-check.mjs's exit codes: our hall, nothing on the port, something else on it. */
const OURS = 0;
const DOWN = 3;
const TAKEN = 4;
const TIMEOUT_MS = 10_000;
/** Reading every transcript on the PC: 206 MB took under a second on 13 Nov. */
const PAST_TIMEOUT_MS = 120_000;

export type NodeFound = { node: PaneNode; nodeVersion: string | null };

/**
 * Is Node 20.19 or later on PATH? A `node` that can't start is missing; one that fails or doesn't answer with a version
 * is failed. Only digits and dots of what it printed are ever kept.
 */
export async function findNode($: EngineInterface): Promise<NodeFound> {
  let printed: string;
  try {
    const run = await $.process.run(NODE_VERSION, { cwd: $.plugin.root, timeoutMs: TIMEOUT_MS });
    if (run.exitCode !== 0) return { node: 'failed', nodeVersion: null };
    printed = run.stdout;
  } catch {
    return { node: 'missing', nodeVersion: null };
  }
  const version = /^v(\d{1,4})\.(\d{1,4})\.(\d{1,4})\s*$/.exec(printed);
  if (!version) return { node: 'failed', nodeVersion: null };
  const [major, minor, patch] = version.slice(1).map(Number) as [number, number, number];
  if (major > 20 || (major === 20 && minor >= 19)) return { node: 'ok', nodeVersion: null };
  return { node: 'old', nodeVersion: `${major}.${minor}.${patch}` };
}

/**
 * The ledger's total to the hall's page (v3.2): the numbers the mod built from the engine's token counts, on stdin,
 * never text. Nothing it prints is read. A post that fails costs nothing: the next turn sends it again.
 */
export async function sendLedger($: EngineInterface, totals: PaneLedger): Promise<void> {
  try {
    await $.process.run(ledgerCommand($.plugin.root), {
      cwd: $.plugin.root,
      stdin: JSON.stringify(totals),
      timeoutMs: TIMEOUT_MS,
    });
  } catch {
    // The hall's line waits for the next turn.
  }
}

/**
 * Recount (v3.2c, L7; per session since 3.2d), only on Dima's press: nothing on stdin, and back exactly a recount of whole
 * numbers per session and model id, or null. Anything else it prints is dropped, whole.
 */
export async function recountSessions($: EngineInterface): Promise<Recount | null> {
  try {
    const run = await $.process.run(pastCommand($.plugin.root), {
      cwd: $.plugin.root,
      timeoutMs: PAST_TIMEOUT_MS,
    });
    if (run.exitCode !== 0 || run.isStdoutTruncated) return null;
    return recountOf(run.stdout);
  } catch {
    return null;
  }
}

/** The version hall-check.mjs printed for our hall: exactly digits and dots, one line; null for anything else. */
export function hallVersionOf(printed: string): string | null {
  return /^(\d{1,4}\.\d{1,4}\.\d{1,4})\n?$/.exec(printed)?.[1] ?? null;
}

/** Which of two versions is newer: below 0 when `a` is older than `b`, 0 when they are the same. */
export function compareVersions(a: string, b: string): number {
  const x = a.split('.').map(Number);
  const y = b.split('.').map(Number);
  for (let i = 0; i < 3; i += 1) {
    const d = (x[i] ?? 0) - (y[i] ?? 0);
    if (d !== 0) return d;
  }
  return 0;
}

/**
 * Are quality gates on (v3.3)? The project's settings put WOA_QUALITY_GATE in the session's environment, which the child
 * inherits; it answers 0 for on and 5 for off. The mod reads no env itself, and nothing the child prints.
 */
export async function gateStatus($: EngineInterface): Promise<'unknown' | 'on' | 'off'> {
  try {
    const { exitCode } = await $.process.run(gateStatusCommand($.plugin.root), {
      cwd: $.plugin.root,
      timeoutMs: TIMEOUT_MS,
    });
    return exitCode === 0 ? 'on' : exitCode === 5 ? 'off' : 'unknown';
  } catch {
    return 'unknown';
  }
}

/**
 * Where the pane hears what the mod found. `version` goes with `other-version`: the version that hall states, null when
 * it states none (a hall from before 3.2.0).
 */
export type SetHall = (hall: PaneHall, version?: string | null) => Promise<unknown>;

/** A check is under way (and maybe a start): one at a time. */
let busy = false;
/** The hall this module started is still running. Unloading the module kills it, and with it this flag. */
let child = false;

type Found = { state: 'ours' | 'down' | 'taken' | 'unknown'; version: string | null };

/** What holds the port, as hall-check.mjs says, with our hall's version. A check that can't run says nothing. */
async function ask($: EngineInterface): Promise<Found> {
  try {
    const run = await $.process.run(checkCommand($.plugin.root), {
      cwd: $.plugin.root,
      timeoutMs: TIMEOUT_MS,
    });
    if (run.exitCode === OURS) return { state: 'ours', version: hallVersionOf(run.stdout) };
    if (run.exitCode === DOWN) return { state: 'down', version: null };
    if (run.exitCode === TAKEN) return { state: 'taken', version: null };
  } catch {
    // It couldn't run: no answer.
  }
  return { state: 'unknown', version: null };
}

/**
 * The hall is running only once it answered the handshake as this version (3.2d): another install's hall knows the same
 * token file, and is another version's. Until it answers, while our start is alive, it is starting.
 */
async function show(found: Found, setHall: SetHall): Promise<unknown> {
  if (found.state === 'ours') {
    return found.version === PLUGIN_VERSION ? setHall('running') : setHall('other-version', found.version);
  }
  return setHall(found.state === 'taken' ? 'taken' : child ? 'starting' : 'stopped');
}

/**
 * Checks the hall, and starts it when nothing holds the port and no start of ours is alive. Never two halls: one check
 * at a time here, and a hall that loses the race for the port to another session's exits without a word.
 * Called with the session's own `$` (register.tsx): a child started through a turn's would die if that turn were
 * interrupted.
 */
export async function keepHall($: EngineInterface, setHall: SetHall): Promise<void> {
  if (busy) return;
  busy = true;
  try {
    const found = await ask($);
    if (found.state === 'down' && !child) {
      await setHall('starting');
      start($, setHall);
    } else {
      await show(found, setHall);
    }
  } finally {
    busy = false;
  }
}

function start($: EngineInterface, setHall: SetHall): void {
  child = true;
  const recheck = async () => show(await ask($), setHall);
  void (async () => {
    try {
      const hall = $.process.spawn({ argv: hallCommand($.plugin.root), cwd: `${$.plugin.root}/hall` });
      let heard = false;
      // Read for the hall's whole life: output nobody reads would block it. What it prints is dropped. Its first line
      // means it listens; then the handshake, not the line, says whether the port holds our hall.
      for await (const piece of hall) {
        if (!heard && piece.stream === 'stdout') {
          heard = true;
          void recheck().catch(() => {});
        }
      }
    } catch {
      // It couldn't start.
    } finally {
      // It ended: it lost the race to another hall, failed, or was stopped. Say what holds the port now; the next turn
      // starts another if nothing does.
      child = false;
      await recheck().catch(() => {});
    }
  })();
}
