import { act, fireEvent, render, screen, within } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import App from './App';
import type { AgentId, OfficeEvent } from './events/schema';
import { FakeEventSource } from './test/fakeEventSource';
import { RETRY_MS } from './live/hall';
import { CONTEXT_GRACE_MS } from './world/support';
import { fakeWorld, stubLayout, type FakeWorld } from './test/fakeWorld';

// The HUD over the Forge Keep (4d): from the first paint wherever the world can draw (Dima, 20 Nov), the classic page
// with its 2D hall only when the world falls back.
const scene = vi.hoisted(() => ({ create: vi.fn() }));
vi.mock('./world/support', async (importOriginal) => ({
  ...(await importOriginal<typeof import('./world/support')>()),
  canDrawWorld: () => true,
}));
vi.mock('./world/scene/world', () => ({ createWorld: scene.create }));

let world: FakeWorld;
let undoLayout: () => void;
const settle = () => act(async () => {});

beforeEach(() => {
  vi.stubEnv('VITE_LIVE', 'false');
  world = fakeWorld();
  scene.create.mockReset().mockResolvedValue(world);
  undoLayout = stubLayout(1440, 900);
  localStorage.clear();
});
afterEach(() => {
  undoLayout();
  localStorage.clear();
  vi.unstubAllEnvs();
  vi.useRealTimers();
});

const main = (container: HTMLElement) => container.querySelector('main') as HTMLElement;

