// What this PC can't make for guard-backlog.test.ts: a symbolic link to a plain file (Windows needs Developer Mode or an
// admin for that), and a BACKLOG.md the guard can't look at. node:fs's lstatSync is a stand-in here; the rest is real.
// No team table is given (null): the Lead's edits never need one, and a test never reads the real ~/.world-of-agents.
import { beforeEach, describe, expect, it, vi } from 'vitest';

const lstat = vi.hoisted(() => ({ answer: (): unknown => undefined }));
vi.mock('node:fs', async (importOriginal) => {
  const real = await importOriginal<typeof import('node:fs')>();
  return { ...real, lstatSync: () => lstat.answer() };
});

const { decide, denial, REASONS } = await import('../../plugin/hooks/guard.mjs');

const CWD = process.platform === 'win32' ? 'C:\\Users\\dima\\project' : '/home/dima/project';
const BACKLOG = `${CWD}${process.platform === 'win32' ? '\\' : '/'}BACKLOG.md`;
const lead = JSON.stringify({
  agent_type: 'world-of-agents:lead',
  cwd: CWD,
  tool_name: 'Write',
  tool_input: { file_path: BACKLOG, content: 'x' },
});
const stats = (more: { file?: boolean; link?: boolean; nlink?: number }) => ({
  isFile: () => more.file ?? false,
  isSymbolicLink: () => more.link ?? false,
  isDirectory: () => false,
  nlink: more.nlink ?? 1,
});
const fails = (code: string) => () => {
  throw Object.assign(new Error(code), { code });
};

describe("the Lead's BACKLOG.md, as lstat sees it", () => {
  beforeEach(() => {
    lstat.answer = () => stats({ file: true });
  });

  it('answers nothing for a plain file with one name, or none at all', () => {
    expect(decide(lead, null)).toBeNull();
    lstat.answer = fails('ENOENT');
    expect(decide(lead, null)).toBeNull();
  });

  it('denies a symbolic link, whatever it points at: lstat looks at the link, never through it', () => {
    lstat.answer = () => stats({ link: true });
    expect(decide(lead, null)).toBe(denial(REASONS.backlog));
  });

  it('denies a second name, and a file it cannot look at', () => {
    lstat.answer = () => stats({ file: true, nlink: 2 });
    expect(decide(lead, null)).toBe(denial(REASONS.backlog));
    for (const code of ['EACCES', 'EPERM', 'ENOTDIR', 'ELOOP', 'EIO']) {
      lstat.answer = fails(code);
      expect(decide(lead, null), code).toBe(denial(REASONS.backlog));
    }
  });
});
