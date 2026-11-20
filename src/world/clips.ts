/**
 * The cast's clips and which one each pose plays (v4.0.0, 4b; moved here, pure, in 4c.1 so the idle schedule reads the
 * same table as the figures). The four clips the Tripo characters carry; desk work is the seated "phone" clip (hands
 * forward at desk height), chairs are "sit", and any pose not named here plays "idle".
 */
import type { Pose } from './map';

export type ClipName = 'idle' | 'walk' | 'sit' | 'play_mobile_game';
export type Mode = Pose | 'walk';

export const CLIP_FOR: Readonly<Partial<Record<Mode, ClipName>>> = {
  walk: 'walk',
  type: 'play_mobile_game',
  smash: 'play_mobile_game',
  sit: 'sit',
  readsit: 'sit',
  drink: 'sit',
};

/** The clip a pose asks for. */
export const clipFor = (mode: Mode): ClipName => CLIP_FOR[mode] ?? 'idle';
