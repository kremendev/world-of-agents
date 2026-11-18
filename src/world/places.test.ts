import { describe, expect, it } from 'vitest';
import {
  AGENT_IDS,
  type AgentId,
  type AgentState,
  type OfficeEvent,
  type TaskStatus,
} from '../events/schema';
import { SEATS, destinationFor } from '../office/hall/destination';
import { CHECK_SPOT, FETCH_SPOTS, REST_SPOTS, VISIT_SPOTS } from '../office/hall/walk';
import { INITIAL_OFFICE, officeReducer, type OfficeState } from '../state/office';
import { SPOTS, type SpotId } from './map';
import { CHECK, FETCH, IDLE_AREAS, START, VISIT, WORK, isIdleSpot, placeFor } from './places';

const office = (...events: OfficeEvent[]): OfficeState => events.reduce(officeReducer, INITIAL_OFFICE);
const task = (taskId: string, owner: AgentId, status: TaskStatus = 'todo'): OfficeEvent => ({
  type: 'task',
  taskId,
  title: taskId,
  owner,
  status,
  at: 0,
});
const act = (agent: AgentId, state: AgentState, taskId?: string): OfficeEvent =>
  taskId ? { type: 'state', agent, state, taskId, at: 0 } : { type: 'state', agent, state, at: 0 };

/** One task per agent, all still todo. */
const TASKS = [
  task('plan', 'lead'),
  task('design', 'designer'),
  task('ui', 'frontend'),
  task('api', 'backend'),
  task('review', 'reviewer'),
];
const OWN: Record<AgentId, string> = {
  lead: 'plan',
  designer: 'design',
  frontend: 'ui',
  backend: 'api',
  reviewer: 'review',
};
const STATES: readonly AgentState[] = [
  'idle',
  'walking',
  'thinking',
  'reading',
  'writing',
  'waiting',
  'needs-you',
  'done',
  'error',
];
const WORK_ROOM = {
  lead: 'war',
  designer: 'studio',
  frontend: 'workshop',
  backend: 'workshop',
  reviewer: 'library',
};
const dist = (a: SpotId, b: SpotId) => Math.hypot(SPOTS[a].x - SPOTS[b].x, SPOTS[a].z - SPOTS[b].z);

describe('the places', () => {
  it('keeps idle life out of every work room and the Forge (Dima, 17 Nov)', () => {
    for (const room of ['war', 'library', 'studio', 'workshop', 'forge'] as const)
      expect(IDLE_AREAS.has(room), room).toBe(false);
    expect([...IDLE_AREAS].sort()).toEqual(['court', 'garden', 'tavern', 'yard']);
  });

  it('starts every agent in an idle area, each on its own spot', () => {
    expect(Object.keys(START).sort()).toEqual([...AGENT_IDS].sort());
    for (const id of AGENT_IDS) expect(isIdleSpot(START[id]), `${id} at ${START[id]}`).toBe(true);
    expect(new Set(Object.values(START)).size).toBe(AGENT_IDS.length);
  });

  it("tells a work room's spot from an idle one", () => {
    expect(isIdleSpot('desk-frontend')).toBe(false);
    expect(isIdleSpot('forge-anvil')).toBe(false);
    expect(isIdleSpot('lib-chair')).toBe(false);
    expect(isIdleSpot('court-bench')).toBe(true);
    expect(SPOTS['court-bench'].room).toBe('court');
  });

  it("puts each agent's work in its own room, a scroll at the War hall's board, a visit beside the desk", () => {
    for (const id of AGENT_IDS) expect(SPOTS[WORK[id]].room, id).toBe(WORK_ROOM[id]);
    for (const [id, spot] of Object.entries(FETCH)) expect(SPOTS[spot].room, id).toBe('war');
    for (const [id, spot] of Object.entries(VISIT) as [AgentId, SpotId][]) {
      expect(SPOTS[spot].room, id).toBe(WORK_ROOM[id]);
      expect(dist(spot, WORK[id]), id).toBeLessThan(1.6);
    }
    expect(SPOTS[CHECK].room).toBe('workshop');
    // every place an agent works at is somewhere idle life never goes
    for (const spot of [...Object.values(WORK), ...Object.values(FETCH), ...Object.values(VISIT), CHECK])
      expect(isIdleSpot(spot), spot).toBe(false);
  });
});

