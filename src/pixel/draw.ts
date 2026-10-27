import { spriteSize, toRuns, type PixelSprite } from './sprite';

const baked = new WeakMap<PixelSprite, HTMLCanvasElement>();

/** Renders a sprite once at 1 pixel per art pixel and caches it. Later draws are a single drawImage. */
export function bakeSprite(sprite: PixelSprite): HTMLCanvasElement | null {
  const cached = baked.get(sprite);
  if (cached) return cached;

  const { width, height } = spriteSize(sprite);
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  for (const run of toRuns(sprite)) {
    ctx.fillStyle = run.color;
    ctx.fillRect(run.x, run.y, run.length, 1);
  }
  baked.set(sprite, canvas);
  return canvas;
}

/**
 * Draws a sprite at art-pixel coordinates (x, y). The context must already be scaled
 * so that 1 unit = 1 art pixel; see HallView.
 */
export function drawSprite(ctx: CanvasRenderingContext2D, sprite: PixelSprite, x: number, y: number): void {
  const image = bakeSprite(sprite);
  if (!image) return;
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(image, Math.round(x), Math.round(y));
}
