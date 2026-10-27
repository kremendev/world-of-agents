import type { AgentId } from '../../events/schema';
import { spriteSize } from '../../pixel/sprite';
import type { Station } from '../stations';

/**
 * Where agents stand and how they walk, taken from the v1 design.
 * Every point is in art pixels and marks an agent's FEET: the bottom-centre of its sprite.
 * Draw a walking agent with z = feet y, so it passes behind things lower on screen and in front of things above.
 */
export type Point = { readonly x: number; readonly y: number };
export type RoomId = 'lead' | 'hall' | 'rest' | 'dev';

/** A place to stand. `approach` is the way in, in walking order, ending next to the spot. */
export type Spot = Point & { readonly room: RoomId; readonly approach?: readonly Point[] };

/** Idle and done agents hang out here. The two orcs stand behind the tavern table. */
export const REST_SPOTS: Readonly<Record<AgentId, Spot>> = {
  lead: { x: 532, y: 202, room: 'rest' },
  designer: { x: 606, y: 202, room: 'rest' },
  frontend: { x: 588, y: 159, room: 'rest' },
  backend: { x: 550, y: 159, room: 'rest' },
  reviewer: { x: 523, y: 102, room: 'rest' },
};

/** In front of the Lead's desk, where each dev collects its task scroll. */
export const FETCH_SPOTS: Readonly<Partial<Record<AgentId, Spot>>> = {
  designer: { x: 70, y: 217, room: 'lead' },
  frontend: { x: 112, y: 220, room: 'lead' },
  backend: { x: 155, y: 217, room: 'lead' },
};

/** Beside a dev's desk, where a visitor (the Reviewer) stands to look at that dev's work. */
export const VISIT_SPOTS: Readonly<Partial<Record<AgentId, Spot>>> = {
  designer: { x: 64, y: 372, room: 'dev', approach: [{ x: 64, y: 313 }] },
  frontend: { x: 186, y: 369, room: 'dev', approach: [{ x: 186, y: 313 }] },
  backend: { x: 486, y: 369, room: 'dev', approach: [{ x: 486, y: 313 }] },
};

/** Where the Lead/PM stands when it walks into the dev room to check progress: on the red carpet. */
export const CHECK_SPOT: Spot = { x: 336, y: 420, room: 'dev' };

/**
 * The way to each chair: along the wall, down the side of the desk, then behind it to the seat.
 * The last point is level with the seat, so the agent is already behind the desk when it sits.
 */
export const SEAT_APPROACH: Readonly<Record<AgentId, readonly Point[]>> = {
  lead: [
    { x: 55, y: 175 },
    { x: 55, y: 142 },
  ],
  designer: [
    { x: 65, y: 313 },
    { x: 65, y: 364 },
  ],
  frontend: [
    { x: 308, y: 313 },
    { x: 308, y: 367 },
  ],
  backend: [
    { x: 364, y: 313 },
    { x: 364, y: 367 },
  ],
  reviewer: [
    { x: 645, y: 313 },
    { x: 645, y: 371 },
  ],
};

/** Each room's doorway into the great hall: a point just inside the room and one just outside it. */
export const DOORS: Readonly<Record<Exclude<RoomId, 'hall'>, { inside: Point; outside: Point }>> = {
  lead: { inside: { x: 189, y: 210 }, outside: { x: 220, y: 210 } },
  rest: { inside: { x: 483, y: 210 }, outside: { x: 452, y: 210 } },
  dev: { inside: { x: 336, y: 313 }, outside: { x: 336, y: 237 } },
};

/** The seat at a station: the feet of the seated agent, with the way in. The Lead sits in its room, the rest in the dev room. */
export function seatSpot(station: Station): Spot {
  const seated = station.pieces[1];
  if (!seated) throw new Error(`Station for ${station.agent.id} has no seated agent`);
  const { width, height } = spriteSize(seated.sprite);
  return {
    x: seated.x + Math.floor(width / 2),
    y: seated.y + height,
    room: station.agent.id === 'lead' ? 'lead' : 'dev',
    approach: SEAT_APPROACH[station.agent.id],
  };
}

const same = (a: Point, b: Point) => a.x === b.x && a.y === b.y;

/**
 * The path from one spot to another: back out the way you came in, through the doors if the rooms differ,
 * then in by the target's approach. Points only, no pathfinding grid: the hall is simple enough.
 */
export function route(from: Spot, to: Spot): Point[] {
  const path: Point[] = [from, ...[...(from.approach ?? [])].reverse()];
  if (from.room !== to.room) {
    if (from.room !== 'hall') path.push(DOORS[from.room].inside, DOORS[from.room].outside);
    if (to.room !== 'hall') path.push(DOORS[to.room].outside, DOORS[to.room].inside);
  }
  path.push(...(to.approach ?? []), to);
  return path.filter((p, i) => i === 0 || !same(p, path[i - 1]!));
}

/** Art pixels per second. The design walks at about 200 screen px per second at 2x. */
export const WALK_SPEED = 100;

export type Progress = { point: Point; arrived: boolean };

/**
 * Where an agent is after walking `elapsedMs` along `path`. Positions are whole pixels so the sprite stays crisp.
 * Pure: the animation loop owns the clock, tests can pass any time.
 */
export function positionAt(path: readonly Point[], elapsedMs: number, speed = WALK_SPEED): Progress {
  const first = path[0];
  if (!first) throw new Error('Empty path');
  let left = Math.max(0, elapsedMs) * (speed / 1000);
  for (let i = 1; i < path.length; i++) {
    const a = path[i - 1]!;
    const b = path[i]!;
    const length = Math.hypot(b.x - a.x, b.y - a.y);
    if (left < length) {
      const t = left / length;
      return {
        point: { x: Math.round(a.x + (b.x - a.x) * t), y: Math.round(a.y + (b.y - a.y) * t) },
        arrived: false,
      };
    }
    left -= length;
  }
  return { point: path[path.length - 1]!, arrived: true };
}
