import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import type { OfficeEvent } from '../events/schema';
import { INITIAL_OFFICE, officeReducer } from '../state/office';
import { ActivityFeed } from './ActivityFeed';

const office = (...events: OfficeEvent[]) => events.reduce(officeReducer, INITIAL_OFFICE);
/** A moment today, in local time, so the test holds in any time zone. */
const time = (h: number, m: number, s: number) => new Date(2026, 10, 4, h, m, s).getTime();

const api: OfficeEvent = {
  type: 'task',
  taskId: 'api',
  title: 'Board and item API',
  owner: 'backend',
  status: 'in-progress',
  at: 0,
};
const run = office(
  api,
  { type: 'state', agent: 'backend', state: 'reading', taskId: 'api', at: time(9, 5, 7) },
  { type: 'message', from: 'lead', to: 'backend', text: "How's the API coming?", at: time(9, 5, 8) },
  { type: 'message', from: 'designer', to: 'frontend', text: 'Screens are on your desk.', at: time(9, 6, 0) },
  { type: 'state', agent: 'designer', state: 'done', at: time(9, 6, 1) },
  { type: 'message', from: 'backend', to: 'you', text: 'Routes are up.', at: time(14, 30, 59) },
);

const lines = () =>
  [...document.querySelectorAll('.feed-line')].map((li) =>
    [...li.children].map((part) => part.textContent).join(' | '),
  );
const feed = (agent: Parameters<typeof ActivityFeed>[0]['agent'], onShowEveryone = () => {}) =>
  render(<ActivityFeed office={run} agent={agent} onShowEveryone={onShowEveryone} />);

describe('ActivityFeed', () => {
  it('says so when there is nothing yet', () => {
    render(<ActivityFeed office={INITIAL_OFFICE} agent={null} onShowEveryone={() => {}} />);
    expect(screen.getByText('Nothing yet.')).toBeInTheDocument();
  });

  it('lists the whole team, newest first: time, name, what happened', () => {
    feed(null);
    expect(lines()).toEqual([
      '14:30:59 | Backend dev | To you | to you: Routes are up.',
      '09:06:01 | Designer | Done',
      '09:06:00 | Designer | to Frontend dev: Screens are on your desk.',
      "09:05:08 | Lead/PM | to Backend dev: How's the API coming?",
      '09:05:07 | Backend dev | Reading · Board and item API',
    ]);
  });

  it('says "Everyone is resting" once when the whole team rests, and only skips what changes nothing', () => {
    const rested = office(
      { type: 'state', agent: 'backend', state: 'writing', at: time(9, 0, 0) },
      { type: 'state', agent: 'backend', state: 'writing', at: time(9, 0, 5) },
      ...(['lead', 'designer', 'frontend', 'backend', 'reviewer'] as const).map((agent): OfficeEvent => ({
        type: 'state',
        agent,
        state: 'idle',
        at: time(9, 1, 0),
      })),
    );
    render(<ActivityFeed office={rested} agent={null} onShowEveryone={() => {}} />);
    expect(lines()).toEqual(['09:01:00 | Everyone | is resting', '09:00:00 | Backend dev | Writing']);
  });

  it('has no numbers: a plain list', () => {
    feed(null);
    expect(screen.getByRole('list').tagName).toBe('UL');
  });

  it('narrows to one agent: its own states and what it sent or got', () => {
    feed('backend');
    expect(screen.getByRole('heading', { name: 'Activity · Backend dev' })).toBeInTheDocument();
    expect(lines()).toEqual([
      '14:30:59 | Backend dev | To you | to you: Routes are up.',
      "09:05:08 | Lead/PM | to Backend dev: How's the API coming?",
      '09:05:07 | Backend dev | Reading · Board and item API',
    ]);
  });

  it('offers "Show everyone" only while narrowed, as a real button', () => {
    const onShowEveryone = vi.fn();
    const { unmount } = feed('backend', onShowEveryone);
    fireEvent.click(screen.getByRole('button', { name: 'Show everyone' }));
    expect(onShowEveryone).toHaveBeenCalledOnce();
    unmount();

    feed(null);
    expect(screen.queryByRole('button', { name: 'Show everyone' })).toBeNull();
    expect(screen.getByRole('heading', { name: 'Activity' })).toBeInTheDocument();
  });

  it('shows agent output as text, with its `code` and **bold** as elements', () => {
    const attack = '<img src=x onerror="alert(1)">';
    const { container } = render(
      <ActivityFeed
        office={office({
          type: 'message',
          from: 'lead',
          to: 'you',
          text: `${attack} \`npm test\` **now**`,
          at: time(9, 0, 0),
        })}
        agent={null}
        onShowEveryone={() => {}}
      />,
    );
    expect(container.querySelector('img')).toBeNull();
    expect(container.querySelector('.feed-what')).toHaveTextContent(`to you: ${attack} npm test now`);
    expect(container.querySelector('.feed-what code')).toHaveTextContent('npm test');
    expect(container.querySelector('.feed-what strong')).toHaveTextContent('now');
  });
});

