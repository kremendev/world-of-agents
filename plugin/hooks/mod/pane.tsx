// The team pane's drawing: the view register.tsx keeps, drawn with Box, Text, Button and one Link.
// Agent text (a task's description) is only ever a Text child: never Markdown, never a link.

import type { EngineInterface, RenderInput } from 'claude-code';

import { PRESETS } from './presets';
import type { PresetKey } from './presets';
import { nameOf, ROSTER } from './roster';
import type { PaneAgent, PaneFillRefusal, PaneHall, PaneLimit, PaneUsage, PaneView } from './types';

export const HALL_URL = 'http://localhost:4319';

/** What the pane says about the hall. The link to it shows only while it is `running`: proven ours by the handshake. */
const HALL_LINES: Record<PaneHall, string> = {
  checking: 'Hall: checking',
  starting: 'Hall: starting',
  running: 'Hall: running',
  taken: 'Port 4319 is used by another program.',
  stopped: 'Hall: not running',
};

/** Why a preset's text didn't reach the prompt box, in one line. */
const FILL_LINES: Record<PaneFillRefusal, string> = {
  no_composer: 'This surface has no prompt box',
  other: "Couldn't fill the prompt box",
};

/** Why there is no usable Node, and what it costs. Only digits and dots of what `node --version` printed show here. */
export function nodeWarning(v: PaneView): string | undefined {
  if (v.node === 'missing') {
    return "Node.js not found, so the plugin's guard blocks every shell command and agent start, and the hall can't start.";
  }
  if (v.node === 'failed') {
    return "Node.js didn't report its version, so the plugin's guard may block every shell command and agent start, and the hall can't start.";
  }
  if (v.node === 'old') return `Node.js ${v.nodeVersion ?? ''} is older than 20.19, so the hall can't start.`;
  return undefined;
}

export const NODE_FIX =
  'Install Node.js 20.19 or later, or turn the plugin off for this project: in the desktop app under Customize, then ' +
  'Plugins, or with claude plugin disable world-of-agents@world-of-agents --scope local.';

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
  { onPreset, onMute }: { onPreset: (key: PresetKey) => Promise<void>; onMute: () => Promise<void> },
) {
  const { Box, Text, Button, Link } = $.ui.resolve(e);
  const warning = v.mode === null ? undefined : MODE_WARNINGS.get(v.mode);
  const noNode = nodeWarning(v);
  // Only an ask whose dialog is open: one the Auto classifier is still deciding asks nobody yet.
  const waiting = v.asks.filter((ask) => ask.shown);

  return (
    <Box flexDirection="column" gap={1}>
      {noNode !== undefined && (
        <Box flexDirection="column">
          <Text color="warning" bold>
            {noNode}
          </Text>
          <Text color="warning">{NODE_FIX}</Text>
        </Box>
      )}
      {warning !== undefined && (
        <Text color="warning" bold>
          {warning}
        </Text>
      )}
      {waiting.length > 0 && (
        <Box flexDirection="column">
          <Text color="permission" bold>
            Needs you
          </Text>
          {waiting.map((ask) => (
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
      <Box flexDirection="column">
        <Box flexDirection="row" gap={1} flexWrap="wrap">
          {PRESETS.map((preset) => (
            <Button key={`preset-${preset.key}`} label={preset.label} onPress={() => onPreset(preset.key)} />
          ))}
        </Box>
        {v.fillRefused !== null && <Text color="warning">{FILL_LINES[v.fillRefused]}</Text>}
      </Box>
      <Box flexDirection="column">
        <Text color={v.hall === 'taken' ? 'warning' : undefined}>
          {v.hall === 'stopped' && v.node === 'ok'
            ? 'Hall: not running. Your next message starts it.'
            : HALL_LINES[v.hall]}
        </Text>
        <Box flexDirection="row" gap={1} flexWrap="wrap">
          {v.hall === 'running' && <Link href={HALL_URL} label="Open hall" />}
          <Button key="mute" label={v.muted ? 'Unmute voice' : 'Mute voice'} onPress={onMute} />
        </Box>
      </Box>
    </Box>
  );
}
