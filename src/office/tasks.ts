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

/** Status chip on the task board: label and colours from the v1 design. */
export const STATUS_CHIP: Record<TaskStatus, { label: string; bg: string; text: string }> = {
  todo: { label: 'Todo', bg: '#2e2924', text: '#d6c9b3' },
  'in-progress': { label: 'In progress', bg: '#4a2a12', text: '#ffb27a' },
  'in-review': { label: 'In review', bg: '#1f3d39', text: '#a9e6dc' },
  done: { label: 'Done', bg: '#2c4622', text: '#c4e8a8' },
};
