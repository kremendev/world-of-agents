---
name: setup-team
description: Shows what World of Agents would do for this project's team, which lives in ~/.world-of-agents outside every project, giving the project a team of its own (a copy of the shared team, or an empty one) or refreshing its files after a plugin update. Writes nothing. Only the user starts it.
disable-model-invocation: true
allowed-tools: Bash(node '${CLAUDE_PLUGIN_ROOT}/skills/setup-team/team-setup.mjs')
---

# World of Agents team: what it would do for this project

Claude Code ran the team setup script before you saw this, and its output is below. You run nothing yourself: no command,
no file edit, no agent. You decide nothing either.

!`node '${CLAUDE_PLUGIN_ROOT}/skills/setup-team/team-setup.mjs'`

Tell the user in a few plain sentences what the output says. If it ends with "Nothing has been written.", the next step
is to type `/world-of-agents:setup-team-write`, which does exactly that; typing it is the yes. Say that until this project
has a team of its own its specialists can't start, and that its guild leads still work. If it names the pane's button for
an empty team, say so too. If it says the project's team files are from an older plugin, the next step is the same
command, which refreshes only those files and keeps every specialist, skill and note. If it says the project has its own
team already, repeat the commands it lists, exactly. If it says "Stopped", say why, as it does.

If it shows "[shell command execution disabled by policy]" instead, the script did not run, because a setting
(`disableSkillShellExecution`) turns off shell commands in skills. Nothing changed. The user can run
`node '${CLAUDE_PLUGIN_ROOT}/skills/setup-team/team-setup.mjs'` in a terminal instead.
