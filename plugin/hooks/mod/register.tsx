// The World of Agents mod: the team pane, the hall's start and the voice. It watches, shows and speaks; it never decides.
//
// Every hook hands back exactly what `next` resolved to: no answer on tool.call, no decision on tool.check, no change
// to a spawn, a prompt or a turn. The one prompt it ever submits is a preset's fixed text (presets.ts). Its only
// processes are fixed commands (hall.ts, voice.ts); it uses no network and no files. register.test.tsx, hall.test.tsx
// and voice.test.tsx pin all of it, and scripts/mod-surface.json lists every event and $ call it uses.

import { atom, read, update } from 'claude-code';
import type { EngineInterface, Register } from 'claude-code';

import { findNode, keepHall } from './hall';
import { askerName, drawPane } from './pane';
import { sendPreset } from './presets';
import type { PresetKey } from './presets';
import { rosterIdOf } from './roster';
import { plain } from './text';
import type { PaneAgent, PaneHall, PaneView } from './types';
import { approvalLine, backgroundRun, heardRun, hush, say, teamLine } from './voice';

const PANE = 'world-of-agents';
const EMPTY: PaneView = {
  lead: 'idle',
  agents: [],
  asks: [],
  mode: null,
  usage: null,
  round: [],
  unheard: [],
  hall: 'checking',
  node: 'unchecked',
  nodeVersion: null,
  muted: false,
};
// Change the tag when PaneView's fields change: a value an older version stored outlives a reload, and is then
// read as EMPTY instead.
const view = atom({ plugin: 'world-of-agents', key: 'view' } as const, EMPTY, { shape: 'view-3' });

const POLL_MS = 2000;
const MAX_RUNS = 50;
const MAX_TASK = 120;
const FINISHED = new Set(['completed', 'failed', 'killed']);
/** The $.store key that keeps the voice muted from one session to the next. */
const MUTED = 'muted';

/** Our agents' runs from `$.agent.list()`, merged into what the pane already holds: the list forgets finished runs. */
async function refreshAgents($: EngineInterface): Promise<void> {
  const seen = (await $.agent.list()).flatMap((a): PaneAgent[] => {
    const agent = rosterIdOf(a.type);
    return agent ? [{ id: a.id, agent, status: a.status, task: plain(a.description, MAX_TASK) }] : [];
  });
  await update($, view, (v) => {
    const agents = [...v.agents];
    const round = [...v.round];
    for (const run of seen) {
      const at = agents.findIndex((a) => a.id === run.id);
      if (at >= 0) agents[at] = run;
      else {
        agents.push(run);
        // A run seen for the first time is part of the team's work: "the team is done" waits for it.
        round.push(run.id);
      }
    }
    // A finished run has no call waiting any more, whatever a lost reload left behind.
    const done = new Set(agents.filter((a) => FINISHED.has(a.status)).map((a) => a.id));
    const asks = v.asks.filter((ask) => ask.agentId === undefined || !done.has(ask.agentId));
    const next = { ...v, agents: agents.slice(-MAX_RUNS), asks, round: round.slice(-MAX_RUNS) };
    return JSON.stringify(next) === JSON.stringify(v) ? v : next;
  });
}

const set = ($: EngineInterface, change: (v: PaneView) => PaneView) => update($, view, change);
const setHall = ($: EngineInterface) => (hall: PaneHall) =>
  set($, (v) => (v.hall === hall ? v : { ...v, hall }));

/** Watching must never get in the way: a failure here is dropped, and the event goes on as the engine settled it. */
function quietly(work: Promise<unknown>): void {
  work.catch(() => {});
}

/** At session start: the mute kept from before, then Node, then the hall, if there is a Node to run it. */
async function startUp($: EngineInterface): Promise<void> {
  let muted = false;
  try {
    muted = (await $.store.get(MUTED)) === true;
  } catch {
    // No store: the voice is on, as by default.
  }
  await set($, (v) => ({ ...v, muted, hall: 'checking', node: 'unchecked', nodeVersion: null }));
  const found = await findNode($);
  await set($, (v) => ({ ...v, ...found }));
  if (found.node === 'ok') await keepHall($, setHall($));
  else await setHall($)('stopped');
}

/** Is the hall still there? Not before Node has been found at session start. */
async function checkHall($: EngineInterface): Promise<void> {
  if ((await read($, view)).node === 'ok') await keepHall($, setHall($));
}

/**
 * The check at each of the Lead's turns, made through the session's own `$`, never the turn's: a child dies with the
 * dispatch it was started in when that is abandoned, and an interrupted turn abandons its own.
 */
let checkHallInSession: (() => Promise<void>) | undefined;

/** Speaks a line, unless the voice is muted. */
async function speakUp($: EngineInterface, line: string): Promise<void> {
  if (!(await read($, view)).muted) say($, line);
}

