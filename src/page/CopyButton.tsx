import { useEffect, useRef, useState } from 'react';
import { copyText, forCopy } from './copy';

/** How long the button says what happened before it says "Copy" again. */
export const COPY_SAID_MS = 3000;

/**
 * Copy for an agent's text (v3.1): what forCopy() gives, links as their text and hidden characters left out. The
 * button then says "Copied", "Copied, N hidden characters removed" or "Couldn't copy" for COPY_SAID_MS, and a status
 * region says the same to screen readers. `what` names what it copies, for screen readers ("the message").
 */
export function CopyButton({ text, what, className }: { text: string; what: string; className?: string }) {
  const [said, setSaid] = useState<string | null>(null);
  const timer = useRef<number | undefined>(undefined);
  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = async () => {
    const clean = forCopy(text);
    const copied = await copyText(clean.text);
    const n = clean.removed;
    setSaid(
      !copied
        ? "Couldn't copy"
        : n === 0
          ? 'Copied'
          : `Copied, ${n} hidden character${n === 1 ? '' : 's'} removed`,
    );
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setSaid(null), COPY_SAID_MS);
  };

  return (
    <>
      <button
        type="button"
        className={['link', className].filter(Boolean).join(' ')}
        onClick={() => void copy()}
      >
        {said ?? (
          <>
            Copy<span className="sr-only"> {what}</span>
          </>
        )}
      </button>
      <span role="status" className="sr-only">
        {said ?? ''}
      </span>
    </>
  );
}
