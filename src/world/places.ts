/**
 * Where the agents are in the Forge Keep (v4.0.0, 4b; docs/v4.0-plan.md, "States and places"). Pure data and rules,
 * no three.js, so Vitest holds them. Dima's rule (17 Nov): idle never stands in a work place, and the Forge counts as
 * one, so idle agents are only ever in the Tavern, the Training yard, the Courtyard and the Garden.
 *
 * placeFor() is the 2D hall's destinationFor() (src/office/hall/destination.ts) on the keep's spots, with Dima's
 * answers of 17 Nov where they differ: a waiting Lead stands in the War room in Live too, a Lead reading another
 * agent's task goes to the Workshop, the Reviewer reviews beside the agent at its desk, and nobody idles at work.
 */
import type { AgentId, AgentState } from '../events/schema';
import type { OfficeState } from '../state/office';
import { SPOTS, type RoomId, type SpotId } from './map';

/** The areas idle life may use: never a work room, never the Forge. */
export const IDLE_AREAS: ReadonlySet<RoomId> = new Set(['tavern', 'yard', 'court', 'garden']);

/**
 * Where each agent rests when the keep is built. The town started the Reviewer in the Library; here it reads on the
 * Courtyard bench (Dima, 17 Nov). Idle life (4c) moves them about the idle areas.
 */
export const START: Readonly<Record<AgentId, SpotId>> = {
  lead: 'garden-pond',
  designer: 'garden-easel',
  frontend: 'yard-1',
  backend: 'tavern-2',
  reviewer: 'court-bench',
};

/** Each agent's own work spot: the war table, the three desks, the library desk. */
export const WORK: Readonly<Record<AgentId, SpotId>> = {
  lead: 'war-table',
  designer: 'studio-desk',
  frontend: 'desk-frontend',
  backend: 'desk-backend',
  reviewer: 'lib-desk',
};

/** At the War hall's task board, where each dev collects its task scroll. */
export const FETCH: Readonly<Partial<Record<AgentId, SpotId>>> = {
  designer: 'fetch-designer',
  frontend: 'fetch-frontend',
  backend: 'fetch-backend',
};

/** Beside an agent at its desk, where another (the Reviewer) looks at its work. */
export const VISIT: Readonly<Partial<Record<AgentId, SpotId>>> = {
  designer: 'visit-designer',
  frontend: 'visit-frontend',
  backend: 'visit-backend',
};

/** In the Workshop, facing the devs' desks, where the Lead checks on their work. */
export const CHECK: SpotId = 'workshop-check';

/** Whether a spot is somewhere idle life may stand. */
export const isIdleSpot = (spot: SpotId): boolean => IDLE_AREAS.has(SPOTS[spot].room);

const AT_WORK: ReadonlySet<AgentState> = new Set(['thinking', 'reading', 'writing', 'needs-you']);
const NO_SCROLLS: ReadonlySet<string> = new Set();

/**
 * Live: a dev with a new card goes to the War hall for its scroll first. Undefined when that doesn't apply; null while
 * a dev that has just started has no card yet, since the two hooks can land in either order (as in the 2D hall).
 */
function scrollStop(
  agent: AgentId,
  office: OfficeState,
  fetched: ReadonlySet<string>,
): SpotId | null | undefined {
  const { state, taskId } = office.agents[agent];
  const scroll = FETCH[agent];
  if (!scroll || !AT_WORK.has(state)) return undefined;
  if (!taskId) return state === 'thinking' ? null : undefined;
  const task = office.tasks.find((t) => t.id === taskId);
  return task?.owner === agent && !fetched.has(taskId) ? scroll : undefined;
}

function readingSpot(agent: AgentId, office: OfficeState, taskId: string | undefined): SpotId {
  const task = office.tasks.find((t) => t.id === taskId);
  if (!task) return WORK[agent];
  if (task.owner === agent) {
    // still todo: the dev is collecting its task scroll; the Lead and the Reviewer have none, so they read at work
    return (task.status === 'todo' ? FETCH[agent] : undefined) ?? WORK[agent];
  }
  // another agent's task: the Lead checks on it in the Workshop, anyone else looks at it beside that agent's desk
  if (agent === 'lead') return CHECK;
  return VISIT[task.owner] ?? WORK[agent];
}

/**
 * Where an agent should be, from the office state alone. Null when it should keep its current place: for `walking`,
 * which is the world's own to show, and for a dev about to get its card. In `live` mode devs fetch their scroll first
 * (`fetched` holds the tasks whose scroll they have); in the demo the script does the fetching.
 */
export function placeFor(
  agent: AgentId,
  office: OfficeState,
  live = false,
  fetched: ReadonlySet<string> = NO_SCROLLS,
): SpotId | null {
  const { state, taskId } = office.agents[agent];
  if (live) {
    const stop = scrollStop(agent, office, fetched);
    if (stop !== undefined) return stop;
  }
  switch (state) {
    case 'walking':
      return null;
    case 'idle':
    case 'done':
      return START[agent];
    case 'reading':
      return readingSpot(agent, office, taskId);
    case 'thinking':
    case 'writing':
    case 'waiting':
    case 'needs-you':
    case 'error':
      return WORK[agent];
  }
}
