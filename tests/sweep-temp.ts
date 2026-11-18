import { lstatSync, readdirSync, rmSync, type Stats } from 'node:fs';
import { join } from 'node:path';

/**
 * The tests' temp folders (Dima, 18 Nov): every test cleans up after itself, but a run killed before its cleanup (a
 * planted bug's timeout, a crash) leaves its folder behind. Ours start "woa-" or "woa " (every test's prefix does), and
 * the browser checks' Edge profiles are Playwright's own two prefixes.
 */
const OURS = /^(?:woa[- ]|playwright_chromiumdev_profile-|playwright-artifacts-)/;
/** Dima's working folders, never touched wherever they turn up: the dev refresh and the team keys use their paths. */
const KEEP: ReadonlySet<string> = new Set(['woa-dev', 'woa-m2-test', 'woa-test', 'woa-v3-test']);
/** Windows says a file still in use is busy, or that it may not be removed: either way, it stays for the next sweep. */
const IN_USE: ReadonlySet<string> = new Set(['EBUSY', 'EPERM']);

/**
 * Removes our folders directly under `root` that are older than `maxAgeMs`, and says which. A link (a junction is one)
 * or a file is never touched, and nothing is followed: rmSync removes a link inside a folder, never what it points at.
 */
export function sweepTemp(root: string, now: number, maxAgeMs = 3_600_000, rm = rmSync): string[] {
  const removed: string[] = [];
  let names: string[];
  try {
    names = readdirSync(root);
  } catch {
    return removed;
  }
  for (const name of names) {
    if (!OURS.test(name) || KEEP.has(name)) continue;
    const path = join(root, name);
    let st: Stats;
    try {
      st = lstatSync(path);
    } catch {
      continue;
    }
    if (st.isSymbolicLink() || !st.isDirectory() || now - st.mtimeMs < maxAgeMs) continue;
    try {
      rm(path, { recursive: true, force: true });
      removed.push(name);
    } catch (err) {
      if (!IN_USE.has((err as NodeJS.ErrnoException).code ?? '')) throw err;
    }
  }
  return removed;
}
