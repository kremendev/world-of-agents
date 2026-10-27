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

export function pixelScale(
  artWidth: number,
  artHeight: number,
  wantedCssPixelsPerArtPixel: number,
  devicePixelRatio: number,
): PixelScale {
  const dpr = Number.isFinite(devicePixelRatio) && devicePixelRatio > 0 ? devicePixelRatio : 1;
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
