// npm run dev:refresh: mirrors plugin/ into the desktop dev install, ~/Downloads/woa-dev/plugin (CLAUDE.md, Testing notes).
//
// It copies every file of plugin/ that is new or changed, and deletes the files plugin/ no longer has. It never deletes a
// folder: a hall started from the dev install runs in woa-dev/plugin/hall, and Windows won't remove a folder a process
// stands in. (The old `rm -rf` stops there half done, and the `cp -r` after it then copies into a nested plugin/plugin/.)
//
// It refuses any target outside ~/Downloads/woa-dev, a target or root reached through a link, and a link on either side.
// Before it changes anything it checks it can write every file it will replace or delete: if a program holds one, it
// names that file and changes nothing.

import {
  closeSync,
  copyFileSync,
  lstatSync,
  mkdirSync,
  openSync,
  readdirSync,
  readFileSync,
  unlinkSync,
} from 'node:fs';
import { homedir } from 'node:os';
import { isAbsolute, join, relative, resolve, sep } from 'node:path';

export class RefreshError extends Error {}

/** `path` is inside `root`, and not `root` itself. */
const inside = (root, path) => {
  const rel = relative(root, path);
  return rel !== '' && !rel.startsWith('..') && !isAbsolute(rel);
};

const exists = (path) => {
  try {
    lstatSync(path);
    return true;
  } catch {
    return false;
  }
};

/** Every file and folder under `dir`, as forward-slash paths relative to it. A link anywhere is refused. */
function entries(dir, side) {
  const files = [];
  const dirs = [];
  const walk = (rel) => {
    for (const name of readdirSync(join(dir, rel)).sort()) {
      const path = rel ? `${rel}/${name}` : name;
      const stat = lstatSync(join(dir, path));
      if (stat.isSymbolicLink())
        throw new RefreshError(`${side} holds a link, ${path}: refusing to follow it.`);
      if (stat.isDirectory()) {
        dirs.push(path);
        walk(path);
      } else if (stat.isFile()) files.push(path);
    }
  };
  walk('');
  return { files, dirs };
}

/** Can the file be opened for writing? A program holding it (or a read-only file) says no. */
function writable(path) {
  try {
    closeSync(openSync(path, 'r+'));
    return true;
  } catch {
    return false;
  }
}

/**
 * Makes `target` hold exactly `source`'s files. `root` is the one folder it may write in. Returns what it did; throws a
 * RefreshError, having changed nothing, when it refuses.
 */
export function mirror({ source, target, root }) {
  const from = resolve(source);
  const to = resolve(target);
  const base = resolve(root);
  if (!inside(base, to)) throw new RefreshError(`The target must be inside ${base}: refusing ${to}.`);
  if (inside(from, to) || inside(to, from) || from === to)
    throw new RefreshError('Source and target overlap.');
  for (let at = to; at !== base && inside(base, at); at = resolve(at, '..')) {
    if (exists(at) && lstatSync(at).isSymbolicLink())
      throw new RefreshError(`${at} is a link: refusing to write through it.`);
  }
  if (exists(base) && lstatSync(base).isSymbolicLink())
    throw new RefreshError(`${base} is a link: refusing to write through it.`);
  if (exists(to) && !lstatSync(to).isDirectory()) throw new RefreshError(`${to} is not a folder.`);

  const want = entries(from, 'The source');
  const have = exists(to) ? entries(to, 'The target') : { files: [], dirs: [] };
  const keep = new Set(want.files);
  const changed = want.files.filter(
    (file) =>
      !have.files.includes(file) || !readFileSync(join(from, file)).equals(readFileSync(join(to, file))),
  );
  const removed = have.files.filter((file) => !keep.has(file));

  // Everything it will replace or delete must be free first, so a held file stops it before any change.
  const held = [...changed.filter((file) => have.files.includes(file)), ...removed].filter(
    (file) => !writable(join(to, file)),
  );
  if (held.length > 0) {
    throw new RefreshError(
      `A program holds ${held.join(', ')} in ${to} (a running hall, or Claude Code itself?). Nothing was changed: ` +
        'stop it, or run /reload-plugins in the desktop session, then run npm run dev:refresh again.',
    );
  }

  let done = 0;
  try {
    for (const dir of want.dirs) mkdirSync(join(to, ...dir.split('/')), { recursive: true });
    mkdirSync(to, { recursive: true });
    for (const file of changed) {
      copyFileSync(join(from, file), join(to, file));
      done += 1;
    }
    for (const file of removed) {
      unlinkSync(join(to, file));
      done += 1;
    }
  } catch (error) {
    throw new RefreshError(
      `Stopped after ${done} of ${changed.length + removed.length} changes: ${error.message}. Run it again once ` +
        'nothing holds that file.',
    );
  }
  return { copied: changed, removed, unchanged: want.files.length - changed.length };
}

// Run only as a script, so tests can import it.
if (process.argv[1]?.endsWith('dev-refresh.mjs')) {
  const root = join(homedir(), 'Downloads', 'woa-dev');
  const target = join(root, 'plugin');
  const shown = (path) => path.replace(homedir(), '~').split(sep).join('/');
  try {
    const { copied, removed, unchanged } = mirror({
      source: resolve(import.meta.dirname, '..', 'plugin'),
      target,
      root,
    });
    console.log(
      `dev:refresh: ${copied.length} copied, ${removed.length} deleted, ${unchanged} unchanged in ${shown(target)}.`,
    );
    for (const file of copied) console.log(`  copied  ${file}`);
    for (const file of removed) console.log(`  deleted ${file}`);
    if (copied.length + removed.length > 0) console.log('Now run /reload-plugins in the desktop session.');
  } catch (error) {
    console.error(`dev:refresh: ${error instanceof RefreshError ? error.message : String(error)}`);
    process.exit(1);
  }
}
