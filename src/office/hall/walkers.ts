import type { AgentId } from '../../events/schema';
import { REST_SPOTS, positionAt, route, type Point, type Spot } from './walk';

/** One agent on the move. Times are performance.now() milliseconds. */
export type Walker = {
  /** Where the agent stands, or where its current walk started. */
  readonly spot: Spot;
  readonly walk: { readonly path: readonly Point[]; readonly to: Spot; readonly startedAt: number } | null;
  /** The newest destination that came in during the walk. The agent heads there once the walk ends. */
  readonly next: Spot | null;
};

export const standingAt = (spot: Spot): Walker => ({ spot, walk: null, next: null });

/** Everyone at their rest spot: how a run starts, and where Restart puts them. */
export const restingWalkers = (): Record<AgentId, Walker> => ({
  lead: standingAt(REST_SPOTS.lead),
  designer: standingAt(REST_SPOTS.designer),
  frontend: standingAt(REST_SPOTS.frontend),
  backend: standingAt(REST_SPOTS.backend),
  reviewer: standingAt(REST_SPOTS.reviewer),
});

const same = (a: Point, b: Point) => a.x === b.x && a.y === b.y;

function walkTo(from: Spot, to: Spot, now: number): Walker {
  if (same(from, to)) return standingAt(from);
  return { spot: from, walk: { path: route(from, to), to, startedAt: now }, next: null };
}

/**
 * Sends a walker to `to`. Standing, it sets off now. Walking, it never reroutes: it finishes the current
 * walk, then heads for the newest destination. With reduced motion it is simply there.
 */
export function sendTo(w: Walker, to: Spot, now: number, reducedMotion: boolean): Walker {
  if (reducedMotion) return standingAt(to);
  if (w.walk) return { ...w, next: same(w.walk.to, to) ? null : to };
  return walkTo(w.spot, to, now);
}

/** Ends a walk that has arrived and starts the queued one. Call before walkerAt() each frame. */
export function step(w: Walker, now: number): Walker {
  if (!w.walk || !positionAt(w.walk.path, now - w.walk.startedAt).arrived) return w;
  return w.next ? walkTo(w.walk.to, w.next, now) : standingAt(w.walk.to);
}

/** Where the walker's feet are and whether it is on the move. */
export function walkerAt(w: Walker, now: number): { point: Point; walking: boolean } {
  if (!w.walk) return { point: w.spot, walking: false };
  const { point, arrived } = positionAt(w.walk.path, now - w.walk.startedAt);
  return { point, walking: !arrived };
}
