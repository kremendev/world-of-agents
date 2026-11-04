import { spawnSync } from 'node:child_process';
import { copyFileSync, mkdirSync, mkdtempSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { afterAll, describe, expect, it } from 'vitest';

const slashes = (path: string) => path.replaceAll('\\', '/');
const WOA = slashes(resolve(import.meta.dirname, 'woa'));
const REPO = slashes(resolve(import.meta.dirname, '..'));

// On Windows `bash` can be WSL's, which can't run a Windows path. Git Bash says msys or cygwin here, depending on its setup.
const bashWorks =
  process.platform !== 'win32' ||
  /msys|cygwin/.test(spawnSync('bash', ['-c', 'echo $OSTYPE'], { encoding: 'utf8' }).stdout ?? '');

/** The path as bash sees it: /c/Users/... in Git Bash. */
const inBash = (path: string) =>
  spawnSync('bash', ['-c', 'cd "$0" && pwd', path], { encoding: 'utf8' }).stdout.trim();

describe.skipIf(!bashWorks)('bin/woa', () => {
  const temp = slashes(mkdtempSync(join(tmpdir(), 'woa test ')));
  afterAll(() => rmSync(temp, { recursive: true, force: true }));

  // Stands in for Claude Code: says what it was given, one line each.
  const fakes = `${temp}/fake bin`;
  mkdirSync(fakes);
  writeFileSync(
    `${fakes}/claude`,
    [
      '#!/usr/bin/env bash',
      'printf "depth=%s\\n" "${CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH-unset}"',
      'printf "capture=%s\\n" "${WOA_CAPTURE-unset}"',
      'printf "arg=%s\\n" "$@"',
      '',
    ].join('\n'),
    { mode: 0o755 },
  );

  /** Runs a woa with the fake claude first on PATH, the way a terminal would. */
  const run = (woa: string, args: string[], cwd = temp) => {
    const env = { ...process.env };
    delete env.WOA_CAPTURE;
    return spawnSync(
      'bash',
      ['-c', 'PATH="$(cd "$0" && pwd):$PATH" exec "$BASH" "$@"', fakes, woa, ...args],
      {
        cwd,
        env,
        encoding: 'utf8',
      },
    );
  };

  const flags = (repo: string) => [
    'arg=--plugin-dir',
    `arg=${inBash(repo)}/plugin`,
    'arg=--agent',
    'arg=world-of-agents:lead',
    'arg=--permission-mode',
    'arg=default',
  ];

  it('starts claude with the plugin from this repo, the Lead and default permissions, then your arguments', () => {
    const result = run(WOA, ['--version', 'two words']);
    expect(result.status).toBe(0);
    expect(result.stdout.trim().split('\n')).toEqual([
      'depth=1',
      'capture=unset',
      ...flags(REPO),
      'arg=--version',
      'arg=two words',
    ]);
  });

  it('finds the repo from where it is, not from where you are, even with a space in the path', () => {
    const elsewhere = `${temp}/my clone`;
    mkdirSync(`${elsewhere}/bin`, { recursive: true });
    copyFileSync(WOA, `${elsewhere}/bin/woa`);
    const result = run(`${elsewhere}/bin/woa`, []);
    expect(result.stdout.trim().split('\n').slice(2)).toEqual(flags(elsewhere));
  });

  it('follows a symlink back to the repo', (context) => {
    const link = `${temp}/woa-link`;
    try {
      symlinkSync(WOA, link);
    } catch {
      return context.skip('this Windows account may not create symlinks');
    }
    expect(run(link, []).stdout.trim().split('\n').slice(2)).toEqual(flags(REPO));
  });

  it('says how to install claude and exits 1 when it is not on PATH', () => {
    const result = spawnSync('bash', ['-c', 'PATH=/nowhere exec "$BASH" "$0"', WOA], { encoding: 'utf8' });
    expect(result.status).toBe(1);
    expect(result.stdout).toBe('');
    expect(result.stderr).toContain('the claude command is not on your PATH');
    expect(result.stderr).toContain('https://code.claude.com/docs/en/quickstart');
  });

  it('turns payload capture off, even when your shell has it on', () => {
    const result = spawnSync(
      'bash',
      ['-c', 'WOA_CAPTURE=1 PATH="$(cd "$0" && pwd):$PATH" exec "$BASH" "$@"', fakes, WOA],
      { cwd: temp, encoding: 'utf8' },
    );
    expect(result.stdout).toContain('capture=unset');
  });

  it('checks its own test: the fake claude does see WOA_CAPTURE when nothing removes it', () => {
    const result = spawnSync(
      'bash',
      ['-c', 'WOA_CAPTURE=1 PATH="$(cd "$0" && pwd):$PATH" exec claude', fakes],
      { cwd: temp, encoding: 'utf8' },
    );
    expect(result.stdout).toContain('capture=1');
  });

  // On Windows a missing bit changes nothing, so only git knows. On Linux and macOS woa would not start.
  it('is executable in git', () => {
    const stage = spawnSync('git', ['ls-files', '--stage', 'bin/woa'], { cwd: REPO, encoding: 'utf8' });
    expect(stage.stdout).toMatch(/^100755 /);
  });
});