describe('a long message: cut in its row, "Show all" opens the whole text after it', () => {
  // From the Backend dev: the Reviewer's report to the Lead is a review, which opens on the review board instead.
  const report = `All done. ${'The routes are up and tested. '.repeat(20)}End with [example](https://example.com)`;
  const longRun = office(
    { type: 'message', from: 'backend', to: 'lead', text: report, at: time(9, 0, 0) },
    { type: 'message', from: 'designer', to: 'lead', text: 'Short one.', at: time(9, 0, 1) },
  );
  const showAll = () => screen.getByRole('button', { name: 'Show all' });
  const showLess = () => screen.getByRole('button', { name: 'Show less' });
  const controlled = (toggle: HTMLElement) => document.getElementById(toggle.getAttribute('aria-controls')!)!;
  const reviewRow = () => document.querySelector('.feed-line.long')!;

  it('shows the start, ending in "…", and a "Show all" toggle: a real button, collapsed, naming what it controls', () => {
    render(<ActivityFeed office={longRun} agent={null} onShowEveryone={() => {}} />);
    const toggle = showAll();
    expect(toggle.tagName).toBe('BUTTON');
    expect(toggle).toHaveAttribute('type', 'button');
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    expect(toggle).toHaveClass('link'); // the links' focus ring (layout.test.ts)
    expect(controlled(toggle)).not.toBeVisible();
    expect(controlled(toggle)).toBeEmptyDOMElement();
    expect(reviewRow().querySelector('.feed-what')!.textContent).toMatch(
      /^to Lead\/PM: All done\. The routes .*…$/,
    );
    expect(reviewRow().textContent).not.toContain('example');
  });

  it('opens the whole text in a plain element after the toggle, never inside it, and closes it again', () => {
    render(<ActivityFeed office={longRun} agent={null} onShowEveryone={() => {}} />);
    fireEvent.click(showAll());
    const toggle = showLess();
    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    expect(toggle.textContent).toBe('Show less'); // no agent text in the button
    const full = controlled(toggle);
    expect(full).toBeVisible();
    expect(full).toHaveTextContent(report.replace('[example](https://example.com)', 'example'));
    expect(full.closest('button')).toBeNull();
    expect(full.previousElementSibling).toBe(toggle);
    expect(reviewRow().querySelector('.feed-what')!.textContent).toBe('to Lead/PM:'); // the cut text gives way
    fireEvent.click(toggle);
    expect(showAll()).toHaveAttribute('aria-expanded', 'false');
    expect(controlled(showAll())).toBeEmptyDOMElement();
  });

  it('a click on the row toggles too, but not one in the open text, and not one that ends a selection', () => {
    render(<ActivityFeed office={longRun} agent={null} onShowEveryone={() => {}} />);
    fireEvent.click(reviewRow().querySelector('.feed-who')!);
    expect(showLess()).toBeInTheDocument();

    const full = reviewRow().querySelector('.feed-full')!;
    fireEvent.click(full);
    expect(showLess()).toBeInTheDocument(); // reading or selecting in the text never closes it

    window.getSelection()!.selectAllChildren(full);
    fireEvent.click(reviewRow().querySelector('.feed-time')!);
    expect(showLess()).toBeInTheDocument(); // that click ended a selection
    window.getSelection()!.removeAllRanges();

    fireEvent.click(reviewRow().querySelector('.feed-time')!);
    expect(showAll()).toBeInTheDocument();
  });

  it('shows the whole text with the same safe AgentText: a link is its text alone, never a link or its target', () => {
    const attack = `${'x '.repeat(110)}<img src=x onerror="alert(1)"> [click](javascript:alert(1)) ![pic](https://evil.example/p.png) \`npm test\``;
    const { container } = render(
      <ActivityFeed
        office={office({ type: 'message', from: 'lead', to: 'you', text: attack, at: time(9, 0, 0) })}
        agent={null}
        onShowEveryone={() => {}}
      />,
    );
    fireEvent.click(showAll());
    expect(container.querySelector('a, img')).toBeNull();
    const full = controlled(showLess());
    expect(full.textContent).toContain('<img src=x onerror="alert(1)"> click pic npm test');
    expect(full.textContent).not.toMatch(/javascript|evil|\]\(/);
    expect(full.querySelector('code')).toHaveTextContent('npm test');
  });

  it('keeps short messages and state changes as plain rows, with no toggle', () => {
    render(<ActivityFeed office={longRun} agent={null} onShowEveryone={() => {}} />);
    expect(screen.getAllByRole('button')).toHaveLength(1);
    expect(screen.getByText('to Lead/PM: Short one.')).toBeInTheDocument();
    expect(document.querySelectorAll('.feed-line.long')).toHaveLength(1);
  });

  it('keeps a row open when new activity arrives, and opens no other', () => {
    const { rerender } = render(<ActivityFeed office={longRun} agent={null} onShowEveryone={() => {}} />);
    fireEvent.click(showAll());
    const more = officeReducer(longRun, {
      type: 'message',
      from: 'frontend',
      to: 'lead',
      text: `Second review. ${'More findings here. '.repeat(20)}`,
      at: time(9, 1, 0),
    });
    rerender(<ActivityFeed office={more} agent={null} onShowEveryone={() => {}} />);
    expect(controlled(showLess())).toHaveTextContent('All done.');
    expect(showAll().closest('li')!.textContent).toContain('Second review.');
  });
});

