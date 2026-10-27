import type { AgentId, TaskStatus } from '../events/schema';

/** Dashboard tile letter for a task, from its owner, as on the v1 dashboard. */
export const TILE_LETTER: Record<AgentId, string> = {
  lead: 'L',
  designer: 'D',
  frontend: 'F',
  backend: 'B',
  reviewer: 'R',
};

/** Tile colour per status, as on the v1 dashboard. */
export const STATUS_COLOR: Record<TaskStatus, string> = {
  todo: '#cbbfa8',
  'in-progress': '#f08a3c',
  'in-review': '#6fc9bb',
  done: '#8fbf6a',
};