describe('the HUD over the world (4d.1)', () => {
  it('is the HUD while the world loads: a quiet backdrop, the panels at work, the rooms and tags waiting', async () => {
    // a world that never comes
    scene.create.mockReturnValue(new Promise<FakeWorld>(() => {}));
    const { container } = render(<App />);
    await settle();
    expect(main(container)).toHaveClass('keep');
    expect(container.querySelector('.app-header')).toBeNull();
    expect(container.querySelector('.hall')).toBeNull();
    expect(screen.getByRole('status')).toHaveTextContent('Raising the keep…');
    // the top bar, the drawer and the agent list work at once, and so does the card
    expect(container.querySelector('.hud-top')).not.toBeNull();
    expect(screen.getByRole('complementary', { name: 'Activity and tasks' })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /^Designer/ }));
    expect(screen.getByRole('heading', { level: 2, name: 'Designer' })).toBeInTheDocument();
    // what needs the world waits for it: the rooms, Cutaway, Follow and the name tags
    const rail = screen.getByRole('navigation', { name: 'Rooms' });
    expect(within(rail).getAllByRole('button')).not.toHaveLength(0);
    for (const b of within(rail).getAllByRole('button')) expect(b).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Follow' })).toBeDisabled();
    expect(container.querySelector('.hud-labels')).toBeNull();
    // the world is built at the stage's size: the window, here 1440 x 900
    expect(scene.create.mock.calls[0]?.[0]).toMatchObject({ width: 1440, height: 900 });
  });

  it('is the same HUD once the world is ready: nothing moves, and the rooms, Follow and the tags come in', async () => {
    let resolve: (w: FakeWorld) => void = () => {};
    scene.create.mockReturnValue(new Promise<FakeWorld>((r) => (resolve = r)));
    const { container } = render(<App />);
    await settle();
    const top = container.querySelector('.hud-top');
    fireEvent.click(screen.getByRole('button', { name: /^Designer/ }));

    await act(async () => resolve(world));
    expect(main(container)).toHaveClass('keep');
    // the same elements, not a second layout
    expect(container.querySelector('.hud-top')).toBe(top);
    expect(screen.queryByRole('status')).toBeNull();
    for (const b of within(screen.getByRole('navigation', { name: 'Rooms' })).getAllByRole('button'))
      expect(b).toBeEnabled();
    expect(screen.getByRole('button', { name: 'Follow' })).toBeEnabled();
    expect(container.querySelectorAll('.hud-labels .hud-tag')).toHaveLength(5);
    expect(world.resize).toHaveBeenLastCalledWith(1440, 900);
  });

  it('goes to the classic page with the 2D hall when the world fails to load', async () => {
    scene.create.mockRejectedValue(new Error('a model did not load'));
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const { container } = render(<App />);
    await settle();
    expect(main(container)).not.toHaveClass('keep');
    expect(container.querySelector('.app-header')).not.toBeNull();
    expect(container.querySelector('.hall')).not.toBeNull();
    expect(container.querySelector('.hud-top')).toBeNull();
    expect(screen.queryByRole('status')).toBeNull();
    // the classic page's task bar and agent panel are back
    expect(screen.getAllByRole('textbox', { name: 'Task for the Lead/PM' })).toHaveLength(1);
    warn.mockRestore();
  });

  it('puts the areas in their places: top bar, rooms, agents and the drawer; the card waits for an agent', async () => {
    const { container } = render(<App />);
    await settle();
    const top = container.querySelector('.hud-top') as HTMLElement;
    expect(within(top).getByRole('heading', { level: 1, name: 'World of Agents' })).toBeInTheDocument();
    expect(within(top).getByRole('group', { name: 'Demo run' })).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: 'Rooms' })).toBeInTheDocument();
    const agents = screen.getByRole('group', { name: 'Agents' });
    expect(
      within(agents)
        .getAllByRole('button')
        .map((b) => b.getAttribute('aria-label')),
    ).toEqual([
      'Lead/PM, Idle',
      'Designer, Idle',
      'Frontend dev, Idle',
      'Backend dev, Idle',
      'Reviewer, Idle',
    ]);
    expect(container.querySelector('.hud-card')).toBeNull();
    const drawer = screen.getByRole('complementary', { name: 'Activity and tasks' });
    expect(within(drawer).getByRole('heading', { name: 'Activity' })).toBeInTheDocument();
    expect(within(drawer).getByRole('tab', { name: 'Task board' })).toBeInTheDocument();
  });

  it('the top bar takes the task input while the demo has no tasks; the drawer has none, and no "This PC" line', async () => {
    const { container } = render(<App />);
    await settle();
    const top = container.querySelector('.hud-top') as HTMLElement;
    expect(screen.getAllByRole('textbox', { name: 'Task for the Lead/PM' })).toHaveLength(1);
    expect(within(top).getByRole('textbox', { name: 'Task for the Lead/PM' })).toBeInTheDocument();
    expect(container.textContent).not.toMatch(/This PC/);
  });

  it("the agent list opens an agent's card and closes it again (4d.4)", async () => {
    const { container } = render(<App />);
    await settle();
    const agents = screen.getByRole('group', { name: 'Agents' });
    const backend = within(agents).getByRole('button', { name: /^Backend dev/ });
    fireEvent.click(backend);
    expect(backend).toHaveAttribute('aria-pressed', 'true');
    expect(within(agents).getByRole('button', { name: /^Lead\/PM/ })).toHaveAttribute(
      'aria-pressed',
      'false',
    );
    const card = container.querySelector('.hud-card') as HTMLElement;
    expect(within(card).getByRole('heading', { level: 2, name: 'Backend dev' })).toBeInTheDocument();
    // the feed keeps showing everyone: "Show in Activity" is the card's to ask
    expect(screen.getByRole('heading', { name: 'Activity' })).toBeInTheDocument();
    fireEvent.click(backend);
    expect(container.querySelector('.hud-card')).toBeNull();
    expect(backend).toHaveAttribute('aria-pressed', 'false');
  });

  it('a click on a figure in the world opens its card, and a second click keeps it open (4d.4)', async () => {
    const { container } = render(<App />);
    await settle();
    const cardHeading = () =>
      within(container.querySelector('.hud-card') as HTMLElement).getByRole('heading', { level: 2 });
    act(() => world.clickFigure('reviewer'));
    expect(cardHeading()).toHaveTextContent('Reviewer');
    act(() => world.clickFigure('reviewer'));
    expect(cardHeading()).toHaveTextContent('Reviewer');
    act(() => world.clickFigure('designer'));
    expect(cardHeading()).toHaveTextContent('Designer');
  });

  it('Follow keeps the agent in view until a hand move or a second press, and unpresses the room (4d.4)', async () => {
    render(<App />);
    await settle();
    fireEvent.click(screen.getByRole('button', { name: /^Designer/ }));
    fireEvent.click(screen.getByRole('button', { name: 'Follow' }));
    expect(world.follow).toHaveBeenLastCalledWith('designer');
    expect(screen.getByRole('button', { name: 'Following' })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('button', { name: 'Whole keep' })).toHaveAttribute('aria-pressed', 'false');
    act(() => world.moveByHand());
    expect(screen.getByRole('button', { name: 'Follow' })).toHaveAttribute('aria-pressed', 'false');
    fireEvent.click(screen.getByRole('button', { name: 'Follow' }));
    fireEvent.click(screen.getByRole('button', { name: 'Following' }));
    expect(world.follow).toHaveBeenLastCalledWith(null);
  });

  it('Esc and Close close the card, and the focus goes back to what opened it (D19)', async () => {
    const { container } = render(<App />);
    await settle();
    const lead = screen.getByRole('button', { name: /^Lead\/PM/ });
    lead.focus();
    fireEvent.click(lead);
    screen.getByRole('button', { name: 'Follow' }).focus();
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(container.querySelector('.hud-card')).toBeNull();
    expect(lead).toHaveFocus();

    // a card a figure opened: back to the world
    const canvas = container.querySelector('canvas.world') as HTMLCanvasElement;
    canvas.focus();
    act(() => world.clickFigure('backend'));
    fireEvent.click(screen.getByRole('button', { name: 'Close the card' }));
    expect(container.querySelector('.hud-card')).toBeNull();
    expect(canvas).toHaveFocus();
  });

  it('"Show in Activity" filters the feed to the agent and moves the focus there; the Reviewer\'s opens the reviews', async () => {
    render(<App />);
    await settle();
    fireEvent.click(screen.getByRole('button', { name: /^Backend dev/ }));
    fireEvent.click(screen.getByRole('button', { name: 'Show in Activity' }));
    expect(screen.getByRole('heading', { name: 'Activity · Backend dev' })).toHaveFocus();
    fireEvent.click(screen.getByRole('button', { name: /^Reviewer/ }));
    fireEvent.click(screen.getByRole('button', { name: 'Show in Activity' }));
    expect(screen.getByRole('heading', { name: 'Activity · Reviewer' })).toBeInTheDocument();
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('the rooms rail sends the camera, and a hand move leaves no room pressed (4d.3)', async () => {
    render(<App />);
    await settle();
    expect(screen.getByRole('button', { name: 'Whole keep' })).toHaveAttribute('aria-pressed', 'true');
    fireEvent.click(screen.getByRole('button', { name: /^Workshop/ }));
    expect(world.flyToRoom).toHaveBeenLastCalledWith('workshop');
    expect(screen.getByRole('button', { name: /^Workshop/ })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('button', { name: 'Whole keep' })).toHaveAttribute('aria-pressed', 'false');
    act(() => world.moveByHand());
    expect(screen.getByRole('button', { name: /^Workshop/ })).toHaveAttribute('aria-pressed', 'false');
    fireEvent.click(screen.getByRole('button', { name: 'Whole keep' }));
    expect(world.flyToRoom).toHaveBeenLastCalledWith('overview');
  });

  it('the Cutaway toggle opens every house and closes them again (4d.3)', async () => {
    render(<App />);
    await settle();
    const toggle = screen.getByRole('button', { name: 'Cutaway' });
    fireEvent.click(toggle);
    expect(world.setOpenHouses).toHaveBeenLastCalledWith(true);
    expect(toggle).toHaveAttribute('aria-pressed', 'true');
    fireEvent.click(toggle);
    expect(world.setOpenHouses).toHaveBeenLastCalledWith(false);
    expect(toggle).toHaveAttribute('aria-pressed', 'false');
  });

  it("lays the world's labels over it, in the stage, hidden from screen readers (4d.6)", async () => {
    const { container } = render(<App />);
    await settle();
    const layer = container.querySelector('.stage .hud-labels') as HTMLElement;
    expect(layer).toHaveAttribute('aria-hidden', 'true');
    expect(layer.querySelectorAll('.hud-tag')).toHaveLength(5);
    // the classic activity column is not in the stage any more: the drawer has it
    expect(container.querySelector('.stage .side')).toBeNull();
    act(() => world.frame());
    expect((layer.querySelector('.hud-label') as HTMLElement).style.transform).toBe(
      'translate(720.0px, 450.0px) translate(-50%, -100%)',
    );
  });

  it('the world takes the focus, for the arrow keys to pan it (4d.3)', async () => {
    const { container } = render(<App />);
    await settle();
    const canvas = container.querySelector('canvas.world') as HTMLCanvasElement;
    expect(canvas.tabIndex).toBe(0);
    expect(canvas).toHaveAttribute('role', 'img');
  });

  it('goes back to the page it had when the 2D hall takes over from a lost context', async () => {
    vi.useFakeTimers();
    const { container } = render(<App />);
    await settle();
    expect(main(container)).toHaveClass('keep');
    const canvas = container.querySelector('canvas.world') as HTMLCanvasElement;
    act(() => canvas.dispatchEvent(new Event('webglcontextlost')));
    act(() => vi.advanceTimersByTime(CONTEXT_GRACE_MS + 1));
    expect(main(container)).not.toHaveClass('keep');
    expect(container.querySelector('.app-header')).not.toBeNull();
    expect(container.querySelector('.hall')).not.toBeNull();
    expect(world.dispose).toHaveBeenCalledOnce();
  });
});

