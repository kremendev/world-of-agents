import { act, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { INITIAL_MAP, mapHook, type MapState } from '../server/map';
import App from './App';
import type { AgentId, AgentState, OfficeEvent } from './events/schema';
import { HEALTH_TIMEOUT_MS, RECHECK_MS, RETRY_MS } from './live/hall';
import { SEATS } from './office/hall/destination';
import { speechMs } from './office/hall/talk';
import { CHECK_SPOT, FETCH_SPOTS, REST_SPOTS, type Point } from './office/hall/walk';
import { createPlayer } from './script/player';
import { FakeEventSource } from './test/fakeEventSource';

// The real player, watched: nothing on screen shows a demo ticking away behind a live hall.
vi.mock('./script/player', async (original) => {
  const real = await original<typeof import('./script/player')>();
  return { ...real, createPlayer: vi.fn(real.createPlayer) };
});

const RUN_TEXT = 'Build a server';
const start: OfficeEvent[] = [
  { type: 'reset', at: 0 },
  { type: 'run', text: RUN_TEXT, at: 1 },
  { type: 'task', taskId: 't1', title: 'Server', owner: 'backend', status: 'in-progress', at: 2 },
  { type: 'state', agent: 'backend', state: 'writing', taskId: 't1', at: 3 },
];
const say = (text: string, to: AgentId | 'you' = 'you', from: AgentId = 'lead'): OfficeEvent => ({
  type: 'message',
  from,
  to,
  text,
  at: 4,
});
const state = (agent: AgentId, s: AgentState): OfficeEvent => ({
  type: 'state',
  agent,
  state: s,
  at: 5,
});

const hallAnswers = () =>
  vi.stubGlobal(
    'fetch',
    vi.fn(async () => ({ ok: true, json: async () => ({ ok: true }) })),
  );

/** Runs what is waiting on promises (the health check). React sees the result when the act() ends. */
const settle = () => act(async () => {});

/** The app with a hall behind it, the replay already delivered. */
/** What the status line says in Live, with nothing else to say. */
const LIVE_NOTE = 'Live · Type your task in Claude Code. The hall only watches.';

async function renderLive(replay: readonly OfficeEvent[] = []) {
  hallAnswers();
  const view = render(<App />);
  await settle();
  const source = () => FakeEventSource.latest;
  const tag = (id: AgentId) => view.container.querySelector<HTMLElement>(`.agent-tag[data-agent="${id}"]`)!;
  const tick = (ms = 16) => {
    for (let left = ms; left > 0; left -= 50) act(() => vi.advanceTimersByTime(Math.min(50, left)));
  };
  act(() => {
    for (const event of replay) source().send(event);
    source().replayed();
  });
  tick();
  return {
    ...view,
    source,
    tick,
    emit: (...events: OfficeEvent[]) => {
      act(() => {
        for (const event of events) source().send(event);
      });
      tick();
    },
    feet: (id: AgentId): Point => {
      const style = tag(id).style;
      return { x: Number(style.getPropertyValue('--x')), y: Number(style.getPropertyValue('--y')) };
    },
    bubble: (id: AgentId) => tag(id).querySelector('.state-bubble')?.textContent ?? null,
    speech: (id: AgentId) => tag(id).querySelector('.speech')?.textContent ?? null,
    live: () => view.container.querySelector('[aria-live="polite"]')!,
    badge: () => view.container.querySelector('.brand [class*="mode-"]')?.textContent ?? null,
    banner: () => view.container.querySelector('.status-line.needs-you')?.textContent ?? null,
    status: () => view.container.querySelector('.status-line')?.textContent ?? null,
  };
}

const xy = (p: Point) => ({ x: p.x, y: p.y });
const button = (name: string) => screen.getByRole('button', { name });
const noButton = (name: string) => expect(screen.queryByRole('button', { name })).toBeNull();
/** Long enough for any walk across the hall. */
const WALK_MS = 30_000;

beforeEach(() => {
  vi.useFakeTimers();
  vi.mocked(createPlayer).mockClear();
  FakeEventSource.all = [];
  vi.stubGlobal('EventSource', FakeEventSource);
});

afterEach(() => {
  vi.unstubAllGlobals();
  vi.unstubAllEnvs();
  vi.useRealTimers();
});

describe('Demo and Live', () => {
  it('goes Live when the hall answers: its header, no demo controls, and the demo does not play', async () => {
    const app = await renderLive(start);
    expect(app.badge()).toBe('Live');
    expect(screen.getByText('Forge Hall · v2')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1, name: 'World of Agents' })).toBeInTheDocument();
    expect(screen.getByText(`Run: ${RUN_TEXT}`)).toBeInTheDocument();
    for (const name of ['Play', 'Pause', 'Restart']) noButton(name);
    expect(screen.queryByText(/^Tokens/)).toBeNull();
    expect(button('Play demo')).toBeEnabled();

    app.tick(WALK_MS);
    expect(screen.getByText('Tasks done: 0 of 1')).toBeInTheDocument();
    expect(createPlayer).not.toHaveBeenCalled();
    expect(FakeEventSource.latest.url).toBe('/api/events');
  });

  it('shows no mode and starts nothing while the health check is out', () => {
    hallAnswers();
    const { container } = render(<App />);
    expect(container.querySelector('.brand [class*="mode-"]')).toBeNull();
    noButton('Play demo');
    noButton('Play');
    expect(FakeEventSource.all).toEqual([]);
  });

  it.each([
    ['the request fails', vi.fn().mockRejectedValue(new TypeError('Failed to fetch'))],
    ['it answers 500, like the dev proxy with no hall', vi.fn(async () => ({ ok: false }))],
  ])('is the v1 demo when %s', async (_, fetchStub) => {
    vi.stubGlobal('fetch', fetchStub);
    const { container } = render(<App />);
    await settle();
    expect(container.querySelector('.mode-demo')).toHaveTextContent('Demo');
    for (const name of ['Play', 'Pause', 'Restart']) expect(button(name)).toBeInTheDocument();
    expect(screen.queryByText(/Tokens/)).toBeNull();
    expect(screen.getByText('Run: Create a dashboard')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Demo mode plays a scripted run with no AI calls. Sending restarts the run: the Lead/PM walks in and picks up your task.',
      ),
    ).toBeInTheDocument();
    noButton('Play demo');
    noButton('Back to live');
    expect(screen.getByRole('textbox', { name: 'Task for the Lead/PM' })).toBeEnabled();
    expect(FakeEventSource.all).toEqual([]);

    await act(async () => {
      await vi.advanceTimersByTimeAsync(20_000);
    });
    expect(screen.getByText('1/5 done')).toBeInTheDocument();
  });

  it('is the v1 demo after a second if the hall never answers', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(
        (_url: string, { signal }: { signal: AbortSignal }) =>
          new Promise((_, reject) => {
            signal.addEventListener('abort', () => reject(new DOMException('Aborted', 'AbortError')));
          }),
      ),
    );
    const { container } = render(<App />);
    await act(async () => {
      await vi.advanceTimersByTimeAsync(HEALTH_TIMEOUT_MS - 1);
    });
    expect(container.querySelector('.mode-demo')).toBeNull();
    await act(async () => {
      await vi.advanceTimersByTimeAsync(1);
    });
    expect(container.querySelector('.mode-demo')).toHaveTextContent('Demo');
  });

  it('with VITE_LIVE=false never calls an API: the demo starts at once', () => {
    vi.stubEnv('VITE_LIVE', 'false');
    const fetchStub = vi.fn();
    vi.stubGlobal('fetch', fetchStub);
    const { container } = render(<App />);
    expect(container.querySelector('.mode-demo')).toHaveTextContent('Demo');
    act(() => vi.advanceTimersByTime(20_000));
    expect(screen.getByText('1/5 done')).toBeInTheDocument();
    expect(fetchStub).not.toHaveBeenCalled();
    expect(FakeEventSource.all).toEqual([]);
  });
});

