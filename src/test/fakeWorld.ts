import { vi } from 'vitest';

/**
 * What the page's tests need of the Forge Keep (4d): jsdom has no WebGL, so a test that wants the HUD mocks
 * `world/scene/world` to resolve with this, and `world/support` to say it can draw.
 */
export const fakeWorld = () => ({
  start: vi.fn(),
  stop: vi.fn(),
  resize: vi.fn(),
  dispose: vi.fn(),
  update: vi.fn(),
  restart: vi.fn(),
  land: vi.fn(),
});

export type FakeWorld = ReturnType<typeof fakeWorld>;

/**
 * jsdom lays nothing out: every element 0 x 0 and no ResizeObserver, so the stage would never get the size the world
 * waits for. This gives every element `width` x `height` and an observer that measures once, when it starts watching.
 * Returns the undo.
 */
export function stubLayout(width = 1440, height = 900) {
  const w = vi.spyOn(HTMLElement.prototype, 'clientWidth', 'get').mockReturnValue(width);
  const h = vi.spyOn(HTMLElement.prototype, 'clientHeight', 'get').mockReturnValue(height);
  const had = 'ResizeObserver' in window;
  const was = window.ResizeObserver;
  window.ResizeObserver = class {
    constructor(private readonly cb: ResizeObserverCallback) {}
    observe() {
      this.cb([], this as unknown as ResizeObserver);
    }
    unobserve() {}
    disconnect() {}
  } as unknown as typeof ResizeObserver;
  return () => {
    w.mockRestore();
    h.mockRestore();
    if (had) window.ResizeObserver = was;
    else delete (window as { ResizeObserver?: unknown }).ResizeObserver;
  };
}