describe('the drawer (4d.5)', () => {
  const drawer = () => screen.queryByRole('complementary', { name: 'Activity and tasks' });

  it('starts open in a wide window, on Activity, with the task board a tab away', async () => {
    render(<App />);
    await settle();
    expect(drawer()).not.toBeNull();
    expect(screen.getByRole('tab', { name: 'Activity' })).toHaveAttribute('aria-selected', 'true');
    fireEvent.click(screen.getByRole('tab', { name: 'Task board' }));
    expect(screen.getByRole('heading', { name: 'Task board' })).toBeVisible();
    expect(screen.queryByRole('heading', { name: 'Activity' })).toBeNull();
  });

  it('starts closed in a narrower window, its handle there instead', async () => {
    undoLayout();
    undoLayout = stubLayout(1200, 800);
    render(<App />);
    await settle();
    expect(drawer()).toBeNull();
    expect(screen.getByRole('button', { name: 'Activity' })).toHaveAttribute('aria-expanded', 'false');
  });

  it("keeps the viewer's choice for the next visit", async () => {
    const { unmount } = render(<App />);
    await settle();
    fireEvent.click(screen.getByRole('button', { name: 'Close the drawer' }));
    expect(drawer()).toBeNull();
    // the focus was on the close button, inside: it goes to the handle
    expect(screen.getByRole('button', { name: 'Activity' })).toHaveFocus();
    unmount();
    render(<App />);
    await settle();
    expect(drawer()).toBeNull();
    fireEvent.click(screen.getByRole('button', { name: 'Activity' }));
    expect(drawer()).not.toBeNull();
    expect(screen.getByRole('tab', { name: 'Activity' })).toHaveFocus();
  });

  it('Esc closes the card first, then the drawer, the focus going back each time (D19)', async () => {
    const { container } = render(<App />);
    await settle();
    const lead = screen.getByRole('button', { name: /^Lead\/PM/ });
    lead.focus();
    fireEvent.click(lead);
    screen.getByRole('tab', { name: 'Activity' }).focus();
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(container.querySelector('.hud-card')).toBeNull();
    expect(drawer()).not.toBeNull();
    expect(lead).toHaveFocus();
    screen.getByRole('tab', { name: 'Activity' }).focus();
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(drawer()).toBeNull();
    expect(screen.getByRole('button', { name: 'Activity' })).toHaveFocus();
  });

  it('"Show in Activity" opens a closed drawer on the Activity tab', async () => {
    render(<App />);
    await settle();
    fireEvent.click(screen.getByRole('tab', { name: 'Task board' }));
    fireEvent.click(screen.getByRole('button', { name: 'Close the drawer' }));
    fireEvent.click(screen.getByRole('button', { name: /^Designer/ }));
    fireEvent.click(screen.getByRole('button', { name: 'Show in Activity' }));
    expect(drawer()).not.toBeNull();
    expect(screen.getByRole('tab', { name: 'Activity' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('heading', { name: 'Activity · Designer' })).toHaveFocus();
  });
});

describe('the needs-you banner and Show me, in Live (4d.7)', () => {
  beforeEach(() => {
    vi.unstubAllEnvs();
    FakeEventSource.all = [];
    vi.stubGlobal('EventSource', FakeEventSource);
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => ({ ok: true, json: async () => ({ ok: true, version: '9.8.7' }) })),
    );
  });
  afterEach(() => vi.unstubAllGlobals());

  const live = async (...events: OfficeEvent[]) => {
    const view = render(<App />);
    await settle();
    act(() => {
      for (const e of events) FakeEventSource.latest.send(e);
      FakeEventSource.latest.replayed();
    });
    await settle();
    return view;
  };
  const needs = (agent: AgentId, at = 1): OfficeEvent => ({ type: 'state', agent, state: 'needs-you', at });

  it("takes the status line's place under the top bar, a row per agent that waits", async () => {
    const { container } = await live(needs('backend'));
    const under = container.querySelector('.hud-under') as HTMLElement;
    expect(within(under).getByRole('region', { name: 'Needs you' })).toHaveTextContent(
      'Backend dev needs your approval in Claude Code',
    );
    expect(under.querySelector('.hud-status')).toBeNull();
    // the live region says it as it always has
    expect(container.querySelector('[aria-live="polite"]')).toHaveTextContent(
      'Backend dev needs your approval in Claude Code',
    );
  });

  it("Show me flies to the agent, opens its card and puts the focus on the card's heading (D17)", async () => {
    await live(needs('frontend'), needs('backend', 2));
    fireEvent.click(screen.getByRole('button', { name: 'Show me Backend dev' }));
    expect(world.flyToAgent).toHaveBeenLastCalledWith('backend');
    const heading = screen.getByRole('heading', { level: 2, name: 'Backend dev' });
    expect(heading).toHaveFocus();
    expect(screen.getByRole('button', { name: /^Backend dev/ })).toHaveAttribute('aria-pressed', 'true');
    // again, with that card already open: the focus goes back to its heading
    screen.getByRole('button', { name: 'Show me Frontend dev' }).focus();
    fireEvent.click(screen.getByRole('button', { name: 'Show me Frontend dev' }));
    expect(screen.getByRole('heading', { level: 2, name: 'Frontend dev' })).toHaveFocus();
    fireEvent.click(screen.getByRole('button', { name: 'Show me Frontend dev' }));
    expect(screen.getByRole('heading', { level: 2, name: 'Frontend dev' })).toHaveFocus();
  });

  it('goes back to the status line once nobody waits', async () => {
    const { container } = await live(needs('backend'));
    act(() => FakeEventSource.latest.send({ type: 'state', agent: 'backend', state: 'writing', at: 3 }));
    await settle();
    expect(container.querySelector('.hud-needs')).toBeNull();
    expect(container.querySelector('.hud-under .hud-status')).not.toBeNull();
  });
});

