import { describe, expect, it } from 'vitest';
import { LIMITS, parseEvent, type OfficeEvent } from '../src/events/schema';
import { INITIAL_OFFICE, officeReducer, workingCount } from '../src/state/office';
import type { HookInput } from './hook-input';
import { INITIAL_MAP, mapHook, type MapState } from './map';
import { finalReport, whoIsWaiting } from '../src/live/announce';
import { feedLines } from '../src/page/feed';
import { reviewsOf } from '../src/page/review';
import { hookOf, run1, run2, run3, run4 } from './test-helpers';

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

  it('PreToolUse Agent from the Lead: a new card (owner from subagent_type, title from description), and the Lead thinks', () => {
    expect(after(4)).toEqual([
      {
        type: 'task',
        taskId: card(4),
        title: 'Dark theme hello page',
        owner: 'designer',
        status: 'todo',
        at: 3,
      },
      { type: 'state', agent: 'lead', state: 'thinking', at: 3 },
    ]);
    expect(after(7)).toMatchObject([
      { taskId: card(7), title: 'node:http static server', owner: 'backend' },
      { agent: 'lead', state: 'thinking' },
    ]);
    expect(after(20)).toMatchObject([
      { taskId: card(20), title: 'Review hello page', owner: 'reviewer' },
      { agent: 'lead', state: 'thinking' },
    ]);
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

  it('SubagentStop: its last message to the Lead, its card Done, the agent done', () => {
    expect(after(15)).toEqual([
      { type: 'message', from: 'backend', to: 'lead', text: hookOf(15).last_assistant_message, at: 14 },
      {
        type: 'task',
        taskId: card(7),
        title: 'node:http static server',
        owner: 'backend',
        status: 'done',
        at: 14,
      },
      { type: 'state', agent: 'backend', state: 'done', taskId: card(7), at: 14 },
    ]);
    expect(hookOf(15).last_assistant_message).toMatch(/^I created `server\.js`/);
    expect(after(18)).toMatchObject([
      { from: 'designer' },
      { type: 'task', taskId: card(4), status: 'done' },
      { agent: 'designer', state: 'done', taskId: card(4) },
    ]);
    expect(after(25)).toMatchObject([
      { from: 'reviewer' },
      { type: 'task', taskId: card(20), status: 'done' },
      { agent: 'reviewer', state: 'done', taskId: card(20) },
    ]);
  });

  it('<task-notification> completed: the Lead thinks again; the card is already Done and the run is never reset', () => {
    expect(after(16)).toEqual([{ type: 'state', agent: 'lead', state: 'thinking', at: 15 }]);
    expect(after(19)).toEqual([{ type: 'state', agent: 'lead', state: 'thinking', at: 18 }]);
    const later = run.steps.slice(2).flatMap((s) => s.events);
    expect(later.filter((e) => e.type === 'reset' || e.type === 'run')).toEqual([]);
  });

  it('PostToolUse completed (the foreground Reviewer): nothing more, its SubagentStop already ended the card', () => {
    expect(hookOf(26).tool_response?.status).toBe('completed');
    expect(after(26)).toEqual([]);
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

  it('SessionEnd: everyone rests, then the signal for the "Session ended" badge', () => {
    expect(after(28)).toEqual([
      ...['lead', 'designer', 'frontend', 'backend', 'reviewer'].map((agent) => ({
        type: 'state',
        agent,
        state: 'idle',
        at: 27,
      })),
      { type: 'session-end', at: 27 },
    ]);
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

describe('mapHook on run 2 (`auto` mode: hand-backs instead of <task-notification>s)', () => {
  const run = play(run2.map((hook) => hookOf(hook.n, run2)));
  const after = (n: number) => run.steps[n - 1]!.events;

  it('a hand-back comes with no text: the Lead thinks, and the header keeps your prompt', () => {
    for (const n of [12, 20]) {
      expect(hookOf(n, run2).agent_message).toEqual({ from: expect.stringMatching(/^a[0-9a-f]{16}$/) });
      expect(hookOf(n, run2).prompt).toBeUndefined();
      expect(after(n)).toEqual([{ type: 'state', agent: 'lead', state: 'thinking', at: n - 1 }]);
    }
    const runs = run.events.filter((e) => e.type === 'run');
    expect(runs).toMatchObject([
      { text: expect.stringMatching(/^Ask the backend dev to create server\.js/) },
    ]);
  });

  it('SubagentStop with no last message: "Report sent to the Lead", its card Done, the agent done', () => {
    expect(hookOf(11, run2).last_assistant_message).toBeUndefined();
    expect(after(11)).toMatchObject([
      { type: 'message', from: 'backend', to: 'lead', text: 'Report sent to the Lead' },
      { type: 'task', owner: 'backend', title: 'Create hello-world server.js', status: 'done' },
      { type: 'state', agent: 'backend', state: 'done' },
    ]);
    expect(after(19)).toMatchObject([
      { type: 'message', from: 'reviewer', to: 'lead', text: 'Report sent to the Lead' },
      { type: 'task', owner: 'reviewer', title: 'Review server.js', status: 'done' },
      { type: 'state', agent: 'reviewer', state: 'done' },
    ]);
  });

  it("ignores the SubagentStops that carry the Lead's own type (they read like suggested next prompts)", () => {
    for (const n of [10, 17, 23]) {
      expect(hookOf(n, run2).agent_type).toBe('world-of-agents:lead');
      expect(after(n)).toEqual([]);
    }
  });

  it('ends with both cards Done, everyone idle, and only events that pass parseEvent()', () => {
    const office = run.events.reduce(officeReducer, INITIAL_OFFICE);
    expect(office.tasks.map((t) => [t.owner, t.status])).toEqual([
      ['backend', 'done'],
      ['reviewer', 'done'],
    ]);
    expect(Object.values(office.agents).map((a) => a.state)).toEqual(Array(5).fill('idle'));
    expect(office.messages.map((m) => `${m.from} to ${m.to}`)).toEqual([
      'lead to you',
      'backend to lead',
      'lead to you',
      'reviewer to lead',
      'lead to you',
    ]);
    for (const event of run.events) expect(parseEvent(event)).toEqual({ ok: true, event });
  });
});

describe('mapHook on run 3 (`default` mode: a real permission_prompt)', () => {
  const run = play(run3.map((hook) => hookOf(hook.n, run3)));
  const after = (n: number) => run.steps[n - 1]!.events;
  const upTo = (n: number) =>
    run.steps
      .slice(0, n)
      .flatMap((s) => s.events)
      .reduce(officeReducer, INITIAL_OFFICE);
  const backendCard = hookOf(4, run3).tool_use_id!;

  it("permission_prompt names nobody: the Lead's agent_type and no agent_id, while the Backend dev's Write waits", () => {
    expect(hookOf(10, run3)).toMatchObject({
      tool_name: 'Write',
      agent_type: 'world-of-agents:backend',
      agent_id: hookOf(5, run3).agent_id,
    });
    expect(hookOf(11, run3)).toEqual({
      hook_event_name: 'Notification',
      session_id: '00000000-0000-4000-8000-000000000003',
      agent_type: 'world-of-agents:lead',
      notification_type: 'permission_prompt',
    });
  });

  it('flags the Backend dev, not the Lead, and the Lead keeps waiting', () => {
    expect(after(11)).toEqual([
      { type: 'state', agent: 'backend', state: 'needs-you', taskId: backendCard, at: 10 },
    ]);
    expect(upTo(11).agents.backend).toMatchObject({ state: 'needs-you' });
    expect(upTo(11).agents.lead).toMatchObject({ state: 'waiting' });
  });

  it("clears the flag at that agent's next tool call", () => {
    expect(after(12)).toEqual([
      { type: 'state', agent: 'backend', state: 'writing', taskId: backendCard, at: 11 },
    ]);
  });

  it('SubagentStop with a last message: that message, its card Done, the agent done', () => {
    expect(after(13)).toEqual([
      { type: 'message', from: 'backend', to: 'lead', text: hookOf(13, run3).last_assistant_message, at: 12 },
      {
        type: 'task',
        taskId: backendCard,
        title: 'Create hello-world server.js',
        owner: 'backend',
        status: 'done',
        at: 12,
      },
      { type: 'state', agent: 'backend', state: 'done', taskId: backendCard, at: 12 },
    ]);
  });

  it('a completed <task-notification>: the Lead thinks, the card stays Done, and the header keeps your prompt', () => {
    for (const n of [14, 22]) {
      expect(hookOf(n, run3).task_notification?.status).toBe('completed');
      expect(after(n)).toEqual([{ type: 'state', agent: 'lead', state: 'thinking', at: n - 1 }]);
    }
    expect(run.events.filter((e) => e.type === 'run')).toMatchObject([
      { text: expect.stringMatching(/^Ask the backend dev to create server\.js/) },
    ]);
  });

  it("ignores the SubagentStops that carry the Lead's own type", () => {
    for (const n of [8, 20, 24]) {
      expect(hookOf(n, run3).agent_type).toBe('world-of-agents:lead');
      expect(after(n)).toEqual([]);
    }
  });

  it('gives a screen reader three things to say: the wait, the final report and the end of the session', () => {
    const heard: string[] = [];
    let last = '';
    for (let n = 1; n <= run3.length; n++) {
      const office = upTo(n);
      const lines = [
        ...whoIsWaiting(office),
        finalReport(office)?.text.slice(0, 20) ?? '',
        office.sessionEnded ? 'Session ended' : '',
      ].filter(Boolean);
      for (const line of lines) if (!last.includes(line)) heard.push(line);
      last = lines.join('|');
    }
    expect(heard).toEqual([
      'Backend dev needs your approval in Claude Code',
      'Dima, `server.js` is',
      'Session ended',
    ]);
  });

  it('ends with both cards Done, everyone idle, and only events that pass parseEvent()', () => {
    const office = upTo(run3.length);
    expect(office.tasks.map((t) => [t.owner, t.status])).toEqual([
      ['backend', 'done'],
      ['reviewer', 'done'],
    ]);
    expect(Object.values(office.agents).map((a) => a.state)).toEqual(Array(5).fill('idle'));
    for (const event of run.events) expect(parseEvent(event)).toEqual({ ok: true, event });
  });
});

describe('mapHook when an Agent call and its SubagentStart race (the same millisecond in run 3)', () => {
  const hooks = run3.map((hook) => hookOf(hook.n, run3));
  const swapped = [...hooks];
  [swapped[3], swapped[4]] = [swapped[4]!, swapped[3]!];
  const inOrder = play(hooks);
  const raced = play(swapped);
  const card = hookOf(4, run3).tool_use_id!;
  const backendCard = (events: readonly OfficeEvent[]) =>
    events.filter((e) => e.type === 'task' && e.taskId === card).map((e) => e.type === 'task' && e.status);

  it('the Agent call first: Todo, then In progress when the subagent starts, and PostToolUse adds nothing', () => {
    expect(inOrder.steps[3]!.events).toMatchObject([
      { type: 'task', taskId: card, status: 'todo' },
      { type: 'state', agent: 'lead', state: 'thinking' },
    ]);
    expect(inOrder.steps[4]!.events).toMatchObject([
      { type: 'task', taskId: card, status: 'in-progress' },
      { type: 'state', agent: 'backend', state: 'thinking', taskId: card },
    ]);
    expect(inOrder.steps[5]!.events).toEqual([]);
    expect(backendCard(inOrder.events)).toEqual(['todo', 'in-progress', 'done']);
  });

  it('the subagent first: the card goes straight to In progress, the agent shows it, and PostToolUse adds nothing', () => {
    expect(raced.steps[3]!.events).toEqual([{ type: 'state', agent: 'backend', state: 'thinking', at: 3 }]);
    expect(raced.steps[4]!.events).toEqual([
      {
        type: 'task',
        taskId: card,
        title: 'Create hello-world server.js',
        owner: 'backend',
        status: 'in-progress',
        at: 4,
      },
      { type: 'state', agent: 'backend', state: 'thinking', taskId: card, at: 4 },
      { type: 'state', agent: 'lead', state: 'thinking', at: 4 },
    ]);
    expect(raced.steps[5]!.events).toEqual([]);
    expect(backendCard(raced.events)).toEqual(['in-progress', 'done']);
  });

  it('both orders end in the same office', () => {
    const office = (events: readonly OfficeEvent[]) => events.reduce(officeReducer, INITIAL_OFFICE);
    expect(office(raced.events).tasks).toEqual(office(inOrder.events).tasks);
    expect(office(raced.events).agents).toEqual(office(inOrder.events).agents);
    expect(office(raced.events).tasks.map((t) => t.status)).toEqual(['done', 'done']);
  });

  it('a card for another agent does not go to a run that is waiting for its own', () => {
    const { steps, state } = play([
      start,
      bySub('SubagentStart', 'backend', 'b1'),
      handOut('t1', 'frontend'),
    ]);
    expect(steps[2]!.events).toMatchObject([
      { type: 'task', taskId: 't1', status: 'todo' },
      { agent: 'lead' },
    ]);
    expect(state.runs.b1!.taskId).toBeUndefined();
  });

  it('a run that already has a card keeps it: a second card waits for its own run', () => {
    const { steps } = play([
      start,
      handOut('t1', 'backend'),
      bySub('SubagentStart', 'backend', 'b1'),
      handOut('t2', 'backend'),
      bySub('SubagentStart', 'backend', 'b2'),
    ]);
    expect(steps[3]!.events).toMatchObject([
      { type: 'task', taskId: 't2', status: 'todo' },
      { agent: 'lead' },
    ]);
    expect(steps[4]!.events).toMatchObject([
      { type: 'task', taskId: 't2', status: 'in-progress' },
      { type: 'state', agent: 'backend', taskId: 't2', copies: 2 },
    ]);
  });

  it('a run that has stopped gets no card, created or linked: it is not running', () => {
    const { steps } = play([
      start,
      bySub('SubagentStart', 'backend', 'b1'),
      bySub('SubagentStop', 'backend', 'b1', { last_assistant_message: 'Done.' }),
      handOut('t1', 'backend'),
      returned('t1', 'b1', 'async_launched'),
    ]);
    expect(steps[3]!.events).toMatchObject([
      { type: 'task', taskId: 't1', status: 'todo' },
      { agent: 'lead' },
    ]);
    expect(steps[4]!.events).toEqual([]);
  });

  it("two runs waiting: the oldest gets the card, and the Agent call's own word moves it", () => {
    const { steps, state } = play([
      start,
      bySub('SubagentStart', 'backend', 'b1'),
      bySub('SubagentStart', 'backend', 'b2'),
      handOut('t1', 'backend', 'Server'),
      returned('t1', 'b2', 'async_launched'),
    ]);
    expect(steps[3]!.events[1]).toMatchObject({ state: 'thinking', taskId: 't1', copies: 2 });
    expect(steps[4]!.events).toEqual([
      { type: 'task', taskId: 't1', title: 'Server', owner: 'backend', status: 'in-progress', at: 4 },
      { type: 'state', agent: 'backend', state: 'thinking', taskId: 't1', copies: 2, at: 4 },
    ]);
    expect(state.runs.b1!.taskId).toBeUndefined();
    expect(state.runs.b2!.taskId).toBe('t1');
  });
});

describe('mapHook on run 4 (`default` mode: PermissionRequest, and an idle_prompt after the final report)', () => {
  const run = play(run4.map((hook) => hookOf(hook.n, run4)));
  const after = (n: number) => run.steps[n - 1]!.events;
  const upTo = (n: number) =>
    run.steps
      .slice(0, n)
      .flatMap((s) => s.events)
      .reduce(officeReducer, INITIAL_OFFICE);
  const backendCard = hookOf(4, run4).tool_use_id!;
  const reviewerCard = hookOf(17, run4).tool_use_id!;

  it('PermissionRequest says who asks and for which tool, and nothing else reaches the hall', () => {
    expect(hookOf(10, run4)).toEqual({
      hook_event_name: 'PermissionRequest',
      session_id: '00000000-0000-4000-8000-000000000004',
      agent_id: hookOf(9, run4).agent_id,
      agent_type: 'world-of-agents:backend',
      tool_name: 'Write',
    });
  });

  it('flags the Backend dev at its PermissionRequest; the permission_prompt 6 s later adds nothing', () => {
    expect(after(10)).toEqual([
      { type: 'state', agent: 'backend', state: 'needs-you', taskId: backendCard, at: 9 },
    ]);
    expect(hookOf(11, run4)).toMatchObject({ notification_type: 'permission_prompt' });
    expect(hookOf(11, run4)).not.toHaveProperty('agent_id');
    expect(after(11)).toEqual([]);
    expect(upTo(11).agents.backend).toMatchObject({ state: 'needs-you' });
    expect(upTo(11).agents.lead.state).not.toBe('needs-you');
  });

  it('flags it again for a tool you answered before any permission_prompt came', () => {
    expect(after(12)).toEqual([
      { type: 'state', agent: 'backend', state: 'writing', taskId: backendCard, at: 11 },
    ]);
    expect(after(13)).toEqual([
      { type: 'state', agent: 'backend', state: 'needs-you', taskId: backendCard, at: 12 },
    ]);
  });

  it('SubagentStart before its Agent call (the same millisecond): the card still goes In progress', () => {
    expect(after(16).map((e) => e.type)).toEqual(['state']);
    expect(after(17)).toContainEqual({
      type: 'task',
      taskId: reviewerCard,
      title: expect.any(String),
      owner: 'reviewer',
      status: 'in-progress',
      at: 16,
    });
  });

  it("idle_prompt is not a wait for approval: the Lead's turn is over, and it flags nobody", () => {
    expect(hookOf(26, run4)).toEqual({
      hook_event_name: 'Notification',
      session_id: '00000000-0000-4000-8000-000000000004',
      agent_type: 'world-of-agents:lead',
      notification_type: 'idle_prompt',
    });
    expect(after(26)).toEqual([{ type: 'awaiting-prompt', at: 25 }]);
    const office = upTo(26);
    expect(office.awaitingPrompt).toBe(true);
    expect(whoIsWaiting(office)).toEqual([]);
    expect(Object.values(office.agents).map((a) => a.state)).not.toContain('needs-you');
  });

  it("ignores the SubagentStops that carry the Lead's own type", () => {
    for (const n of [8, 21, 25, 27]) {
      expect(hookOf(n, run4).agent_type).toBe('world-of-agents:lead');
      expect(after(n)).toEqual([]);
    }
  });

  it('asks a screen reader to announce the two approvals and the final report, never the idle_prompt', () => {
    const heard: string[] = [];
    let last = '';
    for (let n = 1; n <= run4.length; n++) {
      const office = upTo(n);
      const lines = [...whoIsWaiting(office), finalReport(office)?.text.slice(0, 20) ?? ''].filter(Boolean);
      for (const line of lines) if (!last.includes(line)) heard.push(line);
      last = lines.join('|');
    }
    expect(heard.slice(0, 2)).toEqual([
      'Backend dev needs your approval in Claude Code',
      'Backend dev needs your approval in Claude Code',
    ]);
    expect(heard).toHaveLength(3);
  });

  it('stays waiting for your next message until the session ends', () => {
    expect(upTo(27).awaitingPrompt).toBe(true);
    expect(upTo(28)).toMatchObject({ awaitingPrompt: false, sessionEnded: true });
  });

  it('ends with both cards Done, everyone idle, and only events that pass parseEvent()', () => {
    const office = upTo(run4.length);
    expect(office.tasks.map((t) => [t.owner, t.status])).toEqual([
      ['backend', 'done'],
      ['reviewer', 'done'],
    ]);
    expect(Object.values(office.agents).map((a) => a.state)).toEqual(Array(5).fill('idle'));
    for (const event of run.events) expect(parseEvent(event)).toEqual({ ok: true, event });
  });

  it('a new prompt after the idle_prompt: the Lead is back to work and the calm line goes', () => {
    const next = mapHook(
      run.steps[26]!.state,
      byLead('UserPromptSubmit', { session_id: run.steps[26]!.state.session!, prompt: 'More' }),
      99,
    );
    expect(next.events.reduce(officeReducer, upTo(27)).awaitingPrompt).toBe(false);
  });
});

describe('mapHook when a PreToolUse lands after its own PermissionRequest (their posts can race)', () => {
  const ready = play([start, handOut('t1', 'backend'), bySub('SubagentStart', 'backend', 'b1')]).state;
  const uses = (tool_name: string) => bySub('PreToolUse', 'backend', 'b1', { tool_name });
  const flagged = mapHook(
    ready,
    bySub('PermissionRequest', 'backend', 'b1', { tool_name: 'Write' }),
    1000,
  ).state;
  const backend = (state: string, at: number) => ({
    type: 'state',
    agent: 'backend',
    state,
    taskId: 't1',
    at,
  });

  it('keeps the flag up, and still counts the agent as the last writer', () => {
    const late = mapHook(flagged, uses('Write'), 1018);
    expect(late.events).toEqual([]);
    expect(late.state.runs.b1!.state).toBe('needs-you');
    expect(late.state.lastWriter).toBe('b1');
  });

  it('a second later it is the next call, so you have answered', () => {
    expect(mapHook(flagged, uses('Write'), 2000).events).toEqual([backend('writing', 2000)]);
  });

  it('another tool at any time: you have answered', () => {
    expect(mapHook(flagged, uses('Read'), 1018).events).toEqual([backend('reading', 1018)]);
  });

  it('the usual order clears nothing it should not: PreToolUse, then PermissionRequest', () => {
    const wrote = mapHook(ready, uses('Write'), 1000);
    expect(wrote.events).toEqual([backend('writing', 1000)]);
    const asked = mapHook(
      wrote.state,
      bySub('PermissionRequest', 'backend', 'b1', { tool_name: 'Write' }),
      1018,
    );
    expect(asked.events).toEqual([backend('needs-you', 1018)]);
  });
});

describe('mapHook on PermissionRequest', () => {
  const asks = (more: Partial<HookInput> = {}) => byLead('PermissionRequest', { tool_name: 'Bash', ...more });

  it('an agent_id wins: that subagent needs you, even if another one wrote last', () => {
    const { steps } = play([
      start,
      handOut('t1', 'backend'),
      handOut('t2', 'frontend'),
      bySub('SubagentStart', 'backend', 'b1'),
      bySub('SubagentStart', 'frontend', 'f1'),
      bySub('PreToolUse', 'frontend', 'f1', { tool_name: 'Edit' }),
      bySub('PermissionRequest', 'backend', 'b1', { tool_name: 'Bash' }),
    ]);
    expect(steps[6]!.events).toEqual([
      { type: 'state', agent: 'backend', state: 'needs-you', taskId: 't1', at: 6 },
    ]);
  });

  it('with no agent_id: the Lead itself, even while a subagent writes', () => {
    const { steps } = play([
      start,
      handOut('t1', 'backend'),
      bySub('SubagentStart', 'backend', 'b1'),
      bySub('PreToolUse', 'backend', 'b1', { tool_name: 'Write' }),
      asks(),
    ]);
    expect(steps[4]!.events).toEqual([{ type: 'state', agent: 'lead', state: 'needs-you', at: 4 }]);
  });

  it('with no agent_id and nobody writing: the Lead', () => {
    const { steps } = play([start, asks({ tool_name: 'Read' })]);
    expect(steps[1]!.events).toEqual([{ type: 'state', agent: 'lead', state: 'needs-you', at: 1 }]);
  });

  it('is ignored from another session, and from an agent type that is not ours', () => {
    const { steps } = play([start, asks({ session_id: 'session-2' }), asks({ agent_type: 'Explore' })]);
    expect(steps[1]!.events).toEqual([]);
    expect(steps[2]!.events).toEqual([]);
  });

  it('is ignored from a run that has stopped', () => {
    const { steps } = play([
      start,
      handOut('t1', 'backend'),
      bySub('SubagentStart', 'backend', 'b1'),
      bySub('SubagentStop', 'backend', 'b1', { last_assistant_message: 'Done.' }),
      bySub('PermissionRequest', 'backend', 'b1', { tool_name: 'Bash' }),
    ]);
    expect(steps[4]!.events).toEqual([]);
  });
});

describe('mapHook: once a PermissionRequest has arrived, a permission_prompt never guesses', () => {
  const prompt = byLead('Notification', { notification_type: 'permission_prompt' });
  const two = [
    start,
    handOut('t1', 'backend'),
    handOut('t2', 'frontend'),
    bySub('SubagentStart', 'backend', 'b1'),
    bySub('SubagentStart', 'frontend', 'f1'),
  ];
  const asksFor = (agent: string, id: string, tool_name: string) =>
    bySub('PermissionRequest', agent, id, { tool_name });
  const flagged = (events: readonly OfficeEvent[]) =>
    events
      .filter((e) => e.type === 'state' && e.state === 'needs-you')
      .map((e) => (e as { agent: string }).agent);

  it('the agent that asked stays the only one flagged, even when another wrote last', () => {
    const { steps } = play([
      ...two,
      bySub('PreToolUse', 'backend', 'b1', { tool_name: 'Bash' }),
      bySub('PreToolUse', 'frontend', 'f1', { tool_name: 'Edit' }),
      asksFor('backend', 'b1', 'Bash'),
      prompt,
    ]);
    expect(flagged(steps[7]!.events)).toEqual(['backend']);
    expect(steps[8]!.events).toEqual([]);
  });

  it("the Lead's own request: no subagent gets flagged for it, even one that has written", () => {
    const { steps } = play([
      ...two,
      bySub('PreToolUse', 'backend', 'b1', { tool_name: 'Write' }),
      byLead('PermissionRequest', { tool_name: 'Bash' }),
      prompt,
    ]);
    expect(flagged(steps[6]!.events)).toEqual(['lead']);
    expect(steps[7]!.events).toEqual([]);
  });

  it('still no guess when the flag has already cleared by the time the prompt comes', () => {
    const { steps } = play([
      ...two,
      bySub('PreToolUse', 'frontend', 'f1', { tool_name: 'Edit' }),
      asksFor('backend', 'b1', 'Bash'),
      bySub('PreToolUse', 'backend', 'b1', { tool_name: 'Read' }),
      prompt,
    ]);
    expect(flagged(steps[6]!.events)).toEqual(['backend']);
    expect(flagged(steps[7]!.events)).toEqual([]);
    expect(steps[8]!.events).toEqual([]);
  });

  it('still no guess when the agent that asked has stopped', () => {
    const { steps } = play([
      ...two,
      bySub('PreToolUse', 'frontend', 'f1', { tool_name: 'Edit' }),
      asksFor('backend', 'b1', 'Bash'),
      bySub('SubagentStop', 'backend', 'b1', { last_assistant_message: 'Done.' }),
      prompt,
    ]);
    expect(steps[8]!.events).toEqual([]);
  });

  it('a request from a run that had stopped still counts as having arrived', () => {
    const { steps } = play([
      ...two,
      bySub('PreToolUse', 'frontend', 'f1', { tool_name: 'Edit' }),
      bySub('SubagentStop', 'backend', 'b1', { last_assistant_message: 'Done.' }),
      asksFor('backend', 'b1', 'Bash'),
      prompt,
    ]);
    expect(steps[8]!.events).toEqual([]);
  });

  it('a new session starts over: with no request in it, the guess runs', () => {
    const other = (input: HookInput): HookInput => ({ ...input, session_id: 'session-2' });
    const { steps, state } = play([
      ...two,
      asksFor('backend', 'b1', 'Bash'),
      other(start),
      other(handOut('t9', 'frontend')),
      other(bySub('SubagentStart', 'frontend', 'f9')),
      other(bySub('PreToolUse', 'frontend', 'f9', { tool_name: 'Edit' })),
      other(prompt),
    ]);
    expect(flagged(steps.at(-1)!.events)).toEqual(['frontend']);
    expect(state.askSeen).toBe(false);
  });

  it('a permission_prompt that names its agent is not a guess: it still flags that agent', () => {
    const { steps } = play([
      ...two,
      asksFor('backend', 'b1', 'Bash'),
      bySub('Notification', 'frontend', 'f1', { notification_type: 'permission_prompt' }),
    ]);
    expect(flagged(steps[6]!.events)).toEqual(['frontend']);
  });

  it('run 4 with its PermissionRequests lost: the guess runs and names the right agent', () => {
    const lost = run4
      .map((hook) => hookOf(hook.n, run4))
      .filter((hook) => hook.hook_event_name !== 'PermissionRequest');
    const { steps } = play(lost);
    const at = lost.findIndex((hook) => hook.notification_type === 'permission_prompt');
    expect(flagged(steps[at]!.events)).toEqual(['backend']);
  });
});

describe('mapHook on a permission_prompt when no PermissionRequest has arrived in the session', () => {
  const prompt = byLead('Notification', { notification_type: 'permission_prompt' });
  const needsYou = (agent: string, taskId: string, at: number) => ({
    type: 'state',
    agent,
    state: 'needs-you',
    taskId,
    at,
  });
  const two = [
    start,
    handOut('t1', 'backend'),
    handOut('t2', 'frontend'),
    bySub('SubagentStart', 'backend', 'b1'),
    bySub('SubagentStart', 'frontend', 'f1'),
  ];

  it('a subagent that only reads does not take it from the one that wrote', () => {
    const { steps } = play([
      ...two,
      bySub('PreToolUse', 'backend', 'b1', { tool_name: 'Bash' }),
      bySub('PreToolUse', 'frontend', 'f1', { tool_name: 'Read' }),
      prompt,
    ]);
    expect(steps[7]!.events).toEqual([needsYou('backend', 't1', 7)]);
  });

  it('of two writers, the later one', () => {
    const { steps } = play([
      ...two,
      bySub('PreToolUse', 'backend', 'b1', { tool_name: 'Write' }),
      bySub('PreToolUse', 'frontend', 'f1', { tool_name: 'Edit' }),
      prompt,
    ]);
    expect(steps[7]!.events).toEqual([needsYou('frontend', 't2', 7)]);
  });

  it('a late Write from a stopped run does not take it from a running writer', () => {
    const { steps } = play([
      ...two,
      bySub('PreToolUse', 'frontend', 'f1', { tool_name: 'Edit' }),
      bySub('SubagentStop', 'backend', 'b1', { last_assistant_message: 'Done.' }),
      bySub('PreToolUse', 'backend', 'b1', { tool_name: 'Write' }),
      prompt,
    ]);
    expect(steps[7]!.events).toEqual([]);
    expect(steps[8]!.events).toEqual([needsYou('frontend', 't2', 8)]);
  });

  it('the Lead, when the last writer has stopped', () => {
    const { steps } = play([
      ...two,
      bySub('PreToolUse', 'backend', 'b1', { tool_name: 'Write' }),
      bySub('SubagentStop', 'backend', 'b1', { last_assistant_message: 'Done.' }),
      prompt,
    ]);
    expect(steps[7]!.events).toEqual([{ type: 'state', agent: 'lead', state: 'needs-you', at: 7 }]);
  });

  it('the Lead in a new session: it forgets the old writer', () => {
    const other = (input: HookInput): HookInput => ({ ...input, session_id: 'session-2' });
    const { steps, state } = play([
      ...two,
      bySub('PreToolUse', 'backend', 'b1', { tool_name: 'Write' }),
      other(start),
      other(prompt),
    ]);
    expect(steps[7]!.events).toEqual([{ type: 'state', agent: 'lead', state: 'needs-you', at: 7 }]);
    expect(state.lastWriter).toBeNull();
  });

  it('the Lead when nobody has written, and until its next event', () => {
    const { steps } = play([
      start,
      byLead('PreToolUse', { tool_name: 'Read' }),
      prompt,
      byLead('PreToolUse', { tool_name: 'Glob' }),
    ]);
    expect(steps[2]!.events).toEqual([{ type: 'state', agent: 'lead', state: 'needs-you', at: 2 }]);
    expect(steps[3]!.events).toEqual([{ type: 'state', agent: 'lead', state: 'reading', at: 3 }]);
  });
});

describe('mapHook on a session that ends mid-run', () => {
  const { steps, state, events } = play([
    start,
    handOut('t1', 'backend', 'Server'),
    bySub('SubagentStart', 'backend', 'b1'),
    bySub('PreToolUse', 'backend', 'b1', { tool_name: 'Write' }),
    byLead('SessionEnd', { reason: 'prompt_input_exit' }),
    bySub('PreToolUse', 'backend', 'b1', { tool_name: 'Edit' }),
  ]);

  it('everyone goes idle, and the card stays where it is', () => {
    expect(steps[4]!.events.map((e) => e.type)).toEqual([...Array(5).fill('state'), 'session-end']);
    const office = events.reduce(officeReducer, INITIAL_OFFICE);
    expect(Object.values(office.agents).map((a) => a.state)).toEqual(Array(5).fill('idle'));
    expect(workingCount(office)).toBe(0);
    expect(office.tasks).toMatchObject([{ id: 't1', status: 'in-progress' }]);
    expect(office.sessionEnded).toBe(true);
  });

  it('a late hook from the dead session changes nothing', () => {
    expect(steps[5]!.events).toEqual([]);
    expect(state.runs.b1!.stopped).toBe(true);
  });
});

describe('mapHook rows no recorded run has (hand-built from docs/v2-hooks.md)', () => {
  it('Notification permission_prompt with an agent_id, if Claude Code ever sends one: that agent needs you', () => {
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

  it('Notification permission_prompt with no subagent writing: the Lead needs you. Other types: nothing', () => {
    const { steps } = play([
      start,
      byLead('Notification', { notification_type: 'permission_prompt' }),
      byLead('Notification', { notification_type: 'auth_success' }),
    ]);
    expect(steps[1]!.events).toEqual([{ type: 'state', agent: 'lead', state: 'needs-you', at: 1 }]);
    expect(steps[2]!.events).toEqual([]);
  });

  it('StopFailure: the Lead shows the error state', () => {
    const { steps } = play([start, byLead('StopFailure')]);
    expect(steps[1]!.events).toEqual([{ type: 'state', agent: 'lead', state: 'error', at: 1 }]);
  });
});

describe('mapHook rules', () => {
  it('a completed <task-notification> before its SubagentStop: the card waits for the stop, and the run is never reset', () => {
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
    expect(steps[4]!.events).toEqual([{ type: 'state', agent: 'lead', state: 'thinking', at: 4 }]);
    expect(steps[5]!.events).toMatchObject([
      { type: 'message', text: 'Server is up.' },
      { type: 'task', taskId: 't1', status: 'done' },
      { type: 'state', agent: 'backend', state: 'done' },
    ]);
    const office = events.reduce(officeReducer, INITIAL_OFFICE);
    expect(office.tasks).toEqual([{ id: 't1', title: 'Server', owner: 'backend', status: 'done' }]);
  });

  it('a failed subagent, SubagentStop first and then a failed <task-notification>: the card goes back to In progress, the agent to error', () => {
    const { steps, events } = play([
      start,
      handOut('t1', 'backend', 'Server'),
      bySub('SubagentStart', 'backend', 'b1'),
      returned('t1', 'b1', 'async_launched'),
      bySub('SubagentStop', 'backend', 'b1', { last_assistant_message: 'Gave up.' }),
      byLead('UserPromptSubmit', {
        task_notification: { task_id: 'b1', tool_use_id: 't1', status: 'failed' },
      }),
    ]);
    expect(steps[4]!.events).toEqual([
      { type: 'message', from: 'backend', to: 'lead', text: 'Gave up.', at: 4 },
      { type: 'task', taskId: 't1', title: 'Server', owner: 'backend', status: 'done', at: 4 },
      { type: 'state', agent: 'backend', state: 'done', taskId: 't1', at: 4 },
    ]);
    expect(steps[5]!.events).toEqual([
      { type: 'task', taskId: 't1', title: 'Server', owner: 'backend', status: 'in-progress', at: 5 },
      { type: 'state', agent: 'backend', state: 'error', taskId: 't1', at: 5 },
      { type: 'state', agent: 'lead', state: 'thinking', at: 5 },
    ]);
    const office = events.reduce(officeReducer, INITIAL_OFFICE);
    expect(office.messages).toMatchObject([{ from: 'backend', to: 'lead', text: 'Gave up.' }]);
    expect(office.agents.backend).toMatchObject({ state: 'error', taskId: 't1' });
    expect(office.tasks).toEqual([{ id: 't1', title: 'Server', owner: 'backend', status: 'in-progress' }]);
  });

  it.each(['failed', 'killed'])(
    'a failed subagent, <task-notification> %s first and then SubagentStop: message delivered, agent still in error, card not Done',
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
      // The stop still reports, but sends no state: the agent stays in error. A later start changes nothing.
      expect(steps[5]!.events).toEqual([
        { type: 'message', from: 'backend', to: 'lead', text: 'Gave up.', at: 5 },
      ]);
      expect(steps[6]!.events).toEqual([]);
      const office = events.reduce(officeReducer, INITIAL_OFFICE);
      expect(office.messages).toMatchObject([{ from: 'backend', to: 'lead', text: 'Gave up.' }]);
      expect(office.agents.backend).toMatchObject({ state: 'error', taskId: 't1' });
      expect(office.tasks).toEqual([{ id: 't1', title: 'Server', owner: 'backend', status: 'in-progress' }]);
    },
  );

  it("SubagentStop after the Lead's last Stop (the run already counts as stopped): still its message, card Done, done", () => {
    const { steps } = play([
      start,
      handOut('t1', 'designer'),
      bySub('SubagentStart', 'designer', 'd1'),
      byLead('Stop'), // nothing in background_tasks: every run counts as stopped
      bySub('SubagentStop', 'designer', 'd1', { last_assistant_message: 'Colours done.' }),
    ]);
    expect(steps[4]!.events).toEqual([
      { type: 'message', from: 'designer', to: 'lead', text: 'Colours done.', at: 4 },
      { type: 'task', taskId: 't1', title: 'A task', owner: 'designer', status: 'done', at: 4 },
      { type: 'state', agent: 'designer', state: 'done', taskId: 't1', at: 4 },
    ]);
  });

  it.each([
    ['no last message', {}],
    ['a blank one', { last_assistant_message: ' \n ' }],
  ])('SubagentStop with %s (as in run 2): "Report sent to the Lead", card Done, done', (_, more) => {
    const { steps } = play([
      start,
      handOut('t1', 'backend'),
      bySub('SubagentStart', 'backend', 'b1'),
      bySub('SubagentStop', 'backend', 'b1', more),
    ]);
    expect(steps[3]!.events).toEqual([
      { type: 'message', from: 'backend', to: 'lead', text: 'Report sent to the Lead', at: 3 },
      { type: 'task', taskId: 't1', title: 'A task', owner: 'backend', status: 'done', at: 3 },
      { type: 'state', agent: 'backend', state: 'done', taskId: 't1', at: 3 },
    ]);
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
      { type: 'state', agent: 'frontend', state: 'done', taskId: 't1' },
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
    // The first copy stops: its card is Done, but the agent stays busy with the other one.
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
      bySub('PreToolUse', 'designer', 'Y', { tool_name: 'Write' }),
    ]);
    expect(steps[3]!.events[1]).toMatchObject({ state: 'thinking', taskId: 'tA' });
    expect(steps[4]!.events).toEqual([]);
    // Y is already running, so the card it really works goes In progress and the agent shows it.
    expect(steps[5]!.events).toEqual([
      { type: 'task', taskId: 'tB', title: 'Fonts', owner: 'designer', status: 'in-progress', at: 5 },
      { type: 'state', agent: 'designer', state: 'thinking', taskId: 'tB', at: 5 },
    ]);
    expect(steps[6]!.events[1]).toMatchObject({ state: 'thinking', taskId: 'tA', copies: 2 });
    expect(steps[7]!.events).toEqual([
      { type: 'state', agent: 'designer', state: 'writing', taskId: 'tB', copies: 2, at: 7 },
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

  it('gives no card to an Agent call for an agent that is not ours, or with an id that cannot be a task id: the Lead only thinks', () => {
    const { steps, state } = play([
      start,
      handOut('t1', 'Explore'),
      handOut('t2', 'lead'),
      handOut('../t3', 'backend'),
    ]);
    expect(steps.slice(1).flatMap((s) => s.events)).toEqual(
      [1, 2, 3].map((at) => ({ type: 'state', agent: 'lead', state: 'thinking', at })),
    );
    expect(state.cards).toEqual([]);
  });
});

describe('mapHook sessions: the hall follows the first one it hears from, until another starts new, cleared or resumed', () => {
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
      expect(steps[6]!.events).toMatchObject([
        { type: 'task', taskId: 't2', owner: 'designer' },
        { type: 'state', agent: 'lead', state: 'thinking' },
      ]);
      expect(state).toMatchObject({ session: 'session-2', runs: {} });
      expect(state.cards.map((c) => c.taskId)).toEqual(['t2']);
    },
  );

  it('a hall with no session yet (started after Claude Code) adopts the first one it hears from', () => {
    const { steps, state } = play([
      byLead('UserPromptSubmit', { prompt: 'Build a server' }),
      other(handOut('t2', 'designer')),
      handOut('t1', 'backend'),
    ]);
    expect(steps[0]!.events).toMatchObject([
      { type: 'run', text: 'Build a server' },
      { type: 'state', agent: 'lead', state: 'thinking' },
    ]);
    expect(steps[1]!.events).toEqual([]);
    expect(steps[2]!.events).toMatchObject([{ type: 'task', taskId: 't1' }, { agent: 'lead' }]);
    expect(state.session).toBe(S);
    // A compaction start is a hook like any other: adopted, and nothing to reset.
    const compacted = mapHook(INITIAL_MAP, other(byLead('SessionStart', { source: 'compact' })), 0);
    expect(compacted).toEqual({ state: { ...INITIAL_MAP, session: 'session-2' }, events: [] });
  });

  it('a session adopted that way is switched only by a new, cleared or resumed one', () => {
    const { steps, state } = play([
      bySub('PreToolUse', 'backend', 'b1', { tool_name: 'Write' }), // adopted mid-run
      other(byLead('UserPromptSubmit', { prompt: 'Elsewhere' })),
      other(byLead('SessionStart', { source: 'compact' })),
      other(byLead('SessionStart', { source: 'resume' })),
      other(byLead('UserPromptSubmit', { prompt: 'Next task' })),
      byLead('UserPromptSubmit', { prompt: 'The old window' }),
    ]);
    expect(steps[0]!.events).toMatchObject([
      { type: 'state', agent: 'backend', state: 'thinking' },
      { type: 'state', agent: 'backend', state: 'writing' },
    ]);
    expect(steps[1]!.events).toEqual([]);
    expect(steps[2]!.events).toEqual([]);
    expect(steps[3]!.events).toEqual([{ type: 'reset', at: 3 }]);
    expect(steps[4]!.events).toMatchObject([{ type: 'run', text: 'Next task' }, { agent: 'lead' }]);
    expect(steps[5]!.events).toEqual([]);
    expect(state.session).toBe('session-2');
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

  // Dima's report: the Lead's answer missing from the feed. The desktop app serves a session from a fresh Claude Code
  // process after a focus change (its log: a "temporary query" a few seconds before the message), and a resumed
  // process fires SessionStart with source resume and the same session id (2.1.318, checked 10 Nov). That reset the run.
  it('the session it follows, resumed by a fresh process: the run goes on, and the answer stays in the feed', () => {
    const { steps, events, state } = play([
      start,
      byLead('UserPromptSubmit', { prompt: 'hi' }),
      byLead('Stop', { last_assistant_message: 'Hello Dima. Tell me what to build.' }),
      byLead('SessionStart', { source: 'resume' }),
      byLead('UserPromptSubmit', { prompt: 'Build a server' }),
    ]);
    expect(steps[3]!.events).toEqual([]);
    expect(state.session).toBe(S);
    const office = events.reduce(officeReducer, INITIAL_OFFICE);
    expect(office.runText).toBe('Build a server');
    expect(feedLines(office.log, null)).toContainEqual(
      expect.objectContaining({
        kind: 'message',
        from: 'lead',
        to: 'you',
        text: 'Hello Dima. Tell me what to build.',
      }),
    );
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

describe("the Reviewer's report carries the calls the hall saw (v3.1, D10)", () => {
  const officeAfter = (run: typeof run1) =>
    play(run.map((hook) => hookOf(hook.n, run))).events.reduce(officeReducer, INITIAL_OFFICE);
  const R = 'rev-1';
  const call = (tool_name: string, id = R) => bySub('PreToolUse', 'reviewer', id, { tool_name });
  const stop = (id = R) => bySub('SubagentStop', 'reviewer', id, { last_assistant_message: 'Done.' });
  const messages = (events: readonly OfficeEvent[]) => events.filter((e) => e.type === 'message');

  it.each([
    ['run 1', run1, 3],
    ['run 2', run2, 1],
    ['run 3', run3, 1],
    ['run 4', run4, 1],
  ] as const)('%s: the Reviewer read %i times, and no other message carries a count', (_, run, reads) => {
    expect(officeAfter(run).messages.filter((m) => m.tools)).toEqual([
      expect.objectContaining({ from: 'reviewer', to: 'lead', tools: { Read: reads, Grep: 0, Glob: 0 } }),
    ]);
  });

  it("the recorded reports predate the format: each run has one review, and it shows as written (run 2's has no text)", () => {
    for (const run of [run1, run2, run3, run4]) {
      const reviews = reviewsOf(officeAfter(run).messages);
      expect(reviews).toHaveLength(1);
      expect(reviews[0]!.review).toBeNull();
    }
    expect(reviewsOf(officeAfter(run2).messages)[0]!.message.text).toBe('Report sent to the Lead');
  });

  it('counts Read, Grep and Glob for each run on its own, and no other tool', () => {
    const { events } = play([
      start,
      call('Read'),
      call('Grep'),
      call('Glob'),
      call('Read'),
      call('Edit'),
      call('Bash'),
      call('Read', 'rev-2'),
      stop(),
      stop('rev-2'),
    ]);
    expect(messages(events)).toEqual([
      {
        type: 'message',
        from: 'reviewer',
        to: 'lead',
        text: 'Done.',
        tools: { Read: 2, Grep: 1, Glob: 1 },
        at: 8,
      },
      {
        type: 'message',
        from: 'reviewer',
        to: 'lead',
        text: 'Done.',
        tools: { Read: 1, Grep: 0, Glob: 0 },
        at: 9,
      },
    ]);
  });

  it('ignores a call that lands after the stop, so the count is "at least"', () => {
    const { events, state } = play([start, call('Read'), stop(), call('Read')]);
    expect(messages(events)).toMatchObject([{ tools: { Read: 1, Grep: 0, Glob: 0 } }]);
    expect(state.runs[R]!.tools).toEqual({ Read: 1, Grep: 0, Glob: 0 });
  });

  it('reports zeros when it saw no call, so the board can say the hall saw none', () => {
    expect(messages(play([start, stop()]).events)).toMatchObject([{ tools: { Read: 0, Grep: 0, Glob: 0 } }]);
  });

  it("puts a count on the Reviewer's report only, never on another agent's", () => {
    const { events } = play([
      start,
      bySub('PreToolUse', 'backend', 'b1', { tool_name: 'Read' }),
      bySub('SubagentStop', 'backend', 'b1', { last_assistant_message: 'Built it.' }),
    ]);
    expect(messages(events)).toEqual([
      { type: 'message', from: 'backend', to: 'lead', text: 'Built it.', at: 2 },
    ]);
  });

  it('counts a Read that lands just after its own PermissionRequest: the call still happened', () => {
    const { steps, events } = play([
      start,
      bySub('PermissionRequest', 'reviewer', R, { tool_name: 'Read' }),
      call('Read'),
      stop(),
    ]);
    expect(steps[2]!.events).toEqual([]); // the flag stays up, as before
    expect(messages(events)).toMatchObject([{ tools: { Read: 1, Grep: 0, Glob: 0 } }]);
  });

  it("keeps the count when the Reviewer's task fails before its stop arrives", () => {
    const { events } = play([
      start,
      handOut('t1', 'reviewer', 'Review'),
      bySub('SubagentStart', 'reviewer', R),
      returned('t1', R, 'async_launched'),
      call('Grep'),
      byLead('UserPromptSubmit', { task_notification: { task_id: R, tool_use_id: 't1', status: 'failed' } }),
      stop(),
    ]);
    expect(messages(events)).toMatchObject([{ from: 'reviewer', tools: { Read: 0, Grep: 1, Glob: 0 } }]);
  });

  it(`stops counting at ${LIMITS.toolCalls}, so the report still passes parseEvent() and arrives`, () => {
    const full: MapState = {
      ...INITIAL_MAP,
      session: S,
      runs: {
        [R]: {
          agent: 'reviewer',
          state: 'reading',
          stopped: false,
          tools: { Read: LIMITS.toolCalls, Grep: 0, Glob: 0 },
        },
      },
    };
    const { events } = play([call('Read'), stop()], full);
    expect(messages(events)).toMatchObject([{ tools: { Read: LIMITS.toolCalls, Grep: 0, Glob: 0 } }]);
  });
});

describe("the quality gate's verdicts on a SubagentStop (v3.3)", () => {
  const run = (gate?: 'retry' | 'passed' | 'failed') =>
    play([
      start,
      handOut('t1', 'backend', 'Server'),
      bySub('SubagentStart', 'backend', 'b1'),
      returned('t1', 'b1', 'async_launched'),
      bySub('SubagentStop', 'backend', 'b1', {
        last_assistant_message: 'Done, I think.',
        ...(gate ? { gate } : {}),
      }),
      bySub('PreToolUse', 'backend', 'b1', { tool_name: 'Edit' }),
    ]);

  it('retry: the agent is still at work, its card stays In progress, no report yet, and its next call shows', () => {
    const { steps, state } = run('retry');
    expect(steps[4]!.events).toEqual([
      { type: 'state', agent: 'backend', state: 'thinking', taskId: 't1', at: 4 },
    ]);
    expect(state.cards[0]!.done).toBe(false);
    expect(state.runs.b1!.stopped).toBe(false);
    expect(steps[5]!.events).toMatchObject([{ agent: 'backend', state: 'writing' }]);
  });

  it('failed: the report reaches the Lead, the agent shows the error, the card stays open', () => {
    const { steps, state } = run('failed');
    expect(steps[4]!.events).toEqual([
      { type: 'message', from: 'backend', to: 'lead', text: 'Done, I think.', at: 4 },
      { type: 'state', agent: 'backend', state: 'error', taskId: 't1', at: 4 },
    ]);
    expect(state.cards[0]!.done).toBe(false);
    expect(state.runs.b1!.stopped).toBe(true);
    expect(steps[5]!.events).toEqual([]);
  });

  // 3.3d: a real run (14 Nov) called the Backend dev in the foreground: its Agent call came back "completed" 131 ms after
  // the gate's failed stop, and closed the card.
  it("failed, then the foreground call's completed result: the card still stays open", () => {
    const foreground = (gate: 'failed' | 'passed') =>
      play([
        start,
        handOut('t1', 'backend', 'Server'),
        bySub('SubagentStart', 'backend', 'b1'),
        bySub('SubagentStop', 'backend', 'b1', { last_assistant_message: 'It still fails.', gate }),
        returned('t1', 'b1', 'completed'),
      ]);
    const failed = foreground('failed');
    expect(failed.steps[4]!.events).toEqual([]);
    expect(failed.state.cards[0]!.done).toBe(false);
    // A pass closes it at the stop, as ever, and the completed result changes nothing after it.
    const passed = foreground('passed');
    expect(passed.steps[3]!.events).toMatchObject([
      { type: 'message' },
      { type: 'task', status: 'done' },
      { type: 'state' },
    ]);
    expect(passed.steps[4]!.events).toEqual([]);
    expect(passed.state.cards[0]!.done).toBe(true);
  });

  it("a completed result for a run that didn't fail still closes its card, stop or no stop", () => {
    const { steps, state } = play([
      start,
      handOut('t1', 'backend', 'Server'),
      bySub('SubagentStart', 'backend', 'b1'),
      returned('t1', 'b1', 'completed'),
    ]);
    expect(steps[3]!.events).toMatchObject([{ type: 'task', status: 'done' }]);
    expect(state.cards[0]!.done).toBe(true);
  });

  it('passed, or no gate: a stop as before, the card Done', () => {
    for (const gate of ['passed', undefined] as const) {
      const { steps, state } = run(gate);
      expect(steps[4]!.events).toMatchObject([
        { type: 'message', from: 'backend' },
        { type: 'task', status: 'done' },
        { type: 'state', agent: 'backend', state: 'done' },
      ]);
      expect(state.cards[0]!.done).toBe(true);
    }
  });
});

describe("the team's specialists (v3.4)", () => {
  const spec = (
    hook_event_name: string,
    agent_id = 's1',
    agent = 'frontend-react-dev',
    more: Partial<HookInput> = {},
  ) => ({ hook_event_name, session_id: S, agent_type: `woa-team:${agent}`, agent_id, ...more }) as HookInput;
  const shown = (events: readonly OfficeEvent[]) => events.filter((e) => e.type === 'specialist');

  it('at work from the first hook seen, once, and done at its stop; its guild lead is told by name only', () => {
    const { events } = play([
      start,
      spec('SubagentStart'),
      spec('PreToolUse', 's1', 'frontend-react-dev', { tool_name: 'Edit' }),
      spec('SubagentStop'),
    ]);
    expect(shown(events)).toEqual([
      { type: 'specialist', lead: 'frontend', name: 'react-dev', working: true, at: 1 },
      { type: 'specialist', lead: 'frontend', name: 'react-dev', working: false, at: 3 },
    ]);
    // No state event for anyone: the guild lead's own state stays its own.
    expect(events.filter((e) => e.type === 'state')).toEqual([]);
  });

  it('ignores a hook after the stop, another session, and an agent type that is not a specialist', () => {
    const { events } = play([
      start,
      spec('SubagentStart'),
      spec('SubagentStop'),
      spec('PreToolUse', 's1', 'frontend-react-dev', { tool_name: 'Read' }),
      { ...spec('SubagentStart', 's2'), session_id: 'other' },
      spec('SubagentStart', 's3', 'ops-runner'),
      spec('SubagentStart', 's4', 'frontend-React_dev'),
      { ...spec('SubagentStart', 's5'), agent_type: 'woa-team:frontend-react-dev:x' },
      { ...spec('SubagentStart', 's6'), agent_type: 'some-plugin:frontend-react-dev' },
      spec('SubagentStop'), // a second stop of s1
    ]);
    expect(shown(events)).toHaveLength(2);
  });

  it('maps each guild to its lead, and every event passes parseEvent()', () => {
    const { events } = play([
      start,
      spec('SubagentStart', 'a', 'design-motion-designer'),
      spec('SubagentStart', 'b', 'backend-api-dev'),
      spec('SubagentStart', 'c', 'review-security-warden'),
    ]);
    expect(shown(events).map((e) => e.type === 'specialist' && [e.lead, e.name])).toEqual([
      ['designer', 'motion-designer'],
      ['backend', 'api-dev'],
      ['reviewer', 'security-warden'],
    ]);
    for (const event of events) expect(parseEvent(event).ok).toBe(true);
  });

  it('starts over with a new session', () => {
    const { state } = play([start, spec('SubagentStart'), start]);
    expect(state.specialists).toEqual({});
  });
});
