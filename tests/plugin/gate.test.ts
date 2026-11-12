import { execFile } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
import {
  CHECK,
  MAX_OUTPUT,
  MAX_RETRIES,
  OFF,
  ON,
  cleanOutput,
  decide,
  firstLine,
  hasCheck,
  runCheck,
} from '../../plugin/hooks/gate.mjs';
import { gated } from '../../plugin/hooks/send.mjs';

const SCRIPT = resolve(import.meta.dirname, '../../plugin/hooks/gate.mjs');
const ON_ENV = { WOA_QUALITY_GATE: '1' };
const char = (codePoint: number) => String.fromCodePoint(codePoint);

const folders: string[] = [];
afterEach(() => {
  // A check the gate stopped may hold its folder for a moment longer (taskkill runs on its own): retry the removal.
  for (const dir of folders.splice(0))
    rmSync(dir, { recursive: true, force: true, maxRetries: 20, retryDelay: 100 });
});
const temp = (prefix: string) => {
  const dir = mkdtempSync(join(tmpdir(), prefix));
  folders.push(dir);
  return dir;
};
/** A project folder with a package.json whose `check` script is `check`, or none. */
function project(check?: string) {
  const dir = temp('woa-gate-project-');
  writeFileSync(join(dir, 'package.json'), JSON.stringify({ scripts: check ? { check } : { test: 'x' } }));
  return dir;
}
const stop = (agent: string, more: Record<string, unknown> = {}) => ({
  hook_event_name: 'SubagentStop',
  session_id: 'session-1',
  agent_id: 'agent-1',
  agent_type: `world-of-agents:${agent}`,
  ...more,
});

describe('which stops the gate covers', () => {
  it('a Designer or dev stop, in a project that turned gates on, and nothing else', () => {
    for (const agent of ['designer', 'frontend', 'backend'])
      expect(gated(stop(agent), ON_ENV), agent).toBe(true);
    expect(gated(stop('reviewer'), ON_ENV)).toBe(false);
    expect(gated(stop('lead'), ON_ENV)).toBe(false);
    expect(gated({ ...stop('backend'), agent_type: 'backend' }, ON_ENV)).toBe(false);
    expect(gated({ ...stop('backend'), hook_event_name: 'Stop' }, ON_ENV)).toBe(false);
    for (const env of [{}, { WOA_QUALITY_GATE: '0' }, { WOA_QUALITY_GATE: 'true' }])
      expect(gated(stop('backend'), env)).toBe(false);
  });
});

describe('the output an agent gets back', () => {
  it('loses colour codes and every hidden character, keeps line breaks and tabs', () => {
    const esc = char(27);
    expect(
      cleanOutput(
        `${esc}[31mFAIL${esc}[0m a.test.ts\n\tExpected 1${char(0x202e)}${char(0x200b)}${char(0xe0041)}`,
      ),
    ).toBe('FAIL a.test.ts\n\tExpected 1');
  });

  it(`keeps the last ${MAX_OUTPUT} characters, where the failures are`, () => {
    const long = `${'a'.repeat(10_000)}THE END`;
    const cut = cleanOutput(long);
    expect(cut).toHaveLength(MAX_OUTPUT + 1);
    expect(cut.startsWith('…')).toBe(true);
    expect(cut.endsWith('THE END')).toBe(true);
  });

  it("starts with a fixed line the team pane can read, and the pane's pattern reads it", () => {
    const pane = /^World of Agents quality gate: npm run check failed, retry ([1-3]) of 3\./;
    for (let retry = 1; retry <= MAX_RETRIES; retry += 1)
      expect(pane.exec(firstLine(retry))?.[1]).toBe(String(retry));
  });
});

describe('hasCheck', () => {
  it('only a project with a check script: the gate never asks an agent to add one', () => {
    expect(hasCheck(project('vitest run'))).toBe(true);
    expect(hasCheck(project())).toBe(false);
    const broken = temp('woa-gate-broken-');
    writeFileSync(join(broken, 'package.json'), '{not json');
    expect(hasCheck(broken)).toBe(false);
    expect(hasCheck(temp('woa-gate-empty-'))).toBe(false);
  });
});

