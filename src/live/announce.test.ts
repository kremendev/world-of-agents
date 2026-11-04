import { describe, expect, it } from 'vitest';
import type { OfficeEvent } from '../events/schema';
import { INITIAL_OFFICE, officeReducer } from '../state/office';
import { MAX_LINE, finalReport, shortLine, whoIsWaiting } from './announce';

describe('shortLine', () => {
  const pad = (n: number) => 'x'.repeat(n);

  it('leaves a line within the limit alone', () => {
    expect(shortLine('Lead/PM: All done.')).toBe('Lead/PM: All done.');
    const exact = `${pad(MAX_LINE - 1)}y`;
    expect(shortLine(exact)).toBe(exact);
  });

  it('cuts a long line at the last full sentence within the limit', () => {
    const line = `Lead/PM: First one. Second one! Third one? ${'word '.repeat(60)}`;
    expect(shortLine(line)).toBe('Lead/PM: First one. Second one! Third one?');
  });

  it('counts a sentence that ends exactly on the limit, not one that ends past it', () => {
    const fits = `${pad(MAX_LINE - 1)}. More words after it.`;
    expect(shortLine(fits)).toBe(`${pad(MAX_LINE - 1)}.`);
    const over = `Short one. ${pad(MAX_LINE)}. More words after it.`;
    expect(shortLine(over)).toBe('Short one.');
  });

  it('does not take a dot inside a name for the end of a sentence', () => {
    const line = `Lead/PM: It listens on 127.0.0.1 and reads server.js and ${'more words '.repeat(30)}`;
    const cut = shortLine(line);
    expect(cut).not.toMatch(/127\.$|127\.0\.$|server\.$/);
    expect(cut.length).toBeLessThanOrEqual(MAX_LINE);
  });

  it('keeps a closing mark with its sentence', () => {
    const line = `Lead/PM: It replies with \`Hello, World!\`. ${'more words '.repeat(30)}`;
    expect(shortLine(line)).toBe('Lead/PM: It replies with `Hello, World!`.');
  });

  it('with no sentence to end on, cuts at the last whole word: never mid-word', () => {
    const line = `Lead/PM: ${'someword '.repeat(40)}`;
    const cut = shortLine(line);
    expect(cut.length).toBeLessThanOrEqual(MAX_LINE);
    expect(cut.endsWith('someword')).toBe(true);
    expect(line.startsWith(cut)).toBe(true);
  });

  it('drops a word too long to fit rather than cutting it', () => {
    expect(shortLine(`Lead/PM: ${pad(MAX_LINE * 2)}`)).toBe('Lead/PM:');
    expect(shortLine(pad(MAX_LINE * 2))).toBe('');
  });

  it("handles what send.mjs really forwards: 200 characters, cut mid-word, after the Lead's name", () => {
    const text =
      'Dima, `server.js` is in the project root: it uses only the built-in `http` module, listens on 127.0.0.1:3000 (loopback only) and replies with plain text `Hello, World!`.\n`node --check server.js` print';
    expect(shortLine(`Lead/PM: ${text}`)).toBe(
      'Lead/PM: Dima, `server.js` is in the project root: it uses only the built-in `http` module, listens on 127.0.0.1:3000 (loopback only) and replies with plain text `Hello, World!`.',
    );
  });
});

describe('finalReport', () => {
  const office = (...events: OfficeEvent[]) => events.reduce(officeReducer, INITIAL_OFFICE);
  const say = (text: string): OfficeEvent => ({ type: 'message', from: 'lead', to: 'you', text, at: 0 });
  const set = (agent: 'lead' | 'backend', state: 'idle' | 'thinking' | 'waiting' | 'done' | 'error') =>
    ({ type: 'state', agent, state, at: 0 }) as const;

  it('is nothing before anything is said', () => {
    expect(finalReport(INITIAL_OFFICE)).toBeNull();
  });

  it('is nothing while the Lead still waits for its team', () => {
    expect(
      finalReport(office(set('lead', 'thinking'), say('Backend is on it.'), set('lead', 'waiting'))),
    ).toBeNull();
  });

  it('is nothing in the moment between the message and the idle events after it', () => {
    expect(finalReport(office(set('lead', 'thinking'), say('All done.')))).toBeNull();
  });

  it('is the message once everyone is at rest', () => {
    const run = office(set('lead', 'thinking'), say('All done.'), set('lead', 'idle'));
    expect(finalReport(run)?.text).toBe('All done.');
  });

  it.each(['done', 'error'] as const)('counts %s as at rest', (state) => {
    const run = office(
      set('lead', 'thinking'),
      set('backend', 'thinking'),
      say('Over.'),
      set('lead', 'idle'),
      set('backend', state),
    );
    expect(finalReport(run)?.text).toBe('Over.');
  });

  it('never repeats an old report: once anyone has gone back to work, it is over', () => {
    const run = office(say('All done.'), set('lead', 'thinking'), set('lead', 'idle'));
    expect(finalReport(run)).toBeNull();
  });

  it('skips what agents say to each other', () => {
    const run = office(say('All done.'), {
      type: 'message',
      from: 'backend',
      to: 'lead',
      text: 'Sent.',
      at: 0,
    });
    expect(finalReport(run)?.text).toBe('All done.');
  });
});

describe('whoIsWaiting', () => {
  it('asks for approval from a dev, and only "needs you" from the Lead', () => {
    const run = [
      { type: 'state', agent: 'lead', state: 'needs-you', at: 0 },
      { type: 'state', agent: 'backend', state: 'needs-you', at: 0 },
    ] as const;
    expect(whoIsWaiting(run.reduce(officeReducer, INITIAL_OFFICE))).toEqual([
      'Lead/PM needs you in Claude Code',
      'Backend dev needs your approval in Claude Code',
    ]);
  });
});
