import { describe, expect, it } from 'vitest';
import { AGENT_IDS } from '../../events/schema';
import { SEATS } from './destination';
import { CHECK_SPOT, REST_SPOTS, VISIT_SPOTS, WALK_SPEED, positionAt, route, type Spot } from './walk';
import {
  HURRY_SPEED,
  MIN_DESK_MS,
  isHeld,
  restingWalkers,
  sendTo,
  standingAt,
  step,
  walkerAt,
} from './walkers';

/** How long the walk from one spot to another takes at walking speed, in ms, exactly. */
const exactMs = (from: Spot, to: Spot) => {
  const path = route(from, to);
  let length = 0;
  for (let i = 1; i < path.length; i++) {
    length += Math.hypot(path[i]!.x - path[i - 1]!.x, path[i]!.y - path[i - 1]!.y);
  }
  return (length / WALK_SPEED) * 1000;
};

/** The same, rounded up to a whole ms. */
const walkMs = (from: Spot, to: Spot) => {
  const path = route(from, to);
  let length = 0;
  for (let i = 1; i < path.length; i++) {
    length += Math.hypot(path[i]!.x - path[i - 1]!.x, path[i]!.y - path[i - 1]!.y);
  }
  return Math.ceil((length / WALK_SPEED) * 1000);
};

const rest = REST_SPOTS.lead;
const seat = SEATS.lead;

describe('walkers', () => {
  it('start everyone standing at their rest spot', () => {
    const walkers = restingWalkers();
    for (const id of AGENT_IDS)
      expect(walkerAt(walkers[id], 0)).toEqual({ point: REST_SPOTS[id], walking: false });
  });

  it('set off at once, follow the route, and stand still on arrival', () => {
    const ms = walkMs(rest, seat);
    const w = sendTo(standingAt(rest), seat, 1000, false);

    // Mid-walk points are bare coordinates; only standing walkers report a whole spot.
    expect(walkerAt(w, 1000)).toEqual({ point: { x: rest.x, y: rest.y }, walking: true });
    expect(walkerAt(w, 1000 + ms / 2).point).toEqual(positionAt(route(rest, seat), ms / 2).point);
    expect(walkerAt(w, 1000 + ms - 20).walking).toBe(true);

    const arrived = step(w, 1000 + ms);
    expect(arrived).toEqual(standingAt(seat, 1000 + exactMs(rest, seat)));
    expect(walkerAt(arrived, 1000 + ms)).toEqual({ point: seat, walking: false });
  });

  it('stay put when sent where they already stand', () => {
    expect(sendTo(standingAt(seat), seat, 0, false)).toEqual(standingAt(seat));
  });

  it('never reroute mid-walk: finish the walk, then head for the newest destination', () => {
    let w = sendTo(standingAt(rest), seat, 0, false);
    w = sendTo(w, CHECK_SPOT, 100, false);
    w = sendTo(w, VISIT_SPOTS.frontend!, 200, false);

    // Still on the way to the seat, along the original route (hurrying since the first change at 100 ms).
    expect(w.walk?.path).toEqual(route(rest, seat));
    const arrives = 100 + (exactMs(rest, seat) - 100) / 2.5;
    expect(walkerAt(w, arrives - 20).walking).toBe(true);

    // On arrival it heads for the newest destination; CHECK_SPOT was overtaken and is dropped.
    w = step(w, Math.ceil(arrives));
    expect(w.walk).toEqual({
      path: route(seat, VISIT_SPOTS.frontend!),
      to: VISIT_SPOTS.frontend,
      startedAt: Math.ceil(arrives),
      speed: HURRY_SPEED,
    });
    expect(w.next).toBeNull();

    const end = Math.ceil(arrives) + Math.ceil(exactMs(seat, VISIT_SPOTS.frontend!) / 2.5);
    expect(walkerAt(step(w, end), end)).toEqual({ point: VISIT_SPOTS.frontend, walking: false });
  });

  it('drop a queued destination when sent back to where they are already going', () => {
    let w = sendTo(standingAt(rest), seat, 0, false);
    w = sendTo(w, CHECK_SPOT, 100, false);
    expect(w.next).toBe(CHECK_SPOT);
    w = sendTo(w, seat, 200, false);
    expect(w.next).toBeNull();
    expect(step(w, walkMs(rest, seat))).toMatchObject({
      spot: seat,
      walk: null,
      next: null,
      holdUntil: null,
    });
  });

  it('with reduced motion, are at the destination at once, even mid-walk', () => {
    expect(walkerAt(sendTo(standingAt(rest), seat, 0, true), 0)).toEqual({ point: seat, walking: false });

    const walking = sendTo(standingAt(rest), seat, 0, false);
    expect(walkerAt(sendTo(walking, CHECK_SPOT, 500, true), 500)).toEqual({
      point: CHECK_SPOT,
      walking: false,
    });
  });
});

