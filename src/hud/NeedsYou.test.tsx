import { fireEvent, render, screen, within } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { NeedsYou } from './NeedsYou';

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
  });
});
