import { fireEvent, render, screen, within } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { STATE_STYLE } from '../office/states';
import type { Message } from '../state/office';
import { reviewsOf } from './review';
import { ReviewBoard } from './ReviewBoard';

/** A moment today, in local time, so the test holds in any time zone. */
const time = (h: number, m: number, s: number) => new Date(2026, 10, 11, h, m, s).getTime();

const report = (verdict: string, ...findings: string[]) =>
  [
    'I reviewed the item routes. One input check is missing.',
    '',
    '## Verdict',
    verdict,
    '## Files checked',
    '- server/routes/items.ts',
    '## Findings',
    ...(findings.length > 0 ? findings : ['None']),
    '## Checks run',
    '- Read server/routes/items.ts',
    '- Grep for innerHTML in src/',
    '## Left for the Lead',
    '- Run the tests',
  ].join('\n');

const review = (text: string, at: number, tools?: Message['tools']): Message => ({
  from: 'reviewer',
  to: 'lead',
  text,
  ...(tools ? { tools } : {}),
  at,
});

const board = (messages: Message[], at: number | null = null, onClose = () => {}) =>
  render(<ReviewBoard reviews={reviewsOf(messages)} at={at} onClose={onClose} />);

const latest = review(
  report('Changes needed', '- server/routes/items.ts:42: the item id is never checked'),
  time(14, 32, 5),
  { Read: 6, Grep: 3, Glob: 1 },
);

