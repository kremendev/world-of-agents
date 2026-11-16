// v3.10 (docs/v3.10-plan.md): a SKILL.md from outside, pasted, from GitHub or from Dima's Claude skills, read for the one
// check screen all three share. Its header is parsed with yaml 2.9.1 (Dima, 16 Nov: misreading a third-party header is a
// bigger risk than one dependency): only after the size check, the core schema, unique keys, an alias limit of 5, and no
// tag at all, a header that uses one, or makes the parser warn, refused whole. Of the header only `name`, `description`
// and `license` are kept; every other key is named and dropped. The text after it is what a specialist will read, shown
// whole and checked on the page (checkText()), then again by team.mjs when it is saved. Pure: it reads nothing.
import { isMap, isScalar, parseDocument, visit } from 'yaml';

/** A whole SKILL.md, header and text, is at most this long here: GitHub's answer is cut at 128 KiB before. */
export const MAX_FILE = 128 * 1024;
/** The header, between the two `---` lines. */
export const MAX_HEADER = 16 * 1024;
/** At most this many mentions of files that don't come along are listed. */
export const MAX_MENTIONS = 12;

export type SkillCheck = {
  /** The header's name and description as written, the description's line breaks and runs of spaces made one space. */
  name: string;
  description: string;
  /** The header's `license`, as written, made one line; null when there is none. */
  license: string | null;
  /** The text after the header, trimmed: what is saved, and what a specialist reads. */
  text: string;
  /** Every other header key, by name, and what it would have done where that is known. */
  dropped: { key: string; why: string | null }[];
  /** What the text names that doesn't come along: folders, relative paths, scripts it runs. */
  missing: string[];
  /** Why it can't be added whatever Dima changes on the check screen. Empty when it can. */
  refusals: string[];
};

/** What a dropped key would have done in Claude Code. */
const WHY: Record<string, string> = {
  'allowed-tools': 'would have let tools run without asking',
  hooks: 'would have run commands',
};

const oneLine = (s: string) => s.replace(/\s+/g, ' ').trim();
/** A key's name, as the screen shows it: plain characters only, cut at 60. */
const PLAIN_KEY = /^[\p{L}\p{N} ._-]{1,60}$/u;

const empty = (refusals: string[]): SkillCheck => ({
  name: '',
  description: '',
  license: null,
  text: '',
  dropped: [],
  missing: [],
  refusals,
});

/** The header and the text of a SKILL.md, or why not. */
function split(raw: string): { header: string; text: string } | string {
  // A byte order mark before the header is never saved: only the text after the header is.
  const file = raw.startsWith(String.fromCharCode(0xfeff)) ? raw.slice(1) : raw;
  const lines = file.split(/\r?\n/);
  if (lines[0]?.trimEnd() !== '---')
    return 'It has no header: a SKILL.md starts with a line of three dashes, then its name and description.';
  const end = lines.findIndex((line, i) => i > 0 && line.trimEnd() === '---');
  if (end < 0) return 'Its header never ends: there is no second line of three dashes.';
  const header = lines.slice(1, end).join('\n');
  if (header.length > MAX_HEADER) return `Its header is over ${MAX_HEADER / 1024} KiB.`;
  return {
    header,
    text: lines
      .slice(end + 1)
      .join('\n')
      .trim(),
  };
}

export function checkSkillFile(raw: string): SkillCheck {
  if (raw.length > MAX_FILE) return empty([`The file is over ${MAX_FILE / 1024} KiB.`]);
  const parts = split(raw);
  if (typeof parts === 'string') return empty([parts]);
  const doc = parseDocument(parts.header, {
    schema: 'core',
    uniqueKeys: true,
    customTags: [],
    prettyErrors: false,
  });
  const problems = [...doc.errors, ...doc.warnings];
  if (problems.length > 0)
    return empty([`Its header isn't YAML World of Agents reads (${problems[0]!.code}).`]);
  let tagged = false;
  visit(doc, {
    Node(_, node) {
      if ('tag' in node && node.tag) tagged = true;
    },
  });
  if (tagged) return empty(['Its header uses a YAML tag (!), which World of Agents never reads.']);
  if (!isMap(doc.contents)) return empty(["Its header isn't a list of keys and values."]);
  for (const item of doc.contents.items) {
    if (!isScalar(item.key) || typeof item.key.value !== 'string' || !PLAIN_KEY.test(item.key.value))
      return empty(['Its header has a key that is not a plain word.']);
  }
  let data: Record<string, unknown>;
  try {
    data = doc.toJS({ maxAliasCount: 5 }) as Record<string, unknown>;
  } catch {
    return empty(['Its header repeats itself too often (YAML aliases).']);
  }
  // A name or description that isn't text comes as nothing: the check screen asks for it, as the skill form does.
  const text = (key: string) => (typeof data[key] === 'string' ? (data[key] as string) : null);
  const license = text('license');
  const dropped = Object.keys(data)
    .filter((key) => !['name', 'description', 'license'].includes(key))
    .map((key) => ({ key, why: WHY[key] ?? null }));
  for (const key of ['name', 'description', 'license'])
    if (data[key] !== undefined && text(key) === null) dropped.push({ key, why: null });
  return {
    name: oneLine(text('name') ?? ''),
    description: oneLine(text('description') ?? ''),
    license: license === null ? null : oneLine(license),
    text: parts.text,
    dropped,
    missing: mentions(parts.text),
    refusals: [],
  };
}

/**
 * Files the text names that don't come along, in the order it names them: a folder a skill keeps beside its SKILL.md
 * (scripts/, references/, assets/ and the like), a relative path, a Markdown link to a file, another .md file by name,
 * and a script a command runs. Only the one SKILL.md is ever read, so none of these will be there.
 */
const MENTIONS = [
  /\b(?:scripts|references|reference|assets|templates|examples|resources|bin|lib)\/[\w./-]*/g,
  /(?:^|[\s(`'"[])(\.{1,2}\/[\w./-]+)/g,
  /\]\((?!https?:|mailto:|#)([^)\s]+)\)/g,
  /\b(?!SKILL\.md\b)[A-Z][A-Z0-9_-]*\.md\b/g,
  /\b(?:python3?|node|bash|sh|ruby|deno|bun|tsx|pwsh|powershell)\s+([\w./-]+\.(?:py|js|mjs|cjs|ts|sh|rb|ps1))\b/g,
];
export function mentions(text: string): string[] {
  const found: { at: number; what: string }[] = [];
  for (const pattern of MENTIONS) {
    for (const m of text.matchAll(pattern)) {
      const what = (m[1] ?? m[0]).replace(/[.,;:]+$/, '');
      found.push({ at: (m.index ?? 0) + m[0].indexOf(what), what });
    }
  }
  const seen = new Set<string>();
  return found
    .sort((a, b) => a.at - b.at)
    .map((f) => f.what)
    .filter((what) => what.length > 0 && !seen.has(what) && Boolean(seen.add(what)))
    .slice(0, MAX_MENTIONS);
}
