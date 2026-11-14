import { execFile } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import {
  decide,
  denial,
  EDITORS,
  ENV_FILE,
  MAY_START,
  REASONS,
  TEAM_FOLDER,
  teamRows,
} from '../../plugin/hooks/guard.mjs';
import { defaults, init } from '../../plugin/team/team.mjs';

const SCRIPT = resolve(import.meta.dirname, '../../plugin/hooks/guard.mjs');
/** The default team (v3.4): the guard reads its rows from the team table. */
const TABLE = defaults().team;
const check = (raw: string | null) => decide(raw, TABLE);
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
    for (const type of TEAM) expect(check(byLead(type))).toBeNull();
  });

  it("denies Claude Code's own agents and any name not in the table, even for the Lead", () => {
    for (const type of BUILT_IN) expect(check(byLead(type))).toBe(denial(REASONS.agent));
  });

  it('denies a bare name: only the exact full name is in the table', () => {
    expect(check(byLead('backend'))).toBe(denial(REASONS.agent));
    expect(check(byLead('World-Of-Agents:backend'))).toBe(denial(REASONS.agent));
  });

  it('lets no subagent start anyone in milestone 2, a subagent of type lead included', () => {
    for (const caller of [...TEAM, 'world-of-agents:lead', 'Explore'])
      for (const type of TEAM) expect(check(bySub(caller, type))).toBe(denial(REASONS.agent));
  });

  it('denies a main thread that is not the Lead', () => {
    const main = (agent_type?: string) =>
      JSON.stringify({ tool_name: 'Agent', agent_type, tool_input: { subagent_type: TEAM[0] } });
    expect(check(main(undefined))).toBe(denial(REASONS.agent));
    expect(check(main('probe'))).toBe(denial(REASONS.agent));
  });

  it("never gives a subagent the main thread's row, nor trips over a name like an object key", () => {
    for (const caller of ['main', '__proto__', 'constructor', 'toString', 'subagents'])
      expect(check(bySub(caller, TEAM[0] ?? ''))).toBe(denial(REASONS.agent));
  });

  it("keeps the Lead's row to the four, and takes the guild leads' rows from the team table (v3.4)", () => {
    expect([...MAY_START.main]).toEqual(TEAM);
    const rows = teamRows(TABLE);
    expect([...rows.keys()]).toEqual(TEAM);
    expect(rows.get('world-of-agents:designer')).toEqual([
      'woa-team:design-react-designer',
      'woa-team:design-motion-designer',
    ]);
    expect(rows.get('world-of-agents:reviewer')).toEqual([
      'woa-team:review-security-warden',
      'woa-team:review-qa-tester',
    ]);
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
      expect(check(call({ model }))).toBe(denial(REASONS.model));
    },
  );

  it('denies it for a type outside the table and from a subagent too: any call with a model is denied', () => {
    expect(check(call({ model: 'opus', subagent_type: 'Explore' }))).not.toBeNull();
    expect(
      check(call({ model: 'opus' }, { agent_id: 'a1', agent_type: 'world-of-agents:backend' })),
    ).not.toBeNull();
  });

  it('answers nothing for a call without a model, and leaves effort and the other arguments alone', () => {
    expect(check(call({}))).toBeNull();
    expect(check(call({ effort: 'high', description: 'Review', run_in_background: true }))).toBeNull();
  });

  describe('isolation (v3.1 review): none or a worktree, nothing else', () => {
    it('answers nothing for no isolation or "worktree"', () => {
      expect(check(call({ isolation: 'worktree' }))).toBeNull();
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
      expect(check(call({ isolation }))).toBe(denial(REASONS.isolation));
    });

    it('denies remote from a guild lead starting its own specialist too, and a model still wins the reason', () => {
      const byBackend = { agent_id: 'a1', agent_type: 'world-of-agents:backend' };
      const specialist = { subagent_type: 'woa-team:backend-api-dev' };
      expect(check(call(specialist, byBackend))).toBeNull();
      expect(check(call({ ...specialist, isolation: 'worktree' }, byBackend))).toBeNull();
      expect(check(call({ ...specialist, isolation: 'remote' }, byBackend))).toBe(denial(REASONS.isolation));
      expect(check(call({ isolation: 'remote', model: 'opus' }))).toBe(denial(REASONS.model));
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
    for (const tool of ['Edit', 'Write']) expect(check(lead(tool, at('BACKLOG.md'))), tool).toBeNull();
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
    for (const tool of ['Edit', 'Write']) expect(check(lead(tool, file)), tool).toBe(denial(REASONS.edit));
  });

  it('denies when the folder itself has a dot segment: the exact match alone would let that through', () => {
    const odd = process.platform === 'win32' ? 'C:\\Users\\x\\..\\project' : '/home/x/../project';
    const file = `${odd}${process.platform === 'win32' ? '\\' : '/'}BACKLOG.md`;
    expect(check(lead('Edit', file, { cwd: odd }))).toBe(denial(REASONS.edit));
  });

  it('matches the name case-blind on Windows only', () => {
    const lower = check(lead('Edit', at('backlog.md')));
    if (process.platform === 'win32') expect(lower).toBeNull();
    else expect(lower).toBe(denial(REASONS.edit));
  });

  it('denies the Lead with no folder to compare, and a call with no file at all', () => {
    expect(check(lead('Edit', at('BACKLOG.md'), { cwd: undefined }))).toBe(denial(REASONS.edit));
    expect(check(lead('Edit', undefined))).toBe(denial(REASONS.input));
  });

  it("leaves our editing agents' edits to their own permission prompts, anywhere in the project", () => {
    for (const agent of EDITORS) expect(check(sub(agent, at('src', 'app.ts'))), agent).toBeNull();
    expect([...EDITORS]).toEqual(TEAM.filter((t) => !t.endsWith(':reviewer')));
  });

  it('denies an edit by anyone else: the Reviewer, an unknown agent, a main thread that is not the Lead', () => {
    expect(check(sub('world-of-agents:reviewer', at('a.ts')))).toBe(denial(REASONS.edit));
    expect(check(sub('general-purpose', at('a.ts')))).toBe(denial(REASONS.edit));
    expect(check(lead('Edit', at('BACKLOG.md'), { agent_type: 'probe' }))).toBe(denial(REASONS.edit));
    expect(check(lead('Edit', at('BACKLOG.md'), { agent_type: undefined }))).toBe(denial(REASONS.edit));
  });
});

