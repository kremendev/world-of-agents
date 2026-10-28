import { describe, expect, it } from 'vitest';
import { parseEvent, type OfficeEvent } from '../src/events/schema';
import { INITIAL_OFFICE, officeReducer } from '../src/state/office';
import type { HookInput } from './hook-input';
import { INITIAL_MAP, mapHook, type MapState } from './map';
import { hookOf, run1 } from './test-helpers';

/** Freezes a state all the way down, so a mapHook that changes the state it was given throws. */
function frozen<T>(value: T): T {
  if (value && typeof value === 'object' && !Object.isFrozen(value)) {
    Object.freeze(value);
    for (const inner of Object.values(value)) frozen(inner);
  }
  return value;
}

/** Maps hooks in order from `from`, keeping each hook's events and the state after it. `at` is the index. */
function play(inputs: readonly HookInput[], from: MapState = INITIAL_MAP) {
  let state = from;
  const steps = inputs.map((input, i) => {
    const result = mapHook(frozen(state), input, i);
    state = result.state;
    return result;
  });
  return { state, steps, events: steps.flatMap((s) => s.events) };
}

// Hand-made hooks for what run 1 doesn't show: the fields are the ones docs/v2-hooks.md lists.
const S = 'session-1';
const byLead = (hook_event_name: string, more: Partial<HookInput> = {}): HookInput => ({
  hook_event_name,
  session_id: S,
  agent_type: 'world-of-agents:lead',
  ...more,
});
const bySub = (hook_event_name: string, agent: string, agent_id: string, more: Partial<HookInput> = {}) =>
  ({
    hook_event_name,
    session_id: S,
    agent_type: `world-of-agents:${agent}`,
    agent_id,
    ...more,
  }) as HookInput;
const start = byLead('SessionStart', { source: 'startup' });
const handOut = (tool_use_id: string, agent: string, description = 'A task') =>
  byLead('PreToolUse', {
    tool_name: 'Agent',
    tool_use_id,
    tool_input: { subagent_type: `world-of-agents:${agent}`, description, run_in_background: true },
  });
const returned = (tool_use_id: string, agentId: string, status: string) =>
  byLead('PostToolUse', { tool_name: 'Agent', tool_use_id, tool_response: { status, agentId } });

