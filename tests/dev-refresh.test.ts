import { spawn } from 'node:child_process';
import {
  chmodSync,
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  readdirSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { RefreshError, mirror } from '../scripts/dev-refresh.mjs';

// npm run dev:refresh mirrors plugin/ into ~/Downloads/woa-dev/plugin. These run it on temp folders only.

let box: string;
let source: string;
let root: string;
let target: string;

const write = (base: string, file: string, text: string) => {
  mkdirSync(dirname(join(base, file)), { recursive: true });
  writeFileSync(join(base, file), text);
};
const read = (base: string, file: string) => readFileSync(join(base, file), 'utf8');

beforeEach(() => {
  box = mkdtempSync(join(tmpdir(), 'woa-refresh-'));
  source = join(box, 'agent-office', 'plugin');
  root = join(box, 'woa-dev');
  target = join(root, 'plugin');
  write(source, '.claude-plugin/plugin.json', '{"name":"world-of-agents"}');
  write(source, 'hooks/mod/register.tsx', 'v2');
  write(source, 'hall/server.mjs', 'hall v2');
  write(source, 'hall/page/index.html', '<!doctype html>');
  write(root, '.claude-plugin/marketplace.json', '{"name":"woa-dev"}');
});
afterEach(() => rmSync(box, { recursive: true, force: true }));

describe('mirror', () => {
  it('copies everything into an empty dev install', () => {
    const done = mirror({ source, target, root });
    expect(done.copied.sort()).toEqual([
      '.claude-plugin/plugin.json',
      'hall/page/index.html',
      'hall/server.mjs',
      'hooks/mod/register.tsx',
    ]);
    expect(read(target, 'hall/server.mjs')).toBe('hall v2');
    // Outside the target, the marketplace is left alone.
    expect(read(root, '.claude-plugin/marketplace.json')).toBe('{"name":"woa-dev"}');
  });

  it('replaces what changed, deletes what the source no longer has, and keeps every folder', () => {
    write(target, 'hooks/mod/register.tsx', 'v1');
    write(target, 'hall/server.mjs', 'hall v2');
    write(target, 'hooks/mod/old.ts', 'gone from the source');
    write(target, 'stale/only.txt', 'gone from the source');
    const done = mirror({ source, target, root });
    expect(done.copied.sort()).toEqual([
      '.claude-plugin/plugin.json',
      'hall/page/index.html',
      'hooks/mod/register.tsx',
    ]);
    expect(done.removed.sort()).toEqual(['hooks/mod/old.ts', 'stale/only.txt']);
    expect(done.unchanged).toBe(1);
    expect(read(target, 'hooks/mod/register.tsx')).toBe('v2');
    expect(existsSync(join(target, 'hooks/mod/old.ts'))).toBe(false);
    expect(readdirSync(join(target, 'stale'))).toEqual([]);
  });

  it('a second run changes nothing', () => {
    mirror({ source, target, root });
    expect(mirror({ source, target, root })).toEqual({ copied: [], removed: [], unchanged: 4 });
  });

  it('works while a process runs in one of its folders, as a hall started from the dev install does', async () => {
    mirror({ source, target, root });
    write(source, 'hall/server.mjs', 'hall v3');
    rmSync(join(source, 'hall/page/index.html'));
    const hall = spawn(process.execPath, ['-e', 'console.log("up"); setTimeout(() => {}, 10000)'], {
      cwd: join(target, 'hall'),
    });
    // Not 'spawn': that fires when the process exists, and on a busy machine the delete below could still beat the child
    // to holding its folder. A line from its own code means it is running in there.
    await new Promise((done) => hall.stdout.once('data', done));
    const gone = new Promise((done) => hall.once('exit', done));
    try {
      if (process.platform === 'win32') {
        // What broke the hand-typed rm -rf: Windows won't remove a folder a process stands in, so it stops half done.
        expect(() => rmSync(target, { recursive: true })).toThrow();
        expect(existsSync(join(target, 'hall'))).toBe(true);
      }
      // The mirror deletes no folder, so the same state is no obstacle: one run puts the whole source back.
      mirror({ source, target, root });
      expect(read(target, 'hall/server.mjs')).toBe('hall v3');
      expect(read(target, 'hooks/mod/register.tsx')).toBe('v2');
      expect(read(target, '.claude-plugin/plugin.json')).toBe('{"name":"world-of-agents"}');
      expect(existsSync(join(target, 'hall/page/index.html'))).toBe(false);
      expect(mirror({ source, target, root })).toMatchObject({ copied: [], removed: [] });
    } finally {
      // kill() only asks: until the child is gone it still holds the folder, and the cleanup can't remove it.
      hall.kill();
      await gone;
    }
  });

  it('a file it cannot write stops it before any change, and names the file', () => {
    mirror({ source, target, root });
    write(source, 'hooks/mod/register.tsx', 'v3');
    write(source, 'hooks/mod/new.ts', 'new');
    chmodSync(join(target, 'hooks/mod/register.tsx'), 0o444);
    try {
      expect(() => mirror({ source, target, root })).toThrow(
        /A program holds hooks\/mod\/register\.tsx .*Nothing was changed/,
      );
      expect(existsSync(join(target, 'hooks/mod/new.ts'))).toBe(false);
      expect(read(target, 'hooks/mod/register.tsx')).toBe('v2');
    } finally {
      chmodSync(join(target, 'hooks/mod/register.tsx'), 0o644);
    }
  });

  it.each([
    ['the root itself', () => root],
    ['a folder beside the root', () => join(box, 'elsewhere', 'plugin')],
    ['a way out of the root', () => join(root, '..', 'escape')],
  ])('refuses a target that is %s, and writes nothing', (_, at) => {
    expect(() => mirror({ source, target: at(), root })).toThrow(RefreshError);
    expect(existsSync(join(box, 'elsewhere'))).toBe(false);
    expect(existsSync(join(box, 'escape'))).toBe(false);
  });

  it('refuses a source and target that overlap', () => {
    expect(() => mirror({ source: root, target, root })).toThrow(/overlap/);
  });

  it('refuses to write through a link, in the target or the source', (context) => {
    const outside = join(box, 'outside');
    mkdirSync(outside);
    try {
      symlinkSync(outside, join(root, 'plugin'), 'junction');
    } catch {
      context.skip(); // this account can't make links
    }
    expect(() => mirror({ source, target, root })).toThrow(/link/);
    expect(readdirSync(outside)).toEqual([]);

    rmSync(join(root, 'plugin'));
    symlinkSync(outside, join(source, 'linked'), 'junction');
    expect(() => mirror({ source, target, root })).toThrow(/The source holds a link/);
    expect(existsSync(target)).toBe(false);
  });
});