describe('agent memory is off (3.4f, Dima, 14 Nov)', () => {
  const win = process.platform === 'win32';
  const CWD = win ? 'C:\\Users\\dima\\project' : '/home/dima/project';
  const at = (...parts: string[]) => [CWD, ...parts].join(win ? '\\' : '/');
  const write = (who: string, file_path: string, tool = 'Write') =>
    JSON.stringify({
      ...(who === 'world-of-agents:lead' ? {} : { agent_id: 'a1' }),
      agent_type: who,
      cwd: CWD,
      tool_name: tool,
      tool_input: { file_path, content: 'x' },
    });
  const CALLERS = [
    'world-of-agents:lead',
    ...EDITORS,
    'world-of-agents:reviewer',
    'woa-team:frontend-react-dev',
    'general-purpose',
  ];

  // The three places Claude Code keeps agent memory: local and project scope in the project, user scope in home.
  const HOME = win ? 'C:\\Users\\dima' : '/home/dima';
  const FOLDERS = [
    [
      '.claude/agent-memory-local',
      at('.claude', 'agent-memory-local', 'world-of-agents-frontend', 'MEMORY.md'),
    ],
    ['.claude/agent-memory', at('.claude', 'agent-memory', 'world-of-agents-frontend', 'MEMORY.md')],
    [
      '~/.claude/agent-memory',
      [HOME, '.claude', 'agent-memory', 'frontend', 'MEMORY.md'].join(win ? '\\' : '/'),
    ],
  ] as const;

  it.each(FOLDERS)('denies every caller an Edit or Write into %s, with its own reason', (_, file) => {
    for (const who of CALLERS)
      for (const tool of ['Edit', 'Write'])
        expect(check(write(who, file, tool)), `${who} ${tool}`).toBe(denial(REASONS.memory));
  });

  it('says why, and names all three folders', () => {
    expect(REASONS.memory).toContain('agent memory is off');
    for (const [name] of FOLDERS) expect(REASONS.memory).toContain(name);
  });

  it.each([
    ['a path written with ~', '~/.claude/agent-memory/a.md'],
    ['a relative path', '.claude/agent-memory-local/a.md'],
    ['a path that climbs in', at('src', '..', '.claude', 'agent-memory-local', 'a.md')],
    ['a memory folder in a subproject', at('packages', 'web', '.claude', 'agent-memory-local', 'a.md')],
    ['a .. between the two names', at('.claude', 'x', '..', 'agent-memory-local', 'a.md')],
  ])('catches %s', (_, file) => {
    expect(check(write('world-of-agents:frontend', file))).toBe(denial(REASONS.memory));
  });

  it('matches case-blind on Windows only', () => {
    const answer = check(write('world-of-agents:frontend', at('.Claude', 'Agent-Memory-Local', 'a.md')));
    if (win) expect(answer).toBe(denial(REASONS.memory));
    else expect(answer).toBeNull();
  });

  it('leaves look-alikes to the usual rules', () => {
    for (const file of [
      at('.claude', 'agent-memory-localx', 'a.md'),
      at('.claude', 'agent-memoryx', 'a.md'),
      at('.claude', 'agent-memories', 'a.md'),
      at('notes', 'agent-memory-local', 'a.md'),
      at('notes', 'agent-memory', 'a.md'),
      at('src', 'agent-memory-local.ts'),
      at('.claude', 'agent-memory-local', '..', 'notes.md'),
    ])
      expect(check(write('world-of-agents:frontend', file)), file).toBeNull();
    expect(check(write('world-of-agents:lead', at('BACKLOG.md')))).toBeNull();
  });
});

