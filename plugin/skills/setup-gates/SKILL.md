---
name: setup-gates
description: Shows what World of Agents quality gates do (npm run check after each dev's task, without asking) and whether they are on in this project. Changes nothing. Only the user starts it.
disable-model-invocation: true
allowed-tools: Bash(node '${CLAUDE_PLUGIN_ROOT}/skills/setup-gates/gates.mjs')
---

# World of Agents quality gates: what they do

Claude Code ran the gates script before you saw this, and its output is below. You run nothing yourself: no command, no
file edit, no agent. You decide nothing either.

!`node '${CLAUDE_PLUGIN_ROOT}/skills/setup-gates/gates.mjs'`

Tell the user in a few plain sentences what quality gates do and what they cost, as the output says, and whether they
are on. If they are off, the next step to turn them on is to type `/world-of-agents:setup-gates-write`; typing it is the yes.
If they are on, `/world-of-agents:setup-gates-off` turns them off. If it says "Not set up yet", the project needs
`/world-of-agents:setup-project-write` first. Don't recommend either way: it is the user's choice.

If it shows "[shell command execution disabled by policy]" instead, the script did not run, because a setting
(`disableSkillShellExecution`) turns off shell commands in skills. Nothing changed. The user can run
`node '${CLAUDE_PLUGIN_ROOT}/skills/setup-gates/gates.mjs'` in a terminal, in the project folder, instead.