describe('ReviewBoard', () => {
  it('is a non-modal dialog named "Review board", with its heading focused as it opens', () => {
    board([latest]);
    const dialog = screen.getByRole('dialog', { name: 'Review board' });
    expect(dialog).not.toHaveAttribute('aria-modal');
    expect(screen.getByRole('heading', { level: 2, name: 'Review board' })).toHaveFocus();
  });

  it('shows the latest review as a card, part by part', () => {
    board([latest]);
    const card = screen.getByRole('article', { name: 'Review at 14:32:05' });
    const chip = within(card).getByText("Reviewer's verdict: Changes needed");
    expect(chip).toHaveClass('chip');
    expect(chip).toHaveStyle({
      background: STATE_STYLE['needs-you'].bg,
      color: STATE_STYLE['needs-you'].text,
    });
    expect(card).toHaveTextContent('I reviewed the item routes. One input check is missing.');
    const headings = within(card)
      .getAllByRole('heading', { level: 4 })
      .map((h) => h.textContent);
    expect(headings).toEqual(['Files checked', 'Findings', 'Checks run', 'Left for the Lead']);
    const finding = within(card).getByText('the item id is never checked', { exact: false });
    expect(finding.querySelector('code')?.textContent).toBe('server/routes/items.ts:42');
    expect(within(card).getByText('Run the tests')).toBeInTheDocument();
  });

  it('keeps what the Reviewer says it ran and what the hall saw on two separate lines (D10)', () => {
    board([latest]);
    const claim = screen.getByText('The Reviewer says it ran:');
    expect(claim.nextElementSibling?.textContent).toBe(
      'Read server/routes/items.tsGrep for innerHTML in src/',
    );
    expect(screen.getByText('The hall saw at least: Read 6, Grep 3, Glob 1')).toHaveClass('review-saw');
    board([review(report('Approved'), time(9, 0, 0))]);
    expect(screen.getByText('The hall saw: no count came with this review')).toBeInTheDocument();
  });

  it('gives each verdict its chip colours, the word always shown', () => {
    for (const [verdict, state] of [
      ['Approved', 'done'],
      ["Couldn't review", 'error'],
    ] as const) {
      const { unmount } = board([review(report(verdict), time(9, 0, 0))]);
      expect(screen.getByText(`Reviewer's verdict: ${verdict}`)).toHaveStyle({
        background: STATE_STYLE[state].bg,
      });
      unmount();
    }
  });

  it('shows a report that does not follow the format as written, and says why', () => {
    board([review('Looked fine. **No issues.**', time(9, 0, 0), { Read: 1, Grep: 0, Glob: 0 })]);
    expect(
      screen.getByText("This report doesn't follow the review format, so it shows as written."),
    ).toBeInTheDocument();
    expect(screen.getByText('No issues.').tagName).toBe('STRONG');
    expect(screen.getByText('The hall saw at least: Read 1, Grep 0, Glob 0')).toBeInTheDocument();
  });

  it('says so when this run has no review yet', () => {
    board([]);
    expect(screen.getByText('No reviews in this run yet.')).toBeInTheDocument();
  });

  it("never makes a card from a perfect-shape report by anyone but the Reviewer, nor the Reviewer's lines to a dev", () => {
    board([
      { from: 'backend', to: 'lead', text: report('Approved'), at: time(9, 0, 0) },
      { from: 'lead', to: 'you', text: report('Approved'), at: time(9, 0, 1) },
      { from: 'reviewer', to: 'frontend', text: report('Approved'), at: time(9, 0, 2) },
    ]);
    expect(screen.queryByRole('article')).toBeNull();
    expect(screen.getByText('No reviews in this run yet.')).toBeInTheDocument();
  });

  it('lists earlier reviews in one line each, collapsed, and opens one on its Show toggle', () => {
    const first = review(report('Approved'), time(10, 0, 0));
    const second = review('Not in the format.', time(11, 0, 0));
    board([first, second, latest]);
    const rows = screen
      .getAllByRole('listitem')
      .filter((li) => li.parentElement?.classList.contains('review-earlier'));
    expect(rows.map((li) => li.firstChild?.textContent)).toEqual(['11:00:00', '10:00:00']);
    expect(rows[0]).toHaveTextContent('Report as written');
    expect(rows[1]).toHaveTextContent('Approved, no findings');
    const toggle = within(rows[1]!).getByRole('button', { name: 'Show' });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    expect(screen.queryByRole('article', { name: 'Review at 10:00:00' })).toBeNull();
    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    expect(toggle).toHaveTextContent('Hide');
    const card = screen.getByRole('article', { name: 'Review at 10:00:00' });
    expect(document.getElementById(toggle.getAttribute('aria-controls')!)).toContainElement(card);
  });

  it('opens at the review it was asked for: an earlier one opens, with its heading focused', () => {
    const first = review(report('Approved'), time(10, 0, 0));
    board([first, latest], time(10, 0, 0));
    expect(screen.getByRole('heading', { level: 3, name: 'Review at 10:00:00' })).toHaveFocus();
    expect(screen.getByRole('button', { name: 'Hide' })).toHaveAttribute('aria-expanded', 'true');
  });

  it('opens at the latest one with its heading focused when that is the one asked for', () => {
    board([latest], time(14, 32, 5));
    expect(screen.getByRole('heading', { level: 3, name: 'Review at 14:32:05' })).toHaveFocus();
  });

  it('keeps the focus where it is when a new review arrives while it is open, and puts the new one on top', () => {
    const first = review(report('Approved'), time(10, 0, 0));
    const { rerender } = board([first]);
    expect(screen.getByRole('heading', { level: 2, name: 'Review board' })).toHaveFocus();
    const close = screen.getByRole('button', { name: 'Close' });
    close.focus();
    rerender(<ReviewBoard reviews={reviewsOf([first, latest])} at={null} onClose={() => {}} />);
    expect(close).toHaveFocus();
    // The new one is the card on top; the one before is now an earlier review, collapsed.
    expect(screen.getAllByRole('article').map((a) => a.querySelector('h3')?.textContent)).toEqual([
      'Review at 14:32:05',
    ]);
    expect(screen.getByRole('button', { name: 'Show' }).closest('li')).toHaveTextContent(
      'Approved, no findings',
    );
  });

  it('closes on its Close button', () => {
    const onClose = vi.fn();
    board([latest], null, onClose);
    fireEvent.click(screen.getByRole('button', { name: 'Close' }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('shows agent text as text only: no link, no target, no HTML, anywhere on the board', () => {
    const hostile = review(
      report(
        'Changes needed',
        '- a.ts:1: see [the fix](javascript:alert(1)) and ![img](https://example.com/x.png)',
        '- <img src=x onerror=alert(1)> in a comment',
      ).replace('I reviewed', '[Click](https://example.com) I reviewed'),
      time(9, 0, 0),
    );
    const { container } = board([
      hostile,
      review('<script>alert(1)</script> [x](javascript:alert(1))', time(8, 0, 0)),
    ]);
    fireEvent.click(screen.getByRole('button', { name: 'Show' }));
    expect(container.querySelector('a, img, script, [href], [src]')).toBeNull();
    expect(container.textContent).not.toContain('javascript:');
    expect(container.textContent).not.toContain('example.com');
    expect(container.textContent).toContain('<img src=x onerror=alert(1)> in a comment');
    expect(container.textContent).toContain('<script>alert(1)</script> x');
  });
});
