// Kit tests (claude plugin test plugin): Node at session start, and the hall: what holds port 4319, and its start. Each
// hook the test registers with `on` stands for the engine beneath the mod: `process.run` answers `node --version` and
// hall-check.mjs, `process.spawn` stands for the started hall.

import type { On, ProcessRunInit, ProcessSpawnRequest } from 'claude-code';
import { describe, expect, mock, test } from 'claude-code/testing';
import type { Engine } from 'claude-code/testing';

import { PLUGIN_VERSION } from './hall';

const PLUGIN = 'world-of-agents';
const SURFACES = ['terminal', 'desktop', 'vscode'] as const;
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
const HALL_URL = 'http://localhost:4319';
const TAKEN = 'Port 4319 is used by another program.';

/** hall-check.mjs's exit codes. */
const OURS = 0;
const DOWN = 3;
const OTHER = 4;

type Run = { argv: string[]; init?: ProcessRunInit };
/** How the started hall behaves: says it listens and runs on, or ends (lost the race, crashed) with no word. */
type HallChild = 'listens' | 'ends';

/**
 * The engine beneath the mod. `node` is what `node --version` does; `checks` are hall-check.mjs's exit codes in turn,
 * the last one again for every later check, our hall printing `stated` (3.2d: this plugin's version unless given, and
 * `version()` changes it); `gate`, when given, holds every check until the test opens it.
 */
function engine(
  on: On,
  {
    node = { exitCode: 0, stdout: 'v24.22.0\n' } as { exitCode: number; stdout: string } | 'missing',
    checks = [DOWN, OURS] as (number | 'cannot run')[],
    child = 'listens' as HallChild,
    gate = undefined as Promise<void> | undefined,
    stated = `${PLUGIN_VERSION}\n`,
  } = {},
) {
  let printed = stated;
  const clock = mock.clock(on);
  mock.store(on);
  on('session.start', (_, e) => ({ cwd: e.cwd }));
  on('ui.open', () => ({ value: { isPlaced: true } }));
  on('agent.list', () => ({ value: [] }));
  on('turn.start', (_, e) => ({ turnId: e.turnId }));

  const runs: Run[] = [];
  /** v3.3: the quality gates' status check, answered "off" here and kept apart from the hall's commands. */
  const statuses: Run[] = [];
  const spawns: ProcessSpawnRequest[] = [];
  const left = [...checks];
  const result = (exitCode: number, stdout = '') => ({
    value: { exitCode, stdout, stderr: '', isStdoutTruncated: false, isStderrTruncated: false },
  });
  on('process.run', async (_, e) => {
    if (e.argv[2] === '--status') {
      statuses.push({ argv: [...e.argv], init: e.init });
      return result(5);
    }
    runs.push({ argv: [...e.argv], init: e.init });
    if (e.argv[1] === '--version') {
      return node === 'missing'
        ? { deny: 'Executable not found in $PATH: "node"' }
        : result(node.exitCode, node.stdout);
    }
    if (gate) await gate;
    const answer = left.length > 1 ? left.shift()! : left[0]!;
    return answer === 'cannot run'
      ? { deny: 'cannot start' }
      : result(answer, answer === OURS ? printed : '');
  });
  let ends = () => {};
  on('process.spawn', async function* (_, e) {
    spawns.push(e);
    if (child === 'ends') return { value: { code: 0, signal: null } };
    yield { stream: 'stdout' as const, text: 'Forge Hall: http://127.0.0.1:4319\n' };
    // A hall runs until the module unloads, or the test ends it.
    await new Promise<void>((resolve) => (ends = resolve));
    return { value: { code: null, signal: 'SIGTERM' } };
  });
  return {
    clock,
    runs,
    statuses,
    spawns,
    end: () => ends(),
    version: (line: string) => {
      printed = line;
    },
  };
}

