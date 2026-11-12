import { useEffect, useId, useRef, useState } from 'react';
import { loadTeam, sendChange, type Exchange, type TeamAnswer } from '../team/api';
import {
  MAX_PRELOADED,
  teamChangeSchema,
  type TeamChange,
  type TeamSkill,
  type TeamSpecialist,
  type TeamView,
} from '../team/schema';
import { checkText } from '../team/text';

/** Where the page stands with the hall (v3.4c): no key in its address, a key being exchanged, or what the hall said. */
export type TeamSession = Exchange | 'none' | 'checking';

export const SESSION_LINES = {
  none: 'To change skills, press "Change skills" in the team pane, then open its link within a minute.',
  used: 'This link was already used. Open the hall again from the pane.',
  expired: 'This link has expired. Open the hall again from the pane.',
  offline: "The hall didn't answer. Open the hall again from the pane.",
} as const;

type Draft = { mode: 'add' | 'change'; id: string; name: string; description: string; text: string };

const FIELD_RULES: Record<string, string> = {
  id: 'The id may hold only a to z, 0 to 9 and single dashes between them, 48 at most.',
  name: "The name may hold only letters, digits, spaces and . , ( ) ' & / -, 60 at most, no space at either end.",
  description:
    "The description may hold only letters, digits, spaces and . , ( ) ' & / -, 200 at most, no space at either end.",
};

const changeOf = (d: Draft): TeamChange => ({
  action: d.mode === 'add' ? 'add-skill' : 'change-skill',
  id: d.id,
  name: d.name,
  description: d.description,
  text: d.text,
});

/** Why the draft can't be saved: the hall's rules, checked here first so the preview can say so. */
function refusalsOf(d: Draft): string[] {
  const parsed = teamChangeSchema.safeParse(changeOf(d));
  const fields = parsed.success ? [] : [...new Set(parsed.error.issues.map((i) => String(i.path[0])))];
  return [
    ...fields.filter((f) => f !== 'text').map((f) => FIELD_RULES[f] ?? `The ${f} isn't allowed.`),
    ...checkText(d.text).refusals,
  ];
}

