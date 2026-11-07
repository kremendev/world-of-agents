// The team pane's drawing: the view register.tsx keeps, drawn with Box, Text, Button and one Link.
// Agent text (a task's description) is only ever a Text child: never Markdown, never a link.

import type { EngineInterface, RenderInput } from 'claude-code';

import { PRESETS } from './presets';
import type { PresetKey } from './presets';
import { nameOf, ROSTER } from './roster';
import type { PaneAgent, PaneLimit, PaneUsage, PaneView } from './types';

export const HALL_URL = 'http://localhost:4319';

const LIVE = new Set(['pending', 'running', 'waiting', 'idle']);

/** The modes where something runs without asking you first, and what the pane says about each, the mode named first. */
const NOTHING_ASKS = 'Nothing asks you before acting.';
const MODE_WARNINGS = new Map([
  ['auto', `Auto: ${NOTHING_ASKS}`],
  ['bypassPermissions', `Bypass: ${NOTHING_ASKS}`],
  ['acceptEdits', "Accept edits: Edits aren't asked, and npm test runs whatever they change."],
]);

/** The run to show for one of our agents: the newest one still going, else the newest one seen. */
function runOf(agents: PaneAgent[], id: string): PaneAgent | undefined {
  const runs = agents.filter((a) => a.agent === id);
  return runs.findLast((a) => LIVE.has(a.status)) ?? runs.at(-1);
}

/** Who is asking, by roster name only: the Lead on the main thread, "An agent" for anyone we don't know. */
export function askerName(v: PaneView, agentId: string | undefined): string {
  if (agentId === undefined) return nameOf('lead');
  const run = v.agents.find((a) => a.id === agentId);
  return run ? nameOf(run.agent) : 'An agent';
}

const tokens = (n: number) => (n % 1_000_000 === 0 ? `${n / 1_000_000}M` : `${Math.round(n / 1000)}K`);
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const LIMIT_NAMES: Record<string, string> = { five_hour: '5-hour limit', seven_day: '7-day limit' };

/** "5-hour limit 31%, resets 02:00"; a window longer than a day names the day too: "resets Thu 02:00". */
export function limitLine(limit: PaneLimit): string {
  const name = LIMIT_NAMES[limit.kind] ?? limit.kind.replace(/_/g, ' ');
  const at = limit.resetsAt === undefined ? undefined : new Date(limit.resetsAt);
  if (!at || Number.isNaN(at.getTime())) return `${name} ${limit.percentUsed}%`;
  const time = `${String(at.getHours()).padStart(2, '0')}:${String(at.getMinutes()).padStart(2, '0')}`;
  return `${name} ${limit.percentUsed}%, resets ${limit.kind === 'five_hour' ? '' : `${DAYS[at.getDay()]} `}${time}`;
}

export function contextLine(usage: PaneUsage): string {
  return usage.percent === undefined
    ? `Context window ${tokens(usage.window)}`
    : `Context ${usage.percent}% of ${tokens(usage.window)}`;
}

export function drawPane(
  $: EngineInterface,
  e: RenderInput,
  v: PaneView,
  onPreset: (key: PresetKey) => Promise<void>,
) {
  const { Box, Text, Button, Link } = $.ui.resolve(e);
  const warning = v.mode === null ? undefined : MODE_WARNINGS.get(v.mode);
  // A Button has no disabled state, so the presets go dim while the Lead's turn runs, and register.tsx's press handler
  // does nothing then: a press would only queue a second run behind the running one.
  const busy = v.lead === 'running';

  return (
    <Box flexDirection="column" gap={1}>
      {warning !== undefined && (
        <Text color="warning" bold>
          {warning}
        </Text>
      )}
      {v.asks.length > 0 && (
        <Box flexDirection="column">
          <Text color="permission" bold>
            Needs you
          </Text>
          {v.asks.map((ask) => (
            <Text>
              {askerName(v, ask.agentId)} asks to run {ask.tool}
            </Text>
          ))}
          <Text dimColor>Answer in the permission prompt.</Text>
        </Box>
      )}
      <Box flexDirection="column">
        <Text bold>Team</Text>
        {ROSTER.map((agent) => {
          const run = agent.id === 'lead' ? undefined : runOf(v.agents, agent.id);
          const status = agent.id === 'lead' ? v.lead : (run?.status ?? 'not started');
          return (
            <Box flexDirection="column">
              <Text>
                {agent.name}: {status}
              </Text>
              {run && run.task !== '' && <Text dimColor>{run.task}</Text>}
            </Box>
          );
        })}
      </Box>
      <Box flexDirection="column">
        <Text bold>Usage</Text>
        {v.usage === null ? (
          <Text dimColor>Shows after the first answer.</Text>
        ) : (
          <Box flexDirection="column">
            <Text>{contextLine(v.usage)}</Text>
            {v.usage.limits.map((limit) => (
              <Text>{limitLine(limit)}</Text>
            ))}
          </Box>
        )}
      </Box>
      <Box flexDirection="row" gap={1} flexWrap="wrap">
        {PRESETS.map((preset) => (
          <Button
            key={`preset-${preset.key}`}
            label={preset.label}
            dimColor={busy}
            onPress={() => onPreset(preset.key)}
          />
        ))}
      </Box>
      <Link href={HALL_URL} label="Open hall" />
    </Box>
  );
}
