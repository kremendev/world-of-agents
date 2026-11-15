import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react';
import { loadTeam, sendChange, type Exchange, type TeamAnswer } from '../team/api';
import type { TeamChange, TeamView } from '../team/schema';
import {
  skillMatches,
  specialistMatches,
  type SkillDraft,
  type SpecialistDraft,
  type TeamActions,
} from '../team/view';
import { SkillsTab } from './TeamSkills';
import { SpecialistsTab } from './TeamSpecialists';

/** Where the page stands with the hall (v3.4c): no key in its address, a key being exchanged, or what the hall said. */
export type TeamSession = Exchange | 'none' | 'checking';

export const SESSION_LINES = {
  none: 'To change the team, press "Open Team page" in the team pane, then open its link within a minute.',
  used: 'This link was already used. Open the hall again from the pane.',
  expired: 'This link has expired. Open the hall again from the pane.',
  offline: "The hall didn't answer. Open the hall again from the pane.",
} as const;

export const INTRO =
  'Specialists are helpers a guild lead can call. Skills are short guides a specialist reads before it starts. Changes apply to new runs.';

type Tab = 'specialists' | 'skills';
const TABS: { id: Tab; label: string; action: string }[] = [
  { id: 'specialists', label: 'Specialists', action: 'Add specialist' },
  { id: 'skills', label: 'Skills', action: 'New skill' },
];
type Status = { text: string; undo?: { change: TeamChange; said: string } };

/**
 * The Team page (v3.6, docs/v3.6-plan.md, Dima's approved mockup of 15 Nov): its own view over the whole page, with the
 * hall kept running behind it. With a session it shows and changes the specialists and the skills through the hall;
 * everything shown is React text, never HTML. Notes wait for v3.7.
 */
