// Kit tests (claude plugin test plugin): what the team pane shows. Each hook the test registers with `on` stands for
// the engine beneath the mod.

import type { AgentInfo, On } from 'claude-code';
import { describe, expect, mock, test } from 'claude-code/testing';
import type { Engine } from 'claude-code/testing';

import { PLUGIN_VERSION } from './hall';

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

const run = (id: string, agent: string, status: AgentInfo['status'], description: string): AgentInfo => ({
  id,
  type: `world-of-agents:${agent}`,
  status,
  description,
});

/**
 * The engine beneath the mod: a session, a pane that places, a mocked clock, `$.agent.list()` answering `agents`, and
 * a current Node with our hall already on the port (hall.test.tsx covers the rest).
 */
function engine(on: On, agents: AgentInfo[]) {
  const clock = mock.clock(on);
  on('session.start', (_, e) => ({ cwd: e.cwd }));
  on('ui.open', () => ({ value: { isPlaced: true } }));
  on('agent.list', () => ({ value: agents }));
  on('classic.PermissionRequest', () => ({}));
  on('process.run', (_, e) => ({
    value: {
      exitCode: 0,
      // Node's version; our hall stating this plugin's (3.2d).
      stdout:
        e.argv[1] === '--version'
          ? 'v24.22.0\n'
          : e.argv[1]?.endsWith('/hooks/hall-check.mjs')
            ? `${PLUGIN_VERSION}\n`
            : '',
      stderr: '',
      isStdoutTruncated: false,
      isStderrTruncated: false,
    },
  }));
  return clock;
}

describe('the team', () => {
  test('lists the five agents by roster name, with the states $.agent.list() gives', async ($, on) => {
    const agents = [
      run('a1', 'backend', 'running', 'Add the users API'),
      run('a2', 'reviewer', 'completed', 'Review the users API'),
      { ...run('a3', 'x', 'running', 'Look around'), type: 'Explore' },
      { ...run('a4', 'x', 'running', 'Pretend to lead'), type: 'world-of-agents:lead' },
    ];
    const clock = engine(on, agents);
    await $.session.start({ cwd: '/', surface: 'desktop', isInteractive: true });
    await clock.advance(2000);

    for (const surface of SURFACES) {
      const ui = await $.ui.mount({ ...PANE, surface });
      const texts = (await ui.findAll({ type: 'Text' })).map((t) => t.text);
      expect(texts).toContain('Lead/PM: idle');
      expect(texts).toContain('Designer: not started');
      expect(texts).toContain('Frontend dev: not started');
      expect(texts).toContain('Backend dev: running');
      expect(texts).toContain('Add the users API');
      expect(texts).toContain('Reviewer: completed');
      // Only our four subagent types, and only by roster name: nothing from an Explore run or a second "lead".
      expect(texts.join('\n')).not.toMatch(/Explore|Look around|Pretend to lead/);
      await ui.unmount();
    }
  });

  test('keeps a finished run after the list forgets it, and shows a newer run of the same agent', async ($, on) => {
    const agents = [run('a1', 'backend', 'completed', 'First task')];
    const clock = engine(on, agents);
    await $.session.start({ cwd: '/', surface: 'desktop', isInteractive: true });
    await clock.advance(2000);
    agents.length = 0;
    await clock.advance(2000);

    const ui = await $.ui.mount({ ...PANE, surface: 'desktop' });
    expect(await ui.find({ type: 'Text', text: 'Backend dev: completed' })).toBeDefined();
    expect(await ui.find({ type: 'Text', text: 'First task' })).toBeDefined();

    agents.push(run('a2', 'backend', 'running', 'Second task'));
    await clock.advance(2000);
    expect(await ui.find({ type: 'Text', text: 'Backend dev: running' })).toBeDefined();
    expect(await ui.find({ type: 'Text', text: 'Second task' })).toBeDefined();
    expect(await ui.find({ type: 'Text', text: 'First task' })).toBeUndefined();
    await ui.unmount();
  });

  test("an Agent call's description is plain Text: no link, no Markdown, no control characters", async ($, on) => {
    const description = '[click me](https://evil.example) **bold** `code` \u001b[31mred\u202e';
    const clock = engine(on, [run('a1', 'designer', 'running', description)]);
    await $.session.start({ cwd: '/', surface: 'desktop', isInteractive: true });
    await clock.advance(2000);

    for (const surface of SURFACES) {
      const ui = await $.ui.mount({ ...PANE, surface });
      const task = await ui.find({ type: 'Text', text: /click me/ });
      expect(task?.text).toBe('[click me](https://evil.example) **bold** `code`  [31mred');
      expect(task?.children.every((child) => typeof child === 'string')).toBe(true);
      expect(await ui.findAll({ type: 'Markdown' })).toHaveLength(0);
      expect((await ui.findAll({ type: 'Link' })).map((link) => link.props.href)).toEqual([
        'http://localhost:4319',
      ]);
      await ui.unmount();
    }
  });

  test('a long description is cut at 120 code points, so an emoji is never split', async ($, on) => {
    // One letter, then emoji (two UTF-16 units each): a cut at 120 units would keep half of the 60th emoji.
    const clock = engine(on, [run('a1', 'frontend', 'running', 'a' + '😀'.repeat(200))]);
    await $.session.start({ cwd: '/', surface: 'desktop', isInteractive: true });
    await clock.advance(2000);

    const ui = await $.ui.mount({ ...PANE, surface: 'desktop' });
    const shown = (await ui.find({ type: 'Text', text: /😀/ }))?.text ?? '';
    expect(shown).toBe('a' + '😀'.repeat(119));
    expect([...shown]).toHaveLength(120);
    expect(shown.length).toBe(239);
    const isHalf = (c: string) => (c.codePointAt(0) ?? 0) >= 0xd800 && (c.codePointAt(0) ?? 0) <= 0xdfff;
    expect([...shown].some(isHalf)).toBe(false);
    await ui.unmount();
  });
});

