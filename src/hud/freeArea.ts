import type { Insets } from '../world/camera';

/** What freeArea() reads of an element's box: getBoundingClientRect()'s edges, in CSS px. */
export type Edges = { left: number; top: number; right: number; bottom: number };

/** The HUD's panels by the side of the world they stand on; null for one that isn't there. */
export type Panels = {
  /** The rooms rail, the card while it is open. */
  left: readonly (Edges | null)[];
  /** The drawer while it is open. */
  right: readonly (Edges | null)[];
  /** The top bar, and the status line or the needs-you banner under it. */
  top: readonly (Edges | null)[];
  /** The agent list. */
  bottom: readonly (Edges | null)[];
};

/**
 * How far the HUD's panels reach into the world's `box` from each edge (Dima, 20 Nov): the free area is right of the
 * panels on the left, left of the ones on the right, under the ones at the top and above the ones at the bottom. A
 * panel with no size isn't shown (display: none, or not laid out) and counts for nothing; nothing counts past the box.
 */
export function freeArea(box: Edges, panels: Panels): Insets {
  const shown = (p: Edges | null): p is Edges => p !== null && p.right > p.left && p.bottom > p.top;
  const reach = (list: readonly (Edges | null)[], by: (p: Edges) => number) =>
    Math.max(0, ...list.filter(shown).map(by));
  const width = box.right - box.left;
  const height = box.bottom - box.top;
  return {
    left: Math.min(
      width,
      reach(panels.left, (p) => p.right - box.left),
    ),
    right: Math.min(
      width,
      reach(panels.right, (p) => box.right - p.left),
    ),
    top: Math.min(
      height,
      reach(panels.top, (p) => p.bottom - box.top),
    ),
    bottom: Math.min(
      height,
      reach(panels.bottom, (p) => box.bottom - p.top),
    ),
  };
}
