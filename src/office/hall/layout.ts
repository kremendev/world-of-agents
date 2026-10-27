import { ROSTER } from '../roster';
import { buildStation, type Station } from '../stations';
import { STATION_SPOTS } from './placements';

/** The Forge Hall in art pixels. At the usual 2x scale this is the 1344 x 960 design. */
export const HALL = { width: 672, height: 480 } as const;

export type Rect = { x: number; y: number; w: number; h: number };

/** Floor area of each room. The great hall also runs down through the doorway into the dev room. */
export const ROOMS = {
  lead: { x: 8, y: 64, w: 192, h: 180 },
  hall: { x: 208, y: 64, w: 256, h: 180 },
  rest: { x: 472, y: 64, w: 192, h: 180 },
  dev: { x: 8, y: 298, w: 656, h: 174 },
} as const satisfies Record<string, Rect>;

export const DOORWAY = { x: 308, y: 244, w: 56, h: 54 } as const satisfies Rect;

/** The furnace in the great hall: it glows brighter the more agents are working. */
export const FURNACE = { x: 214, y: 8, w: 80, h: 56 } as const satisfies Rect;

/** The furnace mouth, inside its dark frame: the part whose colour shows how busy the hall is. */
export const FURNACE_MOUTH = { x: 236, y: 33, w: 36, h: 23 } as const satisfies Rect;

/** The wall dashboard in the Lead/PM room. */
export const DASHBOARD = { x: 52, y: 14, w: 108, h: 47 } as const satisfies Rect;

/** The "You" sign over the entrance gate, where new tasks arrive. */
export const YOU_SIGN = { x: 324, y: 32, w: 24 } as const;

/** Every agent's workstation, placed where the v1 design puts it. */
export function hallStations(): Station[] {
  return STATION_SPOTS.map((spot) => {
    const agent = ROSTER.find((a) => a.id === spot.agent);
    if (!agent) throw new Error(`No agent in the roster for station "${spot.agent}"`);
    return buildStation(agent, spot.x, spot.y);
  });
}
