/**
 * The cast's clips and which one each pose plays (v4.0.0, 4b; moved here, pure, in 4c.1 so the idle schedule reads the
 * same table as the figures). The four clips the Tripo characters carry, and `raise_hand` once Dima's export adds it
 * (4c.5, D7); desk work is the seated "phone" clip (hands forward at desk height), chairs are "sit", and any pose not
 * named here plays "idle".
 */
import type { Pose } from './map';

export type ClipName = 'idle' | 'walk' | 'sit' | 'play_mobile_game' | 'raise_hand';
/** A pose, a walk, or a raised hand (a needs-you agent whose model has the clip). */
export type Mode = Pose | 'walk' | 'raise';

export const CLIP_FOR: Readonly<Partial<Record<Mode, ClipName>>> = {
  walk: 'walk',
  type: 'play_mobile_game',
  smash: 'play_mobile_game',
  sit: 'sit',
  readsit: 'sit',
  drink: 'sit',
  raise: 'raise_hand',
};

/** The poses of a seated figure. */
export const SEATED: ReadonlySet<Mode> = new Set(['type', 'smash', 'readsit', 'sit', 'drink']);

/** The clip a pose asks for. */
export const clipFor = (mode: Mode): ClipName => CLIP_FOR[mode] ?? 'idle';

/**
 * What a figure plays (4b, and 4c.5 for needs-you): its walk while it walks; needing you, its raised hand where its
 * model has the clip (D7), else its resting clip at that spot, seated in a chair or standing; held at its work spot
 * after the work ended, the same resting clip; else its spot's own pose.
 */
export function figureMode(o: {
  walking: boolean;
  pose: Pose;
  held: boolean;
  needsYou: boolean;
  hasRaise: boolean;
}): Mode {
  if (o.walking) return 'walk';
  if (o.needsYou && o.hasRaise) return 'raise';
  if (o.needsYou || o.held) return SEATED.has(o.pose) ? 'sit' : 'idle';
  return o.pose;
}
