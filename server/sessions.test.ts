import { readFileSync } from 'node:fs';
import { request } from 'node:http';
import { createServer as createNetServer, type AddressInfo } from 'node:net';
import { join } from 'node:path';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import type { OfficeEvent } from '../src/events/schema';
import { INITIAL_OFFICE, officeReducer } from '../src/state/office';
import { createHall, KEPT_SESSIONS, listen, REPLAY, type Hall } from './hall';
import { run1 } from './test-helpers';
import { newToken } from './token';

// v3.5c (docs/v3.5-plan.md, S1, S2): the hall keeps the last 3 sessions' runs in memory, up to 500 events each, and going
// back to one shows its run as it stood. The hall listens on a free port, never on 4319.

const TOKEN = newToken();
let hall: Hall;
let port: number;

const freePort = () =>
  new Promise<number>((done) => {
    const probe = createNetServer().listen(0, '127.0.0.1', () => {
      const { port: free } = probe.address() as AddressInfo;
      probe.close(() => done(free));
    });
  });

beforeEach(async () => {
  port = await freePort();
  hall = createHall({ token: TOKEN, port });
  await listen(hall, port);
});
afterEach(() => hall.close());

/** Run 1's hooks, as send.mjs forwards them, in session `s`. */
const body = (n: number) => run1[n - 1]!.body as Record<string, unknown>;
const START = (s: string) => ({ ...body(1), session_id: s, source: 'startup' });
const RESUME = (s: string) => ({ ...body(1), session_id: s, source: 'resume' });
const PROMPT = (s: string, prompt: string) => ({ ...body(2), session_id: s, prompt });
const GLOB = (s: string) => ({ ...body(3), session_id: s }); // the Lead reads
const HAND_OUT = (s: string) => ({ ...body(4), session_id: s }); // the Lead hands the Designer a task

function post(hook: unknown): Promise<number> {
  return new Promise((done, fail) => {
    const req = request(
      {
        host: '127.0.0.1',
        port,
        method: 'POST',
        path: '/api/hook',
        headers: {
          Host: `127.0.0.1:${port}`,
          'Content-Type': 'application/json',
          Authorization: `Bearer ${TOKEN}`,
        },
      },
      (res) => {
        res.resume();
        res.on('end', () => done(res.statusCode ?? 0));
      },
    );
    req.on('error', fail);
    req.end(JSON.stringify(hook));
  });
}

async function postAll(...hooks: unknown[]): Promise<void> {
  for (const hook of hooks) expect(await post(hook)).toBe(204);
}

/** What a page reads, in order: each event, and each named mark with its data. */
type Read = { event: OfficeEvent } | { mark: string; data: string };

function subscribe(): Promise<{ seen: Read[]; close: () => void }> {
  return new Promise((done, fail) => {
    const seen: Read[] = [];
    let buffer = '';
    const req = request(
      { host: '127.0.0.1', port, path: '/api/events', headers: { Host: `127.0.0.1:${port}` } },
      (res) => {
        res.setEncoding('utf8');
        res.on('data', (chunk: string) => {
          buffer += chunk;
          for (let end = buffer.indexOf('\n\n'); end >= 0; end = buffer.indexOf('\n\n')) {
            const frame = buffer.slice(0, end);
            buffer = buffer.slice(end + 2);
            const named = /^event: (.+)\ndata: (.*)$/.exec(frame);
            if (named) seen.push({ mark: named[1]!, data: named[2]! });
            else if (frame.startsWith('data: '))
              seen.push({ event: JSON.parse(frame.slice(6)) as OfficeEvent });
          }
        });
        done({ seen, close: () => req.destroy() });
      },
    );
    req.on('error', fail);
    req.end();
  });
}

async function until(ok: () => boolean, ms = 3000): Promise<void> {
  for (const end = Date.now() + ms; !ok();) {
    if (Date.now() > end) throw new Error('timed out waiting for the page');
    await new Promise((r) => setTimeout(r, 5));
  }
}

