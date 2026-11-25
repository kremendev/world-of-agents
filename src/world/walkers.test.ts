import { describe, expect, it } from 'vitest';
import { SPOTS, routeFromNode, type SpotId } from './map';
import {
  HURRY,
  MIN_DESK_MS,
  isHeld,
  landed,
  sendTo,
  showMeAim,
  standingAt,
  step,
  whereIs,
  type Walker,
} from './walkers';

const SPEED = 2.3;
const T0 = 10_000;
const pos = (spot: SpotId) => ({ x: SPOTS[spot].x, z: SPOTS[spot].z });
const near = (a: { x: number; z: number }, b: { x: number; z: number }, d = 1e-9) =>
  Math.hypot(a.x - b.x, a.z - b.z) <= d;
/** When a walk gets to its end. */
const endOf = (w: Walker) => {
  const p = w.walk?.path ?? [];
  const len = p.slice(1).reduce((s, q, i) => s + Math.hypot(q.x - p[i]!.x, q.z - p[i]!.z), 0);
  return (w.walk?.startedAt ?? 0) + (len / (w.walk?.speed ?? 1)) * 1000;
};

describe('the walkers', () => {
  it('walks out of a desk through its way-point, along the graph, and in to the spot', () => {
    const w = sendTo(standingAt('desk-frontend', 0), 'court-bench', T0, SPEED, false);
    const path = w.walk?.path ?? [];
    expect(near(path[0]!, pos('desk-frontend'))).toBe(true);
    const via = SPOTS['desk-frontend'].viaW as readonly [number, number];
    expect(path[1]).toEqual({ x: via[0], z: via[1], leave: SPOTS['desk-frontend'].anchor });
    expect(path.slice(2)).toEqual(routeFromNode(SPOTS['desk-frontend'].anchor, 'court-bench'));
    expect(near(path[path.length - 1]!, pos('court-bench'))).toBe(true);
    expect(w.walk?.speed).toBe(SPEED);
  });

  it('moves at its speed, faces the way it goes, and stands on the spot facing its way once there', () => {
    const w = sendTo(standingAt('court-well', 0), 'yard-1', T0, SPEED, false);
    const p = w.walk?.path ?? [];
    const first = Math.hypot(p[1]!.x - p[0]!.x, p[1]!.z - p[0]!.z);
    const half = whereIs(w, T0 + (first / 2 / SPEED) * 1000);
    expect(half.walking).toBe(true);
    expect(near(half, { x: (p[0]!.x + p[1]!.x) / 2, z: (p[0]!.z + p[1]!.z) / 2 }, 1e-6)).toBe(true);
    expect(half.heading).toBeCloseTo(Math.atan2(p[1]!.x - p[0]!.x, p[1]!.z - p[0]!.z), 9);
    const end = endOf(w);
    const there = step(w, end, SPEED, false);
    expect(there).toEqual(standingAt('yard-1', end));
    expect(whereIs(there, end + 1)).toEqual({
      ...pos('yard-1'),
      heading: SPOTS['yard-1'].ry,
      walking: false,
    });
  });

  it('keeps walking where it is going, and leaves one standing on its spot as it was', () => {
    const w = sendTo(standingAt('court-well', 0), 'yard-1', T0, SPEED, false);
    expect(sendTo(w, 'yard-1', T0 + 500, SPEED, false)).toBe(w);
    const still = standingAt('yard-1', 123);
    expect(sendTo(still, 'yard-1', T0, SPEED, false)).toBe(still);
  });

  it('turns mid-path from where it is, on through the node it was heading for, at the hurry', () => {
    const w = sendTo(standingAt('garden-pond', 0), 'tavern-1', T0, SPEED, false);
    const p = w.walk?.path ?? [];
    // well into the walk, 0.2 m short of a graph node it heads for
    const k = p.findIndex((q, i) => i > 2 && q.node);
    const legs = p.slice(1, k + 1).reduce((s, q, i) => s + Math.hypot(q.x - p[i]!.x, q.z - p[i]!.z), 0);
    const t = T0 + ((legs - 0.2) / SPEED) * 1000;
    const here = whereIs(w, t);
    const turned = sendTo(w, 'court-bench', t, SPEED, false);
    const q = turned.walk?.path ?? [];
    expect(near(q[0]!, here, 1e-9)).toBe(true); // no jump
    expect(q.slice(1)).toEqual(routeFromNode(p[k]!.node as string, 'court-bench'));
    expect(turned.walk?.speed).toBe(SPEED * HURRY);
    expect(turned.walk?.to).toBe('court-bench');
    expect(near(whereIs(turned, t), here, 1e-9)).toBe(true);
  });

  it('turns while still leaving a spot by its way-point: out through it, then on', () => {
    const w = sendTo(standingAt('desk-backend', 0), 'court-bench', T0, SPEED, false);
    const turned = sendTo(w, 'yard-1', T0 + 50, SPEED, false);
    const q = turned.walk?.path ?? [];
    const via = SPOTS['desk-backend'].viaW as readonly [number, number];
    expect(q[1]).toEqual({ x: via[0], z: via[1], leave: SPOTS['desk-backend'].anchor });
    expect(q.slice(2)).toEqual(routeFromNode(SPOTS['desk-backend'].anchor, 'yard-1'));
  });

  it("turns on a walk's last legs back to that spot's own node first", () => {
    const w = sendTo(standingAt('court-bench', 0), 'desk-frontend', T0, SPEED, false);
    // just short of the desk, past every graph node, on the way-point's leg
    const t = endOf(w) - 100;
    const turned = sendTo(w, 'yard-1', t, SPEED, false);
    expect((turned.walk?.path ?? []).slice(1)).toEqual(
      routeFromNode(SPOTS['desk-frontend'].anchor, 'yard-1'),
    );
  });

  it('holds a figure at its work spot for 3 s after it got there, then sends it on at its own pace', () => {
    const w = sendTo(standingAt('court-bench', 0), 'desk-backend', T0, SPEED, false, 'desk-backend');
    const arrived = endOf(w);
    // the work ends a second after it sat down, before anything stepped the walk: it got there at `arrived`
    const held = sendTo(w, 'court-bench', arrived + 1000, SPEED, false, 'desk-backend');
    expect(held).toEqual({
      ...standingAt('desk-backend', arrived),
      holdUntil: arrived + MIN_DESK_MS,
      next: 'court-bench',
    });
    expect(isHeld(held, arrived + MIN_DESK_MS - 1)).toBe(true);
    expect(step(held, arrived + MIN_DESK_MS - 1, SPEED, false)).toBe(held);
    const off = step(held, arrived + MIN_DESK_MS, SPEED, false);
    expect(isHeld(off, arrived + MIN_DESK_MS)).toBe(false);
    expect(off.walk?.to).toBe('court-bench');
    expect(off.walk?.speed).toBe(SPEED);
    expect(near(off.walk?.path[0] ?? { x: NaN, z: NaN }, pos('desk-backend'))).toBe(true);
  });

  it('ends a hold when the work comes back, and waits for the newest place while held', () => {
    const held: Walker = {
      ...standingAt('desk-backend', T0),
      holdUntil: T0 + MIN_DESK_MS,
      next: 'court-bench',
    };
    expect(sendTo(held, 'yard-2', T0 + 500, SPEED, false, 'desk-backend')).toEqual({
      ...held,
      next: 'yard-2',
    });
    expect(sendTo(held, 'desk-backend', T0 + 500, SPEED, false, 'desk-backend')).toEqual(
      standingAt('desk-backend', T0),
    );
  });

  it('holds nobody away from its own work spot, nor once 3 s have passed', () => {
    const away = sendTo(
      standingAt('desk-backend', T0),
      'court-bench',
      T0 + 500,
      SPEED,
      false,
      'desk-frontend',
    );
    expect(away.walk?.to).toBe('court-bench');
    const late = sendTo(
      standingAt('desk-backend', T0),
      'court-bench',
      T0 + MIN_DESK_MS,
      SPEED,
      false,
      'desk-backend',
    );
    expect(late.walk?.to).toBe('court-bench');
  });

  it('with reduced motion is where it goes at once, after a hold', () => {
    expect(sendTo(standingAt('court-bench', 0), 'desk-frontend', T0, SPEED, true)).toEqual(
      standingAt('desk-frontend', T0),
    );
    const walking = sendTo(standingAt('court-bench', 0), 'desk-frontend', T0, SPEED, false);
    expect(sendTo(walking, 'yard-1', T0 + 100, SPEED, true)).toEqual(standingAt('yard-1', T0 + 100));
    const held = sendTo(standingAt('desk-frontend', T0), 'yard-1', T0 + 100, SPEED, true, 'desk-frontend');
    expect(held.holdUntil).toBe(T0 + MIN_DESK_MS);
    expect(step(held, T0 + MIN_DESK_MS, SPEED, true)).toEqual(standingAt('yard-1', T0 + MIN_DESK_MS));
  });

  it("lands every figure where it is going for the demo's Next step: a walk at its end, a hold on its next place", () => {
    const walking = sendTo(standingAt('court-bench', 0), 'desk-frontend', T0, SPEED, false);
    expect(landed(walking, T0 + 100)).toEqual(standingAt('desk-frontend', T0 + 100));
    const held: Walker = {
      ...standingAt('desk-backend', T0),
      holdUntil: T0 + MIN_DESK_MS,
      next: 'court-bench',
    };
    expect(landed(held, T0 + 100)).toEqual(standingAt('court-bench', T0 + 100));
    const still = standingAt('yard-1', 5);
    expect(landed(still, T0)).toBe(still);
  });

  describe('where Show me aims (Dima, 25 Nov)', () => {
    const walking = sendTo(standingAt('court-bench', 0), 'desk-frontend', T0, SPEED, false);
    const mid = (T0 + endOf(walking)) / 2;

    it('a walking figure: where it is now, and the camera keeps it in view until it stands', () => {
      const aim = showMeAim(walking, mid, false);
      const here = whereIs(walking, mid);
      expect(here.walking).toBe(true);
      expect(aim).toEqual({ x: here.x, z: here.z, spot: 'desk-frontend', track: true });
      // not where it set out from, nor where it is going: the press's own moment
      expect(near(aim, pos('court-bench'), 0.5)).toBe(false);
      expect(near(aim, pos('desk-frontend'), 0.5)).toBe(false);
      // a walk that has got there tracks no more, at its end
      expect(showMeAim(walking, endOf(walking) + 1, false)).toEqual({
        ...pos('desk-frontend'),
        spot: 'desk-frontend',
        track: false,
      });
    });

    it('a standing figure, or one held at its work spot: where it stands, nothing tracked', () => {
      expect(showMeAim(standingAt('yard-1', 5), T0, false)).toEqual({
        ...pos('yard-1'),
        spot: 'yard-1',
        track: false,
      });
      const held: Walker = {
        ...standingAt('desk-backend', T0),
        holdUntil: T0 + MIN_DESK_MS,
        next: 'court-bench',
      };
      expect(showMeAim(held, T0 + 100, false)).toEqual({
        ...pos('desk-backend'),
        spot: 'desk-backend',
        track: false,
      });
    });

    it('with reduced motion: where its walk ends, a held figure its next place, and never tracked', () => {
      expect(showMeAim(walking, mid, true)).toEqual({
        ...pos('desk-frontend'),
        spot: 'desk-frontend',
        track: false,
      });
      const held: Walker = {
        ...standingAt('desk-backend', T0),
        holdUntil: T0 + MIN_DESK_MS,
        next: 'court-bench',
      };
      expect(showMeAim(held, T0 + 100, true)).toEqual({
        ...pos('court-bench'),
        spot: 'court-bench',
        track: false,
      });
      expect(showMeAim(standingAt('yard-1', 5), T0, true)).toEqual({
        ...pos('yard-1'),
        spot: 'yard-1',
        track: false,
      });
    });
  });
});
