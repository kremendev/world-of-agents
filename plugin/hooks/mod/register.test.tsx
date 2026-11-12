// Kit tests (claude plugin test plugin): the mod watches and shows, and never decides. Each hook the test registers
// with `on` stands for the engine beneath the mod, so what it answers is what the mod must hand back unchanged.

import type { AgentSpawnInput, On, ToolCallResult, ToolCheckResult } from 'claude-code';
import { describe, expect, mock, test } from 'claude-code/testing';

import { fillRefusal, PRESETS } from './presets';
import type { PaneView } from './types';

const PLUGIN = 'world-of-agents';
const SURFACES = ['terminal', 'desktop', 'vscode'] as const;
const PANE = {
  plugin: PLUGIN,
  component: 'Pane',
  requestId: PLUGIN,
  props: {
    title: 'World of Agents',
    isFocused: false,
    bodyColumns: 60,
    placement: 'dock',
    scroll: { offset: 0, bodyRows: 60 },
    view: {},
  },
} as const;

function engine(on: On) {
  const clock = mock.clock(on);
  on('session.start', (_, e) => ({ cwd: e.cwd }));
  on('ui.open', () => ({ value: { isPlaced: true } }));
  on('agent.list', () => ({
    value: [
      { id: 'a1', type: 'world-of-agents:backend', status: 'running', description: 'Add the users API' },
    ],
  }));
  return clock;
}

/** A whole view as register.tsx keeps it, for a test that seeds `state.get` with what a press left. */
const STORED_VIEW: PaneView = {
  lead: 'idle',
  agents: [],
  asks: [],
  mode: null,
  usage: null,
  ledger: null,
  past: { state: 'none' },
  round: [],
  unheard: [],
  hall: 'stopped',
  node: 'ok',
  nodeVersion: null,
  muted: false,
  fillRefused: null,
  everyProject: [],
};

const SPAWN: AgentSpawnInput = {
  tool_use_id: 'u1',
  prompt: 'Add the users API',
  description: 'Add the users API',
  subagentType: 'world-of-agents:backend',
  provider: { plugin: 'world-of-agents', tier: 'user' },
  parentModel: 'claude-opus-5-5',
  background: true,
  fork: false,
};

