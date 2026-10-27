import { DOORWAY, FURNACE, HALL, ROOMS, type Rect } from './layout';

/** Something drawn in the hall. Lower z is drawn first, so higher z sits in front. */
export type Drawable = { z: number; draw: (ctx: CanvasRenderingContext2D) => void };

const C = {
  outline: '#15100c',
  edge: '#1a1410',
  wallTop: '#4a423c',
  brick: '#2e2620',
  mortar: '#231d18',
  wood: '#5a3420',
};

function rect(ctx: CanvasRenderingContext2D, r: Rect, color: string): void {
  ctx.fillStyle = color;
  ctx.fillRect(r.x, r.y, r.w, r.h);
}

/** A filled block with a 1px outline on the chosen sides. */
function block(
  ctx: CanvasRenderingContext2D,
  r: Rect,
  fill: string,
  sides: { top?: boolean; right?: boolean; bottom?: boolean; left?: boolean },
): void {
  rect(ctx, r, fill);
  ctx.fillStyle = C.outline;
  if (sides.top) ctx.fillRect(r.x, r.y, r.w, 1);
  if (sides.bottom) ctx.fillRect(r.x, r.y + r.h - 1, r.w, 1);
  if (sides.left) ctx.fillRect(r.x, r.y, 1, r.h);
  if (sides.right) ctx.fillRect(r.x + r.w - 1, r.y, 1, r.h);
}

/** Wooden floor planks: a seam every `rowEvery` rows, plank ends every `colEvery` columns. */
function planks(ctx: CanvasRenderingContext2D, r: Rect, base: string, seam: string, colEvery: number): void {
  rect(ctx, r, base);
  ctx.fillStyle = seam;
  for (let y = r.y; y < r.y + r.h; y += 10) {
    ctx.fillRect(r.x, y, r.w, 1);
    const offset = ((y - r.y) / 10) % 2 === 0 ? 0 : colEvery / 2;
    for (let x = r.x + offset; x < r.x + r.w; x += colEvery)
      ctx.fillRect(x, y, 1, Math.min(10, r.y + r.h - y));
  }
}

/** Stone checkerboard of 16px tiles. */
function checker(ctx: CanvasRenderingContext2D, r: Rect): void {
  for (let y = r.y; y < r.y + r.h; y += 16) {
    for (let x = r.x; x < r.x + r.w; x += 16) {
      ctx.fillStyle = ((x - r.x) / 16 + (y - r.y) / 16) % 2 === 0 ? '#40362e' : '#352c25';
      ctx.fillRect(x, y, Math.min(16, r.x + r.w - x), Math.min(16, r.y + r.h - y));
    }
  }
}

/** Flagstones: a grid of 24px slabs. */
function flagstones(ctx: CanvasRenderingContext2D, r: Rect): void {
  rect(ctx, r, '#2f2b28');
  ctx.fillStyle = '#262320';
  for (let y = r.y; y < r.y + r.h; y += 24) ctx.fillRect(r.x, y, r.w, 1);
  for (let x = r.x; x < r.x + r.w; x += 24) ctx.fillRect(x, r.y, 1, r.h);
}

/** Staggered brick wall. */
function bricks(ctx: CanvasRenderingContext2D, r: Rect): void {
  rect(ctx, r, C.brick);
  ctx.fillStyle = C.mortar;
  for (let y = r.y; y < r.y + r.h; y += 12) {
    ctx.fillRect(r.x, y, r.w, 1);
    const offset = ((y - r.y) / 12) % 2 === 0 ? 0 : 12;
    for (let x = r.x + offset; x < r.x + r.w; x += 24) ctx.fillRect(x, y, 1, Math.min(12, r.y + r.h - y));
  }
}

/** A rug with an outer edge, a bone-coloured ring and an inner trim, then its pattern. */
function rug(
  ctx: CanvasRenderingContext2D,
  r: Rect,
  colors: { edge: string; ring: string; base: string; trim: string },
  pattern: (x: number, y: number) => boolean,
  patternColor: string,
): void {
  rect(ctx, r, colors.edge);
  rect(ctx, { x: r.x + 2, y: r.y + 2, w: r.w - 4, h: r.h - 4 }, colors.ring);
  rect(ctx, { x: r.x + 3, y: r.y + 3, w: r.w - 6, h: r.h - 6 }, colors.base);
  const inner = { x: r.x + 5, y: r.y + 5, w: r.w - 10, h: r.h - 10 };
  rect(ctx, inner, colors.trim);
  rect(ctx, { x: inner.x + 1, y: inner.y + 1, w: inner.w - 2, h: inner.h - 2 }, colors.base);
  ctx.fillStyle = patternColor;
  for (let y = inner.y + 1; y < inner.y + inner.h - 1; y++) {
    for (let x = inner.x + 1; x < inner.x + inner.w - 1; x++) {
      if (pattern(x - inner.x, y - inner.y)) ctx.fillRect(x, y, 1, 1);
    }
  }
}

/** The long red carpet from the gate, through the great hall, into the dev room. */
function runner(ctx: CanvasRenderingContext2D): void {
  const r = { x: 320, y: 64, w: 32, h: 386 };
  rect(ctx, r, '#8b1e1e');
  ctx.fillStyle = '#5e1414';
  for (let y = r.y + 11; y < r.y + r.h; y += 13) ctx.fillRect(r.x, y, r.w, 2);
  rect(ctx, { x: r.x, y: r.y, w: 2, h: r.h }, '#2a1a12');
  rect(ctx, { x: r.x + r.w - 2, y: r.y, w: 2, h: r.h }, '#2a1a12');
  rect(ctx, { x: r.x + 2, y: r.y, w: 1, h: r.h }, '#d9cdb4');
  rect(ctx, { x: r.x + r.w - 3, y: r.y, w: 1, h: r.h }, '#d9cdb4');
}