async function toggleMute($: EngineInterface): Promise<void> {
  const muted = !(await read($, view)).muted;
  if (muted) hush();
  await set($, (v) => ({ ...v, muted }));
  await $.store.set(MUTED, muted);
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
    checkHallInSession = () => checkHall($);
    quietly($.ui.open({ id: PANE, title: 'World of Agents' }));
    $.clock.every(POLL_MS, () => quietly(refreshAgents($)));
    quietly(startUp($));
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
    drawPane($, e, await read($, view), {
      onPreset: (key) => pressPreset($, key),
      onMute: () => toggleMute($),
    }),
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
    if (e.agentId === undefined) {
      quietly(set($, (v) => ({ ...v, lead: 'running' })));
      quietly(checkHallInSession ? checkHallInSession() : checkHall($));
    }
    return started;
  });
  on('turn.complete', async ($, e, next) => {
    const completed = await next(e);
    if (e.agentId === undefined) {
      quietly(
        (async () => {
          // The Lead's turn is over, so none of its own calls still waits.
          await set($, (v) => ({
            ...v,
            lead: 'idle',
            asks: v.asks.filter((ask) => ask.agentId !== undefined),
          }));
          // Then, with the runs as they stand now: is the team done?
          await refreshAgents($);
          let line: string | undefined;
          await set($, (v) => {
            const end = teamLine(v, e.reason, e.answer);
            line = end.line;
            return { ...v, round: end.round };
          });
          if (line !== undefined) await speakUp($, line);
        })(),
      );
    }
    return completed;
  });

  on('agent.spawn', async ($, e, next) => {
    const spawned = await next(e);
    quietly(refreshAgents($));
    return spawned;
  });

  // An ask goes to the mode's decider: a dialog in Manual, the classifier first in Auto, which settles most calls with
  // no dialog. So it is only recorded here, before the verdict goes back so the entry is there before the call can
  // resolve, and it goes when the call does (tool.call below). It is "needs you" once its dialog opens.
  on('tool.check', async ($, e, next) => {
    const verdict = await next(e);
    const id = e.tool_use_id;
    if (verdict.decision === 'ask' && e.approver === 'person' && id !== undefined) {
      try {
        await set($, (v) =>
          v.asks.some((ask) => ask.id === id)
            ? v
            : { ...v, asks: [...v.asks, { id, agentId: e.agentId, tool: e.tool, shown: false }] },
        );
        if (e.agentId !== undefined) quietly(refreshAgents($));
      } catch {
        // The verdict goes back unchanged either way.
      }
    }
    return verdict;
  });

  // Who needs you: the dialog for a recorded ask opens, so Dima is asked now. It names the agent (agent_id, absent for
  // the Lead) and the tool, not the call, so it marks that agent's newest open ask of that tool. Spoken by the pane's
  // name for the asker: the roster's, or "An agent", never a name from the event. What it answers goes on unchanged.
  on('classic.PermissionRequest', async ($, e, next) => {
    const answered = await next(e);
    try {
      let shown: string | undefined;
      await set($, (v) => {
        shown = [...v.asks]
          .reverse()
          .find((a) => !a.shown && a.agentId === e.agent_id && a.tool === e.tool_name)?.id;
        return shown === undefined
          ? v
          : { ...v, asks: v.asks.map((a) => (a.id === shown ? { ...a, shown: true } : a)) };
      });
      if (shown !== undefined) {
        quietly(
          (async () => {
            if (e.agent_id !== undefined) await refreshAgents($);
            await speakUp($, approvalLine(askerName(await read($, view), e.agent_id)));
          })(),
        );
      }
    } catch {
      // What it answered goes back unchanged either way.
    }
    return answered;
  });

  on('tool.call', async ($, e, next) => {
    try {
      const answer = await next(e);
      // The Lead started a run in the background: its result reaches the Lead later, in a frame (prompt.submit below).
      // Until then the team isn't done, even once the run is over. Recorded before the answer goes back.
      const launched = e.agentId === undefined && e.tool === 'Agent' ? backgroundRun(answer) : undefined;
      if (launched !== undefined) {
        try {
          await set($, (v) =>
            v.unheard.includes(launched) ? v : { ...v, unheard: [...v.unheard, launched].slice(-MAX_RUNS) },
          );
        } catch {
          // The answer goes back unchanged either way.
        }
      }
      return answer;
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

  // A frame naming one of the Lead's background runs (a task notification, or Auto's hand-back): its result has reached
  // the Lead, whether as a turn of its own or delivered into the running one. The prompt goes on exactly as it entered.
  on('prompt.submit', async ($, e, next) => {
    const entered = await next(e);
    const heard = entered.drop === undefined ? heardRun(e.text) : undefined;
    if (heard !== undefined) {
      try {
        await set($, (v) =>
          v.unheard.includes(heard) ? { ...v, unheard: v.unheard.filter((id) => id !== heard) } : v,
        );
      } catch {
        // What entered goes back unchanged either way.
      }
    }
    return entered;
  });

  on('session.measure', async ($, e, next) => {
    const measured = await next(e);
    const { tokens, window, percent } = e.context;
    const limits = e.rateLimits.map(({ kind, percentUsed, resetsAt }) => ({ kind, percentUsed, resetsAt }));
    quietly(set($, (v) => ({ ...v, usage: { tokens, window, percent, limits } })));
    return measured;
  });
};
