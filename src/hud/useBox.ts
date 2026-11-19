import { useLayoutEffect, useState, type RefObject } from 'react';

export type Box = { width: number; height: number; stacked: false };

/**
 * The size of an element in CSS px while `on`, null until measured (v4.0.0, 4d): the HUD's stage fills the window, and
 * the world takes its size from it. Its own box, not the window's: the page keeps a scrollbar's gutter at its edge.
 * A box with no width (behind the Team page) keeps the last size, as useStage does.
 */
export function useBox(ref: RefObject<HTMLElement | null>, on: boolean): Box | null {
  const [box, setBox] = useState<Box | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!on || !el || typeof ResizeObserver === 'undefined') return;
    const measure = () => {
      if (el.clientWidth === 0) return;
      const next: Box = { width: el.clientWidth, height: el.clientHeight, stacked: false };
      setBox((was) => (was?.width === next.width && was.height === next.height ? was : next));
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    window.addEventListener('resize', measure);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [ref, on]);

  return on ? box : null;
}