describe('the Lead', () => {
  test('runs from its own turn.start to its turn.complete; a subagent turn changes nothing', async ($, on) => {
    engine(on, []);
    on('turn.start', (_, e) => ({ turnId: e.turnId }));
    on('turn.complete', () => ({ text: '' }));
    const ui = await $.ui.mount({ ...PANE, surface: 'desktop' });
    const lead = async () => (await ui.find({ type: 'Text', text: /^Lead\/PM: / }))?.text;

    await $.turn.start({ text: 'hi', turnId: 't1' });
    expect(await lead()).toBe('Lead/PM: running');
    await $.turn.complete({
      answer: '',
      durationMs: 1,
      isAborted: false,
      turnId: 's1',
      agentId: 'a1',
      reason: 'answer',
    });
    expect(await lead()).toBe('Lead/PM: running');
    await $.turn.complete({
      answer: 'Done.',
      durationMs: 1,
      isAborted: false,
      turnId: 't1',
      reason: 'answer',
    });
    expect(await lead()).toBe('Lead/PM: idle');
    await $.turn.start({ text: 'task', turnId: 's2', agentId: 'a1' });
    expect(await lead()).toBe('Lead/PM: idle');
    await ui.unmount();
  });
});

describe('who needs you', () => {
  test('an ask names the agent from its agentId, and goes when that call resolves', async ($, on) => {
    const clock = engine(on, [run('a1', 'backend', 'running', 'Add the users API')]);
    let release = () => {};
    const approved = new Promise<void>((resolve) => (release = resolve));
    // The engine asks a person inside the call, and runs the tool once they answer.
    on('tool.check', (_, e) => ({ decision: e.approver === 'person' ? 'ask' : 'allow' }));
    on('tool.call', async (_, e) => {
      // The test's own $ is the engine's: it raises the check as the engine does, over every plugin.
      await $.tool.check({
        tool: e.tool,
        input: {},
        tool_use_id: e.tool_use_id,
        agentId: 'a1',
        approver: 'person',
      });
      // Manual mode: the ask goes to a dialog, which opens at once.
      await $.classic.PermissionRequest({ agent_id: 'a1', tool_name: e.tool, tool_input: {} });
      await approved;
      return { result: { stdout: 'ok' } };
    });

    const ui = await $.ui.mount({ ...PANE, surface: 'desktop' });
    const call = $.tool.call({ tool: 'Bash', command: 'ls', agentId: 'a1' });
    await clock.settle();
    expect(await ui.find({ type: 'Text', text: 'Backend dev asks to run Bash' })).toBeDefined();
    expect(await ui.find({ type: 'Text', text: 'Answer in the permission prompt.' })).toBeDefined();

    release();
    await call;
    expect(await ui.find({ type: 'Text', text: /asks to run/ })).toBeUndefined();
    expect(await ui.find({ type: 'Text', text: 'Needs you' })).toBeUndefined();
    await ui.unmount();
  });
});

