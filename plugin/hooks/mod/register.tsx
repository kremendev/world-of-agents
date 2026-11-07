// The World of Agents mod: the team pane. It watches and shows; it never decides.
//
// Every hook hands back exactly what `next` resolved to: no answer on tool.call, no decision on tool.check, no change
// to a spawn, a prompt or a turn. The one prompt it ever submits is a preset's fixed text (presets.ts). It has no
// network, no files and no processes (the hall start and the voice are 2c). register.test.tsx pins all of it, and
// scripts/mod-surface.json lists every event and $ call it uses.

import { atom, read, update } from 'claude-code';
import type { EngineInterface, Register } from 'claude-code';

import { drawPane } from './pane';
import { sendPreset } from './presets';
import type { PresetKey } from './presets';
import { rosterIdOf } from './roster';
import type { PaneAgent, PaneView } from './types';

const PANE = 'world-of-agents';
const EMPTY: PaneView = { lead: 'idle', agents: [], asks: [], mode: null, usage: null };
// Change the tag when PaneView's fields change: a value an older version stored outlives a reload, and is then
// read as EMPTY instead.
const view = atom({ plugin: 'world-of-agents', key: 'view' } as const, EMPTY, { shape: 'view-1' });

const POLL_MS = 2000;
const MAX_RUNS = 50;
const MAX_TASK = 120;
const FINISHED = new Set(['completed', 'failed', 'killed']);

/**
 * An Agent call's description is agent text. Control characters (a terminal escape among them) and bidi overrides
 * become spaces, and it is cut at a code point, so it can only ever be a short line of plain text.
 */
export function plain(text: string): string {
  // eslint-disable-next-line no-control-regex -- matching control characters is the point: they come out.
  const cleaned = text.replace(/[\u0000-\u001f\u007f-\u009f\u202a-\u202e\u2066-\u2069]/g, ' ').trim();
  return Array.from(cleaned).slice(0, MAX_TASK).join('');
}

/** Our agents' runs from `$.agent.list()`, merged into what the pane already holds: the list forgets finished runs. */
async function refreshAgents($: EngineInterface): Promise<void> {
  const seen = (await $.agent.list()).flatMap((a): PaneAgent[] => {
    const agent = rosterIdOf(a.type);
    return agent ? [{ id: a.id, agent, status: a.status, task: plain(a.description) }] : [];
  });
  await update($, view, (v) => {
    const agents = [...v.agents];
    for (const run of seen) {
      const at = agents.findIndex((a) => a.id === run.id);
      if (at >= 0) agents[at] = run;
      else agents.push(run);
    }
    // A finished run has no call waiting any more, whatever a lost reload left behind.
    const done = new Set(agents.filter((a) => FINISHED.has(a.status)).map((a) => a.id));
    const asks = v.asks.filter((ask) => ask.agentId === undefined || !done.has(ask.agentId));
    const next = { ...v, agents: agents.slice(-MAX_RUNS), asks };
    return JSON.stringify(next) === JSON.stringify(v) ? v : next;
  });
}

const set = ($: EngineInterface, change: (v: PaneView) => PaneView) => update($, view, change);

/** Watching must never get in the way: a failure here is dropped, and the event goes on as the engine settled it. */
function quietly(work: Promise<unknown>): void {
  work.catch(() => {});
}

// A preset is sent only while the Lead is idle, one at a time: a press during the Lead's turn would queue a second run
// behind it. `pressing` covers the moment between a press and its own turn's start; from then the Lead's state does.
let pressing = false;
async function pressPreset($: EngineInterface, key: PresetKey): Promise<void> {
  if (pressing) return;
  pressing = true;
  try {
    if ((await read($, view)).lead === 'idle') await sendPreset($, key);
  } finally {
    pressing = false;
  }
}

export const register: Register = (on) => {
  on('session.start', async ($, e, next) => {
    const started = await next(e);
    quietly($.ui.open({ id: PANE, title: 'World of Agents' }));
    $.clock.every(POLL_MS, () => quietly(refreshAgents($)));
    return started;
  });

  // /world-of-agents:team is a skill only the user can start (skills/team). The mod answers it here without `next`, so
  // the skill's text never reaches the model and the command costs no turn.
  on('command.run', { command: 'world-of-agents:team' }, async ($) => {
    const opened = await $.ui.open({ id: PANE, title: 'World of Agents' });
    return {
      text: opened.isPlaced ? 'Team pane open.' : 'Team pane open. It shows once there is room for it.',
    };
  });

  on('ui.render', { component: 'Pane', requestId: PANE }, async ($, e) =>
    drawPane($, e, await read($, view), (key) => pressPreset($, key)),
  );

  // The mode isn't announced when it changes: the next prompt or subagent start carries it.
  on('classic.UserPromptSubmit', async ($, e, next) => {
    const result = await next(e);
    quietly(set($, (v) => ({ ...v, mode: e.permission_mode ?? v.mode })));
    return result;
  });
  on('classic.SubagentStart', async ($, e, next) => {
    const result = await next(e);
    quietly(set($, (v) => ({ ...v, mode: e.permission_mode ?? v.mode })));
    return result;
  });

  // The Lead is the main thread, which `$.agent.list()` doesn't list: its state is its own turn's.
  on('turn.start', async ($, e, next) => {
    const started = await next(e);
    if (e.agentId === undefined) quietly(set($, (v) => ({ ...v, lead: 'running' })));
    return started;
  });
  on('turn.complete', async ($, e, next) => {
    const completed = await next(e);
    if (e.agentId === undefined) {
      // The Lead's turn is over, so none of its own calls still waits.
      quietly(
        set($, (v) => ({ ...v, lead: 'idle', asks: v.asks.filter((ask) => ask.agentId !== undefined) })),
      );
    }
    return completed;
  });

  on('agent.spawn', async ($, e, next) => {
    const spawned = await next(e);
    quietly(refreshAgents($));
    return spawned;
  });

  // Who needs you: an ask a person answers. Recorded before the verdict goes back, so the entry is there before
  // the call can resolve; it goes when the call does (tool.call below).
  on('tool.check', async ($, e, next) => {
    const verdict = await next(e);
    const id = e.tool_use_id;
    if (verdict.decision === 'ask' && e.approver === 'person' && id !== undefined) {
      try {
        await set($, (v) =>
          v.asks.some((ask) => ask.id === id)
            ? v
            : { ...v, asks: [...v.asks, { id, agentId: e.agentId, tool: e.tool }] },
        );
        if (e.agentId !== undefined) quietly(refreshAgents($));
      } catch {
        // The verdict goes back unchanged either way.
      }
    }
    return verdict;
  });

  on('tool.call', async ($, e, next) => {
    try {
      return await next(e);
    } finally {
      try {
        await set($, (v) =>
          v.asks.some((ask) => ask.id === e.tool_use_id)
            ? { ...v, asks: v.asks.filter((ask) => ask.id !== e.tool_use_id) }
            : v,
        );
      } catch {
        // Nothing to undo: the call's own result goes back.
      }
    }
  });

  on('session.measure', async ($, e, next) => {
    const measured = await next(e);
    const { tokens, window, percent } = e.context;
    const limits = e.rateLimits.map(({ kind, percentUsed, resetsAt }) => ({ kind, percentUsed, resetsAt }));
    quietly(set($, (v) => ({ ...v, usage: { tokens, window, percent, limits } })));
    return measured;
  });
};
