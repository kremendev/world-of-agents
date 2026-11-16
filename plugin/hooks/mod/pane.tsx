// The team pane's drawing: the view register.tsx keeps, drawn with Box, Text, Button and one Link.
// Agent text (a task's description) is only ever a Text child: never Markdown, never a link.

import type { EngineInterface, RenderInput } from 'claude-code';

import { PRESETS } from './presets';
import type { PresetKey } from './presets';
import { compareVersions, PLUGIN_VERSION, stoppable } from './hall';
import { ledgerLines, scopeLine } from './ledger';
import { nameOf, ROSTER } from './roster';
import { changeLine, editorLink, KEY } from './team';
import type { PaneAgent, PaneFillRefusal, PaneHall, PaneLimit, PaneUsage, PaneView } from './types';

export const HALL_URL = 'http://localhost:4319';

/**
 * What the pane says about the hall. The link to it shows only while it is `running`: proven ours by the handshake, as
 * this version. `other-version` has a line of its own (otherHallLine).
 */
const HALL_LINES: Record<Exclude<PaneHall, 'other-version'>, string> = {
  checking: 'Hall: checking',
  starting: 'Hall: starting',
  running: 'Hall: running',
  taken: 'Port 4319 is used by another program.',
  stopped: 'Hall: not running',
};

/**
 * Another install's hall holds the port (3.2d): it knows the same token file, so the handshake passes, but it is another
 * version, and the pane neither links to it nor sends it the ledger. A hall that states no version is from before 3.2.0.
 * A hall before 3.5.0 lives with the session that started it, which can be one in this project still on the version it
 * loaded before an update (3.4h), so the line names every other session. From 3.5.0 a hall runs detached and stops
 * itself when idle (v3.5b): a newer pane stops an older one itself, so one still here only didn't stop in time, and a
 * newer one can't be closed from here at all. `own` is this plugin's version; tests give another.
 */
export function otherHallLine(version: string | null, own: string = PLUGIN_VERSION): string {
  if (version !== null && compareVersions(version, own) > 0) {
    return `A newer hall (v${version}) is running. Update World of Agents in this project to use it.`;
  }
  const which = version === null ? 'An older hall (before v3.2.0)' : `An older hall (v${version})`;
  if (stoppable(version, own)) return `${which} is running. Your next message replaces it.`;
  return `${which} is running. Close your other sessions, here and in other projects.`;
}

/** Why a preset's text didn't reach the prompt box, in one line. */
const FILL_LINES: Record<PaneFillRefusal, string> = {
  no_composer: 'This surface has no prompt box',
  other: "Couldn't fill the prompt box",
};

/** Recount (v3.2c, 3.2d): what the button does, and a count that failed. */
export const PAST_HOW =
  "Recount reads only the token counts in Claude Code's transcripts on this PC, when you press it.";
export const PAST_FAILED = "Couldn't recount.";

/** The team editor (v3.4c): how its link works, and a key the hall didn't take. */
export const EDITOR_HOW = "Opens the hall's Team page. The link works once, within a minute.";
export const EDITOR_FAILED = "The hall didn't take the key. Try again once the hall runs.";

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

// The command works on every surface. (In the desktop app the switch under Customize, then Plugins, also turned a local
// install off for its project alone, writing that project's settings.local.json: seen 11 Nov, app 5.1231.2.)
export const NODE_FIX =
  'Install Node.js 20.19 or later, or turn the plugin off for this project: in a terminal in its folder, run ' +
  'claude plugin disable world-of-agents@world-of-agents --scope local.';

/**
 * The plugin is on in every project (user settings): what that costs, and the fix, one command per id. `disable`, not
 * `uninstall`: uninstall --scope user fails when the user settings turn it on with no user-scope install behind them
 * ("installed in local scope, not user"), and disable works either way. Checked with the CLI in a temp config, 11 Nov.
 */
export const EVERY_PROJECT = 'World of Agents is on for every project.';
// v3.9: since v3.8 a user-scope install no longer makes every session the Lead; its hooks still run everywhere.
const EVERY_PROJECT_WHY =
  'Its hooks run in every session of every project, where the guard lets only the Lead/PM edit files or start agents. To turn that off, run in a terminal:';
const EVERY_PROJECT_THEN = 'Projects where you installed it with --scope local keep it.';

const LIVE = new Set(['pending', 'running', 'waiting', 'idle']);

/** The modes where something runs without asking you first, and what the pane says about each, the mode named first. */
const NOTHING_ASKS = 'Nothing asks you before acting.';
/** v3.6d: the team's generated files come from an older plugin; the setup's write refreshes only them. */
const TEAM_OLDER =
  "This project's specialist files are from an older plugin. Type /world-of-agents:setup-team-write to refresh them.";
/** v3.9: a project with no team of its own yet (Dima, 16 Nov): its guild leads work, its specialists can't start. */
export const TEAM_NONE =
  "This project has no team of its own yet, so its specialists can't start. Its guild leads still work.";