describe('decide', () => {
  const failing = async () => ({ passed: false, output: 'FAIL a.test.ts' });
  const passing = async () => ({ passed: true, output: 'ok' });

  it(`sends an agent back at most ${MAX_RETRIES} times with the output, then lets it stop as failed`, async () => {
    const dir = temp('woa-gate-counts-');
    const cwd = project('vitest run');
    const answers = [];
    for (let i = 0; i < MAX_RETRIES + 1; i += 1)
      answers.push(await decide(stop('backend', { cwd }), ON_ENV, { run: failing, dir }));
    expect(answers.map((a) => a.verdict)).toEqual(['retry', 'retry', 'retry', 'failed']);
    for (const [i, a] of answers.slice(0, MAX_RETRIES).entries()) {
      expect(JSON.parse(a.answer!)).toEqual({
        decision: 'block',
        reason: `${firstLine(i + 1)}\n\nFAIL a.test.ts`,
      });
    }
    expect(answers[MAX_RETRIES]!.answer).toBeNull();
    // The count is gone: a later run of the same agent id starts again.
    expect(JSON.parse(readFileSync(join(dir, 'session-1.json'), 'utf8'))).toEqual({});
  });

  it('lets a passing check stop the agent, and forgets the count', async () => {
    const dir = temp('woa-gate-counts-');
    const cwd = project('vitest run');
    await decide(stop('backend', { cwd }), ON_ENV, { run: failing, dir });
    expect(await decide(stop('backend', { cwd }), ON_ENV, { run: passing, dir })).toEqual({
      answer: null,
      verdict: 'passed',
    });
    expect((await decide(stop('backend', { cwd }), ON_ENV, { run: failing, dir })).answer).toContain(
      firstLine(1),
    );
  });

  it('counts each agent run on its own', async () => {
    const dir = temp('woa-gate-counts-');
    const cwd = project('vitest run');
    await decide(stop('backend', { cwd }), ON_ENV, { run: failing, dir });
    const other = await decide(stop('frontend', { cwd, agent_id: 'agent-2' }), ON_ENV, { run: failing, dir });
    expect(other.answer).toContain(firstLine(1));
  });

  it.each([
    ['gates off', stop('backend'), {}],
    ['the Reviewer', stop('reviewer'), ON_ENV],
    ['an odd agent id', stop('backend', { agent_id: '../x' }), ON_ENV],
    ['an odd session id', stop('backend', { session_id: 'a b' }), ON_ENV],
    ['no folder', stop('backend', { cwd: undefined }), ON_ENV],
  ])('stands aside for %s: no check, no answer, no verdict', async (_, payload, env) => {
    let ran = false;
    const run = async () => {
      ran = true;
      return { passed: false, output: '' };
    };
    const cwd = project('vitest run');
    const withCwd = 'cwd' in payload ? payload : { ...payload, cwd };
    expect(await decide(withCwd, env, { run, dir: temp('woa-gate-counts-') })).toEqual({
      answer: null,
      verdict: null,
    });
    expect(ran).toBe(false);
  });

  it('stands aside in a project with no check script', async () => {
    const result = await decide(stop('backend', { cwd: project() }), ON_ENV, {
      run: failing,
      dir: temp('woa-c-'),
    });
    expect(result).toEqual({ answer: null, verdict: null });
  });
});

describe('runCheck', () => {
  /** A command of our own in place of npm run check, so the test needs no npm project. */
  const script = (body: string) => {
    const dir = temp('woa-gate-run-');
    writeFileSync(join(dir, 'check.js'), body);
    return { cwd: dir, command: 'node check.js' };
  };

  it('passes on exit 0 and fails on anything else, with what it printed', async () => {
    const ok = script('console.log("all good")');
    expect(await runCheck(ok.cwd, { command: ok.command })).toEqual({ passed: true, output: 'all good\n' });
    const bad = script('console.error("2 failed"); process.exit(1)');
    expect(await runCheck(bad.cwd, { command: bad.command })).toEqual({
      passed: false,
      output: '2 failed\n',
    });
  });

  it('stops a check that takes too long, and counts it as a failure', async () => {
    const slow = script('setTimeout(() => {}, 30000)');
    const result = await runCheck(slow.cwd, { command: slow.command, timeoutMs: 300 });
    expect(result.passed).toBe(false);
    expect(result.output).toContain('took longer than');
  });

  it('runs exactly npm run check by default', () => {
    expect(CHECK).toBe('npm run check');
  });
});

describe('the script', () => {
  function run(args: string[], input: string, env: Record<string, string>, cwd?: string) {
    const home = temp('woa-gate-home-');
    return new Promise<{ code: number | null; stdout: string }>((done) => {
      const child = execFile(
        process.execPath,
        [SCRIPT, ...args],
        {
          cwd,
          timeout: 60_000,
          env: { ...process.env, HOME: home, USERPROFILE: home, WOA_QUALITY_GATE: '', ...env },
        },
        (error, stdout) =>
          done({ code: error ? (typeof error.code === 'number' ? error.code : null) : 0, stdout }),
      );
      child.stdin?.end(input);
    });
  }

  it('--status answers with an exit code only: on or off', async () => {
    expect(await run(['--status'], '', ON_ENV)).toEqual({ code: ON, stdout: '' });
    expect(await run(['--status'], '', {})).toEqual({ code: OFF, stdout: '' });
  });

  it('runs the real npm run check, and sends a dev back with its output while it fails', async () => {
    const cwd = project('node -e "console.error(\'1 test failed\'); process.exit(1)"');
    const { code, stdout } = await run([], JSON.stringify(stop('backend', { cwd })), ON_ENV, cwd);
    expect(code).toBe(0);
    const answer = JSON.parse(stdout) as { decision: string; reason: string };
    expect(answer.decision).toBe('block');
    expect(answer.reason.startsWith(firstLine(1))).toBe(true);
    expect(answer.reason).toContain('1 test failed');
  }, 60_000);

  it('answers nothing for a passing check, for gates off, and for garbage', async () => {
    const cwd = project('node -e "process.exit(0)"');
    expect(await run([], JSON.stringify(stop('backend', { cwd })), ON_ENV, cwd)).toEqual({
      code: 0,
      stdout: '',
    });
    expect(await run([], JSON.stringify(stop('backend', { cwd })), {}, cwd)).toEqual({ code: 0, stdout: '' });
    expect(await run([], 'garbage', ON_ENV)).toEqual({ code: 0, stdout: '' });
  }, 60_000);
});