describe('mapHook on run 1, row by row (the run table in docs/v2-brief.md)', () => {
  const run = play(run1.map((hook) => hookOf(hook.n)));
  const after = (n: number) => run.steps[n - 1]!.events;
  const card = (n: number) => hookOf(n).tool_use_id!;

  it('SessionStart: resets the run', () => {
    expect(after(1)).toEqual([{ type: 'reset', at: 0 }]);
  });

  it('UserPromptSubmit: the run text (at most 120 characters) and the Lead thinking', () => {
    const [run1Text, thinking] = after(2) as [{ text: string }, OfficeEvent];
    expect(run1Text).toMatchObject({ type: 'run', text: expect.stringMatching(/^Make a tiny hello page/) });
    expect(run1Text.text.length).toBeLessThanOrEqual(120);
    expect(thinking).toEqual({ type: 'state', agent: 'lead', state: 'thinking', at: 1 });
  });

  it('PreToolUse Read/Grep/Glob from the Lead: the Lead reads', () => {
    expect(hookOf(3).tool_name).toBe('Glob');
    expect(after(3)).toEqual([{ type: 'state', agent: 'lead', state: 'reading', at: 2 }]);
  });

  it('PreToolUse Agent from the Lead: a new card, owner from subagent_type, title from description', () => {
    expect(after(4)).toEqual([
      {
        type: 'task',
        taskId: card(4),
        title: 'Dark theme hello page',
        owner: 'designer',
        status: 'todo',
        at: 3,
      },
    ]);
    expect(after(7)).toMatchObject([{ taskId: card(7), title: 'node:http static server', owner: 'backend' }]);
    expect(after(20)).toMatchObject([{ taskId: card(20), title: 'Review hello page', owner: 'reviewer' }]);
  });

  it('SubagentStart: the oldest open card of its type goes in progress, and the agent thinks', () => {
    expect(after(5)).toEqual([
      {
        type: 'task',
        taskId: card(4),
        title: 'Dark theme hello page',
        owner: 'designer',
        status: 'in-progress',
        at: 4,
      },
      { type: 'state', agent: 'designer', state: 'thinking', taskId: card(4), at: 4 },
    ]);
    expect(after(8)).toMatchObject([
      { taskId: card(7), status: 'in-progress' },
      { agent: 'backend', state: 'thinking' },
    ]);
    expect(after(21)).toMatchObject([{ taskId: card(20) }, { agent: 'reviewer', state: 'thinking' }]);
  });

  it('PostToolUse async_launched: only links the card to its agentId, no events', () => {
    expect(after(6)).toEqual([]);
    expect(after(9)).toEqual([]);
    expect(run.steps[5]!.state.cards[0]).toMatchObject({ taskId: card(4), agentId: hookOf(5).agent_id });
  });

  it('PreToolUse Edit/Write/Bash in a subagent: writing', () => {
    expect(after(10)).toEqual([
      { type: 'state', agent: 'designer', state: 'writing', taskId: card(4), at: 9 },
    ]);
    expect(after(13)).toMatchObject([{ agent: 'backend', state: 'writing', taskId: card(7) }]);
    expect(hookOf(14).tool_name).toBe('Bash');
    expect(after(14)).toMatchObject([{ agent: 'backend', state: 'writing', taskId: card(7) }]);
  });

  it('PreToolUse Read/Grep/Glob in a subagent: reading', () => {
    for (const n of [22, 23, 24]) {
      expect(after(n)).toEqual([
        { type: 'state', agent: 'reviewer', state: 'reading', taskId: card(20), at: n - 1 },
      ]);
    }
  });

  it('Stop with background tasks still running: what the Lead said, to you, and the Lead waits', () => {
    expect(after(11)).toEqual([
      { type: 'message', from: 'lead', to: 'you', text: hookOf(11).last_assistant_message, at: 10 },
      { type: 'state', agent: 'lead', state: 'waiting', at: 10 },
    ]);
    expect(after(17)).toMatchObject([
      {
        type: 'message',
        from: 'lead',
        to: 'you',
        text: expect.stringMatching(/^The backend agent finished/),
      },
      { type: 'state', agent: 'lead', state: 'waiting', at: 16 },
    ]);
  });

  it('SubagentStop: its last message to the Lead, its card done, the agent done', () => {
    expect(after(15)).toMatchObject([
      {
        type: 'message',
        from: 'backend',
        to: 'lead',
        text: expect.stringMatching(/^I created `server\.js`/),
      },
      { type: 'task', taskId: card(7), status: 'done' },
      { type: 'state', agent: 'backend', state: 'done', taskId: card(7) },
    ]);
    expect(after(18)).toMatchObject([
      { from: 'designer' },
      { taskId: card(4), status: 'done' },
      { agent: 'designer', state: 'done' },
    ]);
    expect(after(25)).toMatchObject([
      { from: 'reviewer' },
      { taskId: card(20), status: 'done' },
      { agent: 'reviewer', state: 'done' },
    ]);
  });

  it('<task-notification>: the Lead thinks again, the task stays done, and the run is never reset', () => {
    expect(after(16)).toEqual([{ type: 'state', agent: 'lead', state: 'thinking', at: 15 }]);
    expect(after(19)).toEqual([{ type: 'state', agent: 'lead', state: 'thinking', at: 18 }]);
    const later = run.steps.slice(2).flatMap((s) => s.events);
    expect(later.filter((e) => e.type === 'reset' || e.type === 'run')).toEqual([]);
  });

  it('PostToolUse completed: the card is done, but only once', () => {
    expect(hookOf(26).tool_response?.status).toBe('completed');
    expect(after(26)).toEqual([]); // SubagentStop (25) already ended it
  });

  it("Stop with nothing running: the Lead's report to you, and everyone rests", () => {
    expect(after(27)).toEqual([
      { type: 'message', from: 'lead', to: 'you', text: hookOf(27).last_assistant_message, at: 26 },
      ...['lead', 'designer', 'frontend', 'backend', 'reviewer'].map((agent) => ({
        type: 'state',
        agent,
        state: 'idle',
        at: 26,
      })),
    ]);
    expect(hookOf(27).last_assistant_message).toMatch(/^The hello page is built/);
  });

  it('SessionEnd: nothing', () => {
    expect(after(28)).toEqual([]);
  });

  it('ends with every card done, everyone idle, three reports to the Lead and three from it to you', () => {
    const office = run.events.reduce(officeReducer, INITIAL_OFFICE);
    expect(office.tasks.map((t) => [t.owner, t.status])).toEqual([
      ['designer', 'done'],
      ['backend', 'done'],
      ['reviewer', 'done'],
    ]);
    expect(Object.values(office.agents).map((a) => a.state)).toEqual(Array(5).fill('idle'));
    expect(office.messages.map((m) => `${m.from} to ${m.to}`)).toEqual([
      'lead to you',
      'backend to lead',
      'lead to you',
      'designer to lead',
      'reviewer to lead',
      'lead to you',
    ]);
  });

  it('only sends events that pass parseEvent()', () => {
    expect(run.events.length).toBeGreaterThan(30);
    for (const event of run.events) expect(parseEvent(event)).toEqual({ ok: true, event });
  });

  it('ignores a late hook from a run that already ended', () => {
    expect(mapHook(run.state, hookOf(10), 99).events).toEqual([]); // the Designer's Write, after the last Stop
  });
});