describe('Hall offline and reconnecting', () => {
  it('says so, and agents stay where they are', async () => {
    const app = await renderLive(start);
    app.tick(WALK_MS);
    expect(app.feet('backend')).toEqual(xy(SEATS.backend));

    act(() => app.source().fail());
    app.tick(10_000);
    expect(app.badge()).toBe('Hall offline, reconnecting');
    expect(app.feet('backend')).toEqual(xy(SEATS.backend));
    expect(app.bubble('backend')).toContain('writing');
    expect(screen.getByText('Tasks done: 0 of 1')).toBeInTheDocument();
    expect(screen.getByText(`Run: ${RUN_TEXT}`)).toBeInTheDocument();
    expect(button('Play demo')).toBeEnabled();
  });

  it('reconnects and rebuilds from the replay: nothing doubled, nobody walks home, nobody repeats themselves', async () => {
    const app = await renderLive([...start, say('Backend is on it.')]);
    app.tick(WALK_MS);
    act(() => app.source().fail());
    app.tick(RETRY_MS);
    expect(FakeEventSource.all).toHaveLength(2);
    expect(app.badge()).toBe('Hall offline, reconnecting');

    // The same run, plus what happened while the page was away, all in one go.
    const done: OfficeEvent = {
      type: 'task',
      taskId: 't1',
      title: 'Server',
      owner: 'backend',
      status: 'done',
      at: 9,
    };
    act(() => {
      for (const event of [...start, say('Backend is on it.'), say('Almost there.'), done]) {
        app.source().send(event);
      }
      // Replay still coming: what is on screen hasn't moved.
      expect(app.badge()).toBe('Hall offline, reconnecting');
      app.source().replayed();
    });
    app.tick();
    expect(app.badge()).toBe('Live');
    expect(screen.getByText('Tasks done: 1 of 1')).toBeInTheDocument();
    expect(app.feet('backend')).toEqual(xy(SEATS.backend));
    expect(app.speech('lead')).not.toBe('Almost there.');
    expect(screen.getAllByText('to you: Backend is on it.')).toHaveLength(1);
    expect(screen.getAllByText('to you: Almost there.')).toHaveLength(1);

    // Back to normal: a new event is news again.
    app.emit(say('All done.'));
    expect(app.speech('lead')).toBe('All done.');
  });

  it('keeps what it shows when a hall that sends no start id comes back empty, until events return', async () => {
    const app = await renderLive(start);
    app.tick(WALK_MS);
    act(() => app.source().fail());
    app.tick(RETRY_MS);
    act(() => app.source().replayed('1')); // an empty replay, from a hall older than the start id
    app.tick();
    expect(app.badge()).toBe('Live');
    expect(app.status()).toBe(LIVE_NOTE);
    expect(app.feet('backend')).toEqual(xy(SEATS.backend));
    expect(screen.getByText(`Run: ${RUN_TEXT}`)).toBeInTheDocument();

    app.emit(state('backend', 'idle'));
    expect(app.bubble('backend')).toBe('idle');
  });

  it('a restarted hall: the page starts again from nothing and says so, until a new run starts', async () => {
    const app = await renderLive(start);
    app.tick(WALK_MS);
    act(() => app.source().fail());
    app.tick(RETRY_MS);
    act(() => app.source().replayed('hall-start-id-02')); // another hall, and it holds nothing
    app.tick();
    expect(app.badge()).toBe('Live');
    expect(app.status()).toBe('Live · Hall restarted. Earlier events are gone.');
    expect(screen.queryByText(`Run: ${RUN_TEXT}`)).toBeNull();
    expect(screen.getByText('Tasks done: 0 of 0')).toBeInTheDocument();
    app.tick(WALK_MS);
    expect(app.feet('backend')).toEqual(xy(REST_SPOTS.backend));

    // The work goes on, but the run is still not whole: the note stays.
    app.emit(state('backend', 'writing'));
    expect(app.status()).toBe('Live · Hall restarted. Earlier events are gone.');
    // A reconnect to the same new hall changes nothing.
    act(() => app.source().fail());
    app.tick(RETRY_MS);
    act(() => {
      app.source().send(state('backend', 'writing'));
      app.source().replayed('hall-start-id-02');
    });
    app.tick();
    expect(app.status()).toBe('Live · Hall restarted. Earlier events are gone.');

    // The next prompt is a run the hall has whole.
    app.emit({ type: 'run', text: 'Next task', at: 6 });
    expect(app.status()).toBe(LIVE_NOTE);
    expect(screen.getByText('Run: Next task')).toBeInTheDocument();
  });

  it('a restarted hall that has already heard a new run says nothing about the restart', async () => {
    const app = await renderLive(start);
    act(() => app.source().fail());
    app.tick(RETRY_MS);
    act(() => {
      app.source().send({ type: 'run', text: 'Next task', at: 6 });
      app.source().replayed('hall-start-id-02');
    });
    app.tick();
    expect(app.status()).toBe(LIVE_NOTE);
    expect(screen.getByText('Run: Next task')).toBeInTheDocument();
    expect(screen.getByText('Tasks done: 0 of 0')).toBeInTheDocument();
  });

  it("a second message from the same agent waits for the first one's bubble instead of replacing it", async () => {
    const app = await renderLive(start);
    app.emit(say('Backend is on it.'), say('All done.'));
    expect(app.speech('lead')).toBe('Backend is on it.');
    app.tick(speechMs('Backend is on it.') - 100);
    expect(app.speech('lead')).toBe('Backend is on it.');
    app.tick(200);
    expect(app.speech('lead')).toBe('All done.');
    app.tick(speechMs('All done.'));
    expect(app.speech('lead')).toBeNull();
  });

  it('a bubble waits while its agent walks, a hurrying one too, then shows its whole time once it stops', async () => {
    const app = await renderLive(start); // the Backend dev is on its way to its scroll
    app.emit(say('On it.', 'lead', 'backend'));
    expect(app.speech('backend')).toBeNull();
    expect(screen.getByText('to Lead/PM: On it.')).toBeInTheDocument(); // the feed has it at once
    app.tick(500);
    app.emit(state('backend', 'done')); // its work ends mid-walk, so it hurries to the rest room
    const rest = xy(REST_SPOTS.backend);
    const resting = () => app.feet('backend').x === rest.x && app.feet('backend').y === rest.y;
    let walked = 0;
    for (; walked < WALK_MS && !resting(); walked += 100) {
      expect(app.speech('backend')).toBeNull(); // never carried across the hall
      app.tick(100);
    }
    expect(resting()).toBe(true);
    expect(walked).toBeGreaterThan(500);
    expect(app.speech('backend')).toBe('On it.');
    app.tick(speechMs('On it.') - 200);
    expect(app.speech('backend')).toBe('On it.');
    app.tick(400);
    expect(app.speech('backend')).not.toBe('On it.');
  });

  it('a page that opens mid-run walks agents to work, but nobody says old messages', async () => {
    const app = await renderLive([...start, say('Backend is on it.')]);
    expect(app.speech('lead')).not.toBe('Backend is on it.');
    expect(app.feet('backend')).not.toEqual(xy(SEATS.backend)); // on its way, not teleported
    app.tick(WALK_MS);
    expect(app.feet('backend')).toEqual(xy(SEATS.backend));
  });
});

