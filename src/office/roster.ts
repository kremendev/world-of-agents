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
};

export const ROSTER: readonly Agent[] = [
  { id: 'lead', name: 'Lead/PM', race: 'Goblin', sprite: GOBLIN_LEAD, size: 'normal', monitor: 'right' },
  { id: 'designer', name: 'Designer', race: 'Elf', sprite: ELF_DESIGNER, size: 'normal', monitor: 'right' },
  { id: 'frontend', name: 'Frontend dev', race: 'Orc', sprite: ORC_FRONTEND, size: 'large', monitor: 'left' },
  { id: 'backend', name: 'Backend dev', race: 'Orc', sprite: ORC_BACKEND, size: 'large', monitor: 'right' },
  {
    id: 'reviewer',
    name: 'Reviewer',
    race: 'Skeleton',
    sprite: SKELETON_REVIEWER,
    size: 'normal',
    monitor: 'left',
  },
];
