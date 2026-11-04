import { describe, expect, it } from 'vitest';
import { fitPixelScale, pixelScale, type PixelScale } from './scale';

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

describe('fitPixelScale', () => {
  const fit = (width: number, height: number, dpr = 1) => fitPixelScale(672, 480, width, height, dpr);
  const filled = (s: PixelScale, u: number) => {
    expect(s.cssWidth).toBeCloseTo(672 * u);
    expect(s.cssHeight).toBeCloseTo(480 * u);
  };

  it('fits both: whichever of width and height runs out first', () => {
    filled(fit(2000, 592), 592 / 480);
    filled(fit(800, 2000), 800 / 672);
  });

  it('never picks a sharp scale too big to fit, however close', () => {
    const s = fit(2000, 904); // 1.883 CSS px per art px: x2 would be 960 tall
    expect(s.devicePixelsPerArtPixel).toBe(1);
    filled(s, 904 / 480);
  });

  it('uses a sharp scale within 15% of the largest that fits', () => {
    const s = fit(2000, 1040); // 2.17: x2 is 92% of it
    expect(s.devicePixelsPerArtPixel).toBe(2);
    expect(s.cssWidth).toBe(1344);
    expect(s.cssHeight).toBe(960);
  });

  it('keeps the largest that fits when the sharp one is more than 15% smaller', () => {
    const s = fit(2000, 1200); // 2.5: x2 is only 80% of it
    expect(s.devicePixelsPerArtPixel).toBe(2);
    expect(s.canvasWidth).toBe(1344);
    filled(s, 2.5);
  });

  it('treats exactly 15% as within, and a little more as not', () => {
    expect(fit(5000, 480 * (2 / 0.85)).cssWidth).toBe(1344);
    filled(fit(5000, 480 * 2.36), 2.36);
  });

  it('fills instead of a sharp x1, even within 15%', () => {
    const s = fit(2000, 528); // 1.1: x1 is 91% of it
    expect(s.devicePixelsPerArtPixel).toBe(1);
    expect(s.canvasWidth).toBe(672);
    filled(s, 1.1);
  });

  it('fills instead of x1 at 2 device px per CSS px as well: 1 CSS px per art px is what is too small', () => {
    const s = fit(2000, 480 * 1.05, 2);
    expect(s.devicePixelsPerArtPixel).toBe(2);
    filled(s, 1.05);
  });

  it.each([
    // CSS px per art px that fits, devicePixelRatio, device px per art px, CSS px per art px used
    [1.7, 1.25, 2, 1.6], // Windows at 125%: sharp
    [1.18, 1.5, 1, 1.18], // 1920x1080 at 150% zoom: the sharp one is under 1, so fill
    [1.4, 1.5, 2, 2 / 1.5], // sharp
    [1.6, 2, 3, 1.5], // sharp
    [2.5, 1.25, 3, 2.4], // sharp
  ])('fits %s at devicePixelRatio %s: %s device px per art px, %s CSS px', (u, dpr, per, used) => {
    const s = fit(5000, 480 * u, dpr);
    expect(s.devicePixelsPerArtPixel).toBe(per);
    filled(s, used);
  });

  it.each([
    [1366, 768],
    [1920, 1080],
    [683, 384],
    [320, 200],
    [100, 80],
  ])('the whole hall always fits %s x %s, at any devicePixelRatio', (width, height) => {
    for (const dpr of [1, 1.25, 1.5, 2, 3]) {
      const s = fit(width, height, dpr);
      expect(s.cssWidth).toBeLessThanOrEqual(width + 1e-3);
      expect(s.cssHeight).toBeLessThanOrEqual(height + 1e-3);
      expect(Number.isInteger(s.devicePixelsPerArtPixel)).toBe(true);
    }
  });

  it('survives a bad devicePixelRatio', () => {
    expect(fit(2000, 1040, Number.NaN).devicePixelsPerArtPixel).toBe(2);
    expect(fit(2000, 1040, 0).devicePixelsPerArtPixel).toBe(2);
  });
});
