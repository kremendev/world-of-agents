import { readdirSync } from 'node:fs';
import { extname, join, relative, sep } from 'node:path';

/** The kinds of file the built page is made of. Anything else is never served. */
export const PAGE_TYPES: Readonly<Record<string, string>> = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
};

/** The page the hall serves: its folder, and each file by its URL path ("/assets/app.js") with its content type. */
export type Page = { dir: string; files: ReadonlyMap<string, string> };

/**
 * A file's URL path: "/" and then folder and file names of letters, digits, `.`, `_` and `-`, none starting with a dot.
 * So no ".." or "." segment, no hidden file, no backslash and nothing encoded can name a file outside the page folder.
 */
const FILE_PATH = /^(?:\/[A-Za-z0-9_-][A-Za-z0-9._-]*)+$/;

const typeOf = (path: string) => PAGE_TYPES[extname(path).toLowerCase()];

/**
 * Every page file under `dir`, for `npm run hall`'s dist/. Files of other kinds, and names the URL check would refuse,
 * are left out. A missing folder is an empty page. The plugin's hall never lists a folder: it reads its manifest.
 */
export function listPage(dir: string): Record<string, string> {
  let names: string[];
  try {
    names = readdirSync(dir, { recursive: true, encoding: 'utf8' });
  } catch {
    return {};
  }
  const files: Record<string, string> = {};
  for (const name of names.sort()) {
    const path = `/${relative(dir, join(dir, name)).split(sep).join('/')}`;
    const type = typeOf(path);
    if (type && FILE_PATH.test(path)) files[path] = type;
  }
  return files;
}

/**
 * The files a manifest names, checked: each path as FILE_PATH allows, each type the one its extension is served as.
 * Anything else throws, so a hall with a changed manifest refuses to start rather than serve what it names.
 */
export function readManifest(json: unknown): ReadonlyMap<string, string> {
  const files = (json as { files?: unknown } | null)?.files;
  if (typeof files !== 'object' || files === null || Array.isArray(files)) {
    throw new Error('the manifest has no file list');
  }
  const out = new Map<string, string>();
  for (const [path, type] of Object.entries(files)) {
    if (!FILE_PATH.test(path) || typeOf(path) === undefined || type !== typeOf(path)) {
      throw new Error('the manifest names a file the hall does not serve');
    }
    out.set(path, type);
  }
  return out;
}
