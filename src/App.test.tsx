import { act, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import App from './App';
import { AGENT_IDS, type AgentId } from './events/schema';
import { SEATS } from './office/hall/destination';
import { SMALL_TALK } from './office/hall/smalltalk';
import { speechMs } from './office/hall/talk';
import { REST_SPOTS, type Point } from './office/hall/walk';
import { STATUS_COLOR } from './office/tasks';
import { STEP_MS } from './script/demoRun';

/** When step n of the demo run starts. stepStart(10) is the end of step 9. */
const stepStart = (n: number) => (n - 1) * STEP_MS;

/** Moves the clock on from `ms`, 50 ms at a time, until `id` shows a speech bubble, and says when that was. */
function whenSays(app: ReturnType<typeof renderApp>, id: AgentId, ms: number): number {
  for (let t = ms; t <= ms + STEP_MS; t += 50) {
    app.at(t);
    if (app.speech(id) !== null) return t;
  }
  throw new Error(`${id} said nothing for a whole step`);
}

const rgb = (hex: string) => {
  const n = parseInt(hex.slice(1), 16);
  return `rgb(${n >> 16}, ${(n >> 8) & 255}, ${n & 255})`;
};

const mediaQuery = (matches: boolean) => (query: string) =>
  ({
    matches,
    media: query,
    onchange: null,
    addEventListener: () => {},
    removeEventListener: () => {},
    addListener: () => {},
    removeListener: () => {},
    dispatchEvent: () => false,
  }) as MediaQueryList;

function renderApp() {
  const view = render(<App />);
  const start = performance.now();
  const tag = (id: AgentId) => view.container.querySelector<HTMLElement>(`.agent-tag[data-agent="${id}"]`)!;
  return {
    ...view,
    /**
     * Moves the clock to `ms` after the run started, running timers and animation frames on the way.
     * In 50 ms slices: React only renders when an act() ends, and the hall must see each event as it lands.
     * A test that only looks at where a moment ends up can pass a bigger slice, and render far less.
     */
    at: (ms: number, slice = 50) => {
      for (let left = start + ms - performance.now(); left > 0; left -= slice) {
        act(() => vi.advanceTimersByTime(Math.min(slice, left)));
      }
    },
    feet: (id: AgentId): Point => {
      const style = tag(id).style;
      return { x: Number(style.getPropertyValue('--x')), y: Number(style.getPropertyValue('--y')) };
    },
    speech: (id: AgentId) => tag(id).querySelector('.speech')?.textContent ?? null,
    bubble: (id: AgentId) => tag(id).querySelector('.state-bubble')?.textContent ?? null,
    tiles: () =>
      [...view.container.querySelectorAll<HTMLElement>('.dashboard-tile')].map((t) => [
        t.textContent,
        t.style.background,
      ]),
    bar: () => view.container.querySelector<HTMLElement>('.dashboard-bar > span')!.style.width,
    button: (name: string) => screen.getByRole('button', { name }),
  };
}

const xy = (p: Point) => ({ x: p.x, y: p.y });

beforeEach(() => {
  vi.useFakeTimers();
  // The v1 demo, starting at once with no hall to ask. App.live.test.tsx covers the check and Live mode.
  vi.stubEnv('VITE_LIVE', 'false');
});

afterEach(() => {
  vi.unstubAllEnvs();
  vi.useRealTimers();
});

describe('App', () => {
  it('shows the Forge Hall with its rooms, the whole team and the run controls', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1, name: 'World of Agents' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /The Forge Hall/ })).toBeInTheDocument();

    for (const room of ['Lead/PM room', 'Great hall', 'Rest room', 'Dev room']) {
      expect(screen.getByText(room)).toBeInTheDocument();
    }
    for (const plate of [
      'Lead/PM · Goblin',
      'Designer · Elf',
      'Frontend dev · Orc',
      'Backend dev · Orc',
      'Reviewer · Skeleton',
    ]) {
      expect(screen.getByText(plate)).toBeInTheDocument();
    }
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    for (const name of ['Play', 'Pause', 'Restart'])
      expect(screen.getByRole('button', { name })).toBeInTheDocument();
  });

  it('plays the demo run: the dashboard and furnace follow it', () => {
    const app = renderApp();
    expect(screen.getAllByText('No tasks yet')).toHaveLength(2); // the hall dashboard and the task board
    expect(screen.getByText('Furnace · cold')).toBeInTheDocument();
    expect(app.tiles()).toEqual([]);

    // Step 4: plan done; Designer writing, Backend reading at its desk, the Lead checking in.
    app.at(stepStart(4) + 2500, 1000);
    expect(screen.getByText('1/5 done')).toBeInTheDocument();
    expect(app.bar()).toBe('20%');
    expect(screen.getByText('Furnace · 3 working')).toBeInTheDocument();
    expect(app.tiles()).toEqual([
      ['L', rgb(STATUS_COLOR.done)],
      ['D', rgb(STATUS_COLOR['in-progress'])],
      ['B', rgb(STATUS_COLOR['in-progress'])],
      ['F', rgb(STATUS_COLOR.todo)],
      ['R', rgb(STATUS_COLOR.todo)],
    ]);

    app.at(stepStart(10), 1000);
    expect(screen.getByText('5/5 done')).toBeInTheDocument();
    expect(app.bar()).toBe('100%');
    expect(screen.getByText('Furnace · cold')).toBeInTheDocument();
  });

  it('walks agents from the rest room to work and back', () => {
    // Fine enough to catch an agent mid-walk. At 50 ms this is 1,400 renders, past Vitest's 5 s on a busy machine.
    const SLICE = 500;
    const app = renderApp();
    for (const id of AGENT_IDS) expect(app.feet(id), id).toEqual(xy(REST_SPOTS[id]));

    // The Lead sets off for its desk when the task arrives, and gets there within the step.
    app.at(stepStart(2) + 1000, SLICE);
    expect(app.feet('lead')).not.toEqual(xy(REST_SPOTS.lead));
    expect(app.feet('lead')).not.toEqual(xy(SEATS.lead));
    app.at(stepStart(3), SLICE);
    expect(app.feet('lead')).toEqual(xy(SEATS.lead));

    // Both orcs are at their desks while they write.
    app.at(stepStart(5) + 1500, SLICE);
    expect(app.feet('frontend')).toEqual(xy(SEATS.frontend));
    expect(app.feet('backend')).toEqual(xy(SEATS.backend));

    app.at(stepStart(10), SLICE);
    for (const id of AGENT_IDS) expect(app.feet(id), id).toEqual(xy(REST_SPOTS[id]));
  });

  it('shows state bubbles, speech bubbles, small talk and the orcs’ "!!"', () => {
    const app = renderApp();
    app.at(100);
    expect(app.bubble('lead')).toBe('idle');
    expect(app.speech('lead')).toBe(SMALL_TALK.lead[0]);

    app.at(stepStart(2) + 100);
    // The Lead walks to its desk: its line waits in its queue until it gets there, and the feed has it at once.
    expect(app.bubble('lead')).toBe('thinking');
    expect(app.speech('lead')).toBeNull();
    expect(
      screen.getByText('to you: On it: Create a dashboard. Planning the work first.'),
    ).toBeInTheDocument();
    const leaving = app.feet('lead');
    const arrived = whenSays(app, 'lead', stepStart(2) + 100);
    expect(arrived).toBeGreaterThan(stepStart(2) + 1000);
    expect(app.feet('lead')).not.toEqual(leaving);
    // The bubble shows the first sentence only, 26 characters: up for 4 s plus 26 x 60 ms from when it stood still.
    expect(app.speech('lead')).toBe('On it: Create a dashboard.');
    expect(speechMs('On it: Create a dashboard.')).toBe(5560);
    app.at(arrived + 5560 - 100);
    expect(app.speech('lead')).toBe('On it: Create a dashboard.');
    app.at(arrived + 5560 + 100);
    expect(app.speech('lead')).toBeNull();

    app.at(stepStart(5) + 1500);
    expect(app.bubble('frontend')).toBe('writing!!');
    expect(app.bubble('backend')).toBe('writing!!');
    // The Designer sat down 0.8 s before its work ended (after a 7 s walk from the Lead's room), so it shows its work
    // until 3 s after it sat, then it is done.
    expect(app.bubble('designer')).toBe('writing');
    // The feed keeps the real time: the Designer's "done" is already there, at the moment it came.
    const designer = [...document.querySelectorAll('.feed-line')]
      .filter((line) => line.querySelector('.feed-who')?.textContent === 'Designer')
      .map((line) => line.querySelector('.feed-what')?.textContent);
    expect(designer).toContain('Done · Dashboard screens and layout');
    app.at(stepStart(5) + 2500);
    expect(app.bubble('designer')).toBe('done');
  });

  it('Pause stops the script and Play carries on from the same spot', () => {
    const app = renderApp();
    expect(app.button('Play')).toBeDisabled();

    app.at(stepStart(3) + 600);
    expect(app.tiles()).toHaveLength(3);
    fireEvent.click(app.button('Pause'));
    expect(app.button('Pause')).toBeDisabled();
    expect(app.button('Play')).toBeEnabled();

    app.at(stepStart(3) + 30_000);
    expect(app.tiles()).toHaveLength(3);

    fireEvent.click(app.button('Play'));
    act(() => vi.advanceTimersByTime(100));
    expect(app.tiles()).toHaveLength(4);
  });

  it('Restart puts everyone back at their rest spot at once and starts over', () => {
    const app = renderApp();
    app.at(stepStart(6) + 1000);
    expect(app.feet('lead')).toEqual(xy(SEATS.lead));
    expect(app.feet('reviewer')).not.toEqual(xy(REST_SPOTS.reviewer));

    fireEvent.click(app.button('Restart'));
    act(() => vi.advanceTimersByTime(16)); // one animation frame
    for (const id of AGENT_IDS) expect(app.feet(id), id).toEqual(xy(REST_SPOTS[id]));
    expect(screen.getAllByText('No tasks yet')).toHaveLength(2);
    expect(app.button('Pause')).toBeEnabled();
  });

  it('disables Play and Pause once the run has ended, until Restart', () => {
    const app = renderApp();
    app.at(stepStart(10));
    expect(app.button('Play')).toBeDisabled();
    expect(app.button('Pause')).toBeDisabled();
    fireEvent.click(app.button('Restart'));
    expect(app.button('Pause')).toBeEnabled();
  });

  it('with reduced motion, agents jump straight to where they are going', () => {
    // Only this spy: restoreAllMocks() would also undo setup.ts's canvas mock.
    const media = vi.spyOn(window, 'matchMedia').mockImplementation(mediaQuery(true));
    try {
      const app = renderApp();
      app.at(stepStart(2) + 20);
      expect(app.feet('lead')).toEqual(xy(SEATS.lead));
    } finally {
      media.mockRestore();
    }
  });

  it('shows the run in the header: the task and tasks done, and no token count', () => {
    const app = renderApp();
    expect(screen.getByText('Run: Create a dashboard')).toBeInTheDocument();
    expect(screen.getByText('Tasks done: 0 of 0')).toBeInTheDocument();
    expect(screen.queryByText(/Tokens/)).toBeNull();
    app.at(stepStart(4) + 2500);
    expect(screen.getByText('Tasks done: 1 of 5')).toBeInTheDocument();
  });

  describe('task bar', () => {
    const input = () => screen.getByRole('textbox', { name: 'Task for the Lead/PM' });
    const send = (text: string) => {
      fireEvent.change(input(), { target: { value: text } });
      fireEvent.click(screen.getByRole('button', { name: 'Send' }));
    };

    it('trims the task, shows it as the run, clears the field and restarts the run', () => {
      const app = renderApp();
      app.at(stepStart(6));
      send('  Build a forum  ');
      act(() => vi.advanceTimersByTime(16)); // one animation frame
      expect(screen.getByText('Run: Build a forum')).toBeInTheDocument();
      expect(input()).toHaveValue('');
      expect(screen.getAllByText('No tasks yet')).toHaveLength(2);
      for (const id of AGENT_IDS) expect(app.feet(id), id).toEqual(xy(REST_SPOTS[id]));
    });

    it('ignores empty input: no new run, no restart', () => {
      const app = renderApp();
      app.at(stepStart(3) + 1000);
      send('   ');
      expect(screen.getByText('Run: Create a dashboard')).toBeInTheDocument();
      expect(app.tiles()).toHaveLength(5);
    });

    it('caps the task at 500 characters: maxLength, plus a check behind it', () => {
      renderApp();
      expect(input()).toHaveAttribute('maxLength', '500');
      send('x'.repeat(600)); // fireEvent skips maxLength, like a script would
      expect(screen.getByText(`Run: ${'x'.repeat(500)}`)).toBeInTheDocument();
    });

    it("puts the task in the Lead's first line, and Restart replays that run", () => {
      const app = renderApp();
      app.at(stepStart(6));
      send('Build a forum'); // the run starts over here
      // The first sentence only, once the Lead has walked to its desk.
      const restartAt = whenSays(app, 'lead', stepStart(6) + STEP_MS + 100);
      expect(app.speech('lead')).toBe('On it: Build a forum.');
      fireEvent.click(app.button('Restart'));
      // Step 2 of the replayed run, once the Lead is at its desk (before that it chats in the rest room).
      whenSays(app, 'lead', restartAt + STEP_MS + 100);
      expect(app.speech('lead')).toBe('On it: Build a forum.');
    });

    it("shows the task as plain text, never as HTML: header, the Lead's line and the live region", () => {
      const app = renderApp();
      const payload = '<img src=x onerror="alert(1)">';
      send(payload);
      whenSays(app, 'lead', stepStart(2) + 100);
      expect(app.container.querySelector('img')).toBeNull();
      expect(screen.getByText(`Run: ${payload}`)).toBeInTheDocument();
      expect(app.speech('lead')).toBe(`On it: ${payload}.`); // as text, never an element
      expect(screen.getByText(`Lead/PM: On it: ${payload}. Planning the work first.`)).toBeInTheDocument();
    });
  });

  describe('agent selection', () => {
    const agentButton = (name: RegExp) => screen.getByRole('button', { name });
    const panelHeading = () =>
      screen.getByRole('heading', {
        level: 2,
        name: /^(Lead\/PM|Designer|Frontend dev|Backend dev|Reviewer)$/,
      });

    it('starts with the Lead/PM selected and shown in the panel', () => {
      renderApp();
      expect(agentButton(/^Lead\/PM, Goblin/)).toHaveAttribute('aria-pressed', 'true');
      expect(panelHeading()).toHaveTextContent('Lead/PM');
    });

    it('shows the clicked agent in the panel', () => {
      renderApp();
      fireEvent.click(agentButton(/^Backend dev, Orc/));
      expect(panelHeading()).toHaveTextContent('Backend dev');
      expect(agentButton(/^Backend dev, Orc/)).toHaveAttribute('aria-pressed', 'true');
      expect(agentButton(/^Lead\/PM, Goblin/)).toHaveAttribute('aria-pressed', 'false');
    });

    it('uses real buttons that keyboard and screen-reader users can reach', () => {
      renderApp();
      const designer = agentButton(/^Designer, Elf, Idle\. Show details$/);
      expect(designer.tagName).toBe('BUTTON');
      expect(designer.tabIndex).toBe(0);
      designer.focus();
      expect(designer).toHaveFocus();
    });

    it('narrows the activity feed to the clicked agent, and "Show everyone" widens it again', () => {
      const app = renderApp();
      app.at(stepStart(5) + 1500);
      const lines = () => [...document.querySelectorAll('.feed-what')].map((line) => line.textContent);
      expect(lines()).toContain('to Frontend dev: Screens are on your desk.');
      expect(screen.queryByRole('button', { name: 'Show everyone' })).toBeNull();

      fireEvent.click(agentButton(/^Backend dev, Orc/));
      expect(lines()).toContain('to Lead/PM: Routes are up. Hammering out the rest.');
      expect(lines()).not.toContain('to Frontend dev: Screens are on your desk.');

      fireEvent.click(screen.getByRole('button', { name: 'Show everyone' }));
      expect(lines()).toContain('to Frontend dev: Screens are on your desk.');
      expect(panelHeading()).toHaveTextContent('Backend dev');
    });

    it("stamps each line with the time of day, not the script's own clock", () => {
      vi.setSystemTime(new Date(2026, 10, 4, 9, 5, 0));
      const app = renderApp();
      app.at(stepStart(2) + 100);
      const times = [...document.querySelectorAll('.feed-time')].map((t) => t.textContent);
      expect(times.length).toBeGreaterThan(0);
      for (const time of times) expect(time).toMatch(/^09:05:\d\d$/);
    });
  });

  it('announces what the agents tell you in a polite live region', () => {
    const app = renderApp();
    const live = app.container.querySelector('[aria-live="polite"]')!;
    expect(live).toHaveTextContent('');
    app.at(stepStart(2) + 100);
    expect(live).toHaveTextContent('Lead/PM: On it: Create a dashboard. Planning the work first.');
    // Agents talking to each other ("Screens are on your desk.") are not announced.
    app.at(stepStart(5) + 500);
    expect(live).toHaveTextContent('Lead/PM: On it: Create a dashboard. Planning the work first.');
    app.at(stepStart(10));
    expect(live).toHaveTextContent('Lead/PM: Your dashboard is ready: 5 of 5 tasks done, review passed.');
  });
});