/** The whole text, line by line, with its links and command-like lines marked, and what the hall would refuse. */
function Preview({ draft, busy, onSave }: { draft: Draft; busy: boolean; onSave: () => void }) {
  const { lines } = checkText(draft.text);
  const refusals = refusalsOf(draft);
  const links = lines.filter((l) => l.flags.includes('link')).length;
  const commands = lines.filter((l) => l.flags.includes('command')).length;
  return (
    <section className="team-preview" aria-label="Preview">
      <h4>Preview: the whole text, as an agent will read it</h4>
      {refusals.length > 0 && (
        <ul className="team-refusals" role="alert">
          {refusals.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      )}
      <p className="muted">
        {links} line{links === 1 ? '' : 's'} with a link, {commands} that look like a command. Read them
        before you save.
      </p>
      <ol className="team-lines">
        {lines.map((line, i) => (
          <li key={i} className={line.flags.length > 0 ? 'flagged' : undefined}>
            <code>{line.text === '' ? ' ' : line.text}</code>
            {line.flags.map((flag) => (
              <span key={flag} className="flag">
                {flag === 'link' ? 'link' : 'command-like'}
              </span>
            ))}
          </li>
        ))}
      </ol>
      <button type="button" onClick={onSave} disabled={busy || refusals.length > 0}>
        Save
      </button>
    </section>
  );
}

/** One specialist: its skills, each with Remove, and a skill to give while it has fewer than five. */
function SpecialistItem({
  specialist,
  skills,
  busy,
  onChange,
}: {
  specialist: TeamSpecialist;
  skills: readonly TeamSkill[];
  busy: boolean;
  onChange: (change: TeamChange) => Promise<boolean>;
}) {
  const [picked, setPicked] = useState('');
  const pickId = useId();
  const nameOf = (id: string) => skills.find((s) => s.id === id)?.name ?? id;
  const free = skills.filter((s) => !specialist.skills.includes(s.id));
  return (
    <li className="team-item">
      <h4>{specialist.name}</h4>
      <p className="muted">{specialist.role}</p>
      <ul className="team-skills">
        {specialist.skills.map((id) => (
          <li key={id}>
            {nameOf(id)}{' '}
            <button
              type="button"
              className="link"
              disabled={busy}
              aria-label={`Take ${nameOf(id)} from ${specialist.name}`}
              onClick={() => void onChange({ action: 'detach', specialist: specialist.id, skill: id })}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      {specialist.skills.length >= MAX_PRELOADED ? (
        <p className="muted">{MAX_PRELOADED} skills: the most a specialist takes.</p>
      ) : (
        free.length > 0 && (
          <div className="team-give">
            <label htmlFor={pickId}>Give {specialist.name} a skill</label>
            <select id={pickId} value={picked} onChange={(e) => setPicked(e.target.value)}>
              <option value="">Pick one</option>
              {free.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
            <button
              type="button"
              disabled={busy || picked === ''}
              onClick={() =>
                void onChange({ action: 'attach', specialist: specialist.id, skill: picked }).then(
                  (done) => done && setPicked(''),
                )
              }
            >
              Give
            </button>
          </div>
        )
      )}
    </li>
  );
}

/**
 * The team editor (v3.4c, T8): a non-modal dialog over the right-hand column, like the review board. With a session it
 * shows the specialists and the skills and changes skills through the hall; everything shown is text, never HTML.
 */
export function TeamPanel({ session, onClose }: { session: TeamSession; onClose: () => void }) {
  const headingId = useId();
  const heading = useRef<HTMLHeadingElement>(null);
  const [view, setView] = useState<TeamView | null>(null);
  const [problem, setProblem] = useState<string | null>(null);
  const [signedOut, setSignedOut] = useState(false);
  const [draft, setDraft] = useState<Draft | null>(null);
  const [previewed, setPreviewed] = useState<string | null>(null);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => heading.current?.focus(), []);

  const take = (answer: TeamAnswer): boolean => {
    if (answer.ok) {
      setView(answer.view);
      setProblem(null);
      return true;
    }
    if (answer.why === 'signed-out') setSignedOut(true);
    else setProblem(answer.why === 'offline' ? SESSION_LINES.offline : answer.message);
    return false;
  };

  useEffect(() => {
    if (session !== 'ok') return;
    let alive = true;
    void loadTeam().then((answer) => {
      if (!alive) return;
      if (answer.ok) setView(answer.view);
      else if (answer.why === 'signed-out') setSignedOut(true);
      else setProblem(answer.why === 'offline' ? SESSION_LINES.offline : answer.message);
    });
    return () => {
      alive = false;
    };
  }, [session]);

  const change = async (c: TeamChange): Promise<boolean> => {
    setBusy(true);
    try {
      return take(await sendChange(c));
    } finally {
      setBusy(false);
    }
  };

  const edit = (d: Draft | null) => {
    setDraft(d);
    setPreviewed(null);
  };
  const save = async () => {
    if (draft && (await change(changeOf(draft)))) edit(null);
  };

  const locked: keyof typeof SESSION_LINES | null =
    session === 'none' || session === 'used' || session === 'expired' || session === 'offline'
      ? session
      : signedOut
        ? 'expired'
        : null;

  return (
    <section className="panel team-panel" role="dialog" aria-labelledby={headingId}>
      <div className="feed-head">
        <h2 id={headingId} ref={heading} tabIndex={-1}>
          Team
        </h2>
        <button type="button" className="link" onClick={onClose}>
          Close
        </button>
      </div>
      <div className="review-scroll">
        {locked !== null && <p role="status">{SESSION_LINES[locked]}</p>}
        {session === 'checking' && <p className="muted">Checking the link...</p>}
        {problem !== null && (
          <p className="team-problem" role="alert">
            {problem}
          </p>
        )}
        {locked === null && session === 'ok' && view === null && problem === null && (
          <p className="muted">Loading the team...</p>
        )}
        {locked === null && view !== null && draft !== null && (
          <div className="team-draft">
            <h3>
              {draft.mode === 'add'
                ? 'New skill'
                : `Change ${view.team.skills.find((s) => s.id === draft.id)?.name ?? draft.id}`}
            </h3>
            {draft.mode === 'add' && (
              <label>
                Id
                <input value={draft.id} onChange={(e) => edit({ ...draft, id: e.target.value })} />
              </label>
            )}
            <label>
              Name
              <input value={draft.name} onChange={(e) => edit({ ...draft, name: e.target.value })} />
            </label>
            <label>
              Description
              <input
                value={draft.description}
                onChange={(e) => edit({ ...draft, description: e.target.value })}
              />
            </label>
            <label>
              Text
              <textarea
                rows={10}
                value={draft.text}
                onChange={(e) => edit({ ...draft, text: e.target.value })}
              />
            </label>
            <div className="run-controls">
              <button type="button" onClick={() => setPreviewed(JSON.stringify(draft))}>
                Preview
              </button>
              <button type="button" onClick={() => edit(null)}>
                Cancel
              </button>
            </div>
            {previewed === JSON.stringify(draft) && (
              <Preview draft={draft} busy={busy} onSave={() => void save()} />
            )}
          </div>
        )}
        {locked === null && view !== null && draft === null && (
          <>
            <h3>Specialists</h3>
            <ul className="team-list">
              {view.team.specialists.map((p) => (
                <SpecialistItem
                  key={p.id}
                  specialist={p}
                  skills={view.team.skills}
                  busy={busy}
                  onChange={change}
                />
              ))}
            </ul>
            <h3>Skills</h3>
            <button
              type="button"
              onClick={() => edit({ mode: 'add', id: '', name: '', description: '', text: '' })}
            >
              New skill
            </button>
            <ul className="team-list">
              {view.team.skills.map((s) => {
                const users = view.team.specialists.filter((p) => p.skills.includes(s.id)).length;
                return (
                  <li key={s.id} className="team-item">
                    <h4>{s.name}</h4>
                    <p className="muted">{s.description}</p>
                    {deleting === s.id ? (
                      <div className="run-controls">
                        <span>
                          Delete {s.name}? It comes off {users} specialist{users === 1 ? '' : 's'}.
                        </span>
                        <button
                          type="button"
                          disabled={busy}
                          onClick={() =>
                            void change({ action: 'delete-skill', id: s.id }).then(
                              (done) => done && setDeleting(null),
                            )
                          }
                        >
                          Delete
                        </button>
                        <button type="button" onClick={() => setDeleting(null)}>
                          Keep
                        </button>
                      </div>
                    ) : (
                      <div className="run-controls">
                        <button
                          type="button"
                          aria-label={`Change ${s.name}`}
                          onClick={() => edit({ mode: 'change', ...s, text: view.texts[s.id] ?? '' })}
                        >
                          Change
                        </button>
                        <button
                          type="button"
                          aria-label={`Delete ${s.name}`}
                          onClick={() => setDeleting(s.id)}
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </div>
    </section>
  );
}
