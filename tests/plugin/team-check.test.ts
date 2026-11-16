// team-check.mjs (v3.6d, E9; per project from v3.9): does the session's project have a team of its own, and are its
// generated files this plugin's? By exit code only.
import { execFile } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
import { CURRENT, NO_TEAM, OLDER, status } from '../../plugin/hooks/team-check.mjs';
import { GENERATOR, giveOwnTeam, init, projectOf, projectTeamDir } from '../../plugin/team/team.mjs';

const SCRIPT = resolve(import.meta.dirname, '../../plugin/hooks/team-check.mjs');
const made: string[] = [];
afterEach(() => {
  for (const dir of made.splice(0)) rmSync(dir, { recursive: true, force: true });
});
const temp = (name: string) => {
  const dir = mkdtempSync(join(tmpdir(), name));
  made.push(dir);
  return dir;
};
/** A home and a project with a team of its own, its team.json rewritten with `more` over what was written. */
const project = (more: Record<string, unknown> = {}) => {
  const home = temp('woa-team-check-');
  const folder = temp('woa-team-check-proj-');
  giveOwnTeam(home, folder, 'empty', 1);
  const file = join(projectTeamDir(home, projectOf(folder)!.key), 'team.json');
  writeFileSync(file, JSON.stringify({ ...JSON.parse(readFileSync(file, 'utf8')), ...more }));
  return { home, folder, file };
};

describe('team-check.mjs', () => {
  it('answers 0 for this generator and a newer one, 6 for an older one, 4 when the project has no team of its own', () => {
    expect([CURRENT, OLDER, NO_TEAM]).toEqual([0, 6, 4]);
    const own = project();
    expect(status(own.home, own.folder)).toBe(CURRENT);
    const newer = project({ generator: GENERATOR + 1 });
    expect(status(newer.home, newer.folder)).toBe(CURRENT);
    const older = project({ generator: GENERATOR - 1 });
    expect(status(older.home, older.folder)).toBe(OLDER);
    // Another project, the shared team alone, a broken team, or no project at all.
    expect(status(own.home, temp('woa-team-check-other-'))).toBe(NO_TEAM);
    const shared = temp('woa-team-check-shared-');
    init(shared);
    expect(status(shared, own.folder)).toBe(NO_TEAM);
    writeFileSync(own.file, '{broken');
    expect(status(own.home, own.folder)).toBe(NO_TEAM);
    expect(status(own.home, null)).toBe(NO_TEAM);
  });

  it('as a script: the project on stdin, the exit code, and nothing printed', async () => {
    const run = (home: string, stdin: string) =>
      new Promise<{ code: number | null; stdout: string; stderr: string }>((done) => {
        const child = execFile(
          process.execPath,
          [SCRIPT],
          { env: { ...process.env, HOME: home, USERPROFILE: home }, timeout: 20_000 },
          (error, stdout, stderr) =>
            done({ code: error ? (typeof error.code === 'number' ? error.code : null) : 0, stdout, stderr }),
        );
        child.stdin?.end(stdin);
      });
    const own = project();
    const older = project({ generator: 0 });
    expect(await run(own.home, JSON.stringify({ project: own.folder }))).toEqual({
      code: 0,
      stdout: '',
      stderr: '',
    });
    expect(await run(older.home, JSON.stringify({ project: older.folder }))).toEqual({
      code: 6,
      stdout: '',
      stderr: '',
    });
    for (const bad of [
      '',
      'garbage',
      JSON.stringify({ project: 'relative' }),
      JSON.stringify({ project: own.folder, more: 1 }),
    ])
      expect(await run(own.home, bad), bad).toEqual({ code: 4, stdout: '', stderr: '' });
  });
});
