import { act, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import App from './App';
import { AGENT_IDS, type AgentId } from './events/schema';
import { SEATS } from './office/hall/destination';
import { SMALL_TALK } from './office/hall/smalltalk';
import { REST_SPOTS, type Point } from './office/hall/walk';
import { STATUS_COLOR } from './office/tasks';
import { STEP_MS } from './script/demoRun';

/** When step n of the demo run starts. stepStart(10) is the end of step 9. */
const stepStart = (n: number) => (n - 1) * STEP_MS;

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
     */
    at: (ms: number) => {
      for (let left = start + ms - performance.now(); left > 0; left -= 50) {
        act(() => vi.advanceTimersByTime(Math.min(50, left)));
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
});

afterEach(() => {
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
    expect(screen.getByText('No tasks yet')).toBeInTheDocument();
    expect(screen.getByText('Furnace · cold')).toBeInTheDocument();
    expect(app.tiles()).toEqual([]);

    // Step 4: plan done; Designer writing, Backend reading at its desk, the Lead checking in.
    app.at(stepStart(4) + 2500);
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

    app.at(stepStart(10));
    expect(screen.getByText('5/5 done')).toBeInTheDocument();
    expect(app.bar()).toBe('100%');
    expect(screen.getByText('Furnace · cold')).toBeInTheDocument();
  });

  it('walks agents from the rest room to work and back', () => {
    const app = renderApp();
    for (const id of AGENT_IDS) expect(app.feet(id), id).toEqual(xy(REST_SPOTS[id]));

    // The Lead sets off for its desk when the task arrives, and gets there within the step.
    app.at(stepStart(2) + 1000);
    expect(app.feet('lead')).not.toEqual(xy(REST_SPOTS.lead));
    expect(app.feet('lead')).not.toEqual(xy(SEATS.lead));
    app.at(stepStart(3));
    expect(app.feet('lead')).toEqual(xy(SEATS.lead));

    // Both orcs are at their desks while they write.
    app.at(stepStart(5) + 1500);
    expect(app.feet('frontend')).toEqual(xy(SEATS.frontend));
    expect(app.feet('backend')).toEqual(xy(SEATS.backend));

    app.at(stepStart(10));
    for (const id of AGENT_IDS) expect(app.feet(id), id).toEqual(xy(REST_SPOTS[id]));
  });

  it('shows state bubbles, speech bubbles, small talk and the orcs’ "!!"', () => {
    const app = renderApp();
    app.at(100);
    expect(app.bubble('lead')).toBe('idle');
    expect(app.speech('lead')).toBe(SMALL_TALK.lead[0]);

    app.at(stepStart(2) + 100);
    expect(app.speech('lead')).toBe('On it: Create a dashboard. Planning the work first.');
    expect(app.bubble('lead')).toBe('thinking');
    app.at(stepStart(2) + 4100);
    expect(app.speech('lead')).toBeNull();

    app.at(stepStart(5) + 1500);
    expect(app.bubble('frontend')).toBe('writing!!');
    expect(app.bubble('backend')).toBe('writing!!');
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
    expect(screen.getByText('No tasks yet')).toBeInTheDocument();
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
});
