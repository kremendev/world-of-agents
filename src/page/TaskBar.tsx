import { useId, useState, type FormEvent } from 'react';
import { MAX_TASK_CHARS, cleanTask } from './task';

/**
 * The task bar under the hall. Sending hands the cleaned text up and clears the field; empty sends do nothing.
 * While `watching` a real run it is disabled: the task is typed in Claude Code, and the page never sends anything
 * to an agent.
 */
export function TaskBar({
  onSend,
  watching = false,
}: {
  onSend: (task: string) => void;
  watching?: boolean;
}) {
  const [draft, setDraft] = useState('');
  const id = useId();

  const send = (event: FormEvent) => {
    event.preventDefault();
    const task = cleanTask(draft);
    if (!task) return;
    onSend(task);
    setDraft('');
  };

  return (
    <form className="panel task-bar" onSubmit={send}>
      <label htmlFor={`${id}-input`} className="task-label">
        Task for the Lead/PM
      </label>
      <div className="task-row">
        <input
          id={`${id}-input`}
          type="text"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          maxLength={MAX_TASK_CHARS}
          placeholder={watching ? undefined : 'Describe what to build, e.g. Create a dashboard'}
          autoComplete="off"
          aria-describedby={`${id}-note`}
          disabled={watching}
        />
        <button type="submit" className="primary" disabled={watching}>
          Send
        </button>
      </div>
      <p id={`${id}-note`} className="note">
        {watching
          ? 'Type your task in Claude Code. The hall only watches.'
          : 'Demo mode plays a scripted run with no AI calls. Sending restarts the run: the Lead/PM walks in and picks up your task.'}
      </p>
    </form>
  );
}