describe('Session ended', () => {
  const ended: OfficeEvent = { type: 'session-end', at: 9 };

  it('shows the badge, and a new session clears it', async () => {
    const app = await renderLive(start);
    app.emit(ended);
    expect(app.badge()).toBe('Session ended');
    expect(button('Play demo')).toBeEnabled();
    expect(screen.queryByRole('textbox', { name: 'Task for the Lead/PM' })).toBeNull();

    app.emit({ type: 'reset', at: 10 });
    expect(app.badge()).toBe('Live');
    expect(screen.queryByText(`Run: ${RUN_TEXT}`)).toBeNull();
  });

  it('shows it to a page that connects afterwards', async () => {
    const app = await renderLive([...start, ended]);
    expect(app.badge()).toBe('Session ended');
  });

  it('gives way to Hall offline, and comes back with the replay', async () => {
    const app = await renderLive([...start, ended]);
    act(() => app.source().fail());
    expect(app.badge()).toBe('Hall offline, reconnecting');
    app.tick(RETRY_MS);
    act(() => {
      for (const event of [...start, ended]) app.source().send(event);
      app.source().replayed();
    });
    expect(app.badge()).toBe('Session ended');
  });

  it('mid-run, through the real mapping: everyone idle, the furnace cold, cards where they were, no banner', async () => {
    const app = await renderLive();
    let map: MapState = INITIAL_MAP;
    const hook = (input: Parameters<typeof mapHook>[1]) => {
      const step = mapHook(map, { session_id: 's1', ...input }, 0);
      map = step.state;
      app.emit(...step.events);
    };
    const lead = { agent_type: 'world-of-agents:lead' };
    const backend = { agent_type: 'world-of-agents:backend', agent_id: 'b1' };
    hook({ hook_event_name: 'SessionStart', source: 'startup', ...lead });
    hook({
      hook_event_name: 'PreToolUse',
      ...lead,
      tool_name: 'Agent',
      tool_use_id: 't1',
      tool_input: { subagent_type: 'world-of-agents:backend', description: 'Server' },
    });
    hook({ hook_event_name: 'SubagentStart', ...backend });
    hook({ hook_event_name: 'PreToolUse', ...backend, tool_name: 'Write' });
    hook({ hook_event_name: 'Notification', ...lead, notification_type: 'permission_prompt' });
    expect(app.banner()).toBe('Backend dev needs your approval in Claude Code');
    expect(screen.getByText('Furnace · 1 working')).toBeInTheDocument();

    hook({ hook_event_name: 'SessionEnd', ...lead, reason: 'prompt_input_exit' });
    expect(app.badge()).toBe('Session ended');
    expect(app.banner()).toBeNull();
    expect(screen.getByText('Furnace · cold')).toBeInTheDocument();
    expect(app.bubble('backend')).toBe('idle');
    expect(screen.getByText('In progress')).toBeInTheDocument();
    expect(screen.getByText('Tasks done: 0 of 1')).toBeInTheDocument();
    app.tick(WALK_MS);
    expect(app.feet('backend')).toEqual(xy(REST_SPOTS.backend));
  });
});

