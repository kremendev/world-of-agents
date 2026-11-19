/** The viewer's last choice for the drawer (D5), in this browser only. */
export const DRAWER_KEY = 'world-of-agents.drawer';

/**
 * Whether the drawer starts open: the viewer's last choice where the browser kept it, else open in a window at least
 * 80rem wide (1280 px at 100%). Storage can be missing or refuse (a private window, blocked site data): then the width.
 */
export function drawerStartsOpen(): boolean {
  try {
    const saved = localStorage.getItem(DRAWER_KEY);
    if (saved === 'open') return true;
    if (saved === 'closed') return false;
  } catch {
    // no storage: the width decides
  }
  return window.matchMedia('(min-width: 80rem)').matches;
}

/** Keeps the viewer's choice; a browser that refuses keeps nothing, and the page works as before. */
export function saveDrawer(open: boolean): void {
  try {
    localStorage.setItem(DRAWER_KEY, open ? 'open' : 'closed');
  } catch {
    // nothing kept
  }
}
