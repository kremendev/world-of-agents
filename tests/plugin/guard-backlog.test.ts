// The Lead's BACKLOG.md as it stands on disk (v3.3 review, fix 1): the guard leaves the Lead's write alone only for a plain
// file with one name, or none yet. Real files in a temp project; guard-backlog-mock.test.ts covers what this PC can't make.
import { linkSync, mkdirSync, mkdtempSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterAll, describe, expect, it } from 'vitest';
import { decide, denial, REASONS } from '../../plugin/hooks/guard.mjs';

const temp = mkdtempSync(join(tmpdir(), 'woa-backlog-'));
afterAll(() => rmSync(temp, { recursive: true, force: true, maxRetries: 5 }));

/** A project with .claude/settings.local.json, as the setup leaves it. */
function project(name: string): { cwd: string; backlog: string; settings: string } {
  const cwd = join(temp, name);
  mkdirSync(join(cwd, '.claude'), { recursive: true });
  const settings = join(cwd, '.claude', 'settings.local.json');
  writeFileSync(settings, '{"permissions":{"defaultMode":"default"}}\n');
  return { cwd, backlog: join(cwd, 'BACKLOG.md'), settings };
}

const lead = (tool: string, cwd: string, file_path: string) =>
  JSON.stringify({
    hook_event_name: 'PreToolUse',
    agent_type: 'world-of-agents:lead',
    cwd,
    tool_name: tool,
    tool_input: { file_path, content: '# Backlog' },
  });

const both = (cwd: string, file: string) => ['Edit', 'Write'].map((tool) => decide(lead(tool, cwd, file)));

describe("the Lead's BACKLOG.md on disk", () => {
  it('answers nothing when there is none yet: the first write creates it', () => {
    const { cwd, backlog } = project('missing');
    expect(both(cwd, backlog)).toEqual([null, null]);
  });

  it('answers nothing for a plain file with one name', () => {
    const { cwd, backlog } = project('plain');
    writeFileSync(backlog, '# Backlog\n');
    expect(both(cwd, backlog)).toEqual([null, null]);
  });

  it('denies a hard link to .claude/settings.local.json: the write would land in the settings', () => {
    const { cwd, backlog, settings } = project('hard-link');
    linkSync(settings, backlog);
    expect(both(cwd, backlog)).toEqual([denial(REASONS.backlog), denial(REASONS.backlog)]);
  });

  it('denies a plain file that has a second name anywhere', () => {
    const { cwd, backlog } = project('second-name');
    writeFileSync(backlog, '# Backlog\n');
    linkSync(backlog, join(temp, 'second-name-elsewhere.md'));
    expect(both(cwd, backlog)).toEqual([denial(REASONS.backlog), denial(REASONS.backlog)]);
  });

  it('denies a symbolic link to .claude/settings.local.json (skipped where this account cannot make one)', (context) => {
    const { cwd, backlog, settings } = project('symlink');
    try {
      symlinkSync(settings, backlog, 'file');
    } catch {
      context.skip();
    }
    expect(both(cwd, backlog)).toEqual([denial(REASONS.backlog), denial(REASONS.backlog)]);
  });

  it('denies a junction (a folder link elsewhere) and a folder named BACKLOG.md', () => {
    const linked = project('junction');
    symlinkSync(
      join(linked.cwd, '.claude'),
      linked.backlog,
      process.platform === 'win32' ? 'junction' : 'dir',
    );
    expect(both(linked.cwd, linked.backlog)).toEqual([denial(REASONS.backlog), denial(REASONS.backlog)]);
    const folder = project('folder');
    mkdirSync(folder.backlog);
    expect(both(folder.cwd, folder.backlog)).toEqual([denial(REASONS.backlog), denial(REASONS.backlog)]);
  });

  it("looks only at the Lead's BACKLOG.md: any other file is the edit rule's, as before", () => {
    const { cwd, settings } = project('other');
    expect(both(cwd, settings)).toEqual([denial(REASONS.edit), denial(REASONS.edit)]);
  });
});
