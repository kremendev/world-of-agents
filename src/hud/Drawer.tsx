import { useId, useRef, type KeyboardEvent, type ReactNode, type Ref } from 'react';

export type DrawerTab = 'activity' | 'tasks';

const TABS: readonly { id: DrawerTab; label: string }[] = [
  { id: 'activity', label: 'Activity' },
  { id: 'tasks', label: 'Task board' },
];

type Props = {
  open: boolean;
  tab: DrawerTab;
  onTab: (tab: DrawerTab) => void;
  onOpen: () => void;
  onClose: () => void;
  /** The "For you" items not yet read, for the handle. */
  unread: number;
  activity: ReactNode;
  tasks: ReactNode;
  handleRef?: Ref<HTMLButtonElement>;
};

/**
 * The drawer (4d.5): the activity and the task board as two tabs (the arrow keys, Home and End move between them), and a
 * button that closes it. Closed, a handle at the window's edge opens it again and says how many "For you" items wait.
 * Both panels stay mounted while hidden, so the feed keeps its open rows, its filter and its place.
 */
export function Drawer({ open, tab, onTab, onOpen, onClose, unread, activity, tasks, handleRef }: Props) {
  const id = useId();
  const tabRefs = useRef<Partial<Record<DrawerTab, HTMLButtonElement | null>>>({});

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
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
              : -1;
    if (to < 0) return;
    e.preventDefault();
    const next = TABS[to]!.id;
    onTab(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <>
      <aside
        id={`${id}-drawer`}
        className="hud-panel hud-drawer"
        aria-label="Activity and tasks"
        hidden={!open}
      >
        <div className="hud-drawer-head">
          <div className="hud-tabs" role="tablist" aria-label="Drawer" onKeyDown={onKeyDown}>
            {TABS.map((t) => (
              <button
                key={t.id}
                ref={(el) => {
                  tabRefs.current[t.id] = el;
                }}
                type="button"
                role="tab"
                id={`${id}-${t.id}-tab`}
                className="hud-tab"
                aria-selected={tab === t.id}
                aria-controls={`${id}-${t.id}`}
                tabIndex={tab === t.id ? 0 : -1}
                onClick={() => onTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="hud-button hud-icon"
            aria-label="Close the drawer"
            onClick={onClose}
          >
            <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" focusable="false">
              <path
                d="M6 3.5l4.5 4.5L6 12.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        {TABS.map((t) => (
          <div
            key={t.id}
            role="tabpanel"
            id={`${id}-${t.id}`}
            className="hud-tabpanel"
            aria-labelledby={`${id}-${t.id}-tab`}
            hidden={tab !== t.id}
          >
            {t.id === 'activity' ? activity : tasks}
          </div>
        ))}
      </aside>
      {!open && (
        <button
          ref={handleRef}
          type="button"
          className="hud-panel hud-handle"
          aria-expanded={false}
          aria-controls={`${id}-drawer`}
          aria-label={unread > 0 ? `Activity, ${unread} for you` : 'Activity'}
          onClick={onOpen}
        >
          Activity
          {unread > 0 && (
            <span className="hud-badge needs" aria-hidden="true">
              {unread}
            </span>
          )}
        </button>
      )}
    </>
  );
}
