import { KEYBOARD, KEYBOARD_LARGE } from '../../assets/workstation';
import type { AgentState } from '../../events/schema';
import { drawSprite } from '../../pixel/draw';
import { spriteSize } from '../../pixel/sprite';
import type { Agent } from '../roster';
import type { Station } from '../stations';
import { FURNACE_MOUTH } from './layout';
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

/** One flicker cycle: opacity steps 1 → 0.9 → 0.8, then starts again. */
const FLICKER_MS = 1100;
const FLICKER_STEPS = 3;

/** Opacity of a light at `now`. `phase` offsets it so lights don't pulse in sync. Reduced motion: always 1. */
export function flickerAlpha(now: number, phase: number, reducedMotion: boolean): number {
  if (reducedMotion) return 1;
  const t = (((now + phase) % FLICKER_MS) + FLICKER_MS) % FLICKER_MS;
  const step = Math.floor(t / (FLICKER_MS / FLICKER_STEPS));
  return 1 - (0.2 * step) / (FLICKER_STEPS - 1);
}

/** Spreads the i-th light's phase over the cycle by the golden ratio, so neighbours rarely match. */
export const lightPhase = (i: number) => Math.floor(((i * 0.618034) % 1) * FLICKER_MS);

/** Runs `draw` at opacity `alpha`, then puts the opacity back to 1. */
function dimmed(ctx: CanvasRenderingContext2D, alpha: number, draw: () => void): void {
  ctx.globalAlpha = alpha;
  draw();
  ctx.globalAlpha = 1;
}

/**
 * Everything in the hall that never moves, sorted back to front. Sorting is stable, so things with the
 * same z keep the order they were listed in: surfaces, then halos, then props.
 * Lights (every halo, and props marked `flicker`) ask `lightAlpha(phase)` for their opacity on each draw.
 */
export function sceneryDrawables(lightAlpha: (phase: number) => number = () => 1): Drawable[] {
  let lights = 0;
  const items: Drawable[] = [
    ...surfaces(),
    ...HALOS.map((h) => {
      const phase = lightPhase(lights++);
      return {
        z: h.z,
        draw: (ctx: CanvasRenderingContext2D) => dimmed(ctx, lightAlpha(phase), () => drawHalo(ctx, h)),
      };
    }),
    ...PROPS.map((p) => {
      if (!p.flicker)
        return { z: p.z, draw: (ctx: CanvasRenderingContext2D) => drawSprite(ctx, p.sprite, p.x, p.y) };
      const phase = lightPhase(lights++);
      return {
        z: p.z,
        draw: (ctx: CanvasRenderingContext2D) =>
          dimmed(ctx, lightAlpha(phase), () => drawSprite(ctx, p.sprite, p.x, p.y)),
      };
    }),
  ];
  return items.sort(byZ);
}

/** How the furnace mouth looks with `working` agents busy: its fill, and the glow around it (none when cold). */
type FurnaceGlow = { spread: number; blur: number; strength: number };

/**
 * How the furnace mouth looks with `working` agents busy: its fill, and the glow around it (none when cold).
 * The glow is measured from the mouth's edge, like the design's CSS box-shadow: a solid `spread`, then a
 * fade of `blur` (art px), both growing up to four workers.
 */
export function furnaceLook(working: number): { fill: string; glow: FurnaceGlow | null } {
  if (working <= 0) return { fill: '#5a2a10', glow: null };
  const n = Math.min(working, 4);
  return {
    fill: working === 1 ? '#f08a3c' : '#ffb15a',
    glow: { spread: 1 + 2 * n, blur: 7 + 6 * n, strength: 0.3 + 0.15 * n },
  };
}

/** The furnace glow's flicker phase: the one after every scenery light's, so it gets its own. */
const FURNACE_PHASE = lightPhase(HALOS.length + PROPS.filter((p) => p.flicker).length);

/** How far left the glow's box is drawn (art px): off the canvas, so only its shadow shows. */
const OFFSTAGE = 1000;

/**
 * The glow as `box-shadow: 0 0 <blur> <spread>` on the mouth: the mouth grown by `spread` on every side,
 * blurred over `blur`. Only the shadow is drawn: the box sits OFFSTAGE and its shadow is shifted back.
 * Shadows ignore the canvas transform, so their blur and offset are in device pixels (`per` per art px).
 */
function drawGlow(ctx: CanvasRenderingContext2D, { spread, blur, strength }: FurnaceGlow, per: number): void {
  const m = FURNACE_MOUTH;
  ctx.shadowColor = `rgba(240, 138, 60, ${strength.toFixed(2)})`;
  ctx.shadowBlur = blur * per;
  ctx.shadowOffsetX = OFFSTAGE * per;
  ctx.fillStyle = '#000';
  ctx.fillRect(m.x - spread - OFFSTAGE, m.y - spread, m.w + 2 * spread, m.h + 2 * spread);
  ctx.shadowColor = 'rgba(0, 0, 0, 0)';
  ctx.shadowBlur = 0;
  ctx.shadowOffsetX = 0;
}

/**
 * The furnace mouth and its glow, drawn just above the furnace body (z 65.5), glow under the mouth.
 * `per` is device pixels per art pixel. The glow flickers like every halo (`lightAlpha`). The mouth's
 * colour never does: it is information, not decoration.
 */
export function furnaceDrawables(
  working: number,
  per: number,
  lightAlpha: (phase: number) => number = () => 1,
): Drawable[] {
  const { fill, glow } = furnaceLook(working);
  const m = FURNACE_MOUTH;
  const items: Drawable[] = [];
  if (glow) {
    items.push({
      z: 65.52,
      draw: (ctx) => dimmed(ctx, lightAlpha(FURNACE_PHASE), () => drawGlow(ctx, glow, per)),
    });
  }
  items.push({
    z: 65.54,
    draw: (ctx) => {
      ctx.fillStyle = fill;
      ctx.fillRect(m.x, m.y, m.w, m.h);
    },
  });
  return items;
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