/** v3.3: quality gates, and the modes where they run with nothing else asking first. */
const GATES_ON = 'Quality gates: on.';
const GATES_WARNING = "Quality gates: npm run check runs after each dev's task without asking.";
const GATE_MODES = new Set(['auto', 'acceptEdits']);

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
  {
    onPreset,
    onMute,
    onRecount,
    onOpenTeam,
  }: {
    onPreset: (key: PresetKey) => Promise<void>;
    onMute: () => Promise<void>;
    onRecount: () => Promise<void>;
    onOpenTeam: () => Promise<void>;
  },
  /** The team editor's one-time key while its link is open (v3.4c); never part of the view. */
  editorKey: string | null = null,
) {
  const { Box, Text, Button, Link } = $.ui.resolve(e);
  const warning = v.mode === null ? undefined : MODE_WARNINGS.get(v.mode);
  const noNode = nodeWarning(v);
  // Only an ask whose dialog is open: one the Auto classifier is still deciding asks nobody yet.
  const waiting = v.asks.filter((ask) => ask.shown);

  return (
    <Box flexDirection="column" gap={1}>
      {v.everyProject.length > 0 && (
        <Box flexDirection="column">
          <Text color="warning" bold>
            {EVERY_PROJECT}
          </Text>
          <Text color="warning">{EVERY_PROJECT_WHY}</Text>
          {v.everyProject.map((id) => (
            <Text color="warning">{`claude plugin disable ${id} --scope user`}</Text>
          ))}
          <Text color="warning">{EVERY_PROJECT_THEN}</Text>
        </Box>
      )}
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
      {v.teamFiles === 'older' && <Text color="warning">{TEAM_OLDER}</Text>}
      {v.teamFiles === 'none' && <Text color="warning">{TEAM_NONE}</Text>}
      {v.gates === 'on' && v.mode !== null && GATE_MODES.has(v.mode) && (
        <Text color="warning" bold>
          {GATES_WARNING}
        </Text>
      )}
      {v.gates === 'on' && (
        <Box flexDirection="column">
          <Text>{GATES_ON}</Text>
          {v.gateRetry !== null && (
            <Text
              dimColor
            >{`Quality gate: ${nameOf(v.gateRetry.agent)}'s check failed, retry ${v.gateRetry.retry} of 3.`}</Text>
          )}
        </Box>
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
              {v.specialists
                .filter((s) => s.lead === agent.id && LIVE.has(s.status))
                .map((s) => (
                  <Text dimColor>{`  + ${s.name}: ${s.status}`}</Text>
                ))}
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
        {v.ledger === null ? (
          <Text dimColor>This PC: nothing counted yet.</Text>
        ) : (
          ledgerLines(v.ledger).map((line, i) =>
            i === 0 ? <Text>{line}</Text> : <Text dimColor>{line}</Text>,
          )
        )}
        <Text dimColor>{scopeLine(v.past.counted)}</Text>
        {v.past.state === 'counting' && <Text dimColor>Recounting...</Text>}
        {v.past.state === 'failed' && <Text color="warning">{PAST_FAILED}</Text>}
        {v.past.state !== 'counting' && (
          <Box flexDirection="row">
            <Button key="recount" label="Recount" onPress={onRecount} />
          </Box>
        )}
        <Text dimColor>{PAST_HOW}</Text>
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
        <Text color={v.hall === 'taken' || v.hall === 'other-version' ? 'warning' : undefined}>
          {v.hall === 'other-version'
            ? otherHallLine(v.hallVersion)
            : v.hall === 'stopped' && v.node === 'ok'
              ? 'Hall: not running. Your next message starts it.'
              : HALL_LINES[v.hall]}
        </Text>
        <Box flexDirection="row" gap={1} flexWrap="wrap">
          {v.hall === 'running' && <Link href={HALL_URL} label="Open hall" />}
          <Button key="mute" label={v.muted ? 'Unmute voice' : 'Mute voice'} onPress={onMute} />
        </Box>
      </Box>
      {v.hall === 'running' && (
        <Box flexDirection="column">
          <Text bold>Team</Text>
          {v.editor === 'open' && editorKey !== null && KEY.test(editorKey) ? (
            <Box flexDirection="column">
              <Box flexDirection="row">
                <Link href={editorLink(HALL_URL, editorKey)} label="Open the Team page" />
              </Box>
              <Text dimColor>{EDITOR_HOW}</Text>
            </Box>
          ) : (
            <Box flexDirection="row">
              <Button
                key="open-team-page"
                label={v.teamFiles === 'none' ? 'Give this project its own team' : 'Open Team page'}
                onPress={onOpenTeam}
              />
            </Box>
          )}
          {v.editor === 'failed' && <Text color="warning">{EDITOR_FAILED}</Text>}
        </Box>
      )}
      {v.teamChanges.length > 0 && (
        <Box flexDirection="column">
          <Text bold>Team changes</Text>
          {v.teamChanges.map((change) => (
            <Text>{changeLine(change)}</Text>
          ))}
        </Box>
      )}
    </Box>
  );
}