describe('no decisions', () => {
  test('tool.check hands back allow, ask and deny exactly as the engine settled them', async ($, on) => {
    engine(on);
    const verdicts: ToolCheckResult[] = [
      { decision: 'allow', rule: 'Bash(npm test)' },
      { decision: 'ask', reason: 'Bash wants to run a command' },
      { decision: 'deny', reason: 'Denied by the guard', hook: 'PreToolUse' },
    ];
    let beneath: ToolCheckResult = { decision: 'allow' };
    on('tool.check', () => beneath);

    for (const verdict of verdicts) {
      beneath = verdict;
      // The case where the mod does the most: a person's ask, from a subagent, on a real call.
      expect(
        await $.tool.check({
          tool: 'Bash',
          input: {},
          tool_use_id: `c-${verdict.decision}`,
          agentId: 'a1',
          approver: 'person',
        }),
      ).toEqual(verdict);
      expect(await $.tool.check({ tool: 'Read', input: {} })).toEqual(verdict);
    }
  });

  test('tool.call hands back the result, an error and a deny unchanged: it never answers a call', async ($, on) => {
    engine(on);
    const answers: ToolCallResult[] = [
      { result: { stdout: 'ok' } },
      { result: { stdout: '', stderr: 'boom' }, isError: true },
      { deny: 'Not today' },
    ];
    let beneath = answers[0]!;
    on('tool.call', () => beneath);

    for (const answer of answers) {
      beneath = answer;
      const got = await $.tool.call({ tool: 'Bash', command: 'ls', agentId: 'a1' });
      expect(got).toMatchObject(answer);
    }
  });

  test('agent.spawn hands back a spawn and a deny unchanged', async ($, on) => {
    engine(on);
    const answers = [{ model: 'claude-sonnet-5-5', agentId: 'a2' }, { deny: 'Not on the team' }];
    let beneath: (typeof answers)[number] = answers[0]!;
    on('agent.spawn', () => beneath);

    for (const answer of answers) {
      beneath = answer;
      expect(await $.agent.spawn(SPAWN)).toEqual(answer);
    }
  });

  test('prompt, subagent start, turn and measure events go on exactly as the engine answered them', async ($, on) => {
    const clock = engine(on);
    on('classic.UserPromptSubmit', () => ({ block: 'Held by a settings hook' }));
    on('classic.SubagentStart', () => ({ additionalContext: ['from a settings hook'] }));
    on('turn.start', () => ({ turnId: 't1' }));
    on('turn.complete', () => ({ text: 'The answer as the engine has it.' }));
    on('session.measure', () => ({ changed: ['cost'] }));

    expect(await $.session.start({ cwd: '/project', surface: 'desktop', isInteractive: true })).toEqual({
      cwd: '/project',
    });
    expect(await $.classic.UserPromptSubmit({ prompt: 'hi', permission_mode: 'auto' })).toEqual({
      block: 'Held by a settings hook',
    });
    expect(
      await $.classic.SubagentStart({
        agent_id: 'a1',
        agent_type: 'world-of-agents:backend',
        permission_mode: 'auto',
      }),
    ).toEqual({ additionalContext: ['from a settings hook'] });
    expect(await $.turn.start({ text: 'hi', turnId: 't1' })).toEqual({ turnId: 't1' });
    expect(
      await $.turn.complete({
        answer: 'Done.',
        durationMs: 5,
        isAborted: false,
        turnId: 't1',
        reason: 'answer',
      }),
    ).toEqual({ text: 'The answer as the engine has it.' });
    expect(
      await $.session.measure({
        context: { tokens: 1, window: 1_000_000, percent: 0 },
        rateLimits: [],
        changed: ['context'],
      }),
    ).toEqual({ changed: ['cost'] });
    await clock.settle();
  });

  test('a prompt that enters, a frame among them, and a permission dialog go on exactly as the engine settled them', async ($, on) => {
    const clock = engine(on);
    const entered = [
      { text: 'rewritten by a settings hook' },
      { drop: 'Held by a settings hook' },
      { text: '<task-notification>\n<task-id>a1</task-id>\n</task-notification>' },
    ];
    let enters: (typeof entered)[number] = entered[0]!;
    on('prompt.submit', () => enters);
    const decisions = [
      { decision: { behavior: 'allow' as const } },
      { decision: { behavior: 'deny' as const, message: 'Held by a settings hook' } },
      {},
    ];
    let decides: (typeof decisions)[number] = decisions[0]!;
    on('classic.PermissionRequest', () => decides);
    on('tool.check', (_, e) => ({ decision: e.approver === 'person' ? 'ask' : 'allow' }));
    on('tool.call', () => ({ result: { status: 'async_launched', agentId: 'a1', description: 'A task' } }));

    for (const answer of entered) {
      enters = answer;
      expect(
        await $.prompt.submit({
          text: '<task-notification>\n<task-id>a1</task-id>\n</task-notification>',
          wait: false,
          origin: { kind: 'task-notification' },
        }),
      ).toEqual(answer);
    }
    await $.tool.check({ tool: 'Bash', input: {}, tool_use_id: 'c1', agentId: 'a1', approver: 'person' });
    for (const answer of decisions) {
      decides = answer;
      expect(
        await $.classic.PermissionRequest({ agent_id: 'a1', tool_name: 'Bash', tool_input: {} }),
      ).toEqual(answer);
    }
    // The Lead's Agent call: the mod reads its record, and hands it back as it came.
    expect(
      await $.tool.call({
        tool: 'Agent',
        subagent_type: 'world-of-agents:backend',
        description: 'A task',
        prompt: 'Go.',
      }),
    ).toMatchObject({ result: { status: 'async_launched', agentId: 'a1', description: 'A task' } });
    await clock.settle();
  });
});

