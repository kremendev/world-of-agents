---
name: setup-team
description: Shows what World of Agents would create in ~/.world-of-agents/team (the guilds' specialists and their skills, kept outside every project). Writes nothing. Only the user starts it.
disable-model-invocation: true
allowed-tools: Bash(node '${CLAUDE_PLUGIN_ROOT}/skills/setup-team/team-setup.mjs')
---

# World of Agents team: what it would create

Claude Code ran the team setup script before you saw this, and its output is below. You run nothing yourself: no command,
no file edit, no agent. You decide nothing either.

!`node '${CLAUDE_PLUGIN_ROOT}/skills/setup-team/team-setup.mjs'`

Tell the user in a few plain sentences what the output says. If it ends with "Nothing has been written.", the next step
is to type `/world-of-agents:setup-team-write`, which creates exactly that; typing it is the yes. Say that until the team
exists, no agent can start. If it says the team is already there, repeat the install commands it lists, exactly. If it
says "Stopped", say why, as it does.

If it shows "[shell command execution disabled by policy]" instead, the script did not run, because a setting
(`disableSkillShellExecution`) turns off shell commands in skills. Nothing changed. The user can run
`node '${CLAUDE_PLUGIN_ROOT}/skills/setup-team/team-setup.mjs'` in a terminal instead.
