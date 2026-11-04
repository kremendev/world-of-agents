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
      '14:30:59 | Backend dev | to you: Routes are up.',
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
      '14:30:59 | Backend dev | to you: Routes are up.',
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
