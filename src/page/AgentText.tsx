import type { ReactNode } from 'react';

/**
 * `code` or **bold**, on one line, or a Markdown link `[text](target)` (or an image's `![text](target)`). A target may
 * hold one level of parentheses, so `javascript:alert(1)` is matched whole. Everything else is plain text.
 */
const SPANS = /`([^`\n]+)`|\*\*([^\n]+?)\*\*|!?\[([^\]\n]*)\]\((?:[^()\s]|\([^()\s]*\))*\)/g;

/**
 * An agent's text with its `code` spans and **bold** as React elements. Agent output is untrusted: this builds
 * elements around plain strings and never touches HTML, so markup in the text stays text. A link is never a link:
 * only its text shows, as plain text, and its target never does.
 */
export function AgentText({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  let at = 0;
  for (const match of text.matchAll(SPANS)) {
    const [whole, code, bold, link] = match;
    parts.push(text.slice(at, match.index));
    if (code !== undefined) {
      parts.push(<code key={match.index}>{code}</code>);
    } else if (bold !== undefined) {
      // Agents do put code in bold (run 3). The lazy match means no ** is left inside, so this goes one level deep.
      parts.push(
        <strong key={match.index}>
          <AgentText text={bold} />
        </strong>,
      );
    } else {
      // The link's text keeps its own `code` and **bold**; the target is dropped.
      parts.push(<AgentText key={match.index} text={link ?? ''} />);
    }
    at = match.index + whole.length;
  }
  parts.push(text.slice(at));
  return <>{parts}</>;
}