describe('the team table (v3.4)', () => {
  const lead = (subagent_type: string) =>
    JSON.stringify({ agent_type: 'world-of-agents:lead', tool_name: 'Agent', tool_input: { subagent_type } });
  const guildLead = (agent: string, subagent_type: string) =>
    JSON.stringify({
      agent_id: 'a1',
      agent_type: `world-of-agents:${agent}`,
      tool_name: 'Agent',
      tool_input: { subagent_type },
    });

  it("lets each guild lead start its own guild's specialists, by answering nothing", () => {
    for (const [lead, specialists] of teamRows(TABLE))
      for (const s of specialists)
        expect(check(guildLead(lead.split(':')[1]!, s)), `${lead} ${s}`).toBeNull();
  });

  it("denies a guild lead another guild's specialist, a specialist starting anyone, and the Lead a specialist", () => {
    expect(check(guildLead('designer', 'woa-team:backend-api-dev'))).toBe(denial(REASONS.agent));
    expect(
      check(
        JSON.stringify({
          agent_id: 'a2',
          agent_type: 'woa-team:frontend-react-dev',
          tool_name: 'Agent',
          tool_input: { subagent_type: 'woa-team:frontend-test-writer' },
        }),
      ),
    ).toBe(denial(REASONS.agent));
    expect(check(lead('woa-team:frontend-react-dev'))).toBe(denial(REASONS.agent));
  });

  it("denies every agent start, the Lead's included, when the table is missing or broken", () => {
    for (const call of [
      lead('world-of-agents:backend'),
      guildLead('frontend', 'woa-team:frontend-react-dev'),
    ])
      expect(decide(call, null)).toBe(denial(REASONS.team));
    expect(REASONS.team).toContain('/world-of-agents:setup-team');
  });

  it("leaves the editing specialists' edits to their own prompts, and denies the Security warden's", () => {
    const edit = (agent_type: string) =>
      JSON.stringify({
        agent_id: 'a1',
        agent_type,
        tool_name: 'Write',
        tool_input: { file_path: '/p/a.ts' },
      });
    expect(check(edit('woa-team:frontend-react-dev'))).toBeNull();
    expect(check(edit('woa-team:review-security-warden'))).toBe(denial(REASONS.edit));
  });

  it.each([
    'cat ~/.world-of-agents/token',
    'echo x > "$HOME/.world-of-agents/team/team.json"',
    'Get-ChildItem C:\\Users\\x\\.World-Of-Agents',
  ])('denies a shell command that names the World of Agents folder: %s', (command) => {
    expect(check(shell('Bash', command))).toBe(denial(REASONS.folder));
    expect(TEAM_FOLDER.test(command)).toBe(true);
  });

  it('lets a command through that only mentions the words', () => {
    expect(check(shell('Bash', 'echo "world of agents"'))).toBeNull();
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
    expect(check(raw)).toBe(denial(REASONS.input));
  });

  it('denies stdin that was too big to read', () => {
    expect(check(null)).toBe(denial(REASONS.input));
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
    expect(check(shell('Bash', command))).toBe(denial(REASONS.env));
    expect(check(shell('PowerShell', command))).toBe(denial(REASONS.env));
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
    expect(check(shell('Bash', command))).toBeNull();
    expect(check(shell('PowerShell', command))).toBeNull();
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
    const home = mkdtempSync(join(tmpdir(), 'woa-guard-'));
    init(home);
    const env = { ...process.env, HOME: home, USERPROFILE: home };
    const child = execFile(process.execPath, [SCRIPT], { timeout: 20_000, env }, (error, stdout, stderr) => {
      rmSync(home, { recursive: true, force: true });
      done({ code: error ? (typeof error.code === 'number' ? error.code : null) : 0, stdout, stderr });
    });
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

  it('reads stdin and the team table through team.mjs: no network, no files of its own but an lstat, no environment', () => {
    expect(code.match(/^\s*import\s.*$/gm)?.map((line) => line.trim())).toEqual([
      "import { lstatSync, realpathSync } from 'node:fs';",
      "import { homedir } from 'node:os';",
      "import { basename, dirname, join, resolve, sep } from 'node:path';",
      "import { fileURLToPath, pathToFileURL } from 'node:url';",
      "import { LEADS, readTeam } from '../team/team.mjs';",
    ]);
    expect(code).not.toMatch(/\b(fetch|require|process\.env|writeFile|readFile|child_process)\b/);
  });
});