describe('who else needs you', () => {
  test("the Lead's own ask names the Lead and goes with its turn; an unknown agent is only 'An agent'", async ($, on) => {
    const clock = engine(on, [{ ...run('x1', 'x', 'running', 'Not ours'), type: 'Explore' }]);
    on('tool.check', () => ({ decision: 'ask' }));
    on('turn.complete', () => ({ text: '' }));
    const ui = await $.ui.mount({ ...PANE, surface: 'desktop' });

    await $.tool.check({ tool: 'Read', input: {}, tool_use_id: 'c1', approver: 'person' });
    await $.classic.PermissionRequest({ tool_name: 'Read', tool_input: {} });
    await $.tool.check({ tool: 'Bash', input: {}, tool_use_id: 'c2', agentId: 'x1', approver: 'person' });
    await $.classic.PermissionRequest({ agent_id: 'x1', tool_name: 'Bash', tool_input: {} });
    await clock.settle();
    expect(await ui.find({ type: 'Text', text: 'Lead/PM asks to run Read' })).toBeDefined();
    expect(await ui.find({ type: 'Text', text: 'An agent asks to run Bash' })).toBeDefined();
    expect(await ui.find({ type: 'Text', text: /Explore|Not ours/ })).toBeUndefined();

    await $.turn.complete({ answer: '', durationMs: 1, isAborted: true, turnId: 't1', reason: 'aborted' });
    expect(await ui.find({ type: 'Text', text: /Lead\/PM asks/ })).toBeUndefined();
    expect(await ui.find({ type: 'Text', text: 'An agent asks to run Bash' })).toBeDefined();
    await ui.unmount();
  });

  test('in Auto an ask goes to the classifier first: no one needs you until a dialog opens, and most never do', async ($, on) => {
    const clock = engine(on, [run('a1', 'backend', 'running', 'Add the users API')]);
    // The engine's own check of the call lets it through; the ask is the one the stand-in raises, as Dima's would be.
    on('tool.check', (_, e) => ({ decision: e.approver === 'person' ? 'ask' : 'allow' }));
    let decide = () => {};
    let answer = () => {};
    let dialog = false;
    on('tool.call', async (_, e) => {
      await $.tool.check({
        tool: e.tool,
        input: {},
        tool_use_id: e.tool_use_id,
        agentId: 'a1',
        approver: 'person',
      });
      // The classifier decides; only when it hands the call to Dima does the dialog open, and he answers it.
      await new Promise<void>((resolve) => (decide = resolve));
      if (dialog) {
        await $.classic.PermissionRequest({ agent_id: 'a1', tool_name: e.tool, tool_input: {} });
        await new Promise<void>((resolve) => (answer = resolve));
      }
      return { result: { stdout: 'ok' } };
    });
    const ui = await $.ui.mount({ ...PANE, surface: 'desktop' });

    const settled = $.tool.call({ tool: 'Write', file_path: 'hello.js', content: 'x', agentId: 'a1' });
    await clock.settle();
    expect(await ui.find({ type: 'Text', text: 'Needs you' })).toBeUndefined();
    decide();
    await settled;
    expect(await ui.find({ type: 'Text', text: 'Needs you' })).toBeUndefined();

    dialog = true;
    const handed = $.tool.call({ tool: 'Bash', command: 'node hello.js', agentId: 'a1' });
    await clock.settle();
    expect(await ui.find({ type: 'Text', text: 'Needs you' })).toBeUndefined();
    decide();
    await clock.settle();
    expect(await ui.find({ type: 'Text', text: 'Backend dev asks to run Bash' })).toBeDefined();
    answer();
    await handed;
    expect(await ui.find({ type: 'Text', text: 'Needs you' })).toBeUndefined();
    await ui.unmount();
  });

  test('an ask nobody can answer, or one with no call behind it, is no one needing you', async ($, on) => {
    const clock = engine(on, []);
    on('tool.check', () => ({ decision: 'ask' }));
    await $.tool.check({ tool: 'Bash', input: {}, tool_use_id: 'c1', agentId: 'a1' });
    await $.tool.check({ tool: 'Bash', input: {}, tool_use_id: 'c2', agentId: 'a1', approver: 'host' });
    await $.tool.check({ tool: 'Bash', input: {}, approver: 'person' });
    await clock.settle();

    const ui = await $.ui.mount({ ...PANE, surface: 'desktop' });
    expect(await ui.find({ type: 'Text', text: 'Needs you' })).toBeUndefined();
    await ui.unmount();
  });
});

