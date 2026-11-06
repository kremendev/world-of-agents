import { execFileSync, spawnSync } from 'node:child_process';
import {
  copyFileSync,
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';

const SKILLS = resolve(import.meta.dirname, '../plugin/skills');
const SKILL = join(SKILLS, 'setup-project');
const SCRIPT = join(SKILL, 'setup.mjs');
const TEMPLATE = JSON.parse(readFileSync(join(SKILL, 'template.json'), 'utf8')) as Record<string, unknown>;
/** What installing the plugin at local scope writes, as the spike saw it. */
const INSTALLED = {
  enabledPlugins: { 'world-of-agents@world-of-agents': true },
  extraKnownMarketplaces: { 'woa-dev': { source: { source: 'directory', path: 'C:\\dev\\woa-dev' } } },
};

const made: string[] = [];
afterEach(() => {
  for (const dir of made.splice(0)) rmSync(dir, { recursive: true, force: true });
});

function project({ git = true, name = 'woa-setup-' } = {}) {
  const dir = mkdtempSync(join(tmpdir(), name));
  made.push(dir);
  if (git) execFileSync('git', ['init', '-q'], { cwd: dir });
  return dir;
}
const settings = (dir: string) => join(dir, '.claude', 'settings.local.json');
function put(dir: string, text: string) {
  mkdirSync(join(dir, '.claude'), { recursive: true });
  writeFileSync(settings(dir), text);
}
const read = (path: string) => readFileSync(path, 'utf8');
const setup = (dir: string, args: string[] = [], script = SCRIPT) =>
  spawnSync(process.execPath, [script, ...args], { cwd: dir, encoding: 'utf8', timeout: 20_000 });

describe('the template', () => {
  it('is exactly the agreed settings: Manual, depth 2, two allows and five denies', () => {
    expect(TEMPLATE).toEqual({
      permissions: {
        defaultMode: 'default',
        allow: ['Bash(npm test)', 'Bash(npm run check)'],
        deny: ['Read(.env)', 'Read(.env.*)', 'Read(.envrc)', 'Bash(git push *)', 'PowerShell(git push *)'],
      },
      env: { CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH: '2' },
    });
  });

  // git status, diff and log already run without asking as Claude Code's built-in read-only commands. A rule like
  // Bash(git diff *) would also allow `git diff --output=<file>`, which writes a file without a prompt (checked for 2a).
  it('adds no git rule: the built-in read-only check covers git, and a git wildcard would allow --output', () => {
    const rules = [...(TEMPLATE.permissions as { allow: string[] }).allow];
    expect(rules.some((rule) => rule.startsWith('Bash(git'))).toBe(false);
  });
});

/** The skill file's frontmatter keys and the injected commands (`!` + a backtick span at the start of a line). */
function parse(file: string) {
  const text = read(join(SKILLS, file));
  const front = /^---\n([\s\S]*?)\n---\n/.exec(text)?.[1] ?? '';
  const keys = Object.fromEntries(
    front
      .split('\n')
      .map((line) => [line.slice(0, line.indexOf(':')), line.slice(line.indexOf(':') + 1).trim()]),
  );
  const injected = [...text.matchAll(/^!`([^`]*)`$/gm)].map((m) => m[1]);
  return { text, keys, injected };
}

const COMMAND = "node '${CLAUDE_PLUGIN_ROOT}/skills/setup-project/setup.mjs'";

describe.each([
  ['setup-project', 'setup-project/SKILL.md', COMMAND],
  ['setup-project-write', 'setup-project-write/SKILL.md', `${COMMAND} --write`],
])('/world-of-agents:%s', (name, file, command) => {
  const { text, keys, injected } = parse(file);

  it('only the user can start it: the model cannot', () => {
    expect(keys.name).toBe(name);
    expect(keys['disable-model-invocation']).toBe('true');
  });

  it('has Claude Code run exactly one fixed command, and pre-approves exactly that command', () => {
    expect(injected).toEqual([command]);
    expect(keys['allowed-tools']).toBe(`Bash(${command})`);
  });

  it('builds the command from nothing the conversation can set, and quotes the path so the shell expands nothing', () => {
    expect(text).not.toContain('$ARGUMENTS');
    expect(text).not.toMatch(/\$\d/);
    // Single quotes: inside double quotes bash would still run a $(...) or backticks in the plugin path.
    expect(command).toMatch(/^node '\$\{CLAUDE_PLUGIN_ROOT\}\/[^']+'( --write)?$/);
  });

  it('leaves the model nothing to run or decide, and says what a disabled shell means', () => {
    expect(text).not.toContain('AskUserQuestion');
    expect(text).toMatch(/You run nothing yourself/);
    expect(text).toContain('[shell command execution disabled by policy]');
    expect(text).toContain('disableSkillShellExecution');
  });
});

describe('setup.mjs', () => {
  it('with no file: shows the template, writes nothing, then writes exactly the template on --write', () => {
    const dir = project();
    const preview = setup(dir);
    expect(preview.status).toBe(0);
    expect(preview.stdout).toContain('Nothing has been written.');
    expect(existsSync(join(dir, '.claude'))).toBe(false);
    expect(existsSync(join(dir, '.gitignore'))).toBe(false);

    const written = setup(dir, ['--write']);
    expect(written.status).toBe(0);
    expect(JSON.parse(read(settings(dir)))).toEqual(TEMPLATE);
    expect(read(join(dir, '.gitignore'))).toBe('.claude/settings.local.json\n');
  });

  it('adds the template to a file holding only what an install wrote, and keeps that byte for byte', () => {
    const dir = project();
    put(dir, JSON.stringify(INSTALLED, null, 2));
    const preview = setup(dir);
    expect(preview.status).toBe(0);
    expect(preview.stdout).toContain('Those stay exactly as they are.');
    expect(JSON.parse(read(settings(dir)))).toEqual(INSTALLED);

    expect(setup(dir, ['--write']).status).toBe(0);
    const after = JSON.parse(read(settings(dir))) as Record<string, unknown>;
    expect(after).toEqual({ ...INSTALLED, ...TEMPLATE });
    expect(Object.keys(after).slice(0, 2)).toEqual(['enabledPlugins', 'extraKnownMarketplaces']);
  });

  it('says "Already set up" and changes nothing when --write runs a second time', () => {
    const dir = project();
    put(dir, JSON.stringify(INSTALLED, null, 2));
    expect(setup(dir, ['--write']).status).toBe(0);
    const settingsBefore = read(settings(dir));
    const ignoreBefore = read(join(dir, '.gitignore'));
    for (const args of [['--write'], []]) {
      const again = setup(dir, args);
      expect(again.status).toBe(0);
      expect(again.stdout).toContain('Already set up, nothing changed.');
      expect(again.stdout).not.toContain('Stopped');
    }
    expect(read(settings(dir))).toBe(settingsBefore);
    expect(read(join(dir, '.gitignore'))).toBe(ignoreBefore);
  });

  it('names exactly the settings that differ from the template, and never their values', () => {
    const template = TEMPLATE as { permissions: Record<string, unknown>; env: Record<string, string> };
    const cases: [Record<string, unknown>, string[]][] = [
      [
        { ...INSTALLED, ...TEMPLATE, permissions: { ...template.permissions, defaultMode: 'auto' } },
        ['permissions.defaultMode'],
      ],
      [
        { ...TEMPLATE, env: { ...template.env, GITHUB_TOKEN: 'ghp_supersecretvalue123' } },
        ['env.GITHUB_TOKEN'],
      ],
      [{ ...TEMPLATE, model: 'opus' }, ['model']],
      [{ ...INSTALLED, permissions: template.permissions }, ['env']],
    ];
    for (const [file, names] of cases) {
      const dir = project();
      const text = JSON.stringify(file, null, 2);
      put(dir, text);
      const run = setup(dir, ['--write']);
      expect(run.status).toBe(0);
      expect(run.stdout).toContain(
        `Settings that differ from the template (missing, extra or changed): ${names.join(', ')}.`,
      );
      expect(run.stdout).not.toContain('supersecretvalue');
      expect(run.stdout).not.toContain('"auto"');
      expect(run.stdout).not.toContain('opus');
      expect(read(settings(dir))).toBe(text);
    }
  });

  // A non-zero exit would abort the skill, so a stop exits 0 and the model can explain it.
  it.each([
    ['other settings', JSON.stringify({ ...INSTALLED, env: { GITHUB_TOKEN: 'ghp_supersecretvalue123' } })],
    ['an earlier permissions block', JSON.stringify({ permissions: { defaultMode: 'auto' } })],
    ['invalid JSON', '{ "enabledPlugins": '],
    ['JSON that is not an object', '["enabledPlugins"]'],
  ])(
    'stops on a file with %s, writes nothing even with --write, exits 0 and never prints its values',
    (_name, text) => {
      const dir = project();
      put(dir, text);
      for (const args of [[], ['--write']]) {
        const run = setup(dir, args);
        expect(run.status).toBe(0);
        expect(run.stdout).toContain('Stopped:');
        expect(run.stdout).toContain('Nothing was written.');
        expect(run.stdout).not.toContain('supersecretvalue');
        expect(run.stdout).not.toContain('"auto"');
      }
      expect(read(settings(dir))).toBe(text);
      expect(existsSync(join(dir, '.gitignore'))).toBe(false);
    },
  );

  it('stops when git tracks the file, because the settings could end up in a commit', () => {
    const dir = project();
    put(dir, JSON.stringify(INSTALLED));
    execFileSync('git', ['add', '-f', '.claude/settings.local.json'], { cwd: dir });
    const run = setup(dir, ['--write']);
    expect(run.status).toBe(0);
    expect(run.stdout).toContain('git tracks this file');
    expect(JSON.parse(read(settings(dir)))).toEqual(INSTALLED);
  });

  it('adds the .gitignore line on its own line, once', () => {
    const dir = project();
    writeFileSync(join(dir, '.gitignore'), 'node_modules');
    expect(setup(dir, ['--write']).status).toBe(0);
    expect(read(join(dir, '.gitignore'))).toBe('node_modules\n.claude/settings.local.json\n');
  });

  it('leaves .gitignore alone when it already covers the file', () => {
    const dir = project();
    writeFileSync(join(dir, '.gitignore'), '*.local.json\n');
    const run = setup(dir, ['--write']);
    expect(run.stdout).toContain('.gitignore: already covers the file.');
    expect(read(join(dir, '.gitignore'))).toBe('*.local.json\n');
  });

  it('counts only a .gitignore: an un-ignore rule or .git/info/exclude still gets the line added', () => {
    const negated = project();
    writeFileSync(join(negated, '.gitignore'), '*.json\n!.claude/settings.local.json\n');
    expect(setup(negated).stdout).toContain('goes into');

    const excluded = project();
    writeFileSync(join(excluded, '.git', 'info', 'exclude'), '.claude/settings.local.json\n');
    expect(setup(excluded, ['--write']).stdout).toContain('was added to');
    expect(read(join(excluded, '.gitignore'))).toBe('.claude/settings.local.json\n');
  });

  it('writes the settings in a folder with no git, and no .gitignore', () => {
    const dir = project({ git: false });
    const run = setup(dir, ['--write']);
    expect(run.status).toBe(0);
    expect(run.stdout).toContain('not a git repository');
    expect(JSON.parse(read(settings(dir)))).toEqual(TEMPLATE);
    expect(existsSync(join(dir, '.gitignore'))).toBe(false);
  });

  it('works with a space in the plugin folder and in the project folder', () => {
    const plugin = project({ git: false, name: 'woa plugin copy ' });
    copyFileSync(SCRIPT, join(plugin, 'setup.mjs'));
    copyFileSync(join(SKILL, 'template.json'), join(plugin, 'template.json'));
    const dir = project({ name: 'my project ' });
    const run = setup(dir, ['--write'], join(plugin, 'setup.mjs'));
    expect(run.status).toBe(0);
    expect(JSON.parse(read(settings(dir)))).toEqual(TEMPLATE);
  });

  // On Windows `bash` can be WSL's, which can't run a Windows path. Git Bash says msys or cygwin (as in woa.test.ts).
  const bashWorks =
    process.platform !== 'win32' ||
    /msys|cygwin/.test(spawnSync('bash', ['-c', 'echo $OSTYPE'], { encoding: 'utf8' }).stdout ?? '');

  /** A plugin copy holding just the script and template, under a folder whose name starts with `name`. */
  function pluginUnder(name: string) {
    const root = join(project({ git: false, name }), 'plugin');
    mkdirSync(join(root, 'skills', 'setup-project'), { recursive: true });
    copyFileSync(SCRIPT, join(root, 'skills', 'setup-project', 'setup.mjs'));
    copyFileSync(join(SKILL, 'template.json'), join(root, 'skills', 'setup-project', 'template.json'));
    return root;
  }
  /** The write skill's injected command with the plugin folder put in, as Claude Code does before bash runs it. */
  const injectedFor = (root: string) =>
    parse('setup-project-write/SKILL.md').injected[0]?.replace('${CLAUDE_PLUGIN_ROOT}', root) ?? '';

  it.skipIf(!bashWorks)("runs the skill's command through bash from an ordinary plugin folder", () => {
    const dir = project();
    const run = spawnSync('bash', ['-c', injectedFor(pluginUnder('woa plugin '))], {
      cwd: dir,
      encoding: 'utf8',
    });
    expect(run.status).toBe(0);
    expect(run.stdout).toContain('Written.');
    expect(JSON.parse(read(settings(dir)))).toEqual(TEMPLATE);
  });

  it.skipIf(!bashWorks)(
    "fails cleanly from a plugin folder with an apostrophe (O'Brien): bash refuses the command and nothing runs",
    () => {
      const dir = project();
      const run = spawnSync('bash', ['-c', injectedFor(pluginUnder("woa O'Brien "))], {
        cwd: dir,
        encoding: 'utf8',
      });
      expect(run.status).not.toBe(0);
      expect(run.stderr).toMatch(/unexpected EOF while looking for matching/);
      expect(`${run.stdout}${run.stderr}`).not.toContain('World of Agents project setup');
      expect(existsSync(join(dir, '.claude'))).toBe(false);
    },
  );

  it('takes no arguments but --write', () => {
    const dir = project();
    for (const args of [['--force'], ['--write', 'x'], ['../elsewhere']]) {
      const run = setup(dir, args);
      expect(run.status).toBe(1);
      expect(run.stdout).toContain('Usage');
    }
    expect(existsSync(join(dir, '.claude'))).toBe(false);
  });

  it('needs nothing but Node', () => {
    const imports = [...read(SCRIPT).matchAll(/^import .* from '([^']+)';$/gm)].map((m) => m[1]);
    for (const name of imports) expect(name).toMatch(/^node:/);
  });
});
