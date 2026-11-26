import { useEffect, useId, useRef, useState, type FormEvent } from 'react';
import { MAX_TASK_CHARS, cleanTask } from './task';

/**
 * The task bar at the top of the right-hand column, in the demo only: a real run's task is typed in Claude Code, and
 * the page never sends anything to an agent. Sending hands the cleaned text up and clears the field; empty sends do nothing.
 * `compact` (the HUD's top bar, 4d.2): one row, its label and note there for screen readers only. `autoFocus` and
 * `onCancel` (a phone's top bar, 4.0.1): the field takes the focus as it opens, and Esc in it closes it, nothing else.
 */
export function TaskBar({
  onSend,
  compact = false,
  autoFocus = false,
  onCancel,
}: {
  onSend: (task: string) => void;
  compact?: boolean;
  autoFocus?: boolean;
  onCancel?: () => void;
}) {
  const [draft, setDraft] = useState('');
  const id = useId();
  const field = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (autoFocus) field.current?.focus();
  }, [autoFocus]);

  const send = (event: FormEvent) => {
    event.preventDefault();
    const task = cleanTask(draft);
    if (!task) return;
    onSend(task);
    setDraft('');
  };

  return (
    <form className={compact ? 'task-bar compact' : 'panel task-bar'} onSubmit={send}>
      <label htmlFor={`${id}-input`} className={compact ? 'task-label sr-only' : 'task-label'}>
        Task for the Lead/PM
      </label>
      <div className="task-row">
        <input
          ref={field}
          id={`${id}-input`}
          type="text"
          onKeyDown={(e) => {
            if (e.key !== 'Escape' || !onCancel) return;
            e.preventDefault();
            e.stopPropagation();
            onCancel();
          }}
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          maxLength={MAX_TASK_CHARS}
          placeholder="e.g. Create a dashboard"
          autoComplete="off"
          aria-describedby={`${id}-note`}
        />
        <button type="submit" className="primary">
          Send
        </button>
      </div>
      <p id={`${id}-note`} className={compact ? 'note sr-only' : 'note'}>
        Demo mode plays a scripted run with no AI calls. Sending restarts the run: the Lead/PM walks in and
        picks up your task.
      </p>
    </form>
  );
}
