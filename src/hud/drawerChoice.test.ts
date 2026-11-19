import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { DRAWER_KEY, drawerStartsOpen, saveDrawer } from './drawerChoice';

const wide = (yes: boolean) =>
  vi
    .spyOn(window, 'matchMedia')
    .mockImplementation(
      (query: string) => ({ matches: yes && query === '(min-width: 80rem)' }) as MediaQueryList,
    );

beforeEach(() => localStorage.clear());
afterEach(() => localStorage.clear());

describe("the drawer's start (D5)", () => {
  it('opens in a window at least 80rem wide, and stays closed in a narrower one', () => {
    const spy = wide(true);
    expect(drawerStartsOpen()).toBe(true);
    spy.mockRestore();
    const narrow = wide(false);
    expect(drawerStartsOpen()).toBe(false);
    narrow.mockRestore();
  });

  it("follows the viewer's last choice over the width", () => {
    const spy = wide(true);
    saveDrawer(false);
    expect(localStorage.getItem(DRAWER_KEY)).toBe('closed');
    expect(drawerStartsOpen()).toBe(false);
    spy.mockRestore();
    const narrow = wide(false);
    saveDrawer(true);
    expect(drawerStartsOpen()).toBe(true);
    narrow.mockRestore();
  });

  it('ignores a kept value it did not write', () => {
    const spy = wide(true);
    localStorage.setItem(DRAWER_KEY, 'sideways');
    expect(drawerStartsOpen()).toBe(true);
    spy.mockRestore();
  });

  it('works without storage: a browser that refuses decides by the width and keeps nothing', () => {
    const get = vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('blocked');
    });
    const set = vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('blocked');
    });
    const spy = wide(true);
    expect(drawerStartsOpen()).toBe(true);
    expect(() => saveDrawer(false)).not.toThrow();
    get.mockRestore();
    set.mockRestore();
    spy.mockRestore();
  });
});
