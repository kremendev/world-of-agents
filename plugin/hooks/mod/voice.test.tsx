// Kit tests (claude plugin test plugin): the voice. Each hook the test registers with `on` stands for the engine beneath
// the mod; `process.spawn` stands for PowerShell, and what the mod gives it is everything the voice can ever say.

import type { AgentInfo, On, ProcessSpawnRequest } from 'claude-code';
import { describe, expect, mock, test } from 'claude-code/testing';
import type { Engine } from 'claude-code/testing';

import { plain } from './text';
import { backgroundRun, firstSentence, heardRun, speakCommand, withoutMarkdown } from './voice';

const PLUGIN = 'world-of-agents';
const PANE = {
  plugin: PLUGIN,
  component: 'Pane',
  requestId: PLUGIN,
  surface: 'desktop',
  props: {
    title: 'World of Agents',
    isFocused: false,
    bodyColumns: 60,
    placement: 'dock',
    scroll: { offset: 0, bodyRows: 60 },
    view: {},
  },
} as const;
const SESSION = { cwd: '/project', surface: 'desktop', isInteractive: true } as const;
const EMOJI = String.fromCodePoint(0x1f600);
const ESC = String.fromCharCode(27);
const RLO = String.fromCodePoint(0x202e);

const run = (id: string, agent: string, status: AgentInfo['status'], description = 'A task'): AgentInfo => ({
  id,
  type: `world-of-agents:${agent}`,
  status,
  description,
});

/** How a voice behaves: done at once, or speaking until the test lets it go (`release`) or it is stopped. */
type Voices = 'quick' | 'held';

/**
 * The engine beneath the mod: a current Node and our hall already up, `$.agent.list()` answering `agents`, a person
 * asked for every tool call, and PowerShell. `store` is what $.store holds when the session starts.
 */
function engine(
  on: On,
  {
    agents = [] as AgentInfo[],
    voices = 'quick' as Voices,
    store = {} as Record<string, unknown>,
    launches = [] as string[],
  } = {},
) {
  const clock = mock.clock(on);
  // $.store, kept here so the test can read what the mod kept: the test's own $ has no store.
  const kept = new Map(Object.entries(store));
  on('store.get', (_, e) => ({ value: kept.get(e.key) }));
  on('store.set', (_, e) => {
    kept.set(e.key, e.value);
    return { value: undefined };
  });
  on('session.start', (_, e) => ({ cwd: e.cwd }));
  on('ui.open', () => ({ value: { isPlaced: true } }));
  on('agent.list', () => ({ value: agents }));
  on('turn.start', (_, e) => ({ turnId: e.turnId }));
  on('turn.complete', () => ({ text: '' }));
  on('tool.check', (_, e) => ({ decision: e.approver === 'person' ? 'ask' : 'allow' }));
  on('prompt.submit', (_, e) => ({ text: e.text }));
  on('classic.PermissionRequest', () => ({}));
  // An Agent call of the Lead's starts its run in the background, as the Lead's calls did in every recorded run: the
  // call answers at once with the run's id, and the result reaches the Lead later in a frame.
  on('tool.call', (_, e) =>
    e.tool === 'Agent'
      ? { result: { status: 'async_launched', agentId: launches.shift() ?? 'none', description: 'A task' } }
      : { result: { stdout: 'ok' } },
  );
  let root = '';
  on('process.run', (_, e) => {
    root ||= e.init?.cwd ?? '';
    return {
      value: {
        exitCode: 0,
        stdout: e.argv[1] === '--version' ? 'v24.22.0\n' : '',
        stderr: '',
        isStdoutTruncated: false,
        isStderrTruncated: false,
      },
    };
  });

  const spawns: ProcessSpawnRequest[] = [];
  const stopped: string[] = [];
  let alive = 0;
  let mostAlive = 0;
  // A held voice speaks until released; it writes a piece whenever the test says, as a real child's output arrives.
  const releases: (() => void)[] = [];
  let write = () => {};
  on('process.spawn', async function* (_, e) {
    spawns.push(e);
    alive += 1;
    mostAlive = Math.max(mostAlive, alive);
    let done = false;
    try {
      if (voices === 'held') {
        releases.push(() => {
          done = true;
          write();
        });
        while (!done) {
          await new Promise<void>((resolve) => (write = resolve));
          if (!done) yield { stream: 'stdout' as const, text: '.' };
        }
      }
      return { value: { code: 0, signal: null } };
    } finally {
      alive -= 1;
      if (!done && voices === 'held') stopped.push(e.input ?? '');
    }
  });

  const said = () => spawns.map((s) => s.input);
  return {
    clock,
    spawns,
    said,
    stopped,
    mostAlive: () => mostAlive,
    root: () => root,
    kept: (key: string) => kept.get(key),
    /** Ends the voice that speaks now. */
    release: async () => {
      releases.shift()?.();
      await clock.settle();
    },
    /** The speaking child writes a piece of output: a stop the mod asked for lands then, as it would on a stream. */
    writes: async () => {
      write();
      await clock.settle();
    },
  };
}

