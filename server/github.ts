// v3.10 (docs/v3.10-plan.md): a skill from GitHub, by a link Dima pastes. The hall's one network call: one HTTPS GET to
// raw.githubusercontent.com, a constant, for one SKILL.md, built from the parts of a link that matches one of three
// shapes, on his press. No redirect followed, 10 seconds at most, the answer read up to 128 KiB as it arrives (GitHub
// sends it compressed, so its length header says nothing), no cookie, no token, and a User-Agent with nothing of his.
// The page's own policy stays connect-src 'self': only this file, in the hall, reaches GitHub.
import { GITHUB_OWNER, isGithubPath, isSegment } from '../plugin/team/team.mjs';
import { MAX_FILE } from './skill-check';

export const RAW_HOST = 'raw.githubusercontent.com';
export const FETCH_MS = 10_000;
export const USER_AGENT = 'World-of-Agents-hall';

export type GithubParts = { owner: string; repo: string; ref: string; path: string };

/** The three shapes a link may have, as the page shows them when one is refused. */
export const LINK_SHAPES = [
  'https://github.com/<owner>/<repo>/blob/<ref>/<folder>/SKILL.md',
  'https://github.com/<owner>/<repo>/tree/<ref>/<folder>',
  'https://raw.githubusercontent.com/<owner>/<repo>/<ref>/<folder>/SKILL.md',
];

const isRef = (ref: string) => isSegment(ref) || /^[0-9a-f]{40}$/.test(ref);

/**
 * A link's owner, repository, ref and path, or null. Nothing but the three shapes: https, one of the two hosts exactly,
 * no port, no user, no query, no fragment, no percent sign, a ref of one segment (a branch with a slash can't be told
 * from the path) or a 40-hex commit, a path of plain segments ending in SKILL.md.
 */
export function parseLink(link: string): GithubParts | null {
  const m = /^https:\/\/(github\.com|raw\.githubusercontent\.com)\/([^?#@%\\\s]+)$/.exec(link.trim());
  if (!m) return null;
  const [host, rest] = [m[1]!, m[2]!];
  const parts = rest.replace(/\/$/, '').split('/');
  let owner: string, repo: string, ref: string, path: string[];
  if (host === 'github.com') {
    const [o, r, kind, f, ...p] = parts;
    if (o === undefined || r === undefined || f === undefined) return null;
    if (kind === 'blob' && p.at(-1) === 'SKILL.md') path = p;
    else if (kind === 'tree' && p.at(-1) !== 'SKILL.md') path = [...p, 'SKILL.md'];
    else return null;
    [owner, repo, ref] = [o, r, f];
  } else {
    const [o, r, f, ...p] = parts;
    if (o === undefined || r === undefined || f === undefined || p.at(-1) !== 'SKILL.md') return null;
    [owner, repo, ref, path] = [o, r, f, p];
  }
  const joined = path.join('/');
  if (!GITHUB_OWNER.test(owner) || !isSegment(repo) || !isRef(ref) || !isGithubPath(joined)) return null;
  return { owner, repo, ref, path: joined };
}

/** The one URL the hall ever fetches: the constant host, then the checked parts. */
export const rawUrl = (p: GithubParts) => `https://${RAW_HOST}/${p.owner}/${p.repo}/${p.ref}/${p.path}`;

export type Fetched = { ok: true; raw: string } | { ok: false; why: string };

/**
 * The SKILL.md at those parts, or why not, in words the page shows. `fetchImpl` is Node's own fetch; tests give theirs,
 * and never reach GitHub.
 */
export async function fetchSkill(parts: GithubParts, fetchImpl: typeof fetch = fetch): Promise<Fetched> {
  let res: Response;
  try {
    res = await fetchImpl(rawUrl(parts), {
      method: 'GET',
      redirect: 'manual',
      credentials: 'omit',
      headers: { 'User-Agent': USER_AGENT, Accept: 'text/plain' },
      signal: AbortSignal.timeout(FETCH_MS),
    });
  } catch (error) {
    return {
      ok: false,
      why:
        (error as Error).name === 'TimeoutError'
          ? `GitHub didn't answer within ${FETCH_MS / 1000} seconds.`
          : "GitHub couldn't be reached.",
    };
  }
  if (res.status === 404) {
    await res.body?.cancel();
    return {
      ok: false,
      why: 'GitHub has no SKILL.md there (404). Check the link: a folder, its branch, its name.',
    };
  }
  if (res.status >= 300 && res.status < 400) {
    await res.body?.cancel();
    return {
      ok: false,
      why: `GitHub answered with a redirect (${res.status}), which the hall never follows.`,
    };
  }
  if (res.status !== 200 || !res.body) {
    await res.body?.cancel();
    return { ok: false, why: `GitHub answered ${res.status}.` };
  }
  const reader = res.body.getReader();
  const chunks: Uint8Array[] = [];
  let bytes = 0;
  try {
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      bytes += value.byteLength;
      if (bytes > MAX_FILE) {
        await reader.cancel();
        return { ok: false, why: `The file is over ${MAX_FILE / 1024} KiB.` };
      }
      chunks.push(value);
    }
  } catch (error) {
    return {
      ok: false,
      why:
        (error as Error).name === 'TimeoutError'
          ? `GitHub didn't finish within ${FETCH_MS / 1000} seconds.`
          : 'The answer from GitHub broke off.',
    };
  }
  const body = new Uint8Array(bytes);
  let at = 0;
  for (const chunk of chunks) {
    body.set(chunk, at);
    at += chunk.byteLength;
  }
  try {
    return { ok: true, raw: new TextDecoder('utf-8', { fatal: true }).decode(body) };
  } catch {
    return { ok: false, why: "The file isn't UTF-8 text." };
  }
}