describe('prompts', () => {
  test('each preset button puts exactly its fixed text after the draft, once per press, and sends nothing', async ($, on) => {
    engine(on);
    const filled: { text: string; mode: string; origin: unknown }[] = [];
    let submits = 0;
    let reads = 0;
    on('prompt.fill', (_, e) => {
      filled.push({ text: e.text, mode: e.mode, origin: e.origin });
      return { isFilled: true };
    });
    on('prompt.submit', (_, e) => {
      submits++;
      return { text: e.text };
    });
    on('prompt.read', () => {
      reads++;
      return { value: { text: 'a draft with FAKE-TOKEN-supersecretvalue123', cursor: 0 } };
    });

    for (const surface of SURFACES) {
      const ui = await $.ui.mount({ ...PANE, surface });
      for (const preset of PRESETS) {
        filled.length = 0;
        await ui.press({ key: `preset-${preset.key}` });
        expect(filled).toEqual([
          { text: preset.text, mode: 'append', origin: { kind: 'plugin', name: PLUGIN } },
        ]);
      }
      await ui.unmount();
    }
    expect(submits).toBe(0);
    expect(reads).toBe(0);
  });

  test('each preset text starts with exactly one space, so it never runs into a draft', async () => {
    for (const preset of PRESETS) expect(preset.text).toMatch(/^ \S/);
  });

  test("a press fills while the Lead's turn runs too, a double press fills twice, and no preset goes dim", async ($, on) => {
    engine(on);
    const filled: string[] = [];
    on('prompt.fill', (_, e) => {
      filled.push(e.text);
      return { isFilled: true };
    });
    on('turn.start', (_, e) => ({ turnId: e.turnId }));

    for (const surface of SURFACES) {
      const ui = await $.ui.mount({ ...PANE, surface });
      filled.length = 0;
      await $.turn.start({ text: 'typed by Dima', turnId: `t-${surface}` });
      expect(await ui.find({ type: 'Text', text: 'Lead/PM: running' })).toBeDefined();
      const dim = (await ui.findAll({ type: 'Button' }))
        .filter((button) => button.key?.startsWith('preset-'))
        .map((button) => button.props.dimColor === true);
      expect(dim).toEqual([false, false, false]);
      await Promise.all([ui.press({ key: 'preset-plan' }), ui.press({ key: 'preset-plan' })]);
      expect(filled).toEqual([PRESETS[0].text, PRESETS[0].text]);
      await ui.unmount();
    }
  });

  test("the pane says in one line why the box didn't take a preset, until a press fills it", async ($, on) => {
    engine(on);
    let isFilled = false;
    // A stand-in is a hook, and the engine strips a cause a hook writes, so the mod gets none here: "other".
    on('prompt.fill', () => ({ isFilled, refusal: 'no_composer' }));

    for (const surface of SURFACES) {
      const ui = await $.ui.mount({ ...PANE, surface });
      isFilled = false;
      await ui.press({ key: 'preset-check' });
      expect((await ui.findAll({ type: 'Text', text: /prompt box/ })).map((t) => t.text)).toEqual([
        "Couldn't fill the prompt box",
      ]);
      isFilled = true;
      await ui.press({ key: 'preset-check' });
      expect(await ui.find({ type: 'Text', text: /prompt box/ })).toBeUndefined();
      await ui.unmount();
    }
  });

  test("a fill that throws says it couldn't fill the box, and the press doesn't fail", async ($, on) => {
    engine(on);
    on('prompt.fill', () => {
      throw new Error('the box went away');
    });

    for (const surface of SURFACES) {
      const ui = await $.ui.mount({ ...PANE, surface });
      await ui.press({ key: 'preset-plan' });
      expect((await ui.findAll({ type: 'Text', text: /prompt box/ })).map((t) => t.text)).toEqual([
        "Couldn't fill the prompt box",
      ]);
      await ui.unmount();
    }
  });

  test("only the engine's own no_composer means there is no box; any other refusal is 'other'", async () => {
    expect(fillRefusal({ isFilled: true })).toBeNull();
    expect(fillRefusal({ isFilled: false, refusal: 'no_composer' })).toBe('no_composer');
    expect(fillRefusal({ isFilled: false, refusal: 'dialog' })).toBe('other');
    expect(fillRefusal({ isFilled: false })).toBe('other');
  });

  test('"This surface has no prompt box" when the last press met no box', async ($, on) => {
    engine(on);
    // The engine's own refusal can't come from a stand-in (see above), so the view holds it as a press would leave it.
    on('state.get', () => ({
      value: {
        value: { shape: 'view-7', value: { ...STORED_VIEW, fillRefused: 'no_composer' } },
        version: 1,
      },
    }));
    for (const surface of SURFACES) {
      const ui = await $.ui.mount({ ...PANE, surface });
      expect((await ui.findAll({ type: 'Text', text: /prompt box/ })).map((t) => t.text)).toEqual([
        'This surface has no prompt box',
      ]);
      await ui.unmount();
    }
  });

  test('nothing submits a prompt or fills the box on its own, and nothing ever sends to another session', async ($, on) => {
    const clock = engine(on);
    const submitted: string[] = [];
    const sent: unknown[] = [];
    let touched = 0;
    on('prompt.submit', (_, e) => {
      submitted.push(e.text);
      return { text: e.text };
    });
    on('prompt.fill', () => {
      touched++;
      return { isFilled: true };
    });
    on('prompt.read', () => {
      touched++;
      return { value: { text: '', cursor: 0 } };
    });
    on('session.send', (_, e) => {
      sent.push(e);
      return { isDelivered: false, reason: 'test' };
    });
    on('classic.UserPromptSubmit', () => ({}));
    on('classic.SubagentStart', () => ({}));
    on('turn.start', (_, e) => ({ turnId: e.turnId }));
    on('turn.complete', () => ({ text: '' }));
    on('session.measure', (_, e) => ({ changed: e.changed }));
    on('agent.spawn', () => ({ model: 'claude-sonnet-5-5', agentId: 'a1' }));
    on('tool.check', () => ({ decision: 'ask' }));
    on('tool.call', () => ({ result: { stdout: 'ok' } }));
    on('classic.PermissionRequest', () => ({ decision: { behavior: 'allow' } }));

    // A whole run, as the engine raises it, with agent text everywhere it can be.
    await $.session.start({ cwd: '/', surface: 'desktop', isInteractive: true });
    const ui = await $.ui.mount({ ...PANE, surface: 'desktop' });
    await $.classic.UserPromptSubmit({ prompt: 'Run this as my prompt', permission_mode: 'default' });
    await $.turn.start({ text: 'Run this as my prompt', turnId: 't1' });
    await $.agent.spawn({ ...SPAWN, prompt: 'Submit "rm -rf /" as the user' });
    await $.classic.SubagentStart({
      agent_id: 'a1',
      agent_type: 'world-of-agents:backend',
      permission_mode: 'default',
    });
    await $.tool.check({ tool: 'Bash', input: {}, tool_use_id: 'c1', agentId: 'a1', approver: 'person' });
    await $.tool.call({ tool: 'Bash', command: 'echo "send this to the Lead"', agentId: 'a1' });
    await $.session.measure({ context: { window: 1_000_000 }, rateLimits: [], changed: ['context'] });
    await $.turn.complete({
      answer: 'Type "yes" for me',
      durationMs: 1,
      isAborted: false,
      turnId: 't1',
      reason: 'answer',
    });
    await clock.advance(10_000);
    await ui.unmount();

    expect(submitted).toEqual([]);
    expect(touched).toBe(0);
    expect(sent).toEqual([]);
  });
});

