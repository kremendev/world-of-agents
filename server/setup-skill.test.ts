import { execFileSync, spawnSync } from 'node:child_process';
import {
  copyFileSync,
  cpSync,
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  readdirSync,
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
const VERSIONS = join(SKILL, 'versions');
type Template = { permissions: Record<string, unknown>; env: Record<string, string> };
/** The earlier template versions' files, oldest first. */
const versionFiles = () => readdirSync(VERSIONS).sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
const V1 = JSON.parse(readFileSync(join(VERSIONS, '1.json'), 'utf8')) as Template;
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

describe('the template versions', () => {
  const git = (args: string[]) =>
    spawnSync('git', args, {
      cwd: resolve(SKILLS, '..', '..'),
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    });

  // An upgrade recognises an earlier version by its content, so every version main ever had must be here. Changing
  // template.json means first saving the committed one as the next versions/N.json; this fails until that is done.
  it('keeps every template.json the history holds, oldest first: versions/1.json, 2.json, … then template.json', (context) => {
    const path = 'plugin/skills/setup-project/template.json';
    if (git(['rev-parse', '--is-shallow-repository']).stdout.trim() !== 'false') context.skip(); // no history here
    const commits = git(['log', '--reverse', '--format=%H', '--', path]).stdout.split('\n').filter(Boolean);
    const history = commits.map((commit) => git(['show', `${commit}:${path}`]).stdout);
    expect(history.length).toBeGreaterThanOrEqual(2);
    const kept = [...versionFiles().map((name) => join(VERSIONS, name)), join(SKILL, 'template.json')].map(
      (file) => readFileSync(file, 'utf8'),
    );
    // template.json is either the newest commit's, or a change not committed yet, after the newest commit's.
    expect(kept.slice(0, history.length)).toEqual(history);
    expect(kept.length - history.length).toBeLessThanOrEqual(1);
  });

  it('numbers them from 1 with no gap, and tells each from every other by the settings it manages', () => {
    const names = versionFiles();
    expect(names).toEqual(names.map((_, i) => `${i + 1}.json`));
    const all = [
      ...names.map((name) => readFileSync(join(VERSIONS, name), 'utf8')),
      JSON.stringify(TEMPLATE),
    ].map((text) => JSON.parse(text) as Record<string, unknown>);
    for (const version of all) expect(Object.keys(version).sort()).toEqual(['env', 'permissions']);
    expect(new Set(all.map((version) => JSON.stringify(version))).size).toBe(all.length);
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

  it('promises no mode the desktop app may not keep', () => {
    expect(text).not.toMatch(/starts? in Manual/);
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
    // No promise the desktop app may not keep: a folder's own pick wins, and it took the file only in a git repo (11 Nov).
    expect(written.stdout).toContain(
      'Written. Manual mode and subagent depth 2 apply from the next new session in this project. In the desktop app, ' +
        'check the mode selector then: a mode picked for this folder wins over this file, and in our tests the app used ' +
        'this file only in a git repository.',
    );
    expect(written.stdout).not.toMatch(/start in Manual/);
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

  it('says "Already set up" beside settings it does not manage, and names them, never their values', () => {
    const template = TEMPLATE as Template;
    const dir = project();
    const text = JSON.stringify(
      {
        ...INSTALLED,
        ...TEMPLATE,
        env: { GITHUB_TOKEN: 'ghp_supersecretvalue123', ...template.env },
        model: 'opus',
      },
      null,
      2,
    );
    put(dir, text);
    for (const args of [[], ['--write']]) {
      const run = setup(dir, args);
      expect(run.stdout).toContain('Already set up, nothing changed.');
      expect(run.stdout).toContain(
        'Every other setting stays exactly as it is: enabledPlugins, extraKnownMarketplaces, env.GITHUB_TOKEN, model.',
      );
      expect(run.stdout).not.toContain('supersecretvalue');
      expect(run.stdout).not.toContain('opus');
    }
    expect(read(settings(dir))).toBe(text);
  });

  it('names exactly the settings that differ from the template, and never their values', () => {
    const template = TEMPLATE as Template;
    const cases: [Record<string, unknown>, string[]][] = [
      [
        { ...INSTALLED, ...TEMPLATE, permissions: { ...template.permissions, defaultMode: 'auto' } },
        ['permissions.defaultMode'],
      ],
      [{ ...INSTALLED, permissions: template.permissions }, ['env.CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH']],
      // Our env key alone is ours too: never a merge over it.
      [
        { ...INSTALLED, env: { CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH: '3' } },
        ['permissions', 'env.CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH'],
      ],
      [{ ...INSTALLED, env: 'opus' }, ['env', 'permissions', 'env.CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH']],
      [
        { model: 'opus', env: { GITHUB_TOKEN: 'ghp_supersecretvalue123' } },
        ['model', 'env.GITHUB_TOKEN', 'permissions', 'env.CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH'],
      ],
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

  describe('a first setup beside rules the project gathered before', () => {
    // A project used before World of Agents has "Always allow" rules. These two are the ones woa-m2-test got on 11 Nov.
    const ADDED = ['Bash(node hello.js)', 'Bash(echo "EXIT:$?")'];
    const template = TEMPLATE as Template & { permissions: { allow: string[]; deny: string[] } };
    const file = {
      ...INSTALLED,
      permissions: { allow: ADDED, deny: ['Bash(rm -rf *)'], ask: ['Bash(git commit *)'] },
    };
    const LISTED = [
      'Rules you added stay as they are:',
      '- allow "Bash(node hello.js)"',
      '- allow "Bash(echo \\"EXIT:$?\\")"',
      '- deny "Bash(rm -rf *)"',
      '- ask "Bash(git commit *)"',
      'Every other setting stays exactly as it is: enabledPlugins, extraKnownMarketplaces.',
    ].join('\n');

    it('the dry run shows the template and lists the rules as staying, and writes nothing', () => {
      const dir = project();
      const text = JSON.stringify(file, null, 2);
      put(dir, text);
      const run = setup(dir);
      expect(run.status).toBe(0);
      expect(run.stdout).toContain(
        [
          'The file holds only what installing the plugin put there and permission rules gathered before it.',
          "The template's settings go in beside them:",
          JSON.stringify(TEMPLATE, null, 2),
          LISTED,
        ].join('\n'),
      );
      expect(run.stdout).toContain('Nothing has been written.');
      expect(read(settings(dir))).toBe(text);
      expect(existsSync(join(dir, '.gitignore'))).toBe(false);
    });

    it("--write puts the template's rules first, the project's after them, and a second run changes nothing", () => {
      const dir = project();
      put(dir, JSON.stringify(file, null, 2));
      const run = setup(dir, ['--write']);
      expect(run.stdout).toContain(LISTED);
      expect(run.stdout).toContain('Written.');
      const after = JSON.parse(read(settings(dir))) as Record<string, unknown>;
      expect(after).toEqual({
        ...INSTALLED,
        permissions: {
          defaultMode: 'default',
          allow: [...template.permissions.allow, ...ADDED],
          deny: [...template.permissions.deny, 'Bash(rm -rf *)'],
          ask: ['Bash(git commit *)'],
        },
        env: template.env,
      });
      expect(Object.keys(after)).toEqual(['enabledPlugins', 'extraKnownMarketplaces', 'permissions', 'env']);
      expect(read(join(dir, '.gitignore'))).toBe('.claude/settings.local.json\n');

      const written = read(settings(dir));
      const again = setup(dir, ['--write']);
      expect(again.stdout).toContain('Already set up, nothing changed.');
      expect(again.stdout).toContain('- allow "Bash(echo \\"EXIT:$?\\")"');
      expect(read(settings(dir))).toBe(written);
    });

    it('a rule the template has already is kept once and not listed as yours', () => {
      const dir = project();
      put(dir, JSON.stringify({ permissions: { allow: ['Bash(npm test)', ADDED[0]] } }));
      const run = setup(dir, ['--write']);
      expect(run.stdout).toContain('Rules you added stay as they are:\n- allow "Bash(node hello.js)"\n');
      expect(run.stdout).not.toContain('- allow "Bash(npm test)"');
      const after = JSON.parse(read(settings(dir))) as { permissions: { allow: string[] } };
      expect(after.permissions.allow).toEqual([...template.permissions.allow, ADDED[0]]);

      const only = project();
      put(only, JSON.stringify({ permissions: { allow: ['Bash(npm test)'] } }));
      expect(setup(only).stdout).toContain('Every rule it holds is in the template already.');
    });

    it('shows each rule escaped, never the whole file', () => {
      const dir = project();
      // Written as numbers: see CLAUDE.md on typed escapes. A right-to-left override and a zero-width space.
      const sneaky = `Bash(echo ok${String.fromCodePoint(0x202e)}gnp.exe${String.fromCodePoint(0x200b)})`;
      put(dir, JSON.stringify({ ...INSTALLED, permissions: { allow: [sneaky] } }));
      for (const args of [[], ['--write']]) {
        const run = setup(dir, args);
        expect(run.stdout).toContain('- allow "Bash(echo ok\\u202egnp.exe\\u200b)"');
        for (const n of [0x202e, 0x200b]) expect(run.stdout).not.toContain(String.fromCodePoint(n));
      }
    });

    it('anything else under permissions, or beside it, stops as before, and no rule is shown', () => {
      const user = ADDED[0];
      const cases: Record<string, unknown>[] = [
        { ...INSTALLED, permissions: { defaultMode: 'default', allow: [user] } },
        { ...INSTALLED, permissions: { allow: [user], additionalDirectories: ['../elsewhere'] } },
        { ...INSTALLED, permissions: { allow: [user, 3] } },
        { ...INSTALLED, permissions: { allow: user } },
        { ...INSTALLED, permissions: { allow: [user] }, env: { CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH: '2' } },
        { ...INSTALLED, permissions: { allow: [user] }, model: 'opus' },
      ];
      for (const file of cases) {
        const dir = project();
        const text = JSON.stringify(file);
        put(dir, text);
        for (const args of [[], ['--write']]) {
          const run = setup(dir, args);
          expect(run.status).toBe(0);
          expect(run.stdout).toContain('Stopped: the file holds settings that differ from the template.');
          expect(run.stdout).not.toContain('node hello.js');
          expect(run.stdout).not.toContain('elsewhere');
        }
        expect(read(settings(dir))).toBe(text);
      }
    });
  });

  describe('an upgrade from an earlier template', () => {
    /** What the 2a setup wrote next to an install: version 1, merged by that version of this script. */
    const fromV1 = JSON.stringify({ ...INSTALLED, ...V1 }, null, 2) + '\n';

    it('the dry run names the version and the rules it adds, and writes nothing', () => {
      const dir = project();
      put(dir, fromV1);
      const run = setup(dir);
      expect(run.status).toBe(0);
      expect(run.stdout).toContain(
        "The file holds version 1 of the template's settings. Writing upgrades them to version 2, the current one.",
      );
      expect(run.stdout).toContain('- adds the deny rule PowerShell(git push *)\n');
      expect(run.stdout).not.toContain('removes');
      expect(run.stdout).toContain(
        'Every other setting stays exactly as it is: enabledPlugins, extraKnownMarketplaces.',
      );
      expect(run.stdout).toContain('Nothing has been written.');
      expect(read(settings(dir))).toBe(fromV1);
      expect(existsSync(join(dir, '.gitignore'))).toBe(false);
    });

    it('--write replaces only the managed settings, then a second run says "Already set up"', () => {
      const dir = project();
      put(dir, fromV1);
      const run = setup(dir, ['--write']);
      expect(run.status).toBe(0);
      expect(run.stdout).toContain('Upgraded the settings from version 1 of the template to version 2');
      expect(run.stdout).toContain('Written.');
      const after = JSON.parse(read(settings(dir))) as Record<string, unknown>;
      expect(after).toEqual({ ...INSTALLED, ...TEMPLATE });
      expect(Object.keys(after)).toEqual(['enabledPlugins', 'extraKnownMarketplaces', 'permissions', 'env']);
      expect(read(join(dir, '.gitignore'))).toBe('.claude/settings.local.json\n');

      const written = read(settings(dir));
      const again = setup(dir, ['--write']);
      expect(again.stdout).toContain('Already set up, nothing changed.');
      expect(read(settings(dir))).toBe(written);
    });

    it('leaves every other setting as it was, in its place, and never prints its value', () => {
      const dir = project();
      const file = {
        model: 'opus',
        ...INSTALLED,
        permissions: { deny: V1.permissions.deny, allow: V1.permissions.allow, defaultMode: 'default' },
        env: { GITHUB_TOKEN: 'ghp_supersecretvalue123', ...V1.env, LANG: 'C' },
        hooks: { Stop: [] },
      };
      put(dir, JSON.stringify(file));
      for (const args of [[], ['--write']]) {
        const run = setup(dir, args);
        expect(run.stdout).toContain('version 1');
        expect(run.stdout).toContain(
          'Every other setting stays exactly as it is: model, enabledPlugins, extraKnownMarketplaces, env.GITHUB_TOKEN, env.LANG, hooks.',
        );
        expect(run.stdout).not.toContain('supersecretvalue');
        expect(run.stdout).not.toContain('opus');
      }
      const after = JSON.parse(read(settings(dir))) as Record<string, unknown>;
      expect(after).toEqual({
        ...file,
        permissions: TEMPLATE.permissions,
        env: { ...file.env, ...(TEMPLATE as Template).env },
      });
      expect(Object.keys(after)).toEqual(Object.keys(file));
      expect(Object.keys(after.env as object)).toEqual(Object.keys(file.env));
    });

    describe('rules the user added', () => {
      // An "Always allow" click adds a rule to permissions.allow. These two are the ones woa-m2-test had on 10 Nov.
      const ADDED = ['Bash(node hello.js)', 'Bash(echo "exit=$?")'];
      const v1 = V1.permissions as { defaultMode: string; allow: string[]; deny: string[] };
      const template = TEMPLATE as Template & { permissions: { allow: string[]; deny: string[] } };
      /** Version 1 next to an install, the user's rules in among ours, and an ask list that holds only theirs. */
      const file = {
        ...INSTALLED,
        permissions: {
          defaultMode: 'default',
          allow: [v1.allow[0], ADDED[0], v1.allow[1], ADDED[1]],
          deny: [...v1.deny, 'Bash(rm -rf *)'],
          ask: ['Bash(git commit *)'],
        },
        env: { GITHUB_TOKEN: 'ghp_supersecretvalue123', ...V1.env },
      };
      const LISTED = [
        'Rules you added stay as they are:',
        '- allow "Bash(node hello.js)"',
        '- allow "Bash(echo \\"exit=$?\\")"',
        '- deny "Bash(rm -rf *)"',
        '- ask "Bash(git commit *)"',
      ].join('\n');

      it('the dry run upgrades the rest and lists them as staying, and writes nothing', () => {
        const dir = project();
        const text = JSON.stringify(file, null, 2);
        put(dir, text);
        const run = setup(dir);
        expect(run.status).toBe(0);
        expect(run.stdout).toContain(
          [
            "The file holds version 1 of the template's settings. Writing upgrades them to version 2, the current one. The upgrade:",
            '- adds the deny rule PowerShell(git push *)',
            LISTED,
            'Every other setting stays exactly as it is: enabledPlugins, extraKnownMarketplaces, env.GITHUB_TOKEN.',
          ].join('\n'),
        );
        expect(run.stdout).not.toContain('supersecretvalue');
        expect(read(settings(dir))).toBe(text);
      });

      it("--write replaces only the template's rules, keeps the user's after them, and a second run changes nothing", () => {
        const dir = project();
        put(dir, JSON.stringify(file, null, 2));
        const run = setup(dir, ['--write']);
        expect(run.stdout).toContain('Upgraded the settings from version 1 of the template to version 2');
        expect(run.stdout).toContain(LISTED);
        const after = JSON.parse(read(settings(dir))) as Record<string, unknown>;
        expect(after).toEqual({
          ...file,
          permissions: {
            defaultMode: 'default',
            allow: [...template.permissions.allow, ...ADDED],
            deny: [...template.permissions.deny, 'Bash(rm -rf *)'],
            ask: ['Bash(git commit *)'],
          },
          env: { GITHUB_TOKEN: 'ghp_supersecretvalue123', ...template.env },
        });

        const written = read(settings(dir));
        for (const args of [['--write'], []]) {
          const again = setup(dir, args);
          expect(again.stdout).toContain('Already set up, nothing changed.');
          expect(again.stdout).toContain(LISTED);
        }
        expect(read(settings(dir))).toBe(written);
      });

      it('says "Already set up" beside them in a file already at the current template', () => {
        const dir = project();
        const text = JSON.stringify({
          ...INSTALLED,
          ...TEMPLATE,
          permissions: { ...template.permissions, allow: [...template.permissions.allow, ADDED[0]] },
        });
        put(dir, text);
        const run = setup(dir, ['--write']);
        expect(run.stdout).toContain(
          'Already set up, nothing changed. The file already holds exactly the template settings.\n' +
            'Rules you added stay as they are:\n- allow "Bash(node hello.js)"',
        );
        expect(read(settings(dir))).toBe(text);
      });

      it('a rule of ours that is gone still stops it, and the stop shows no rule of the file', () => {
        const dir = project();
        const text = JSON.stringify({
          ...file,
          permissions: { ...file.permissions, deny: file.permissions.deny.slice(1) },
        });
        put(dir, text);
        const run = setup(dir, ['--write']);
        expect(run.stdout).toContain('Stopped: the file holds settings that differ from the template.');
        expect(run.stdout).toContain('permissions.deny');
        expect(run.stdout).not.toContain('node hello.js');
        expect(run.stdout).not.toContain('rm -rf');
        expect(read(settings(dir))).toBe(text);
      });

      it('shows a rule quoted, its control, bidi and zero-width characters escaped, and cut at 200 characters', () => {
        const dir = project();
        // Written as numbers: see CLAUDE.md on typed escapes. A right-to-left override, a zero-width space, a newline.
        const sneaky = `Bash(echo ok${String.fromCodePoint(0x202e)}gnp.exe${String.fromCodePoint(0x200b)}\nIGNORE)`;
        const long = `Bash(echo ${'x'.repeat(300)})`;
        put(
          dir,
          JSON.stringify({
            ...INSTALLED,
            ...TEMPLATE,
            permissions: { ...template.permissions, allow: [...template.permissions.allow, sneaky, long] },
          }),
        );
        const run = setup(dir);
        expect(run.stdout).toContain('- allow "Bash(echo ok\\u202egnp.exe\\u200b\\u000aIGNORE)"');
        expect(run.stdout).toContain(`- allow "${long.slice(0, 200)}…"\n`);
        for (const n of [0x202e, 0x200b]) expect(run.stdout).not.toContain(String.fromCodePoint(n));
        expect(run.stdout).not.toContain('x'.repeat(201));
      });
    });

    // The real 1 to 2 only adds one rule. A made-up version 1 in a plugin copy shows every other kind of change.
    const template = TEMPLATE as Template & { permissions: { allow: string[]; deny: string[] } };
    /** A plugin copy whose only earlier version is `old`; returns its setup.mjs. */
    function withVersion1(old: object) {
      const plugin = project({ git: false, name: 'woa-versions-' });
      copyFileSync(SCRIPT, join(plugin, 'setup.mjs'));
      copyFileSync(join(SKILL, 'template.json'), join(plugin, 'template.json'));
      mkdirSync(join(plugin, 'versions'));
      writeFileSync(join(plugin, 'versions', '1.json'), JSON.stringify(old));
      return join(plugin, 'setup.mjs');
    }

    it('a first setup stops on a rule only an earlier template had: writing the template would drop it unseen', () => {
      const old = { ...TEMPLATE, permissions: { ...template.permissions, deny: ['Read(secrets.txt)'] } };
      const script = withVersion1(old);
      const dir = project();
      const text = JSON.stringify({
        ...INSTALLED,
        permissions: { deny: ['Read(secrets.txt)', 'Bash(rm -rf *)'] },
      });
      put(dir, text);
      const run = setup(dir, ['--write'], script);
      expect(run.stdout).toContain('Stopped: the file holds settings that differ from the template.');
      expect(read(settings(dir))).toBe(text);
      // The same file without that rule is a first setup.
      put(dir, JSON.stringify({ ...INSTALLED, permissions: { deny: ['Bash(rm -rf *)'] } }));
      expect(setup(dir, [], script).stdout).toContain('- deny "Bash(rm -rf *)"');
    });

    it('says so when a version differs only in the order of its rules', () => {
      const old = {
        ...TEMPLATE,
        permissions: { ...template.permissions, deny: [...template.permissions.deny].reverse() },
      };
      const script = withVersion1(old);
      const dir = project();
      put(dir, JSON.stringify(old));
      expect(setup(dir, [], script).stdout).toContain(
        'The upgrade:\n- adds and removes no rule: only their order changes\n',
      );
    });

    it('lists every change from a version, removals included, and drops an env key the template no longer has', () => {
      const old = {
        permissions: {
          defaultMode: 'acceptEdits',
          allow: [...template.permissions.allow, 'Bash(npm run lint)'],
          deny: template.permissions.deny.slice(0, -1),
          ask: ['Bash(rm *)'],
        },
        env: { CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH: '3', WOA_OLD: '1' },
      };
      const script = withVersion1(old);
      const dir = project();
      put(
        dir,
        JSON.stringify({
          ...INSTALLED,
          ...old,
          env: { ...old.env, GITHUB_TOKEN: 'ghp_supersecretvalue123' },
        }),
      );
      const run = setup(dir, [], script);
      expect(run.stdout).toContain(
        [
          'Writing upgrades them to version 2, the current one. The upgrade:',
          '- sets permissions.defaultMode to "default"',
          '- removes the allow rule Bash(npm run lint)',
          '- adds the deny rule PowerShell(git push *)',
          '- removes the ask rule Bash(rm *)',
          '- sets env.CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH to "2"',
          '- removes env.WOA_OLD',
          'Every other setting stays exactly as it is: enabledPlugins, extraKnownMarketplaces, env.GITHUB_TOKEN.',
        ].join('\n'),
      );
      expect(run.stdout).not.toContain('supersecretvalue');

      expect(setup(dir, ['--write'], script).stdout).toContain('Written.');
      const after = JSON.parse(read(settings(dir))) as { env: Record<string, string> };
      expect(after).toEqual({
        ...INSTALLED,
        ...TEMPLATE,
        env: { CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH: '2', GITHUB_TOKEN: 'ghp_supersecretvalue123' },
      });
      expect(Object.keys(after.env)).toEqual(['CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH', 'GITHUB_TOKEN']);
      expect(setup(dir, ['--write'], script).stdout).toContain('Already set up');
    });

    it('an earlier version changed in any way is no version: it stops, names the settings and writes nothing', () => {
      const v1 = V1.permissions as { defaultMode: string; allow: string[]; deny: string[] };
      const changed: Record<string, unknown>[] = [
        // One of ours missing stops it, even with a rule the user added beside the rest.
        { ...V1, permissions: { ...v1, allow: [...v1.allow.slice(1), 'Bash(npm run build)'] } },
        { ...V1, permissions: { ...v1, deny: v1.deny.slice(1) } },
        { ...V1, permissions: { ...v1, deny: [...v1.deny].reverse() } },
        { ...V1, permissions: { ...v1, defaultMode: 'acceptEdits' } },
        { ...V1, permissions: { ...v1, ask: [] } },
        { ...V1, env: { CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH: '3' } },
        { ...V1, env: {} },
        { permissions: V1.permissions },
      ];
      for (const file of changed) {
        const dir = project();
        const text = JSON.stringify({ ...INSTALLED, ...file }, null, 2);
        put(dir, text);
        for (const args of [[], ['--write']]) {
          const run = setup(dir, args);
          expect(run.status).toBe(0);
          expect(run.stdout).toContain('Stopped: the file holds settings that differ from the template.');
          expect(run.stdout).not.toContain('version 1');
          expect(run.stdout).not.toContain('acceptEdits');
          expect(run.stdout).not.toContain('npm run build');
          expect(run.stdout).not.toContain('"3"');
        }
        expect(read(settings(dir))).toBe(text);
      }
    });
  });

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
    cpSync(VERSIONS, join(plugin, 'versions'), { recursive: true });
    const dir = project({ name: 'my project ' });
    const run = setup(dir, ['--write'], join(plugin, 'setup.mjs'));
    expect(run.status).toBe(0);
    expect(JSON.parse(read(settings(dir)))).toEqual(TEMPLATE);
  });

  // On Windows `bash` can be WSL's, which can't run a Windows path. Git Bash says msys or cygwin (as in woa.test.ts).
  const bashWorks =
    process.platform !== 'win32' ||
    /msys|cygwin/.test(spawnSync('bash', ['-c', 'echo $OSTYPE'], { encoding: 'utf8' }).stdout ?? '');

  /** A plugin copy holding just the script and the templates, under a folder whose name starts with `name`. */
  function pluginUnder(name: string) {
    const root = join(project({ git: false, name }), 'plugin');
    mkdirSync(join(root, 'skills', 'setup-project'), { recursive: true });
    copyFileSync(SCRIPT, join(root, 'skills', 'setup-project', 'setup.mjs'));
    copyFileSync(join(SKILL, 'template.json'), join(root, 'skills', 'setup-project', 'template.json'));
    cpSync(VERSIONS, join(root, 'skills', 'setup-project', 'versions'), { recursive: true });
    return root;
  }
  /** The write skill's injected command with the plugin folder put in, as Claude Code does before bash runs it. */
  const injectedFor = (root: string) =>
    parse('setup-project-write/SKILL.md').injected[0]?.replace('${CLAUDE_PLUGIN_ROOT}', root) ?? '';

  it('the write skill tells the model what the desktop app does with the mode', () => {
    expect(parse('setup-project-write/SKILL.md').text.replace(/\s+/g, ' ')).toContain(
      'a mode picked for this folder wins over the file, and in our tests the app used the file only in a git repository.',
    );
  });

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
