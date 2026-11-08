// Kit tests (claude plugin test plugin): the mod watches and shows, and never decides. Each hook the test registers
// with `on` stands for the engine beneath the mod, so what it answers is what the mod must hand back unchanged.

import type { AgentSpawnInput, On, ToolCallResult, ToolCheckResult } from 'claude-code';
import { describe, expect, mock, test } from 'claude-code/testing';

import { PRESETS } from './presets';

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
  test('each preset button submits exactly its fixed text, as the person, once per press', async ($, on) => {
    engine(on);
    const sent: { text: string; origin: unknown }[] = [];
    on('prompt.submit', (_, e) => {
      sent.push({ text: e.text, origin: e.origin });
      return { text: e.text };
    });

    for (const surface of SURFACES) {
      const ui = await $.ui.mount({ ...PANE, surface });
      for (const preset of PRESETS) {
        sent.length = 0;
        await ui.press({ key: `preset-${preset.key}` });
        expect(sent).toEqual([{ text: preset.text, origin: { kind: 'plugin', name: PLUGIN, asUser: true } }]);
      }
      await ui.unmount();
    }
  });

  test("the presets go dim and send nothing while the Lead's turn runs; a double press sends once", async ($, on) => {
    engine(on);
    const sent: string[] = [];
    let held: { reached: () => void; gate: Promise<void> } | undefined;
    // The engine beneath: a submitted prompt's turn has started by the time submit resolves (PromptSubmitResult). The
    // test can hold the next submission there, before its turn starts.
    on('prompt.submit', async (_, e) => {
      const turnId = `t${sent.push(e.text)}`;
      const hold = held;
      held = undefined;
      if (hold) {
        hold.reached();
        await hold.gate;
      }
      await $.turn.start({ text: e.text, turnId });
      return { text: e.text };
    });
    on('turn.start', (_, e) => ({ turnId: e.turnId }));
    on('turn.complete', () => ({ text: '' }));
    const endTurn = (turnId: string, agentId?: string) =>
      $.turn.complete({ answer: '', durationMs: 1, isAborted: false, turnId, agentId, reason: 'answer' });

    for (const surface of SURFACES) {
      const ui = await $.ui.mount({ ...PANE, surface });
      const dim = async () =>
        (await ui.findAll({ type: 'Button' }))
          .filter((button) => button.key?.startsWith('preset-'))
          .map((button) => button.props.dimColor === true);
      sent.length = 0;
      expect(await dim()).toEqual([false, false, false]);

      // The Lead's turn: every preset dim, and pressing one sends nothing. A subagent's turn ending changes nothing.
      await $.turn.start({ text: 'typed by Dima', turnId: 'typed' });
      expect(await dim()).toEqual([true, true, true]);
      for (const preset of PRESETS) await ui.press({ key: `preset-${preset.key}` });
      await endTurn('s1', 'a1');
      expect(await dim()).toEqual([true, true, true]);
      expect(sent).toEqual([]);
      await endTurn('typed');
      expect(await dim()).toEqual([false, false, false]);

      // A second press before the first one's turn has started.
      let reached = () => {};
      let release = () => {};
      const atSubmit = new Promise<void>((resolve) => (reached = resolve));
      held = { reached, gate: new Promise<void>((resolve) => (release = resolve)) };
      const first = ui.press({ key: 'preset-plan' });
      await atSubmit;
      await ui.press({ key: 'preset-review' });
      release();
      await first;
      expect(sent).toEqual([PRESETS[0].text]);
      expect(await dim()).toEqual([true, true, true]);
      await endTurn('t1');
      await ui.unmount();
    }
  });

  test('nothing but a preset button submits a prompt, and nothing ever sends to another session', async ($, on) => {
    const clock = engine(on);
    const submitted: string[] = [];
    const sent: unknown[] = [];
    on('prompt.submit', (_, e) => {
      submitted.push(e.text);
      return { text: e.text };
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
