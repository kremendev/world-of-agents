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

const GUILD_LEAD = {
  design: 'designer',
  frontend: 'frontend',
  backend: 'backend',
  review: 'reviewer',
} as const;
const SPECIALIST = /^woa-team:(design|frontend|backend|review)-([a-z0-9]+(?:-[a-z0-9]+)*)$/;

/**
 * A specialist's agent type (v3.4), `woa-team:<guild>-<name>`, to its guild lead and its name in words ("React dev"):
 * from the agent type's own shape, never from event text. Anything else is no specialist.
 */
export function specialistOf(type: string): { lead: SubagentId; name: string } | undefined {
  const match = SPECIALIST.exec(type);
  if (!match || match[2]!.length > 40) return undefined;
  const words = match[2]!.split('-').join(' ');
  return {
    lead: GUILD_LEAD[match[1] as keyof typeof GUILD_LEAD],
    name: words.charAt(0).toUpperCase() + words.slice(1),
  };
}

export const nameOf = (id: RosterId): string => ROSTER.find((agent) => agent.id === id)?.name ?? id;
