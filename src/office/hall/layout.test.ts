import { describe, expect, it } from 'vitest';
import { spriteSize } from '../../pixel/sprite';
import { stationBounds } from '../stations';
import { HALL, ROOMS, hallStations, type Rect } from './layout';
import { HALOS, PLAQUES, PROPS } from './placements';

const stations = hallStations();

const inside = (inner: Rect, outer: Rect) =>
  inner.x >= outer.x &&
  inner.y >= outer.y &&
  inner.x + inner.w <= outer.x + outer.w &&
  inner.y + inner.h <= outer.y + outer.h;

const overlaps = (a: Rect, b: Rect) =>
  a.x < b.x + b.w && b.x < a.x + a.w && a.y < b.y + b.h && b.y < a.y + a.h;

const propRect = (p: (typeof PROPS)[number]): Rect => {
  const { width, height } = spriteSize(p.sprite);
  return { x: p.x, y: p.y, w: width, h: height };
};

const hall: Rect = { x: 0, y: 0, w: HALL.width, h: HALL.height };

describe('Forge Hall layout', () => {
  it('keeps every prop, light and sign inside the hall', () => {
    for (const p of PROPS) expect(inside(propRect(p), hall)).toBe(true);
    for (const h of HALOS) expect(inside({ x: h.x, y: h.y, w: 0, h: 0 }, hall)).toBe(true);
    for (const p of PLAQUES) expect(inside({ x: p.x, y: p.y, w: p.width, h: 0 }, hall)).toBe(true);
  });

  it('puts the Lead/PM in their room and everyone else in the dev room', () => {
    for (const s of stations) {
      const room = s.agent.id === 'lead' ? ROOMS.lead : ROOMS.dev;
      expect(inside(stationBounds(s), room)).toBe(true);
    }
  });

  it('does not let workstations overlap', () => {
    for (const a of stations) {
      for (const b of stations) {
        if (a !== b) expect(overlaps(stationBounds(a), stationBounds(b))).toBe(false);
      }
    }
  });

  it('keeps props out of the workstations', () => {
    for (const s of stations) {
      for (const p of PROPS) expect(overlaps(stationBounds(s), propRect(p))).toBe(false);
    }
  });
});
