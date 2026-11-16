// v3.10 (docs/v3.10-plan.md, Dima's answer of 16 Nov): his Claude skills, read where Claude Code keeps them, in
// ~/.claude/skills (his personal skills, and the account's skills synced under synced/<org>_<account>/). Read only, on
// his press: only files named SKILL.md, at most three folders down, every part of the path lstat'ed and left out if it
// is a link or a junction, its real path inside the folder, at most 64 KiB each and 200 in all. That folder can hold
// secrets in other files; nothing but a SKILL.md is ever opened. Each one's label (his own, or Anthropic's) comes from
// the desktop app's skill manifest, read for that alone, under the same home folder: never an environment variable.
import { lstatSync, readdirSync, readFileSync, realpathSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { isDescription, type ClaudeLabel } from '../plugin/team/team.mjs';
import { checkSkillFile } from './skill-check';

export const MAX_CLAUDE_FILE = 64 * 1024;
export const MAX_CLAUDE_SKILLS = 200;
/** The app's manifest is a list of a few dozen skills: anything bigger isn't it. */
const MAX_MANIFEST = 1024 * 1024;
/** synced/<org>_<account>: the two ids the app's store is kept under. */
const ACCOUNT = /^([0-9a-f-]{36})_([0-9a-f-]{36})$/;
const PACKAGE = /^claude_[a-z0-9]{1,40}$/;

export type ClaudeSkill = {
  /** Relative to ~/.claude/skills, with forward slashes: what the library keeps and the screen shows. */
  file: string;
  name: string;
  description: string;
  label: ClaudeLabel;
};

export const skillsRoot = (home: string) => join(home, '.claude', 'skills');

/** Whether a name may be part of the path: shown as text, never with a backslash, a dot folder or a hidden character. */
const isPart = (name: string) =>
  isDescription(name, 255) && name !== '.' && name !== '..' && !name.includes('\\') && !name.includes('/');

/** Whether `path` is a plain folder or file, not a link, and its real path is inside `root`. */
function plain(path: string, root: string, kind: 'dir' | 'file'): boolean {
  try {
    const stat = lstatSync(path);
    if (stat.isSymbolicLink() || (kind === 'dir' ? !stat.isDirectory() : !stat.isFile())) return false;
    if (kind === 'file' && stat.size > MAX_CLAUDE_FILE) return false;
    const real = realpathSync.native(path);
    return real === root || real.startsWith(root + sep);
  } catch {
    return false;
  }
}

/** Every SKILL.md under ~/.claude/skills, at most three folders down, the links left out; and how many were too big. */
function findFiles(home: string): { files: string[]; tooBig: number } {
  const top = skillsRoot(home);
  let root: string;
  try {
    if (lstatSync(top).isSymbolicLink()) return { files: [], tooBig: 0 };
    root = realpathSync.native(top);
  } catch {
    return { files: [], tooBig: 0 };
  }
  const files: string[] = [];
  let tooBig = 0;
  const walk = (dir: string, depth: number) => {
    let names: string[];
    try {
      names = readdirSync(dir).sort();
    } catch {
      return;
    }
    for (const name of names) {
      if (files.length >= MAX_CLAUDE_SKILLS || !isPart(name)) continue;
      const path = join(dir, name);
      if (name === 'SKILL.md' && depth > 0) {
        if (plain(path, root, 'file')) files.push(relative(root, path).split(sep).join('/'));
        else {
          try {
            if (lstatSync(path).isFile()) tooBig++;
          } catch {
            // gone, or not readable: left out
          }
        }
      } else if (depth < 3 && plain(path, root, 'dir')) walk(path, depth + 1);
    }
  };
  walk(root, 0);
  return { files, tooBig };
}

/**
 * The desktop app's labels for the skills it synced for one account: name to "mine" or "built-in". Empty when the
 * manifest can't be read: those skills are then "unlabelled".
 */
function labelsOf(home: string, org: string, account: string): Map<string, ClaudeLabel> {
  const labels = new Map<string, ClaudeLabel>();
  const data = join(home, 'AppData', 'Local', 'Claude-Data');
  let packages: string[];
  try {
    packages = readdirSync(data).filter((name) => PACKAGE.test(name));
  } catch {
    return labels;
  }
  for (const pkg of packages) {
    const file = join(data, pkg, 'local-agent-mode-sessions', 'skills-plugin', org, account, 'manifest.json');
    try {
      const stat = lstatSync(file);
      if (!stat.isFile() || stat.size > MAX_MANIFEST) continue;
      const manifest = JSON.parse(readFileSync(file, 'utf8')) as { skills?: unknown };
      if (!Array.isArray(manifest.skills)) continue;
      for (const s of manifest.skills as { name?: unknown; creatorType?: unknown }[]) {
        if (typeof s?.name !== 'string') continue;
        if (s.creatorType === 'user') labels.set(s.name, 'mine');
        else if (s.creatorType === 'anthropic') labels.set(s.name, 'built-in');
      }
    } catch {
      // Not there, or not the manifest it was: no labels from it.
    }
  }
  return labels;
}

/** A file's label: a personal skill is his own; a synced one is what the app's manifest says, or unlabelled. */
function labelOf(file: string, home: string, cache: Map<string, Map<string, ClaudeLabel>>): ClaudeLabel {
  const parts = file.split('/');
  if (parts[0] !== 'synced') return 'mine';
  const account = ACCOUNT.exec(parts[1] ?? '');
  if (!account || parts.length !== 4) return 'unlabelled';
  const key = parts[1]!;
  if (!cache.has(key)) cache.set(key, labelsOf(home, account[1]!, account[2]!));
  return cache.get(key)!.get(parts[2]!) ?? 'unlabelled';
}

/** Each of his Claude skills with its name, what it's for (from its header, or its folder's name) and its label. */
export function listClaudeSkills(home: string): { skills: ClaudeSkill[]; tooBig: number } {
  const { files, tooBig } = findFiles(home);
  const cache = new Map<string, Map<string, ClaudeLabel>>();
  const skills = files.map((file) => {
    const check = checkSkillFile(readFileSync(join(skillsRoot(home), ...file.split('/')), 'utf8'));
    const folder = file.split('/').at(-2) ?? file;
    return {
      file,
      name: (check.name || folder).slice(0, 200),
      description: check.description.slice(0, 1024),
      label: labelOf(file, home, cache),
    };
  });
  return { skills, tooBig };
}

/**
 * One of his Claude skills, by the file the list named: read again with every rule above, its text and its label. Null
 * when it isn't one the list would name.
 */
export function readClaudeSkill(home: string, file: string): { raw: string; label: ClaudeLabel } | null {
  const parts = file.split('/');
  if (parts.length < 2 || parts.length > 4 || parts.at(-1) !== 'SKILL.md' || !parts.every(isPart))
    return null;
  let root: string;
  try {
    if (lstatSync(skillsRoot(home)).isSymbolicLink()) return null;
    root = realpathSync.native(skillsRoot(home));
  } catch {
    return null;
  }
  let path = root;
  for (const [i, part] of parts.entries()) {
    path = join(path, part);
    if (!plain(path, root, i === parts.length - 1 ? 'file' : 'dir')) return null;
  }
  return { raw: readFileSync(path, 'utf8'), label: labelOf(file, home, new Map()) };
}
