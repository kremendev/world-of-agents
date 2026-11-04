import { act, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { stageFit, useStage } from './useStage';

const FEED = 320;
const GAP = 20;

describe('stageFit', () => {
  it('leaves the feed its minimum width and the hall what the first screen has left', () => {
    expect(stageFit(1303, 596, FEED, GAP)).toEqual({ width: 959, height: 592, stacked: false });
  });

  it('stays side by side while the height limits the hall anyway', () => {
    expect(stageFit(897, 368, FEED, GAP).stacked).toBe(false);
    expect(stageFit(1857, 908, FEED, GAP).stacked).toBe(false);
  });

  it('stacks when the feed beside it would cost the hall more than 15%', () => {
    const narrow = stageFit(900, 1000, FEED, GAP);
    expect(narrow.stacked).toBe(true);
    expect(narrow.width).toBe(896);
  });

  it('decides at 15%: height limits the hall to 1 here, and the room beside it to 0.86 or 0.84', () => {
    const page = (scale: number) => 672 * scale + 4 + GAP + FEED;
    expect(stageFit(page(0.86), 484, FEED, GAP).stacked).toBe(false);
    expect(stageFit(page(0.84), 484, FEED, GAP).stacked).toBe(true);
  });

  it('gives a window too short for the hall a minimum, and lets the page scroll', () => {
    expect(stageFit(1000, 50, FEED, GAP).height).toBe(200);
  });
});

describe('useStage', () => {
  let remeasure: () => void = () => {};

  function Stage() {
    const { ref, fit } = useStage();
    return (
      <div>
        <div ref={ref} />
        <output>{fit ? `${fit.width}x${fit.height} ${fit.stacked ? 'stacked' : 'beside'}` : 'none'}</output>
      </div>
    );
  }

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  const stub = (width: number, top: number) => {
    const clientWidth = vi.spyOn(HTMLElement.prototype, 'clientWidth', 'get').mockReturnValue(width);
    const rect = vi
      .spyOn(HTMLElement.prototype, 'getBoundingClientRect')
      .mockReturnValue({ top, left: 0, right: width, bottom: top, width, height: 0 } as DOMRect);
    return () => {
      clientWidth.mockRestore();
      rect.mockRestore();
    };
  };

  it('has nothing to say without ResizeObserver', () => {
    render(<Stage />);
    expect(screen.getByRole('status')).toHaveTextContent('none');
  });

  it('measures on mount, on every resize, and when something above it grows', () => {
    vi.stubGlobal(
      'ResizeObserver',
      class {
        constructor(callback: () => void) {
          remeasure = callback;
        }
        observe() {}
        disconnect() {}
      },
    );
    vi.stubGlobal('innerHeight', 768);
    const restore = stub(1303, 128);
    render(<Stage />);
    const expected = stageFit(1303, 768 - 128, 320, 0);
    expect(screen.getByRole('status')).toHaveTextContent(`${expected.width}x${expected.height} beside`);

    vi.stubGlobal('innerHeight', 600);
    act(() => void window.dispatchEvent(new Event('resize')));
    expect(screen.getByRole('status')).toHaveTextContent(`x${600 - 128 - 4} beside`);

    restore();
    const moved = stub(1303, 228);
    act(() => remeasure());
    expect(screen.getByRole('status')).toHaveTextContent(`x${600 - 228 - 4} beside`);
    moved();
  });
});
