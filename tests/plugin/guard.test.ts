import { execFile } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { decide, denial, EDITORS, ENV_FILE, MAY_START, REASONS } from '../../plugin/hooks/guard.mjs';

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

  describe('isolation (v3.1 review): none or a worktree, nothing else', () => {
    it('answers nothing for no isolation or "worktree"', () => {
      expect(decide(call({ isolation: 'worktree' }))).toBeNull();
    });

    it.each([
      'remote',
      'Worktree',
      'worktree ',
      'cloud',
      '',
      null,
      0,
      true,
      ['worktree'],
      { kind: 'worktree' },
    ])('denies isolation %j, even for a start the table allows', (isolation) => {
      expect(decide(call({ isolation }))).toBe(denial(REASONS.isolation));
    });

    it('denies remote from a subagent too, and a model still wins the reason when both are set', () => {
      expect(
        decide(call({ isolation: 'remote' }, { agent_id: 'a1', agent_type: 'world-of-agents:backend' })),
      ).toBe(denial(REASONS.isolation));
      expect(decide(call({ isolation: 'remote', model: 'opus' }))).toBe(denial(REASONS.model));
    });
  });
});

describe('the Lead edits BACKLOG.md and nothing else (v3.3)', () => {
  const CWD = process.platform === 'win32' ? 'C:\\Users\\dima\\project' : '/home/dima/project';
  const at = (...parts: string[]) => [CWD, ...parts].join(process.platform === 'win32' ? '\\' : '/');
  const lead = (tool: string, file_path: unknown, more: Record<string, unknown> = {}) =>
    JSON.stringify({
      hook_event_name: 'PreToolUse',
      agent_type: 'world-of-agents:lead',
      cwd: CWD,
      tool_name: tool,
      tool_input: { file_path, content: 'x' },
      ...more,
    });
  const sub = (agent_type: string, file_path: string) =>
    JSON.stringify({ agent_id: 'a1', agent_type, cwd: CWD, tool_name: 'Edit', tool_input: { file_path } });

  it('lets the Lead edit and write BACKLOG.md at the project root, by answering nothing', () => {
    for (const tool of ['Edit', 'Write']) expect(decide(lead(tool, at('BACKLOG.md'))), tool).toBeNull();
  });

  it.each([
    ['another file', at('src', 'app.ts')],
    ['a BACKLOG.md in a subfolder', at('docs', 'BACKLOG.md')],
    ['a path that climbs out and back', at('src', '..', 'BACKLOG.md')],
    ['a path through .', at('.', 'BACKLOG.md')],
    ['a relative path', 'BACKLOG.md'],
    ['a look-alike name', at('BACKLOG.md.bak')],
    ['the settings file', at('.claude', 'settings.local.json')],
  ])('denies the Lead %s', (_, file) => {
    for (const tool of ['Edit', 'Write']) expect(decide(lead(tool, file)), tool).toBe(denial(REASONS.edit));
  });

  it('denies when the folder itself has a dot segment: the exact match alone would let that through', () => {
    const odd = process.platform === 'win32' ? 'C:\\Users\\x\\..\\project' : '/home/x/../project';
    const file = `${odd}${process.platform === 'win32' ? '\\' : '/'}BACKLOG.md`;
    expect(decide(lead('Edit', file, { cwd: odd }))).toBe(denial(REASONS.edit));
  });

  it('matches the name case-blind on Windows only', () => {
    const lower = decide(lead('Edit', at('backlog.md')));
    if (process.platform === 'win32') expect(lower).toBeNull();
    else expect(lower).toBe(denial(REASONS.edit));
  });

  it('denies the Lead with no folder to compare, and a call with no file at all', () => {
    expect(decide(lead('Edit', at('BACKLOG.md'), { cwd: undefined }))).toBe(denial(REASONS.edit));
    expect(decide(lead('Edit', undefined))).toBe(denial(REASONS.input));
  });

  it("leaves our editing agents' edits to their own permission prompts, anywhere in the project", () => {
    for (const agent of EDITORS) expect(decide(sub(agent, at('src', 'app.ts'))), agent).toBeNull();
    expect([...EDITORS]).toEqual(TEAM.filter((t) => !t.endsWith(':reviewer')));
  });

  it('denies an edit by anyone else: the Reviewer, an unknown agent, a main thread that is not the Lead', () => {
    expect(decide(sub('world-of-agents:reviewer', at('a.ts')))).toBe(denial(REASONS.edit));
    expect(decide(sub('general-purpose', at('a.ts')))).toBe(denial(REASONS.edit));
    expect(decide(lead('Edit', at('BACKLOG.md'), { agent_type: 'probe' }))).toBe(denial(REASONS.edit));
    expect(decide(lead('Edit', at('BACKLOG.md'), { agent_type: undefined }))).toBe(denial(REASONS.edit));
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
    ['a tool the matcher never sends', JSON.stringify({ tool_name: 'Read', tool_input: { file_path: 'a' } })],
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
        cwd: '/p',
        tool_name: 'Edit',
        tool_input: { file_path: '/p/src/a.ts' },
      }),
      false,
    ],
    [
      JSON.stringify({
        agent_type: 'world-of-agents:lead',
        cwd: '/p',
        tool_name: 'Write',
        tool_input: { file_path: '/p/BACKLOG.md' },
      }),
      true,
    ],
    [
      JSON.stringify({
        agent_type: 'world-of-agents:lead',
        tool_name: 'Agent',
        tool_input: { subagent_type: 'world-of-agents:reviewer', model: 'haiku' },
      }),
      false,
    ],
    [
      JSON.stringify({
        agent_type: 'world-of-agents:lead',
        tool_name: 'Agent',
        tool_input: { subagent_type: 'world-of-agents:reviewer', isolation: 'remote' },
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

  it('reads nothing but stdin: no network, no files, no environment, and no import but its own real path', () => {
    const imports = [...code.matchAll(/^import (.*) from '([^']+)';$/gm)].map((m) => `${m[1]} from ${m[2]}`);
    expect(imports).toEqual([
      '{ realpathSync } from node:fs',
      '{ fileURLToPath, pathToFileURL } from node:url',
    ]);
    expect(code.match(/^\s*import\s/gm)).toHaveLength(2);
    expect(code).not.toMatch(/\b(fetch|require|process\.env|writeFile|readFile|child_process)\b/);
  });
});