describe('mapHook rows run 1 does not have (not captured yet: docs/v2-hooks.md)', () => {
  it('Notification permission_prompt naming a subagent: that agent needs you', () => {
    const { steps } = play([
      start,
      handOut('t1', 'backend'),
      bySub('SubagentStart', 'backend', 'b1'),
      bySub('Notification', 'backend', 'b1', { notification_type: 'permission_prompt' }),
    ]);
    expect(steps[3]!.events).toEqual([
      { type: 'state', agent: 'backend', state: 'needs-you', taskId: 't1', at: 3 },
    ]);
  });

  it('Notification permission_prompt without a subagent, or idle_prompt: the Lead needs you', () => {
    const { steps } = play([
      start,
      byLead('Notification', { notification_type: 'permission_prompt' }),
      byLead('Notification', { notification_type: 'idle_prompt' }),
      byLead('Notification', { notification_type: 'auth_success' }),
    ]);
    expect(steps[1]!.events).toEqual([{ type: 'state', agent: 'lead', state: 'needs-you', at: 1 }]);
    expect(steps[2]!.events).toEqual([{ type: 'state', agent: 'lead', state: 'needs-you', at: 2 }]);
    expect(steps[3]!.events).toEqual([]);
  });

  it('StopFailure: the Lead shows the error state', () => {
    const { steps } = play([start, byLead('StopFailure')]);
    expect(steps[1]!.events).toEqual([{ type: 'state', agent: 'lead', state: 'error', at: 1 }]);
  });
});

