import { describe, expect, it } from 'vitest';
import reviewerPrompt from '../../plugin/agents/reviewer.md?raw';
import type { Message } from '../state/office';
import { HEADINGS, VERDICTS, isReview, parseReview, reviewsOf } from './review';

const REPORT = [
  'I reviewed the new item routes. One input check is missing.',
  '',
  '## Verdict',
  '',
  'Changes needed',
  '',
  '## Files checked',
  '',
  '- server/routes/items.ts',
  '- src/api/client.ts',
  '',
  '## Findings',
  '',
  '- server/routes/items.ts:42: the item id is never checked,',
  '  so any string reaches the query',
  '- `src/api/client.ts:10-12`: errors are swallowed',
  '',
  '## Checks run',
  '',
  '- Read server/routes/items.ts',
  '- Grep for innerHTML in src/',
  '',
  '## Left for the Lead',
  '',
  '- Run the tests',
].join('\n');

const lines = REPORT.split('\n');
/** REPORT with line `at` (0-based) replaced by `by` (several lines, or none to remove it). */
const edited = (at: number, ...by: string[]) =>
  [...lines.slice(0, at), ...by, ...lines.slice(at + 1)].join('\n');
const lineOf = (text: string) => lines.indexOf(text);
/** REPORT with its Findings list replaced. */
const withFindings = (...items: string[]) => {
  const from = lineOf('## Findings') + 2;
  const to = lineOf('## Checks run') - 1;
  return [...lines.slice(0, from), ...items, ...lines.slice(to)].join('\n');
};
const findingsOf = (...items: string[]) => parseReview(withFindings(...items))?.findings;
const BIDI = String.fromCodePoint(0x202e);

