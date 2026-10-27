import type { AgentId } from '../../events/schema';

/**
 * Lines agents say when two or more of them are idle in the rest room, from the v1 design.
 * This is our own flavour text, not agent output. Agent messages still render as plain text.
 */
export const SMALL_TALK: Readonly<Record<AgentId, readonly string[]>> = {
  lead: ['Next sprint: fewer bugs, more loot.', 'Who moved my roadmap?', 'Stand-up in five. Kidding.'],
  designer: [
    'That border needs two more pixels.',
    'Dark iron is the new black.',
    'I named this red Ember 500.',
  ],
  frontend: [
    'Flexbox finally obeyed me.',
    'Two swords, one keyboard. Fair fight.',
    'Fixed it. Broke it. Fixed it again.',
  ],
  backend: ['The API fears my hammer.', 'Zero downtime. Many dents.', 'Pass the mead, not the bug.'],
  reviewer: ['Three hundred years of code review.', 'I saw that semicolon.', 'Approved. Barely.'],
};
