import { describe, expect, it } from 'vitest';
import type { AgentId } from '../../events/schema';
import { spriteSize } from '../../pixel/sprite';
import { ROSTER } from '../roster';
import { stationBounds } from '../stations';
import { DOORWAY, ROOMS, hallStations, type Rect } from './layout';
import {
  CHECK_SPOT,
  DOORS,
  FETCH_SPOTS,
  REST_SPOTS,
  SEAT_APPROACH,
  VISIT_SPOTS,
  positionAt,
  route,
  seatSpot,
  type Point,
  type Spot,
} from './walk';

const stations = hallStations();
const sizeOf = (id: AgentId) => spriteSize(ROSTER.find((a) => a.id === id)!.sprite);

/** Floor you can stand on: the four rooms, the doorway to the dev room, and the two side-wall door gaps. */
const FLOOR: Rect[] = [
  ...Object.values(ROOMS),
  DOORWAY,
  { x: 200, y: 187, w: 8, h: 33 },
  { x: 464, y: 187, w: 8, h: 33 },
];
const onFloor = (p: Point) =>
  FLOOR.some((r) => p.x >= r.x && p.x <= r.x + r.w && p.y >= r.y && p.y <= r.y + r.h);

/** The sprite's box when its feet are at p. */
const body = (p: Point, id: AgentId): Rect => {
  const { width, height } = sizeOf(id);
  return { x: p.x - width / 2, y: p.y - height, w: width, h: height };
};
const overlaps = (a: Rect, b: Rect) =>
  a.x < b.x + b.w && b.x < a.x + a.w && a.y < b.y + b.h && b.y < a.y + a.h;

/** Every standing spot, with the agent who uses it. */
const standing: [string, Spot, AgentId][] = [
  ...Object.entries(REST_SPOTS).map(([id, s]) => [`rest.${id}`, s, id as AgentId] as [string, Spot, AgentId]),
  ...Object.entries(FETCH_SPOTS).map(
    ([id, s]) => [`fetch.${id}`, s!, id as AgentId] as [string, Spot, AgentId],
  ),
  ...Object.entries(VISIT_SPOTS).map(([id, s]) => [`visit.${id}`, s!, 'reviewer'] as [string, Spot, AgentId]),
  ['check', CHECK_SPOT, 'lead'],
];
const seats = stations.map((s) => [`seat.${s.agent.id}`, seatSpot(s), s.agent.id] as [string, Spot, AgentId]);
const everySpot = [...standing, ...seats];

describe('walking spots', () => {
  it('puts every spot, approach point and door on the floor', () => {
    for (const [name, spot] of everySpot) {
      expect(onFloor(spot), name).toBe(true);
      for (const p of spot.approach ?? []) expect(onFloor(p), `${name} approach`).toBe(true);
    }
    for (const door of Object.values(DOORS)) {
      expect(onFloor(door.inside)).toBe(true);
      expect(onFloor(door.outside)).toBe(true);
    }
  });

  it('keeps standing agents clear of every workstation', () => {
    for (const [name, spot, id] of standing) {
      for (const s of stations)
        expect(overlaps(body(spot, id), stationBounds(s)), `${name} vs ${s.agent.id}`).toBe(false);
    }
  });

  it('keeps the way to each chair clear of the other workstations', () => {
    for (const s of stations) {
      for (const p of SEAT_APPROACH[s.agent.id]) {
        for (const other of stations) {
          if (other === s) continue;
          expect(
            overlaps(body(p, s.agent.id), stationBounds(other)),
            `${s.agent.id} via ${other.agent.id}`,
          ).toBe(false);
        }
      }
    }
  });

  it('ends each chair approach level with the seat, so the agent arrives behind its desk', () => {
    for (const s of stations) {
      const seat = seatSpot(s);
      expect(seat.approach!.at(-1)!.y).toBe(seat.y);
    }
  });

  it('gives every agent its own rest spot', () => {
    const keys = Object.values(REST_SPOTS).map((p) => `${p.x},${p.y}`);
    expect(new Set(keys).size).toBe(keys.length);
  });
});

describe('route', () => {
  it('goes through both doors when changing rooms', () => {
    const path = route(REST_SPOTS.frontend, seatSpot(stations.find((s) => s.agent.id === 'frontend')!));
    const has = (p: Point) => path.some((q) => q.x === p.x && q.y === p.y);
    expect(has(DOORS.rest.inside) && has(DOORS.rest.outside)).toBe(true);
    expect(has(DOORS.dev.outside) && has(DOORS.dev.inside)).toBe(true);
  });

  it('stays in the room when it can', () => {
    const path = route(VISIT_SPOTS.frontend!, VISIT_SPOTS.backend!);
    expect(path.every((p) => p.y >= ROOMS.dev.y)).toBe(true);
  });

  it('only walks on the floor, between any two spots', () => {
    for (const [, from] of everySpot) {
      for (const [, to] of everySpot) {
        const path = route(from, to);
        for (let i = 1; i < path.length; i++) {
          const a = path[i - 1]!;
          const b = path[i]!;
          for (let t = 0; t <= 1; t += 0.05) {
            expect(onFloor({ x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t })).toBe(true);
          }
        }
      }
    }
  });
});

describe('positionAt', () => {
  const path: Point[] = [
    { x: 0, y: 0 },
    { x: 100, y: 0 },
    { x: 100, y: 50 },
  ];

  it('starts at the first point and ends at the last', () => {
    expect(positionAt(path, 0)).toEqual({ point: { x: 0, y: 0 }, arrived: false });
    expect(positionAt(path, 60_000)).toEqual({ point: { x: 100, y: 50 }, arrived: true });
  });

  it('moves at walking speed and turns corners', () => {
    expect(positionAt(path, 500, 100).point).toEqual({ x: 50, y: 0 });
    expect(positionAt(path, 1250, 100).point).toEqual({ x: 100, y: 25 });
  });

  it('only returns whole pixels', () => {
    const p = positionAt(
      [
        { x: 0, y: 0 },
        { x: 7, y: 3 },
      ],
      33,
      100,
    ).point;
    expect(Number.isInteger(p.x) && Number.isInteger(p.y)).toBe(true);
  });

  it('treats negative time as the start', () => {
    expect(positionAt(path, -5).point).toEqual({ x: 0, y: 0 });
  });
});