describe('the mode warning', () => {
  const AUTO = 'Auto: Nothing asks you before acting.';
  const BYPASS = 'Bypass: Nothing asks you before acting.';
  const EDITS = "Accept edits: Edits aren't asked, and npm test runs whatever they change.";
  const warningsIn = async (ui: { findAll: (q: { type: string }) => Promise<{ text: string }[]> }) =>
    (await ui.findAll({ type: 'Text' }))
      .map((t) => t.text)
      .filter((t) => /Nothing asks|Edits aren't asked/.test(t));

  test('says what runs without asking in auto, bypassPermissions and acceptEdits, and nothing in other modes', async ($, on) => {
    const clock = engine(on, []);
    on('classic.UserPromptSubmit', () => ({}));
    const modes: [string, string[]][] = [
      ['default', []],
      ['auto', [AUTO]],
      ['plan', []],
      ['bypassPermissions', [BYPASS]],
      ['dontAsk', []],
      ['acceptEdits', [EDITS]],
      ['constructor', []],
      ['default', []],
    ];

    for (const surface of SURFACES) {
      const ui = await $.ui.mount({ ...PANE, surface });
      expect(await warningsIn(ui)).toEqual([]);
      for (const [mode, shown] of modes) {
        await $.classic.UserPromptSubmit({ prompt: 'hi', permission_mode: mode });
        await clock.settle();
        expect(await warningsIn(ui), mode).toEqual(shown);
      }
      await ui.unmount();
    }
  });

  test('learns the mode from a subagent start too, since no event fires when it changes', async ($, on) => {
    const clock = engine(on, []);
    on('classic.SubagentStart', () => ({}));
    const ui = await $.ui.mount({ ...PANE, surface: 'desktop' });
    const start = (mode: string) =>
      $.classic.SubagentStart({
        agent_id: 'a1',
        agent_type: 'world-of-agents:backend',
        permission_mode: mode,
      });

    await start('auto');
    await clock.settle();
    expect(await warningsIn(ui)).toEqual([AUTO]);
    await start('default');
    await clock.settle();
    expect(await warningsIn(ui)).toEqual([]);
    await ui.unmount();
  });
});

describe('usage', () => {
  test('context and plan limits come from session.measure', async ($, on) => {
    const clock = engine(on, []);
    on('session.measure', (_, e) => ({ changed: e.changed }));
    const fiveHour = '2026-11-06T02:00:00.000Z';
    const sevenDay = '2026-11-12T02:00:00.000Z';
    const hhmm = (iso: string) => {
      const at = new Date(iso);
      return `${String(at.getHours()).padStart(2, '0')}:${String(at.getMinutes()).padStart(2, '0')}`;
    };
    const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][new Date(sevenDay).getDay()];

    for (const surface of SURFACES) {
      const ui = await $.ui.mount({ ...PANE, surface });
      await $.session.measure({ context: { window: 200_000 }, rateLimits: [], changed: ['context'] });
      await clock.settle();
      expect(await ui.find({ type: 'Text', text: 'Context window 200K' })).toBeDefined();

      await $.session.measure({
        context: { tokens: 19017, window: 1_000_000, percent: 2 },
        rateLimits: [
          { kind: 'five_hour', percentUsed: 31, resetsAt: fiveHour },
          { kind: 'seven_day', percentUsed: 41.5, resetsAt: sevenDay },
          { kind: 'spend_limit', percentUsed: 7 },
        ],
        changed: ['context', 'rateLimits'],
      });
      await clock.settle();
      const texts = (await ui.findAll({ type: 'Text' })).map((t) => t.text);
      expect(texts).toContain('Context 2% of 1M');
      expect(texts).toContain(`5-hour limit 31%, resets ${hhmm(fiveHour)}`);
      expect(texts).toContain(`7-day limit 41.5%, resets ${day} ${hhmm(sevenDay)}`);
      expect(texts).toContain('spend limit 7%');
      await ui.unmount();
    }
  });

  test('says where usage comes from before the first measurement', async ($, on) => {
    engine(on, []);
    const ui = await $.ui.mount({ ...PANE, surface: 'desktop' });
    expect(await ui.find({ type: 'Text', text: 'Shows after the first answer.' })).toBeDefined();
    await ui.unmount();
  });
});

