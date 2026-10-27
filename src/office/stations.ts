import {
  CHAIR,
  CHAIR_LARGE,
  DESK,
  DESK_LARGE,
  KEYBOARD,
  KEYBOARD_LARGE,
  MONITOR,
  PAPERS,
  SCROLL,
  SLATE,
} from '../assets/workstation';
import { spriteSize, type PixelSprite } from '../pixel/sprite';
import type { Agent } from './roster';

/** One sprite placed at art-pixel coordinates. */
export type Placed = { sprite: PixelSprite; x: number; y: number };

export type Station = {
  agent: Agent;
  x: number;
  y: number;
  width: number;
  /** Bottom of the desk: where the station sorts against other things in the hall. */
  z: number;
  /** Where the name plate goes, just below the desk. */
  plateY: number;
  /** Back to front: chair, agent, desk, PC, keyboard, then desk props. */
  pieces: Placed[];
};

const NORMAL = {
  width: 90,
  chair: CHAIR,
  desk: DESK,
  keys: KEYBOARD,
  chairY: 16,
  deskY: 40,
  keysY: 41,
  monitorY: 21,
};
const LARGE = {
  width: 106,
  chair: CHAIR_LARGE,
  desk: DESK_LARGE,
  keys: KEYBOARD_LARGE,
  chairY: 16,
  deskY: 47,
  keysY: 48,
  monitorY: 28,
};

/** Rows from the top of each sprite down to its waist, measured on the v1 design. */
const WAIST: Record<Agent['id'], number> = {
  lead: 15,
  designer: 18,
  frontend: 26,
  backend: 26,
  reviewer: 19,
};

/** What each agent keeps on the desk, relative to the station's corner. */
const DESK_PROPS: Partial<Record<Agent['id'], Placed>> = {
  lead: { sprite: SCROLL, x: 9, y: 38 },
  designer: { sprite: SLATE, x: 11, y: 36 },
  reviewer: { sprite: PAPERS, x: 58, y: 36 },
};

/** Centres a sprite of the given width inside a station of the given width. */
function centred(sprite: PixelSprite, stationWidth: number): number {
  return Math.floor((stationWidth - spriteSize(sprite).width) / 2);
}

/**
 * Builds one workstation: chair, then the agent (so the chair back shows behind them),
 * then desk, PC and keyboard in front, which hides the agent's legs: it reads as sitting.
 * The agent's waist lines up with the desk top.
 */
export function buildStation(agent: Agent, x: number, y: number): Station {
  const s = agent.size === 'large' ? LARGE : NORMAL;
  const deskX = centred(s.desk, s.width);
  const deskWidth = spriteSize(s.desk).width;
  const deskHeight = spriteSize(s.desk).height;
  const monitorWidth = spriteSize(MONITOR).width;
  const monitorX = agent.monitor === 'left' ? deskX + 5 : deskX + deskWidth - 5 - monitorWidth;
  const pieces: Placed[] = [
    { sprite: s.chair, x: centred(s.chair, s.width), y: s.chairY },
    { sprite: agent.sprite, x: centred(agent.sprite, s.width), y: s.deskY - WAIST[agent.id] },
    { sprite: s.desk, x: deskX, y: s.deskY },
    { sprite: MONITOR, x: monitorX, y: s.monitorY },
    { sprite: s.keys, x: centred(s.keys, s.width), y: s.keysY },
  ];
  const deskProp = DESK_PROPS[agent.id];
  if (deskProp) pieces.push(deskProp);

  const deskBottom = s.deskY + deskHeight;
  return {
    agent,
    x,
    y,
    width: s.width,
    z: y + deskBottom,
    plateY: y + deskBottom + 4,
    pieces: pieces.map((p) => ({ ...p, x: p.x + x, y: p.y + y })),
  };
}

/** The station's bounding box in art pixels, from its pieces. */
export function stationBounds(station: Station): { x: number; y: number; w: number; h: number } {
  let left = Infinity;
  let top = Infinity;
  let right = -Infinity;
  let bottom = -Infinity;
  for (const p of station.pieces) {
    const { width, height } = spriteSize(p.sprite);
    left = Math.min(left, p.x);
    top = Math.min(top, p.y);
    right = Math.max(right, p.x + width);
    bottom = Math.max(bottom, p.y + height);
  }
  return { x: left, y: top, w: right - left, h: bottom - top };
}