/** One of the Lead's turns, from its start to its end, with the answer it gave and how it ended. */
async function leadTurn(
  $: Engine,
  turnId: string,
  answer: string,
  reason: 'answer' | 'aborted' | 'error' = 'answer',
) {
  await $.turn.start({ text: 'task', turnId });
  await $.turn.complete({ answer, durationMs: 1, isAborted: reason === 'aborted', turnId, reason });
}

/** An ask whose dialog opens, as in Manual: the check puts the call to the dialog, and its PermissionRequest comes. */
async function ask($: Engine, id: string, agentId?: string, tool = 'Bash') {
  await $.tool.check({ tool, input: {}, tool_use_id: id, agentId, approver: 'person' });
  await $.classic.PermissionRequest({ agent_id: agentId, tool_name: tool, tool_input: {} });
}

/** An ask the Auto classifier settles: no dialog opens, and the call goes on. */
async function settledAsk($: Engine, id: string, agentId?: string, tool = 'Bash') {
  await $.tool.check({ tool, input: {}, tool_use_id: id, agentId, approver: 'person' });
  await $.tool.call({ tool: 'Bash', command: 'node hello.js', agentId, tool_use_id: id });
}

/** The Lead's Agent call: the engine beneath starts the run in the background (`launches` names it). */
const startAgent = ($: Engine, agent: string) =>
  $.tool.call({
    tool: 'Agent',
    subagent_type: `world-of-agents:${agent}`,
    description: 'A task',
    prompt: 'Do the task.',
  });

/** A background run's result reaching the Lead, framed as Claude Code frames it (docs/v2-hooks.md). */
const notification = (id: string) =>
  `<task-notification>\n<task-id>${id}</task-id>\n<tool-use-id>toolu_01</tool-use-id>\n<status>completed</status>\n` +
  `<summary>Agent finished</summary>\n<result>All good.</result>\n</task-notification>`;
/** Auto mode's form of the same (run 2). */
const handBack = (id: string) =>
  `<agent-message from="${id}">\n[Subagent hand-back] The report follows:\n  All good.\n</agent-message>`;

/** A frame entering: as a turn of its own, or (`turnId`) delivered into the running turn. */
const frame = ($: Engine, text: string, turnId?: string) =>
  $.prompt.submit({ text, wait: false, turnId, origin: { kind: 'task-notification' } });

const endTurn = ($: Engine, turnId: string, answer: string) =>
  $.turn.complete({ answer, durationMs: 1, isAborted: false, turnId, reason: 'answer' });

