import type { AgentId } from '../../events/schema';
import { REST_SPOTS, WALK_SPEED, positionAt, route, type Point, type Spot } from './walk';

/** Work that starts or ends mid-walk sends the agent on 2.5 times as fast: the rest of that walk, and the next one. */
export const HURRY_SPEED = WALK_SPEED * 2.5;
/** Work that ends soon after an agent sits down at its desk still shows: it stays until this long after it sat. */
export const MIN_DESK_MS = 3000;

/** One agent on the move. Times are performance.now() milliseconds. */
export type Walker = {
  /** Where the agent stands, or where its current walk started. */
  readonly spot: Spot;
  /** When it got to `spot`, for a walker standing there. */
  readonly since: number;
  readonly walk: {
    readonly path: readonly Point[];
    readonly to: Spot;
    readonly startedAt: number;
    /** Art pixels per second. */
    readonly speed: number;
  } | null;
  /** The newest destination that came in during the walk, or during a hold. The agent heads there next. */
  readonly next: Spot | null;
  /** The next walk goes at HURRY_SPEED: work started or ended during this one. */
  readonly hurry: boolean;
  /** Held at its desk until then, `next` waiting: its work ended less than MIN_DESK_MS after it sat down. */
  readonly holdUntil: number | null;
};

export const standingAt = (spot: Spot, since = Number.NEGATIVE_INFINITY): Walker => ({
  spot,
  since,
  walk: null,
  next: null,
  hurry: false,
  holdUntil: null,
});

/** Everyone at their rest spot: how a run starts, and where Restart puts them. */
export const restingWalkers = (): Record<AgentId, Walker> => ({
  lead: standingAt(REST_SPOTS.lead),
  designer: standingAt(REST_SPOTS.designer),
  frontend: standingAt(REST_SPOTS.frontend),
  backend: standingAt(REST_SPOTS.backend),
  reviewer: standingAt(REST_SPOTS.reviewer),
});

const same = (a: Point, b: Point) => a.x === b.x && a.y === b.y;

const lengthOf = (path: readonly Point[]) =>
  path.slice(1).reduce((sum, p, i) => sum + Math.hypot(p.x - path[i]!.x, p.y - path[i]!.y), 0);

function walkTo(from: Spot, to: Spot, now: number, speed: number): Walker {
  if (same(from, to)) return standingAt(from, now);
  return { ...standingAt(from, now), walk: { path: route(from, to), to, startedAt: now, speed } };
}

/** The same walk, from where it is now, at HURRY_SPEED: the start moves so the distance covered stays as it is. */
function hurried(walk: NonNullable<Walker['walk']>, now: number): NonNullable<Walker['walk']> {
  if (walk.speed >= HURRY_SPEED) return walk;
  const covered = Math.max(0, now - walk.startedAt) * walk.speed;
  return { ...walk, speed: HURRY_SPEED, startedAt: now - covered / HURRY_SPEED };
}

/**
 * Sends a walker to `to`. Standing, it sets off now. Walking, it never reroutes: it finishes the current walk, then
 * heads for the newest destination. A new destination mid-walk means its work started or ended, so it hurries: the
 * rest of this walk and the next one. An agent that sat down at `seat`, its own desk, less than MIN_DESK_MS ago stays
 * there until then, whatever comes in. With reduced motion it simply is where it goes, once a hold is over.
 */
export function sendTo(w: Walker, to: Spot, now: number, reducedMotion: boolean, seat?: Spot): Walker {
  if (!w.walk) {
    if (w.holdUntil !== null) {
      // Work back at the desk ends the hold; anything else waits for it.
      return same(to, w.spot) ? { ...w, next: null, holdUntil: null } : { ...w, next: to };
    }
    if (seat && same(w.spot, seat) && !same(to, seat) && now - w.since < MIN_DESK_MS) {
      return { ...w, next: to, holdUntil: w.since + MIN_DESK_MS };
    }
  }
  // Every office update sends each agent its destination: one already standing there keeps its own `since`.
  if (!w.walk && same(w.spot, to)) return w;
  if (reducedMotion) return standingAt(to, now);
  if (w.walk) {
    if (same(w.walk.to, to)) return { ...w, next: null };
    if (w.next && same(w.next, to)) return w;
    return { ...w, walk: hurried(w.walk, now), next: to, hurry: true };
  }
  return walkTo(w.spot, to, now, WALK_SPEED);
}

/** Ends a walk that has arrived, or a hold that is over, and starts the queued walk. Call before walkerAt() each frame. */
export function step(w: Walker, now: number, reducedMotion = false): Walker {
  if (!w.walk) {
    if (w.holdUntil === null || now < w.holdUntil) return w;
    if (!w.next) return { ...w, holdUntil: null };
    return reducedMotion ? standingAt(w.next, now) : walkTo(w.spot, w.next, now, WALK_SPEED);
  }
  if (!positionAt(w.walk.path, now - w.walk.startedAt, w.walk.speed).arrived) return w;
  if (w.next) return walkTo(w.walk.to, w.next, now, w.hurry ? HURRY_SPEED : WALK_SPEED);
  return standingAt(w.walk.to, w.walk.startedAt + (lengthOf(w.walk.path) / w.walk.speed) * 1000);
}

/** Held at its desk now: its work has ended, but it still shows. */
export const isHeld = (w: Walker, now: number) => w.holdUntil !== null && now < w.holdUntil;

/** Where the walker's feet are and whether it is on the move. */
export function walkerAt(w: Walker, now: number): { point: Point; walking: boolean } {
  if (!w.walk) return { point: w.spot, walking: false };
  const { point, arrived } = positionAt(w.walk.path, now - w.walk.startedAt, w.walk.speed);
  return { point, walking: !arrived };
}