const events = (reads: readonly Read[]) => reads.flatMap((r) => ('event' in r ? [r.event] : []));
const marks = (reads: readonly Read[]) => reads.flatMap((r) => ('mark' in r ? [r.mark] : []));
/** The reads after the last `replaying` mark, up to its `replayed`: one switch back, as a page gets it. */
function lastReplay(reads: readonly Read[]): { events: OfficeEvent[]; id: string } {
  const from = reads.findLastIndex((r) => 'mark' in r && r.mark === 'replaying');
  const to = reads.findIndex((r, i) => i > from && 'mark' in r && r.mark === 'replayed');
  const id = reads[to] as { data: string };
  return { events: events(reads.slice(from + 1, to)), id: id.data };
}
/** A page connecting now: its replay. */
async function replayNow(): Promise<OfficeEvent[]> {
  const page = await subscribe();
  await until(() => marks(page.seen).includes('replayed'));
  page.close();
  return events(
    page.seen.slice(
      0,
      page.seen.findIndex((r) => 'mark' in r),
    ),
  );
}
const office = (list: readonly OfficeEvent[]) => list.reduce(officeReducer, INITIAL_OFFICE);

describe('each session, kept (v3.5c)', () => {
  it('keeps the session it follows and two before it', () => {
    expect(KEPT_SESSIONS).toBe(3);
  });

  it('a prompt typed in a session it kept brings that run back as it stood, then the new prompt, in one replay', async () => {
    await postAll(START('A'), PROMPT('A', 'Make the counter'), HAND_OUT('A'));
    const page = await subscribe();
    await until(() => marks(page.seen).includes('replayed'));
    const startId = (page.seen.find((r) => 'mark' in r) as { data: string }).data;

    await postAll(START('B'), PROMPT('B', 'Something else'));
    await until(() => events(page.seen).filter((e) => e.type === 'run').length === 2);
    expect(office(events(page.seen)).runText).toBe('Something else');
    expect(office(events(page.seen)).tasks).toEqual([]);

    await postAll(PROMPT('A', 'Now add a reset button'));
    await until(() => marks(page.seen).filter((m) => m === 'replayed').length === 2);
    page.close();
    const back = lastReplay(page.seen);
    // The same hall: no "Hall restarted" on the page.
    expect(back.id).toBe(startId);
    expect(back.events[0]?.type).toBe('reset');
    expect(back.events.map((e) => e.type)).toEqual([
      'reset',
      'run',
      'state',
      'task',
      'state',
      'run',
      'state',
    ]);
    const rebuilt = office(back.events);
    expect(rebuilt.runText).toBe('Now add a reset button');
    expect(rebuilt.tasks.map((t) => t.owner)).toEqual(['designer']);

    // F5: the same run, from the hall's replay.
    expect(await replayNow()).toEqual(back.events);

    // And it goes on from there: the Designer starts on the card handed out before the switch.
    const live = await subscribe();
    await until(() => marks(live.seen).includes('replayed'));
    await postAll({ ...body(5), session_id: 'A' });
    await until(() => events(live.seen).some((e) => e.type === 'task' && e.status === 'in-progress'));
    live.close();
  });

  it('a session it adopted mid-run comes back with a reset first, so a page never keeps the other run', async () => {
    await postAll(GLOB('A')); // no SessionStart: the hall started after Claude Code did
    await postAll(START('B'), PROMPT('B', 'Something else'));
    const page = await subscribe();
    await postAll(RESUME('A'));
    await until(() => marks(page.seen).filter((m) => m === 'replayed').length === 2);
    page.close();
    expect(lastReplay(page.seen).events.map((e) => e.type)).toEqual(['reset', 'state']);
  });

  it('a resume of a session it kept brings that run back with nothing added', async () => {
    await postAll(START('A'), PROMPT('A', 'Make the counter'), GLOB('A'));
    const page = await subscribe();
    await postAll(START('B'), RESUME('A'));
    await until(() => marks(page.seen).filter((m) => m === 'replayed').length === 2);
    page.close();
    expect(lastReplay(page.seen).events.map((e) => e.type)).toEqual(['reset', 'run', 'state', 'state']);
    expect(office(lastReplay(page.seen).events).runText).toBe('Make the counter');
  });

  it("a kept session's own hooks keep its run up to date, and reach no page while the hall follows another", async () => {
    await postAll(START('A'), PROMPT('A', 'Make the counter'));
    await postAll(START('B'), PROMPT('B', 'Something else'));
    const page = await subscribe();
    await until(() => marks(page.seen).includes('replayed'));
    const before = page.seen.length;
    await postAll(HAND_OUT('A'), GLOB('A'));
    await postAll(GLOB('B'));
    await until(() => page.seen.length === before + 1);
    expect(events(page.seen.slice(before))).toMatchObject([
      { type: 'state', agent: 'lead', state: 'reading' },
    ]);

    await postAll(RESUME('A'));
    await until(() => marks(page.seen).includes('replaying'));
    await until(() => marks(page.seen).filter((m) => m === 'replayed').length === 2);
    page.close();
    const back = office(lastReplay(page.seen).events);
    expect(back.runText).toBe('Make the counter');
    expect(back.tasks.map((t) => t.owner)).toEqual(['designer']);
  });

  it('keeps three sessions: going back to the fourth one before starts it new', async () => {
    for (const s of ['A', 'B', 'C', 'D']) await postAll(START(s), PROMPT(s, `Task ${s}`));
    const page = await subscribe();
    await until(() => marks(page.seen).includes('replayed'));
    const before = page.seen.length;

    // A is gone: a new run, event by event, no replay.
    await postAll(PROMPT('A', 'Task A again'));
    await until(() => events(page.seen.slice(before)).length === 3);
    expect(marks(page.seen.slice(before))).toEqual([]);
    expect(events(page.seen.slice(before)).map((e) => e.type)).toEqual(['reset', 'run', 'state']);

    // C was kept (D and A are now the others): it comes back as it stood.
    await postAll(PROMPT('C', 'Task C again'));
    await until(() => marks(page.seen.slice(before)).includes('replayed'));
    page.close();
    expect(lastReplay(page.seen).events.filter((e) => e.type === 'run')).toMatchObject([
      { text: 'Task C' },
      { text: 'Task C again' },
    ]);
  });

  it('a new start of a session it kept starts it new: the old run is not shown', async () => {
    await postAll(START('A'), PROMPT('A', 'Old task'));
    await postAll(START('B'));
    const page = await subscribe();
    await until(() => marks(page.seen).includes('replayed'));
    const before = page.seen.length;
    await postAll(START('A'));
    await until(() => events(page.seen.slice(before)).length === 1);
    page.close();
    expect(marks(page.seen.slice(before))).toEqual([]);
    expect(events(page.seen.slice(before)).map((e) => e.type)).toEqual(['reset']);
    expect(await replayNow()).toMatchObject([{ type: 'reset' }]);
  });

  it(`keeps at most ${REPLAY} events of a session`, async () => {
    await postAll(START('A'), PROMPT('A', 'Long task'));
    for (let i = 0; i < REPLAY + 40; i += 1) await post(GLOB('A'));
    await postAll(START('B'), RESUME('A'));
    const back = await replayNow();
    expect(back.length).toBeLessThanOrEqual(REPLAY);
    expect(back.at(-1)).toMatchObject({ type: 'state', agent: 'lead', state: 'reading' });
  });

  it('writes nothing to disk: the kept runs live in memory, as the replay does', () => {
    const code = readFileSync(join(import.meta.dirname, 'hall.ts'), 'utf8');
    expect(code).not.toMatch(/\b(writeFile|writeFileSync|appendFile|appendFileSync|createWriteStream)\b/);
    expect(code.match(/^import [^;]* from 'node:fs[^']*';$/gm)).toEqual([
      "import { readFile } from 'node:fs/promises';",
    ]);
  });
});
