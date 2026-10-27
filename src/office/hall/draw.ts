import { KEYBOARD, KEYBOARD_LARGE } from '../../assets/workstation';
import type { AgentState } from '../../events/schema';
import { drawSprite } from '../../pixel/draw';
import { spriteSize } from '../../pixel/sprite';
import type { Agent } from '../roster';
import type { Station } from '../stations';
import { HALOS, PROPS, type Halo } from './placements';
import { surfaces, type Drawable } from './surfaces';
import type { Point } from './walk';

/** Floors, the back wall and rugs (z <= FLOOR_Z) never change, so HallView draws them once into a cache. */
export const FLOOR_Z = 1;

function drawHalo(ctx: CanvasRenderingContext2D, h: Halo): void {
  const g = ctx.createRadialGradient(h.x, h.y, 0, h.x, h.y, h.radius);
  g.addColorStop(0, `rgba(255, 160, 80, ${h.strength})`);
  g.addColorStop(0.45, `rgba(255, 120, 50, ${(h.strength / 3).toFixed(3)})`);
  g.addColorStop(0.7, 'rgba(255, 120, 50, 0)');
  ctx.fillStyle = g;
  ctx.fillRect(h.x - h.radius, h.y - h.radius, h.radius * 2, h.radius * 2);
}

const byZ = (a: Drawable, b: Drawable) => a.z - b.z;

/**
 * Everything in the hall that never moves, sorted back to front. Sorting is stable, so things with the
 * same z keep the order they were listed in: surfaces, then halos, then props.
 */
export function sceneryDrawables(): Drawable[] {
  const items: Drawable[] = [
    ...surfaces(),
    ...HALOS.map((h) => ({ z: h.z, draw: (ctx: CanvasRenderingContext2D) => drawHalo(ctx, h) })),
    ...PROPS.map((p) => ({
      z: p.z,
      draw: (ctx: CanvasRenderingContext2D) => drawSprite(ctx, p.sprite, p.x, p.y),
    })),
  ];
  return items.sort(byZ);
}

/**
 * A workstation in two parts, so a seated agent (drawn on its own, z = feet) lands between them:
 * the chair (z = chair top) behind it, and desk, PC, keyboard and desk prop (z = desk bottom) in front.
 * `keyboardDx` shakes the keyboard while an orc smashes it.
 */
export function stationDrawables(station: Station, keyboardDx = 0): Drawable[] {
  // pieces[1] marks where the agent sits; agents are drawn on their own now.
  const [chair, , ...front] = station.pieces;
  const parts: Drawable[] = [];
  if (chair) parts.push({ z: chair.y, draw: (ctx) => drawSprite(ctx, chair.sprite, chair.x, chair.y) });
  parts.push({
    z: station.z,
    draw: (ctx) => {
      for (const p of front) {
        const dx = p.sprite === KEYBOARD || p.sprite === KEYBOARD_LARGE ? keyboardDx : 0;
        drawSprite(ctx, p.sprite, p.x + dx, p.y);
      }
    },
  });
  return parts;
}

/** An agent with its feet at `feet`, nudged by `offset` for hops, bobs and jitter. z = feet y. */
export function agentDrawable(agent: Agent, feet: Point, offset: Point = { x: 0, y: 0 }): Drawable {
  const { width, height } = spriteSize(agent.sprite);
  return {
    z: feet.y,
    draw: (ctx) =>
      drawSprite(ctx, agent.sprite, feet.x - Math.floor(width / 2) + offset.x, feet.y - height + offset.y),
  };
}

/** What an agent is doing with its body this frame. */
export type Activity = 'walking' | 'smashing' | 'busy' | 'still';

const BUSY: ReadonlySet<AgentState> = new Set(['thinking', 'reading', 'writing']);

export function activityOf(agent: Agent, state: AgentState, walking: boolean, seated: boolean): Activity {
  if (walking) return 'walking';
  if (seated && state === 'writing' && agent.race === 'Orc') return 'smashing';
  return BUSY.has(state) ? 'busy' : 'still';
}

export type Motion = { dx: number; dy: number; keyboardDx: number };
const STILL: Motion = { dx: 0, dy: 0, keyboardDx: 0 };

/** True for every other `ms`-long slice of time: drives the 1px hops, bobs and shakes. */
const flip = (now: number, ms: number) => Math.floor(now / ms) % 2 === 1;

/**
 * Pixel offsets for this frame. Walking hops 1px every 150 ms; a smashing orc jitters and shakes its
 * keyboard; busy agents bob 1px. With reduced motion nothing moves on the spot.
 */
export function motion(activity: Activity, now: number, reducedMotion: boolean): Motion {
  if (reducedMotion) return STILL;
  switch (activity) {
    case 'walking':
      return { ...STILL, dy: flip(now, 150) ? -1 : 0 };
    case 'smashing':
      return { dx: flip(now, 70) ? 1 : 0, dy: 0, keyboardDx: flip(now, 50) ? 1 : -1 };
    case 'busy':
      return { ...STILL, dy: flip(now, 500) ? -1 : 0 };
    case 'still':
      return STILL;
  }
}

/** Draws drawables in z order. The context must be scaled so 1 unit = 1 art pixel. */
export function drawHall(ctx: CanvasRenderingContext2D, drawables: readonly Drawable[]): void {
  ctx.imageSmoothingEnabled = false;
  for (const d of [...drawables].sort(byZ)) d.draw(ctx);
}

/** Draws the floor layer once into an off-screen canvas the size of the real one. */
export function bakeFloor(
  floor: readonly Drawable[],
  devicePixelsPerArtPixel: number,
  width: number,
  height: number,
): HTMLCanvasElement | null {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;
  ctx.setTransform(devicePixelsPerArtPixel, 0, 0, devicePixelsPerArtPixel, 0, 0);
  drawHall(ctx, floor);
  return canvas;
}
