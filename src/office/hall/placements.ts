// Generated from the v1 design (Forge Hall): where every prop, light and sign sits.
// Coordinates are art pixels (the design used 2 screen pixels per art pixel). z sorts drawing:
// bigger z is drawn later, so it sits in front.
import type { AgentId } from '../../events/schema';
import * as H from '../../assets/hall';
import type { PixelSprite } from '../../pixel/sprite';

export type PropPlacement = { sprite: PixelSprite; x: number; y: number; z: number; flicker?: boolean };
export type Halo = { x: number; y: number; radius: number; z: number; strength: number };
export type Plaque = { text: string; x: number; y: number; width: number };
export type StationSpot = { agent: AgentId; x: number; y: number };

export const PROPS: readonly PropPlacement[] = [
  { sprite: H.FUR_RUG, x: 540, y: 67, z: 1 },
  { sprite: H.WAR_MAP, x: 12, y: 23, z: 65.5 },
  { sprite: H.HORN_LEFT, x: 47, y: 7, z: 66 },
  { sprite: H.HORN_RIGHT, x: 159, y: 7, z: 66 },
  { sprite: H.SCONCE, x: 165, y: 21, z: 66, flicker: true },
  { sprite: H.BANNER, x: 175, y: 12, z: 65.5 },
  { sprite: H.CANDELABRA, x: 23, y: 90, z: 126 },
  { sprite: H.CANDELABRA, x: 170, y: 90, z: 126 },
  { sprite: H.CHEST, x: 14, y: 218, z: 238 },
  { sprite: H.SKULL_PILE, x: 150, y: 224, z: 238 },
  { sprite: H.GATE, x: 314, y: 14, z: 65.5 },
  { sprite: H.BANNER, x: 376, y: 12, z: 65.5 },
  { sprite: H.BEAST_SKULL, x: 400, y: 20, z: 65.5 },
  { sprite: H.BANNER, x: 434, y: 12, z: 65.5 },
  { sprite: H.BRAZIER, x: 294, y: 66, z: 90 },
  { sprite: H.BRAZIER, x: 362, y: 66, z: 90 },
  { sprite: H.SKULL_PILE, x: 211, y: 90, z: 104 },
  { sprite: H.PILLAR, x: 236, y: 86, z: 150 },
  { sprite: H.PILLAR, x: 236, y: 174, z: 238 },
  { sprite: H.PILLAR, x: 420, y: 86, z: 150 },
  { sprite: H.PILLAR, x: 420, y: 174, z: 238 },
  { sprite: H.PAINTING, x: 479, y: 18, z: 65.5 },
  { sprite: H.FIREPLACE, x: 530, y: 8, z: 65.5 },
  { sprite: H.FIRE, x: 555, y: 39, z: 66, flicker: true },
  { sprite: H.SCONCE, x: 521, y: 21, z: 66, flicker: true },
  { sprite: H.SCONCE, x: 612, y: 21, z: 66, flicker: true },
  { sprite: H.SHIELD, x: 631, y: 20, z: 65.5 },
  { sprite: H.TAVERN_TABLE, x: 540, y: 146, z: 172 },
  { sprite: H.MUG, x: 549, y: 146, z: 172.5 },
  { sprite: H.MUG, x: 575, y: 149, z: 172.5 },
  { sprite: H.MUG, x: 585, y: 145, z: 172.5 },
  { sprite: H.BARREL, x: 631, y: 98, z: 118 },
  { sprite: H.BARREL, x: 646, y: 102, z: 122 },
  { sprite: H.PILLAR, x: 292, y: 236, z: 300 },
  { sprite: H.PILLAR, x: 364, y: 236, z: 300 },
  { sprite: H.SCONCE, x: 20, y: 258, z: 299.5, flicker: true },
  { sprite: H.BANNER, x: 35, y: 251, z: 299 },
  { sprite: H.SCONCE, x: 64, y: 258, z: 299.5, flicker: true },
  { sprite: H.SCONCE, x: 169, y: 258, z: 299.5, flicker: true },
  { sprite: H.CROSSED_AXES, x: 184, y: 256, z: 299 },
  { sprite: H.SCONCE, x: 235, y: 258, z: 299.5, flicker: true },
  { sprite: H.BANNER, x: 250, y: 251, z: 299 },
  { sprite: H.BANNER, x: 388, y: 251, z: 299 },
  { sprite: H.SCONCE, x: 418, y: 258, z: 299.5, flicker: true },
  { sprite: H.SKULL, x: 438, y: 272, z: 299.5 },
  { sprite: H.SKULL, x: 459, y: 272, z: 299.5 },
  { sprite: H.SKULL, x: 480, y: 272, z: 299.5 },
  { sprite: H.SCONCE, x: 498, y: 258, z: 299.5, flicker: true },
  { sprite: H.BOOKSHELF_1, x: 508, y: 238, z: 310 },
  { sprite: H.BOOKSHELF_2, x: 540, y: 238, z: 310 },
  { sprite: H.BOOKSHELF_3, x: 572, y: 238, z: 310 },
  { sprite: H.BOOKSHELF_4, x: 604, y: 238, z: 310 },
  { sprite: H.CANDELABRA, x: 642, y: 284, z: 320 },
  { sprite: H.EASEL, x: 20, y: 306, z: 350 },
  { sprite: H.CANDELABRA, x: 512, y: 349, z: 385 },
  { sprite: H.SKULL_PILE, x: 634, y: 436, z: 450 },
  { sprite: H.BARREL, x: 26, y: 423, z: 443 },
  { sprite: H.ANVIL, x: 48, y: 430, z: 443 },
];

