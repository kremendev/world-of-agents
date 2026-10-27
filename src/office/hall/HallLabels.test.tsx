import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import type { AgentId, OfficeEvent } from '../../events/schema';
import { INITIAL_OFFICE, officeReducer, type OfficeState } from '../../state/office';
import { HallLabels, type AgentTag } from './HallLabels';
import { hallStations } from './layout';

const stations = hallStations();
const owners: AgentId[] = ['lead', 'designer', 'backend', 'frontend', 'reviewer', 'backend', 'frontend'];
const tasks = (n: number): OfficeEvent[] =>
  owners.slice(0, n).map((owner, i) => ({
    type: 'task',
    taskId: `t${i}`,
    title: `Task ${i}`,
    owner,
    status: 'todo',
    at: 0,
  }));
const office = (...events: OfficeEvent[]) => events.reduce(officeReducer, INITIAL_OFFICE);

const tag = (speech: string | null, more: Partial<AgentTag> = {}): AgentTag => ({
  id: 'lead',
  x: 100,
  y: 140,
  width: 20,
  height: 22,
  state: 'thinking',
  smashing: false,
  speech,
  ...more,
});

const labels = (
  o: OfficeState,
  agents: AgentTag[] = [],
  selected: AgentId = 'lead',
  onSelect: (id: AgentId) => void = () => {},
) => (
  <HallLabels u={2} stations={stations} office={o} agents={agents} selected={selected} onSelect={onSelect} />
);

const tileTexts = (container: HTMLElement) =>
  [...container.querySelectorAll('.dashboard-tile')].map((t) => t.textContent);

describe('HallLabels', () => {
  it('says "No tasks yet" on an empty dashboard', () => {
    render(labels(INITIAL_OFFICE));
    expect(screen.getByText('No tasks yet')).toBeInTheDocument();
  });

  it('shows up to five tiles', () => {
    const { container } = render(labels(office(...tasks(5))));
    expect(tileTexts(container)).toEqual(['L', 'D', 'B', 'F', 'R']);
  });

  it('shows four tiles and "+N" in the fifth slot when there are more', () => {
    const { container } = render(labels(office(...tasks(7))));
    expect(tileTexts(container)).toEqual(['L', 'D', 'B', 'F', '+3']);
    expect(screen.getByText('0/7 done')).toBeInTheDocument();
  });

  it('labels the furnace "cold" or "N working"', () => {
    const busy = office(
      { type: 'state', agent: 'lead', state: 'thinking', at: 0 },
      { type: 'state', agent: 'backend', state: 'writing', at: 0 },
    );
    const { rerender } = render(labels(INITIAL_OFFICE));
    expect(screen.getByText('Furnace · cold')).toBeInTheDocument();
    rerender(labels(busy));
    expect(screen.getByText('Furnace · 2 working')).toBeInTheDocument();
  });

  it('renders speech as plain text, never as HTML', () => {
    const attack = '<img src=x onerror="alert(1)">';
    const { container } = render(labels(INITIAL_OFFICE, [tag(attack)]));
    expect(container.querySelector('img')).toBeNull();
    expect(screen.getByText(attack)).toBeInTheDocument();
  });

  it('shows the state bubble, "!!" for a smashing orc, and no bubble while walking', () => {
    const { container, rerender } = render(
      labels(INITIAL_OFFICE, [tag(null, { id: 'backend', state: 'writing', smashing: true })]),
    );
    expect(container.querySelector('.state-bubble')?.textContent).toBe('writing!!');
    rerender(labels(INITIAL_OFFICE, [tag(null, { state: 'walking' })]));
    expect(container.querySelector('.state-bubble')).toBeNull();
  });

  describe('agent buttons', () => {
    const everyone = [
      tag(null, { id: 'lead' }),
      tag(null, { id: 'backend', state: 'writing' }),
      tag(null, { id: 'reviewer', state: 'needs-you' }),
    ];

    it('puts a real, named button over each agent, visible to screen readers', () => {
      render(labels(INITIAL_OFFICE, everyone));
      expect(
        screen.getByRole('button', { name: 'Lead/PM, Goblin, Thinking. Show details' }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: 'Backend dev, Orc, Writing. Show details' }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: 'Reviewer, Skeleton, Needs you. Show details' }),
      ).toBeInTheDocument();
    });

    it('marks only the selected agent as pressed', () => {
      render(labels(INITIAL_OFFICE, everyone, 'backend'));
      const pressed = screen.getAllByRole('button', { pressed: true });
      expect(pressed.map((b) => b.getAttribute('aria-label'))).toEqual([
        'Backend dev, Orc, Writing. Show details',
      ]);
    });

    it('selects the agent it is over when clicked', () => {
      const onSelect = vi.fn();
      render(labels(INITIAL_OFFICE, everyone, 'lead', onSelect));
      fireEvent.click(screen.getByRole('button', { name: /^Reviewer/ }));
      expect(onSelect).toHaveBeenCalledWith('reviewer');
    });

    it('sit outside the hidden text: screen readers get the buttons, not the plaques and bubbles twice', () => {
      render(labels(INITIAL_OFFICE, [tag('Next sprint: fewer bugs.')]));
      for (const text of ['Great hall', 'Furnace · cold', 'Next sprint: fewer bugs.', 'thinking']) {
        expect(screen.getByText(text).closest('[aria-hidden="true"]'), text).not.toBeNull();
      }
      expect(screen.getByRole('button', { name: /^Lead\/PM/ }).closest('[aria-hidden="true"]')).toBeNull();
    });
  });
});
