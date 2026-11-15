// Kit tests (claude plugin test plugin): Node at session start, and the hall: what holds port 4319, and its start. Each
// hook the test registers with `on` stands for the engine beneath the mod: `process.run` answers `node --version`,
// hall-check.mjs and, from v3.5b, hall-start.mjs (which starts the hall detached) and hall-stop.mjs. The mod spawns no
// hall itself any more: a `process.spawn` stand-in is there only to prove nothing reaches it.

import type { EngineInterface, On, ProcessRunInit, ProcessSpawnRequest } from 'claude-code';
import { describe, expect, mock, test } from 'claude-code/testing';
import type { Engine } from 'claude-code/testing';

import { keepHall, PLUGIN_VERSION, stoppable } from './hall';
import { otherHallLine } from './pane';
import type { PaneHall } from './types';

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
const CLOSE_OTHERS = 'Close your other sessions, here and in other projects.';

/** hall-check.mjs's exit codes. */
const OURS = 0;
const DOWN = 3;
const OTHER = 4;

type Run = { argv: string[]; init?: ProcessRunInit };

/** The script a run started: its file name, or `--version`. */
const scriptOf = (run: Run) => run.argv[1]?.split('/').at(-1) ?? '';

/**
 * The engine beneath the mod. `node` is what `node --version` does; `checks` are hall-check.mjs's exit codes in turn,
 * the last one again for every later check, our hall printing `stated` (3.2d: this plugin's version unless given, and
 * `version()` changes it); `gate`, when given, holds every check until the test opens it. hall-start.mjs answers
 * `start` (0 unless given: our hall answers), or can't run.
 */
