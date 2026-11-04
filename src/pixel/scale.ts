/**
 * Picks a canvas scale that keeps pixel art crisp on any screen.
 *
 * Windows laptops often run at 125% or 150% display scaling (devicePixelRatio 1.25 / 1.5).
 * Drawing each art pixel as 2 CSS pixels there gives 2.5 device pixels per art pixel,
 * and the browser blurs the half pixels. So we scale in DEVICE pixels instead:
 * every art pixel becomes a whole number of device pixels, and the CSS size follows from that.
 */
export type PixelScale = {
  /** Device pixels per art pixel. Always a whole number of at least 1. */
  devicePixelsPerArtPixel: number;
  /** Canvas backing-store size in device pixels. */
  canvasWidth: number;
  canvasHeight: number;
  /** Size to give the canvas element in CSS pixels. */
  cssWidth: number;
  cssHeight: number;
};

const usableRatio = (dpr: number) => (Number.isFinite(dpr) && dpr > 0 ? dpr : 1);

export function pixelScale(
  artWidth: number,
  artHeight: number,
  wantedCssPixelsPerArtPixel: number,
  devicePixelRatio: number,
): PixelScale {
  const dpr = usableRatio(devicePixelRatio);
  const per = Math.max(1, Math.floor(wantedCssPixelsPerArtPixel * dpr + 1e-6));
  const canvasWidth = artWidth * per;
  const canvasHeight = artHeight * per;
  return {
    devicePixelsPerArtPixel: per,
    canvasWidth,
    canvasHeight,
    cssWidth: canvasWidth / dpr,
    cssHeight: canvasHeight / dpr,
  };
}

/** How much smaller than the largest that fits a sharp scale may be, and still be worth it. */
export const SHARP_WITHIN = 0.15;

/**
 * The biggest picture that fits both `availableCssWidth` and `availableCssHeight`. If a sharp scale is within
 * SHARP_WITHIN of it, the sharp one. Otherwise, or if that would only be 1 CSS px per art px, the canvas is stretched
 * to fill instead: a tiny hall is the worse evil. It then needs `image-rendering: pixelated`, and its pixels come out
 * slightly uneven.
 */
export function fitPixelScale(
  artWidth: number,
  artHeight: number,
  availableCssWidth: number,
  availableCssHeight: number,
  devicePixelRatio: number,
): PixelScale {
  const fit = Math.min(availableCssWidth / artWidth, availableCssHeight / artHeight);
  const sharp = pixelScale(artWidth, artHeight, fit, usableRatio(devicePixelRatio));
  const sharpFit = sharp.cssWidth / artWidth;
  if (sharpFit > 1 && sharpFit >= fit * (1 - SHARP_WITHIN)) return sharp;
  return { ...sharp, cssWidth: fit * artWidth, cssHeight: fit * artHeight };
}
