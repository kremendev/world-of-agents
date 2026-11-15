// team-check.mjs (v3.6d, E9): whether the team's generated files are this plugin's, by exit code only.
import { execFile } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
import { CURRENT, NO_TEAM, OLDER, status } from '../../plugin/hooks/team-check.mjs';
import { GENERATOR, init, teamDir } from '../../plugin/team/team.mjs';

const SCRIPT = resolve(import.meta.dirname, '../../plugin/hooks/team-check.mjs');
const homes: string[] = [];
afterEach(() => {
  for (const dir of homes.splice(0)) rmSync(dir, { recursive: true, force: true });
});
const home = () => {
  const dir = mkdtempSync(join(tmpdir(), 'woa-team-check-'));
  homes.push(dir);
  return dir;
};
/** A team, then team.json rewritten with `more` over what init() wrote. */
const team = (more: Record<string, unknown> = {}) => {
  const h = home();
  init(h);
  const file = join(teamDir(h), 'team.json');
  writeFileSync(file, JSON.stringify({ ...JSON.parse(readFileSync(file, 'utf8')), ...more }));
  return h;
};

describe('team-check.mjs', () => {
  it('answers 0 for this generator and a newer one, 6 for an older one and a version 1 team, 4 for none or a broken one', () => {
    expect([CURRENT, OLDER, NO_TEAM]).toEqual([0, 6, 4]);
    expect(status(team())).toBe(CURRENT);
    expect(status(team({ generator: GENERATOR + 1 }))).toBe(CURRENT);
    expect(status(team({ generator: GENERATOR - 1 }))).toBe(OLDER);
    const v1 = team();
    const file = join(teamDir(v1), 'team.json');
    const now = JSON.parse(readFileSync(file, 'utf8')) as { specialists: Record<string, unknown>[] };
    writeFileSync(
      file,
      JSON.stringify({
        version: 1,
        specialists: now.specialists.map(({ id, name, role, guild, preset, skills }) => ({
          id,
          name,
          role,
          guild,
          kind: preset === 'reads' ? 'reads' : 'edits',
          skills,
        })),
        skills: (JSON.parse(readFileSync(file, 'utf8')) as { skills: unknown }).skills,
      }),
    );
    expect(status(v1)).toBe(OLDER);
    expect(status(home())).toBe(NO_TEAM);
    const broken = team();
    writeFileSync(join(teamDir(broken), 'team.json'), '{broken');
    expect(status(broken)).toBe(NO_TEAM);
    expect(status(team({ generator: 'new' }))).toBe(NO_TEAM);
  });

  it('as a script: the exit code and nothing printed, from the home it runs in', async () => {
    const run = (h: string) =>
      new Promise<{ code: number | null; stdout: string; stderr: string }>((done) => {
        execFile(
          process.execPath,
          [SCRIPT],
          { env: { ...process.env, HOME: h, USERPROFILE: h }, timeout: 20_000 },
          (error, stdout, stderr) =>
            done({ code: error ? (typeof error.code === 'number' ? error.code : null) : 0, stdout, stderr }),
        );
      });
    expect(await run(team())).toEqual({ code: 0, stdout: '', stderr: '' });
    expect(await run(team({ generator: 0 }))).toEqual({ code: 6, stdout: '', stderr: '' });
    expect(await run(home())).toEqual({ code: 4, stdout: '', stderr: '' });
  });
});
