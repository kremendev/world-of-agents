/**
 * The keep's walkers (v4.0.0, 4b): where each figure is between spots, from the time alone, so Vitest holds it. Its
 * shape is the 2D hall's walkers.ts, with one change Dima approved in the plan ("At once means from where it stands"):
 * a new destination mid-walk turns the figure from where it is, as the town's routeTo() does (m7-run.js, forge-keep
 * 89ae8b1), instead of finishing the walk first, and that walk goes at the 2.5x hurry. The desk hold is the 2D hall's:
 * work that ends less than 3 s after a figure got to its work spot keeps it there until then (Dima, 17 Nov: seated, its
 * screen dark and its work stopped at once, which the world shows). Reduced motion: no walk, the figure is where it goes.
 * Positions are metres in the world, speeds metres a second, times performance.now() milliseconds.
 */
import { SPOTS, routeFromNode, type SpotId } from './map';

/** A walk redirected mid-path goes this many times as fast. */
export const HURRY = 2.5;
/** Work that ends soon after a figure got to its work spot still shows: it stays until this long after it got there. */
export const MIN_DESK_MS = 3000;

/** A point on a walk: a graph node it passes, the way out of the spot it left, or just a point (a way-point, the spot). */
export type Pt = { readonly x: number; readonly z: number; readonly node?: string; readonly leave?: string };

export type Walk = {
  /** From where the walk started, through every point, to the spot. */
  readonly path: readonly Pt[];
  readonly to: SpotId;
  readonly startedAt: number;
  /** Metres a second. */
  readonly speed: number;
};

export type Walker = {
  /** Where the figure stands, or the spot its walk set out from. */
  readonly spot: SpotId;
  /** When it got to `spot`, for a walker standing there. */
  readonly since: number;
  readonly walk: Walk | null;
  /** Held at its work spot until then, `next` waiting: its work ended less than MIN_DESK_MS after it got there. */
  readonly holdUntil: number | null;
  readonly next: SpotId | null;
};

export const standingAt = (spot: SpotId, since = Number.NEGATIVE_INFINITY): Walker => ({
  spot,
  since,
  walk: null,
  holdUntil: null,
  next: null,
});

const at = (spot: SpotId): Pt => ({ x: SPOTS[spot].x, z: SPOTS[spot].z });

/** From standing at a spot: out through its way-point, to its graph node, along the graph, in through the other's. */
function pathFrom(from: SpotId, to: SpotId): Pt[] {
  const s = SPOTS[from];
  const out: Pt[] = s.viaW ? [{ x: s.viaW[0], z: s.viaW[1], leave: s.anchor }] : [];
  return [at(from), ...out, ...routeFromNode(s.anchor, to)];
}

const lengthOf = (path: readonly Pt[]) =>
  path.slice(1).reduce((sum, p, i) => sum + Math.hypot(p.x - path[i]!.x, p.z - path[i]!.z), 0);

/** Where a walk is after `ms`: the point, the index of the next point it heads for, and whether it has arrived. */
function along(
  walk: Walk,
  ms: number,
): { x: number; z: number; next: number; arrived: boolean; heading: number } {
  let left = (Math.max(0, ms) / 1000) * walk.speed;
  const p = walk.path;
  for (let i = 1; i < p.length; i++) {
    const a = p[i - 1]!;
    const b = p[i]!;
    const len = Math.hypot(b.x - a.x, b.z - a.z);
    // a nanometre short of a point is at it, so a walk timed to its end has got there
    if (left < len - 1e-9) {
      const k = left / len;
      return {
        x: a.x + (b.x - a.x) * k,
        z: a.z + (b.z - a.z) * k,
        next: i,
        arrived: false,
        heading: Math.atan2(b.x - a.x, b.z - a.z),
      };
    }
    left -= len;
  }
  const end = p[p.length - 1]!;
  return { x: end.x, z: end.z, next: p.length, arrived: true, heading: SPOTS[walk.to].ry };
}

/**
 * The town's turn mid-path: from where the figure is, on to the next graph node it was heading for (or out through the
 * way-point it was leaving by), then along the graph; on the last legs of a walk, back to that spot's own node first.
 */
function turned(walk: Walk, to: SpotId, now: number): Pt[] {
  const here = along(walk, now - walk.startedAt);
  const start: Pt = { x: here.x, z: here.z };
  const ahead = walk.path[here.next];
  if (ahead?.node) return [start, ...routeFromNode(ahead.node, to)];
  if (ahead?.leave) return [start, ahead, ...routeFromNode(ahead.leave, to)];
  return [start, ...routeFromNode(SPOTS[walk.to].anchor, to)];
}

/** A walk that has got there, as the figure standing at its spot since it got there. */
function settled(w: Walker, now: number): Walker {
  if (!w.walk || !along(w.walk, now - w.walk.startedAt).arrived) return w;
  return standingAt(w.walk.to, w.walk.startedAt + (lengthOf(w.walk.path) / w.walk.speed) * 1000);
}

const walkFrom = (from: SpotId, to: SpotId, now: number, speed: number): Walker => ({
  ...standingAt(from, now),
  walk: { path: pathFrom(from, to), to, startedAt: now, speed },
});

/**
 * Sends a walker to `to`. Standing, it sets off now; walking somewhere else, it turns from where it is, hurrying. A
 * figure that got to `work`, its own work spot, less than MIN_DESK_MS ago stays there until then, whatever comes in,
 * and work back at that spot ends the hold. With reduced motion it simply is where it goes, once a hold is over.
 */
export function sendTo(
  was: Walker,
  to: SpotId,
  now: number,
  speed: number,
  reducedMotion: boolean,
  work?: SpotId,
): Walker {
  // a walk that has got there stands there, its hold and all, before anything new comes in
  const w = settled(was, now);
  if (!w.walk) {
    if (w.holdUntil !== null) return to === w.spot ? standingAt(w.spot, w.since) : { ...w, next: to };
    if (work && w.spot === work && to !== work && now - w.since < MIN_DESK_MS) {
      return { ...w, next: to, holdUntil: w.since + MIN_DESK_MS };
    }
    // every office update sends each figure its place: one already standing there keeps its own `since`
    if (w.spot === to) return w;
    if (reducedMotion) return standingAt(to, now);
    return walkFrom(w.spot, to, now, speed);
  }
  if (w.walk.to === to) return w;
  if (reducedMotion) return standingAt(to, now);
  return { ...w, walk: { path: turned(w.walk, to, now), to, startedAt: now, speed: speed * HURRY } };
}

/** Ends a walk that has arrived, or a hold that is over, and starts the waiting walk. Call before whereIs() each frame. */
export function step(w: Walker, now: number, speed: number, reducedMotion: boolean): Walker {
  if (!w.walk) {
    if (w.holdUntil === null || now < w.holdUntil) return w;
    if (!w.next) return { ...w, holdUntil: null };
    return reducedMotion ? standingAt(w.next, now) : walkFrom(w.spot, w.next, now, speed);
  }
  return settled(w, now);
}

/** Held at its work spot now: its work has ended, but it hasn't left. */
export const isHeld = (w: Walker, now: number) => w.holdUntil !== null && now < w.holdUntil;

/** Where the figure's feet are, which way it faces (walking: where it goes; standing: its spot's way), and if it walks. */
export function whereIs(w: Walker, now: number): { x: number; z: number; heading: number; walking: boolean } {
  if (!w.walk) return { ...at(w.spot), heading: SPOTS[w.spot].ry, walking: false };
  const { x, z, heading, arrived } = along(w.walk, now - w.walk.startedAt);
  return { x, z, heading, walking: !arrived };
}
