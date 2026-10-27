import type { AgentId } from '../events/schema';
import type { PixelSprite } from '../pixel/sprite';
import {
  ELF_DESIGNER,
  GOBLIN_LEAD,
  ORC_BACKEND,
  ORC_FRONTEND,
  SKELETON_REVIEWER,
} from '../assets/characters';

export type Agent = {
  id: AgentId;
  name: string;
  race: string;
  sprite: PixelSprite;
  /** Orcs get the large chair, desk and keyboard. */
  size: 'normal' | 'large';
  /** Which side of the desk the PC stands on, so it never covers the character. */
  monitor: 'left' | 'right';
  /** The Claude model this agent runs on in v2. */
  model: 'Opus' | 'Sonnet';
  /** The tools this agent gets in v2: only what its job needs. */
  tools: string;
  /** One line describing the sprite, for the agent panel. */
  look: string;
  /** Who or what the agent is waiting for when its state is 'waiting'. */
  waitingFor: string;
};

export const ROSTER: readonly Agent[] = [
  {
    id: 'lead',
    name: 'Lead/PM',
    race: 'Goblin',
    sprite: GOBLIN_LEAD,
    size: 'normal',
    monitor: 'right',
    model: 'Opus',
    tools: 'Read, Write, start agents',
    look: 'Strategist: patched cape, map case, quill behind the ear',
    waitingFor: 'every task to finish',
  },
  {
    id: 'designer',
    name: 'Designer',
    race: 'Elf',
    sprite: ELF_DESIGNER,
    size: 'normal',
    monitor: 'right',
    model: 'Sonnet',
    tools: 'Read, Write (design files only)',
    look: 'Artisan: work apron, brushes and pencils, brush in hand',
    waitingFor: 'the Lead/PM',
  },
  {
    id: 'frontend',
    name: 'Frontend dev',
    race: 'Orc',
    sprite: ORC_FRONTEND,
    size: 'large',
    monitor: 'left',
    model: 'Sonnet',
    tools: 'Read, Edit, Write, Bash',
    look: 'Two huge swords on the back, scar over the left eye',
    waitingFor: 'the Designer',
  },
  {
    id: 'backend',
    name: 'Backend dev',
    race: 'Orc',
    sprite: ORC_BACKEND,
    size: 'large',
    monitor: 'right',
    model: 'Sonnet',
    tools: 'Read, Edit, Write, Bash',
    look: 'Huge forge hammer on the back, scars on jaw and arm',
    waitingFor: 'the Lead/PM',
  },
  {
    id: 'reviewer',
    name: 'Reviewer',
    race: 'Skeleton',
    sprite: SKELETON_REVIEWER,
    size: 'normal',
    monitor: 'left',
    model: 'Sonnet',
    tools: 'Read, Grep',
    look: 'Old scholar: hooded robe, spectacles, candle in hand',
    waitingFor: 'both devs to finish',
  },
];

/** The roster entry for an agent id. All five AgentIds are in the roster (stations.test.ts checks it). */
export const agentById = (id: AgentId): Agent => ROSTER.find((a) => a.id === id)!;
