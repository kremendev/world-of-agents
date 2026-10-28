import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { allowlist, text } from './send.mjs';

const HOME = 'C:\\Users\\woa-tester';
const HOME_FORMS = ['C:\\Users\\woa-tester', 'C:/Users/woa-tester', '/c/Users/woa-tester', 'woa-tester'];

type Payload = Record<string, unknown>;
const FIXTURES = join(import.meta.dirname, '../../server/fixtures');
const fixtures: { name: string; payload: Payload }[] = readdirSync(FIXTURES, { recursive: true })
  .map(String)
  .filter((f) => f.endsWith('.json'))
  .sort()
  .map((name) => ({ name, payload: JSON.parse(readFileSync(join(FIXTURES, name), 'utf8')) as Payload }));

/**
 * The fixtures are redacted. Put the dangerous values back: every `<redacted>` becomes a unique sentinel
 * (file contents, commands, prompts, outputs), and every placeholder path a real one under HOME.
 */
function poison(value: unknown, counter = { n: 0 }): unknown {
  if (typeof value === 'string') {
    return value
      .replace(/<redacted>/g, () => `SENTINEL_${counter.n++}`)
      .replace(/<home>/g, HOME)
      .replace(/<project>/g, `${HOME}\\projects\\demo`)
      .replace(/<tmp>/g, `${HOME}\\AppData\\Local\\Temp`)
      .replace(/<path>/g, `${HOME}\\projects\\demo\\server.js`);
  }
  if (Array.isArray(value)) return value.map((v) => poison(v, counter));
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, poison(v, counter)]));
  }
  return value;
}

/** Every string value in a payload, raw (JSON.stringify would double the backslashes in Windows paths). */
function strings(value: unknown): string {
  if (typeof value === 'string') return value;
  if (Array.isArray(value)) return value.map(strings).join('\n');
  if (value && typeof value === 'object') return Object.values(value).map(strings).join('\n');
  return '';
}

describe('allowlist() on every fixture', () => {
  it('has fixtures to check', () => {
    expect(fixtures.length).toBeGreaterThanOrEqual(28);
  });

  it.each(fixtures)('$name forwards no path, content, command or home folder', ({ payload }) => {
    const poisoned = poison(payload) as Payload;
    expect(strings(poisoned)).toContain(HOME); // the poisoning really put paths in
    const forwarded = allowlist(poisoned, HOME);
    const sent = strings(forwarded).toLowerCase();
    expect(sent).not.toMatch(/sentinel_/);
    for (const form of HOME_FORMS) expect(sent).not.toContain(form.toLowerCase());
    const keys = JSON.stringify(forwarded);
    for (const field of ['transcript_path', 'agent_transcript_path', 'cwd', 'scratchpad_dir', 'content'])
      expect(keys).not.toContain(`"${field}"`);
  });

  it('forwards the Agent call fields the hall needs', () => {
    const launch = fixtures.find(
      (f) =>
        f.payload.hook_event_name === 'PostToolUse' &&
        (f.payload.tool_response as Payload).status === 'async_launched',
    );
    expect(allowlist(launch!.payload, HOME)).toMatchObject({
      tool_name: 'Agent',
      tool_input: { subagent_type: 'world-of-agents:designer', run_in_background: true },
      tool_response: { status: 'async_launched', agentId: 'afcc4e7953aac3c28' },
    });
  });
});

describe('<task-notification> detection', () => {
  const prompts = fixtures.filter((f) => f.payload.hook_event_name === 'UserPromptSubmit');

  it('turns a background task notification into ids and status, with no prompt text', () => {
    const notice = prompts.find((f) => f.name.endsWith('16-UserPromptSubmit.json'))!;
    const sent = allowlist(poison(notice.payload) as Payload, HOME);
    expect(sent.prompt).toBeUndefined();
    expect(sent.task_notification).toEqual({
      task_id: 'aa4e749e181be82c3',
      tool_use_id: 'toolu_01TcTEJVVnWvZDWev4NN1c25',
      status: 'completed',
    });
  });

  it('finds both notifications in run 1 and leaves the real user prompt alone', () => {
    const kinds = prompts.map((f) => (allowlist(f.payload, HOME).task_notification ? 'notice' : 'user'));
    expect(kinds).toEqual(['user', 'notice', 'notice']);
    expect(allowlist(prompts[0]!.payload, HOME).prompt).toMatch(/^Make a tiny hello page/);
  });

  it('only counts a prompt that starts with the tag', () => {
    const sent = allowlist({ prompt: 'Please explain <task-notification><task-id>x</task-id>' }, HOME);
    expect(sent.task_notification).toBeUndefined();
    expect(sent.prompt).toContain('Please explain');
  });
});

