// Node and the hall. The mod checks for Node at session start, then asks what holds port 4319 (at session start and at
// each of the Lead's turns) and starts the hall only when nothing does.
//
// Every command here is fixed: `node` with `--version` or with a script inside the plugin, no other argument, no shell,
// nothing from an agent, a file, the page or the environment. Each runs in the plugin's own folder. Claude Code already
// refuses a command found only in the working folder ("unsafe location (current directory)", checked on 2.1.318), so a
// node.exe in a project is never run; the plugin's folder is a second lock on that. Nothing any of them prints is kept,
// shown or sent anywhere.

import type { EngineInterface } from 'claude-code';

import type { PaneHall, PaneNode } from './types';

export const NODE_VERSION = ['node', '--version'] as const;
/** hooks/hall-check.mjs: send.mjs's handshake, answered with an exit code only. */
export const checkCommand = (root: string) => ['node', `${root}/hooks/hall-check.mjs`];
/** The prebuilt hall: it finds its page beside itself and serves only what its manifest names. */
export const hallCommand = (root: string) => ['node', `${root}/hall/server.mjs`];

/** hall-check.mjs's exit codes: our hall, nothing on the port, something else on it. */
const OURS = 0;
const DOWN = 3;
const TAKEN = 4;
const TIMEOUT_MS = 10_000;

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

/** Where the pane hears what the mod found. */
export type SetHall = (hall: PaneHall) => Promise<unknown>;

/** A check is under way (and maybe a start): one at a time. */
let busy = false;
/** The hall this module started is still running. Unloading the module kills it, and with it this flag. */
let child = false;

/** What holds the port, as hall-check.mjs says. A check that can't run says nothing. */
async function ask($: EngineInterface): Promise<'ours' | 'down' | 'taken' | 'unknown'> {
  try {
    const { exitCode } = await $.process.run(checkCommand($.plugin.root), {
      cwd: $.plugin.root,
      timeoutMs: TIMEOUT_MS,
    });
    if (exitCode === OURS) return 'ours';
    if (exitCode === DOWN) return 'down';
    if (exitCode === TAKEN) return 'taken';
  } catch {
    // It couldn't run: no answer.
  }
  return 'unknown';
}

/** The hall is running only once it answered the handshake; until then, while our start is alive, it is starting. */
const shown = (found: Awaited<ReturnType<typeof ask>>): PaneHall =>
  found === 'ours' ? 'running' : found === 'taken' ? 'taken' : child ? 'starting' : 'stopped';

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
    if (found === 'down' && !child) {
      await setHall('starting');
      start($, setHall);
    } else {
      await setHall(shown(found));
    }
  } finally {
    busy = false;
  }
}

function start($: EngineInterface, setHall: SetHall): void {
  child = true;
  const recheck = async () => setHall(shown(await ask($)));
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
