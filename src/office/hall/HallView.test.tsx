import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { INITIAL_OFFICE } from '../../state/office';
import { HallView } from './HallView';
import { HALL } from './layout';

const view = (room: { width: number; height: number } | null) => (
  <HallView office={INITIAL_OFFICE} run={0} selected="lead" onSelect={() => {}} room={room} />
);

describe('HallView size', () => {
  const show = (room: { width: number; height: number } | null) => {
    const { container, rerender } = render(view(room));
    const canvas = container.querySelector('canvas')!;
    const labels = container.querySelector<HTMLElement>('.hall-labels')!;
    return { canvas, rerender, u: () => Number(labels.style.getPropertyValue('--u')) };
  };

  it('fills the height when that runs out first, and the labels follow', () => {
    const { canvas, u } = show({ width: 1513, height: 904 });
    expect(canvas.width).toBe(HALL.width);
    expect(canvas.style.height).toBe('904px');
    expect(u()).toBeCloseTo(904 / HALL.height);
  });

  it('fills the width when that runs out first', () => {
    const { canvas, u } = show({ width: 800, height: 904 });
    expect(canvas.style.width).toBe('800px');
    expect(u()).toBeCloseTo(800 / HALL.width);
  });

  it('uses a sharp scale when one is within 15% of the largest that fits', () => {
    const { canvas, u } = show({ width: 2000, height: 1040 });
    expect(canvas.width).toBe(HALL.width * 2);
    expect(canvas.style.width).toBe(`${HALL.width * 2}px`);
    expect(u()).toBe(2);
  });

  it('follows the room when it changes', () => {
    const { canvas, rerender } = show({ width: 2000, height: 592 });
    expect(canvas.width).toBe(HALL.width);
    rerender(view({ width: 2000, height: 1000 }));
    expect(canvas.width).toBe(HALL.width * 2);
  });

  it('falls back to the design size until there is a room to measure', () => {
    const { canvas, u } = show(null);
    expect(canvas.width).toBe(HALL.width * 2);
    expect(u()).toBe(2);
  });
});
