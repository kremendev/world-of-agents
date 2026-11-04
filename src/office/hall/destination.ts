import type { AgentId, AgentState } from '../../events/schema';
import type { OfficeState } from '../../state/office';
import { hallStations } from './layout';
import { CHECK_SPOT, FETCH_SPOTS, REST_SPOTS, VISIT_SPOTS, seatSpot, type Spot } from './walk';

/** Each agent's seat. Stations never move, so this is worked out once. */
export const SEATS = Object.fromEntries(hallStations().map((s) => [s.agent.id, seatSpot(s)])) as Readonly<
  Record<AgentId, Spot>
>;

const AT_WORK: ReadonlySet<AgentState> = new Set(['thinking', 'reading', 'writing', 'needs-you']);
const NO_SCROLLS: ReadonlySet<string> = new Set();

/**
 * Live: a dev with a new card goes to the Lead's room for its scroll first, as in the demo. Undefined when that
 * doesn't apply. Null while a dev that has just started has no card yet: the two hooks can land in either order,
 * and setting off for the desk first would mean a walk there and back (nobody reroutes mid-walk). Without a card
 * at its first tool call there will be none (the hall started mid-run), so it goes to its desk.
 */
function scrollStop(
  agent: AgentId,
  office: OfficeState,
  fetched: ReadonlySet<string>,
): Spot | null | undefined {
  const { state, taskId } = office.agents[agent];
  const scroll = FETCH_SPOTS[agent];
  if (!scroll || !AT_WORK.has(state)) return undefined;
  if (!taskId) return state === 'thinking' ? null : undefined;
  const task = office.tasks.find((t) => t.id === taskId);
  return task?.owner === agent && !fetched.has(taskId) ? scroll : undefined;
}

/**
 * Where an agent should be, from the office state alone (rules from the v1 spec).
 * Returns null when it should keep its current destination: for 'walking', which is ours to compute, and for a
 * dev about to get its card. In `live` mode, devs fetch their scroll first (`fetched` holds the tasks whose scroll
 * they have), and a waiting Lead (background tasks still running) stands on the dev room carpet, like v1's
 * check-in. In the demo the script does the fetching, and its waiting Lead stays at its desk, as in v1.
 */
export function destinationFor(
  agent: AgentId,
  office: OfficeState,
  live = false,
  fetched: ReadonlySet<string> = NO_SCROLLS,
): Spot | null {
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
      return REST_SPOTS[agent];
    case 'reading':
      return readingSpot(agent, office, taskId);
    case 'waiting':
      return live && agent === 'lead' ? CHECK_SPOT : SEATS[agent];
    case 'thinking':
    case 'writing':
    case 'needs-you':
    case 'error':
      return SEATS[agent];
  }
}

function readingSpot(agent: AgentId, office: OfficeState, taskId: string | undefined): Spot {
  const task = office.tasks.find((t) => t.id === taskId);
  if (!task) return SEATS[agent];
  if (task.owner === agent) {
    // Still todo: the dev is collecting its task scroll. The Lead has no fetch spot, so it reads at its desk.
    return (task.status === 'todo' ? FETCH_SPOTS[agent] : undefined) ?? SEATS[agent];
  }
  if (agent === 'lead') return CHECK_SPOT;
  return VISIT_SPOTS[task.owner] ?? SEATS[agent];
}