describe('out-of-order events, through the real mapping', () => {
  it('a stop that arrives before its start: the agent stays done and its card Done', async () => {
    const app = await renderLive();
    let map: MapState = INITIAL_MAP;
    const hook = (input: Parameters<typeof mapHook>[1]) => {
      const step = mapHook(map, { session_id: 's1', ...input }, 0);
      map = step.state;
      app.emit(...step.events);
    };
    const backend = { agent_type: 'world-of-agents:backend', agent_id: 'b1' };
    hook({ hook_event_name: 'SessionStart', source: 'startup', agent_type: 'world-of-agents:lead' });
    hook({
      hook_event_name: 'PreToolUse',
      agent_type: 'world-of-agents:lead',
      tool_name: 'Agent',
      tool_use_id: 't1',
      tool_input: { subagent_type: 'world-of-agents:backend', description: 'Server' },
    });
    hook({ hook_event_name: 'SubagentStop', ...backend, last_assistant_message: 'Server is up.' });
    expect(app.bubble('backend')).toBe('done');
    expect(screen.getByText('Tasks done: 1 of 1')).toBeInTheDocument();

    hook({ hook_event_name: 'SubagentStart', ...backend });
    hook({ hook_event_name: 'PreToolUse', ...backend, tool_name: 'Write' });
    expect(app.bubble('backend')).toBe('done');
    expect(screen.getByText('Tasks done: 1 of 1')).toBeInTheDocument();
    app.tick(WALK_MS);
    expect(app.feet('backend')).toEqual(xy(REST_SPOTS.backend));
  });
});

describe('copies', () => {
  const copies = (n: number | undefined): OfficeEvent => ({
    type: 'state',
    agent: 'backend',
    state: 'writing',
    ...(n ? { copies: n } : {}),
    at: 6,
  });

  it('shows x2 on the name plate and in the panel, and takes it away again', async () => {
    const app = await renderLive(start);
    const plate = () => screen.getByText('Backend dev · Orc', { exact: false, selector: '.nameplate' });
    expect(plate().querySelector('.copies')).toBeNull();

    app.emit(copies(2));
    expect(plate().querySelector('.copies')).toHaveTextContent('x2');
    fireEvent.click(screen.getByRole('button', { name: /^Backend dev, Orc/ }));
    expect(screen.getByText('x2', { selector: '.chip' })).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Backend dev, Orc, Writing, 2 copies running. Show details' }),
    ).toBeInTheDocument();

    app.emit(copies(3));
    expect(plate().querySelector('.copies')).toHaveTextContent('x3');

    app.emit(copies(undefined));
    expect(plate().querySelector('.copies')).toBeNull();
    expect(screen.queryByText('x2', { selector: '.chip' })).toBeNull();
  });
});

describe('Needs you', () => {
  it('names the agent in a banner and the live region, and clears when it moves on', async () => {
    const app = await renderLive(start);
    expect(app.banner()).toBeNull();

    app.emit(state('backend', 'needs-you'));
    expect(app.banner()).toBe('Backend dev needs your approval in Claude Code');
    expect(app.live()).toHaveTextContent('Backend dev needs your approval in Claude Code');

    app.emit(state('backend', 'writing'));
    expect(app.banner()).toBeNull();
    expect(app.live()).not.toHaveTextContent('needs your approval');
  });

  it('an approval wait of the Lead itself uses the same banner', async () => {
    const app = await renderLive(start);
    app.emit(state('lead', 'needs-you'));
    expect(app.banner()).toBe('Lead/PM needs your approval in Claude Code');
  });

  it('names every agent waiting', async () => {
    const app = await renderLive(start);
    app.emit(state('backend', 'needs-you'), state('frontend', 'needs-you'));
    expect(app.banner()).toBe(
      'Frontend dev needs your approval in Claude Code · Backend dev needs your approval in Claude Code',
    );
  });

  it('shows no banner in the demo', async () => {
    vi.stubEnv('VITE_LIVE', 'false');
    const { container } = render(<App />);
    act(() => vi.advanceTimersByTime(70_000));
    expect(container.querySelector('.status-line.needs-you')).toBeNull();
    expect(container.querySelector('.status-line')).toHaveTextContent('Demo · scripted run with no AI calls');
  });
});

describe('Lead/PM waiting for your next message (idle_prompt)', () => {
  const CALM = 'Lead/PM is waiting for your next message in Claude Code';
  const awaiting: OfficeEvent = { type: 'awaiting-prompt', at: 9 };

  it('is calm text in the status line: no banner, no chip, no announcement', async () => {
    const app = await renderLive(start);
    const before = app.bubble('lead');
    const said = app.live().textContent;

    app.emit(awaiting);
    expect(app.status()).toBe(CALM);
    expect(app.banner()).toBeNull();
    expect(app.bubble('lead')).toBe(before);
    expect(screen.queryByText('needs you', { selector: '.chip' })).toBeNull();
    expect(app.live().textContent).toBe(said);
  });

  it('goes when the Lead is back to work', async () => {
    const app = await renderLive(start);
    app.emit(awaiting);
    app.emit(state('lead', 'thinking'));
    expect(app.status()).toBe(LIVE_NOTE);
  });

  it('gives way to an approval wait, and comes back after it', async () => {
    const app = await renderLive(start);
    app.emit(awaiting);
    app.emit(state('backend', 'needs-you'));
    expect(app.banner()).toBe('Backend dev needs your approval in Claude Code');
    app.emit(state('backend', 'done'));
    expect(app.banner()).toBeNull();
    expect(app.status()).toBe(CALM);
  });

  it('never shows during a demo, while the hall is offline or after the session ended', async () => {
    const app = await renderLive(start);
    app.emit(awaiting);
    fireEvent.click(button('Play demo'));
    await settle();
    expect(app.status()).toBe('Demo · the hall keeps watching Claude Code');
    fireEvent.click(button('Back to live'));
    expect(app.status()).toBe(CALM);

    app.emit({ type: 'session-end', at: 10 });
    expect(app.status()).toBe('Session ended · waiting for the next one');

    act(() => app.source().fail());
    expect(app.status()).toBe('Hall offline · reconnecting');
  });
});

