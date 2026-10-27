import { useId } from 'react';
import { doneCount, type OfficeState } from '../state/office';
import { agentById } from '../office/roster';
import { STATUS_CHIP } from '../office/tasks';

/** Every task in the run, in the order it was announced: status chip, title and owner. */
export function TaskBoard({ office }: { office: OfficeState }) {
  const { tasks } = office;
  const headingId = useId();

  return (
    <section className="panel task-board" aria-labelledby={headingId}>
      <div className="panel-head">
        <h2 id={headingId}>Task board</h2>
        <span className="muted">
          {doneCount(office)} of {tasks.length} done
        </span>
      </div>
      {tasks.length === 0 ? (
        <p className="muted">No tasks yet</p>
      ) : (
        <ul className="board-list">
          {tasks.map((t) => {
            const chip = STATUS_CHIP[t.status];
            return (
              <li key={t.id} className="board-row">
                <span className="chip status-chip" style={{ background: chip.bg, color: chip.text }}>
                  {chip.label}
                </span>
                <span className="board-title">{t.title}</span>
                <span className="muted">{agentById(t.owner).name}</span>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
