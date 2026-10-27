import { describe, expect, it } from 'vitest';
import { pixelScale } from './scale';

describe('pixelScale', () => {
  it.each([
    // dpr, device pixels per art pixel at a target of 2 CSS px
    [1, 2],
    [1.25, 2], // 2.5 would blur, so round down to 2
    [1.5, 3],
    [2, 4],
    [3, 6],
  ])('at devicePixelRatio %s uses %s whole device pixels per art pixel', (dpr, expected) => {
    const s = pixelScale(100, 50, 2, dpr);
    expect(s.devicePixelsPerArtPixel).toBe(expected);
    expect(Number.isInteger(s.devicePixelsPerArtPixel)).toBe(true);
    expect(s.canvasWidth).toBe(100 * expected);
    expect(s.canvasHeight).toBe(50 * expected);
    expect(s.cssWidth).toBeCloseTo((100 * expected) / dpr);
  });

  it('treats a broken devicePixelRatio as 1', () => {
    expect(pixelScale(10, 10, 2, 0).devicePixelsPerArtPixel).toBe(2);
    expect(pixelScale(10, 10, 2, Number.NaN).devicePixelsPerArtPixel).toBe(2);
  });

  it('never goes below 1 device pixel per art pixel', () => {
    expect(pixelScale(10, 10, 0.25, 1).devicePixelsPerArtPixel).toBe(1);
  });
});