async function mount($: Engine, surface: (typeof SURFACES)[number] = 'desktop') {
  const ui = await $.ui.mount({ ...PANE, surface });
  return {
    ui,
    texts: async () => (await ui.findAll({ type: 'Text' })).map((t) => t.text),
    links: async () => (await ui.findAll({ type: 'Link' })).map((l) => l.props.href),
  };
}

/** The plugin's folder, as the mod passed it: every command runs there. */
const rootOf = (runs: Run[]) => runs[0]?.init?.cwd ?? '';

describe('the hall', () => {
  test('nothing on the port: one hall, started with exactly the fixed command in its own folder', async ($, on) => {
    const world = engine(on, { checks: [DOWN, OURS] });
    await $.session.start(SESSION);
    await world.clock.settle();

    const root = rootOf(world.runs);
    expect(root).toMatch(/[\\/]plugin$/);
    expect(world.runs).toEqual([
      { argv: ['node', '--version'], init: { cwd: root, timeoutMs: 10_000 } },
      { argv: ['node', `${root}/hooks/hall-check.mjs`], init: { cwd: root, timeoutMs: 10_000 } },
      // Once the hall says it listens, the handshake (not its word) says it is ours.
      { argv: ['node', `${root}/hooks/hall-check.mjs`], init: { cwd: root, timeoutMs: 10_000 } },
    ]);
    // No input, no environment, no shell: the command and its folder, and nothing else.
    expect(world.spawns).toEqual([{ argv: ['node', `${root}/hall/server.mjs`], cwd: `${root}/hall` }]);
    // v3.3: one status check for quality gates, a fixed command answered by its exit code.
    expect(world.statuses).toEqual([
      { argv: ['node', `${root}/hooks/gate.mjs`, '--status'], init: { cwd: root, timeoutMs: 10_000 } },
    ]);

    for (const surface of SURFACES) {
      const pane = await mount($, surface);
      expect(await pane.texts()).toContain('Hall: running');
      expect(await pane.links()).toEqual([HALL_URL]);
      await pane.ui.unmount();
    }
    world.end();
    await world.clock.settle();
  });

  test('our hall already answers: nothing is started, and the link shows', async ($, on) => {
    const world = engine(on, { checks: [OURS] });
    await $.session.start(SESSION);
    await world.clock.settle();
    expect(world.spawns).toEqual([]);
    const pane = await mount($);
    expect(await pane.texts()).toContain('Hall: running');
    expect(await pane.links()).toEqual([HALL_URL]);
    await pane.ui.unmount();
  });

  test('another program holds the port: no hall started, nothing stopped, no link, and the pane says so', async ($, on) => {
    const world = engine(on, { checks: [OTHER] });
    await $.session.start(SESSION);
    await $.turn.start({ text: 'hi', turnId: 't1' });
    await world.clock.settle();
    expect(world.spawns).toEqual([]);
    // It only ever asked: Node's version and the handshake check, nothing that could end a process.
    expect(
      new Set(world.runs.map((r) => r.argv.slice(1).join(' ').replace(rootOf(world.runs), '<plugin>'))),
    ).toEqual(new Set(['--version', '<plugin>/hooks/hall-check.mjs']));

    for (const surface of SURFACES) {
      const pane = await mount($, surface);
      expect(await pane.texts()).toContain(TAKEN);
      expect(await pane.links()).toEqual([]);
      await pane.ui.unmount();
    }
  });

  // 3.2d: two installs on one PC share one token file, so another install's hall passes the handshake.
  for (const [stated, line] of [
    ['3.0.1\n', 'An older hall (v3.0.1) is running. Close the sessions in your other projects.'],
    ['', 'An older hall (before v3.2.0) is running. Close the sessions in your other projects.'],
    ['99.0.0\n', 'A newer hall (v99.0.0) is running. Close the sessions in your other projects.'],
    [
      '3.2.0; echo hi\n',
      'An older hall (before v3.2.0) is running. Close the sessions in your other projects.',
    ],
  ] as const) {
    test(`another install's hall (${JSON.stringify(stated)}): no link, nothing started or stopped, and the pane says which`, async ($, on) => {
      const world = engine(on, { checks: [OURS], stated });
      await $.session.start(SESSION);
      await $.turn.start({ text: 'hi', turnId: 't1' });
      await world.clock.settle();
      expect(world.spawns).toEqual([]);
      expect(
        new Set(world.runs.map((r) => r.argv.slice(1).join(' ').replace(rootOf(world.runs), '<plugin>'))),
      ).toEqual(new Set(['--version', '<plugin>/hooks/hall-check.mjs']));
      for (const surface of SURFACES) {
        const pane = await mount($, surface);
        expect(await pane.texts()).toContain(line);
        expect(await pane.links()).toEqual([]);
        await pane.ui.unmount();
      }
    });
  }

  test('once the other hall is gone, the next turn of the Lead starts ours and links to it', async ($, on) => {
    const world = engine(on, { checks: [OURS, DOWN, OURS], stated: '3.0.1\n' });
    await $.session.start(SESSION);
    await world.clock.settle();
    const before = await mount($);
    expect(await before.texts()).toContain(
      'An older hall (v3.0.1) is running. Close the sessions in your other projects.',
    );
    await before.ui.unmount();
    // The session that started it closed, and with it that hall. Ours answers as this version.
    world.version(`${PLUGIN_VERSION}\n`);
    await $.turn.start({ text: 'hi', turnId: 't1' });
    await world.clock.settle();
    expect(world.spawns).toHaveLength(1);
    const pane = await mount($);
    expect(await pane.texts()).toContain('Hall: running');
    expect(await pane.links()).toEqual([HALL_URL]);
    await pane.ui.unmount();
    world.end();
    await world.clock.settle();
  });

  test('two checks at once still start one hall, and a check while ours is starting starts none', async ($, on) => {
    let open = () => {};
    const gate = new Promise<void>((resolve) => (open = resolve));
    const world = engine(on, { checks: [DOWN, DOWN, DOWN, OURS], gate });
    await $.session.start(SESSION);
    await world.clock.settle();
    // The session's check is still out when the Lead's first turn starts.
    await $.turn.start({ text: 'hi', turnId: 't1' });
    open();
    await world.clock.settle();
    expect(world.spawns).toHaveLength(1);

    // Ours is alive; the port may not answer yet. Another turn's check finds it down and starts nothing.
    await $.turn.start({ text: 'again', turnId: 't2' });
    await world.clock.settle();
    expect(world.spawns).toHaveLength(1);
    world.end();
    await world.clock.settle();
  });

  test("a subagent's turn checks nothing; each of the Lead's turns checks once", async ($, on) => {
    const world = engine(on, { checks: [OURS] });
    await $.session.start(SESSION);
    await world.clock.settle();
    const checks = () => world.runs.filter((r) => r.argv[1]?.endsWith('hall-check.mjs')).length;
    expect(checks()).toBe(1);

    await $.turn.start({ text: 'task', turnId: 's1', agentId: 'a1' });
    await world.clock.settle();
    expect(checks()).toBe(1);
    await $.turn.start({ text: 'next', turnId: 't1' });
    await world.clock.settle();
    expect(checks()).toBe(2);
    expect(world.spawns).toEqual([]);
  });

  test('a hall that loses the race to another session ends; the other one is found, and no third starts', async ($, on) => {
    const world = engine(on, { checks: [DOWN, OURS], child: 'ends' });
    await $.session.start(SESSION);
    await world.clock.settle();
    expect(world.spawns).toHaveLength(1);
    const pane = await mount($);
    expect(await pane.texts()).toContain('Hall: running');
    expect(await pane.links()).toEqual([HALL_URL]);
    await pane.ui.unmount();
  });

  test('a hall that dies is started again at the next turn of the Lead, not before', async ($, on) => {
    const world = engine(on, { checks: [DOWN, DOWN, DOWN, OURS], child: 'ends' });
    await $.session.start(SESSION);
    await world.clock.settle();
    expect(world.spawns).toHaveLength(1);
    const pane = await mount($);
    expect(await pane.texts()).toContain('Hall: not running. Your next message starts it.');
    expect(await pane.links()).toEqual([]);
    await world.clock.advance(60_000);
    expect(world.spawns).toHaveLength(1);

    await $.turn.start({ text: 'hi', turnId: 't1' });
    await world.clock.settle();
    expect(world.spawns).toHaveLength(2);
    await pane.ui.unmount();
  });

  for (const answer of ['cannot run', 5] as const) {
    test(`a check that ${answer === 5 ? 'answers an unknown code' : 'cannot run'} starts nothing`, async ($, on) => {
      const world = engine(on, { checks: [answer] });
      await $.session.start(SESSION);
      await world.clock.settle();
      expect(world.spawns).toEqual([]);
      const pane = await mount($);
      expect(await pane.texts()).toContain('Hall: not running. Your next message starts it.');
      expect(await pane.links()).toEqual([]);
      await pane.ui.unmount();
    });
  }
});

