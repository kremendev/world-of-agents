import { execFile } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { decide, denial, ENV_FILE, MAY_START, REASONS } from '../../plugin/hooks/guard.mjs';

const SCRIPT = resolve(import.meta.dirname, '../../plugin/hooks/guard.mjs');
const TEAM = ['designer', 'frontend', 'backend', 'reviewer'].map((id) => `world-of-agents:${id}`);
const BUILT_IN = [
  'Explore',
  'Plan',
  'general-purpose',
  'claude-code-guide',
  'statusline-setup',
  'made-up-agent',
];

/** The Lead's Agent call, as the recorded runs and the 6 Nov capture show it: no agent_id. */
const byLead = (subagent_type: unknown) =>
  JSON.stringify({
    hook_event_name: 'PreToolUse',
    agent_type: 'world-of-agents:lead',
    tool_name: 'Agent',
    tool_input: { subagent_type, prompt: 'x' },
  });
const bySub = (agent_type: string, subagent_type: string) =>
  JSON.stringify({
    hook_event_name: 'PreToolUse',
    agent_id: 'a1b2c3',
    agent_type,
    tool_name: 'Agent',
    tool_input: { subagent_type },
  });
const shell = (tool_name: string, command: unknown) =>
  JSON.stringify({
    hook_event_name: 'PreToolUse',
    agent_id: 'a1',
    agent_type: 'world-of-agents:backend',
    tool_name,
    tool_input: { command },
  });

describe('who may start whom', () => {
  it('lets the Lead start each of the four, by answering nothing', () => {
    for (const type of TEAM) expect(decide(byLead(type))).toBeNull();
  });

  it("denies Claude Code's own agents and any name not in the table, even for the Lead", () => {
    for (const type of BUILT_IN) expect(decide(byLead(type))).toBe(denial(REASONS.agent));
  });

  it('denies a bare name: only the exact full name is in the table', () => {
    expect(decide(byLead('backend'))).toBe(denial(REASONS.agent));
    expect(decide(byLead('World-Of-Agents:backend'))).toBe(denial(REASONS.agent));
  });

  it('lets no subagent start anyone in milestone 2, a subagent of type lead included', () => {
    for (const caller of [...TEAM, 'world-of-agents:lead', 'Explore'])
      for (const type of TEAM) expect(decide(bySub(caller, type))).toBe(denial(REASONS.agent));
  });

  it('denies a main thread that is not the Lead', () => {
    const main = (agent_type?: string) =>
      JSON.stringify({ tool_name: 'Agent', agent_type, tool_input: { subagent_type: TEAM[0] } });
    expect(decide(main(undefined))).toBe(denial(REASONS.agent));
    expect(decide(main('probe'))).toBe(denial(REASONS.agent));
  });

  it("never gives a subagent the main thread's row, nor trips over a name like an object key", () => {
    for (const caller of ['main', '__proto__', 'constructor', 'toString', 'subagents'])
      expect(decide(bySub(caller, TEAM[0] ?? ''))).toBe(denial(REASONS.agent));
  });

  it('keeps the table to the Lead and the four, with no subagent rows before milestone 5', () => {
    expect([...MAY_START.main]).toEqual(TEAM);
    expect(MAY_START.subagents.size).toBe(0);
  });
});

describe("the agent file's model always wins (v3.1, D3)", () => {
  /** An Agent call with more in its input than byLead() puts there. */
  const call = (more: Record<string, unknown>, caller: Record<string, unknown> = {}) =>
    JSON.stringify({
      hook_event_name: 'PreToolUse',
      agent_type: 'world-of-agents:lead',
      tool_name: 'Agent',
      tool_input: { subagent_type: 'world-of-agents:reviewer', prompt: 'x', ...more },
      ...caller,
    });

  it.each(['sonnet', 'opus', 'haiku', 'fable', 'claude-opus-5-5', '', null, 0])(
    'denies a call that sets model to %j, even a start the table allows',
    (model) => {
      expect(decide(call({ model }))).toBe(denial(REASONS.model));
    },
  );

  it('denies it for a type outside the table and from a subagent too: any call with a model is denied', () => {
    expect(decide(call({ model: 'opus', subagent_type: 'Explore' }))).not.toBeNull();
    expect(
      decide(call({ model: 'opus' }, { agent_id: 'a1', agent_type: 'world-of-agents:backend' })),
    ).not.toBeNull();
  });

  it('answers nothing for a call without a model, and leaves effort and the other arguments alone', () => {
    expect(decide(call({}))).toBeNull();
    expect(decide(call({ effort: 'high', description: 'Review', run_in_background: true }))).toBeNull();
  });
});

describe('fails closed on input it cannot check', () => {
  it.each([
    ['empty stdin', ''],
    ['not JSON', 'not json'],
    ['JSON that is not an object', '[1,2]'],
    ['null', 'null'],
    ['no tool_input', JSON.stringify({ tool_name: 'Agent', agent_type: 'world-of-agents:lead' })],
    [
      'a tool_input that is a string',
      JSON.stringify({ tool_name: 'Agent', agent_type: 'world-of-agents:lead', tool_input: 'x' }),
    ],
    ['no subagent_type', byLead(undefined)],
    ['a subagent_type that is not a string', byLead(['world-of-agents:backend'])],
    ['a shell call with no command', shell('Bash', undefined)],
    ['a shell command that is not a string', shell('PowerShell', 42)],
    [
      'a tool the matcher never sends',
      JSON.stringify({ tool_name: 'Write', tool_input: { file_path: 'a' } }),
    ],
    ['no tool_name', JSON.stringify({ tool_input: { command: 'ls' } })],
  ])('%s', (_name, raw) => {
    expect(decide(raw)).toBe(denial(REASONS.input));
  });

  it('denies stdin that was too big to read', () => {
    expect(decide(null)).toBe(denial(REASONS.input));
  });
});

