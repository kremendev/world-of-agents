// A skill's text before it is saved (v3.4c, T6): what is refused (the hall refuses it too, through team.mjs) and what is
// flagged for Dima's eye. A skill becomes instructions an agent follows, so the whole text is shown, line by line.
import { MAX_TEXT } from './schema';

/** Control (Cc) and format (Cf) characters, tab and line breaks aside: invisible, so refused. */
const INVISIBLE = /[\p{Cc}\p{Cf}]/u;
const KEPT = new Set(['\t', '\n', '\r']);
/** A line Claude Code would run as a shell command when the skill is used. */
const INJECTED = /^\s*!`/;
const LINK = /https?:\/\/|\bwww\.|\]\(|<[a-z][a-z0-9+.-]*:/i;
const SHELL =
  /^\s*(?:\$ |> |PS> ?|(?:npm|npx|node|git|curl|wget|rm|del|powershell|pwsh|bash|sh|cmd|iwr|iex|irm|Invoke-\w+)\b)/i;

export type Flag = 'link' | 'command';
export type TextCheck = { refusals: string[]; lines: { text: string; flags: Flag[] }[] };

export function checkText(text: string): TextCheck {
  const refusals: string[] = [];
  if (text.trim() === '') refusals.push('The text is empty.');
  if (text.length > MAX_TEXT) refusals.push(`The text is over ${MAX_TEXT} characters.`);
  const hidden = [...text].filter((c) => INVISIBLE.test(c) && !KEPT.has(c)).length;
  if (hidden > 0) refusals.push(`It holds ${hidden} invisible character${hidden === 1 ? '' : 's'}.`);
  let fenced = false;
  const lines = text.split(/\r?\n/).map((line, i) => {
    const flags: Flag[] = [];
    const fence = /^\s*```/.test(line);
    if (INJECTED.test(line))
      refusals.push(`Line ${i + 1} starts with !\`, which Claude Code would run as a command.`);
    if (LINK.test(line)) flags.push('link');
    if (fenced || fence || SHELL.test(line) || line.includes('!`')) flags.push('command');
    if (fence) fenced = !fenced;
    return { text: line, flags };
  });
  return { refusals, lines };
}
