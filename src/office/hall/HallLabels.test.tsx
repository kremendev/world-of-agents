import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import type { AgentId, OfficeEvent } from '../../events/schema';
import { INITIAL_OFFICE, officeReducer, type OfficeState } from '../../state/office';
import { HallLabels, type AgentTag } from './HallLabels';
import { hallStations } from './layout';
import { RANK } from './settle';

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

  it('puts the copies chip on the name plate and in the button label while copies run', () => {
    const two = office({ type: 'state', agent: 'backend', state: 'writing', copies: 2, at: 0 });
    const { container, rerender } = render(labels(two, [tag(null, { id: 'backend', state: 'writing' })]));
    expect(container.querySelector('.nameplate .copies')?.textContent).toBe('x2');
    expect(
      screen.getByRole('button', { name: 'Backend dev, Orc, Writing, 2 copies running. Show details' }),
    ).toBeInTheDocument();

    rerender(labels(INITIAL_OFFICE, [tag(null, { id: 'backend', state: 'writing' })]));
    expect(container.querySelector('.copies')).toBeNull();
    expect(
      screen.getByRole('button', { name: 'Backend dev, Orc, Writing. Show details' }),
    ).toBeInTheDocument();
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
        screen.getByRole('button', { name: 'Reviewer, Skeleton, Needs you. Show details and reviews' }),
      ).toBeInTheDocument();
    });

    it('says only on the Reviewer that it opens a dialog too: the review board (v3.1, D9)', () => {
      render(labels(INITIAL_OFFICE, everyone));
      const popups = screen.getAllByRole('button').filter((b) => b.hasAttribute('aria-haspopup'));
      expect(popups.map((b) => [b.dataset.agent, b.getAttribute('aria-haspopup')])).toEqual([
        ['reviewer', 'dialog'],
      ]);
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

describe('HallLabels at small scales, where text keeps its minimum size', () => {
  const at = (u: number, agents: AgentTag[] = []) =>
    render(
      <HallLabels
        u={u}
        stations={stations}
        office={INITIAL_OFFICE}
        agents={agents}
        selected="lead"
        onSelect={() => {}}
      />,
    );

  it('name plates drop the race under 1 CSS px per art px', () => {
    const { unmount } = at(1);
    expect(screen.getByText('Backend dev · Orc')).toBeInTheDocument();
    unmount();
    at(0.99);
    expect(screen.getByText('Backend dev')).toBeInTheDocument();
    expect(screen.queryByText('Backend dev · Orc')).toBeNull();
  });

  it('the furnace label says only how busy it is under 1.2', () => {
    const { unmount } = at(1.2);
    expect(screen.getByText('Furnace · cold')).toBeInTheDocument();
    unmount();
    at(1.19);
    expect(screen.getByText('cold')).toBeInTheDocument();
    expect(screen.queryByText('Furnace · cold')).toBeNull();
  });

  it('ranks every label, what you must not miss first', () => {
    const { container } = at(2, [
      tag(null, { id: 'lead', state: 'needs-you' }),
      tag(null, { id: 'backend', state: 'writing' }),
      tag('Hello', { id: 'designer', state: 'idle' }),
      tag(null, { id: 'reviewer', state: 'error' }),
    ]);
    const rank = (selector: string) => Number(container.querySelector<HTMLElement>(selector)?.dataset.rank);
    const bubble = (id: string) => rank(`.agent-tag[data-agent="${id}"] .state-bubble`);
    expect(bubble('lead')).toBe(RANK.urgent);
    expect(bubble('reviewer')).toBe(RANK.urgent);
    expect(bubble('backend')).toBe(RANK.working);
    expect(bubble('designer')).toBe(RANK.idle);
    expect(rank('.speech')).toBe(RANK.speech);
    expect(rank('.nameplate')).toBe(RANK.plate);
    expect(rank('.plaque')).toBe(RANK.plaque);
    expect(rank('.dashboard')).toBe(RANK.fixed);
    expect(rank('.furnace-label')).toBe(RANK.sign);
    expect(rank('.you-sign')).toBe(RANK.sign);
  });

  it('settles after each render: a label that would be covered is hidden before it shows', () => {
    const rect = vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockImplementation(function (
      this: HTMLElement,
    ) {
      const hall = this.classList.contains('hall-labels');
      const size = hall ? 1000 : 20;
      return { left: 0, top: 0, right: size, bottom: size, width: size, height: size } as DOMRect;
    });
    const { container } = at(2);
    expect(container.querySelector<HTMLElement>('.dashboard')!.style.visibility).toBe('');
    expect(container.querySelector<HTMLElement>('.plaque')!.style.visibility).toBe('hidden');
    rect.mockRestore();
  });
});
