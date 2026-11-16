// v3.10 (docs/v3.10-plan.md): a skill from GitHub. Three link shapes, parsed into parts; one GET to the constant host,
// built from them, with no redirect, a timeout and a size cap. A fake fetch stands in for GitHub: these tests never
// reach it.
import { describe, expect, it, vi } from 'vitest';
import { fetchSkill, FETCH_MS, parseLink, RAW_HOST, rawUrl, USER_AGENT } from './github';
import { MAX_FILE } from './skill-check';

const PARTS = {
  owner: 'davila7',
  repo: 'claude-code-templates',
  ref: 'main',
  path: 'cli-tool/components/skills/owasp/SKILL.md',
};

describe('parseLink: three shapes, nothing else', () => {
  it.each([
    [
      'blob',
      'https://github.com/davila7/claude-code-templates/blob/main/cli-tool/components/skills/owasp/SKILL.md',
    ],
    ['tree', 'https://github.com/davila7/claude-code-templates/tree/main/cli-tool/components/skills/owasp'],
    [
      'tree, a slash after',
      'https://github.com/davila7/claude-code-templates/tree/main/cli-tool/components/skills/owasp/',
    ],
    [
      'raw',
      'https://raw.githubusercontent.com/davila7/claude-code-templates/main/cli-tool/components/skills/owasp/SKILL.md',
    ],
    [
      'spaces around',
      '  https://github.com/davila7/claude-code-templates/tree/main/cli-tool/components/skills/owasp  ',
    ],
  ])('%s', (_, link) => {
    expect(parseLink(link)).toEqual(PARTS);
  });

  it('takes a commit as the ref, and a SKILL.md at the root of a repository', () => {
    const commit = 'a'.repeat(40);
    expect(parseLink(`https://github.com/o/r/blob/${commit}/SKILL.md`)).toEqual({
      owner: 'o',
      repo: 'r',
      ref: commit,
      path: 'SKILL.md',
    });
    expect(parseLink('https://github.com/o/r/tree/main')).toEqual({
      owner: 'o',
      repo: 'r',
      ref: 'main',
      path: 'SKILL.md',
    });
  });

  it.each([
    ['http', 'http://github.com/o/r/blob/main/SKILL.md'],
    ['another host', 'https://gitlab.com/o/r/blob/main/SKILL.md'],
    ['a look-alike host', 'https://github.com.evil.example/o/r/blob/main/SKILL.md'],
    ['a subdomain', 'https://gist.github.com/o/r/blob/main/SKILL.md'],
    ['a port', 'https://github.com:443/o/r/blob/main/SKILL.md'],
    ['a user', 'https://me@github.com/o/r/blob/main/SKILL.md'],
    ['a query', 'https://github.com/o/r/blob/main/SKILL.md?raw=1'],
    ['a fragment', 'https://github.com/o/r/blob/main/SKILL.md#L1'],
    ['a percent sign', 'https://github.com/o/r/blob/main/my%20skill/SKILL.md'],
    ['a backslash', `https://github.com/o/r/blob/main/a${String.fromCharCode(92)}b/SKILL.md`],
    ['a dot segment', 'https://github.com/o/r/blob/main/a/../SKILL.md'],
    ['another file', 'https://github.com/o/r/blob/main/README.md'],
    ['a blob that is a folder', 'https://github.com/o/r/blob/main/skills/owasp'],
    ['a tree that is a file', 'https://github.com/o/r/tree/main/skills/SKILL.md'],
    ['an issue', 'https://github.com/o/r/issues/1'],
    ['a repository alone', 'https://github.com/o/r'],
    ['a bad owner', 'https://github.com/-o/r/blob/main/SKILL.md'],
    ['a repository of two dots', 'https://github.com/o/../blob/main/SKILL.md'],
    ['eleven folders', `https://github.com/o/r/blob/main/${'a/'.repeat(10)}SKILL.md`],
    ['raw without its ref', 'https://raw.githubusercontent.com/o/r/SKILL.md'],
    ['nothing', ''],
  ])('refuses %s', (_, link) => {
    expect(parseLink(link)).toBeNull();
  });
});