describe('status line', () => {
  it('is always there, one element, in every mode: only what it says changes', async () => {
    const app = await renderLive(start);
    const line = app.container.querySelector('.status-line');
    expect(app.status()).toBe(LIVE_NOTE);

    app.emit(state('backend', 'needs-you'));
    expect(app.container.querySelector('.status-line')).toBe(line);
    expect(app.status()).toBe('Backend dev needs your approval in Claude Code');
    expect(line).toHaveClass('needs-you');

    app.emit(state('backend', 'writing'));
    expect(app.status()).toBe(LIVE_NOTE);
    expect(line).not.toHaveClass('needs-you');

    app.emit({ type: 'session-end', at: 9 });
    expect(app.status()).toBe('Session ended · waiting for the next one');

    act(() => app.source().fail());
    expect(app.status()).toBe('Hall offline · reconnecting');
    expect(app.container.querySelector('.status-line')).toBe(line);
  });

  it('says it is looking while the health check is out', () => {
    hallAnswers();
    const { container } = render(<App />);
    expect(container.querySelector('.status-line')).toHaveTextContent('Looking for the hall');
  });

  it('during Play demo says the hall keeps watching', async () => {
    const app = await renderLive(start);
    fireEvent.click(button('Play demo'));
    await settle();
    expect(app.status()).toBe('Demo · the hall keeps watching Claude Code');
  });

  it('in the hosted demo says it calls no AI, and links to the README', () => {
    vi.stubEnv('VITE_LIVE', 'false');
    vi.stubGlobal('fetch', vi.fn());
    const { container } = render(<App />);
    const line = container.querySelector('.status-line')!;
    expect(line).toHaveTextContent(
      'Demo · scripted run with no AI calls. To watch your own Claude Code sessions (Max or higher), see the README',
    );
    expect(line).toHaveClass('hosted');
    const link = screen.getByRole('link', { name: 'README' });
    expect(link).toHaveAttribute('href', 'https://github.com/kremendev/world-of-agents');
    expect(link).toHaveAttribute('rel', 'noreferrer');
    expect(line).toContainElement(link);
  });

  it('with no hall on a local page keeps its short line, with no link: this one can still find a hall', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => {
        throw new Error('no hall');
      }),
    );
    const { container } = render(<App />);
    await settle();
    const line = container.querySelector('.status-line')!;
    expect(line).toHaveTextContent('Demo · a scripted run');
    expect(line).not.toHaveClass('hosted');
    expect(screen.queryByRole('link')).toBeNull();
  });

  it('has no link while live', async () => {
    const app = await renderLive(start);
    expect(app.status()).toBe(LIVE_NOTE);
    expect(screen.queryByRole('link')).toBeNull();
  });
});

describe('live region', () => {
  const heardFrom = (app: Awaited<ReturnType<typeof renderLive>>) => {
    const lines = [...app.live().querySelectorAll('p')];
    const seen = lines.map((p) => p.textContent);
    const heard: string[] = [];
    return {
      heard,
      listen: () =>
        lines.forEach((p, i) => {
          if (p.textContent === seen[i]) return;
          seen[i] = p.textContent;
          if (p.textContent) heard.push(p.textContent); // text going away is not read out
        }),
    };
  };

  it('always announces needs-you and Session ended; the Lead only when nothing is left running', async () => {
    const app = await renderLive(start);
    const { heard, listen } = heardFrom(app);
    for (const event of [
      state('lead', 'thinking'),
      say('The dev is on it.'),
      state('lead', 'waiting'),
      say('Report sent to the Lead', 'lead', 'backend'),
      state('backend', 'needs-you'),
      state('backend', 'writing'),
      state('backend', 'done'),
      state('lead', 'thinking'),
      say('All done.'),
      state('lead', 'idle'),
      { type: 'session-end', at: 9 } as const,
    ]) {
      app.emit(event);
      listen();
    }
    expect(heard).toEqual([
      'Backend dev needs your approval in Claude Code',
      'Lead/PM: All done.',
      'Session ended',
    ]);
  });

  it('cuts a long report at its last full sentence; the bubble shows its first, the feed row all of it', async () => {
    const app = await renderLive();
    const long = `All done. ${'And then some more words '.repeat(20)}`;
    app.emit(say(long));
    expect(app.live().querySelector('p')).toHaveTextContent(/^Lead\/PM: All done\.$/);
    expect(app.speech('lead')).toBe('All done.');
    fireEvent.click(screen.getByRole('button', { name: 'Show all' }));
    expect(app.container.querySelector('.feed-full')).toHaveTextContent(long.trim());
  });

  it("takes a report of 20,000 characters whole, from the hall to the feed's expanded row", async () => {
    const app = await renderLive();
    const report = `Report. ${'x'.repeat(20_000 - 'Report. '.length - 3)}end`;
    expect(report).toHaveLength(20_000);
    app.emit(say(report));
    fireEvent.click(screen.getByRole('button', { name: 'Show all' }));
    expect(app.container.querySelector('.feed-full')!.textContent).toBe(report);
  });

  it('does not say an old report again when a page reconnects', async () => {
    const run = [...start, state('backend', 'idle'), say('All done.')];
    const app = await renderLive(run);
    const { heard, listen } = heardFrom(app);
    act(() => app.source().fail());
    listen();
    app.tick(RETRY_MS);
    act(() => {
      for (const event of run) app.source().send(event);
      app.source().replayed();
    });
    listen();
    expect(heard).toEqual([]);
  });

  it('in the demo says everything to you, as in v1', () => {
    vi.stubEnv('VITE_LIVE', 'false');
    const { container } = render(<App />);
    act(() => vi.advanceTimersByTime(8100));
    expect(container.querySelector('[aria-live="polite"]')).toHaveTextContent(
      'Lead/PM: On it: Create a dashboard.',
    );
  });
});

