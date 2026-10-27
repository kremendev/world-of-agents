import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import type { AgentId, OfficeEvent, TaskStatus } from '../events/schema';
import { INITIAL_OFFICE, officeReducer } from '../state/office';
import { TaskBoard } from './TaskBoard';

const task = (taskId: string, owner: AgentId, status: TaskStatus): OfficeEvent => ({
  type: 'task',
  taskId,
  title: `Task ${taskId}`,
  owner,
  status,
  at: 0,
});

describe('TaskBoard', () => {
  it('says "No tasks yet" when the board is empty', () => {
    render(<TaskBoard office={INITIAL_OFFICE} />);
    expect(screen.getByRole('heading', { name: 'Task board' })).toBeInTheDocument();
    expect(screen.getByText('0 of 0 done')).toBeInTheDocument();
    expect(screen.getByText('No tasks yet')).toBeInTheDocument();
  });

  it('shows one row per task: status chip, title and owner', () => {
    const office = [
      task('a', 'designer', 'done'),
      task('b', 'backend', 'in-progress'),
      task('c', 'reviewer', 'todo'),
    ].reduce(officeReducer, INITIAL_OFFICE);
    render(<TaskBoard office={office} />);
    expect(screen.getByText('1 of 3 done')).toBeInTheDocument();
    const rows = within(screen.getByRole('list'))
      .getAllByRole('listitem')
      .map((li) => [...li.children].map((c) => c.textContent));
    expect(rows).toEqual([
      ['Done', 'Task a', 'Designer'],
      ['In progress', 'Task b', 'Backend dev'],
      ['Todo', 'Task c', 'Reviewer'],
    ]);
  });
});
