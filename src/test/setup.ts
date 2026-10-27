import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';

// jsdom has no canvas. Returning null sends drawing code down its "no context" path quietly
// instead of printing "Not implemented: HTMLCanvasElement.prototype.getContext" in every test.
vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(null);

// jsdom has no matchMedia either. Every query reports "no match"; a test that needs reduced motion
// replaces window.matchMedia itself.
window.matchMedia = (query: string) =>
  ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: () => {},
    removeEventListener: () => {},
    addListener: () => {},
    removeListener: () => {},
    dispatchEvent: () => false,
  }) as MediaQueryList;