describe("the scroll: a dev fetches it from the Lead's room, then goes to its desk", () => {
  const card = (taskId: string, owner: AgentId = 'backend'): OfficeEvent => ({
    type: 'task',
    taskId,
    title: taskId,
    owner,
    status: 'in-progress',
    at: 1,
  });
  const works = (agent: AgentId, taskId?: string): OfficeEvent => ({
    type: 'state',
    agent,
    state: 'thinking',
    ...(taskId ? { taskId } : {}),
    at: 2,
  });
  /** Walks in small steps and says how far into the Lead's room the agent got. */
  const furthest = (app: Awaited<ReturnType<typeof renderLive>>, id: AgentId) => {
    let x = Infinity;
    for (let left = WALK_MS; left > 0; left -= 50) {
      app.tick(50);
      x = Math.min(x, app.feet(id).x);
    }
    return x;
  };

  it("goes via the Lead's room, as in the demo", async () => {
    const app = await renderLive();
    app.emit(card('t1'), works('backend', 't1'));
    expect(furthest(app, 'backend')).toBeLessThanOrEqual(FETCH_SPOTS.backend!.x + 3);
    expect(app.feet('backend')).toEqual(xy(SEATS.backend));
  });

  it('with the subagent first and its card a moment later: waits, then goes the same way', async () => {
    const app = await renderLive();
    app.emit(works('backend'));
    app.tick(1000);
    expect(app.feet('backend')).toEqual(xy(REST_SPOTS.backend));
    expect(app.bubble('backend')).toBe('thinking');

    app.emit(card('t1'), works('backend', 't1'));
    expect(furthest(app, 'backend')).toBeLessThanOrEqual(FETCH_SPOTS.backend!.x + 3);
    expect(app.feet('backend')).toEqual(xy(SEATS.backend));
  });

  it('with no card at its first tool call (the hall started mid-run): straight to its desk', async () => {
    const app = await renderLive();
    app.emit(works('backend'));
    app.emit(state('backend', 'writing'));
    expect(furthest(app, 'backend')).toBeGreaterThan(FETCH_SPOTS.backend!.x);
    expect(app.feet('backend')).toEqual(xy(SEATS.backend));
  });

  it('the Reviewer has no scroll to fetch: straight to its desk', async () => {
    const app = await renderLive();
    app.emit(card('r1', 'reviewer'), works('reviewer', 'r1'));
    expect(furthest(app, 'reviewer')).toBeGreaterThan(FETCH_SPOTS.backend!.x);
    expect(app.feet('reviewer')).toEqual(xy(SEATS.reviewer));
  });

  it('done before it got there: it finishes the walk, then goes to rest', async () => {
    const app = await renderLive();
    app.emit(card('t1'), works('backend', 't1'));
    app.tick(500);
    app.emit(state('backend', 'idle'));
    expect(furthest(app, 'backend')).toBeLessThanOrEqual(FETCH_SPOTS.backend!.x + 3);
    expect(app.feet('backend')).toEqual(xy(REST_SPOTS.backend));
  });

  it('takes every scroll waiting for it in one trip: two copies do not send it back', async () => {
    const app = await renderLive();
    app.emit(card('t1'), card('t2'), works('backend', 't1'));
    app.tick(100);
    app.emit(works('backend', 't2'));
    app.tick(WALK_MS);
    expect(app.feet('backend')).toEqual(xy(SEATS.backend));
    app.emit(works('backend', 't1'));
    app.tick(100);
    expect(app.feet('backend')).toEqual(xy(SEATS.backend));
  });

  it('a reconnect does not send it back for a scroll it already has', async () => {
    const run = [card('t1'), works('backend', 't1')];
    const app = await renderLive(run);
    app.tick(WALK_MS);
    expect(app.feet('backend')).toEqual(xy(SEATS.backend));
    act(() => app.source().fail());
    app.tick(RETRY_MS);
    act(() => {
      for (const event of run) app.source().send(event);
      app.source().replayed();
    });
    app.tick(500);
    expect(app.feet('backend')).toEqual(xy(SEATS.backend));
  });
});

describe('Go live', () => {
  const answering = (up: { now: boolean }) =>
    vi.fn(async () => (up.now ? { ok: true, json: async () => ({ ok: true }) } : { ok: false }));
  const advance = (ms: number) =>
    act(async () => {
      await vi.advanceTimersByTimeAsync(ms);
    });
  const mode = (c: HTMLElement) => c.querySelector('.brand [class*="mode-"]')?.textContent;

  it('in the demo looks again every 5 s, offers a hall that appears, and does not switch on its own', async () => {
    const up = { now: false };
    const fetchStub = answering(up);
    vi.stubGlobal('fetch', fetchStub);
    const { container } = render(<App />);
    await settle();
    expect(mode(container)).toBe('Demo');
    noButton('Go live');

    await advance(RECHECK_MS);
    expect(fetchStub).toHaveBeenCalledTimes(2);
    noButton('Go live');

    up.now = true;
    await advance(RECHECK_MS);
    expect(button('Go live')).toBeEnabled();
    expect(container.querySelector('.status-line')).toHaveTextContent('Demo · the hall is running');
    await advance(RECHECK_MS * 3);
    expect(mode(container)).toBe('Demo');
    expect(FakeEventSource.all).toEqual([]);
    expect(screen.getByText('Run: Create a dashboard')).toBeInTheDocument();
  });

  it('takes the offer away if the hall goes again', async () => {
    const up = { now: false };
    vi.stubGlobal('fetch', answering(up));
    render(<App />);
    await settle();
    up.now = true;
    await advance(RECHECK_MS);
    expect(button('Go live')).toBeEnabled();
    up.now = false;
    await advance(RECHECK_MS);
    noButton('Go live');
  });

  it('on click: stops the demo, follows the hall, and stops looking', async () => {
    const up = { now: false };
    const fetchStub = answering(up);
    vi.stubGlobal('fetch', fetchStub);
    const { container } = render(<App />);
    await settle();
    up.now = true;
    await advance(RECHECK_MS);
    await advance(20_000);
    expect(screen.getByText('1/5 done')).toBeInTheDocument();

    fireEvent.click(button('Go live'));
    await settle();
    expect(FakeEventSource.all).toHaveLength(1);
    act(() => {
      for (const event of start) FakeEventSource.latest.send(event);
      FakeEventSource.latest.replayed();
    });
    expect(mode(container)).toBe('Live');
    expect(screen.getByText(`Run: ${RUN_TEXT}`)).toBeInTheDocument();
    expect(screen.getByText('Tasks done: 0 of 1')).toBeInTheDocument();
    noButton('Go live');
    noButton('Play');

    const calls = fetchStub.mock.calls.length;
    await advance(RECHECK_MS * 3);
    expect(fetchStub).toHaveBeenCalledTimes(calls);
    expect(screen.getByText('Tasks done: 0 of 1')).toBeInTheDocument();
  });

  it('with VITE_LIVE=false never looks', async () => {
    vi.stubEnv('VITE_LIVE', 'false');
    const fetchStub = vi.fn();
    vi.stubGlobal('fetch', fetchStub);
    render(<App />);
    await advance(RECHECK_MS * 3);
    expect(fetchStub).not.toHaveBeenCalled();
    noButton('Go live');
  });

  it('does not look while a hall is being followed, even offline: the stream does that', async () => {
    const app = await renderLive(start);
    const calls = vi.mocked(fetch).mock.calls.length;
    act(() => app.source().fail());
    await advance(RECHECK_MS * 2);
    expect(vi.mocked(fetch).mock.calls.length).toBe(calls);
  });
});