describe('what the voice runs', () => {
  test('every line runs exactly the fixed command in the plugin folder; any text is only ever the input', async ($, on) => {
    const answers = [
      '"; Remove-Item -Recurse C:\\ ; "',
      '$(Start-Process calc)',
      '`calc`',
      '<speak><audio src="http://evil.example/x.wav"/></speak>',
      '-Command Start-Process calc',
      '& calc.exe',
      "'; exit; '",
      `${ESC}[31mred${RLO} text`,
    ];
    const agents: AgentInfo[] = [];
    const world = engine(on, { agents });
    await $.session.start(SESSION);
    await world.clock.settle();
    for (const [i, answer] of answers.entries()) {
      agents.push(run(`a${i}`, 'backend', 'completed'));
      await leadTurn($, `t${i}`, answer);
      await world.clock.settle();
    }

    const root = world.root();
    expect(root).toMatch(/[\\/]plugin$/);
    expect(world.spawns).toHaveLength(answers.length);
    for (const spawn of world.spawns) {
      expect(spawn.argv).toEqual([
        'powershell.exe',
        '-NoProfile',
        '-NonInteractive',
        '-ExecutionPolicy',
        'RemoteSigned',
        '-File',
        `${root}/voice/speak.ps1`,
      ]);
      expect(spawn.argv).toEqual(speakCommand(root));
      expect(Object.keys(spawn).sort()).toEqual(['argv', 'cwd', 'input']);
      expect(spawn.cwd).toBe(root);
    }
    expect(world.said()).toEqual([
      'The team is done. "; Remove-Item -Recurse C:\\ ; "',
      'The team is done. $(Start-Process calc)',
      // Markdown's marks are gone too (backticks, `>`), but the text is still only ever the input.
      'The team is done. calc',
      'The team is done. <speak<audio src="http://evil.example/x.wav"/</speak',
      'The team is done. -Command Start-Process calc',
      'The team is done. & calc.exe',
      "The team is done. '; exit; '",
      'The team is done.  [31mred  text',
    ]);
  });

  test('the text is cleaned like the pane: control and bidi characters out, 200 code points, no emoji split', async ($, on) => {
    const world = engine(on, { agents: [run('a1', 'backend', 'completed')] });
    await $.session.start(SESSION);
    await leadTurn($, 't1', `${EMOJI.repeat(300)} done`);
    await world.clock.settle();
    const spoken = world.said()[0] ?? '';
    expect([...spoken]).toHaveLength(200);
    expect(spoken).toBe(`The team is done. ${EMOJI.repeat(182)}`);

    expect(plain(`a${ESC}b${RLO}c${String.fromCharCode(0x9b)}d${String.fromCodePoint(0x2066)}e`, 200)).toBe(
      'a b c d e',
    );
    expect(plain(`  ${'x'.repeat(250)}`, 200)).toBe('x'.repeat(200));
  });

  test('Markdown is read as plain words: no marks, and a link is only its text, never its target', async ($, on) => {
    const agents = [run('a1', 'backend', 'completed')];
    const world = engine(on, { agents });
    await $.session.start(SESSION);
    await leadTurn(
      $,
      't1',
      '**Done:** the [users API](https://evil.example/steal?k=1) is in; run `npm test` and see ' +
        '![the chart](https://evil.example/c.png) _now_. More: [docs](https://evil.example/docs).',
    );
    await world.clock.settle();
    agents.push(run('a2', 'reviewer', 'completed'));
    await leadTurn($, 't2', '## Summary\n> All good.');
    await world.clock.settle();
    expect(world.said()).toEqual([
      'The team is done. Done: the users API is in; run npm test and see the chart now.',
      'The team is done. Summary',
    ]);
    expect(world.said().join('\n')).not.toMatch(/https?:|evil\.example|[*_`#>[\]()]/);
  });

  test('withoutMarkdown: every mark goes, and each link or image keeps only its text', () => {
    expect(withoutMarkdown('**bold** __bold__ *it* _it_ `code` ```fence```')).toBe(
      'bold bold it it code fence',
    );
    expect(withoutMarkdown('# H1\n### H3\n> quote\n>> nested')).toBe(' H1\n H3\n quote\n nested');
    expect(
      withoutMarkdown('[text](https://evil.example/a.html) and ![alt](https://evil.example/i.png)'),
    ).toBe('text and alt');
    expect(withoutMarkdown('[`code` in a link](https://evil.example)')).toBe('code in a link');
    expect(withoutMarkdown('[an empty target]() and [](https://evil.example)')).toBe('an empty target and ');
    expect(withoutMarkdown('a [broken link](https://evil.example and more')).toBe(
      'a [broken link](https://evil.example and more',
    );
    expect(withoutMarkdown('Plain text, 2 + 2 = 4.')).toBe('Plain text, 2 + 2 = 4.');
  });

  test("the answer's first sentence: up to a sentence's end or the first line break", () => {
    expect(firstSentence('All done. The page is up.')).toBe('All done.');
    expect(firstSentence('Shipped v1.2 today! Next up: tests.')).toBe('Shipped v1.2 today!');
    expect(firstSentence('Ready?\nYes')).toBe('Ready?');
    expect(firstSentence('A heading\nThen text. More.')).toBe('A heading');
    expect(firstSentence('  No full stop at all  ')).toBe('No full stop at all');
    expect(firstSentence('')).toBe('');
  });
});

describe('who needs your approval, in Auto', () => {
  // The Auto run on 8 Nov: six asks (the Lead's two Agent starts, the dev's Write, Bash and hand-back, the Reviewer's
  // hand-back), every one settled by the classifier with no dialog. Before the fix each was spoken.
  test('asks the classifier settles open no dialog: nothing is spoken; the team line comes once, at the end', async ($, on) => {
    const agents: AgentInfo[] = [];
    const world = engine(on, { agents, launches: ['b1', 'r1'] });
    await $.session.start(SESSION);
    await $.turn.start({ text: 'Ask the backend dev to create hello.js.', turnId: 't1' });
    await settledAsk($, 'c1', undefined, 'Agent');
    await startAgent($, 'backend');
    agents.push(run('b1', 'backend', 'running'));
    await endTurn($, 't1', 'The backend dev is on it.');
    await world.clock.settle();
    for (const [id, tool] of [
      ['c2', 'Write'],
      ['c3', 'Bash'],
      ['c4', 'SubagentHandback'],
    ] as const) {
      await settledAsk($, id, 'b1', tool);
      await world.clock.settle();
    }
    agents[0] = run('b1', 'backend', 'completed');
    await frame($, handBack('b1'));
    await $.turn.start({ text: handBack('b1'), turnId: 't2' });
    await settledAsk($, 'c5', undefined, 'Agent');
    await startAgent($, 'reviewer');
    agents.push(run('r1', 'reviewer', 'running'));
    await endTurn($, 't2', 'The reviewer is checking.');
    await world.clock.settle();
    await settledAsk($, 'c6', 'r1', 'SubagentHandback');
    agents[1] = run('r1', 'reviewer', 'completed');
    await frame($, handBack('r1'));
    await $.turn.start({ text: handBack('r1'), turnId: 't3' });
    await endTurn(
      $,
      't3',
      '1. **What changed:** hello.js now exists in the project root.\n2. The review is clean.',
    );
    await world.clock.settle();
    expect(world.said()).toEqual([
      'The team is done. What changed: hello.js now exists in the project root.',
    ]);
  });

  test('one the classifier hands to Dima opens a dialog: that one is spoken', async ($, on) => {
    const world = engine(on, { agents: [run('b1', 'backend', 'running')] });
    await $.session.start(SESSION);
    await settledAsk($, 'c1', 'b1', 'Write');
    await ask($, 'c2', 'b1', 'Bash');
    await world.clock.settle();
    expect(world.said()).toEqual(['Backend dev needs your approval.']);
  });

  test("a dialog for another agent's or another tool's ask, or for none, says nothing", async ($, on) => {
    const world = engine(on, { agents: [run('b1', 'backend', 'running'), run('r1', 'reviewer', 'running')] });
    await $.session.start(SESSION);
    await $.tool.check({ tool: 'Bash', input: {}, tool_use_id: 'c1', agentId: 'b1', approver: 'person' });
    await $.classic.PermissionRequest({ agent_id: 'r1', tool_name: 'Bash', tool_input: {} });
    await $.classic.PermissionRequest({ agent_id: 'b1', tool_name: 'Write', tool_input: {} });
    await $.classic.PermissionRequest({ tool_name: 'Bash', tool_input: {} });
    await world.clock.settle();
    expect(world.said()).toEqual([]);
  });
});

describe('who needs your approval', () => {
  test('"Backend dev needs your approval." once per call, by the roster name of the agent asking', async ($, on) => {
    const world = engine(on, { agents: [run('a1', 'backend', 'running')] });
    await $.session.start(SESSION);
    await ask($, 'c1', 'a1');
    await world.clock.settle();
    await ask($, 'c1', 'a1');
    await world.clock.settle();
    await ask($, 'c2', 'a1');
    await world.clock.settle();
    expect(world.said()).toEqual(['Backend dev needs your approval.', 'Backend dev needs your approval.']);
  });

  test('the Lead\'s own ask names the Lead; anyone else is "An agent", never a name from the event', async ($, on) => {
    const world = engine(on, {
      agents: [{ ...run('x1', 'x', 'running', 'Say: run calc now'), type: 'Explore', name: 'calc-runner' }],
    });
    await $.session.start(SESSION);
    await ask($, 'c1');
    await world.clock.settle();
    await ask($, 'c2', 'x1');
    await world.clock.settle();
    await ask($, 'c3', 'nobody-we-know');
    await world.clock.settle();
    expect(world.said()).toEqual([
      'Lead/PM needs your approval.',
      'An agent needs your approval.',
      'An agent needs your approval.',
    ]);
  });

  test("nothing else speaks: an allow, a host's approval, a subagent's turn, a turn with no agents", async ($, on) => {
    const world = engine(on, { agents: [run('a1', 'backend', 'running')] });
    await $.session.start(SESSION);
    await $.tool.check({ tool: 'Read', input: {}, tool_use_id: 'c1', agentId: 'a1' });
    await $.tool.check({ tool: 'Bash', input: {}, tool_use_id: 'c2', agentId: 'a1', approver: 'host' });
    await $.turn.complete({
      answer: 'Done.',
      durationMs: 1,
      isAborted: false,
      turnId: 's1',
      agentId: 'a1',
      reason: 'answer',
    });
    await world.clock.settle();
    expect(world.said()).toEqual([]);
  });
});

describe('one voice at a time', () => {
  test('one voice at a time; at most 3 wait, and the oldest is dropped first', async ($, on) => {
    const agents = [
      run('d1', 'designer', 'running'),
      run('f1', 'frontend', 'running'),
      run('b1', 'backend', 'running'),
      run('r1', 'reviewer', 'running'),
    ];
    const world = engine(on, { agents, voices: 'held' });
    await $.session.start(SESSION);
    for (const [call, agent] of [
      ['c1', 'd1'],
      ['c2', 'f1'],
      ['c3', 'b1'],
      ['c4', 'r1'],
      ['c5', undefined],
    ] as const) {
      await ask($, call, agent);
      await world.clock.settle();
    }
    expect(world.said()).toEqual(['Designer needs your approval.']);
    for (let i = 0; i < 4; i++) await world.release();
    expect(world.said()).toEqual([
      'Designer needs your approval.',
      'Backend dev needs your approval.',
      'Reviewer needs your approval.',
      'Lead/PM needs your approval.',
    ]);
    expect(world.mostAlive()).toBe(1);
    expect(world.stopped).toEqual([]);
  });

  test('a voice still going after 15 s is stopped, and the next one starts', async ($, on) => {
    const world = engine(on, {
      agents: [run('b1', 'backend', 'running'), run('r1', 'reviewer', 'running')],
      voices: 'held',
    });
    await $.session.start(SESSION);
    await ask($, 'c1', 'b1');
    await world.clock.settle();
    await ask($, 'c2', 'r1');
    await world.clock.advance(14_999);
    await world.writes();
    expect(world.stopped).toEqual([]);
    expect(world.said()).toEqual(['Backend dev needs your approval.']);

    await world.clock.advance(1);
    await world.writes();
    expect(world.stopped).toEqual(['Backend dev needs your approval.']);
    expect(world.said()).toEqual(['Backend dev needs your approval.', 'Reviewer needs your approval.']);
    await world.release();
  });
});

describe('mute', () => {
  test('muted from an earlier session: nothing is ever spawned, and the button says how to turn it back on', async ($, on) => {
    const world = engine(on, { agents: [run('a1', 'backend', 'completed')], store: { muted: true } });
    await $.session.start(SESSION);
    await world.clock.settle();
    await ask($, 'c1', 'a1');
    await leadTurn($, 't1', 'All done.');
    await world.clock.settle();
    expect(world.spawns).toEqual([]);
    const ui = await $.ui.mount(PANE);
    expect((await ui.find({ type: 'Button', key: 'mute' }))?.props.label).toBe('Unmute voice');
    await ui.unmount();
  });

  test('a press mutes at once, stops the voice speaking, and is kept for the next session', async ($, on) => {
    const world = engine(on, {
      agents: [run('b1', 'backend', 'running'), run('r1', 'reviewer', 'running')],
      voices: 'held',
    });
    await $.session.start(SESSION);
    await world.clock.settle();
    const ui = await $.ui.mount(PANE);
    expect((await ui.find({ type: 'Button', key: 'mute' }))?.props.label).toBe('Mute voice');
    await ask($, 'c1', 'b1');
    await world.clock.settle();
    await ask($, 'c2', 'r1');
    await world.clock.settle();

    await ui.press({ key: 'mute' });
    await world.writes();
    expect(world.stopped).toEqual(['Backend dev needs your approval.']);
    expect(world.said()).toEqual(['Backend dev needs your approval.']);
    expect(world.kept('muted')).toBe(true);
    expect((await ui.find({ type: 'Button', key: 'mute' }))?.props.label).toBe('Unmute voice');

    await ask($, 'c3', 'b1');
    await world.clock.settle();
    expect(world.said()).toEqual(['Backend dev needs your approval.']);

    await ui.press({ key: 'mute' });
    expect(world.kept('muted')).toBe(false);
    await ask($, 'c4', 'b1');
    await world.clock.settle();
    expect(world.said()).toEqual(['Backend dev needs your approval.', 'Backend dev needs your approval.']);
    await world.release();
    await ui.unmount();
  });
});

describe('the team is done: background runs', () => {
  const APPROVALS = ['Backend dev needs your approval.', 'Backend dev needs your approval.'];

  // The desktop check on 8 Nov, as the app's log shows it (Auto mode, two Lead turns, two lines heard): the Backend dev,
  // started in the background, was over before the Lead's own turn ended, and the turn ended with all runs over. The
  // Lead hadn't seen the dev's result yet; it came in the next turn, which sent the Reviewer, whose result was delivered
  // into that running turn.
  test("the Backend dev ends before the Lead's own turn: nothing yet; said once, after the Reviewer", async ($, on) => {
    const agents: AgentInfo[] = [];
    const world = engine(on, { agents, launches: ['b1', 'r1'] });
    await $.session.start(SESSION);

    await $.turn.start({
      text: 'Ask the backend dev to create hello.js that prints hello, then run node hello.js.',
      turnId: 't1',
    });
    await startAgent($, 'backend');
    agents.push(run('b1', 'backend', 'running'));
    await ask($, 'c1', 'b1');
    await world.clock.settle();
    await ask($, 'c2', 'b1');
    await world.clock.settle();
    agents[0] = run('b1', 'backend', 'completed');
    await endTurn($, 't1', 'The backend dev is on it.');
    await world.clock.settle();
    expect(world.said()).toEqual(APPROVALS);

    await frame($, notification('b1'));
    await $.turn.start({ text: notification('b1'), turnId: 't2' });
    await startAgent($, 'reviewer');
    agents.push(run('r1', 'reviewer', 'running'));
    await world.clock.settle();
    agents[1] = run('r1', 'reviewer', 'completed');
    await frame($, notification('r1'), 't2');
    await endTurn($, 't2', 'Done: hello.js prints hello, and the review is clean.');
    await world.clock.settle();
    expect(world.said()).toEqual([
      ...APPROVALS,
      'The team is done. Done: hello.js prints hello, and the review is clean.',
    ]);
  });

  test('the same in Auto, whose results come back as hand-backs', async ($, on) => {
    const agents: AgentInfo[] = [];
    const world = engine(on, { agents, launches: ['b1', 'r1'] });
    await $.session.start(SESSION);
    await $.turn.start({ text: 'Make hello.js.', turnId: 't1' });
    await startAgent($, 'backend');
    agents.push(run('b1', 'backend', 'completed'));
    await endTurn($, 't1', 'The backend dev is on it.');
    await world.clock.settle();
    expect(world.said()).toEqual([]);

    await frame($, handBack('b1'));
    await $.turn.start({ text: handBack('b1'), turnId: 't2' });
    await startAgent($, 'reviewer');
    agents.push(run('r1', 'reviewer', 'completed'));
    await frame($, handBack('r1'), 't2');
    await endTurn($, 't2', 'All done.');
    await world.clock.settle();
    expect(world.said()).toEqual(['The team is done. All done.']);
  });

  // The CLI run on 8 Nov: each result came as a turn of its own, and the Reviewer outlived the turn that sent it.
  test('the Reviewer outlives the turn that sent it: said once, at the end of the turn its result starts', async ($, on) => {
    const agents: AgentInfo[] = [];
    const world = engine(on, { agents, launches: ['b1', 'r1'] });
    await $.session.start(SESSION);
    await $.turn.start({ text: 'Make hello.js.', turnId: 't1' });
    await startAgent($, 'backend');
    agents.push(run('b1', 'backend', 'running'));
    await endTurn($, 't1', 'The backend dev is on it.');
    await world.clock.settle();

    agents[0] = run('b1', 'backend', 'completed');
    await frame($, notification('b1'));
    await $.turn.start({ text: notification('b1'), turnId: 't2' });
    await startAgent($, 'reviewer');
    agents.push(run('r1', 'reviewer', 'running'));
    await endTurn($, 't2', 'Backend finished. The reviewer is checking.');
    await world.clock.settle();
    expect(world.said()).toEqual([]);

    agents[1] = run('r1', 'reviewer', 'completed');
    await frame($, notification('r1'));
    await $.turn.start({ text: notification('r1'), turnId: 't3' });
    await endTurn($, 't3', 'It is done and the review came back clean.');
    await world.clock.settle();
    expect(world.said()).toEqual(['The team is done. It is done and the review came back clean.']);
  });

  test('a Lead that stops between the dev and the Reviewer has finished: the Reviewer, sent later, is a round of its own', async ($, on) => {
    const agents: AgentInfo[] = [];
    const world = engine(on, { agents, launches: ['b1', 'r1'] });
    await $.session.start(SESSION);
    await $.turn.start({ text: 'Make hello.js.', turnId: 't1' });
    await startAgent($, 'backend');
    agents.push(run('b1', 'backend', 'running'));
    await endTurn($, 't1', 'The backend dev is on it.');
    await world.clock.settle();
    agents[0] = run('b1', 'backend', 'completed');
    await frame($, notification('b1'));
    await $.turn.start({ text: notification('b1'), turnId: 't2' });
    await endTurn($, 't2', 'The backend is done. Want a review?');
    await world.clock.settle();
    expect(world.said()).toEqual(['The team is done. The backend is done.']);

    await $.turn.start({ text: 'Yes, review it.', turnId: 't3' });
    await startAgent($, 'reviewer');
    agents.push(run('r1', 'reviewer', 'completed'));
    await endTurn($, 't3', 'The reviewer is on it.');
    await world.clock.settle();
    expect(world.said()).toHaveLength(1);
    await frame($, notification('r1'));
    await $.turn.start({ text: notification('r1'), turnId: 't4' });
    await endTurn($, 't4', 'The review is clean.');
    await world.clock.settle();
    expect(world.said()).toEqual([
      'The team is done. The backend is done.',
      'The team is done. The review is clean.',
    ]);
  });

  test('which run a call started in the background, and which run a frame brings: only the exact shapes', () => {
    expect(backgroundRun({ result: { status: 'async_launched', agentId: 'a1' } })).toBe('a1');
    expect(backgroundRun({ result: { status: 'completed', agentId: 'a1' } })).toBeUndefined();
    expect(backgroundRun({ result: { status: 'async_launched', agentId: 7 } })).toBeUndefined();
    expect(backgroundRun({ result: 'async_launched' })).toBeUndefined();
    expect(backgroundRun({ deny: 'no' })).toBeUndefined();
    expect(backgroundRun(null)).toBeUndefined();

    expect(heardRun(notification('a9d20778861f0dffd'))).toBe('a9d20778861f0dffd');
    expect(heardRun(handBack('a99a671337edc9498'))).toBe('a99a671337edc9498');
    expect(heardRun('Please look at <task-notification><task-id>a1</task-id>')).toBeUndefined();
    expect(heardRun('<task-notification>\n<task-id>a 1</task-id>')).toBeUndefined();
    expect(heardRun('<agent-message from="a1"')).toBeUndefined();
    expect(heardRun('Make hello.js.')).toBeUndefined();
  });
});

describe('the team is done', () => {
  test('an agent ran and finished, and the turn ended with an answer: the line and the first sentence, once', async ($, on) => {
    const agents = [run('a1', 'backend', 'completed')];
    const world = engine(on, { agents });
    await $.session.start(SESSION);
    await leadTurn($, 't1', 'The users API is in. Tests pass.');
    await world.clock.settle();
    await leadTurn($, 't2', 'Anything else?');
    await world.clock.settle();
    expect(world.said()).toEqual(['The team is done. The users API is in.']);
  });

  test('background agents: silent while one still runs, then said at the turn that finds them all finished', async ($, on) => {
    const agents = [run('a1', 'backend', 'running'), run('a2', 'designer', 'completed')];
    const world = engine(on, { agents });
    await $.session.start(SESSION);
    await leadTurn($, 't1', 'Both are on it.');
    await world.clock.settle();
    expect(world.said()).toEqual([]);

    agents[0] = run('a1', 'backend', 'completed');
    await leadTurn($, 't2', 'All done: the page and the API.');
    await world.clock.settle();
    expect(world.said()).toEqual(['The team is done. All done: the page and the API.']);
  });

  test('failed roles, each once, in roster order, joined with "and"; killed is no failure', async ($, on) => {
    const agents = [
      run('r1', 'reviewer', 'failed'),
      run('b1', 'backend', 'failed'),
      run('b2', 'backend', 'failed'),
      run('f1', 'frontend', 'killed'),
      run('d1', 'designer', 'completed'),
    ];
    const world = engine(on, { agents });
    await $.session.start(SESSION);
    await leadTurn($, 't1', 'Two of them hit errors.');
    await world.clock.settle();
    expect(world.said()).toEqual(['The team stopped. Backend dev and Reviewer failed.']);
  });

  test('three failed roles read as a list', async ($, on) => {
    const agents = [
      run('r1', 'reviewer', 'failed'),
      run('b1', 'backend', 'failed'),
      run('d1', 'designer', 'failed'),
    ];
    const world = engine(on, { agents });
    await $.session.start(SESSION);
    await leadTurn($, 't1', 'Nothing worked.');
    await world.clock.settle();
    expect(world.said()).toEqual(['The team stopped. Designer, Backend dev and Reviewer failed.']);
  });

  test('a killed run with the rest done is still "The team is done."', async ($, on) => {
    const world = engine(on, {
      agents: [run('f1', 'frontend', 'killed'), run('d1', 'designer', 'completed')],
    });
    await $.session.start(SESSION);
    await leadTurn($, 't1', 'Stopped the frontend; the design is in.');
    await world.clock.settle();
    expect(world.said()).toEqual(['The team is done. Stopped the frontend; the design is in.']);
  });

  test('a turn with no agents is silent', async ($, on) => {
    const world = engine(on);
    await $.session.start(SESSION);
    await leadTurn($, 't1', 'Two plus two is four.');
    await world.clock.settle();
    expect(world.said()).toEqual([]);
  });

  for (const reason of ['aborted', 'error'] as const) {
    test(`a turn that ended ${reason === 'aborted' ? 'interrupted' : 'in an error'} is silent, and so is the next one`, async ($, on) => {
      const world = engine(on, { agents: [run('a1', 'backend', 'completed')] });
      await $.session.start(SESSION);
      await leadTurn($, 't1', 'Partial.', reason);
      await world.clock.settle();
      await leadTurn($, 't2', 'Back to it.');
      await world.clock.settle();
      expect(world.said()).toEqual([]);
    });
  }

  test('an approval still open at the end of the turn: silent, and said once nothing waits', async ($, on) => {
    const agents = [run('a1', 'backend', 'completed'), run('x1', 'x', 'running')];
    agents[1] = { ...agents[1]!, type: 'Explore' };
    const world = engine(on, { agents });
    await $.session.start(SESSION);
    await ask($, 'c1', 'x1');
    await world.clock.settle();
    await leadTurn($, 't1', 'Waiting on you.');
    await world.clock.settle();
    expect(world.said()).toEqual(['An agent needs your approval.']);

    await $.tool.call({ tool: 'Bash', command: 'ls', agentId: 'x1', tool_use_id: 'c1' });
    await leadTurn($, 't2', 'All set.');
    await world.clock.settle();
    expect(world.said()).toEqual(['An agent needs your approval.', 'The team is done. All set.']);
  });
});
