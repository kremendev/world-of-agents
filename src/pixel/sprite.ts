/**
 * Pixel sprites are stored as text: one string per row, one character per pixel.
 * '.' is transparent; any other character is a key into the palette.
 */
export type PixelSprite = {
  readonly rows: readonly string[];
  readonly palette: Readonly<Record<string, string>>;
};

export const TRANSPARENT = '.';

export function spriteSize(sprite: PixelSprite): { width: number; height: number } {
  return { width: sprite.rows[0]?.length ?? 0, height: sprite.rows.length };
}

/** Problems that would make a sprite draw wrong. An empty list means the sprite is fine. */
export function validateSprite(sprite: PixelSprite): string[] {
  const problems: string[] = [];
  const { width } = spriteSize(sprite);
  if (sprite.rows.length === 0 || width === 0) {
    problems.push('sprite is empty');
  }
  sprite.rows.forEach((row, y) => {
    if (row.length !== width) {
      problems.push(`row ${y} is ${row.length} wide, expected ${width}`);
    }
    for (const key of row) {
      if (key !== TRANSPARENT && !(key in sprite.palette)) {
        problems.push(`row ${y} uses '${key}' which has no colour`);
      }
    }
  });
  return problems;
}

/** One horizontal run of same-coloured pixels: the unit we draw with fillRect. */
export type PixelRun = { x: number; y: number; length: number; color: string };

/** Turns rows into runs, so drawing a 32x36 sprite takes a few hundred fillRects instead of 1152. */
export function toRuns(sprite: PixelSprite): PixelRun[] {
  const runs: PixelRun[] = [];
  sprite.rows.forEach((row, y) => {
    let x = 0;
    while (x < row.length) {
      const key = row[x] ?? TRANSPARENT;
      let end = x + 1;
      while (end < row.length && row[end] === key) end++;
      const color = sprite.palette[key];
      if (key !== TRANSPARENT && color) {
        runs.push({ x, y, length: end - x, color });
      }
      x = end;
    }
  });
  return runs;
}
