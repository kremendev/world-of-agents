import { describe, expect, it } from 'vitest';
import { AGENT_IDS } from '../../events/schema';
import { SEATS } from './destination';
import { CHECK_SPOT, REST_SPOTS, VISIT_SPOTS, WALK_SPEED, positionAt, route, type Spot } from './walk';
import { restingWalkers, sendTo, standingAt, step, walkerAt } from './walkers';

/** How long the walk from one spot to another takes, in ms. */
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
    expect(arrived).toEqual(standingAt(seat));
    expect(walkerAt(arrived, 1000 + ms)).toEqual({ point: seat, walking: false });
  });

  it('stay put when sent where they already stand', () => {
    expect(sendTo(standingAt(seat), seat, 0, false)).toEqual(standingAt(seat));
  });

  it('never reroute mid-walk: finish the walk, then head for the newest destination', () => {
    let w = sendTo(standingAt(rest), seat, 0, false);
    w = sendTo(w, CHECK_SPOT, 100, false);
    w = sendTo(w, VISIT_SPOTS.frontend!, 200, false);

    // Still on the way to the seat, along the original route.
    const ms = walkMs(rest, seat);
    expect(walkerAt(w, ms / 2).point).toEqual(positionAt(route(rest, seat), ms / 2).point);

    // On arrival it heads for the newest destination; CHECK_SPOT was overtaken and is dropped.
    w = step(w, ms);
    expect(w.walk).toEqual({
      path: route(seat, VISIT_SPOTS.frontend!),
      to: VISIT_SPOTS.frontend,
      startedAt: ms,
    });
    expect(w.next).toBeNull();

    const end = ms + walkMs(seat, VISIT_SPOTS.frontend!);
    expect(walkerAt(step(w, end), end)).toEqual({ point: VISIT_SPOTS.frontend, walking: false });
  });

  it('drop a queued destination when sent back to where they are already going', () => {
    let w = sendTo(standingAt(rest), seat, 0, false);
    w = sendTo(w, CHECK_SPOT, 100, false);
    expect(w.next).toBe(CHECK_SPOT);
    w = sendTo(w, seat, 200, false);
    expect(w.next).toBeNull();
    expect(step(w, walkMs(rest, seat))).toEqual(standingAt(seat));
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
