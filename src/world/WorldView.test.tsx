import { act, render } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { INITIAL_OFFICE, officeReducer } from '../state/office';
import { CONTEXT_GRACE_MS } from './support';
import { WorldView } from './WorldView';

const scene = vi.hoisted(() => ({ create: vi.fn(), canDraw: vi.fn(() => false) }));
vi.mock('./scene/world', () => ({ createWorld: scene.create }));
vi.mock('./support', async (importOriginal) => ({
  ...(await importOriginal<typeof import('./support')>()),
  canDrawWorld: scene.canDraw,
}));

type Fake = {
  start: () => void;
  stop: () => void;
  resize: (w: number, h: number) => void;
  dispose: () => void;
  update: (office: unknown, live: boolean) => void;
  restart: () => void;
};
const fakeWorld = (): Fake => ({
  start: vi.fn(),
  stop: vi.fn(),
  resize: vi.fn(),
  dispose: vi.fn(),
  update: vi.fn(),
  restart: vi.fn(),
});

const props = (room: { width: number; height: number } | null = { width: 800, height: 560 }) => ({
  office: INITIAL_OFFICE,
  run: 0,
  selected: 'lead' as const,
  onSelect: () => {},
  room,
});
const hall2d = (container: HTMLElement) => container.querySelector('.hall');
const world3d = (container: HTMLElement) => container.querySelector<HTMLCanvasElement>('canvas.world');
const settle = () => act(async () => {});

let hidden = false;
beforeEach(() => {
  scene.create.mockReset();
  scene.canDraw.mockReset().mockReturnValue(false);
  hidden = false;
  vi.spyOn(document, 'hidden', 'get').mockImplementation(() => hidden);
});
afterEach(() => {
  vi.useRealTimers();
});

describe('WorldView', () => {
  it('shows the 2D hall and never loads the scene where there is no WebGL 2', async () => {
    const { container } = render(<WorldView {...props()} />);
    await settle();
    expect(hall2d(container)).not.toBeNull();
    expect(world3d(container)).toBeNull();
    expect(scene.create).not.toHaveBeenCalled();
  });

  it('keeps the 2D hall when the scene fails to load, and says why in the console', async () => {
    scene.canDraw.mockReturnValue(true);
    scene.create.mockRejectedValue(new Error('a model did not load'));
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const { container } = render(<WorldView {...props()} />);
    await settle();
    expect(scene.create).toHaveBeenCalledOnce();
    expect(hall2d(container)).not.toBeNull();
    expect(world3d(container)).toBeNull();
    expect(warn).toHaveBeenCalled();
    warn.mockRestore();
  });

  it('shows the 2D hall while the world loads, then the world: started, sized, paused when hidden, disposed', async () => {
    scene.canDraw.mockReturnValue(true);
    const world = fakeWorld();
    let resolve: (w: Fake) => void = () => {};
    scene.create.mockReturnValue(new Promise<Fake>((r) => (resolve = r)));
    const { container, rerender, unmount } = render(<WorldView {...props()} />);
    await settle();
    expect(hall2d(container)).not.toBeNull();
    expect(world3d(container)?.hidden).toBe(true);
    expect(scene.create.mock.calls[0]?.[0]).toMatchObject({ width: 800, height: 560 });

    await act(async () => resolve(world));
    expect(hall2d(container)).toBeNull();
    expect(world3d(container)?.hidden).toBe(false);
    expect(world3d(container)?.getAttribute('role')).toBe('img');
    expect(world.start).toHaveBeenCalledOnce();

    hidden = true;
    act(() => document.dispatchEvent(new Event('visibilitychange')));
    expect(world.stop).toHaveBeenCalledOnce();
    hidden = false;
    act(() => document.dispatchEvent(new Event('visibilitychange')));
    expect(world.start).toHaveBeenCalledTimes(2);

    rerender(<WorldView {...props({ width: 640, height: 480 })} />);
    expect(world.resize).toHaveBeenLastCalledWith(640, 480);

    unmount();
    expect(world.dispose).toHaveBeenCalledOnce();
  });

  it('leaves a world that becomes ready in a hidden tab stopped until the tab shows', async () => {
    scene.canDraw.mockReturnValue(true);
    const world = fakeWorld();
    scene.create.mockResolvedValue(world);
    hidden = true;
    render(<WorldView {...props()} />);
    await settle();
    expect(world.start).not.toHaveBeenCalled();
    hidden = false;
    act(() => document.dispatchEvent(new Event('visibilitychange')));
    expect(world.start).toHaveBeenCalledOnce();
  });

  it('waits for the stage to have a size before it builds the world', async () => {
    scene.canDraw.mockReturnValue(true);
    scene.create.mockResolvedValue(fakeWorld());
    const { rerender } = render(<WorldView {...props(null)} />);
    await settle();
    expect(scene.create).not.toHaveBeenCalled();
    rerender(<WorldView {...props()} />);
    await settle();
    expect(scene.create).toHaveBeenCalledOnce();
  });

  it('hands over to the 2D hall when a lost context does not come back, and stays when it does', async () => {
    scene.canDraw.mockReturnValue(true);
    const world = fakeWorld();
    scene.create.mockResolvedValue(world);
    vi.useFakeTimers();
    const { container } = render(<WorldView {...props()} />);
    await settle();
    const canvas = world3d(container) as HTMLCanvasElement;

    act(() => canvas.dispatchEvent(new Event('webglcontextlost')));
    act(() => vi.advanceTimersByTime(CONTEXT_GRACE_MS - 100));
    act(() => canvas.dispatchEvent(new Event('webglcontextrestored')));
    act(() => vi.advanceTimersByTime(1000));
    expect(world3d(container)).not.toBeNull();

    act(() => canvas.dispatchEvent(new Event('webglcontextlost')));
    act(() => vi.advanceTimersByTime(CONTEXT_GRACE_MS + 1));
    expect(world3d(container)).toBeNull();
    expect(hall2d(container)).not.toBeNull();
    expect(world.dispose).toHaveBeenCalledOnce();
  });

  it('gives the world the office as it changes, and on a new run puts everyone back first (4b)', async () => {
    scene.canDraw.mockReturnValue(true);
    const world = fakeWorld();
    scene.create.mockResolvedValue(world);
    const { rerender } = render(<WorldView {...props()} />);
    await settle();
    // ready: the office it was given, before anything changed
    expect(world.update).toHaveBeenCalledExactlyOnceWith(INITIAL_OFFICE, false);
    const busy = officeReducer(INITIAL_OFFICE, { type: 'state', agent: 'backend', state: 'writing', at: 1 });
    rerender(<WorldView {...props()} office={busy} live />);
    expect(world.update).toHaveBeenLastCalledWith(busy, true);
    expect(world.restart).not.toHaveBeenCalled();
    // Restart: back to the start spots, then the office of the new run
    rerender(<WorldView {...props()} office={INITIAL_OFFICE} run={1} />);
    expect(world.restart).toHaveBeenCalledOnce();
    const order = (fn: unknown) =>
      (fn as { mock: { invocationCallOrder: number[] } }).mock.invocationCallOrder;
    expect(order(world.restart)[0]).toBeLessThan(order(world.update).at(-1) as number);
    expect(world.update).toHaveBeenLastCalledWith(INITIAL_OFFICE, false);
  });
});
