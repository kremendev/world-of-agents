import { fireEvent, render, screen, within } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { INITIAL_OFFICE, officeReducer } from '../state/office';
import { roomBadges, type View } from './rooms';
import { RoomsRail } from './RoomsRail';

const rail = (props: Partial<Parameters<typeof RoomsRail>[0]> = {}) =>
  render(
    <RoomsRail
      badges={roomBadges(INITIAL_OFFICE)}
      view="overview"
      onView={() => {}}
      cutaway={false}
      onCutaway={() => {}}
      {...props}
    />,
  );

const rooms = () => within(screen.getByRole('navigation', { name: 'Rooms' })).getAllByRole('listitem');

describe('the rooms rail (4d.3)', () => {
  it("offers the whole keep, then every room in the map's order, named with its agents", () => {
    rail();
    expect(screen.getByRole('heading', { name: 'Rooms' })).toBeInTheDocument();
    expect(
      rooms().map((li) => within(li).getByRole('button').getAttribute('aria-label') ?? li.textContent),
    ).toEqual([
      'Whole keep',
      'War hall',
      'Library',
      'Design studio',
      'Workshop',
      'The Forge',
      'Tavern, 1 agent',
      'Training yard, 1 agent',
      'Courtyard, 1 agent',
      'Garden, 2 agents',
    ]);
  });

  it('shows a badge for the eye only, in the needs-you colours when someone there needs you', () => {
    const office = officeReducer(INITIAL_OFFICE, {
      type: 'state',
      agent: 'backend',
      state: 'needs-you',
      at: 1,
    });
    const { container } = rail({ badges: roomBadges(office) });
    const workshop = screen.getByRole('button', { name: 'Workshop, 1 agent, one needs you' });
    const badge = workshop.querySelector('.hud-badge') as HTMLElement;
    expect(badge).toHaveTextContent('1');
    expect(badge).toHaveClass('needs');
    expect(badge).toHaveAttribute('aria-hidden', 'true');
    const garden = screen.getByRole('button', { name: 'Garden, 2 agents' });
    expect(garden.querySelector('.hud-badge')).not.toHaveClass('needs');
    // no badge where nobody is
    expect(screen.getByRole('button', { name: 'The Forge' }).querySelector('.hud-badge')).toBeNull();
    expect(container.querySelectorAll('.hud-badge.needs')).toHaveLength(1);
  });

  it('presses the view in sight, and none once the camera moved by hand', () => {
    const { rerender } = rail({ view: 'workshop' });
    const pressed = () =>
      screen.queryAllByRole('button', { pressed: true }).filter((b) => b.closest('.hud-rooms') !== null);
    expect(pressed().map((b) => b.textContent)).toEqual(['Workshop']);
    rerender(
      <RoomsRail
        badges={roomBadges(INITIAL_OFFICE)}
        view={null}
        onView={() => {}}
        cutaway={false}
        onCutaway={() => {}}
      />,
    );
    expect(pressed()).toEqual([]);
  });

  it('sends the camera to the view pressed', () => {
    const onView = vi.fn<(v: View) => void>();
    rail({ onView });
    fireEvent.click(screen.getByRole('button', { name: 'Whole keep' }));
    fireEvent.click(screen.getByRole('button', { name: 'Library' }));
    expect(onView.mock.calls).toEqual([['overview'], ['library']]);
  });

  it('has a Cutaway toggle that says On or Off beside its name', () => {
    const onCutaway = vi.fn();
    const { rerender } = rail({ onCutaway });
    const toggle = screen.getByRole('button', { name: 'Cutaway' });
    expect(toggle).toHaveAttribute('aria-pressed', 'false');
    expect(toggle).toHaveTextContent('Off');
    fireEvent.click(toggle);
    expect(onCutaway).toHaveBeenCalledOnce();
    rerender(
      <RoomsRail
        badges={roomBadges(INITIAL_OFFICE)}
        view={null}
        onView={() => {}}
        cutaway
        onCutaway={onCutaway}
      />,
    );
    expect(screen.getByRole('button', { name: 'Cutaway' })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('button', { name: 'Cutaway' })).toHaveTextContent('On');
  });
});