function engine(
  on: On,
  {
    node = { exitCode: 0, stdout: 'v24.22.0\n' } as { exitCode: number; stdout: string } | 'missing',
    checks = [DOWN, OURS] as (number | 'cannot run')[],
    start = 0 as number | 'cannot run',
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
    const run = { argv: [...e.argv], init: e.init };
    runs.push(run);
    if (e.argv[1] === '--version') {
      return node === 'missing'
        ? { deny: 'Executable not found in $PATH: "node"' }
        : result(node.exitCode, node.stdout);
    }
    if (scriptOf(run) === 'hall-start.mjs')
      return start === 'cannot run' ? { deny: 'cannot start' } : result(start);
    if (scriptOf(run) !== 'hall-check.mjs') return result(0);
    if (gate) await gate;
    const answer = left.length > 1 ? left.shift()! : left[0]!;
    return answer === 'cannot run'
      ? { deny: 'cannot start' }
      : result(answer, answer === OURS ? printed : '');
  });
  // eslint-disable-next-line require-yield -- nothing must reach it: the hall starts through hall-start.mjs (v3.5b).
  on('process.spawn', async function* (_, e) {
    spawns.push(e);
    return { value: { code: 0, signal: null } };
  });
  return {
    clock,
    runs,
    statuses,
    spawns,
    starts: () => runs.filter((r) => scriptOf(r) === 'hall-start.mjs'),
    stops: () => runs.filter((r) => scriptOf(r) === 'hall-stop.mjs'),
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
  test('nothing on the port: one fixed start script in the plugin folder, then the handshake says it is ours', async ($, on) => {
    const world = engine(on, { checks: [DOWN, OURS] });
    await $.session.start(SESSION);
    await world.clock.settle();

    const root = rootOf(world.runs);
    expect(root).toMatch(/[\\/]plugin$/);
    expect(world.runs).toEqual([
      { argv: ['node', '--version'], init: { cwd: root, timeoutMs: 10_000 } },
      { argv: ['node', `${root}/hooks/hall-check.mjs`], init: { cwd: root, timeoutMs: 10_000 } },
      // v3.5b: the hall starts detached through this script, which waits for its handshake: no child of this session.
      { argv: ['node', `${root}/hooks/hall-start.mjs`], init: { cwd: root, timeoutMs: 10_000 } },
      // The handshake, not the script's word, says the port holds our hall.
      { argv: ['node', `${root}/hooks/hall-check.mjs`], init: { cwd: root, timeoutMs: 10_000 } },
      // v3.4c: the team's change log, read as the hall becomes ours (3.2d: also when this session started it).
      { argv: ['node', `${root}/hooks/team-log.mjs`], init: { cwd: root, timeoutMs: 10_000 } },
    ]);
    // Nothing spawned, no input, no environment, no shell: fixed commands in the plugin's folder, and nothing else.
    expect(world.spawns).toEqual([]);
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
  });

  test('our hall already answers: nothing is started or stopped, and the link shows', async ($, on) => {
    const world = engine(on, { checks: [OURS] });
    await $.session.start(SESSION);
    await world.clock.settle();
    expect(world.starts()).toEqual([]);
    expect(world.stops()).toEqual([]);
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
    // It only ever asked: Node's version and the handshake check, nothing that could start or end a process.
    expect(
      new Set(world.runs.map((r) => r.argv.slice(1).join(' ').replace(rootOf(world.runs), '<plugin>'))),
    ).toEqual(new Set(['--version', '<plugin>/hooks/hall-check.mjs']));
    expect(world.spawns).toEqual([]);

    for (const surface of SURFACES) {
      const pane = await mount($, surface);
      expect(await pane.texts()).toContain(TAKEN);
      expect(await pane.links()).toEqual([]);
      await pane.ui.unmount();
    }
  });

  // 3.2d: two installs on one PC share one token file, so another install's hall passes the handshake. A hall before
  // 3.5.0 can only be closed with its sessions (H2: today's message); a newer one is never stopped from here (v3.5b).
  for (const [stated, line] of [
    ['3.0.1\n', `An older hall (v3.0.1) is running. ${CLOSE_OTHERS}`],
    ['', `An older hall (before v3.2.0) is running. ${CLOSE_OTHERS}`],
    ['99.0.0\n', 'A newer hall (v99.0.0) is running. Update World of Agents in this project to use it.'],
    ['3.2.0; echo hi\n', `An older hall (before v3.2.0) is running. ${CLOSE_OTHERS}`],
  ] as const) {
    test(`another install's hall (${JSON.stringify(stated)}): no link, nothing started or stopped, and the pane says which`, async ($, on) => {
      const world = engine(on, { checks: [OURS], stated });
      await $.session.start(SESSION);
      await $.turn.start({ text: 'hi', turnId: 't1' });
      await world.clock.settle();
      expect(
        new Set(world.runs.map((r) => r.argv.slice(1).join(' ').replace(rootOf(world.runs), '<plugin>'))),
      ).toEqual(new Set(['--version', '<plugin>/hooks/hall-check.mjs']));
      expect(world.spawns).toEqual([]);
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
    expect(await before.texts()).toContain(`An older hall (v3.0.1) is running. ${CLOSE_OTHERS}`);
    await before.ui.unmount();
    // The session that started it closed, and with it that hall. Ours answers as this version.
    world.version(`${PLUGIN_VERSION}\n`);
    await $.turn.start({ text: 'hi', turnId: 't1' });
    await world.clock.settle();
    expect(world.starts()).toHaveLength(1);
    const pane = await mount($);
    expect(await pane.texts()).toContain('Hall: running');
    expect(await pane.links()).toEqual([HALL_URL]);
    await pane.ui.unmount();
  });

  test('two checks at once still start one hall', async ($, on) => {
    let open = () => {};
    const gate = new Promise<void>((resolve) => (open = resolve));
    const world = engine(on, { checks: [DOWN, OURS], gate });
    await $.session.start(SESSION);
    await world.clock.settle();
    // The session's check is still out when the Lead's first turn starts: that one checks nothing.
    await $.turn.start({ text: 'hi', turnId: 't1' });
    open();
    await world.clock.settle();
    expect(world.starts()).toHaveLength(1);
    expect(world.runs.filter((r) => scriptOf(r) === 'hall-check.mjs')).toHaveLength(2);
  });

  test("a subagent's turn checks nothing; each of the Lead's turns checks once", async ($, on) => {
    const world = engine(on, { checks: [OURS] });
    await $.session.start(SESSION);
    await world.clock.settle();
    const checks = () => world.runs.filter((r) => scriptOf(r) === 'hall-check.mjs').length;
    expect(checks()).toBe(1);

    await $.turn.start({ text: 'task', turnId: 's1', agentId: 'a1' });
    await world.clock.settle();
    expect(checks()).toBe(1);
    await $.turn.start({ text: 'next', turnId: 't1' });
    await world.clock.settle();
    expect(checks()).toBe(2);
    expect(world.starts()).toEqual([]);
  });

  test("a start whose hall lost the race to another session's: that one answers, and no second start", async ($, on) => {
    // hall-start.mjs says something else answered first; the handshake then finds a hall that knows the token.
    const world = engine(on, { checks: [DOWN, OURS], start: OTHER });
    await $.session.start(SESSION);
    await world.clock.settle();
    expect(world.starts()).toHaveLength(1);
    const pane = await mount($);
    expect(await pane.texts()).toContain('Hall: running');
    expect(await pane.links()).toEqual([HALL_URL]);
    await pane.ui.unmount();
  });

  for (const start of [DOWN, 'cannot run'] as const) {
    test(`a start that ${start === DOWN ? 'never answers' : 'cannot run'} is tried again at the next turn of the Lead, not before`, async ($, on) => {
      const world = engine(on, { checks: [DOWN, DOWN, DOWN, OURS], start });
      await $.session.start(SESSION);
      await world.clock.settle();
      expect(world.starts()).toHaveLength(1);
      const pane = await mount($);
      expect(await pane.texts()).toContain('Hall: not running. Your next message starts it.');
      expect(await pane.links()).toEqual([]);
      await world.clock.advance(60_000);
      expect(world.starts()).toHaveLength(1);

      await $.turn.start({ text: 'hi', turnId: 't1' });
      await world.clock.settle();
      expect(world.starts()).toHaveLength(2);
      await pane.ui.unmount();
    });
  }

  for (const answer of ['cannot run', 5] as const) {
    test(`a check that ${answer === 5 ? 'answers an unknown code' : 'cannot run'} starts nothing`, async ($, on) => {
      const world = engine(on, { checks: [answer] });
      await $.session.start(SESSION);
      await world.clock.settle();
      expect(world.starts()).toEqual([]);
      const pane = await mount($);
      expect(await pane.texts()).toContain('Hall: not running. Your next message starts it.');
      expect(await pane.links()).toEqual([]);
      await pane.ui.unmount();
    });
  }
});

