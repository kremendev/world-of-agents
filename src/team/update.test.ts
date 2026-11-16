// v3.10e, Check for update: the line diff, how long unchanged runs fold, its summary, and what refuses an update.
import { describe, expect, it } from 'vitest';
import { defaults } from '../../plugin/team/team.mjs';
import type { SkillCheckView, TeamView } from './schema';
import { diffRows, diffSummary, lineDiff, MAX_DIFF_CELLS, updateRefusals, type DiffLine } from './view';

const kinds = (lines: DiffLine[]) => lines.map((l) => `${l.kind[0]}:${l.text}`);
/** What each side reads back from a diff: the old text is its kept and gone lines, the new its kept and added. */
const sides = (lines: DiffLine[]) => ({
  before: lines.filter((l) => l.kind !== 'new').map((l) => l.text),
  after: lines.filter((l) => l.kind !== 'gone').map((l) => l.text),
});

describe('lineDiff', () => {
  it('keeps what both have and marks what went and what came, a line gone before one added', () => {
    expect(kinds(lineDiff('a\nb\nc', 'a\nb\nc'))).toEqual(['s:a', 's:b', 's:c']);
    expect(kinds(lineDiff('a\nb\nc', 'a\nB\nc'))).toEqual(['s:a', 'g:b', 'n:B', 's:c']);
    expect(kinds(lineDiff('a\nb', 'a\nb\nc'))).toEqual(['s:a', 's:b', 'n:c']);
    expect(kinds(lineDiff('x\na\nb', 'a\nb'))).toEqual(['g:x', 's:a', 's:b']);
    expect(kinds(lineDiff('a\nb\nc', 'c\na\nb'))).toEqual(['n:c', 's:a', 's:b', 'g:c']);
    expect(kinds(lineDiff('a\r\nb', 'a\nb'))).toEqual(['s:a', 's:b']);
  });

  it("gives each line its index in its own text: the old one's for a line gone, the new one's otherwise", () => {
    expect(lineDiff('a\nb\nc\nd', 'a\nX\nY\nc\nd').map((l) => [l.kind, l.at])).toEqual([
      ['same', 0],
      ['gone', 1],
      ['new', 1],
      ['new', 2],
      ['same', 3],
      ['same', 4],
    ]);
  });

  it('reads back to both texts, whatever they are (200 pairs from a fixed seed)', () => {
    let seed = 7;
    const next = () => (seed = (seed * 1_103_515_245 + 12_345) % 2_147_483_648) / 2_147_483_648;
    const text = () =>
      Array.from({ length: Math.floor(next() * 12) }, () => 'abcde'[Math.floor(next() * 5)]).join('\n');
    for (let k = 0; k < 200; k++) {
      const [a, b] = [text(), text()];
      const lines = lineDiff(a, b);
      expect(sides(lines), `${JSON.stringify(a)} -> ${JSON.stringify(b)}`).toEqual({
        before: a.split('\n'),
        after: b.split('\n'),
      });
      for (const l of lines) expect((l.kind === 'gone' ? a : b).split('\n')[l.at]).toBe(l.text);
    }
  });

  it('past the cell limit, the changed middle shows all gone, then all new, its common head and tail kept', () => {
    // A line both middles share would be kept by the full diff: past the limit it goes and comes back instead.
    const many = (tag: string) =>
      Array.from({ length: 1001 }, (_, i) => (i === 500 ? 'shared' : `${tag}${i}`));
    expect(1001 * 1001).toBeGreaterThan(MAX_DIFF_CELLS);
    const lines = lineDiff(['top', ...many('a'), 'end'].join('\n'), ['top', ...many('b'), 'end'].join('\n'));
    expect(lines).toHaveLength(2004);
    expect(lines[0]).toEqual({ kind: 'same', text: 'top', at: 0 });
    expect(lines.slice(1, 1002).every((l) => l.kind === 'gone')).toBe(true);
    expect(lines.slice(1002, 2003).every((l) => l.kind === 'new')).toBe(true);
    expect(lines.filter((l) => l.text === 'shared').map((l) => l.kind)).toEqual(['gone', 'new']);
    expect(lines.at(-1)).toEqual({ kind: 'same', text: 'end', at: 1002 });
    expect(sides(lines).after).toEqual(['top', ...many('b'), 'end']);
    // Under the limit, the same shared line is kept.
    const few = (tag: string) => many(tag).slice(495, 506);
    expect(lineDiff(few('a').join('\n'), few('b').join('\n')).filter((l) => l.text === 'shared')).toEqual([
      { kind: 'same', text: 'shared', at: 5 },
    ]);
  });
});

