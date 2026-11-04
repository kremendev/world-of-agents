import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import type { OfficeEvent } from '../events/schema';
import { INITIAL_OFFICE, officeReducer } from '../state/office';
import { AgentPanel } from './AgentPanel';

const office = (...events: OfficeEvent[]) => events.reduce(officeReducer, INITIAL_OFFICE);
const api: OfficeEvent = {
  type: 'task',
  taskId: 'api',
  title: 'Board and item API',
  owner: 'backend',
  status: 'in-progress',
  at: 0,
};
const activity = () =>
  within(screen.getByRole('list'))
    .getAllByRole('listitem')
    .map((li) => li.textContent);

describe('AgentPanel', () => {
  it('introduces the agent: name, race and v2 model, look, state chip and details', () => {
    render(
      <AgentPanel
        office={office(api, { type: 'state', agent: 'backend', state: 'writing', taskId: 'api', at: 0 })}
        agent="backend"
      />,
    );
    expect(screen.getByRole('heading', { level: 2, name: 'Backend dev' })).toBeInTheDocument();
    expect(screen.getByText('Orc · model in v2: Sonnet')).toBeInTheDocument();
    expect(screen.getByText('Huge forge hammer on the back, scars on jaw and arm')).toBeInTheDocument();
    expect(screen.getByText('writing', { selector: '.chip' })).toBeInTheDocument();

    const details = Object.fromEntries(
      [...document.querySelectorAll('.details dt')].map((dt) => [
        dt.textContent,
        dt.nextElementSibling?.textContent,
      ]),
    );
    expect(details).toEqual({
      'Current task': 'Board and item API',
      'Task status': 'In progress',
      'Tools in v2': 'Read, Grep, Glob, Write, Edit, Bash',
    });
  });

  it('live: the real model and tools, and the copies chip while there are copies', () => {
    const { rerender } = render(
      <AgentPanel
        office={office(api, { type: 'state', agent: 'backend', state: 'writing', copies: 2, at: 0 })}
        agent="backend"
        live
      />,
    );
    expect(screen.getByText('Orc · model: Sonnet')).toBeInTheDocument();
    expect(screen.getByText('x2', { selector: '.chip' })).toBeInTheDocument();
    const terms = [...document.querySelectorAll('.details dt')].map((dt) => dt.textContent);
    expect(terms).toEqual(['Current task', 'Task status', 'Tools']);

    rerender(
      <AgentPanel
        office={office(api, { type: 'state', agent: 'backend', state: 'writing', at: 1 })}
        agent="backend"
        live
      />,
    );
    expect(screen.queryByText('x2')).toBeNull();
  });

  it("shows the Lead's real tools: it starts agents and reads, and has no Write", () => {
    render(<AgentPanel office={INITIAL_OFFICE} agent="lead" live />);
    expect(screen.getByText('Agent, Read, Grep, Glob')).toBeInTheDocument();
  });

  it('says what a waiting agent waits for', () => {
    render(
      <AgentPanel
        office={office({ type: 'state', agent: 'frontend', state: 'waiting', at: 0 })}
        agent="frontend"
      />,
    );
    expect(screen.getByText('Waiting for the Designer. Not working while it waits.')).toBeInTheDocument();
  });

  it('shows "None" without a task and "Nothing yet." without activity', () => {
    render(<AgentPanel office={INITIAL_OFFICE} agent="lead" />);
    expect(screen.getAllByText('None')).toHaveLength(2);
    expect(screen.getByText('Nothing yet.')).toBeInTheDocument();
  });

  it("lists only this agent's activity, newest first", () => {
    const run = office(
      api,
      { type: 'state', agent: 'backend', state: 'reading', taskId: 'api', at: 0 },
      { type: 'message', from: 'lead', to: 'backend', text: "How's the API coming?", at: 1 },
      { type: 'message', from: 'designer', to: 'frontend', text: 'Screens are on your desk.', at: 2 },
      { type: 'state', agent: 'designer', state: 'done', at: 2 },
      { type: 'message', from: 'backend', to: 'you', text: 'Routes are up.', at: 3 },
      { type: 'state', agent: 'backend', state: 'writing', taskId: 'api', at: 4 },
    );
    render(<AgentPanel office={run} agent="backend" />);
    expect(activity()).toEqual([
      'Writing · Board and item API',
      'To you: Routes are up.',
      "From Lead/PM: How's the API coming?",
      'Reading · Board and item API',
    ]);
  });

  it('shows agent output as plain text, never as HTML', () => {
    const attack = '<img src=x onerror="alert(1)">';
    const { container } = render(
      <AgentPanel
        office={office({ type: 'message', from: 'lead', to: 'you', text: attack, at: 0 })}
        agent="lead"
      />,
    );
    expect(container.querySelector('img')).toBeNull();
    expect(activity()).toEqual([`To you: ${attack}`]);
  });
});