describe('text()', () => {
  it.each([
    ['backslashes', 'see C:\\Users\\woa-tester\\proj\\a.js', 'see ~\\proj\\a.js'],
    ['forward slashes', 'see C:/Users/woa-tester/proj/a.js', 'see ~/proj/a.js'],
    ['Git Bash form', 'see /c/Users/woa-tester/proj/a.js', 'see ~/proj/a.js'],
    ['another case', 'see c:\\users\\WOA-TESTER\\proj', 'see ~\\proj'],
    ['mixed slashes', 'see C:\\Users/woa-tester\\proj', 'see ~\\proj'],
    ['two paths', 'C:/Users/woa-tester/a and /c/Users/woa-tester/b', '~/a and ~/b'],
  ])('replaces the home folder written with %s', (_, input, expected) => {
    expect(text(input, 200, HOME)).toBe(expected);
  });

  it('replaces only whole folder names', () => {
    expect(text('C:\\Users\\woa-tester2\\x', 200, HOME)).toBe('C:\\Users\\woa-tester2\\x');
    expect(text('C:\\Users\\woa-tester', 200, HOME)).toBe('~');
  });

  it('handles a POSIX home folder', () => {
    expect(text('at /home/dima/proj and /home/dimas', 200, '/home/dima')).toBe('at ~/proj and /home/dimas');
  });

  it.each([
    ['Anthropic', 'sk-ant-api03-AbC_dEf-123456789'],
    ['GitHub classic', 'ghp_A1b2C3d4E5f6G7h8I9j0K1l2M3n4O5p6Q7r8'],
    ['GitHub fine-grained', 'github_pat_11ABCDEFG0123456789_abcdefghijklmnop'],
    ['GitHub OAuth', 'gho_A1b2C3d4E5f6G7h8I9j0K1l2M3n4O5p6Q7r8'],
    ['AWS access key', 'AKIAIOSFODNN7EXAMPLE'],
  ])('redacts a %s key', (_, key) => {
    expect(text(`the key is ${key}, done`, 200, HOME)).toBe('the key is [redacted], done');
  });

  it('redacts a whole PEM block, and an unclosed one to the end', () => {
    const pem = '-----BEGIN RSA PRIVATE KEY-----\nMIIEow\nIBAAK\n-----END RSA PRIVATE KEY-----';
    expect(text(`a ${pem} b`, 200, HOME)).toBe('a [redacted] b');
    expect(text('a -----BEGIN OPENSSH PRIVATE KEY-----\nb3BlbnNz', 200, HOME)).toBe('a [redacted]');
  });

  it('scrubs before it caps, so a cut leaves no part of a key', () => {
    const out = text(`${'x'.repeat(190)} sk-ant-api03-SECRETSECRETSECRET`, 200, HOME)!;
    expect(out).toHaveLength(200);
    expect(out).not.toMatch(/sk-ant|SECRET/);
  });

  it('leaves ordinary text alone', () => {
    const plain = 'Routes `/` and `/index.html`; ask-anthony and AKIA123 are fine.';
    expect(text(plain, 200, HOME)).toBe(plain);
  });

  it('scrubs the free-text fields allowlist() forwards', () => {
    const sent = allowlist(
      {
        hook_event_name: 'PreToolUse',
        tool_name: 'Agent',
        tool_input: { description: 'Fix C:/Users/woa-tester/app', subagent_type: 'world-of-agents:backend' },
        prompt: 'use ghp_A1b2C3d4E5f6G7h8I9j0K1l2M3n4O5p6Q7r8',
        last_assistant_message: 'wrote /c/Users/woa-tester/app/x.js with AKIAIOSFODNN7EXAMPLE',
      },
      HOME,
    );
    expect(sent.tool_input?.description).toBe('Fix ~/app');
    expect(sent.prompt).toBe('use [redacted]');
    expect(sent.last_assistant_message).toBe('wrote ~/app/x.js with [redacted]');
  });
});