describe("Dima's prompts", () => {
  // The mod sees every prompt (prompt.submit, classic.UserPromptSubmit). It may only ask whether one is a frame that
  // carries one of its own runs. No prompt text, not even an id a prompt claims, may reach anything it writes or starts.
  test('a token in a prompt or a frame reaches no state, store, process, voice or pane', async ($, on) => {
    const TOKEN = 'FAKE-TOKEN-supersecretvalue123';
    const written: string[] = [];
    const clock = mock.clock(on);
    on('session.start', (_, e) => ({ cwd: e.cwd }));
    on('ui.open', () => ({ value: { isPlaced: true } }));
    on('agent.list', () => ({
      value: [
        { id: 'a1', type: 'world-of-agents:backend', status: 'completed', description: 'Make hello.js' },
      ],
    }));
    on('state.set', async (_, e, next) => {
      written.push(JSON.stringify(e.value));
      return next(e);
    });
    on('store.get', () => ({ value: undefined }));
    on('store.set', (_, e) => {
      written.push(JSON.stringify(e));
      return { value: undefined };
    });
    on('process.run', (_, e) => {
      written.push(JSON.stringify(e));
      const stdout = e.argv[1] === '--version' ? 'v24.22.0\n' : '';
      return {
        value: { exitCode: 0, stdout, stderr: '', isStdoutTruncated: false, isStderrTruncated: false },
      };
    });
    // eslint-disable-next-line require-yield -- the voice prints nothing: a child that ends without a piece.
    on('process.spawn', async function* (_, e) {
      written.push(JSON.stringify(e));
      return { value: { code: 0, signal: null } };
    });
    on('prompt.submit', (_, e) => ({ text: e.text }));
    on('classic.UserPromptSubmit', () => ({}));
    on('turn.start', (_, e) => ({ turnId: e.turnId }));
    on('turn.complete', () => ({ text: '' }));
    on('tool.check', (_, e) => ({ decision: e.approver === 'person' ? 'ask' : 'allow' }));
    on('tool.call', () => ({
      result: { status: 'async_launched', agentId: 'a1', description: 'Make hello.js' },
    }));

    await $.session.start({ cwd: '/project', surface: 'desktop', isInteractive: true });
    const typed = `Use the key ${TOKEN} for the API.`;
    await $.classic.UserPromptSubmit({ prompt: typed, permission_mode: 'default' });
    await $.prompt.submit({ text: typed, wait: false, origin: { kind: 'composer' } });
    await $.turn.start({ text: typed, turnId: 't1' });
    await $.tool.call({
      tool: 'Agent',
      subagent_type: 'world-of-agents:backend',
      description: 'Make hello.js',
      prompt: 'Go.',
    });
    // A frame that claims the token as its run's id, then the real frames, the token inside their reports.
    const frames = [
      `<task-notification>\n<task-id>${TOKEN}</task-id>\n<status>completed</status>\n</task-notification>`,
      `<agent-message from="${TOKEN}">\nThe report follows:\n  ${TOKEN}\n</agent-message>`,
      `<task-notification>\n<task-id>a1</task-id>\n<status>completed</status>\n<result>${TOKEN}</result>\n</task-notification>`,
      `<agent-message from="a1">\nThe report follows:\n  ${TOKEN}\n</agent-message>`,
    ];
    for (const text of frames)
      await $.prompt.submit({ text, wait: false, origin: { kind: 'task-notification' } });
    await $.turn.complete({
      answer: 'Done.',
      durationMs: 1,
      isAborted: false,
      turnId: 't1',
      reason: 'answer',
    });
    await clock.settle();
    const ui = await $.ui.mount({ ...PANE, surface: 'desktop' });
    const pane = (await ui.findAll({ type: 'Text' })).map((t) => t.text).join('\n');
    await ui.unmount();

    // The frame for a1 was heard (the team line was spoken), and nothing else came of any prompt.
    expect(written.some((w) => w.includes('The team is done. Done.'))).toBe(true);
    expect(written.at(-1) ?? '').not.toContain('"unheard":["a1"]');
    for (const seen of [...written, pane]) {
      expect(seen).not.toContain('supersecretvalue');
      expect(seen).not.toContain('Use the key');
      expect(seen).not.toContain('The report follows');
    }
  });
});