describe('the review board (v3.1)', () => {
  const reviewer = () =>
    screen.getByRole('button', { name: /^Reviewer, Skeleton, .*\. Show details and reviews$/ });
  const board = () => screen.queryByRole('dialog', { name: 'Review board' });
  const activityTitle = () => document.querySelector('.feed h2')!;

  it('clicking the Reviewer selects it and filters the feed as before, and opens the board, its heading focused', () => {
    renderApp();
    const button = reviewer();
    expect(button).toHaveAttribute('aria-haspopup', 'dialog');
    button.focus();
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-pressed', 'true');
    expect(activityTitle()).toHaveTextContent('Activity · Reviewer');
    expect(board()).toBeInTheDocument();
    expect(screen.getByText('No reviews in this run yet.')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'Review board' })).toHaveFocus();
  });

  it('Esc closes it from anywhere, and the focus goes back to the Reviewer', () => {
    renderApp();
    const button = reviewer();
    button.focus();
    fireEvent.click(button);
    fireEvent.keyDown(document.body, { key: 'Escape' });
    expect(board()).toBeNull();
    expect(button).toHaveFocus();
  });

  it('its Close button closes it; opened with nothing focused, the focus goes to the Activity heading', () => {
    renderApp();
    fireEvent.click(reviewer());
    fireEvent.click(screen.getByRole('button', { name: 'Close' }));
    expect(board()).toBeNull();
    expect(activityTitle()).toHaveFocus();
  });

  it('selecting another agent closes it and leaves the focus on that agent', () => {
    renderApp();
    fireEvent.click(reviewer());
    const backend = screen.getByRole('button', { name: /^Backend dev, Orc/ });
    backend.focus();
    fireEvent.click(backend);
    expect(board()).toBeNull();
    expect(backend).toHaveFocus();
  });

  it("opens from the review's row at that review, covers the right-hand column only, and gives the focus back", () => {
    const app = renderApp();
    app.at(stepStart(9), 500);
    const hall = app.container.querySelector('.hall')!;
    const hallStyle = hall.getAttribute('style');
    const open = screen.getByRole('button', { name: 'Open review' });
    expect(open.closest('li')).toHaveTextContent('to Lead/PM: Review: Approved, no findings');
    open.focus();
    fireEvent.click(open);

    const dialog = board()!;
    expect(dialog.closest('.stage > .side')).not.toBeNull();
    expect(app.container.querySelector('.scene')!.contains(dialog)).toBe(false);
    expect(hall.getAttribute('style')).toBe(hallStyle);
    expect(app.container.querySelector('.side-content')).toHaveAttribute('inert');
    expect(screen.getByRole('heading', { level: 3, name: /^Review at \d\d:\d\d:\d\d$/ })).toHaveFocus();
    expect(screen.getByText("Reviewer's verdict: Approved")).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Close' }));
    expect(app.container.querySelector('.side-content')).not.toHaveAttribute('inert');
    expect(open).toHaveFocus();
  });
});
