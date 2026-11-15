import { useId, useState } from 'react';
import type { TeamView } from '../team/schema';
import {
  flagged,
  flagSummary,
  NOTE_NAME as NAME,
  noteItems,
  noteLines,
  whenSaid,
  type NoteItem,
  type TeamActions,
} from '../team/view';
import { TextLines } from './TeamSkills';

type Ids = { details: string; main: string; base: string };

const textOf = (item: NoteItem) => (item.kind === 'waiting' ? item.proposal.text : item.note.text);

/**
 * The Notes tab (v3.7d, Dima's approved mockup, pages 1 and 6): what the guild leads proposed, waiting for Dima, and
 * what he kept. The page sends only ids: the text written is the hall's own copy.
 */
export function NotesTab({
  view,
  query,
  selected,
  onSelect,
  actions,
  ids,
}: {
  view: TeamView;
  query: string;
  selected: string | null;
  onSelect: (key: string | null) => void;
  actions: TeamActions;
  ids: Ids;
}) {
  const { waiting, kept } = noteItems(view, query);
  const all = [...waiting, ...kept];
  const current = all.find((item) => item.key === selected) ?? all[0] ?? null;

  const row = (item: NoteItem) => (
    <li key={item.key}>
      <button
        type="button"
        className="tp-row"
        aria-current={current?.key === item.key ? 'true' : undefined}
        onClick={() => onSelect(item.key)}
      >
        <span className="tp-row-main">
          <span className="tp-row-name">{NAME[item.agent]}</span>
          <span className="tp-row-sub">{textOf(item)}</span>
        </span>
        {noteLines(textOf(item)).some((l) => l.flags.includes('link')) && (
          <span className="tp-pill tp-pill-flag">link</span>
        )}
      </button>
    </li>
  );
  const group = (title: string, items: NoteItem[]) => {
    // An id with no spaces: aria-labelledby reads spaces as a list of ids.
    const head = `${ids.base}-notes-${title === 'Kept' ? 'kept' : 'waiting'}`;
    return (
      items.length > 0 && (
        <section className="tp-group" aria-labelledby={head}>
          <h2 id={head} className="tp-group-head">
            <span>
              {title} · {items.length}
            </span>
          </h2>
          <ul>{items.map(row)}</ul>
        </section>
      )
    );
  };

  return (
    <div className="tp-split-view">
      <nav className="tp-list" aria-label="Notes">
        <p className="tp-muted tp-notes-intro">
          Agents can&apos;t keep notes on their own. They propose one here, and only what you approve is kept.
        </p>
        {all.length === 0 && <p className="tp-empty">{query.trim() ? 'Nothing matches' : 'No notes yet.'}</p>}
        {group('Waiting for you', waiting)}
        {group('Kept', kept)}
      </nav>
      <div className="tp-detail-pane">
        {current && (
          <NoteDetails
            key={current.key}
            item={current}
            actions={actions}
            ids={ids}
            next={(gone) => all.find((item) => item.key !== gone)?.key ?? null}
            onSelect={onSelect}
          />
        )}
      </div>
    </div>
  );
}

/** One proposal or kept note: the whole text, line by line with its flags, and what Dima can do with it. */
function NoteDetails({
  item,
  actions,
  ids,
  next,
  onSelect,
}: {
  item: NoteItem;
  actions: TeamActions;
  ids: Ids;
  next: (gone: string) => string | null;
  onSelect: (key: string | null) => void;
}) {
  const own = useId();
  const [removing, setRemoving] = useState(false);
  const name = NAME[item.agent];
  const lines = noteLines(textOf(item));
  const now = Date.now();
  const removeButton = `${own}-remove`;

  const act = async (
    change: Parameters<TeamActions['send']>[0],
    said: string,
    then: () => void = () => onSelect(next(item.key)),
  ) => {
    if (await actions.send(change, said)) {
      then();
      actions.focus(ids.details);
    }
  };

  return (
    <section className="tp-details" aria-labelledby={ids.details}>
      <div>
        <h2 id={ids.details} tabIndex={-1}>
          {item.kind === 'waiting' ? `The ${name} wants to remember` : `The ${name}'s note`}
        </h2>
        <p className="tp-sub">
          {item.kind === 'waiting'
            ? `Proposed ${whenSaid(item.proposal.at, now)}`
            : `Approved ${whenSaid(item.note.approvedAt, now)}`}
        </p>
      </div>
      <TextLines lines={lines} />
      <p className={flagged(lines) ? 'tp-flagline' : 'tp-muted'}>{flagSummary(lines)}</p>
      {item.kind === 'waiting' ? (
        <>
          <p className="tp-muted">
            Nothing is written until you approve. If you approve, the {name} reads this at the start of its
            next runs.
          </p>
          <div className="tp-buttons">
            <button
              type="button"
              className="tp-button tp-approve"
              onClick={() =>
                void act({ action: 'note-approve', id: item.proposal.id }, `Approved the ${name}'s note.`)
              }
            >
              Approve
            </button>
            <button
              type="button"
              className="tp-button"
              onClick={() =>
                void act({ action: 'note-reject', id: item.proposal.id }, `Rejected the ${name}'s note.`)
              }
            >
              Reject
            </button>
          </div>
        </>
      ) : (
        <>
          <p className="tp-muted">
            Kept. The {name} reads it at the start of its runs. Remove it and it is gone for good.
          </p>
          {removing ? (
            <div
              className="tp-confirm"
              role="group"
              aria-labelledby={`${own}-question`}
              onKeyDown={(e) => {
                if (e.key !== 'Escape') return;
                e.preventDefault();
                setRemoving(false);
                actions.focus(removeButton);
              }}
            >
              <p id={`${own}-question`}>Remove the {name}&apos;s note? It is gone for good.</p>
              <div className="tp-buttons">
                <button
                  type="button"
                  className="tp-button tp-danger"
                  onClick={() =>
                    void act(
                      { action: 'note-delete', agent: item.agent, id: item.note.id },
                      `Removed the ${name}'s note.`,
                    )
                  }
                >
                  Remove
                </button>
                <button
                  id={`${own}-keep`}
                  type="button"
                  className="tp-button"
                  onClick={() => {
                    setRemoving(false);
                    actions.focus(removeButton);
                  }}
                >
                  Keep
                </button>
              </div>
            </div>
          ) : (
            <div className="tp-buttons">
              <button
                id={removeButton}
                type="button"
                className="tp-button tp-danger-outline"
                onClick={() => {
                  setRemoving(true);
                  actions.focus(`${own}-keep`);
                }}
              >
                Remove this note
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