describe('the rows that matter to you stand out, with a word as well as a colour', () => {
  const flagged = office(
    { type: 'state', agent: 'backend', state: 'needs-you', at: time(9, 0, 0) },
    { type: 'state', agent: 'frontend', state: 'error', at: time(9, 0, 1) },
    {
      type: 'message',
      from: 'backend',
      to: 'lead',
      text: 'IMPORTANT: to you. Needs you. Failed.',
      at: time(9, 0, 2),
    },
    { type: 'message', from: 'lead', to: 'you', text: 'All done.', at: time(9, 0, 3) },
    { type: 'state', agent: 'reviewer', state: 'reading', at: time(9, 0, 4) },
  );

  it('a message to you, an approval wait and a failure: each with its own label', () => {
    render(<ActivityFeed office={flagged} agent={null} onShowEveryone={() => {}} />);
    expect(lines()).toEqual([
      '09:00:04 | Reviewer | Reading',
      '09:00:03 | Lead/PM | To you | to you: All done.',
      '09:00:02 | Backend dev | to Lead/PM: IMPORTANT: to you. Needs you. Failed.',
      '09:00:01 | Frontend dev | Failed | Error',
      '09:00:00 | Backend dev | Needs you',
    ]);
    const classes = [...document.querySelectorAll('.feed-line')].map((li) => li.className);
    expect(classes).toEqual([
      'feed-line',
      'feed-line flagged to-you',
      'feed-line',
      'feed-line flagged failed',
      'feed-line flagged needs-you',
    ]);
  });

  it('an approval row says "Needs you" once, then its task when it has one', () => {
    const asking = office(api, {
      type: 'state',
      agent: 'backend',
      state: 'needs-you',
      taskId: 'api',
      at: time(9, 0, 0),
    });
    render(<ActivityFeed office={asking} agent={null} onShowEveryone={() => {}} />);
    expect(lines()).toEqual(['09:00:00 | Backend dev | Needs you | Board and item API']);
  });

  it('an ordinary row whose text says "IMPORTANT: to you" gets no flag, no border and no label', () => {
    render(<ActivityFeed office={flagged} agent={null} onShowEveryone={() => {}} />);
    const bait = screen.getByText(/IMPORTANT: to you/).closest('li')!;
    expect(bait).not.toHaveClass('flagged');
    expect(bait.querySelector('.feed-flag')).toBeNull();
    expect(document.querySelectorAll('.feed-flag')).toHaveLength(3);
  });
});

