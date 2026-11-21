import { fireEvent, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import type { AgentId, TaskStatus } from '../events/schema';
import { INITIAL_OFFICE, officeReducer, type OfficeState } from '../state/office';
import { stubLayout } from '../test/fakeWorld';
import { TopBar, type DemoControls, type RunStatus } from './TopBar';

const withTasks = (tasks: [AgentId, TaskStatus, string][]): OfficeState =>
  tasks.reduce(
    (office, [owner, status, title], i) =>
      officeReducer(office, { type: 'task', taskId: `t${i}`, title, owner, status, at: i }),
    INITIAL_OFFICE,
  );

const controls = (status: RunStatus = 'playing'): DemoControls => ({
  status,
  onPlay: vi.fn(),
  onPause: vi.fn(),
  onNext: vi.fn(),
  onRestart: vi.fn(),
  onSend: vi.fn(),
});

const three = withTasks([
  ['designer', 'done', 'Sketch the layout'],
  ['frontend', 'in-progress', 'Build the cards'],
  ['backend', 'todo', 'Serve the numbers'],
]);

const bar = (props: Partial<Parameters<typeof TopBar>[0]> = {}) =>
  render(
    <TopBar
      version="4.0.0"
      mode={{ kind: 'demo', label: 'Demo' }}
      office={three}
      runText="Create a dashboard"
      ledger={null}
      demo={controls()}
      {...props}
    />,
  );

describe("the HUD's top bar (4d.2)", () => {
  it('names the page, the version and the mode', () => {
    bar();
    expect(screen.getByRole('heading', { level: 1, name: 'World of Agents' })).toBeInTheDocument();
    expect(screen.getByText('v4.0.0')).toBeInTheDocument();
    expect(screen.getByText('Demo')).toBeInTheDocument();
  });

  it('says the run on one line: its task and how many tasks are done, the whole line in its title', () => {
    bar();
    const line = screen.getByText('Run: Create a dashboard · Tasks done: 1 of 3');
    expect(line).toHaveAttribute('title', 'Run: Create a dashboard · Tasks done: 1 of 3');
  });

  it('adds the "This PC" line when it is given one (Live), and has none without', () => {
    bar({
      demo: null,
      mode: { kind: 'live', label: 'Live' },
      ledger: 'This PC: 48K tokens · about $0.62 at API prices',
    });
    expect(
      screen.getByText(
        'Run: Create a dashboard · Tasks done: 1 of 3 · This PC: 48K tokens · about $0.62 at API prices',
      ),
    ).toBeInTheDocument();
  });

  it('shows the tiles in the order the tasks came, owner and status, each titled with its task', () => {
    bar();
    const tiles = within(screen.getByRole('list', { name: 'Tasks' })).getAllByRole('listitem');
    expect(tiles.map((t) => t.textContent)).toEqual([
      'Designer · Done',
      'Frontend dev · In progress',
      'Backend dev · Todo',
    ]);
    expect(tiles.map((t) => t.getAttribute('title'))).toEqual([
      'Sketch the layout',
      'Build the cards',
      'Serve the numbers',
    ]);
  });

  it('shows five tiles at most: with more, four and "+N"', () => {
    const tasks = (n: number) =>
      withTasks(
        Array.from({ length: n }, (_, i): [AgentId, TaskStatus, string] => ['frontend', 'todo', `Task ${i}`]),
      );
    const { unmount } = bar({ office: tasks(5) });
    expect(within(screen.getByRole('list', { name: 'Tasks' })).getAllByRole('listitem')).toHaveLength(5);
    expect(screen.queryByText(/^\+\d/)).toBeNull();
    unmount();
    bar({ office: tasks(7) });
    const tiles = within(screen.getByRole('list', { name: 'Tasks' })).getAllByRole('listitem');
    expect(tiles).toHaveLength(5);
    expect(tiles.at(-1)?.textContent).toBe('+3');
  });

  it('shows the task input in the demo until the run has its tasks, and sends what is typed', () => {
    const demo = controls();
    const { rerender } = bar({ office: INITIAL_OFFICE, demo });
    const input = screen.getByRole('textbox', { name: 'Task for the Lead/PM' });
    expect(screen.queryByText(/Tasks done/)).toBeNull();
    fireEvent.change(input, { target: { value: 'Build a login page' } });
    fireEvent.click(screen.getByRole('button', { name: 'Send' }));
    expect(demo.onSend).toHaveBeenCalledWith('Build a login page');
    rerender(
      <TopBar
        version="4.0.0"
        mode={{}}
        office={three}
        runText="Build a login page"
        ledger={null}
        demo={demo}
      />,
    );
    expect(screen.queryByRole('textbox')).toBeNull();
    expect(screen.getByText('Run: Build a login page · Tasks done: 1 of 3')).toBeInTheDocument();
  });

  it('has no task input in Live, even before there are tasks', () => {
    bar({ demo: null, office: INITIAL_OFFICE, runText: null });
    expect(screen.queryByRole('textbox')).toBeNull();
  });

  it('has no run line with nothing to say, and counts the tasks only once there are some (Dima, 20 Nov)', () => {
    const live = { demo: null, office: INITIAL_OFFICE, mode: { kind: 'live', label: 'Live' } };
    const { container, unmount } = bar({ ...live, runText: null });
    expect(container.querySelector('.hud-run-line')).toBeNull();
    expect(screen.queryByText(/Tasks done/)).toBeNull();
    unmount();
    // a run the Lead is still planning: its task, and no count yet
    const planning = bar({ ...live, runText: 'Build a login page' });
    expect(planning.container.querySelector('.hud-run-line')).toHaveTextContent(/^Run: Build a login page$/);
    planning.unmount();
    // the "This PC" line says something even before a run
    bar({ ...live, runText: null, ledger: 'This PC: 48K tokens · about $0.62 at API prices' });
    expect(screen.getByText('This PC: 48K tokens · about $0.62 at API prices')).toHaveClass('hud-run-line');
    expect(screen.queryByText(/Tasks done/)).toBeNull();
  });

  describe('on a phone (under 48rem, Dima, 20 Nov)', () => {
    let undo: () => void = () => {};
    afterEach(() => undo());
    const before = (a: Node, b: Node) =>
      expect(a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    const rooms = { open: false, controls: 'rail', onToggle: vi.fn() };

    it('has no tiles, the run line counting the tasks first, and the run after the buttons, as on screen', () => {
      undo = stubLayout(400, 800);
      bar({
        demo: null,
        mode: { kind: 'live', label: 'Live' },
        onPlayDemo: vi.fn(),
        onTeam: vi.fn(),
        rooms,
      });
      expect(screen.queryByRole('list', { name: 'Tasks' })).toBeNull();
      // the count first, so the line's cut never takes it
      const line = screen.getByText('Tasks done: 1 of 3 · Run: Create a dashboard');
      before(screen.getByRole('heading', { level: 1 }), screen.getByRole('button', { name: 'Rooms' }));
      before(
        screen.getByRole('button', { name: 'Rooms' }),
        screen.getByRole('button', { name: 'Play demo' }),
      );
      before(screen.getByRole('button', { name: 'Team' }), line);
    });

    it("puts the demo's task input after its controls", () => {
      undo = stubLayout(400, 800);
      bar({ office: INITIAL_OFFICE, rooms });
      before(screen.getByRole('group', { name: 'Demo run' }), screen.getByRole('textbox'));
    });

    it('keeps the tiles and the run before the controls in a wider window', () => {
      undo = stubLayout(800, 800);
      bar({ demo: null, onPlayDemo: vi.fn(), rooms });
      expect(screen.getByRole('list', { name: 'Tasks' })).toBeInTheDocument();
      before(screen.getByText(/^Run: /), screen.getByRole('button', { name: 'Play demo' }));
    });

    it('shows "Back to live" and "Go live" as an icon and "Live", still named in full (Dima, 21 Nov)', () => {
      undo = stubLayout(320, 480);
      const onBackToLive = vi.fn();
      const onGoLive = vi.fn();
      bar({ demo: { ...controls(), onBackToLive, onGoLive }, rooms });
      for (const [name, run] of [
        ['Back to live', onBackToLive],
        ['Go live', onGoLive],
      ] as const) {
        const button = screen.getByRole('button', { name });
        // the words on it are part of its name, so speaking what is seen works
        expect(button).toHaveTextContent(/^Live$/);
        expect(button).toHaveAttribute('title', name);
        expect(button.querySelector('svg')).toHaveAttribute('aria-hidden', 'true');
        fireEvent.click(button);
        expect(run).toHaveBeenCalledOnce();
      }
    });

    it("has the drawer's handle after Rooms, a disclosure saying what waits for you (Dima, 21 Nov)", () => {
      undo = stubLayout(320, 480);
      const onToggle = vi.fn();
      const { rerender } = bar({ rooms, activity: { open: false, unread: 2, controls: 'drawer', onToggle } });
      const handle = screen.getByRole('button', { name: 'Activity, 2 for you' });
      expect(handle).toHaveAttribute('aria-expanded', 'false');
      expect(handle).toHaveAttribute('aria-controls', 'drawer');
      expect(handle.textContent).toBe('Activity 2');
      expect(handle.querySelector('.hud-badge')).toHaveAttribute('aria-hidden', 'true');
      before(screen.getByRole('button', { name: 'Rooms' }), handle);
      before(handle, screen.getByRole('group', { name: 'Demo run' }));
      fireEvent.click(handle);
      expect(onToggle).toHaveBeenCalledOnce();
      // open, it says so and stays, to close the drawer again
      rerender(
        <TopBar
          version="4.0.0"
          mode={{ kind: 'demo', label: 'Demo' }}
          office={three}
          runText="Create a dashboard"
          ledger={null}
          demo={controls()}
          rooms={rooms}
          activity={{ open: true, unread: 0, controls: 'drawer', onToggle }}
        />,
      );
      expect(screen.getByRole('button', { name: 'Activity' })).toHaveAttribute('aria-expanded', 'true');
    });

    it("has no handle of the drawer's in a wider window, where the drawer keeps its own", () => {
      undo = stubLayout(800, 800);
      bar({ rooms, activity: { open: false, unread: 2, controls: 'drawer', onToggle: vi.fn() } });
      expect(screen.queryByRole('button', { name: /^Activity/ })).toBeNull();
    });

    it('keeps "Back to live" and "Go live" in words in a wider window', () => {
      undo = stubLayout(800, 800);
      bar({ demo: { ...controls(), onBackToLive: vi.fn(), onGoLive: vi.fn() }, rooms });
      expect(screen.getByRole('button', { name: 'Back to live' })).toHaveTextContent(/^Back to live$/);
      expect(screen.getByRole('button', { name: 'Go live' })).toHaveTextContent(/^Go live$/);
    });
  });

  it("names the demo's four icon buttons, and disables them as the page does today", () => {
    const states: [RunStatus, boolean[]][] = [
      // Play, Pause, Next step, Restart: disabled?
      ['playing', [true, false, false, false]],
      ['paused', [false, true, true, false]],
      ['ended', [true, true, true, false]],
    ];
    for (const [status, disabled] of states) {
      const { unmount } = bar({ demo: controls(status) });
      const group = screen.getByRole('group', { name: 'Demo run' });
      const buttons = within(group).getAllByRole('button');
      expect(buttons.map((b) => b.getAttribute('aria-label'))).toEqual([
        'Play',
        'Pause',
        'Next step',
        'Restart',
      ]);
      expect(buttons.map((b) => b.getAttribute('title'))).toEqual(['Play', 'Pause', 'Next step', 'Restart']);
      expect(
        buttons.map((b) => (b as HTMLButtonElement).disabled),
        status,
      ).toEqual(disabled);
      unmount();
    }
  });

  it('runs each control it is given', () => {
    const demo = { ...controls('paused'), onBackToLive: vi.fn(), onGoLive: vi.fn() };
    bar({ demo });
    fireEvent.click(screen.getByRole('button', { name: 'Play' }));
    fireEvent.click(screen.getByRole('button', { name: 'Restart' }));
    fireEvent.click(screen.getByRole('button', { name: 'Back to live' }));
    fireEvent.click(screen.getByRole('button', { name: 'Go live' }));
    expect(demo.onPlay).toHaveBeenCalledOnce();
    expect(demo.onRestart).toHaveBeenCalledOnce();
    expect(demo.onBackToLive).toHaveBeenCalledOnce();
    expect(demo.onGoLive).toHaveBeenCalledOnce();
  });

  it('offers "Back to live" and "Go live" only where it is given them', () => {
    bar();
    expect(screen.queryByRole('button', { name: 'Back to live' })).toBeNull();
    expect(screen.queryByRole('button', { name: 'Go live' })).toBeNull();
  });

  it('in Live, "Play demo" and "Team" where it is given them, and no demo controls', () => {
    const onPlayDemo = vi.fn();
    const onTeam = vi.fn();
    bar({ demo: null, mode: { kind: 'live', label: 'Live' }, onPlayDemo, onTeam });
    expect(screen.queryByRole('group', { name: 'Demo run' })).toBeNull();
    fireEvent.click(screen.getByRole('button', { name: 'Play demo' }));
    fireEvent.click(screen.getByRole('button', { name: 'Team' }));
    expect(onPlayDemo).toHaveBeenCalledOnce();
    expect(onTeam).toHaveBeenCalledOnce();
  });

  it('in a narrow window, a Rooms button that shows and hides the rooms, where it is given one', () => {
    const onToggle = vi.fn();
    const { rerender } = bar();
    expect(screen.queryByRole('button', { name: 'Rooms' })).toBeNull();
    rerender(
      <TopBar
        version="4.0.0"
        mode={{}}
        office={three}
        runText={null}
        ledger={null}
        demo={null}
        rooms={{ open: true, controls: 'rail', onToggle }}
      />,
    );
    const rooms = screen.getByRole('button', { name: 'Rooms' });
    expect(rooms).toHaveAttribute('aria-expanded', 'true');
    expect(rooms).toHaveAttribute('aria-controls', 'rail');
    fireEvent.click(rooms);
    expect(onToggle).toHaveBeenCalledOnce();
  });
});