describe('Task bar in Live', () => {
  it('is gone: its note is in the status line, and the page has nothing to send with', async () => {
    const app = await renderLive(start);
    expect(screen.queryByRole('textbox')).toBeNull();
    noButton('Send');
    expect(app.container.querySelector('form')).toBeNull();
    expect(app.status()).toBe(LIVE_NOTE);
    expect(vi.mocked(fetch)).toHaveBeenCalledTimes(1); // only the health check
  });

  it('leaves no form control of any kind in Live, in any state', async () => {
    const app = await renderLive(start);
    const controls = () => app.container.querySelectorAll('input, textarea, select, [contenteditable], form');
    expect(controls()).toHaveLength(0);
    app.emit(state('backend', 'needs-you'));
    expect(controls()).toHaveLength(0);
    app.emit({ type: 'session-end', at: 9 });
    expect(controls()).toHaveLength(0);
    act(() => app.source().fail());
    expect(controls()).toHaveLength(0);
  });

  it('comes back for Play demo, and goes again with Back to live', async () => {
    await renderLive(start);
    fireEvent.click(button('Play demo'));
    await settle();
    expect(screen.getByRole('textbox', { name: 'Task for the Lead/PM' })).toBeEnabled();
    fireEvent.click(button('Back to live'));
    expect(screen.queryByRole('textbox')).toBeNull();
  });

  it('sits at the top of the right-hand column in Demo, and the feed keeps its place in Live', async () => {
    const app = await renderLive(start);
    // The column's content sits in .side-content, which the review board makes inert while it covers it.
    const side = app.container.querySelector('.stage > .side > .side-content')!;
    const feed = side.querySelector('.feed');
    expect([...side.children]).toEqual([feed]);

    fireEvent.click(button('Play demo'));
    await settle();
    const bar = app.container.querySelector('form.task-bar');
    expect([...side.children]).toEqual([bar, feed]);
    // Not anywhere else as well, and the same feed: it doesn't lose its place when the mode changes.
    expect(app.container.querySelectorAll('form.task-bar')).toHaveLength(1);
    expect(app.container.querySelector('.lower form')).toBeNull();

    fireEvent.click(button('Back to live'));
    expect([...side.children]).toEqual([feed]);
  });
});

describe('Play demo while live', () => {
  it('plays the script, keeps following the hall, and Back to live shows what happened meanwhile', async () => {
    const app = await renderLive(start);
    const stream = app.source();
    fireEvent.click(button('Play demo'));
    await settle();

    expect(createPlayer).toHaveBeenCalledOnce();
    expect(app.badge()).toBe('Demo');
    for (const name of ['Play', 'Pause', 'Restart', 'Back to live']) expect(button(name)).toBeInTheDocument();
    noButton('Play demo');
    expect(screen.getByText('Run: Create a dashboard')).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'Task for the Lead/PM' })).toBeEnabled();
    expect(stream.closed).toBe(false);
    app.tick(20_000);
    expect(screen.getByText('1/5 done')).toBeInTheDocument();

    // The real run goes on underneath: not shown, but not lost.
    app.emit(say('Still going.'), {
      type: 'task',
      taskId: 't1',
      title: 'Server',
      owner: 'backend',
      status: 'done',
      at: 7,
    });
    expect(screen.queryByText('Tasks done: 1 of 1')).toBeNull();

    fireEvent.click(button('Back to live'));
    app.tick();
    expect(app.badge()).toBe('Live');
    expect(screen.getByText(`Run: ${RUN_TEXT}`)).toBeInTheDocument();
    expect(screen.getByText('Tasks done: 1 of 1')).toBeInTheDocument();
    expect(app.speech('lead')).not.toBe('Still going.'); // old news by now
    expect(screen.getByText('to you: Still going.')).toBeInTheDocument();
    for (const name of ['Play', 'Pause', 'Restart']) noButton(name);
    expect(stream.closed).toBe(false);

    app.emit(say('And done.'));
    expect(app.speech('lead')).toBe('And done.');
  });

  it('keeps the banner up during the demo: Claude Code is still waiting for you', async () => {
    const app = await renderLive(start);
    fireEvent.click(button('Play demo'));
    await settle();
    app.emit(state('backend', 'needs-you'));
    expect(app.badge()).toBe('Demo');
    expect(app.banner()).toBe('Backend dev needs your approval in Claude Code');
  });

  it('starts the script over each time', async () => {
    const app = await renderLive(start);
    fireEvent.click(button('Play demo'));
    await settle();
    app.tick(20_000);
    expect(screen.getByText('1/5 done')).toBeInTheDocument();
    fireEvent.click(button('Back to live'));
    await settle();
    fireEvent.click(button('Play demo'));
    await settle();
    app.tick();
    expect(screen.getByText('Tasks done: 0 of 0')).toBeInTheDocument();
  });

  it('works while the hall is offline, and Back to live returns to the same offline hall', async () => {
    const app = await renderLive(start);
    act(() => app.source().fail());
    fireEvent.click(button('Play demo'));
    await settle();
    expect(app.badge()).toBe('Demo');
    fireEvent.click(button('Back to live'));
    expect(app.badge()).toBe('Hall offline, reconnecting');
  });
});

describe('Agent panel in Live', () => {
  it('shows the real model and tools and no Tokens row', async () => {
    await renderLive(start);
    expect(screen.getByText('Goblin · model: Opus')).toBeInTheDocument();
    const details = Object.fromEntries(
      [...document.querySelectorAll('.details dt')].map((dt) => [
        dt.textContent,
        dt.nextElementSibling?.textContent,
      ]),
    );
    expect(details.Tools).toBe('Agent, Read, Grep, Glob');
    expect(details).not.toHaveProperty('Tokens');
    expect(details).not.toHaveProperty('Tools in v2');
  });
});

