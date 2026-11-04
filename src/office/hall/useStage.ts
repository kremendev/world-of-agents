import { useLayoutEffect, useRef, useState } from 'react';
import { HALL } from './layout';

/** The room the hall has, in CSS px, and whether the activity column goes under it instead of beside it. */
export type StageFit = { width: number; height: number; stacked: boolean };

// Keep in step with .feed and .scene in index.css.
const FEED_MIN_REM = 20;
const SCENE_BORDERS = 4;
/** The page scrolls in a window too short even for this, rather than shrink the hall to nothing. */
const MIN_HALL_HEIGHT = 200;
/** Stack when having the activity beside it would make the hall this much smaller than it could be. */
const STACK_BELOW = 0.85;

/** `height` is what the first screen leaves for the stage: the whole hall must fit in it. */
export function stageFit(stageWidth: number, height: number, feedMin: number, gap: number): StageFit {
  const hallHeight = Math.max(height - SCENE_BORDERS, MIN_HALL_HEIGHT);
  const alone = stageWidth - SCENE_BORDERS;
  const beside = alone - gap - feedMin;
  const scale = (width: number) => Math.min(width / HALL.width, hallHeight / HALL.height);
  const stacked = scale(beside) < scale(alone) * STACK_BELOW;
  return { width: stacked ? alone : beside, height: hallHeight, stacked };
}

const sameFit = (a: StageFit | null, b: StageFit) =>
  a?.width === b.width && a.height === b.height && a.stacked === b.stacked;

/** Measures the stage: its width, and what the window leaves under whatever is above it. Null until measured. */
export function useStage() {
  const ref = useRef<HTMLDivElement>(null);
  const [fit, setFit] = useState<StageFit | null>(null);

  // Before paint, so the hall never shows at the wrong size.
  useLayoutEffect(() => {
    const stage = ref.current;
    if (!stage || typeof ResizeObserver === 'undefined') return;
    const page = stage.parentElement ?? stage;
    const measure = () => {
      const top = stage.getBoundingClientRect().top + window.scrollY;
      const pageBottom = parseFloat(getComputedStyle(page).paddingBottom) || 0;
      const gap = parseFloat(getComputedStyle(stage).columnGap) || 0;
      const rem = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
      const next = stageFit(
        stage.clientWidth,
        window.innerHeight - top - pageBottom,
        FEED_MIN_REM * rem,
        gap,
      );
      setFit((current) => (sameFit(current, next) ? current : next));
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(stage);
    // The header can wrap onto another row, which moves the stage down.
    observer.observe(page);
    window.addEventListener('resize', measure);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  return { ref, fit };
}
