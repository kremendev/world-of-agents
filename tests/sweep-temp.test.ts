import {
  existsSync,
  lutimesSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  symlinkSync,
  utimesSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { sweepTemp } from './sweep-temp';

const HOUR = 3_600_000;
const NOW = Date.now();
let root: string;
let outside: string;

/** A folder under the root, `ageMs` old. */
function folder(name: string, ageMs: number): string {
  const path = join(root, name);
  mkdirSync(path, { recursive: true });
  writeFileSync(join(path, 'f.txt'), 'x');
  const t = (NOW - ageMs) / 1000;
  utimesSync(path, t, t);
  return path;
}
/** A link to the folder outside: a junction on Windows (no admin needed), a symbolic link elsewhere. */
const link = (path: string, target: string) =>
  symlinkSync(target, path, process.platform === 'win32' ? 'junction' : 'dir');

beforeEach(() => {
  root = mkdtempSync(join(tmpdir(), 'woa-sweep-'));
  outside = mkdtempSync(join(tmpdir(), 'woa-sweep-outside-'));
  writeFileSync(join(outside, 'keep.txt'), 'keep');
});
afterEach(() => {
  rmSync(root, { recursive: true, force: true });
  rmSync(outside, { recursive: true, force: true });
});

describe("the tests' temp sweep", () => {
  it('removes our folders older than an hour, and says which', () => {
    for (const name of [
      'woa test abc',
      'woa-guard-d-x',
      'playwright_chromiumdev_profile-z',
      'playwright-artifacts-q',
    ])
      folder(name, 2 * HOUR);
    expect(sweepTemp(root, NOW).sort()).toEqual([
      'playwright-artifacts-q',
      'playwright_chromiumdev_profile-z',
      'woa test abc',
      'woa-guard-d-x',
    ]);
    expect(existsSync(join(root, 'woa test abc'))).toBe(false);
  });

  it("leaves a young folder, anyone else's, a file, and the four working folders by name", () => {
    folder('woa-guard-d-young', HOUR / 2);
    folder('other-tool-1', 2 * HOUR);
    folder('woafolder', 2 * HOUR);
    for (const name of ['woa-dev', 'woa-m2-test', 'woa-test', 'woa-v3-test']) folder(name, 2 * HOUR);
    writeFileSync(join(root, 'woa-old.log'), 'log');
    utimesSync(join(root, 'woa-old.log'), (NOW - 2 * HOUR) / 1000, (NOW - 2 * HOUR) / 1000);
    expect(sweepTemp(root, NOW)).toEqual([]);
  });

  it('never follows a link: one named as ours stays, and one inside a folder that goes leaves its target', () => {
    link(join(root, 'woa-link'), outside);
    // the link itself old too, so only its being a link keeps it
    lutimesSync(join(root, 'woa-link'), (NOW - 2 * HOUR) / 1000, (NOW - 2 * HOUR) / 1000);
    const old = folder('woa-holds-a-link', 2 * HOUR);
    link(join(old, 'inner'), outside);
    const t = (NOW - 2 * HOUR) / 1000;
    utimesSync(old, t, t);
    expect(sweepTemp(root, NOW)).toEqual(['woa-holds-a-link']);
    expect(existsSync(join(root, 'woa-link'))).toBe(true);
    expect(existsSync(join(outside, 'keep.txt'))).toBe(true);
  });

  it('skips a folder still in use, and goes on; any other failure is raised', () => {
    folder('woa-busy', 2 * HOUR);
    folder('woa-locked', 2 * HOUR);
    const inUse = (path: string) => {
      const code = path.endsWith('woa-busy') ? 'EBUSY' : 'EPERM';
      throw Object.assign(new Error(code), { code });
    };
    expect(sweepTemp(root, NOW, HOUR, inUse as typeof rmSync)).toEqual([]);
    const denied = () => {
      throw Object.assign(new Error('EACCES'), { code: 'EACCES' });
    };
    expect(() => sweepTemp(root, NOW, HOUR, denied as typeof rmSync)).toThrow('EACCES');
  });

  it('does nothing when the folder is not there', () => {
    expect(sweepTemp(join(root, 'missing'), NOW)).toEqual([]);
  });

  it('runs before every Vitest run, from the config', () => {
    const config = readFileSync(join(import.meta.dirname, '../vite.config.ts'), 'utf8');
    expect(config).toContain("globalSetup: ['./tests/global-setup.ts']");
    expect(readFileSync(join(import.meta.dirname, 'global-setup.ts'), 'utf8')).toContain(
      'sweepTemp(tmpdir(), Date.now())',
    );
  });
});
