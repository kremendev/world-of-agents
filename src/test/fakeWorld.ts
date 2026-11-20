import { vi } from 'vitest';
import type { AgentId } from '../events/schema';
import type { FigureRooms, Heads } from '../world/scene/world';

/**
 * What the page's tests need of the Forge Keep (4d): jsdom has no WebGL, so a test that wants the HUD mocks
 * `world/scene/world` to resolve with this, and `world/support` to say it can draw.
 */
export const fakeWorld = () => {
  // the page's listeners, so a test can move the camera "by hand" and click a figure
  let handMoved: (() => void) | null = null;
  let picked: ((id: AgentId) => void) | null = null;
  let framed: ((heads: Heads) => void) | null = null;
  let roomsTold: ((rooms: FigureRooms) => void) | null = null;
  return {
    onRooms: vi.fn((fn: (rooms: FigureRooms) => void) => {
      roomsTold = fn;
      return () => {
        if (roomsTold === fn) roomsTold = null;
      };
    }),
    /** The test's own: the world says where each figure is or is going. */
    rooms: (rooms: FigureRooms) => roomsTold?.(rooms),
    onFrame: vi.fn((fn: (heads: Heads) => void) => {
      framed = fn;
      return () => {
        if (framed === fn) framed = null;
      };
    }),
    /** The test's own: one frame, every head where it is given (the rest in the middle of the view). */
    frame: (heads: Partial<Heads> = {}) =>
      framed?.({
        lead: { x: 0, y: 0, z: 0.5, walking: false },
        designer: { x: 0, y: 0, z: 0.5, walking: false },
        frontend: { x: 0, y: 0, z: 0.5, walking: false },
        backend: { x: 0, y: 0, z: 0.5, walking: false },
        reviewer: { x: 0, y: 0, z: 0.5, walking: false },
        ...heads,
      }),
    follow: vi.fn(),
    onPick: vi.fn((fn: (id: AgentId) => void) => {
      picked = fn;
      return () => {
        if (picked === fn) picked = null;
      };
    }),
    /** The test's own: a click on a figure in the world. */
    clickFigure: (id: AgentId) => picked?.(id),
    start: vi.fn(),
    stop: vi.fn(),
    resize: vi.fn(),
    dispose: vi.fn(),
    update: vi.fn(),
    restart: vi.fn(),
    land: vi.fn(),
    flyToRoom: vi.fn(),
    flyToAgent: vi.fn(),
    setOpenHouses: vi.fn(),
    setFreeArea: vi.fn(),
    onHandMove: vi.fn((fn: () => void) => {
      handMoved = fn;
      return () => {
        if (handMoved === fn) handMoved = null;
      };
    }),
    /** The test's own: a drag, the wheel or an arrow key on the canvas. */
    moveByHand: () => handMoved?.(),
  };
};

export type FakeWorld = ReturnType<typeof fakeWorld>;

/**
 * jsdom lays nothing out: every element 0 x 0 and no ResizeObserver, so the stage would never get the size the world
 * waits for. This gives every element `width` x `height`, an observer that measures once, when it starts watching, and
 * width media queries answered for a window that wide. Returns the undo.
 */
export function stubLayout(width = 1440, height = 900) {
  const w = vi.spyOn(HTMLElement.prototype, 'clientWidth', 'get').mockReturnValue(width);
  const h = vi.spyOn(HTMLElement.prototype, 'clientHeight', 'get').mockReturnValue(height);
  // a window this wide answers (min-width: Nrem) and (max-width: Nrem) at 16 px a rem; every other query: no
  const media = vi.spyOn(window, 'matchMedia').mockImplementation((query: string) => {
    const m = /^\((min|max)-width:\s*([\d.]+)rem\)$/.exec(query);
    const px = m ? Number(m[2]) * 16 : NaN;
    const matches = m ? (m[1] === 'min' ? width >= px : width <= px) : false;
    return {
      matches,
      media: query,
      onchange: null,
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => false,
    } as MediaQueryList;
  });
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
    media.mockRestore();
    if (had) window.ResizeObserver = was;
    else delete (window as { ResizeObserver?: unknown }).ResizeObserver;
  };
}