describe('the place map', () => {
  it('gives every state of every agent a place, but walking, which is the world to show', () => {
    for (const id of AGENT_IDS) {
      for (const state of STATES) {
        for (const live of [false, true]) {
          const place = placeFor(id, office(...TASKS, act(id, state, OWN[id])), live, new Set([OWN[id]]));
          if (state === 'walking') expect(place, `${id} ${state}`).toBeNull();
          else expect(place && SPOTS[place], `${id} ${state} ${live}`).toBeDefined();
        }
      }
    }
  });

  it('never puts an idle or done agent at a work spot or at the Forge', () => {
    for (const id of AGENT_IDS) {
      for (const state of ['idle', 'done'] as const) {
        for (const live of [false, true]) {
          const place = placeFor(id, office(...TASKS, act(id, state, OWN[id])), live) as SpotId;
          expect(isIdleSpot(place), `${id} ${state}`).toBe(true);
          expect(place).toBe(START[id]);
        }
      }
    }
  });

  it('sends a working agent to its own work spot, the needs-you and failed ones too', () => {
    for (const id of AGENT_IDS) {
      for (const state of ['thinking', 'writing', 'needs-you', 'error'] as const) {
        const started = task(OWN[id], id, 'in-progress');
        expect(placeFor(id, office(...TASKS, started, act(id, state, OWN[id]))), `${id} ${state}`).toBe(
          WORK[id],
        );
      }
    }
  });

  it('has the Reviewer review beside the agent at its desk, whoever owns the task (Dima, 17 Nov)', () => {
    for (const owner of ['designer', 'frontend', 'backend'] as const) {
      const place = placeFor('reviewer', office(...TASKS, act('reviewer', 'reading', OWN[owner])));
      expect(place, owner).toBe(VISIT[owner]);
    }
    // a task of the Lead's has no desk to stand by: the Reviewer reads at its own
    expect(placeFor('reviewer', office(...TASKS, act('reviewer', 'reading', 'plan')))).toBe(WORK.reviewer);
  });

  it("sends a Lead reading another agent's task to the Workshop to check on it (Dima, 17 Nov)", () => {
    for (const owner of ['designer', 'frontend', 'backend', 'reviewer'] as const) {
      const place = placeFor('lead', office(...TASKS, act('lead', 'reading', OWN[owner])), true);
      expect(place, owner).toBe(CHECK);
    }
    expect(SPOTS[CHECK].room).toBe('workshop');
  });

  it('keeps a waiting Lead in the War room, in Live too (Dima, 17 Nov)', () => {
    for (const live of [false, true]) {
      const place = placeFor('lead', office(...TASKS, act('lead', 'waiting', 'plan')), live) as SpotId;
      expect(SPOTS[place].room).toBe('war');
    }
  });

  it('sends a dev reading its new task to the board for its scroll, and the others to their work', () => {
    for (const id of ['designer', 'frontend', 'backend'] as const)
      expect(placeFor(id, office(...TASKS, act(id, 'reading', OWN[id])))).toBe(FETCH[id]);
    for (const id of ['lead', 'reviewer'] as const)
      expect(placeFor(id, office(...TASKS, act(id, 'reading', OWN[id])))).toBe(WORK[id]);
    expect(
      placeFor('frontend', office(task('ui', 'frontend', 'in-progress'), act('frontend', 'reading', 'ui'))),
    ).toBe(WORK.frontend);
  });

  it('in Live, fetches a scroll first, waits for a card that is coming, and then goes to work', () => {
    const fetched = new Set<string>();
    // started with no card yet: stay put until it comes
    expect(placeFor('backend', office(act('backend', 'thinking')), true)).toBeNull();
    // the card is there and not fetched: to the board
    const withCard = office(task('api', 'backend', 'in-progress'), act('backend', 'writing', 'api'));
    expect(placeFor('backend', withCard, true, fetched)).toBe(FETCH.backend);
    // fetched: to the desk
    expect(placeFor('backend', withCard, true, new Set(['api']))).toBe(WORK.backend);
    // the demo's script does its own fetching
    expect(placeFor('backend', withCard, false)).toBe(WORK.backend);
  });

  it("matches the 2D hall's places kind for kind, but for the waiting Lead in Live", () => {
    type Kind = string | null;
    const kind2d = (
      agent: AgentId,
      office: OfficeState,
      live: boolean,
      fetched: ReadonlySet<string>,
    ): Kind => {
      const spot = destinationFor(agent, office, live, fetched);
      if (spot === null) return null;
      if (spot === REST_SPOTS[agent]) return 'rest';
      if (spot === SEATS[agent]) return 'work';
      if (spot === FETCH_SPOTS[agent]) return 'fetch';
      if (spot === CHECK_SPOT) return 'check';
      const visit = (Object.keys(VISIT_SPOTS) as AgentId[]).find((o) => VISIT_SPOTS[o] === spot);
      return visit ? `visit:${visit}` : 'other';
    };
    const kind3d = (
      agent: AgentId,
      office: OfficeState,
      live: boolean,
      fetched: ReadonlySet<string>,
    ): Kind => {
      const spot = placeFor(agent, office, live, fetched);
      if (spot === null) return null;
      if (spot === START[agent]) return 'rest';
      if (spot === WORK[agent]) return 'work';
      if (spot === FETCH[agent]) return 'fetch';
      if (spot === CHECK) return 'check';
      const visit = (Object.keys(VISIT) as AgentId[]).find((o) => VISIT[o] === spot);
      return visit ? `visit:${visit}` : 'other';
    };
    let compared = 0;
    for (const agent of AGENT_IDS) {
      for (const state of STATES) {
        for (const taskId of [undefined, ...Object.values(OWN)]) {
          for (const status of ['todo', 'in-progress'] as const) {
            for (const live of [false, true]) {
              for (const fetched of [new Set<string>(), new Set(Object.values(OWN))]) {
                const o = office(
                  ...AGENT_IDS.map((id) => task(OWN[id], id, status)),
                  act(agent, state, taskId),
                );
                const want =
                  live && agent === 'lead' && state === 'waiting' ? 'work' : kind2d(agent, o, live, fetched);
                expect(kind3d(agent, o, live, fetched), `${agent} ${state} ${taskId} ${status} ${live}`).toBe(
                  want,
                );
                compared++;
              }
            }
          }
        }
      }
    }
    expect(compared).toBe(5 * 9 * 6 * 2 * 2 * 2);
  });
});