export function TeamPage({ session, onBack }: { session: TeamSession; onBack: () => void }) {
  const base = useId();
  const heading = useRef<HTMLHeadingElement>(null);
  const [view, setView] = useState<TeamView | null>(null);
  const [problem, setProblem] = useState<string | null>(null);
  const [signedOut, setSignedOut] = useState(false);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState<Status | null>(null);
  const [tab, setTab] = useState<Tab>('specialists');
  const [query, setQuery] = useState('');
  const [specialist, setSpecialist] = useState<string | null>(null);
  const [skill, setSkill] = useState<string | null>(null);
  const [specialistDraft, setSpecialistDraft] = useState<SpecialistDraft | null>(null);
  const [skillDraft, setSkillDraft] = useState<SkillDraft | null>(null);
  // An element to focus once the render that shows it is done; `n` makes asking twice for one id count.
  const [focusAsk, setFocusAsk] = useState<{ id: string; n: number } | null>(null);
  const writing = useRef(false);

  useEffect(() => heading.current?.focus(), []);

  useEffect(() => {
    if (focusAsk) document.getElementById(focusAsk.id)?.focus();
  }, [focusAsk]);

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

  const ids = {
    main: `${base}-main`,
    search: `${base}-search`,
    details: `${base}-details`,
    tab: (t: Tab) => `${base}-tab-${t}`,
    panel: (t: Tab) => `${base}-panel-${t}`,
  };

  const actions: TeamActions = {
    busy,
    focus: (id) => setFocusAsk((was) => ({ id, n: (was?.n ?? 0) + 1 })),
    // One change at a time: a second press while one is on its way does nothing (the hall writes one at a time too).
    send: async (change, said, undo) => {
      if (writing.current) return false;
      writing.current = true;
      setBusy(true);
      try {
        const done = take(await sendChange(change));
        if (done) setStatus({ text: said, ...(undo ? { undo } : {}) });
        return done;
      } finally {
        writing.current = false;
        setBusy(false);
      }
    },
  };

  const openSkill = (id: string) => {
    setSkillDraft(null);
    setSkill(id);
    setTab('skills');
    actions.focus(ids.details);
  };
  const openSpecialist = (id: string) => {
    setSpecialistDraft(null);
    setSpecialist(id);
    setTab('specialists');
    actions.focus(ids.details);
  };

  const undo = async () => {
    const back = status?.undo;
    if (!back) return;
    if (await actions.send(back.change, back.said)) {
      if (back.change.action === 'attach') openSpecialist(back.change.specialist);
    }
  };

  const onTabKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const at = TABS.findIndex((t) => t.id === tab);
    const to =
      e.key === 'ArrowRight'
        ? (at + 1) % TABS.length
        : e.key === 'ArrowLeft'
          ? (at - 1 + TABS.length) % TABS.length
          : e.key === 'Home'
            ? 0
            : e.key === 'End'
              ? TABS.length - 1
              : null;
    if (to === null) return;
    e.preventDefault();
    const next = TABS[to]!.id;
    setTab(next);
    actions.focus(ids.tab(next));
  };

  const locked: keyof typeof SESSION_LINES | null =
    session === 'none' || session === 'used' || session === 'expired' || session === 'offline'
      ? session
      : signedOut
        ? 'expired'
        : null;

  const counts: Record<Tab, number> = view
    ? {
        specialists: view.team.specialists.filter((p) => specialistMatches(p, view.team.skills, query))
          .length,
        skills: view.team.skills.filter((s) => skillMatches(s, query)).length,
      }
    : { specialists: 0, skills: 0 };

  const startAdding = () => {
    if (tab === 'specialists') {
      setSpecialistDraft({
        mode: 'add',
        id: '',
        name: '',
        guild: null,
        role: '',
        preset: 'reads',
        skills: [],
      });
    } else {
      setSkillDraft({ mode: 'add', id: '', name: '', description: '', text: '' });
    }
  };

  const ready = locked === null && view !== null;

  return (
    <div className="team-page">
      <header className="tp-bar">
        <button type="button" className="tp-button tp-back" onClick={onBack}>
          <span aria-hidden="true">‹</span> Back to the hall
        </button>
        <p className="tp-crumb">
          <strong>World of Agents</strong> <span>/ Team</span>
        </p>
        {ready && (
          <div className="tp-search" role="search">
            <svg className="tp-search-icon" viewBox="0 0 16 16" aria-hidden="true">
              <circle cx="7" cy="7" r="4.5" />
              <path d="M10.5 10.5 14 14" />
            </svg>
            <input
              id={ids.search}
              type="search"
              aria-label="Search specialists and skills"
              placeholder="Search specialists and skills"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {query !== '' && (
              <button
                type="button"
                className="tp-search-clear"
                aria-label="Clear the search"
                onClick={() => {
                  setQuery('');
                  actions.focus(ids.search);
                }}
              >
                ×
              </button>
            )}
          </div>
        )}
      </header>

      <main className="tp-main">
        <h1 ref={heading} tabIndex={-1}>
          Team
        </h1>
        <p className="tp-intro">{INTRO}</p>

        {locked !== null && (
          <p className="tp-note" role="status">
            {SESSION_LINES[locked]}
          </p>
        )}
        {session === 'checking' && <p className="tp-note">Checking the link...</p>}
        {locked === null && session === 'ok' && view === null && problem === null && (
          <p className="tp-note">Loading the team...</p>
        )}
        {problem !== null && (
          <p className="tp-problem" role="alert">
            {problem}
          </p>
        )}

        {ready && (
          <>
            <div className="tp-tabs-row">
              <div className="tp-tabs" role="tablist" aria-label="Team" onKeyDown={onTabKey}>
                {TABS.map((t) => (
                  <button
                    key={t.id}
                    id={ids.tab(t.id)}
                    type="button"
                    role="tab"
                    className="tp-tab"
                    aria-selected={tab === t.id}
                    aria-controls={ids.panel(t.id)}
                    tabIndex={tab === t.id ? 0 : -1}
                    onClick={() => setTab(t.id)}
                  >
                    {t.label} <span className="tp-count">{counts[t.id]}</span>
                  </button>
                ))}
              </div>
              <div className="tp-actions">
                <p className="tp-status" role="status">
                  {status && (
                    <>
                      <span>{status.text}</span>
                      {status.undo && (
                        <button type="button" className="tp-link" onClick={() => void undo()}>
                          Undo
                        </button>
                      )}
                    </>
                  )}
                </p>
                <button id={ids.main} type="button" className="tp-button tp-primary" onClick={startAdding}>
                  {`+ ${TABS.find((t) => t.id === tab)!.action}`}
                </button>
              </div>
            </div>

            <div className="tp-panel" role="tabpanel" id={ids.panel(tab)} aria-labelledby={ids.tab(tab)}>
              {tab === 'specialists' ? (
                <SpecialistsTab
                  view={view}
                  query={query}
                  selected={specialist}
                  onSelect={(id) => {
                    setSpecialistDraft(null);
                    setSpecialist(id);
                  }}
                  draft={specialistDraft}
                  setDraft={setSpecialistDraft}
                  actions={actions}
                  ids={{ details: ids.details, main: ids.main, base }}
                  onOpenSkill={openSkill}
                />
              ) : (
                <SkillsTab
                  view={view}
                  query={query}
                  selected={skill}
                  onSelect={(id) => {
                    setSkillDraft(null);
                    setSkill(id);
                  }}
                  draft={skillDraft}
                  setDraft={setSkillDraft}
                  actions={actions}
                  ids={{ details: ids.details, main: ids.main, base }}
                  onOpenSpecialist={openSpecialist}
                />
              )}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
