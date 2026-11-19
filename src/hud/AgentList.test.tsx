import { fireEvent, render, screen, within } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import type { AgentId, AgentState } from '../events/schema';
import { INITIAL_OFFICE, officeReducer, type OfficeState } from '../state/office';
import { agentLabel } from './agents';
import { AgentList } from './AgentList';

const set = (office: OfficeState, agent: AgentId, state: AgentState): OfficeState =>
  officeReducer(office, { type: 'state', agent, state, at: 1 });

const buttons = () => within(screen.getByRole('group', { name: 'Agents' })).getAllByRole('button');

describe('the agent list (4d.4)', () => {
  it("has a button per agent, in the roster's order, each with its name and state chip", () => {
    const office = set(INITIAL_OFFICE, 'frontend', 'writing');
    render(<AgentList office={office} card={null} onToggle={() => {}} />);
    expect(buttons().map((b) => b.getAttribute('aria-label'))).toEqual([
      'Lead/PM, Idle',
      'Designer, Idle',
      'Frontend dev, Writing',
      'Backend dev, Idle',
      'Reviewer, Idle',
    ]);
    expect(buttons().map((b) => b.textContent)).toEqual([
      'Lead/PMidle',
      'Designeridle',
      'Frontend devwriting',
      'Backend devidle',
      'Revieweridle',
    ]);
  });

  it('presses the agent whose card is open, and no other', () => {
    render(<AgentList office={INITIAL_OFFICE} card="designer" onToggle={() => {}} />);
    expect(buttons().map((b) => b.getAttribute('aria-pressed'))).toEqual([
      'false',
      'true',
      'false',
      'false',
      'false',
    ]);
  });

  it('marks an agent that needs you and one that failed', () => {
    let office = set(INITIAL_OFFICE, 'backend', 'needs-you');
    office = set(office, 'reviewer', 'error');
    render(<AgentList office={office} card={null} onToggle={() => {}} />);
    const [, , , backend, reviewer] = buttons();
    expect(backend).toHaveClass('needs');
    expect(reviewer).toHaveClass('error');
    expect(
      buttons().filter((b) => b.classList.contains('needs') || b.classList.contains('error')),
    ).toHaveLength(2);
  });

  it('opens or closes the card on a click', () => {
    const onToggle = vi.fn();
    render(<AgentList office={INITIAL_OFFICE} card={null} onToggle={onToggle} />);
    fireEvent.click(screen.getByRole('button', { name: /^Reviewer/ }));
    expect(onToggle).toHaveBeenCalledWith('reviewer');
  });

  it("says copies running and a guild lead's specialists at work in words", () => {
    let office = officeReducer(INITIAL_OFFICE, {
      type: 'state',
      agent: 'frontend',
      state: 'writing',
      copies: 2,
      at: 1,
    });
    office = officeReducer(office, {
      type: 'specialist',
      lead: 'frontend',
      name: 'react-dev',
      working: true,
      at: 2,
    });
    expect(agentLabel(office, 'frontend')).toBe('Frontend dev, Writing, 2 copies running, with React dev');
  });
});