describe('the status line (4d.8, D20)', () => {
  const line = (container: HTMLElement) => container.querySelector('.hud-under .hud-status') as HTMLElement;

  it("the hosted demo's line, which wraps so its link to the README shows", async () => {
    const { container } = render(<App />);
    await settle();
    expect(line(container)).toHaveClass('wraps');
    expect(line(container)).toHaveTextContent(/^Demo · scripted run with no AI calls\..* README$/);
    expect(within(line(container)).getByRole('link', { name: 'README' })).toHaveAttribute(
      'href',
      'https://github.com/kremendev/world-of-agents',
    );
  });

  describe('in Live', () => {
    beforeEach(() => {
      vi.useFakeTimers();
      vi.unstubAllEnvs();
      FakeEventSource.all = [];
      vi.stubGlobal('EventSource', FakeEventSource);
      vi.stubGlobal(
        'fetch',
        vi.fn(async () => ({ ok: true, json: async () => ({ ok: true, version: '9.8.7' }) })),
      );
    });
    afterEach(() => vi.unstubAllGlobals());

    const live = async (...events: OfficeEvent[]) => {
      const view = render(<App />);
      await settle();
      act(() => {
        for (const e of events) FakeEventSource.latest.send(e);
        FakeEventSource.latest.replayed();
      });
      await settle();
      return view;
    };

    it('waiting for a task, then for your next message, then a session ended: one muted line each', async () => {
      const { container } = await live();
      expect(line(container)).toHaveTextContent(
        'Live · Type your task in Claude Code. The hall only watches.',
      );
      expect(line(container)).not.toHaveClass('wraps');
      act(() => FakeEventSource.latest.send({ type: 'awaiting-prompt', at: 1 }));
      expect(line(container)).toHaveTextContent('Lead/PM is waiting for your next message in Claude Code');
      act(() => FakeEventSource.latest.send({ type: 'session-end', at: 2 }));
      expect(line(container)).toHaveTextContent('Session ended · waiting for the next one');
      expect(line(container)).toHaveAttribute('title', 'Session ended · waiting for the next one');
    });

    it('the hall offline, then restarted', async () => {
      const { container } = await live();
      act(() => FakeEventSource.latest.fail());
      act(() => vi.advanceTimersByTime(10_000));
      expect(line(container)).toHaveTextContent('Hall offline · reconnecting');
      act(() => vi.advanceTimersByTime(RETRY_MS));
      act(() => FakeEventSource.latest.replayed('hall-start-id-02'));
      expect(line(container)).toHaveTextContent('Live · Hall restarted. Earlier events are gone.');
    });
  });
});

