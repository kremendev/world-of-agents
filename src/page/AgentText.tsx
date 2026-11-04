import type { ReactNode } from 'react';

/** `code` or **bold**, on one line. Everything else in an agent's text is plain text. */
const SPANS = /`([^`\n]+)`|\*\*([^\n]+?)\*\*/g;

/**
 * An agent's text with its `code` spans and **bold** as React elements. Agent output is untrusted: this builds
 * elements around plain strings and never touches HTML, so markup in the text stays text.
 */
export function AgentText({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  let at = 0;
  for (const match of text.matchAll(SPANS)) {
    const [whole, code, bold = ''] = match;
    parts.push(text.slice(at, match.index));
    parts.push(
      code !== undefined ? (
        <code key={match.index}>{code}</code>
      ) : (
        // Agents do put code in bold (run 3). The lazy match means no ** is left inside, so this goes one level deep.
        <strong key={match.index}>
          <AgentText text={bold} />
        </strong>
      ),
    );
    at = match.index + whole.length;
  }
  parts.push(text.slice(at));
  return <>{parts}</>;
}