describe('mapHook rules', () => {
  it('<task-notification> before its SubagentStop ends the task, and still never resets the run', () => {
    const { steps, events } = play([
      start,
      byLead('UserPromptSubmit', { prompt: 'Build a server' }),
      handOut('t1', 'backend', 'Server'),
      bySub('SubagentStart', 'backend', 'b1'),
      byLead('UserPromptSubmit', {
        task_notification: { task_id: 'b1', tool_use_id: 't1', status: 'completed' },
      }),
      bySub('SubagentStop', 'backend', 'b1', { last_assistant_message: 'Server is up.' }),
    ]);
    expect(steps[4]!.events).toMatchObject([
      { type: 'task', taskId: 't1', status: 'done' },
      { type: 'state', agent: 'lead', state: 'thinking' },
    ]);
    expect(steps[5]!.events).toMatchObject([
      { type: 'message' },
      { type: 'state', agent: 'backend', state: 'done' },
    ]);
    const office = events.reduce(officeReducer, INITIAL_OFFICE);
    expect(office.tasks).toEqual([{ id: 't1', title: 'Server', owner: 'backend', status: 'done' }]);
  });

  it.each(['failed', 'killed'])(
    '<task-notification> %s: the agent shows the error, the card stays, and a later stop or start changes nothing',
    (status) => {
      const { steps, events } = play([
        start,
        handOut('t1', 'backend', 'Server'),
        bySub('SubagentStart', 'backend', 'b1'),
        returned('t1', 'b1', 'async_launched'),
        byLead('UserPromptSubmit', { task_notification: { task_id: 'b1', tool_use_id: 't1', status } }),
        bySub('SubagentStop', 'backend', 'b1', { last_assistant_message: 'Gave up.' }),
        bySub('SubagentStart', 'backend', 'b1'),
      ]);
      expect(steps[4]!.events).toEqual([
        { type: 'state', agent: 'backend', state: 'error', taskId: 't1', at: 4 },
        { type: 'state', agent: 'lead', state: 'thinking', at: 4 },
      ]);
      expect(steps[5]!.events).toEqual([]);
      expect(steps[6]!.events).toEqual([]);
      const office = events.reduce(officeReducer, INITIAL_OFFICE);
      expect(office.tasks).toEqual([{ id: 't1', title: 'Server', owner: 'backend', status: 'in-progress' }]);
      expect(office.agents.backend).toMatchObject({ state: 'error', taskId: 't1' });
    },
  );

  it('<task-notification> failed after its SubagentStop: the agent shows the error, the card stays done', () => {
    const { steps, events } = play([
      start,
      handOut('t1', 'backend', 'Server'),
      bySub('SubagentStart', 'backend', 'b1'),
      bySub('SubagentStop', 'backend', 'b1'),
      byLead('UserPromptSubmit', {
        task_notification: { task_id: 'b1', tool_use_id: 't1', status: 'failed' },
      }),
    ]);
    expect(steps[4]!.events).toEqual([
      { type: 'state', agent: 'backend', state: 'error', taskId: 't1', at: 4 },
      { type: 'state', agent: 'lead', state: 'thinking', at: 4 },
    ]);
    expect(events.reduce(officeReducer, INITIAL_OFFICE).tasks).toMatchObject([{ id: 't1', status: 'done' }]);
  });

  it('a Stop whose last message is missing or blank sends no message', () => {
    const { steps } = play([
      start,
      byLead('Stop', { background_tasks: [{ id: 'b1', status: 'running' }] }),
      byLead('Stop', { last_assistant_message: '  \n' }),
    ]);
    expect(steps[1]!.events).toEqual([{ type: 'state', agent: 'lead', state: 'waiting', at: 1 }]);
    expect(steps[2]!.events.map((e) => e.type)).toEqual(Array(5).fill('state'));
  });

  it('a foreground Agent call that completes before its SubagentStop ends the card once', () => {
    const { steps } = play([
      start,
      handOut('t1', 'reviewer'),
      bySub('SubagentStart', 'reviewer', 'r1'),
      returned('t1', 'r1', 'completed'),
      bySub('SubagentStop', 'reviewer', 'r1', { last_assistant_message: 'No bugs.' }),
    ]);
    expect(steps[3]!.events).toMatchObject([{ type: 'task', taskId: 't1', status: 'done' }]);
    expect(steps[4]!.events.map((e) => e.type)).toEqual(['message', 'state']);
  });

  it('ignores a start, or a tool call, that arrives after its stop', () => {
    const { steps } = play([
      start,
      handOut('t1', 'frontend'),
      bySub('SubagentStop', 'frontend', 'f1', { last_assistant_message: 'Done.' }),
      bySub('SubagentStart', 'frontend', 'f1'),
      bySub('PreToolUse', 'frontend', 'f1', { tool_name: 'Edit' }),
    ]);
    expect(steps[2]!.events).toMatchObject([
      { type: 'message' },
      { type: 'task', taskId: 't1', status: 'done' },
      { type: 'state', agent: 'frontend', state: 'done' },
    ]);
    expect(steps[3]!.events).toEqual([]);
    expect(steps[4]!.events).toEqual([]);
  });

  it('keeps an agent busy while any copy runs, and sends the count while there are two', () => {
    const { steps } = play([
      start,
      handOut('t1', 'backend'),
      handOut('t2', 'backend'),
      bySub('SubagentStart', 'backend', 'b1'),
      bySub('SubagentStart', 'backend', 'b2'),
      bySub('PreToolUse', 'backend', 'b1', { tool_name: 'Write' }),
      bySub('SubagentStop', 'backend', 'b1', { last_assistant_message: 'First half done.' }),
      bySub('SubagentStop', 'backend', 'b2', { last_assistant_message: 'Second half done.' }),
    ]);
    expect(steps[3]!.events[1]).toEqual({
      type: 'state',
      agent: 'backend',
      state: 'thinking',
      taskId: 't1',
      at: 3,
    });
    expect(steps[4]!.events[1]).toEqual({
      type: 'state',
      agent: 'backend',
      state: 'thinking',
      taskId: 't2',
      copies: 2,
      at: 4,
    });
    expect(steps[5]!.events).toEqual([
      { type: 'state', agent: 'backend', state: 'writing', taskId: 't1', copies: 2, at: 5 },
    ]);
    // The first copy stops: its card is done, but the agent stays busy with the other one.
    expect(steps[6]!.events).toMatchObject([
      { type: 'message', text: 'First half done.' },
      { type: 'task', taskId: 't1', status: 'done' },
      { type: 'state', agent: 'backend', state: 'thinking', taskId: 't2' },
    ]);
    expect(steps[6]!.events[2]).not.toHaveProperty('copies');
    expect(steps[7]!.events.at(-1)).toMatchObject({
      type: 'state',
      agent: 'backend',
      state: 'done',
      taskId: 't2',
    });
  });

  it("links a card to the run PostToolUse names, over SubagentStart's oldest-open-card guess", () => {
    const { steps } = play([
      start,
      handOut('tA', 'designer', 'Colours'),
      handOut('tB', 'designer', 'Fonts'),
      bySub('SubagentStart', 'designer', 'Y'), // guessed: tA, the oldest open card
      returned('tA', 'X', 'async_launched'), // tA is really X's...
      returned('tB', 'Y', 'async_launched'), // ...so Y works tB
      bySub('SubagentStart', 'designer', 'X'),
      bySub('SubagentStop', 'designer', 'Y'),
    ]);
    expect(steps[3]!.events[1]).toMatchObject({ state: 'thinking', taskId: 'tA' });
    expect(steps[4]!.events).toEqual([]);
    expect(steps[5]!.events).toEqual([]);
    expect(steps[6]!.events[1]).toMatchObject({ state: 'thinking', taskId: 'tA', copies: 2 });
    expect(steps[7]!.events).toMatchObject([
      { type: 'task', taskId: 'tB', status: 'done' },
      { type: 'state', agent: 'designer', state: 'thinking', taskId: 'tA' },
    ]);
  });

  it.each([
    ['a built-in agent', 'Explore'],
    ['the Haiku guide', 'claude-code-guide'],
    ['a name we do not have', 'world-of-agents:intern'],
    ['another plugin', 'other-plugin:backend'],
    ['no agent_type at all', undefined],
  ])('ignores %s', (_, agent_type) => {
    const state = play([start, handOut('t1', 'backend')]).state;
    for (const hook_event_name of ['SubagentStart', 'PreToolUse', 'SubagentStop', 'SessionStart']) {
      const input: HookInput = {
        hook_event_name,
        session_id: S,
        agent_type,
        agent_id: 'x1',
        tool_name: 'Write',
      };
      expect(mapHook(state, input, 9)).toEqual({ state, events: [] });
    }
  });

  it('gives no card to an Agent call for an agent that is not ours, or with an id that cannot be a task id', () => {
    const { steps, state } = play([
      start,
      handOut('t1', 'Explore'),
      handOut('t2', 'lead'),
      handOut('../t3', 'backend'),
    ]);
    expect(steps.slice(1).flatMap((s) => s.events)).toEqual([]);
    expect(state.cards).toEqual([]);
  });
});

