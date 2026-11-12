import { describe, expect, it } from 'vitest';
import { MAY_START } from '../../plugin/hooks/guard.mjs';
import { ROSTER as PANE_ROSTER, rosterIdOf } from '../../plugin/hooks/mod/roster';
import { agentById, ROSTER } from './roster';
import type { AgentId } from '../events/schema';

const files = import.meta.glob<string>('../../plugin/agents/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

/** The `key: value` lines between the --- fences. Our frontmatter is flat, so it needs no YAML parser. */
function frontmatter(source: string): Record<string, string> {
  const block = /^---\n([\s\S]*?)\n---/.exec(source)?.[1] ?? '';
  return Object.fromEntries(
    block.split('\n').map((line) => {
      const colon = line.indexOf(':');
      return [line.slice(0, colon).trim(), line.slice(colon + 1).trim()];
    }),
  );
}

const agents = Object.entries(files).map(([path, source]) => ({
  id: path.replace(/^.*\/|\.md$/g, ''),
  front: frontmatter(source),
}));

/** "Agent(a, b), Read" to ["Agent(a, b)", "Read"]: the commas inside the brackets don't split. */
const toolList = (tools = '') => tools.match(/[^\s,(][^,(]*(?:\([^)]*\))?/g) ?? [];
const toolName = (tool: string) => tool.replace(/\(.*$/, '');
const sorted = (list: string[]) => [...list].sort();

describe('the plugin agents match the roster the page shows', () => {
  it('has one agent file per roster entry, and no others', () => {
    expect(sorted(agents.map((a) => a.id))).toEqual(sorted(ROSTER.map((a) => a.id)));
  });

  it.each(agents)('$id: same name, model and tools', ({ id, front }) => {
    const shown = agentById(id as AgentId);
    expect(front.name).toBe(id);
    expect(front.model).toBe(shown.model.toLowerCase());
    expect(sorted(toolList(front.tools).map(toolName))).toEqual(sorted(shown.tools.split(', ')));
  });

  // The roster only says "Agent", so what it may start has to be checked here.
  it('lets the Lead start exactly the other four, and nobody else start anyone', () => {
    const agentTools = agents.flatMap((a) =>
      toolList(a.front.tools)
        .filter((tool) => toolName(tool) === 'Agent')
        .map((tool) => ({ id: a.id, tool })),
    );
    // v3.4: the Lead's list names the four; the guild leads have a bare Agent, held to their specialists by the guard.
    expect(agentTools.filter((a) => a.tool !== 'Agent').map((a) => a.id)).toEqual(['lead']);
    expect(sorted(agentTools.filter((a) => a.tool === 'Agent').map((a) => a.id))).toEqual(
      sorted(['designer', 'frontend', 'backend', 'reviewer']),
    );
    const started =
      /^Agent\((.*)\)$/.exec(agentTools.find((a) => a.id === 'lead')?.tool ?? '')?.[1]?.split(', ') ?? [];
    expect(sorted(started)).toEqual(
      sorted(ROSTER.filter((a) => a.id !== 'lead').map((a) => `world-of-agents:${a.id}`)),
    );
    // The guard hook enforces the same list (a subagent's Agent(...) list restricts nothing), so the two can't drift.
    expect(sorted([...MAY_START.main])).toEqual(sorted(started));
  });
});

// The team pane (plugin/hooks/mod) can't import the page's roster: an installed plugin holds nothing outside plugin/.
describe("the team pane's roster matches the page's", () => {
  it('names the same five agents, in the same order, by the same names', () => {
    expect(PANE_ROSTER.map(({ id, name }) => ({ id, name }))).toEqual(
      ROSTER.map(({ id, name }) => ({ id, name })),
    );
  });

  it('knows a subagent only by its exact full type, and never takes the Lead for one', () => {
    for (const { id } of ROSTER.filter((a) => a.id !== 'lead'))
      expect(rosterIdOf(`world-of-agents:${id}`)).toBe(id);
    for (const type of [
      'world-of-agents:lead',
      'backend',
      'Backend dev',
      'world-of-agents:backend ',
      'Explore',
    ]) {
      expect(rosterIdOf(type)).toBeUndefined();
    }
  });
});
