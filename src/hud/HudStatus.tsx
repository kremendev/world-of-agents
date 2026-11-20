import type { ReactNode } from 'react';

/**
 * The HUD's status line (4d.8, D20): what the page says that isn't someone needing you (Live waiting for a task, the
 * hall offline, a session ended, a hall restarted, the hosted demo's line), muted on a slim panel under the top bar.
 * One line, cut with its whole text in its title; `wraps` for the hosted line, whose last word is a link an ellipsis
 * could hide.
 */
export function HudStatus({
  title,
  wraps,
  children,
}: {
  title: string;
  wraps: boolean;
  children: ReactNode;
}) {
  return (
    <p className={wraps ? 'hud-status wraps' : 'hud-status'} title={title}>
      {children}
    </p>
  );
}