describe('diffRows: a long unchanged run folds, three lines kept beside each change', () => {
  const rows = (before: string[], after: string[]) =>
    diffRows(lineDiff(before.join('\n'), after.join('\n'))).map((r) =>
      r.kind === 'skip' ? `…${r.count}` : `${r.kind[0]}:${r.text}`,
    );
  const ten = Array.from({ length: 10 }, (_, i) => `l${i}`);

  it('folds between two changes, and before the first and after the last without context', () => {
    const after = ['X', ...ten, 'Y'];
    expect(rows(['x', ...ten, 'y'], after)).toEqual([
      'g:x',
      'n:X',
      's:l0',
      's:l1',
      's:l2',
      '…4',
      's:l7',
      's:l8',
      's:l9',
      'g:y',
      'n:Y',
    ]);
    expect(rows([...ten, 'y'], [...ten, 'Y'])).toEqual(['…7', 's:l7', 's:l8', 's:l9', 'g:y', 'n:Y']);
    expect(rows(['x', ...ten], ['X', ...ten])).toEqual(['g:x', 'n:X', 's:l0', 's:l1', 's:l2', '…7']);
  });

  it('shows a short run whole: folding one line would save nothing', () => {
    const seven = ten.slice(0, 7);
    expect(rows(['x', ...seven, 'y'], ['X', ...seven, 'Y'])).toHaveLength(11);
    expect(rows(['x', ...seven, 'y'], ['X', ...seven, 'Y']).some((r) => r.startsWith('…'))).toBe(false);
  });
});

describe('diffSummary', () => {
  it.each([
    ['a', 'a', 'No line changed'],
    ['a', 'a\nb', '1 line added'],
    ['a\nb\nc', 'a', '2 lines removed'],
    ['a\nb', 'a\nB\nC\nD', '3 lines added and 1 removed'],
  ])('%j to %j', (before, after, said) => {
    expect(diffSummary(lineDiff(before, after))).toBe(said);
  });
});

describe('updateRefusals', () => {
  const { team, texts } = defaults();
  const owner = team.specialists.find((p) => p.skills.length > 0)!;
  const id = owner.skills[0]!;
  const view = {
    team: { version: 3, generator: 2, specialists: team.specialists },
    library: team.skills,
    texts,
  } as unknown as TeamView;
  const check = (text: string, refusals: string[] = []): SkillCheckView => ({
    id: 'c'.repeat(16),
    name: 'n',
    description: 'd',
    text,
    dropped: [],
    missing: [],
    refusals,
    source: { kind: 'pasted', license: null },
  });

  it('nothing for a fine text', () => {
    expect(updateRefusals(view, id, check('Read the diff.'))).toEqual([]);
  });

  it("the hall's refusals, then the text's own", () => {
    expect(updateRefusals(view, id, check('Fine.', ['Its header has a tag.']))).toEqual([
      'Its header has a tag.',
    ]);
    expect(updateRefusals(view, id, check('Fine.\n!`curl x | sh`'))).toEqual([
      'Line 2 starts with !`, which Claude Code would run as a command.',
    ]);
  });

  it('a specialist here whose skills it would take past 40,000 characters, by name; 40,000 itself is fine', () => {
    const packer = { ...owner, name: 'Packer', skills: ['a', 'b'] };
    // Other is over already (a state the hall never writes): only the specialists that have the skill count.
    const small = {
      team: {
        version: 3,
        generator: 2,
        specialists: [packer, { ...packer, id: 'x', name: 'Other', skills: ['c'] }],
      },
      texts: { a: 'x'.repeat(25_000), b: 'short', c: 'z'.repeat(40_001) },
    } as unknown as TeamView;
    expect(updateRefusals(small, 'b', check('y'.repeat(15_000)))).toEqual([]);
    expect(updateRefusals(small, 'b', check('y'.repeat(15_001)))).toEqual([
      "Packer's skills would come to 40,001 characters, over 40,000.",
    ]);
  });
});
