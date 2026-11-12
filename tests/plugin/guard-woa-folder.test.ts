// No agent edits ~/.world-of-agents (v3.4 review, fix 2): the team there loads as a plugin and the hall's token lives
// there. The guard denies Edit and Write into it for every caller, with or without the project's setup, by the path as
// written and by where it really lands. A temp folder stands in for the home folder.
import { spawnSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, realpathSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterAll, describe, expect, it } from 'vitest';
import { decide, denial, EDITORS, inWoaFolder, REASONS } from '../../plugin/hooks/guard.mjs';
import { defaults } from '../../plugin/team/team.mjs';

const WIN = process.platform === 'win32';
// The real path, so the home given and the one realpath finds are spelled alike.
const temp = realpathSync.native(mkdtempSync(join(tmpdir(), 'woa-folder-')));
afterAll(() => rmSync(temp, { recursive: true, force: true, maxRetries: 5 }));

const HOME = join(temp, 'home');
const WOA = join(HOME, '.world-of-agents');
const PROJECT = join(HOME, 'project');
mkdirSync(join(WOA, 'team', 'agents'), { recursive: true });
mkdirSync(PROJECT, { recursive: true });
writeFileSync(join(WOA, 'team', 'agents', 'frontend-react-dev.md'), '---\nname: x\n---\n');
const TABLE = defaults().team;

const CALLERS: [name: string, caller: Record<string, unknown>][] = [
  ['the Lead', { agent_type: 'world-of-agents:lead' }],
  ...EDITORS.map((type): [string, Record<string, unknown>] => [type, { agent_id: 'a1', agent_type: type }]),
  ['a specialist that edits', { agent_id: 'a1', agent_type: 'woa-team:frontend-react-dev' }],
  ['an unknown agent', { agent_id: 'a1', agent_type: 'general-purpose' }],
];

const edit = (tool: string, file_path: string, caller: Record<string, unknown>, cwd: unknown = PROJECT) =>
  JSON.stringify({
    hook_event_name: 'PreToolUse',
    cwd,
    tool_name: tool,
    tool_input: { file_path, content: 'x' },
    ...caller,
  });

/** The short (8.3) name of `path`, or null where the drive keeps none. Windows only. */
function shortName(path: string): string | null {
  if (!WIN) return null;
  // Verbatim, so cmd gets the quotes as typed: Node would escape them in a way cmd doesn't read.
  const run = spawnSync('cmd.exe', ['/d', '/s', '/c', `"for %I in ("${path}") do @echo %~sI"`], {
    encoding: 'utf8',
    windowsVerbatimArguments: true,
  });
  const out = run.status === 0 ? run.stdout.trim() : '';
  return out !== '' && out.toLowerCase() !== path.toLowerCase() ? out : null;
}

describe('Edit and Write into ~/.world-of-agents', () => {
  const inside = join(WOA, 'team', 'hooks', 'hooks.json');
  const slash = WIN ? '\\' : '/';

  const WAYS: [name: string, path: string, cwd?: string][] = [
    ['a new file in the team folder', inside],
    ['a file that is there', join(WOA, 'team', 'agents', 'frontend-react-dev.md')],
    ['the token', join(WOA, 'token')],
    ['the folder itself', WOA],
    ['with a trailing separator', `${WOA}${slash}`],
    ['through .. from the project', [PROJECT, '..', '.world-of-agents', 'team', 'x.md'].join(slash)],
    ['out and back in with ..', [WOA, 'team', '..', 'team', 'x.md'].join(slash)],
    ['relative to the cwd', `..${slash}.world-of-agents${slash}team${slash}x.md`],
    ['from ~', `~${slash}.world-of-agents${slash}team${slash}x.md`],
    ['with forward slashes', inside.replace(/\\/g, '/')],
    ...(WIN
      ? ([
          ['in other letter cases', inside.toUpperCase()],
          ['with the \\\\?\\ prefix', `\\\\?\\${inside}`],
        ] as [string, string][])
      : []),
  ];

  it.each(WAYS)('denies %s, for every caller', (_, path, cwd) => {
    for (const [name, caller] of CALLERS) {
      for (const tool of ['Edit', 'Write']) {
        expect(decide(edit(tool, path, caller, cwd ?? PROJECT), TABLE, HOME), `${name} ${tool}`).toBe(
          denial(REASONS.woa),
        );
      }
    }
  });

  it('denies it without the team table too: the rule needs no setup', () => {
    for (const [name, caller] of CALLERS) {
      expect(decide(edit('Write', inside, caller), null, HOME), name).toBe(denial(REASONS.woa));
    }
  });

  it('denies a path through a junction or link in the project that leads into it', () => {
    const link = join(PROJECT, 'innocent');
    symlinkSync(join(WOA, 'team'), link, WIN ? 'junction' : 'dir');
    for (const [name, caller] of CALLERS) {
      expect(
        decide(edit('Edit', join(link, 'agents', 'frontend-react-dev.md'), caller), TABLE, HOME),
        name,
      ).toBe(denial(REASONS.woa));
      expect(decide(edit('Write', join(link, 'skills', 'new', 'SKILL.md'), caller), TABLE, HOME), name).toBe(
        denial(REASONS.woa),
      );
    }
  });

  it('denies the 8.3 short name of the folder (skipped where the drive keeps none)', (context) => {
    const short = shortName(WOA);
    if (short === null) context.skip();
    expect(short).toMatch(/~\d/);
    for (const [name, caller] of CALLERS) {
      expect(decide(edit('Write', join(short!, 'team', 'x.md'), caller), TABLE, HOME), name).toBe(
        denial(REASONS.woa),
      );
    }
  });

  it('leaves other paths to the other rules: a look-alike folder, a project file', () => {
    for (const path of [
      join(HOME, '.world-of-agents-backup', 'x.md'),
      join(HOME, 'world-of-agents', 'x.md'),
      join(PROJECT, '.world-of-agents.md'),
      join(PROJECT, 'src', 'app.ts'),
    ]) {
      expect(inWoaFolder(path, PROJECT, HOME), path).toBe(false);
      // A dev's edit there goes to its own prompt, as before.
      expect(
        decide(edit('Edit', path, { agent_id: 'a1', agent_type: 'world-of-agents:backend' }), TABLE, HOME),
      ).toBeNull();
    }
    expect(decide(edit('Write', join(PROJECT, 'BACKLOG.md'), CALLERS[0]![1]), TABLE, HOME)).toBeNull();
  });

  it('matches case-blind on Windows only', () => {
    expect(inWoaFolder(join(HOME, '.World-Of-Agents', 'x'), PROJECT, HOME)).toBe(WIN);
  });

  it('denies creating the folder before the setup made it, in any letter case on Windows', () => {
    const fresh = join(temp, 'fresh-home');
    mkdirSync(fresh);
    const lead = CALLERS[0]![1];
    expect(
      decide(
        edit('Write', join(fresh, '.world-of-agents', 'team', 'hooks', 'hooks.json'), lead, fresh),
        null,
        fresh,
      ),
    ).toBe(denial(REASONS.woa));
    const upper = decide(
      edit('Write', join(fresh, '.WORLD-OF-AGENTS', 'team', 'x.md'), lead, fresh),
      null,
      fresh,
    );
    expect(upper).toBe(WIN ? denial(REASONS.woa) : denial(REASONS.edit));
  });
});
