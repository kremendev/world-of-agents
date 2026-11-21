import { fireEvent, render, screen } from '@testing-library/react';
import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { Drawer, type DrawerTab } from './Drawer';

function Harness({ open = true, unread = 0, onClose = () => {}, onOpen = () => {}, handle = true }) {
  const [tab, setTab] = useState<DrawerTab>('activity');
  return (
    <Drawer
      open={open}
      tab={tab}
      onTab={setTab}
      onOpen={onOpen}
      onClose={onClose}
      unread={unread}
      activity={<p>the feed</p>}
      tasks={<p>the board</p>}
      drawerId="the-drawer"
      handle={handle}
    />
  );
}

describe('the drawer (4d.5)', () => {
  it('has two tabs, Activity first and chosen, each controlling its panel', () => {
    render(<Harness />);
    const tabs = screen.getAllByRole('tab');
    expect(tabs.map((t) => t.textContent)).toEqual(['Activity', 'Task board']);
    expect(tabs.map((t) => t.getAttribute('aria-selected'))).toEqual(['true', 'false']);
    expect(tabs.map((t) => t.tabIndex)).toEqual([0, -1]);
    const panel = screen.getByRole('tabpanel');
    expect(panel).toHaveTextContent('the feed');
    expect(panel.id).toBe(tabs[0]!.getAttribute('aria-controls'));
    expect(panel).toHaveAttribute('aria-labelledby', tabs[0]!.id);
  });

  it('moves between the tabs with the arrow keys, Home and End, and takes the focus along', () => {
    render(<Harness />);
    const [activity, tasks] = screen.getAllByRole('tab') as [HTMLElement, HTMLElement];
    activity.focus();
    fireEvent.keyDown(activity, { key: 'ArrowRight' });
    expect(tasks).toHaveAttribute('aria-selected', 'true');
    expect(tasks).toHaveFocus();
    expect(screen.getByRole('tabpanel')).toHaveTextContent('the board');
    fireEvent.keyDown(tasks, { key: 'ArrowRight' });
    expect(activity).toHaveFocus();
    fireEvent.keyDown(activity, { key: 'ArrowLeft' });
    expect(tasks).toHaveFocus();
    fireEvent.keyDown(tasks, { key: 'Home' });
    expect(activity).toHaveFocus();
    fireEvent.keyDown(activity, { key: 'End' });
    expect(tasks).toHaveFocus();
    fireEvent.click(activity);
    expect(activity).toHaveAttribute('aria-selected', 'true');
  });

  it('keeps the hidden panel mounted, so the feed keeps what it had', () => {
    render(<Harness />);
    fireEvent.click(screen.getByRole('tab', { name: 'Task board' }));
    expect(screen.getByText('the feed', { selector: 'p' })).not.toBeVisible();
    expect(screen.getByText('the board')).toBeVisible();
  });

  it('closes on its button; closed, a handle at the edge opens it and says what waits for you', () => {
    const onClose = vi.fn();
    const onOpen = vi.fn();
    const { rerender } = render(<Harness onClose={onClose} onOpen={onOpen} />);
    expect(screen.queryByRole('button', { name: /^Activity/ })).toBeNull();
    fireEvent.click(screen.getByRole('button', { name: 'Close the drawer' }));
    expect(onClose).toHaveBeenCalledOnce();

    rerender(<Harness open={false} unread={2} onClose={onClose} onOpen={onOpen} />);
    expect(screen.queryByRole('complementary')).toBeNull();
    const handle = screen.getByRole('button', { name: 'Activity, 2 for you' });
    expect(handle).toHaveAttribute('aria-expanded', 'false');
    // two words, so text read whole gets the name it has (WCAG 2.5.3, Dima's axe scan, 21 Nov)
    expect(handle.textContent).toBe('Activity 2');
    fireEvent.click(handle);
    expect(onOpen).toHaveBeenCalledOnce();

    rerender(<Harness open={false} unread={0} />);
    expect(screen.getByRole('button', { name: 'Activity' })).toHaveAttribute('aria-controls', 'the-drawer');
  });

  it('has its own id, and no handle where the handle lives elsewhere (a phone, Dima, 21 Nov)', () => {
    const { container, rerender } = render(<Harness handle={false} />);
    expect(container.querySelector('aside')).toHaveAttribute('id', 'the-drawer');
    rerender(<Harness open={false} unread={2} handle={false} />);
    expect(screen.queryByRole('button', { name: /^Activity/ })).toBeNull();
  });
});