describe('narrow windows (4d.9, D15)', () => {
  it('the top bar has a Rooms button that shows and hides the rooms, a disclosure', async () => {
    undoLayout();
    undoLayout = stubLayout(1000, 700);
    render(<App />);
    await settle();
    const button = screen.getByRole('button', { name: 'Rooms' });
    const rail = screen.getByRole('navigation', { name: 'Rooms' });
    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(button).toHaveAttribute('aria-controls', rail.id);
    expect(rail).not.toHaveClass('open');
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');
    expect(rail).toHaveClass('open');
    // a choice closes the menu
    fireEvent.click(screen.getByRole('button', { name: /^Tavern/ }));
    expect(world.flyToRoom).toHaveBeenLastCalledWith('tavern');
    expect(button).toHaveAttribute('aria-expanded', 'false');
    // Esc closes it first, the focus back on the button
    fireEvent.click(button);
    screen.getByRole('button', { name: 'Whole keep' }).focus();
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(button).toHaveFocus();
  });

  it('starts with the drawer closed, and puts what is under the top bar where the top bar ends', async () => {
    undoLayout();
    undoLayout = stubLayout(700, 900);
    const { container } = render(<App />);
    await settle();
    expect(screen.queryByRole('complementary', { name: 'Activity and tasks' })).toBeNull();
    // every element is 900 px tall here: the top bar's own height, and an edge each side
    expect(main(container).style.getPropertyValue('--hud-top')).toBe('calc(900px + 2rem)');
  });
});
