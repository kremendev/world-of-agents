import { describe, expect, it } from 'vitest';
import {
  AGENT_IDS,
  type AgentId,
  type AgentState,
  type OfficeEvent,
  type TaskStatus,
} from '../../events/schema';
import { INITIAL_OFFICE, officeReducer, type OfficeState } from '../../state/office';
import { SEATS, destinationFor } from './destination';
import { CHECK_SPOT, FETCH_SPOTS, REST_SPOTS, VISIT_SPOTS } from './walk';

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

describe('destinationFor', () => {
  it('starts everyone at their rest spot', () => {
    for (const id of AGENT_IDS) expect(destinationFor(id, INITIAL_OFFICE)).toBe(REST_SPOTS[id]);
  });

  it.each(['idle', 'done'] as const)('sends %s agents to their rest spot', (state) => {
    for (const id of AGENT_IDS) {
      expect(destinationFor(id, office(...TASKS, act(id, state, OWN[id])))).toBe(REST_SPOTS[id]);
    }
  });

  it.each(['thinking', 'writing', 'waiting', 'needs-you', 'error'] as const)(
    'sends %s agents to their own seat',
    (state) => {
      for (const id of AGENT_IDS) {
        expect(destinationFor(id, office(...TASKS, act(id, state, OWN[id])))).toBe(SEATS[id]);
      }
    },
  );

  describe('live: the scroll', () => {
    const own = (id: 'backend' | 'reviewer', state: 'thinking' | 'reading' | 'writing' | 'needs-you') =>
      office(
        { type: 'task', taskId: 'mine', title: 'Mine', owner: id, status: 'in-progress', at: 0 },
        act(id, state, 'mine'),
      );

    it.each(['thinking', 'reading', 'writing', 'needs-you'] as const)(
      'a dev %s on a card it has no scroll for goes to the Lead room, then its desk',
      (state) => {
        expect(destinationFor('backend', own('backend', state), true)).toBe(FETCH_SPOTS.backend);
        expect(destinationFor('backend', own('backend', state), true, new Set(['mine']))).toBe(SEATS.backend);
      },
    );

    it('not in the demo: the script does the fetching', () => {
      expect(destinationFor('backend', own('backend', 'thinking'))).toBe(SEATS.backend);
    });

    it('the Reviewer has no scroll to fetch', () => {
      expect(destinationFor('reviewer', own('reviewer', 'thinking'), true)).toBe(SEATS.reviewer);
    });

    it('thinking with no card yet: stays put, the card is on its way', () => {
      expect(destinationFor('backend', office(act('backend', 'thinking')), true)).toBeNull();
    });

    it('using a tool with no card: there will be none, so to its desk', () => {
      expect(destinationFor('backend', office(act('backend', 'writing')), true)).toBe(SEATS.backend);
    });

    it('done or idle: to rest, scroll or no scroll', () => {
      expect(destinationFor('backend', office(act('backend', 'done', 'mine')), true)).toBe(
        REST_SPOTS.backend,
      );
      expect(destinationFor('backend', office(act('backend', 'idle')), true)).toBe(REST_SPOTS.backend);
    });
  });

  it('live: a waiting Lead stands on the dev room carpet, like the check-in. Nobody else moves', () => {
    expect(destinationFor('lead', office(act('lead', 'waiting')), true)).toBe(CHECK_SPOT);
    expect(destinationFor('lead', office(act('lead', 'thinking')), true)).toBe(SEATS.lead);
    for (const id of AGENT_IDS.filter((a) => a !== 'lead')) {
      expect(destinationFor(id, office(act(id, 'waiting')), true)).toBe(SEATS[id]);
    }
  });

  describe('reading', () => {
    it('own task while it is still todo: a dev collects its scroll in the Lead room', () => {
      for (const id of ['designer', 'frontend', 'backend'] as const) {
        expect(destinationFor(id, office(...TASKS, act(id, 'reading', OWN[id])))).toBe(FETCH_SPOTS[id]);
      }
    });

    it('own todo task, for the Lead and the Reviewer (no fetch spot): at their own seat', () => {
      for (const id of ['lead', 'reviewer'] as const) {
        expect(destinationFor(id, office(...TASKS, act(id, 'reading', OWN[id])))).toBe(SEATS[id]);
      }
    });

    it('own task once it has started: at their own seat', () => {
      for (const id of AGENT_IDS) {
        const started = office(...TASKS, task(OWN[id], id, 'in-progress'), act(id, 'reading', OWN[id]));
        expect(destinationFor(id, started)).toBe(SEATS[id]);
      }
    });

    it("another agent's task, for the Lead: the check spot in the dev room", () => {
      for (const taskId of ['design', 'ui', 'api', 'review']) {
        expect(destinationFor('lead', office(...TASKS, act('lead', 'reading', taskId)))).toBe(CHECK_SPOT);
      }
    });

    it("a dev's task, for anyone else: beside that dev's desk", () => {
      expect(destinationFor('reviewer', office(...TASKS, act('reviewer', 'reading', 'ui')))).toBe(
        VISIT_SPOTS.frontend,
      );
      expect(destinationFor('reviewer', office(...TASKS, act('reviewer', 'reading', 'api')))).toBe(
        VISIT_SPOTS.backend,
      );
      expect(destinationFor('frontend', office(...TASKS, act('frontend', 'reading', 'design')))).toBe(
        VISIT_SPOTS.designer,
      );
    });

    it('a task whose owner has no visit spot (Lead, Reviewer): at their own seat', () => {
      expect(destinationFor('reviewer', office(...TASKS, act('reviewer', 'reading', 'plan')))).toBe(
        SEATS.reviewer,
      );
      expect(destinationFor('designer', office(...TASKS, act('designer', 'reading', 'review')))).toBe(
        SEATS.designer,
      );
    });

    it('no task, or one nobody announced: at their own seat', () => {
      expect(destinationFor('backend', office(...TASKS, act('backend', 'reading')))).toBe(SEATS.backend);
      expect(destinationFor('backend', office(act('backend', 'reading', 'ghost')))).toBe(SEATS.backend);
    });
  });

  it('returns null for walking, so the agent keeps its current destination', () => {
    for (const id of AGENT_IDS) {
      expect(destinationFor(id, office(...TASKS, act(id, 'walking', OWN[id])))).toBeNull();
    }
  });
});
