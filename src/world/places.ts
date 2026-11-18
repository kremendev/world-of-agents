/**
 * Where the agents are in the Forge Keep (v4.0.0, 4b; docs/v4.0-plan.md, "States and places"). Pure data and rules,
 * no three.js, so Vitest holds them. Dima's rule (17 Nov): idle never stands in a work place, and the Forge counts as
 * one, so idle agents are only ever in the Tavern, the Training yard, the Courtyard and the Garden.
 */
import type { AgentId } from '../events/schema';
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

/** Whether a spot is somewhere idle life may stand. */
export const isIdleSpot = (spot: SpotId): boolean => IDLE_AREAS.has(SPOTS[spot].room);