describe('the best-effort .env rule', () => {
  it.each([
    'cat .env',
    'cat .env.local',
    'type .\\.env',
    'Get-Content ".env.production"',
    "cat 'my dir/.env'",
    'grep KEY config/.env',
    'source .env',
    'cat .ENV',
    'cat C:\\proj\\.env',
    'cat "$HOME/.env"',
    'cat .env*',
    'cat .env;echo done',
    'cat <.env',
    'ls && cat .env.development.local',
    'cat .envrc',
    'cat sub/.envrc',
    'Get-Content .envrc',
    'source "./.envrc"',
    'cat .envrc.md.txt',
  ])('denies %s', (command) => {
    expect(decide(shell('Bash', command))).toBe(denial(REASONS.env));
    expect(decide(shell('PowerShell', command))).toBe(denial(REASONS.env));
  });

  it.each([
    'echo environment',
    'node -e "console.log(process.env.HOME)"',
    'printenv',
    'npm run env:check',
    'ls -la',
    'cat envrc.md',
    'cat docs/envrc.md',
    'git diff -- src/env.ts',
    'npm test',
  ])('lets %s through, by answering nothing', (command) => {
    expect(decide(shell('Bash', command))).toBeNull();
    expect(decide(shell('PowerShell', command))).toBeNull();
  });

  it('is the same rule the module exports', () => {
    expect(ENV_FILE.test('cat .env')).toBe(true);
    expect(ENV_FILE.test('cat sub/.envrc')).toBe(true);
    expect(ENV_FILE.test('echo environment')).toBe(false);
    expect(ENV_FILE.test('cat envrc.md')).toBe(false);
  });
});

/** Runs the real script with `input` on stdin. */
function run(input: string): Promise<{ code: number | null; stdout: string; stderr: string }> {
  return new Promise((done) => {
    const child = execFile(process.execPath, [SCRIPT], { timeout: 20_000 }, (error, stdout, stderr) =>
      done({ code: error ? (typeof error.code === 'number' ? error.code : null) : 0, stdout, stderr }),
    );
    child.stdin?.end(input);
  });
}

describe('never allow', () => {
  /** Each input, and whether the guard may leave it unanswered (only a start the table allows, or a harmless command). */
  const cases: [input: string, silent: boolean][] = [
    ...TEAM.map((type): [string, boolean] => [byLead(type), true]),
    ...BUILT_IN.map((type): [string, boolean] => [byLead(type), false]),
    [bySub('world-of-agents:backend', 'Explore'), false],
    [bySub('main', 'world-of-agents:backend'), false],
    [
      JSON.stringify({
        agent_type: 'world-of-agents:lead',
        tool_name: 'Agent',
        tool_input: { subagent_type: 'world-of-agents:reviewer', model: 'haiku' },
      }),
      false,
    ],
    [shell('Bash', 'cat .env'), false],
    [shell('PowerShell', 'Get-Content .env.local'), false],
    [shell('Bash', 'echo environment'), true],
    ['', false],
    ['garbage', false],
    ['{"tool_name":"Agent"', false],
    [
      JSON.stringify({
        tool_name: 'Agent',
        permissionDecision: 'allow',
        tool_input: { subagent_type: 'allow' },
      }),
      false,
    ],
    ['x'.repeat(1024 * 1024 + 1), false],
  ];

  it('answers every input with nothing or exactly a deny, and always exits 0', async () => {
    const results = await Promise.all(cases.map(([input]) => run(input)));
    results.forEach(({ code, stdout, stderr }, i) => {
      expect(code).toBe(0);
      expect(stderr).toBe('');
      expect(stdout === '').toBe(cases[i]?.[1]);
      if (stdout === '') return;
      const answer = JSON.parse(stdout) as { hookSpecificOutput: Record<string, unknown> };
      expect(Object.keys(answer)).toEqual(['hookSpecificOutput']);
      expect(answer.hookSpecificOutput.hookEventName).toBe('PreToolUse');
      expect(answer.hookSpecificOutput.permissionDecision).toBe('deny');
    });
  }, 30_000);

  /** The script's code without its comments, which talk about allow and process.env on purpose. */
  const code = readFileSync(SCRIPT, 'utf8')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/^\s*\/\/.*$/gm, '');

  it('holds no decision but deny anywhere in its code', () => {
    const decisions = [...code.matchAll(/permissionDecision\s*:\s*'(\w+)'/g)].map((m) => m[1]);
    expect(decisions).toEqual(['deny']);
    expect(code).not.toMatch(/['"`](allow|ask|defer)['"`]/);
  });

  it('reads nothing but stdin: no imports, no network, no files, no environment', () => {
    expect(code).not.toMatch(/^\s*import\s/m);
    expect(code).not.toMatch(/\b(fetch|require|process\.env|writeFile|readFile|child_process)\b/);
  });
});