describe('what a screen reader gets', () => {
  it('reads the report without its Markdown markers, while the page shows them as elements', async () => {
    const app = await renderLive(start);
    app.emit(state('backend', 'idle'), say('Run `npm test` then **ship it**. Line 1 uses `req'));
    expect(app.live()).toHaveTextContent('Lead/PM: Run npm test then ship it. Line 1 uses req');
    expect(app.live().textContent).not.toMatch(/`|\*\*/);
    expect(app.container.querySelector('.feed-what code')).toHaveTextContent('npm test');
  });
});

describe('Activity feed in Live', () => {
  const lines = () => [...document.querySelectorAll('.feed-what')].map((line) => line.textContent);

  it('fills from live events, for the whole team', async () => {
    const app = await renderLive(start);
    app.emit(say('Routes are up.', 'lead', 'backend'), state('reviewer', 'reading'));
    expect(lines()).toContain('to Lead/PM: Routes are up.');
    expect(lines()).toContain('Writing · Server');
    expect(lines()).toContain('Reading');
    expect(lines().filter((line) => line === 'Writing · Server')).toHaveLength(1);
  });

  it('narrows to the clicked agent, without changing what the hall shows', async () => {
    const app = await renderLive(start);
    app.emit(state('reviewer', 'reading'));
    fireEvent.click(screen.getByRole('button', { name: /^Backend dev, Orc/ }));
    expect(lines()).toContain('Writing · Server');
    expect(lines()).not.toContain('Reading');
    app.emit(state('reviewer', 'writing'));
    expect(lines()).not.toContain('Writing');
    expect(app.bubble('reviewer')).toBe('writing');

    fireEvent.click(button('Show everyone'));
    expect(lines()).toContain('Reading');
  });
});

describe('where the Lead stands in Live', () => {
  it('waiting: on the dev room carpet. Thinking again: back at its desk', async () => {
    const app = await renderLive(start);
    app.emit(state('lead', 'waiting'));
    app.tick(WALK_MS);
    expect(app.feet('lead')).toEqual(xy(CHECK_SPOT));
    expect(app.bubble('lead')).toBe('waiting');

    app.emit(state('lead', 'thinking'));
    app.tick(WALK_MS);
    expect(app.feet('lead')).toEqual(xy(SEATS.lead));
  });
});

describe('untrusted text from a real run', () => {
  const attack = '<img src=x onerror="alert(1)">';

  it('shows plain text in the bubble, its Markdown marks gone as the voice drops them, never HTML', async () => {
    const app = await renderLive(start);
    app.emit(say(`${attack} \`npm test\` **now**`));
    const bubble = app.container.querySelector('.agent-tag[data-agent="lead"] .speech')!;
    expect(bubble.textContent).toBe(`${attack} npm test now`); // a `>` inside a line is no Markdown: it stays
    expect(bubble.querySelector('*')).toBeNull();
    expect(app.container.querySelector('img')).toBeNull();
    // The feed keeps the marks, as elements.
    expect(app.container.querySelector('.feed-what code')).toHaveTextContent('npm test');
  });

  it('renders as text everywhere: header, speech bubble, feed, live region', async () => {
    const app = await renderLive(start);
    app.emit({ type: 'run', text: attack, at: 6 }, state('backend', 'idle'), say(attack));
    expect(app.container.querySelector('img')).toBeNull();
    expect(screen.getByText(`Run: ${attack}`)).toBeInTheDocument();
    expect(app.speech('lead')).toBe(attack);
    expect(screen.getByText(`to you: ${attack}`)).toBeInTheDocument();
    expect(app.live()).toHaveTextContent(`Lead/PM: ${attack}`);
  });

  it('as a task title and in the replay as well', async () => {
    const app = await renderLive([
      ...start,
      { type: 'task', taskId: 't2', title: attack, owner: 'frontend', status: 'todo', at: 6 },
      say(attack),
    ]);
    expect(app.container.querySelector('img')).toBeNull();
    expect(screen.getByText(attack)).toBeInTheDocument();
  });

  it('drops a message that fails parseEvent(): it never touches the page', async () => {
    const app = await renderLive(start);
    act(() => {
      app.source().send({ ...say('Hidden'), html: attack });
      app.source().send('<script>alert(1)</script>');
      app.source().send({ type: 'state', agent: 'intern', state: 'writing', at: 0 });
    });
    app.tick();
    expect(screen.queryByText(/Hidden/)).toBeNull();
    expect(app.container.querySelector('script, img')).toBeNull();
    expect(app.badge()).toBe('Live');
  });
});

describe('the "For you" strip in Live (v3.1, D6)', () => {
  const report = say('Server is up.');
  const item = () => screen.queryByRole('button', { name: /^To you/ });

  beforeEach(() => localStorage.clear());

  it("keeps what was read through a reconnect's replay and a reload; a restarted hall starts clean", async () => {
    const app = await renderLive([...start, report]);
    expect(item()).not.toBeNull();
    fireEvent.click(item()!);
    expect(item()).toBeNull();

    // The same hall again: its replay brings the same events, with the same keys.
    act(() => app.source().fail());
    app.tick(RETRY_MS);
    act(() => {
      for (const event of [...start, report]) app.source().send(event);
      app.source().replayed();
    });
    app.tick();
    expect(item()).toBeNull();

    // A reload: a new page, the same hall start.
    app.unmount();
    await renderLive([...start, report]);
    expect(item()).toBeNull();

    // Another hall start: what this one sends is new, read or not before.
    act(() => FakeEventSource.latest.fail());
    vi.advanceTimersByTime(RETRY_MS);
    act(() => {
      FakeEventSource.latest.send(report);
      FakeEventSource.latest.replayed('hall-start-id-02');
    });
    expect(item()).not.toBeNull();
  });
});

describe("the ledger's total in the header (v3.2)", () => {
  const totals = {
    since: Date.UTC(2026, 10, 11, 12),
    tokensIn: 3_400_000,
    tokensOut: 180_000,
    cents: 1720,
    pricedOn: '11 Nov 2026',
    unpriced: [{ model: 'new-model', tokens: 40_000 }],
  };
  const line = () => document.querySelector('.run-ledger');

  it('shows "This PC" once the hall sends a total, in Live only', async () => {
    const app = await renderLive(start);
    expect(line()).toBeNull();
    act(() => app.source().emit('ledger', JSON.stringify(totals)));
    expect(line()).toHaveTextContent('This PC: 3.6M tokens · about $17.20 at API prices');
    fireEvent.click(screen.getByRole('button', { name: 'Play demo' }));
    await settle();
    expect(line()).toBeNull();
  });

  it('shows nothing for a total that does not pass the schema', async () => {
    const app = await renderLive(start);
    act(() => app.source().emit('ledger', JSON.stringify({ ...totals, cents: 'a lot' })));
    expect(line()).toBeNull();
  });
});