describe('a stored value', () => {
  test('one an older version stored is read as empty, not drawn half-broken', async ($, on) => {
    engine(on, []);
    on('state.get', () => ({ value: { value: { lead: 'running', agents: 'not a list' }, version: 1 } }));
    const ui = await $.ui.mount({ ...PANE, surface: 'desktop' });
    expect(await ui.find({ type: 'Text', text: 'Lead/PM: idle' })).toBeDefined();
    await ui.unmount();
  });
});

describe('on for every project', () => {
  const HEADLINE = 'World of Agents is on for every project.';
  const FIX = (id: string) => `claude plugin disable ${id} --scope user`;

  /** The settings beneath the mod: what each source holds, and every source a read asked for. */
  function settings(on: On, user: Record<string, unknown> | 'fails') {
    const asked: (string | undefined)[] = [];
    on('settings.read', (_, e) => {
      asked.push(e.source);
      if (user === 'fails') return { deny: 'settings unavailable' };
      return {
        value: e.source === 'user' ? user : { enabledPlugins: { 'world-of-agents@world-of-agents': true } },
      };
    });
    return asked;
  }

  async function shown($: Engine, surface: (typeof SURFACES)[number]) {
    const ui = await $.ui.mount({ ...PANE, surface });
    const texts = (await ui.findAll({ type: 'Text' })).map((t) => t.text);
    await ui.unmount();
    return texts;
  }

  test('warns when the user settings turn it on, and gives the command that turns it off there', async ($, on) => {
    const clock = engine(on, []);
    const asked = settings(on, {
      model: 'opus',
      enabledPlugins: { 'world-of-agents@world-of-agents': true, 'other@somewhere': true },
    });
    await $.session.start({ cwd: '/', surface: 'desktop', isInteractive: true });
    await clock.settle();
    // One read, of the user's own settings: never the merged ones, never another source.
    expect(asked).toEqual(['user']);

    for (const surface of SURFACES) {
      const texts = await shown($, surface);
      expect(texts[0]).toBe(HEADLINE);
      expect(texts).toContain(FIX('world-of-agents@world-of-agents'));
      expect(texts.join('\n')).not.toMatch(/other@somewhere|opus/);
    }
  });

  test('says nothing when only the project turns it on, or the user settings turn it off', async ($, on) => {
    const clock = engine(on, []);
    // On in the project (the stand-in's other sources), off or not a plain true in the user's.
    settings(on, {
      enabledPlugins: { 'world-of-agents@world-of-agents': false, 'world-of-agents@woa-dev': 'true' },
    });
    await $.session.start({ cwd: '/', surface: 'desktop', isInteractive: true });
    await clock.settle();
    const texts = await shown($, 'desktop');
    expect(texts).not.toContain(HEADLINE);
    expect(texts.join('\n')).not.toContain('--scope user');
    expect(texts).toContain('Lead/PM: idle');
  });

  test('names only ids of our shape, at most three, each as plain text', async ($, on) => {
    const clock = engine(on, []);
    // Written as numbers: see CLAUDE.md on typed escapes. A right-to-left override in a key.
    const odd = `world-of-agents@evil${String.fromCodePoint(0x202e)}`;
    settings(on, {
      enabledPlugins: {
        [odd]: true,
        'world-of-agents@has space': true,
        'world-of-agents@a': true,
        'world-of-agents@woa-dev': true,
        'world-of-agents@c.d_e': true,
        'world-of-agents@fourth': true,
      },
    });
    await $.session.start({ cwd: '/', surface: 'desktop', isInteractive: true });
    await clock.settle();
    const texts = await shown($, 'desktop');
    expect(texts.filter((t) => t.startsWith('claude plugin disable'))).toEqual([
      FIX('world-of-agents@a'),
      FIX('world-of-agents@woa-dev'),
      FIX('world-of-agents@c.d_e'),
    ]);
    expect(texts.join('\n')).not.toMatch(/evil|has space|fourth/);
  });

  for (const [name, user] of [
    ['fails', 'fails'],
    ['holds no plugins', {}],
    ['holds something else', { enabledPlugins: ['world-of-agents@world-of-agents'] }],
  ] as const) {
    test(`a read that ${name} shows no warning, and the pane works as before`, async ($, on) => {
      const clock = engine(on, []);
      settings(on, user);
      await $.session.start({ cwd: '/', surface: 'desktop', isInteractive: true });
      await clock.settle();
      const texts = await shown($, 'desktop');
      expect(texts).not.toContain(HEADLINE);
      expect(texts).toContain('Lead/PM: idle');
      expect(texts).toContain('Hall: running');
    });
  }
});