describe('parseReview', () => {
  it('splits a report in the format into its parts', () => {
    expect(parseReview(REPORT)).toEqual({
      summary: 'I reviewed the new item routes. One input check is missing.',
      verdict: 'Changes needed',
      files: ['server/routes/items.ts', 'src/api/client.ts'],
      findings: [
        {
          place: { file: 'server/routes/items.ts', line: '42' },
          text: 'the item id is never checked, so any string reaches the query',
        },
        { place: { file: 'src/api/client.ts', line: '10-12' }, text: 'errors are swallowed' },
      ],
      checks: ['Read server/routes/items.ts', 'Grep for innerHTML in src/'],
      left: ['Run the tests'],
    });
  });

  it('reads Windows line breaks, trailing spaces on headings and a report with no blank lines the same', () => {
    expect(parseReview(REPORT.replaceAll('\n', '\r\n'))).toEqual(parseReview(REPORT));
    expect(parseReview(edited(lineOf('## Findings'), '## Findings   '))).toEqual(parseReview(REPORT));
    expect(parseReview(lines.filter((line) => line !== '').join('\n'))).toEqual(parseReview(REPORT));
  });

  it('starts at the last "## Verdict" line: one quoted in the summary stays in the summary', () => {
    const quoted = ['An earlier draft ended early:', '## Verdict', 'Approved', '', REPORT].join('\n');
    expect(parseReview(quoted)).toMatchObject({
      summary: expect.stringMatching(/^An earlier draft ended early:\n## Verdict\nApproved\n\nI reviewed/),
      verdict: 'Changes needed',
    });
  });

  it.each([
    ['approved', 'Approved'],
    ['APPROVED', 'Approved'],
    ['**Approved**', 'Approved'],
    ['Approved.', 'Approved'],
    ['**Approved**.', 'Approved'],
    ['**Approved.**', 'Approved'],
    ['  changes needed  ', 'Changes needed'],
    ["Couldn't review", "Couldn't review"],
    [`Couldn${String.fromCodePoint(0x2019)}t review`, "Couldn't review"],
  ])('takes the verdict %j as %s', (said, verdict) => {
    expect(parseReview(edited(lineOf('Changes needed'), said))?.verdict).toBe(verdict);
  });

  it.each([
    ['no "## Verdict" line', REPORT.replace('## Verdict', '**Verdict**')],
    [
      'the verdict on the heading line',
      edited(lineOf('## Verdict'), '## Verdict: Approved').replace('\nChanges needed\n', '\n'),
    ],
    ['a heading missing', edited(lineOf('## Checks run'))],
    ['a heading twice', edited(lineOf('- src/api/client.ts'), '- src/api/client.ts', '## Files checked')],
    [
      'headings out of order',
      REPORT.replace('## Findings', '## X')
        .replace('## Checks run', '## Findings')
        .replace('## X', '## Checks run'),
    ],
    ['another heading inside the block', edited(lineOf('- Run the tests'), '- Run the tests', '### Notes')],
    ['a # line inside the block', edited(lineOf('- Read server/routes/items.ts'), '#hashtag')],
    ['an unknown verdict', edited(lineOf('Changes needed'), 'LGTM')],
    ['a verdict with more words', edited(lineOf('Changes needed'), 'Approved, with nits')],
    ['two verdict lines', edited(lineOf('Changes needed'), 'Approved', 'Changes needed')],
    ['no verdict', edited(lineOf('Changes needed'), '')],
    ['text after the last list', `${REPORT}\n\nThanks!`],
    ['a list item written with *', edited(lineOf('- Run the tests'), '* Run the tests')],
    ['a numbered item', edited(lineOf('- Run the tests'), '1. Run the tests')],
    ['an indented line with no item before it', edited(lineOf('- Run the tests'), '  Run the tests')],
    ['None among items', edited(lineOf('- Run the tests'), '- Run the tests', 'None')],
    ['an item after None', edited(lineOf('- Run the tests'), 'None', '- Run the tests')],
    ['an empty item', edited(lineOf('- Run the tests'), '- ')],
  ])('gives null, so the report shows as written, for %s', (_, text) => {
    expect(parseReview(text)).toBeNull();
  });

  it('gives null for a report with no headings at all', () => {
    expect(parseReview('Review found no bugs.\n\n- **Line counts:** all under 30.')).toBeNull();
    expect(parseReview('')).toBeNull();
  });

  it('reads None, - None and none. as an empty list', () => {
    expect(findingsOf('None')).toEqual([]);
    expect(findingsOf('- None')).toEqual([]);
    expect(findingsOf('none.')).toEqual([]);
  });

  it('keeps a finding whose location the card could get wrong as plain text, the whole item', () => {
    const plain = [
      'C:\\x\\y.ts:3: a Windows path',
      `src/a${BIDI}b.ts:3: a bidi control in the path`,
      'my file.ts:3: a space in the path',
      'a.ts:0: line 0',
      'a.ts:10000000: a line past 9,999,999',
      `${'a'.repeat(201)}:3: a path over 200 characters`,
      '`a.ts:3: one backtick',
      'a.ts:3`: one backtick',
      'a.ts:3:no space',
      'a.ts:3: ',
      '**a.ts:3**: bold',
      'Line 3 of a.ts is wrong',
    ];
    expect(findingsOf(...plain.map((item) => `- ${item}`))).toEqual(
      plain.map((item) => ({ place: null, text: item.trim() })),
    );
  });

  it('takes a location at its limits', () => {
    const path = `${'a'.repeat(196)}.tsx`;
    expect(
      findingsOf(`- ${path}:9999999: at the limits`, '- @scope/pkg+x/a_b-c.js:1-2: every path character'),
    ).toEqual([
      { place: { file: path, line: '9999999' }, text: 'at the limits' },
      { place: { file: '@scope/pkg+x/a_b-c.js', line: '1-2' }, text: 'every path character' },
    ]);
  });

  it("keeps a bidi control in a finding's text as text: the location is still checked on its own", () => {
    expect(findingsOf(`- a.ts:3: odd ${BIDI}text`)).toEqual([
      { place: { file: 'a.ts', line: '3' }, text: `odd ${BIDI}text` },
    ]);
  });

  it('reads 20,000 characters of hostile input in linear time', () => {
    const block = (findings: string) =>
      `x\n## Verdict\nApproved\n## Files checked\nNone\n## Findings\n${findings}\n## Checks run\nNone\n## Left for the Lead\nNone`;
    const hostile = [
      '## \n'.repeat(5000),
      '## Verdict\n'.repeat(1800),
      block('- a:1:\n'.repeat(3300)),
      block(`- ${'a'.repeat(20_000)}`),
      block(`- ${'a:1'.repeat(6600)}`),
      block(`- \`${'a'.repeat(199)}:1${'1'.repeat(6)}-${'9'.repeat(20_000)}`),
      `## Verdict${' '.repeat(20_000)}x`,
      block(`- a\n${'  more\n'.repeat(3000)}`),
    ];
    for (const text of hostile) {
      expect(text.length).toBeGreaterThan(19_000);
      const began = performance.now();
      parseReview(text);
      expect(performance.now() - began, text.slice(0, 20)).toBeLessThan(100);
    }
  });
});

describe('the format in reviewer.md and the parser agree', () => {
  it('names the same five headings, in order, and nothing else as a ## heading', () => {
    expect([...reviewerPrompt.matchAll(/^## (.+)$/gm)].map((m) => m[1])).toEqual([...HEADINGS]);
  });

  it('names the same three verdicts', () => {
    const named = /^One of: (.+)$/m.exec(reviewerPrompt)?.[1]?.split(', ');
    expect(named).toEqual([...VERDICTS]);
  });

  it('no longer asks for five lines or fewer, which the format would break', () => {
    expect(reviewerPrompt).not.toMatch(/five lines/i);
    expect(reviewerPrompt).toMatch(/Report only checks you actually ran/);
  });
});

describe('which messages are reviews: by who sent them, never by their text', () => {
  const message = (from: Message['from'], to: Message['to'], text: string, at: number): Message => ({
    from,
    to,
    text,
    at,
  });

  it('only the Reviewer to the Lead: the Lead to you, a dev to the Lead and the Reviewer to a dev are not, in perfect shape too', () => {
    expect(isReview(message('reviewer', 'lead', 'Report sent to the Lead', 0))).toBe(true);
    for (const [from, to] of [
      ['lead', 'you'],
      ['backend', 'lead'],
      ['reviewer', 'frontend'],
      ['lead', 'reviewer'],
    ] as const) {
      expect(isReview(message(from, to, REPORT, 0)), `${from} to ${to}`).toBe(false);
    }
  });

  it("lists this run's reviews newest first, each parsed or null to show as written", () => {
    const first = message('reviewer', 'lead', REPORT, 1);
    const second = message('reviewer', 'lead', 'Report sent to the Lead', 5);
    const reviews = reviewsOf([
      first,
      message('lead', 'you', REPORT, 2),
      message('backend', 'lead', REPORT, 3),
      message('reviewer', 'frontend', REPORT, 4),
      second,
    ]);
    expect(reviews).toEqual([
      { message: second, review: null },
      { message: first, review: parseReview(REPORT) },
    ]);
    expect(reviews[1]!.review).not.toBeNull();
  });
});