/** The back wall: stone cap, bricks, dark footing. */
function backWall(ctx: CanvasRenderingContext2D): void {
  bricks(ctx, { x: 0, y: 6, w: HALL.width, h: 55 });
  rect(ctx, { x: 0, y: 0, w: HALL.width, h: 5 }, C.wallTop);
  rect(ctx, { x: 0, y: 5, w: HALL.width, h: 1 }, C.outline);
  rect(ctx, { x: 0, y: 61, w: HALL.width, h: 3 }, C.edge);
}

/** Furnace body. Its label and the busy glow of its mouth come from the page around the canvas. */
function furnace(ctx: CanvasRenderingContext2D): void {
  const f = FURNACE;
  rect(ctx, f, C.edge);
  const inner = { x: f.x + 3, y: f.y + 3, w: f.w - 6, h: f.h - 6 };
  rect(ctx, inner, '#3d3630');
  ctx.fillStyle = '#2a241f';
  for (let y = inner.y + 7; y < inner.y + inner.h; y += 8) ctx.fillRect(inner.x, y, inner.w, 1);
  for (let x = inner.x + 15; x < inner.x + inner.w; x += 16) ctx.fillRect(x, inner.y, 1, inner.h);
  rect(ctx, { x: inner.x, y: inner.y, w: inner.w, h: 3 }, '#5e1414');
  // The mouth, cold for now: the event script will make it glow.
  rect(ctx, { x: 234, y: 31, w: 40, h: 27 }, C.edge);
  rect(ctx, { x: 236, y: 33, w: 36, h: 23 }, '#5a2a10');
}

/** Wall between two top rooms, with a door gap from y 186 to 219. */
function sideWall(x: number): Drawable[] {
  return [
    {
      z: 186,
      draw: (ctx) =>
        block(ctx, { x, y: 0, w: 8, h: 186 }, C.wallTop, { left: true, right: true, bottom: true }),
    },
    {
      z: 186.5,
      draw: (ctx) =>
        block(ctx, { x: x - 2, y: 182, w: 12, h: 5 }, C.wood, {
          top: true,
          right: true,
          bottom: true,
          left: true,
        }),
    },
    {
      z: 244,
      draw: (ctx) =>
        block(ctx, { x, y: 220, w: 8, h: 24 }, C.wallTop, { left: true, right: true, top: true }),
    },
    {
      z: 244.5,
      draw: (ctx) =>
        block(ctx, { x: x - 2, y: 219, w: 12, h: 5 }, C.wood, {
          top: true,
          right: true,
          bottom: true,
          left: true,
        }),
    },
  ];
}

/** The wall between the top rooms and the dev room, with the doorway in the middle. */
function devWall(x0: number, x1: number): Drawable[] {
  return [
    {
      z: 298,
      draw: (ctx) => {
        bricks(ctx, { x: x0, y: 250, w: x1 - x0, h: 45 });
        rect(ctx, { x: x0, y: 295, w: x1 - x0, h: 3 }, C.edge);
      },
    },
    {
      z: 298.5,
      draw: (ctx) => block(ctx, { x: x0, y: 244, w: x1 - x0, h: 6 }, C.wallTop, { top: true, bottom: true }),
    },
  ];
}

/** Floors, walls, rugs and the furnace: everything in the hall that is not a sprite. */
export function surfaces(): Drawable[] {
  return [
    { z: 0, draw: (ctx) => planks(ctx, ROOMS.lead, '#3a2418', '#2a1a12', 48) },
    { z: 0, draw: (ctx) => checker(ctx, ROOMS.hall) },
    { z: 0, draw: (ctx) => checker(ctx, DOORWAY) },
    { z: 0, draw: (ctx) => planks(ctx, ROOMS.rest, '#5a3d24', '#45301c', 60) },
    { z: 0, draw: (ctx) => flagstones(ctx, ROOMS.dev) },
    { z: 0.5, draw: backWall },
    {
      z: 1,
      draw: (ctx) =>
        rug(
          ctx,
          { x: 44, y: 111, w: 120, h: 52 },
          { edge: '#2a1a12', ring: '#d9cdb4', base: '#6a1612', trim: '#8b1e1e' },
          (x, y) => (x + y) % 7 === 0 || (x - y + 700) % 7 === 0,
          '#5e1414',
        ),
    },
    { z: 1, draw: runner },
    {
      z: 1,
      draw: (ctx) =>
        rug(
          ctx,
          { x: 520, y: 326, w: 138, h: 80 },
          { edge: '#2a1a12', ring: '#a89a7e', base: '#4a2a1a', trim: '#6a1612' },
          (x) => x % 10 === 9,
          '#3a2014',
        ),
    },
    { z: 65.5, draw: furnace },
    ...sideWall(200),
    ...sideWall(464),
    ...devWall(8, 308),
    ...devWall(364, 664),
    {
      z: 299,
      draw: (ctx) =>
        block(ctx, { x: 433, y: 281, w: 62, h: 5 }, C.wood, {
          top: true,
          right: true,
          bottom: true,
          left: true,
        }),
    },
    { z: 480, draw: (ctx) => block(ctx, { x: 0, y: 0, w: 8, h: HALL.height }, C.wallTop, { right: true }) },
    { z: 480, draw: (ctx) => block(ctx, { x: 664, y: 0, w: 8, h: HALL.height }, C.wallTop, { left: true }) },
    { z: 480.5, draw: (ctx) => block(ctx, { x: 0, y: 472, w: HALL.width, h: 8 }, C.wallTop, { top: true }) },
  ];
}