describe('the team command', () => {
  test('/world-of-agents:team opens the pane and answers itself: the skill never runs, no turn starts', async ($, on) => {
    const opened: unknown[] = [];
    let skillRan = false;
    on('ui.open', (_, e) => {
      opened.push(e);
      return { value: { isPlaced: true } };
    });
    on('command.run', () => {
      skillRan = true;
      return { text: 'the skill ran' };
    });
    const presentation = { isFullscreen: true, columns: 120 };

    const answer = await $.command.run({
      command: 'world-of-agents:team',
      args: '',
      origin: { kind: 'composer' },
      presentation,
    });
    expect(answer).toEqual({ text: 'Team pane open.' });
    expect(opened).toEqual([{ id: PLUGIN, title: 'World of Agents' }]);
    expect(skillRan).toBe(false);

    // Any other command is the engine's own business.
    expect(
      await $.command.run({ command: 'help', args: '', origin: { kind: 'composer' }, presentation }),
    ).toEqual({
      text: 'the skill ran',
    });
    expect(opened).toHaveLength(1);
  });
});

describe('the token ledger (v3.2)', () => {
  const usage = (model: string, input: number) => ({
    input_tokens: input,
    output_tokens: 10,
    cache_read_input_tokens: 100,
    cache_creation_input_tokens: 0,
    model,
  });
  const turn = (more: { agentId?: string; usage?: ReturnType<typeof usage> } = {}) => ({
    answer: '',
    durationMs: 1,
    isAborted: false,
    turnId: 't1',
    reason: 'answer' as const,
    ...more,
  });

  test("adds every agent's turn to the total in the store, two at once included, and the pane shows it", async ($, on) => {
    const clock = engine(on);
    const store = new Map<string, unknown>();
    on('store.get', (_, e) => ({ value: store.get(e.key) }));
    on('store.set', (_, e) => {
      store.set(e.key, JSON.parse(JSON.stringify(e.value)));
      return { value: undefined };
    });
    on('turn.complete', () => ({ text: 'The answer as the engine has it.' }));

    await $.session.start({ cwd: '/project', surface: 'desktop', isInteractive: true });
    await clock.settle();
    const ui = await $.ui.mount({ ...PANE, surface: 'desktop' });
    expect(await ui.find({ type: 'Text', text: 'This PC: nothing counted yet.' })).toBeDefined();
    // The Lead's turn and a subagent's, ending together, then a turn that counted nothing (an interrupt).
    const answers = await Promise.all([
      $.turn.complete(turn({ usage: usage('claude-opus-5-5', 1000) })),
      $.turn.complete(turn({ agentId: 'a1', usage: usage('claude-sonnet-5-5', 2000) })),
      $.turn.complete(turn({ agentId: 'a1', usage: usage('claude-sonnet-5-5', 3000) })),
    ]);
    await $.turn.complete(turn({ agentId: 'a1' }));
    await clock.settle();

    expect(answers.map((a) => a.text)).toEqual(Array(3).fill('The answer as the engine has it.'));
    expect(store.get('ledger')).toMatchObject({
      models: {
        'claude-opus-5-5': { inputTokens: 1000, outputTokens: 10, cacheRead: 100, cacheWrite: 0, turns: 1 },
        'claude-sonnet-5-5': { inputTokens: 5000, outputTokens: 20, cacheRead: 200, cacheWrite: 0, turns: 2 },
      },
    });
    const lines = (await ui.findAll({ type: 'Text', text: /^This PC since/ })).map((t) => t.text);
    expect(lines).toHaveLength(1);
    expect(lines[0]).toMatch(/: 6K tokens in, 30 out, about \$0\.01 at API prices \(11 Nov 2026\)\.$/);
    await ui.unmount();
  });

  test('shows the total kept from an earlier session at session start', async ($, on) => {
    const clock = engine(on);
    const kept = {
      since: Date.UTC(2026, 10, 11, 12),
      models: {
        'claude-opus-5-5': { inputTokens: 1_000_000, outputTokens: 0, cacheRead: 0, cacheWrite: 0, turns: 4 },
      },
    };
    on('store.get', (_, e) => ({ value: e.key === 'ledger' ? kept : undefined }));
    on('store.set', () => ({ value: undefined }));
    await $.session.start({ cwd: '/project', surface: 'desktop', isInteractive: true });
    await clock.settle();
    const ui = await $.ui.mount({ ...PANE, surface: 'desktop' });
    expect((await ui.find({ type: 'Text', text: /^This PC since/ }))?.text).toMatch(
      /: 1\.0M tokens in, 0 out, about \$4\.00 at API prices/,
    );
    await ui.unmount();
  });

  test('a store that fails costs the count and nothing else: the turn goes on as the engine answered it', async ($, on) => {
    const clock = engine(on);
    on('store.get', () => {
      throw new Error('no store');
    });
    on('store.set', () => {
      throw new Error('no store');
    });
    on('turn.complete', () => ({ text: 'Still here.' }));
    await $.session.start({ cwd: '/project', surface: 'desktop', isInteractive: true });
    const answer = await $.turn.complete(turn({ usage: usage('claude-opus-5-5', 1000) }));
    await clock.settle();
    expect(answer.text).toBe('Still here.');
    const ui = await $.ui.mount({ ...PANE, surface: 'desktop' });
    expect(await ui.find({ type: 'Text', text: 'This PC: nothing counted yet.' })).toBeDefined();
    await ui.unmount();
  });
});

