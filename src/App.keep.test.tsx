import { act, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import App from './App';
import { KEEP_STEP_MS, STEP_MS } from './script/demoRun';

// Where the Forge Keep can draw, the demo plays at its own pace (Dima, 18 Nov). jsdom has no WebGL: the probe says yes
// here, and the scene never finishes loading, so the 2D hall stays on screen while the run plays.
const keep = vi.hoisted(() => ({ canDraw: vi.fn(() => true) }));
vi.mock('./world/support', async (importOriginal) => ({
  ...(await importOriginal<typeof import('./world/support')>()),
  canDrawWorld: keep.canDraw,
}));
vi.mock('./world/scene/world', () => ({ createWorld: () => new Promise(() => {}) }));

const FIRST_LINE = 'to you: On it: Create a dashboard. Planning the work first.';
const until = (ms: number) => {
  for (let t = 0; t < ms; t += 500) act(() => vi.advanceTimersByTime(500));
};

beforeEach(() => {
  vi.useFakeTimers();
  vi.stubEnv('VITE_LIVE', 'false');
});
afterEach(() => {
  vi.unstubAllEnvs();
  vi.useRealTimers();
});

describe("the demo's pace", () => {
  it('plays each step for 40 s where the Forge Keep can draw', () => {
    keep.canDraw.mockReturnValue(true);
    render(<App />);
    // step 2 starts at 8 s in the 2D hall's pace: not yet here
    until(STEP_MS + 1000);
    expect(screen.queryByText(FIRST_LINE)).toBeNull();
    until(KEEP_STEP_MS - STEP_MS);
    expect(screen.getByText(FIRST_LINE)).toBeInTheDocument();
  });

  it("keeps the 2D hall's 8 s where it can't", () => {
    keep.canDraw.mockReturnValue(false);
    render(<App />);
    until(STEP_MS + 500);
    expect(screen.getByText(FIRST_LINE)).toBeInTheDocument();
  });

  it('moves the run on a step at once with Next step, while it plays', () => {
    keep.canDraw.mockReturnValue(true);
    render(<App />);
    until(1000);
    expect(screen.queryByText(FIRST_LINE)).toBeNull();
    act(() => fireEvent.click(screen.getByRole('button', { name: 'Next step' })));
    expect(screen.getByText(FIRST_LINE)).toBeInTheDocument();
    act(() => fireEvent.click(screen.getByRole('button', { name: 'Pause' })));
    expect(screen.getByRole('button', { name: 'Next step' })).toBeDisabled();
  });
});