describe('fetchSkill: one GET to the constant host', () => {
  const answer = (body: ConstructorParameters<typeof Response>[0], init: ResponseInit = {}) =>
    vi.fn(async () => new Response(body, { status: 200, ...init }));

  it('asks exactly the raw URL, with no redirect, no cookie, a timeout and its own User-Agent', async () => {
    const fake = answer('---\nname: a\ndescription: b\n---\n\nText.\n');
    expect(await fetchSkill(PARTS, fake)).toEqual({
      ok: true,
      raw: '---\nname: a\ndescription: b\n---\n\nText.\n',
    });
    expect(fake).toHaveBeenCalledTimes(1);
    const [url, init] = fake.mock.calls[0] as unknown as [string, RequestInit];
    expect(url).toBe(
      `https://${RAW_HOST}/davila7/claude-code-templates/main/cli-tool/components/skills/owasp/SKILL.md`,
    );
    expect(url).toBe(rawUrl(PARTS));
    expect(init).toMatchObject({
      method: 'GET',
      redirect: 'manual',
      credentials: 'omit',
      headers: { 'User-Agent': USER_AGENT, Accept: 'text/plain' },
    });
    expect(init.signal).toBeInstanceOf(AbortSignal);
    expect(FETCH_MS).toBe(10_000);
    expect(USER_AGENT).toBe('World-of-Agents-hall');
  });

  it('says why when GitHub has no such file, redirects, or answers anything else', async () => {
    expect(await fetchSkill(PARTS, answer('404: Not Found', { status: 404 }))).toEqual({
      ok: false,
      why: 'GitHub has no SKILL.md there (404). Check the link: a folder, its branch, its name.',
    });
    expect(
      await fetchSkill(PARTS, answer(null, { status: 301, headers: { Location: 'https://evil.example/' } })),
    ).toEqual({ ok: false, why: 'GitHub answered with a redirect (301), which the hall never follows.' });
    expect(await fetchSkill(PARTS, answer('busy', { status: 503 }))).toEqual({
      ok: false,
      why: 'GitHub answered 503.',
    });
  });

  it('reads 128 KiB at most, as it arrives, and stops there', { timeout: 5_000 }, async () => {
    // Never an endless stream (16 Nov: with the cap planted out, one held the machine's memory until VS Code died): this
    // one sends twice the cap, then closes, so the test ends whatever fetchSkill does. Each piece waits a turn, so the
    // timeout can still fire; a stream that answers at once runs in microtasks alone, where no timer ever gets a turn.
    let sent = 0;
    const twice = new ReadableStream<Uint8Array>({
      async pull(controller) {
        await new Promise((next) => setTimeout(next, 0));
        if (sent >= 2 * MAX_FILE) return controller.close();
        sent += 16 * 1024;
        controller.enqueue(new Uint8Array(16 * 1024).fill(120));
      },
    });
    const over = await fetchSkill(PARTS, answer(twice));
    // A failure says one short line, never the body.
    expect(over.ok ? `read all ${sent} bytes` : over.why).toBe('The file is over 128 KiB.');
    expect(sent).toBeLessThan(MAX_FILE + 64 * 1024);
    expect((await fetchSkill(PARTS, answer('x'.repeat(MAX_FILE)))).ok).toBe(true);
  });

  it('refuses what is not UTF-8, and says when GitHub could not be reached or was too slow', async () => {
    expect(await fetchSkill(PARTS, answer(new Uint8Array([0xff, 0xfe, 0x41])))).toEqual({
      ok: false,
      why: "The file isn't UTF-8 text.",
    });
    const unreachable = vi.fn(async () => {
      throw new TypeError('fetch failed');
    });
    expect(await fetchSkill(PARTS, unreachable)).toEqual({ ok: false, why: "GitHub couldn't be reached." });
    const slow = vi.fn(async () => {
      throw Object.assign(new Error('timed out'), { name: 'TimeoutError' });
    });
    expect(await fetchSkill(PARTS, slow)).toEqual({
      ok: false,
      why: "GitHub didn't answer within 10 seconds.",
    });
  });
});
