import { act, fireEvent, render, screen, within } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import App from './App';
import { CONTEXT_GRACE_MS } from './world/support';
import { fakeWorld, stubLayout, type FakeWorld } from './test/fakeWorld';

// The HUD over the Forge Keep (4d): the page lays it over the world only once the world is on screen.
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
});
afterEach(() => {
  undoLayout();
  vi.unstubAllEnvs();
  vi.useRealTimers();
});

const main = (container: HTMLElement) => container.querySelector('main') as HTMLElement;

describe('the HUD over the world (4d.1)', () => {
  it('keeps the page as it was while the world loads, then lays the HUD over it', async () => {
    let resolve: (w: FakeWorld) => void = () => {};
    scene.create.mockReturnValue(new Promise<FakeWorld>((r) => (resolve = r)));
    const { container } = render(<App />);
    await settle();
    expect(main(container)).not.toHaveClass('keep');
    expect(container.querySelector('.app-header')).not.toBeNull();
    expect(container.querySelector('.hud-top')).toBeNull();

    await act(async () => resolve(world));
    expect(main(container)).toHaveClass('keep');
    expect(container.querySelector('.app-header')).toBeNull();
    // the world is the stage's size: the window, here 1440 x 900
    expect(world.resize).toHaveBeenLastCalledWith(1440, 900);
  });

  it('puts the five areas in their places: top bar, rooms, agents, the card and the drawer', async () => {
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
        .map((b) => b.textContent),
    ).toEqual(['Lead/PM', 'Designer', 'Frontend dev', 'Backend dev', 'Reviewer']);
    const card = container.querySelector('.hud-card') as HTMLElement;
    expect(within(card).getByRole('heading', { level: 2, name: 'Lead/PM' })).toBeInTheDocument();
    const drawer = screen.getByRole('complementary', { name: 'Activity and tasks' });
    expect(within(drawer).getByRole('heading', { name: 'Activity' })).toBeInTheDocument();
    expect(within(drawer).getByRole('heading', { name: 'Task board' })).toBeInTheDocument();
  });

  it("the agent list selects an agent, as the 2D hall's sprites do: the card shows it and the feed follows", async () => {
    const { container } = render(<App />);
    await settle();
    const agents = screen.getByRole('group', { name: 'Agents' });
    fireEvent.click(within(agents).getByRole('button', { name: 'Backend dev' }));
    expect(within(agents).getByRole('button', { name: 'Backend dev' })).toHaveAttribute(
      'aria-pressed',
      'true',
    );
    expect(within(agents).getByRole('button', { name: 'Lead/PM' })).toHaveAttribute('aria-pressed', 'false');
    const card = container.querySelector('.hud-card') as HTMLElement;
    expect(within(card).getByRole('heading', { level: 2, name: 'Backend dev' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Activity · Backend dev' })).toBeInTheDocument();
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
