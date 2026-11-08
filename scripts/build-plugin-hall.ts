// npm run build:plugin-hall: the prebuilt hall the plugin carries, in plugin/hall/ (tracked in git), so an install from
// GitHub needs no npm install:
//   page/          the page, built by Vite as for npm run hall: Live, base "/", no CSP meta tag (the hall sends the header)
//   server.mjs     server/plugin-hall.ts and all it imports, Zod included, in one file that imports only node: modules
//   manifest.json  each page file by URL path, with its content type: the only files the plugin's hall serves
//
// npm run check:hall (the --check flag) builds the same into a temp folder and fails if any file differs from
// plugin/hall/, either way. A build takes seconds and tests must not run builds, so it isn't in npm run check: it is the
// first step of npm run release:check, which comes before every release.

import { existsSync, mkdtempSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, relative, resolve, sep } from 'node:path';
import { build as bundle } from 'esbuild';
import { build } from 'vite';
import { listPage } from '../server/page';

const REPO = resolve(import.meta.dirname, '..');
const HALL = join(REPO, 'plugin', 'hall');

const BANNER = [
  '// The hall the World of Agents plugin starts. Built by scripts/build-plugin-hall.ts from server/plugin-hall.ts and',
  "// everything it imports (npm run build:plugin-hall). Don't edit it: change server/ and build again. npm run check:hall",
  '// fails when it differs from a fresh build.',
].join('\n');

/** Every file under `dir`, as forward-slash paths relative to it, sorted. None when there is no such folder. */
function filesIn(dir: string): string[] {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { recursive: true, withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => relative(dir, join(entry.parentPath, entry.name)).split(sep).join('/'))
    .sort();
}

function fail(message: string): never {
  console.error(`build-plugin-hall: ${message}`);
  process.exit(1);
}

async function buildInto(out: string): Promise<void> {
  // The Live page whatever the shell says: the hosted demo's VITE_LIVE=false would build a page that never connects.
  process.env.VITE_LIVE = 'true';
  rmSync(out, { recursive: true, force: true });
  const page = join(out, 'page');
  await build({
    root: REPO,
    configFile: join(REPO, 'vite.config.ts'),
    logLevel: 'warn',
    build: { outDir: page, emptyOutDir: true },
  });
  await bundle({
    entryPoints: [join(REPO, 'server', 'plugin-hall.ts')],
    absWorkingDir: REPO,
    bundle: true,
    platform: 'node',
    format: 'esm',
    target: 'node20.19',
    outfile: join(out, 'server.mjs'),
    banner: { js: BANNER },
    charset: 'ascii',
    logLevel: 'warning',
  });

  const files = listPage(page);
  const unlisted = filesIn(page).filter((file) => !(`/${file}` in files));
  if (unlisted.length > 0) fail(`the page has files the hall would not serve: ${unlisted.join(', ')}`);
  writeFileSync(join(out, 'manifest.json'), `${JSON.stringify({ files }, null, 2)}\n`);

  const imports = [
    ...readFileSync(join(out, 'server.mjs'), 'utf8').matchAll(/^import .* from "([^"]+)";$/gm),
  ];
  const outside = imports.map((m) => m[1]).filter((name) => !name?.startsWith('node:'));
  if (outside.length > 0) fail(`server.mjs imports more than node: modules: ${outside.join(', ')}`);
}

/** The paths that differ between two folders: only in one, or not the same bytes. */
function differences(a: string, b: string): string[] {
  const inA = filesIn(a);
  const inB = filesIn(b);
  const all = [...new Set([...inA, ...inB])].sort();
  return all.filter(
    (file) =>
      !inA.includes(file) ||
      !inB.includes(file) ||
      !readFileSync(join(a, file)).equals(readFileSync(join(b, file))),
  );
}

if (process.argv.includes('--check')) {
  const temp = mkdtempSync(join(tmpdir(), 'woa-plugin-hall-'));
  try {
    await buildInto(join(temp, 'hall'));
    const differ = differences(join(temp, 'hall'), HALL);
    if (differ.length > 0) {
      fail(
        `plugin/hall/ is not what the source builds. Run npm run build:plugin-hall and commit the result:\n  ${differ.join('\n  ')}`,
      );
    }
    console.log('check:hall: plugin/hall/ matches a fresh build');
  } finally {
    rmSync(temp, { recursive: true, force: true });
  }
} else {
  await buildInto(HALL);
  console.log(`build-plugin-hall: built ${filesIn(HALL).length} files into plugin/hall/`);
}
