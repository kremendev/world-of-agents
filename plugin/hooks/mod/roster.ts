// The five agents as the team pane names them. The pane never shows a name it took from an event: only these.
// src/office/roster.ts is the page's roster; src/office/roster.test.ts keeps the ids and names equal.

export const ROSTER = [
  { id: 'lead', name: 'Lead/PM' },
  { id: 'designer', name: 'Designer' },
  { id: 'frontend', name: 'Frontend dev' },
  { id: 'backend', name: 'Backend dev' },
  { id: 'reviewer', name: 'Reviewer' },
] as const;

export type RosterId = (typeof ROSTER)[number]['id'];
export type SubagentId = Exclude<RosterId, 'lead'>;

const SUBAGENTS = ROSTER.map((agent) => agent.id).filter((id): id is SubagentId => id !== 'lead');

/**
 * The roster id of a subagent type, by exact name: `world-of-agents:backend` is `backend`. The Lead is the main
 * thread, never a subagent, so `world-of-agents:lead` names nobody here, and neither does any other type.
 */
export function rosterIdOf(type: string): SubagentId | undefined {
  return SUBAGENTS.find((id) => type === `world-of-agents:${id}`);
}

export const nameOf = (id: RosterId): string => ROSTER.find((agent) => agent.id === id)?.name ?? id;
