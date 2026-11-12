import { execFile } from 'node:child_process';
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
import { ABOUT, KEY, RELATIVE, gates } from '../plugin/skills/setup-gates/gates.mjs';

const SKILLS = join(import.meta.dirname, '../plugin/skills');
const SCRIPT = join(SKILLS, 'setup-gates/gates.mjs');
const COMMAND = "node '${CLAUDE_PLUGIN_ROOT}/skills/setup-gates/gates.mjs'";
const SECRET = 'sk-FAKE-supersecret-value';

const folders: string[] = [];
afterEach(() => {
  for (const dir of folders.splice(0)) rmSync(dir, { recursive: true, force: true });
});
/** A project folder, with a settings file holding `settings` (raw text for a string), or none. */
function project(settings?: unknown) {
  const dir = mkdtempSync(join(tmpdir(), 'woa-gates-'));
  folders.push(dir);
  if (settings !== undefined) {
    mkdirSync(join(dir, '.claude'));
    writeFileSync(
      join(dir, RELATIVE),
      typeof settings === 'string' ? settings : JSON.stringify(settings, null, 2),
    );
  }
  return dir;
}
const SET_UP = {
  enabledPlugins: { 'world-of-agents@world-of-agents': true },
  permissions: { defaultMode: 'default', allow: ['Bash(npm test)'] },
  env: { CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH: '2', API_KEY: SECRET },
};
const read = (dir: string) => JSON.parse(readFileSync(join(dir, RELATIVE), 'utf8')) as typeof SET_UP;

/** The skill file's frontmatter keys and its injected commands. */
function parse(file: string) {
  const text = readFileSync(join(SKILLS, file), 'utf8');
  const front = /^---\n([\s\S]*?)\n---\n/.exec(text)?.[1] ?? '';
  const keys = Object.fromEntries(
    front
      .split('\n')
      .map((line) => [line.slice(0, line.indexOf(':')), line.slice(line.indexOf(':') + 1).trim()]),
  );
  const injected = [...text.matchAll(/^!`([^`]*)`$/gm)].map((m) => m[1]);
  return { text, keys, injected };
}

describe.each([
  ['setup-gates', 'setup-gates/SKILL.md', COMMAND],
  ['setup-gates-write', 'setup-gates-write/SKILL.md', `${COMMAND} --on`],
  ['setup-gates-off', 'setup-gates-off/SKILL.md', `${COMMAND} --off`],
])('/world-of-agents:%s (v3.3)', (name, file, command) => {
  const { text, keys, injected } = parse(file);

  it('only the user can start it, and Claude Code runs exactly one fixed command, pre-approved', () => {
    expect(keys.name).toBe(name);
    expect(keys['disable-model-invocation']).toBe('true');
    expect(injected).toEqual([command]);
    expect(keys['allowed-tools']).toBe(`Bash(${command})`);
  });

  it('builds the command from nothing the conversation can set, the path in single quotes', () => {
    expect(text).not.toContain('$ARGUMENTS');
    expect(text).not.toMatch(/\$\d/);
    expect(command).toMatch(/^node '\$\{CLAUDE_PLUGIN_ROOT\}\/[^']+'( --on| --off)?$/);
  });

  it('leaves the model nothing to run or decide, and says what a disabled shell means', () => {
    expect(text).toMatch(/You run nothing yourself/);
    expect(text).toContain('[shell command execution disabled by policy]');
  });
});

describe('gates.mjs', () => {
  it('needs a project the setup already wrote: no file, or no setup in it, changes nothing', () => {
    for (const dir of [project(), project({ enabledPlugins: {} })]) {
      expect(gates(dir, 'on')).toEqual([
        'Not set up yet: type /world-of-agents:setup-project-write first. Nothing changed.',
      ]);
    }
    const broken = project('{not json');
    expect(gates(broken, 'on')).toEqual([`Stopped: ${RELATIVE} isn't a JSON object. Nothing changed.`]);
    expect(readFileSync(join(broken, RELATIVE), 'utf8')).toBe('{not json');
  });

  it('shows what gates do and that they are off, and writes nothing', () => {
    const dir = project(SET_UP);
    const before = readFileSync(join(dir, RELATIVE), 'utf8');
    expect(gates(dir, undefined)).toEqual([
      ...ABOUT,
      '',
      'Quality gates are off in this project. To turn them on, type /world-of-agents:setup-gates-write.',
    ]);
    expect(readFileSync(join(dir, RELATIVE), 'utf8')).toBe(before);
  });

  it('turns them on with its own key alone, keeps every other setting, and says it once', () => {
    const dir = project(SET_UP);
    expect(gates(dir, 'on')[0]).toMatch(/^Turned on: env\.WOA_QUALITY_GATE/);
    expect(read(dir)).toEqual({ ...SET_UP, env: { ...SET_UP.env, [KEY]: '1' } });
    expect(gates(dir, 'on')).toEqual(['Already on. Nothing changed.']);
    expect(gates(dir, undefined).at(-1)).toMatch(/^Quality gates are on in this project/);
  });

  it('turns them off by removing that key, and nothing else', () => {
    const dir = project({ ...SET_UP, env: { ...SET_UP.env, [KEY]: '1' } });
    expect(gates(dir, 'off')[0]).toMatch(/^Turned off: env\.WOA_QUALITY_GATE removed/);
    expect(read(dir)).toEqual(SET_UP);
    expect(gates(dir, 'off')).toEqual(['Already off. Nothing changed.']);
  });

  it('never prints a value from the file', () => {
    const dir = project(SET_UP);
    const printed = [...gates(dir, undefined), ...gates(dir, 'on'), ...gates(dir, 'off')].join('\n');
    expect(printed).not.toContain(SECRET);
    expect(printed).not.toContain('world-of-agents@world-of-agents');
  });

  it('as a script: exits 0 with its result, and 1 only for a wrong argument', async () => {
    const run = (args: string[], cwd: string) =>
      new Promise<{ code: number | null; stdout: string }>((done) =>
        execFile(process.execPath, [SCRIPT, ...args], { cwd }, (error, stdout) =>
          done({ code: error ? (typeof error.code === 'number' ? error.code : null) : 0, stdout }),
        ),
      );
    const dir = project(SET_UP);
    expect(await run(['--on'], dir)).toMatchObject({ code: 0, stdout: expect.stringMatching(/^Turned on/) });
    expect(await run(['--maybe'], dir)).toEqual({
      code: 1,
      stdout: 'Usage: node gates.mjs [--on | --off]\n',
    });
  });
});