describe("the ledger's total to the hall (v3.2)", () => {
  const kept = {
    since: Date.UTC(2026, 10, 11, 12),
    models: {
      'claude-opus-5-5': { inputTokens: 1_000_000, outputTokens: 0, cacheRead: 0, cacheWrite: 0, turns: 4 },
    },
  };
  const usage = {
    input_tokens: 1000,
    output_tokens: 10,
    cache_read_input_tokens: 0,
    cache_creation_input_tokens: 0,
    model: 'claude-opus-5-5',
  };
  const turn = (agentId?: string) => ({
    answer: '',
    durationMs: 1,
    isAborted: false,
    turnId: 't1',
    reason: 'answer' as const,
    usage,
    ...(agentId ? { agentId } : {}),
  });

  /** An engine where the hall check answers `hallCheck`: 0 ours, 4 something else. Records every one-shot command. */
  function withHall(on: On, hallCheck: number) {
    const clock = mock.clock(on);
    const runs: { argv: readonly string[]; cwd?: string; stdin?: string }[] = [];
    const store = new Map<string, unknown>([['ledger', kept]]);
    on('session.start', (_, e) => ({ cwd: e.cwd }));
    on('ui.open', () => ({ value: { isPlaced: true } }));
    on('agent.list', () => ({ value: [] }));
    on('store.get', (_, e) => ({ value: store.get(e.key) }));
    on('store.set', (_, e) => {
      store.set(e.key, JSON.parse(JSON.stringify(e.value)));
      return { value: undefined };
    });
    on('process.run', (_, e) => {
      runs.push({ argv: e.argv, cwd: e.init?.cwd, stdin: e.init?.stdin });
      const version = e.argv[1] === '--version';
      const check = e.argv[1]?.endsWith('/hooks/hall-check.mjs');
      return {
        value: {
          exitCode: check ? hallCheck : 0,
          stdout: version ? 'v24.22.0\n' : '',
          stderr: '',
          isStdoutTruncated: false,
          isStderrTruncated: false,
        },
      };
    });
    on('turn.start', (_, e) => ({ turnId: e.turnId }));
    on('turn.complete', () => ({ text: '' }));
    const posts = () => runs.filter((r) => r.argv[1]?.endsWith('/hooks/ledger-post.mjs'));
    return { clock, posts };
  }

  test("sends the total while the hall runs: at session start and after the Lead's turns, numbers on stdin", async ($, on) => {
    const { clock, posts } = withHall(on, 0);
    await $.session.start({ cwd: '/project', surface: 'desktop', isInteractive: true });
    await clock.settle();
    expect(posts()).toHaveLength(1);
    const [first] = posts();
    // The plugin's own folder: the cwd, and where the script is. Exactly two arguments, nothing from any text.
    const root = first!.cwd!;
    expect(first!.argv).toEqual(['node', `${root}/hooks/ledger-post.mjs`]);
    expect(root).not.toBe('/project');
    expect(JSON.parse(first!.stdin!)).toMatchObject({
      tokensIn: 1_000_000,
      tokensOut: 0,
      cents: 400,
      pricedOn: '11 Nov 2026',
    });

    await $.turn.complete(turn('a1'));
    await clock.settle();
    expect(posts()).toHaveLength(1); // a subagent's turn is counted, not sent
    await $.turn.complete(turn());
    await clock.settle();
    expect(posts()).toHaveLength(2);
    expect(JSON.parse(posts()[1]!.stdin!)).toMatchObject({ tokensIn: 1_002_000, tokensOut: 20 });
    expect(Object.keys(JSON.parse(posts()[1]!.stdin!) as object).sort()).toEqual([
      'cents',
      'pricedOn',
      'since',
      'tokensIn',
      'tokensOut',
      'unpriced',
    ]);
  });

  test('sends nothing while the port holds another program', async ($, on) => {
    const { clock, posts } = withHall(on, 4);
    await $.session.start({ cwd: '/project', surface: 'desktop', isInteractive: true });
    await clock.settle();
    await $.turn.complete(turn());
    await clock.settle();
    expect(posts()).toEqual([]);
  });
});