describe('Node', () => {
  // Only the command: the desktop app's switch isn't proven to be per project.
  const FIX =
    'Install Node.js 20.19 or later, or turn the plugin off for this project: in a terminal in its folder, run ' +
    'claude plugin disable world-of-agents@world-of-agents --scope local.';
  const cases = [
    [
      'missing',
      'missing',
      "Node.js not found, so the plugin's guard blocks every shell command and agent start, and the hall can't start.",
    ],
    [
      'failing',
      { exitCode: 1, stdout: '' },
      "Node.js didn't report its version, so the plugin's guard may block every shell command and agent start, and the hall can't start.",
    ],
    [
      'answering something else',
      { exitCode: 0, stdout: 'v24.22.0 <b>not node</b>\n' },
      "Node.js didn't report its version, so the plugin's guard may block every shell command and agent start, and the hall can't start.",
    ],
    [
      '20.18',
      { exitCode: 0, stdout: 'v20.18.3\n' },
      "Node.js 20.18.3 is older than 20.19, so the hall can't start.",
    ],
    [
      '18',
      { exitCode: 0, stdout: 'v18.20.4\r\n' },
      "Node.js 18.20.4 is older than 20.19, so the hall can't start.",
    ],
  ] as const;

  for (const [name, node, warning] of cases) {
    test(`a Node that is ${name}: the pane warns and says how to turn the plugin off; no hall is checked or started`, async ($, on) => {
      const world = engine(on, { node });
      await $.session.start(SESSION);
      await $.turn.start({ text: 'hi', turnId: 't1' });
      await world.clock.settle();
      expect(world.runs.map((r) => r.argv.slice(1))).toEqual([['--version']]);
      expect(world.spawns).toEqual([]);

      for (const surface of SURFACES) {
        const pane = await mount($, surface);
        const texts = await pane.texts();
        expect(texts).toContain(warning);
        expect(texts).toContain(FIX);
        expect(texts).toContain('Hall: not running');
        expect(texts.join('\n')).not.toContain('not node');
        expect(await pane.links()).toEqual([]);
        await pane.ui.unmount();
      }
    });
  }

  for (const version of ['v20.19.0', 'v20.20.1', 'v22.1.0', 'v24.22.0', 'v100.0.0']) {
    test(`Node ${version}: no warning, and the hall is checked`, async ($, on) => {
      const world = engine(on, { node: { exitCode: 0, stdout: `${version}\n` }, checks: [OURS] });
      await $.session.start(SESSION);
      await world.clock.settle();
      expect(world.runs).toHaveLength(2);
      const pane = await mount($);
      const texts = await pane.texts();
      expect(texts.filter((t) => t.startsWith('Node.js') || t.startsWith('Install Node'))).toEqual([]);
      expect(texts).toContain('Hall: running');
      await pane.ui.unmount();
    });
  }
});