describe('mapHook sessions: the hall follows the last one to start new, cleared or resumed', () => {
  const other = (input: HookInput): HookInput => ({ ...input, session_id: 'session-2' });

  it.each(['startup', 'clear', 'resume'])(
    'a restarted Claude Code (SessionStart %s) takes the hall over mid-run, and the old session goes quiet',
    (source) => {
      const { steps, state } = play([
        start,
        handOut('t1', 'backend'),
        bySub('SubagentStart', 'backend', 'b1'),
        other(byLead('SessionStart', { source })),
        bySub('PreToolUse', 'backend', 'b1', { tool_name: 'Write' }), // the old session, late
        other(byLead('UserPromptSubmit', { prompt: 'Next task' })),
        other(handOut('t2', 'designer')),
      ]);
      expect(steps[3]!.events).toEqual([{ type: 'reset', at: 3 }]);
      expect(steps[4]!.events).toEqual([]);
      expect(steps[5]!.events).toMatchObject([
        { type: 'run', text: 'Next task' },
        { type: 'state', agent: 'lead', state: 'thinking' },
      ]);
      expect(steps[6]!.events).toMatchObject([{ type: 'task', taskId: 't2', owner: 'designer' }]);
      expect(state).toMatchObject({ session: 'session-2', runs: {} });
      expect(state.cards.map((c) => c.taskId)).toEqual(['t2']);
    },
  );

  it('ignores every hook until a session starts', () => {
    const { events, state } = play([
      byLead('UserPromptSubmit', { prompt: 'Build a server' }),
      handOut('t1', 'backend'),
      bySub('SubagentStart', 'backend', 'b1'),
      byLead('Stop'),
    ]);
    expect(events).toEqual([]);
    expect(state).toEqual(INITIAL_MAP);
  });

  it('ignores hooks from another session, its compaction, and a start with an unknown source or no id', () => {
    const { steps, state } = play([
      start,
      handOut('t1', 'backend'),
      other(handOut('t2', 'designer')),
      other(byLead('SessionStart', { source: 'compact' })),
      other(byLead('SessionStart', { source: 'teleport' })),
      other(byLead('SessionStart')),
      byLead('SessionStart', { source: 'startup', session_id: undefined }),
      other(byLead('Stop')),
    ]);
    expect(steps.slice(2).flatMap((s) => s.events)).toEqual([]);
    expect(state.session).toBe(S);
    expect(state.cards.map((c) => c.taskId)).toEqual(['t1']);
  });

  it('does not reset when the same session starts again after compaction', () => {
    const { steps, state } = play([
      start,
      handOut('t1', 'backend'),
      byLead('SessionStart', { source: 'compact' }),
    ]);
    expect(steps[2]!.events).toEqual([]);
    expect(state.cards).toHaveLength(1);
  });
});