/** Warm light around candles, braziers and the fireplace. */
export const HALOS: readonly Halo[] = [
  { x: 168, y: 23, radius: 17, z: 65.5, strength: 0.32 },
  { x: 31, y: 92, radius: 23, z: 125.5, strength: 0.32 },
  { x: 178, y: 92, radius: 23, z: 125.5, strength: 0.32 },
  { x: 302, y: 71, radius: 28, z: 89.5, strength: 0.38 },
  { x: 370, y: 71, radius: 28, z: 89.5, strength: 0.38 },
  { x: 570, y: 52, radius: 55, z: 65, strength: 0.3 },
  { x: 524, y: 23, radius: 17, z: 65.5, strength: 0.32 },
  { x: 615, y: 23, radius: 17, z: 65.5, strength: 0.32 },
  { x: 23, y: 260, radius: 17, z: 299, strength: 0.32 },
  { x: 67, y: 260, radius: 17, z: 299, strength: 0.32 },
  { x: 172, y: 260, radius: 17, z: 299, strength: 0.32 },
  { x: 238, y: 260, radius: 17, z: 299, strength: 0.32 },
  { x: 421, y: 260, radius: 17, z: 299, strength: 0.32 },
  { x: 501, y: 260, radius: 17, z: 299, strength: 0.32 },
  { x: 650, y: 286, radius: 23, z: 319.5, strength: 0.32 },
  { x: 520, y: 351, radius: 23, z: 384.5, strength: 0.32 },
];

/** Room name plaques on the walls. */
export const PLAQUES: readonly Plaque[] = [
  { text: 'Lead/PM room', x: 8, y: 1.5, width: 192 },
  { text: 'Great hall', x: 208, y: 1.5, width: 256 },
  { text: 'Rest room', x: 472, y: 1.5, width: 192 },
  { text: 'Dev room', x: 75, y: 254, width: 90 },
];

/** Top-left corner of each agent's workstation. */
export const STATION_SPOTS: readonly StationSpot[] = [
  { agent: 'lead', x: 59, y: 95 },
  { agent: 'designer', x: 75, y: 310 },
  { agent: 'frontend', x: 194, y: 310 },
  { agent: 'backend', x: 371, y: 310 },
  { agent: 'reviewer', x: 540, y: 320 },
];
