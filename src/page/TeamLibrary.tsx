import { useEffect, useId, useRef, useState } from 'react';
import {
  MAX_PRELOADED,
  type LibrarySkill,
  type SkillCheckView,
  type TeamSpecialist,
  type TeamView,
} from '../team/schema';
import { type TextCheck } from '../team/text';
import {
  aboutTokens,
  dayOf,
  diffRows,
  diffSummary,
  FLAG_LABEL,
  lineDiff,
  plural,
  updateRefusals,
  flagged,
  flagSummary,
  listed,
  skillDraftId,
  skillMatches,
  skillLines,
  skillRefusals,
  GROUPS,
  groupOf,
  sourceFrom,
  usedLine,
  usersOf,
  whoLoses,
  type SkillDraft,
  type TeamActions,
} from '../team/view';

type Ids = { details: string; main: string; base: string };

/**
 * The Library tab (v3.9, the approved mockup of 16 Nov): every skill on this PC, grouped by where it came from, each
 * saying how many projects use it; one skill's facts, who has it here and elsewhere, its whole text, or the form.
 */
export function LibraryTab({
  view,
  query,
  selected,
  onSelect,
  draft,
  setDraft,
  actions,
  ids,
  onOpenSpecialist,
}: {
  view: TeamView;
  query: string;
  selected: string | null;
  onSelect: (id: string) => void;
  draft: SkillDraft | null;
  setDraft: (draft: SkillDraft | null) => void;
  actions: TeamActions;
  ids: Ids;
  onOpenSpecialist: (id: string) => void;
}) {
  const shown = view.library.filter((s) => skillMatches(s, query));
  const current = shown.find((s) => s.id === selected) ?? shown[0] ?? null;

  const save = async (d: SkillDraft) => {
    const id = skillDraftId(d);
    const change = {
      action: d.mode === 'add' ? ('add-skill' as const) : ('change-skill' as const),
      id,
      name: d.name,
      description: d.description,
      text: d.text,
    };
    const said = d.mode === 'add' ? `Added ${d.name} to the library.` : `Saved skill ${d.name}.`;
    if (await actions.send(change, said)) {
      setDraft(null);
      onSelect(id);
      actions.focus(ids.details);
    }
  };

  return (
    <div className="tp-split-view">
      <nav className="tp-list" aria-label="Library">
        {shown.length === 0 && (
          <p className="tp-empty">{query.trim() ? 'Nothing matches' : 'The library is empty.'}</p>
        )}
        {GROUPS.map((group) => {
          const members = shown.filter((s) => groupOf(s.source) === group.id);
          if (members.length === 0) return null;
          const head = `${ids.base}-source-${group.id}`;
          return (
            <section key={group.id} className="tp-group" aria-labelledby={head}>
              <h2 id={head} className="tp-group-head">
                <span>{group.label}</span>
              </h2>
              <ul>
                {members.map((s) => {
                  const projects = view.usage[s.id]?.length ?? 0;
                  return (
                    <li key={s.id}>
                      <button
                        type="button"
                        className="tp-row"
                        aria-current={!draft && current?.id === s.id ? 'true' : undefined}
                        onClick={() => onSelect(s.id)}
                      >
                        <span className="tp-row-main">
                          <span className="tp-row-name">{s.name}</span>
                          <span className="tp-row-sub">{s.description}</span>
                        </span>
                        <span className={projects > 0 ? 'tp-used' : 'tp-used none'}>
                          {usedLine(projects)}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </nav>
      <div className="tp-detail-pane">
        {draft ? (
          <SkillForm
            key={draft.mode === 'add' ? 'add' : draft.id}
            draft={draft}
            setDraft={setDraft}
            view={view}
            busy={actions.busy}
            headingId={ids.details}
            onSave={() => void save(draft)}
            onCancel={() => {
              setDraft(null);
              actions.focus(current ? ids.details : ids.main);
            }}
          />
        ) : (
          current && (
            <SkillDetails
              key={current.id}
              s={current}
              view={view}
              actions={actions}
              ids={ids}
              onOpenSpecialist={onOpenSpecialist}
              onChange={() =>
                setDraft({
                  mode: 'change',
                  id: current.id,
                  name: current.name,
                  description: current.description,
                  text: view.texts[current.id] ?? '',
                })
              }
            />
          )
        )}
      </div>
    </div>
  );
}

/** A text line by line, numbered, with its flags (skillLines(), noteLines()). */
export function TextLines({ lines }: { lines: TextCheck['lines'] }) {
  return (
    <ol className="tp-lines">
      {lines.map((line, i) => (
        <li key={i} className={line.flags.length > 0 ? 'flagged' : undefined}>
          <span className="tp-num" aria-hidden="true">
            {i + 1}
          </span>
          <code>{line.text === '' ? ' ' : line.text}</code>
          {line.flags.map((flag) => (
            <span key={flag} className="tp-pill tp-pill-flag">
              {FLAG_LABEL[flag]}
            </span>
          ))}
        </li>
      ))}
    </ol>
  );
}

/**
 * One library skill: what it's for, its facts (where it came from, when, what it costs), who has it in this project and
 * who could get it, the other projects that use it, its whole text, Change and Delete from library.
 */
function SkillDetails({
  s,
  view,
  actions,
  ids,
  onOpenSpecialist,
  onChange,
}: {
  s: LibrarySkill;
  view: TeamView;
  actions: TeamActions;
  ids: Ids;
  onOpenSpecialist: (id: string) => void;
  onChange: () => void;
}) {
  const own = useId();
  const [deleting, setDeleting] = useState(false);
  // v3.10e: Check for update, GitHub skills only: asking, then the hall's new check, or why it couldn't.
  const [asking, setAsking] = useState(false);
  const [update, setUpdate] = useState<SkillCheckView | null>(null);
  const [failed, setFailed] = useState<string | null>(null);
  const checkButton = `${own}-check`;
  const here = usersOf(view, s.id);
  const elsewhere = (view.usage[s.id] ?? []).filter((u) => u.project !== view.project.key);
  const without = (view.team?.specialists ?? []).filter(
    (p) => !p.skills.includes(s.id) && p.skills.length < MAX_PRELOADED,
  );
  const text = view.texts[s.id] ?? '';
  const lines = skillLines(text);
  const question = `${own}-question`;
  const deleteButton = `${own}-delete`;

  const give = async (p: TeamSpecialist) => {
    if (
      await actions.send({ action: 'attach', specialist: p.id, skill: s.id }, `Gave ${s.name} to ${p.name}.`)
    )
      actions.focus(ids.details);
  };
  const remove = async () => {
    if (await actions.send({ action: 'delete-skill', id: s.id }, `Deleted ${s.name} from the library.`)) {
      actions.focus(ids.main);
    }
  };
  const checkForUpdate = async () => {
    setAsking(true);
    setFailed(null);
    const reply = await actions.ask({ ask: 'recheck', id: s.id });
    setAsking(false);
    if (reply.ok && 'check' in reply.answer) {
      setUpdate(reply.answer.check);
      actions.focus(`${own}-update`);
    } else {
      setFailed(reply.ok ? "The hall's answer wasn't a check." : reply.message);
      actions.focus(checkButton);
    }
  };
  const closeUpdate = () => {
    setUpdate(null);
    actions.focus(checkButton);
  };
  const takeUpdate = async (check: SkillCheckView) => {
    if (
      await actions.send(
        { action: 'update-skill', check: check.id, id: s.id },
        `Updated ${s.name} from GitHub.`,
      )
    ) {
      setUpdate(null);
      actions.focus(ids.details);
    }
  };

  return (
    <section className="tp-details" aria-labelledby={ids.details}>
      <div>
        <h2 id={ids.details} tabIndex={-1}>
          {s.name}
        </h2>
        <p className="tp-sub">{s.description}</p>
      </div>

      <dl className="tp-facts">
        <div>
          <dt>From</dt>
          <dd>{sourceFrom(s.source)}</dd>
        </div>
        <div>
          <dt>Added</dt>
          <dd>{dayOf(s.addedAt)}</dd>
        </div>
        <div>
          <dt>Cost</dt>
          <dd>{aboutTokens(text)} every time a specialist that has it starts</dd>
        </div>
      </dl>

      <div className="tp-section">
        <h3>Used by</h3>
        {here.length > 0 ? (
          <ul className="tp-chips">
            {here.map((p) => (
              <li key={p.id}>
                <button type="button" className="tp-chip-link" onClick={() => onOpenSpecialist(p.id)}>
                  {p.name}
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="tp-muted">No specialist in this project has it.</p>
        )}
        {without.length > 0 && (
          <div className="tp-give">
            <span className="tp-muted">Give it to:</span>
            <ul className="tp-chips">
              {without.map((p) => (
                <li key={p.id}>
                  <button type="button" className="tp-chip-add" onClick={() => void give(p)}>
                    {`+ ${p.name}`}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        {elsewhere.length > 0 && (
          <p className="tp-muted">Also used in {listed(elsewhere.map((u) => u.name))}.</p>
        )}
      </div>

      <div className="tp-section">
        <h3>The whole text, as a specialist reads it</h3>
        <TextLines lines={lines} />
        <p className={flagged(lines) ? 'tp-flagline' : 'tp-muted'}>{flagSummary(lines)}</p>
      </div>

      {update ? (
        <UpdateCheck
          s={s}
          view={view}
          check={update}
          busy={actions.busy}
          headingId={`${own}-update`}
          onTake={() => void takeUpdate(update)}
          onKeep={closeUpdate}
        />
      ) : deleting ? (
        <div
          className="tp-confirm"
          role="group"
          aria-labelledby={question}
          onKeyDown={(e) => {
            if (e.key !== 'Escape') return;
            e.preventDefault();
            setDeleting(false);
            actions.focus(deleteButton);
          }}
        >
          <p id={question}>
            Delete {s.name} from the library? {whoLoses(view, s.id)}
          </p>
          <div className="tp-buttons">
            <button type="button" className="tp-button tp-danger" onClick={() => void remove()}>
              Delete
            </button>
            <button
              id={`${own}-keep`}
              type="button"
              className="tp-button"
              onClick={() => {
                setDeleting(false);
                actions.focus(deleteButton);
              }}
            >
              Keep
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="tp-buttons">
            {s.source.kind === 'github' && (
              <button
                id={checkButton}
                type="button"
                className="tp-button"
                aria-disabled={asking || undefined}
                onClick={() => {
                  if (!asking) void checkForUpdate();
                }}
              >
                {asking ? 'Asking GitHub...' : 'Check for update'}
              </button>
            )}
            <button type="button" className="tp-button" onClick={onChange}>
              Change
            </button>
            <button
              id={deleteButton}
              type="button"
              className="tp-button tp-danger-outline"
              onClick={() => {
                setDeleting(true);
                actions.focus(`${own}-keep`);
              }}
            >
              Delete from library
            </button>
          </div>
          {failed !== null && (
            <p className="tp-problem" role="alert">
              {failed}
            </p>
          )}
        </>
      )}
    </section>
  );
}

/**
 * v3.10e, Check for update: what GitHub has now against what the library keeps, line by line, the added lines with their
 * flags, a license that changed, and what refuses it; then take it or keep what is there. Nothing changes until he takes
 * it, and what is saved is the hall's copy of what he saw.
 */
function UpdateCheck({
  s,
  view,
  check,
  busy,
  headingId,
  onTake,
  onKeep,
}: {
  s: LibrarySkill;
  view: TeamView;
  check: SkillCheckView;
  busy: boolean;
  headingId: string;
  onTake: () => void;
  onKeep: () => void;
}) {
  const own = useId();
  const before = view.texts[s.id] ?? '';
  const lines = lineDiff(before, check.text);
  const rows = diffRows(lines);
  const newFlags = skillLines(check.text);
  const added = lines.filter((l) => l.kind === 'new').map((l) => newFlags[l.at]!);
  const licenseWas = s.source.kind === 'github' ? s.source.license : null;
  const licenseNow = check.source.kind === 'github' ? check.source.license : null;
  const same = check.text === before && licenseNow === licenseWas;
  const refusals = updateRefusals(view, s.id, check);

  return (
    <section className="tp-update" aria-labelledby={headingId}>
      <h3 id={headingId} tabIndex={-1}>
        Update from GitHub
      </h3>
      {same ? (
        <p>GitHub has the same text and license. Nothing to update.</p>
      ) : (
        <>
          <p>{diffSummary(lines)}, against the text in your library.</p>
          {licenseNow !== licenseWas && (
            <p>
              License: {licenseWas ?? 'none'} → {licenseNow ?? 'none'}
            </p>
          )}
          <ol className="tp-lines tp-diff">
            {rows.map((row, k) => {
              if (row.kind === 'skip')
                return (
                  <li key={k} className="skip">
                    <span className="tp-num" aria-hidden="true">
                      ⋯
                    </span>
                    <span className="tp-muted">{plural(row.count, 'unchanged line')}</span>
                  </li>
                );
              const flags = row.kind === 'new' ? (newFlags[row.at]?.flags ?? []) : [];
              return (
                <li key={k} className={`${row.kind}${flags.length > 0 ? ' flagged' : ''}`}>
                  <span className="tp-num" aria-hidden="true">
                    {row.kind === 'new' ? '+' : row.kind === 'gone' ? '−' : ''}
                  </span>
                  <code>
                    {row.kind !== 'same' && (
                      <span className="sr-only">{row.kind === 'new' ? 'Added: ' : 'Removed: '}</span>
                    )}
                    {row.text === '' ? ' ' : row.text}
                  </code>
                  {flags.map((flag) => (
                    <span key={flag} className="tp-pill tp-pill-flag">
                      {FLAG_LABEL[flag]}
                    </span>
                  ))}
                </li>
              );
            })}
          </ol>
          {added.length > 0 && (
            <p className={flagged(added) ? 'tp-flagline' : 'tp-muted'}>
              In the added lines: {flagSummary(added)}
            </p>
          )}
          <p className="tp-muted">{aboutTokens(check.text)} every time a specialist that has it starts.</p>
          {refusals.length > 0 && (
            <ul id={`${own}-refusals`} className="tp-refusals">
              {refusals.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          )}
        </>
      )}
      <div className="tp-buttons">
        {!same && (
          <button
            type="button"
            className="tp-button tp-primary"
            disabled={busy || refusals.length > 0}
            aria-describedby={refusals.length > 0 ? `${own}-refusals` : undefined}
            onClick={onTake}
          >
            Take the update
          </button>
        )}
        <button type="button" className="tp-button" onClick={onKeep}>
          {same ? 'Done' : 'Keep what I have'}
        </button>
      </div>
    </section>
  );
}

/** Write a new skill, or change one: name, what it's for, the text, and a live preview with its flags beside it. */
function SkillForm({
  draft,
  setDraft,
  view,
  busy,
  headingId,
  onSave,
  onCancel,
}: {
  draft: SkillDraft;
  setDraft: (draft: SkillDraft) => void;
  view: TeamView;
  busy: boolean;
  headingId: string;
  onSave: () => void;
  onCancel: () => void;
}) {
  const own = useId();
  const first = useRef<HTMLInputElement>(null);
  const adding = draft.mode === 'add';
  const refusals = skillRefusals(draft, view);
  const lines = skillLines(draft.text);
  const id = skillDraftId(draft);
  const original = view.library.find((s) => s.id === draft.id)?.name ?? draft.name;
  const set = (more: Partial<SkillDraft>) => setDraft({ ...draft, ...more });

  useEffect(() => first.current?.focus(), []);

  return (
    <form
      className="tp-form"
      aria-labelledby={headingId}
      onSubmit={(e) => {
        e.preventDefault();
        if (refusals.length === 0 && !busy) onSave();
      }}
    >
      <h2 id={headingId} tabIndex={-1}>
        {adding ? 'Write a new skill' : `Change ${original}`}
      </h2>
      <div className="tp-field">
        <label htmlFor={`${own}-name`}>Name</label>
        <input
          ref={first}
          id={`${own}-name`}
          className="tp-input tp-input-half"
          value={draft.name}
          aria-describedby={`${own}-id`}
          onChange={(e) => set({ name: e.target.value })}
        />
        <p id={`${own}-id`} className="tp-hint">
          {adding
            ? id === ''
              ? 'Its id comes from its name.'
              : `Its id will be woa-team:${id}`
            : `Its id stays woa-team:${id}`}
        </p>
      </div>
      <div className="tp-field">
        <label htmlFor={`${own}-for`}>What it&apos;s for</label>
        <input
          id={`${own}-for`}
          className="tp-input"
          value={draft.description}
          onChange={(e) => set({ description: e.target.value })}
        />
      </div>
      <div className="tp-text-split">
        <div className="tp-field">
          <label htmlFor={`${own}-text`}>Text</label>
          <textarea
            id={`${own}-text`}
            className="tp-input tp-textarea"
            rows={14}
            value={draft.text}
            onChange={(e) => set({ text: e.target.value })}
          />
        </div>
        <section className="tp-preview" aria-labelledby={`${own}-preview`}>
          <h3 id={`${own}-preview`}>Preview, as a specialist reads it</h3>
          <TextLines lines={lines} />
          <p className={flagged(lines) ? 'tp-flagline' : 'tp-muted'}>{flagSummary(lines)}</p>
          <p className="tp-muted">{aboutTokens(draft.text)} every time a specialist that has it starts.</p>
        </section>
      </div>
      {refusals.length > 0 && (
        <ul id={`${own}-refusals`} className="tp-refusals">
          {refusals.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      )}
      <div className="tp-buttons">
        <button
          type="submit"
          className="tp-button tp-primary"
          disabled={busy || refusals.length > 0}
          aria-describedby={refusals.length > 0 ? `${own}-refusals` : undefined}
        >
          {adding ? 'Add to library' : 'Save'}
        </button>
        <button type="button" className="tp-button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}
