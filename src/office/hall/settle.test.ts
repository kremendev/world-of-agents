import { describe, expect, it } from 'vitest';
import { RANK, settleLabels } from './settle';

type Rect = [left: number, top: number, right: number, bottom: number];

const boxed = (el: HTMLElement, [left, top, right, bottom]: Rect) => {
  el.getBoundingClientRect = () =>
    ({ left, top, right, bottom, width: right - left, height: bottom - top }) as DOMRect;
};

const label = (root: HTMLElement, rank: number, rect: Rect) => {
  const el = document.createElement('span');
  el.dataset.rank = String(rank);
  boxed(el, rect);
  root.append(el);
  return el;
};

const hall = (): HTMLElement => {
  const root = document.createElement('div');
  boxed(root, [0, 0, 500, 500]);
  return root;
};

const shown = (el: HTMLElement) => el.style.visibility !== 'hidden';

describe('settleLabels', () => {
  it('leaves labels that do not touch alone', () => {
    const root = hall();
    const a = label(root, RANK.plate, [0, 0, 50, 20]);
    const b = label(root, RANK.plate, [60, 0, 110, 20]);
    settleLabels(root);
    expect([shown(a), shown(b)]).toEqual([true, true]);
  });

  it('hides the one that is outranked, whichever comes first in the page', () => {
    const root = hall();
    const plaque = label(root, RANK.plaque, [0, 0, 50, 20]);
    const urgent = label(root, RANK.urgent, [40, 10, 90, 30]);
    settleLabels(root);
    expect(shown(urgent)).toBe(true);
    expect(shown(plaque)).toBe(false);
  });

  it('keeps the rank order: urgent, working, speech, signs, plates, idle, plaques', () => {
    const order = [RANK.urgent, RANK.working, RANK.speech, RANK.sign, RANK.plate, RANK.idle, RANK.plaque];
    for (let i = 1; i < order.length; i++) expect(order[i - 1]!).toBeLessThan(order[i]!);
  });

  it('of two equals, keeps the first in the page', () => {
    const root = hall();
    const a = label(root, RANK.plate, [0, 0, 50, 20]);
    const b = label(root, RANK.plate, [40, 0, 90, 20]);
    settleLabels(root);
    expect([shown(a), shown(b)]).toEqual([true, false]);
  });

  it('never hides the dashboard, and a label over it goes', () => {
    const root = hall();
    const plaque = label(root, RANK.plaque, [10, 10, 60, 30]);
    const dashboard = label(root, RANK.fixed, [0, 20, 100, 80]);
    settleLabels(root);
    expect(shown(dashboard)).toBe(true);
    expect(shown(plaque)).toBe(false);
  });

  it('a hidden label does not push out a third one it would have covered', () => {
    const root = hall();
    label(root, RANK.urgent, [0, 0, 50, 20]);
    const hidden = label(root, RANK.plate, [40, 0, 90, 20]);
    const free = label(root, RANK.plaque, [80, 0, 130, 20]);
    settleLabels(root);
    expect([shown(hidden), shown(free)]).toEqual([false, true]);
  });

  it('shows a label again once nothing covers it', () => {
    const root = hall();
    const speech = label(root, RANK.speech, [0, 0, 50, 20]);
    const plate = label(root, RANK.plate, [40, 0, 90, 20]);
    settleLabels(root);
    expect(shown(plate)).toBe(false);
    boxed(speech, [200, 200, 250, 220]);
    settleLabels(root);
    expect(shown(plate)).toBe(true);
  });

  it('hides a label that sticks out of the hall, but never the dashboard', () => {
    const root = hall();
    const speech = label(root, RANK.speech, [-20, 0, 40, 20]);
    const dashboard = label(root, RANK.fixed, [-20, 100, 40, 120]);
    settleLabels(root);
    expect(shown(speech)).toBe(false);
    expect(shown(dashboard)).toBe(true);
  });

  it('gives half a pixel of slack: labels that only touch stay', () => {
    const root = hall();
    const a = label(root, RANK.plaque, [0, 0, 50, 16.3]);
    const b = label(root, RANK.fixed, [0, 15.9, 50, 40]);
    settleLabels(root);
    expect([shown(a), shown(b)]).toEqual([true, true]);
  });
});
