import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import type { AgentId, OfficeEvent } from '../../events/schema';
import { INITIAL_OFFICE, officeReducer } from '../../state/office';
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

const tag = (speech: string | null): AgentTag => ({
  id: 'lead',
  x: 100,
  y: 140,
  height: 22,
  state: 'thinking',
  smashing: false,
  speech,
});

const tileTexts = (container: HTMLElement) =>
  [...container.querySelectorAll('.dashboard-tile')].map((t) => t.textContent);

describe('HallLabels', () => {
  it('says "No tasks yet" on an empty dashboard', () => {
    render(<HallLabels u={2} stations={stations} office={INITIAL_OFFICE} agents={[]} />);
    expect(screen.getByText('No tasks yet')).toBeInTheDocument();
  });

  it('shows up to five tiles', () => {
    const { container } = render(
      <HallLabels u={2} stations={stations} office={office(...tasks(5))} agents={[]} />,
    );
    expect(tileTexts(container)).toEqual(['L', 'D', 'B', 'F', 'R']);
  });

  it('shows four tiles and "+N" in the fifth slot when there are more', () => {
    const { container } = render(
      <HallLabels u={2} stations={stations} office={office(...tasks(7))} agents={[]} />,
    );
    expect(tileTexts(container)).toEqual(['L', 'D', 'B', 'F', '+3']);
    expect(screen.getByText('0/7 done')).toBeInTheDocument();
  });

  it('labels the furnace "cold" or "N working"', () => {
    const busy = office(
      { type: 'state', agent: 'lead', state: 'thinking', at: 0 },
      { type: 'state', agent: 'backend', state: 'writing', at: 0 },
    );
    const { rerender } = render(<HallLabels u={2} stations={stations} office={INITIAL_OFFICE} agents={[]} />);
    expect(screen.getByText('Furnace · cold')).toBeInTheDocument();
    rerender(<HallLabels u={2} stations={stations} office={busy} agents={[]} />);
    expect(screen.getByText('Furnace · 2 working')).toBeInTheDocument();
  });

  it('renders speech as plain text, never as HTML', () => {
    const attack = '<img src=x onerror="alert(1)">';
    const { container } = render(
      <HallLabels u={2} stations={stations} office={INITIAL_OFFICE} agents={[tag(attack)]} />,
    );
    expect(container.querySelector('img')).toBeNull();
    expect(screen.getByText(attack)).toBeInTheDocument();
  });

  it('shows the state bubble, "!!" for a smashing orc, and no bubble while walking', () => {
    const { container, rerender } = render(
      <HallLabels
        u={2}
        stations={stations}
        office={INITIAL_OFFICE}
        agents={[{ ...tag(null), id: 'backend', state: 'writing', smashing: true }]}
      />,
    );
    expect(container.querySelector('.state-bubble')?.textContent).toBe('writing!!');
    rerender(
      <HallLabels
        u={2}
        stations={stations}
        office={INITIAL_OFFICE}
        agents={[{ ...tag(null), state: 'walking' }]}
      />,
    );
    expect(container.querySelector('.state-bubble')).toBeNull();
  });
});
