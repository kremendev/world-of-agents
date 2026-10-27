import type { AgentState } from '../events/schema';

/**
 * How each agent state looks in bubbles and chips: colours from the v1 design (needs-you and error picked
 * to match). Walking borrows the idle colours for the panel chip; the hall shows no bubble while walking.
 */
export const STATE_STYLE: Record<AgentState, { label: string; bg: string; text: string }> = {
  idle: { label: 'idle', bg: '#2e2924', text: '#d6c9b3' },
  walking: { label: 'walking', bg: '#2e2924', text: '#d6c9b3' },
  thinking: { label: 'thinking', bg: '#26314a', text: '#c9d6f5' },
  reading: { label: 'reading', bg: '#1f3d39', text: '#a9e6dc' },
  writing: { label: 'writing', bg: '#4a2a12', text: '#ffb27a' },
  waiting: { label: 'waiting', bg: '#3a342c', text: '#eadcc4' },
  'needs-you': { label: 'needs you', bg: '#4d3a0c', text: '#ffd97a' },
  done: { label: 'done', bg: '#2c4622', text: '#c4e8a8' },
  error: { label: 'error', bg: '#4a1616', text: '#ffb0a8' },
};

/** The state as words with a capital first letter: "Writing", "Needs you". */
export function stateWords(state: AgentState): string {
  const { label } = STATE_STYLE[state];
  return label.charAt(0).toUpperCase() + label.slice(1);
}