describe('hurrying: work that starts or ends mid-walk', () => {
  it('goes on from where it is, with no jump, at 2.5 times the speed for the rest of the walk and the next one', () => {
    const ms = exactMs(rest, seat);
    let w = sendTo(standingAt(rest), seat, 0, false);
    const before = walkerAt(w, 1000).point;
    w = sendTo(w, REST_SPOTS.lead, 1000, false); // the work ended on the way
    expect(walkerAt(w, 1000).point).toEqual(before);
    expect(w.walk?.speed).toBe(HURRY_SPEED);
    // The rest of the walk takes 2.5 times less time than it would have.
    const arrives = 1000 + (ms - 1000) / 2.5;
    expect(walkerAt(w, arrives - 20).walking).toBe(true);
    w = step(w, Math.ceil(arrives));
    expect(w.walk).toMatchObject({ to: REST_SPOTS.lead, speed: HURRY_SPEED });

    // The walk after that is back to walking speed.
    w = step(w, Math.ceil(arrives) + Math.ceil(ms / 2.5));
    expect(w.walk).toBeNull();
    w = sendTo(w, seat, 20_000, false);
    expect(w.walk?.speed).toBe(WALK_SPEED);
  });

  it('a destination it already has changes nothing: no hurry for an update that says the same', () => {
    const w = sendTo(standingAt(rest), seat, 0, false);
    expect(sendTo(w, seat, 500, false)).toEqual(w);
    const queued = sendTo(w, CHECK_SPOT, 500, false);
    expect(sendTo(queued, CHECK_SPOT, 600, false)).toEqual(queued);
  });

  it('with reduced motion nothing changes: agents still jump', () => {
    const walking = sendTo(standingAt(rest), seat, 0, false);
    expect(sendTo(walking, CHECK_SPOT, 500, true)).toEqual(standingAt(CHECK_SPOT, 500));
  });
});

describe('the minimum desk time', () => {
  const sitting = standingAt(seat, 10_000); // sat down at 10 s

  it('work that ends 1 s after sitting down keeps the agent at its desk until 3 s after it sat', () => {
    let w = sendTo(sitting, rest, 11_000, false, seat);
    expect(isHeld(w, 11_000)).toBe(true);
    expect(walkerAt(step(w, 12_999), 12_999)).toEqual({ point: seat, walking: false });
    w = step(w, 13_000);
    expect(isHeld(w, 13_000)).toBe(false);
    expect(w.walk).toMatchObject({ to: rest, startedAt: 13_000, speed: WALK_SPEED });
  });

  it('work that ends after 3 s at the desk leaves at once', () => {
    const w = sendTo(sitting, rest, 10_000 + MIN_DESK_MS, false, seat);
    expect(isHeld(w, 10_000 + MIN_DESK_MS)).toBe(false);
    expect(w.walk?.startedAt).toBe(10_000 + MIN_DESK_MS);
  });

  it('new work at the desk during the hold keeps it there; another destination waits for the hold', () => {
    let w = sendTo(sitting, rest, 11_000, false, seat);
    w = sendTo(w, CHECK_SPOT, 11_500, false, seat);
    expect(step(w, 13_000).walk?.to).toBe(CHECK_SPOT);
    w = sendTo(w, seat, 12_000, false, seat);
    expect(isHeld(w, 12_000)).toBe(false);
    expect(step(w, 13_000)).toEqual(w);
  });

  it('only at its own desk: an agent anywhere else leaves at once', () => {
    expect(sendTo(standingAt(rest, 10_000), seat, 10_500, false, seat).walk?.startedAt).toBe(10_500);
    // Half a second after it got to the Lead's check spot, sent on to rest: no desk, so no hold.
    const w = sendTo(standingAt(CHECK_SPOT, 10_000), rest, 10_500, false, seat);
    expect(isHeld(w, 10_500)).toBe(false);
    expect(w.walk).toMatchObject({ to: rest, startedAt: 10_500 });
  });

  it('with reduced motion the 3 s still hold, then it is at its destination at once', () => {
    let w = sendTo(sitting, rest, 11_000, true, seat);
    expect(walkerAt(step(w, 12_999, true), 12_999)).toEqual({ point: seat, walking: false });
    w = step(w, 13_000, true);
    expect(walkerAt(w, 13_000)).toEqual({ point: rest, walking: false });
  });

  it('an arrival is timed exactly, so a walk that ends at the desk starts the 3 s from then', () => {
    const w = step(sendTo(standingAt(rest), seat, 0, false), Math.ceil(exactMs(rest, seat)) + 500);
    expect(w.since).toBeCloseTo(exactMs(rest, seat), 6);
  });
});
