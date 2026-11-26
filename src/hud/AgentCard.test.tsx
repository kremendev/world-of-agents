import { createRef } from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { agentById } from '../office/roster';
import { INITIAL_OFFICE, officeReducer } from '../state/office';
import { AgentCard } from './AgentCard';

const handlers = () => ({ onFollow: vi.fn(), onShowActivity: vi.fn(), onClose: vi.fn() });

describe('the agent card (4d.4)', () => {
  it("shows today's panel without the 2D portrait: name, species and model, the model's look, state, task, tools", () => {
    let office = officeReducer(INITIAL_OFFICE, {
      type: 'task',
      taskId: 't1',
      title: 'Build the cards',
      owner: 'frontend',
      status: 'in-progress',
      at: 1,
    });
    office = officeReducer(office, {
      type: 'state',
      agent: 'frontend',
      state: 'writing',
      taskId: 't1',
      at: 2,
    });
    const { container } = render(
      <AgentCard office={office} agent="frontend" following={false} {...handlers()} />,
    );
    const agent = agentById('frontend');
    expect(screen.getByRole('heading', { level: 2, name: 'Frontend dev' })).toBeInTheDocument();
    expect(screen.getByText(`${agent.race} · model: ${agent.model}`)).toBeInTheDocument();
    // the look of the keep's model, not of the 2D sprite (Dima, 20 Nov)
    expect(screen.getByText(agent.keepLook)).toBeInTheDocument();
    expect(screen.queryByText(agent.look)).toBeNull();
    expect(screen.getByText('writing')).toBeInTheDocument();
    expect(screen.getByText('Build the cards')).toBeInTheDocument();
    expect(screen.getByText('In progress')).toBeInTheDocument();
    expect(screen.getByText(agent.tools)).toBeInTheDocument();
    expect(container.querySelector('.sprite-tile')).toBeNull();
  });

  it("adds a guild lead's specialists at work, as the 2D hall's name plate does (D13)", () => {
    const office = officeReducer(INITIAL_OFFICE, {
      type: 'specialist',
      lead: 'frontend',
      name: 'react-dev',
      working: true,
      at: 1,
    });
    render(<AgentCard office={office} agent="frontend" following={false} {...handlers()} />);
    expect(screen.getByText('+ React dev')).toBeInTheDocument();
  });

  it('closes, follows and shows the agent in Activity on its buttons', () => {
    const h = handlers();
    render(<AgentCard office={INITIAL_OFFICE} agent="designer" following={false} {...h} />);
    fireEvent.click(screen.getByRole('button', { name: 'Close the card' }));
    fireEvent.click(screen.getByRole('button', { name: 'Follow' }));
    fireEvent.click(screen.getByRole('button', { name: 'Show in Activity' }));
    expect(h.onClose).toHaveBeenCalledOnce();
    expect(h.onFollow).toHaveBeenCalledOnce();
    expect(h.onShowActivity).toHaveBeenCalledOnce();
  });

  it('Follow is a toggle: pressed and "Following" while on', () => {
    const h = handlers();
    const { rerender } = render(
      <AgentCard office={INITIAL_OFFICE} agent="designer" following={false} {...h} />,
    );
    expect(screen.getByRole('button', { name: 'Follow' })).toHaveAttribute('aria-pressed', 'false');
    rerender(<AgentCard office={INITIAL_OFFICE} agent="designer" following {...h} />);
    expect(screen.getByRole('button', { name: 'Following' })).toHaveAttribute('aria-pressed', 'true');
  });

  it('Follow looks like an ordinary button while off, in the primary colours only while on (4.0.1)', () => {
    const h = handlers();
    const { rerender } = render(
      <AgentCard office={INITIAL_OFFICE} agent="designer" following={false} {...h} />,
    );
    const off = screen.getByRole('button', { name: 'Follow' });
    expect(off).toHaveClass('hud-button');
    expect(off).not.toHaveClass('hud-primary');
    // as plain as "Show in Activity" beside it
    expect(off.className).toBe(screen.getByRole('button', { name: 'Show in Activity' }).className);
    rerender(<AgentCard office={INITIAL_OFFICE} agent="designer" following {...h} />);
    expect(screen.getByRole('button', { name: 'Following' })).toHaveClass('hud-button', 'hud-primary');
  });

  it('gives its heading to a ref, focusable, for Show me to move the focus to', () => {
    const ref = createRef<HTMLHeadingElement>();
    render(
      <AgentCard office={INITIAL_OFFICE} agent="lead" following={false} headingRef={ref} {...handlers()} />,
    );
    expect(ref.current).toHaveTextContent('Lead/PM');
    expect(ref.current?.tabIndex).toBe(-1);
  });

  it('keeps its heading and close button out of what scrolls, the panel named by that heading (Dima, 21 Nov)', () => {
    const { container } = render(
      <AgentCard office={INITIAL_OFFICE} agent="backend" following={false} {...handlers()} />,
    );
    const body = container.querySelector('.hud-card-body') as HTMLElement;
    const heading = screen.getByRole('heading', { level: 2, name: 'Backend dev' });
    expect(body).not.toContainElement(heading);
    expect(body).not.toContainElement(screen.getByRole('button', { name: 'Close the card' }));
    // one heading, which the panel under it is named by
    expect(screen.getAllByRole('heading')).toHaveLength(1);
    expect(within(body).getByRole('region', { name: 'Backend dev' })).toBeInTheDocument();
    // the rest scrolls with it
    expect(body).toContainElement(screen.getByRole('button', { name: 'Follow' }));
    expect(body).toContainElement(screen.getByText(agentById('backend').tools));
  });
});
