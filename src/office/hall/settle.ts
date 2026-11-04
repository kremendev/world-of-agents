/**
 * Who keeps their place when two labels on the hall would cover each other, lowest first. Text grows with browser zoom
 * while the hall doesn't, so something has to give. All of it can still be read in the page around the hall.
 */
export const RANK = {
  /** The dashboard is part of the wall: it never hides. */
  fixed: 0,
  /** needs-you and error: what you must not miss. */
  urgent: 1,
  working: 2,
  speech: 3,
  sign: 4,
  plate: 5,
  idle: 6,
  plaque: 7,
} as const;

type Box = Pick<DOMRect, 'left' | 'right' | 'top' | 'bottom'>;

/** Half a pixel of slack: labels on fractional scales that only touch don't cover each other. */
const SLACK = 0.5;

const covers = (a: Box, b: Box) =>
  a.left < b.right - SLACK &&
  b.left < a.right - SLACK &&
  a.top < b.bottom - SLACK &&
  b.top < a.bottom - SLACK;

const inside = (outer: Box, b: Box) =>
  b.left >= outer.left - SLACK &&
  b.right <= outer.right + SLACK &&
  b.top >= outer.top - SLACK &&
  b.bottom <= outer.bottom + SLACK;

/**
 * Hides each `[data-rank]` label that would cover one that outranks it, or stick out of the hall. It only ever sets
 * `visibility`, so the labels keep their boxes and nothing moves.
 */
export function settleLabels(root: HTMLElement): void {
  const hall = root.getBoundingClientRect();
  const labels = [...root.querySelectorAll<HTMLElement>('[data-rank]')].sort(
    (a, b) => Number(a.dataset.rank) - Number(b.dataset.rank),
  );
  const kept: Box[] = [];
  for (const label of labels) {
    const box = label.getBoundingClientRect();
    const fits =
      Number(label.dataset.rank) === RANK.fixed || (inside(hall, box) && !kept.some((k) => covers(k, box)));
    label.style.visibility = fits ? '' : 'hidden';
    if (fits) kept.push(box);
  }
}