describe("a review row: the Reviewer's report to the Lead opens on the review board (v3.1)", () => {
  const REPORT = [
    'I reviewed the routes.',
    '## Verdict',
    'Changes needed',
    '## Files checked',
    '- server/routes.ts',
    '## Findings',
    '- server/routes.ts:4: the id is never checked',
    '- server/routes.ts:9: errors are swallowed',
    '## Checks run',
    '- Read server/routes.ts',
    '## Left for the Lead',
    'None',
  ].join('\n');
  const reviewed = (from: 'reviewer' | 'backend', text = REPORT) =>
    office({ type: 'message', from, to: 'lead', text, at: time(10, 0, 0) });

  it('reads "Review: <verdict>, <findings>", has an "Open review" button and no Show all', () => {
    const onOpenReview = vi.fn();
    render(
      <ActivityFeed
        office={reviewed('reviewer')}
        agent={null}
        onShowEveryone={() => {}}
        onOpenReview={onOpenReview}
      />,
    );
    expect(lines()).toEqual([
      '10:00:00 | Reviewer | to Lead/PM: Review: Changes needed, 2 findings | Open review',
    ]);
    expect(screen.queryByRole('button', { name: 'Show all' })).toBeNull();
    const open = screen.getByRole('button', { name: 'Open review' });
    expect(open).toHaveAttribute('aria-haspopup', 'dialog');
    fireEvent.click(open);
    expect(onOpenReview).toHaveBeenCalledTimes(1);
    expect(onOpenReview).toHaveBeenCalledWith(time(10, 0, 0));
  });

  it('opens on a click on the row too, but not on one that ends a selection', () => {
    const onOpenReview = vi.fn();
    render(
      <ActivityFeed
        office={reviewed('reviewer')}
        agent={null}
        onShowEveryone={() => {}}
        onOpenReview={onOpenReview}
      />,
    );
    const row = document.querySelector('.feed-line')!;
    const selection = vi.spyOn(window, 'getSelection').mockReturnValue({
      isCollapsed: false,
      toString: () => 'Changes',
    } as Selection);
    fireEvent.click(row.querySelector('.feed-what')!);
    expect(onOpenReview).not.toHaveBeenCalled();
    selection.mockRestore();
    fireEvent.click(row.querySelector('.feed-what')!);
    expect(onOpenReview).toHaveBeenCalledWith(time(10, 0, 0));
  });

  it('shows a report that does not follow the format as its text, still opening on the board', () => {
    render(
      <ActivityFeed
        office={reviewed('reviewer', 'Looked fine to me.')}
        agent={null}
        onShowEveryone={() => {}}
      />,
    );
    expect(lines()).toEqual(['10:00:00 | Reviewer | to Lead/PM: Looked fine to me. | Open review']);
  });

  it('a report in perfect review shape from the Backend dev is an ordinary row: who sent it decides', () => {
    render(<ActivityFeed office={reviewed('backend')} agent={null} onShowEveryone={() => {}} />);
    expect(screen.queryByRole('button', { name: 'Open review' })).toBeNull();
    expect(screen.getByRole('button', { name: 'Show all' })).toBeInTheDocument();
    expect(document.querySelector('.feed-what')!.textContent).not.toContain('Review: Changes needed');
  });
});