/**
 * v3.5b, H2: a newer pane stops an older hall from 3.5.0 on through its API, never a newer one, never one before 3.5.0.
 * No version this plugin can meet yet is older and 3.5.0 or later, so these call keepHall() with a later `own` and a
 * stand-in for the two calls it makes: `plugin.root` and `process.run`.
 */
describe('stopping an older hall (v3.5b)', () => {
  const ROOT = '/plugin';
  /** hall-check.mjs's answers in turn (exit code and the version our hall states), the last one again after. */
  function fake(checks: [number, string | null][]) {
    const runs: string[][] = [];
    const left = [...checks];
    const $ = {
      plugin: { root: ROOT },
      process: {
        run: async (argv: string[]) => {
          runs.push([...argv]);
          const name = argv[1]?.split('/').at(-1);
          const [code, version] =
            name === 'hall-check.mjs' ? (left.length > 1 ? left.shift()! : left[0]!) : ([0, null] as const);
          return {
            exitCode: code,
            stdout: version === null ? '' : `${version}\n`,
            stderr: '',
            isStdoutTruncated: false,
            isStderrTruncated: false,
          };
        },
      },
    } as unknown as EngineInterface;
    const shown: [PaneHall, string | null | undefined][] = [];
    const setHall = async (hall: PaneHall, version?: string | null) => {
      shown.push([hall, version]);
    };
    return { $, runs, shown, setHall, names: () => runs.map((r) => r[1]?.split('/').at(-1)) };
  }

  test('an older hall from 3.5.0 on: asked to stop, then ours started, then ours answers', async () => {
    const world = fake([
      [OURS, '3.5.0'],
      [DOWN, null],
      [OURS, '3.6.0'],
    ]);
    await keepHall(world.$, world.setHall, '3.6.0');
    expect(world.runs).toEqual([
      ['node', `${ROOT}/hooks/hall-check.mjs`],
      ['node', `${ROOT}/hooks/hall-stop.mjs`],
      ['node', `${ROOT}/hooks/hall-check.mjs`],
      ['node', `${ROOT}/hooks/hall-start.mjs`],
      ['node', `${ROOT}/hooks/hall-check.mjs`],
    ]);
    expect(world.shown.at(-1)).toEqual(['running', undefined]);
  });

  test("an older hall that didn't stop: nothing started, and the pane says the next message replaces it", async () => {
    const world = fake([[OURS, '3.5.0']]);
    await keepHall(world.$, world.setHall, '3.6.0');
    expect(world.names()).toEqual(['hall-check.mjs', 'hall-stop.mjs', 'hall-check.mjs']);
    expect(world.shown.at(-1)).toEqual(['other-version', '3.5.0']);
    expect(otherHallLine('3.5.0', '3.6.0')).toBe(
      'An older hall (v3.5.0) is running. Your next message replaces it.',
    );
  });

  for (const stated of ['3.7.0', '3.6.1', '3.4.9', '3.0.1', null] as const) {
    test(`a hall that states ${stated ?? 'no version'}: never asked to stop, nothing started`, async () => {
      const world = fake([[OURS, stated]]);
      await keepHall(world.$, world.setHall, '3.6.0');
      expect(world.names()).toEqual(['hall-check.mjs']);
      expect(world.shown).toEqual([['other-version', stated]]);
    });
  }

  test('which halls may be stopped: older ones from 3.5.0 on, by version number, not text', () => {
    expect(stoppable('3.5.0', '3.6.0')).toBe(true);
    expect(stoppable('3.5.9', '3.10.0')).toBe(true);
    expect(stoppable('3.9.0', '3.10.0')).toBe(true);
    expect(stoppable('3.10.0', '3.9.0')).toBe(false);
    expect(stoppable('3.6.0', '3.6.0')).toBe(false);
    expect(stoppable('3.4.9', '3.6.0')).toBe(false);
    expect(stoppable('2.9.9', '3.6.0')).toBe(false);
    expect(stoppable(null, '3.6.0')).toBe(false);
  });

  test("the pane's line for each: today's for a hall before 3.5.0, none of them a link", () => {
    expect(otherHallLine('3.4.0', '3.6.0')).toBe(`An older hall (v3.4.0) is running. ${CLOSE_OTHERS}`);
    expect(otherHallLine(null, '3.6.0')).toBe(`An older hall (before v3.2.0) is running. ${CLOSE_OTHERS}`);
    expect(otherHallLine('3.7.0', '3.6.0')).toBe(
      'A newer hall (v3.7.0) is running. Update World of Agents in this project to use it.',
    );
  });
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
      // --version, the hall check, and (v3.4c) the team's change log, which only a running hall's page changes.
      expect(world.runs.map((r) => r.argv[1]?.split('/').at(-1))).toEqual([
        '--version',
        'hall-check.mjs',
        'team-log.mjs',
      ]);
      const pane = await mount($);
      const texts = await pane.texts();
      expect(texts.filter((t) => t.startsWith('Node.js') || t.startsWith('Install Node'))).toEqual([]);
      expect(texts).toContain('Hall: running');
      await pane.ui.unmount();
    });
  }
});
