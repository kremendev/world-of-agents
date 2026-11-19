import { fireEvent, render, screen, within } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import type { AgentId, TaskStatus } from '../events/schema';
import { INITIAL_OFFICE, officeReducer, type OfficeState } from '../state/office';
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
    expect(screen.getByText('Tasks done: 0 of 0')).toBeInTheDocument();
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
});