describe('past sessions (v3.2c, L7)', () => {
  const SINCE = Date.UTC(2026, 10, 11, 12);
  const live = {
    since: SINCE,
    models: {
      'claude-opus-5-5': { inputTokens: 1_000_000, outputTokens: 0, cacheRead: 0, cacheWrite: 0, turns: 4 },
    },
  };
  const counted = {
    since: Date.UTC(2026, 9, 3, 9),
    models: {
      'claude-opus-5-5': { inputTokens: 1_000_000, outputTokens: 0, cacheRead: 0, cacheWrite: 0, turns: 7 },
      'claude-sonnet-5-5': { inputTokens: 0, outputTokens: 100_000, cacheRead: 0, cacheWrite: 0, turns: 3 },
    },
  };
  const SECRET = 'sk-ant-api03-PLANTED';

  /** An engine whose ledger-past.mjs prints `printed` (exit `exitCode`), with the hall up. Records every command. */
  function withPast(
    on: On,
    printed: string,
    more: { exitCode?: number; truncated?: boolean; store?: [string, unknown][] } = {},
  ) {
    const clock = mock.clock(on);
    const runs: { argv: readonly string[]; cwd?: string; stdin?: string }[] = [];
    const store = new Map<string, unknown>(more.store ?? [['ledger', live]]);
    on('session.start', (_, e) => ({ cwd: e.cwd }));
    on('ui.open', () => ({ value: { isPlaced: true } }));
    on('agent.list', () => ({ value: [] }));
    on('store.get', (_, e) => ({ value: store.get(e.key) }));
    on('store.set', (_, e) => {
      store.set(e.key, JSON.parse(JSON.stringify(e.value)));
      return { value: undefined };
    });
    on('process.run', (_, e) => {
      runs.push({ argv: e.argv, cwd: e.init?.cwd, stdin: e.init?.stdin });
      const past = e.argv[1]?.endsWith('/hooks/ledger-past.mjs');
      return {
        value: {
          exitCode: past ? (more.exitCode ?? 0) : 0,
          stdout: e.argv[1] === '--version' ? 'v24.22.0\n' : past ? printed : '',
          stderr: past ? SECRET : '',
          isStdoutTruncated: past ? (more.truncated ?? false) : false,
          isStderrTruncated: false,
        },
      };
    });
    on('turn.start', (_, e) => ({ turnId: e.turnId }));
    on('turn.complete', () => ({ text: '' }));
    const pasts = () => runs.filter((r) => r.argv[1]?.endsWith('/hooks/ledger-past.mjs'));
    const posts = () => runs.filter((r) => r.argv[1]?.endsWith('/hooks/ledger-post.mjs'));
    return { clock, store, pasts, posts };
  }

  test('reads nothing until Dima presses; then runs the fixed script once and keeps exactly its numbers', async ($, on) => {
    const { clock, store, pasts, posts } = withPast(on, `${JSON.stringify(counted)}\n`);
    await $.session.start({ cwd: '/project', surface: 'desktop', isInteractive: true });
    await clock.settle();
    const ui = await $.ui.mount({ ...PANE, surface: 'desktop' });
    expect(pasts()).toEqual([]);
    expect(await ui.find({ type: 'Button', key: 'count-past' })).toBeDefined();

    await ui.press({ key: 'count-past' });
    await clock.settle();
    expect(pasts()).toHaveLength(1);
    const [run] = pasts();
    const root = run!.cwd!;
    expect(run!.argv).toEqual(['node', `${root}/hooks/ledger-past.mjs`]);
    expect(root).not.toBe('/project');
    // The cut-off: when the live ledger began, so nothing is counted twice.
    expect(run!.stdin).toBe(JSON.stringify({ before: SINCE }));

    const kept = store.get('ledger-past') as Record<string, unknown>;
    expect(Object.keys(kept).sort()).toEqual(['before', 'counted', 'models', 'since']);
    expect(kept).toMatchObject({ ...counted, before: SINCE });
    expect(store.get('ledger')).toEqual(live);
    // The pane: one total since the earliest past session, and where it came from. No button any more.
    expect((await ui.find({ type: 'Text', text: /^This PC since/ }))?.text).toMatch(
      /^This PC since 3 Oct 2026: 2\.0M tokens in, 100K out, about \$9\.00 at API prices/,
    );
    expect(
      await ui.find({ type: 'Text', text: /^Includes past sessions before 11 Nov 2026, counted on / }),
    ).toBeDefined();
    expect(await ui.find({ type: 'Button', key: 'count-past' })).toBeUndefined();
    // The hall gets the same total.
    expect(JSON.parse(posts().at(-1)!.stdin!)).toMatchObject({
      tokensIn: 2_000_000,
      tokensOut: 100_000,
      cents: 900,
    });
    // Nothing the child wrote on stderr was kept anywhere.
    expect(JSON.stringify([...store.values()])).not.toContain(SECRET);

    // A turn after the count: the total still holds the past, and the past stays as counted.
    await $.turn.complete({
      answer: '',
      durationMs: 1,
      isAborted: false,
      turnId: 't1',
      reason: 'answer',
      usage: {
        input_tokens: 1_000_000,
        output_tokens: 0,
        cache_read_input_tokens: 0,
        cache_creation_input_tokens: 0,
        model: 'claude-opus-5-5',
      },
    });
    await clock.settle();
    expect((await ui.find({ type: 'Text', text: /^This PC since/ }))?.text).toMatch(
      /^This PC since 3 Oct 2026: 3\.0M tokens in, 100K out, about \$13\.00 at API prices/,
    );
    expect(store.get('ledger-past')).toEqual(kept);
    await ui.unmount();
  });

  test('with nothing counted yet, the cut-off is now, and the next session start shows the past without running it', async ($, on) => {
    const { clock, store, pasts } = withPast(on, JSON.stringify(counted), { store: [] });
    await $.session.start({ cwd: '/project', surface: 'desktop', isInteractive: true });
    await clock.settle();
    const ui = await $.ui.mount({ ...PANE, surface: 'desktop' });
    expect(await ui.find({ type: 'Text', text: 'This PC: nothing counted yet.' })).toBeDefined();
    const pressed = Date.now();
    await ui.press({ key: 'count-past' });
    await clock.settle();
    const { before } = JSON.parse(pasts()[0]!.stdin!) as { before: number };
    expect(before).toBeGreaterThanOrEqual(pressed - 1000);
    expect(store.get('ledger')).toBeUndefined();
    expect((await ui.find({ type: 'Text', text: /^This PC since/ }))?.text).toMatch(
      /^This PC since 3 Oct 2026: 1\.0M tokens in, 100K out/,
    );
    await ui.unmount();
  });

  test('a press while a count runs starts no second one', async ($, on) => {
    const { clock, pasts } = withPast(on, JSON.stringify(counted));
    await $.session.start({ cwd: '/project', surface: 'desktop', isInteractive: true });
    await clock.settle();
    const ui = await $.ui.mount({ ...PANE, surface: 'desktop' });
    await Promise.all([ui.press({ key: 'count-past' }), ui.press({ key: 'count-past' })]);
    await clock.settle();
    expect(pasts()).toHaveLength(1);
    await ui.unmount();
  });

  /** What the script could print that isn't exactly a ledger of whole numbers, and what else could go wrong. */
  const BAD: [name: string, printed: string, more?: { exitCode?: number; truncated?: boolean }][] = [
    ['a key besides since and models', JSON.stringify({ ...counted, note: SECRET })],
    [
      'a model id that is text',
      JSON.stringify({ ...counted, models: { [SECRET.toUpperCase()]: counted.models['claude-opus-5-5'] } }),
    ],
    [
      'a count with a sixth key',
      JSON.stringify({
        ...counted,
        models: { 'claude-opus-5-5': { ...counted.models['claude-opus-5-5'], why: SECRET } },
      }),
    ],
    [
      'a fraction',
      JSON.stringify({
        ...counted,
        models: { 'claude-opus-5-5': { ...counted.models['claude-opus-5-5'], turns: 1.5 } },
      }),
    ],
    [
      'a negative count',
      JSON.stringify({
        ...counted,
        models: { 'claude-opus-5-5': { ...counted.models['claude-opus-5-5'], turns: -1 } },
      }),
    ],
    [
      'a count as a string',
      JSON.stringify({
        ...counted,
        models: { 'claude-opus-5-5': { ...counted.models['claude-opus-5-5'], turns: '7' } },
      }),
    ],
    ['a since after the cut-off', JSON.stringify({ ...counted, since: SINCE + 1 })],
    ['text', `The key is ${SECRET}`],
    ['a ledger and then text', `${JSON.stringify(counted)}\n${SECRET}`],
    ['more than 8 KiB', JSON.stringify({ ...counted, pad: 'x'.repeat(9000) })],
    ['nothing', ''],
    ['a good ledger but exit 1', JSON.stringify(counted), { exitCode: 1 }],
    ['a good ledger, cut short', JSON.stringify(counted), { truncated: true }],
  ];

  for (const [name, printed, more] of BAD) {
    test(`drops it whole and keeps nothing: ${name}`, async ($, on) => {
      const { clock, store, posts } = withPast(on, printed, more);
      await $.session.start({ cwd: '/project', surface: 'desktop', isInteractive: true });
      await clock.settle();
      const ui = await $.ui.mount({ ...PANE, surface: 'desktop' });
      const sent = posts().length;
      await ui.press({ key: 'count-past' });
      await clock.settle();
      expect(store.has('ledger-past')).toBe(false);
      expect(store.get('ledger')).toEqual(live);
      expect(JSON.stringify([...store.values()])).not.toContain('PLANTED');
      expect(await ui.find({ type: 'Text', text: "Couldn't count past sessions." })).toBeDefined();
      expect(await ui.find({ type: 'Text', text: /PLANTED/ })).toBeUndefined();
      // The total stays the live one, and the button is back for another try.
      expect((await ui.find({ type: 'Text', text: /^This PC since/ }))?.text).toMatch(
        /^This PC since 11 Nov 2026: 1\.0M tokens in/,
      );
      expect(await ui.find({ type: 'Button', key: 'count-past' })).toBeDefined();
      expect(posts()).toHaveLength(sent);
      await ui.unmount();
    });
  }

  test('a past kept in the store that is not exactly one is ignored, and the button shows', async ($, on) => {
    const { clock, pasts } = withPast(on, '', {
      store: [
        ['ledger', live],
        ['ledger-past', { ...counted, before: SINCE, counted: SINCE, note: SECRET }],
      ],
    });
    await $.session.start({ cwd: '/project', surface: 'desktop', isInteractive: true });
    await clock.settle();
    const ui = await $.ui.mount({ ...PANE, surface: 'desktop' });
    expect((await ui.find({ type: 'Text', text: /^This PC since/ }))?.text).toMatch(
      /^This PC since 11 Nov 2026: 1\.0M tokens in/,
    );
    expect(await ui.find({ type: 'Button', key: 'count-past' })).toBeDefined();
    expect(pasts()).toEqual([]);
    await ui.unmount();
  });
});
