import { fireEvent, render, screen, within } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { NeedsYou, PHONE_ROWS } from './NeedsYou';

describe('the needs-you banner (4d.7, D18)', () => {
  it('is nothing while nobody waits for you', () => {
    const { container } = render(<NeedsYou waiting={[]} onShowMe={() => {}} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('has a row per agent that waits, each with its own Show me', () => {
    const onShowMe = vi.fn();
    render(<NeedsYou waiting={['frontend', 'backend']} onShowMe={onShowMe} />);
    const banner = screen.getByRole('region', { name: 'Needs you' });
    expect(
      within(banner)
        .getAllByRole('listitem')
        .map((li) => li.textContent),
    ).toEqual([
      'Frontend dev needs your approval in Claude CodeShow me',
      'Backend dev needs your approval in Claude CodeShow me',
    ]);
    fireEvent.click(screen.getByRole('button', { name: 'Show me Backend dev' }));
    expect(onShowMe).toHaveBeenCalledWith('backend');
    expect(screen.queryByText(/more$/)).toBeNull();
  });

  it('shows three agents at most, then "and N more"', () => {
    render(
      <NeedsYou waiting={['lead', 'designer', 'frontend', 'backend', 'reviewer']} onShowMe={() => {}} />,
    );
    expect(screen.getAllByRole('button', { name: /^Show me/ })).toHaveLength(3);
    expect(screen.getByText('and 2 more')).toBeInTheDocument();
    // words, not a button, where nothing is given to open
    expect(screen.queryByRole('button', { name: /^and 2 more/ })).toBeNull();
  });

  it('on a phone: two rows, then "and N more" as a button to everyone waiting (Dima, 25 Nov)', () => {
    const onMore = vi.fn();
    render(
      <NeedsYou
        waiting={['designer', 'frontend', 'backend']}
        onShowMe={() => {}}
        rows={PHONE_ROWS}
        onMore={onMore}
      />,
    );
    expect(PHONE_ROWS).toBe(2);
    expect(
      screen.getAllByRole('button', { name: /^Show me/ }).map((b) => b.getAttribute('aria-label')),
    ).toEqual(['Show me Designer', 'Show me Frontend dev']);
    const more = screen.getByRole('button', { name: 'and 1 more: everyone waiting, in Activity' });
    // its name starts with the words it shows
    expect(more).toHaveTextContent(/^and 1 more$/);
    fireEvent.click(more);
    expect(onMore).toHaveBeenCalledTimes(1);
  });

  it('on a phone with two waiting: both rows, and nothing more', () => {
    render(
      <NeedsYou waiting={['frontend', 'backend']} onShowMe={() => {}} rows={PHONE_ROWS} onMore={() => {}} />,
    );
    expect(screen.getAllByRole('button', { name: /^Show me/ })).toHaveLength(2);
    expect(screen.queryByRole('button', { name: /^and/ })).toBeNull();
  });
});
