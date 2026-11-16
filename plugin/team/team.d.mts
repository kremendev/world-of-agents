// Types for team.mjs, so its tests are typechecked. The module itself stays plain JS: the plugin needs no build.

export type Guild = 'design' | 'frontend' | 'backend' | 'review';
export type Preset = 'reads' | 'edits' | 'edits-and-checks';
export type Specialist = {
  id: string;
  name: string;
  role: string;
  guild: Guild;
  preset: Preset;
  on: boolean;
  skills: string[];
};
export type Skill = { id: string; name: string; description: string };
export type Team = { version: 2; generator: number; specialists: Specialist[]; skills: Skill[] };

export const GUILDS: readonly Guild[];
export const LEADS: Readonly<Record<Guild, 'designer' | 'frontend' | 'backend' | 'reviewer'>>;
export const MAX_PER_GUILD: number;
export const MAX_SPECIALISTS: number;
export const PRESETS: readonly Preset[];
export const GENERATOR: number;
export const MAX_SKILLS: number;
export const MAX_PRELOADED: number;
export const MAX_TEXT: number;
export function problem(team: unknown): string | null;
export function upgrade(team: unknown): unknown;
export function textProblem(text: unknown): string | null;
export function toolsOf(specialist: Specialist): string;
export function buildAgent(specialist: Specialist): string;
export function buildSkill(skill: Skill, text: string): string;
export function teamDir(home?: string): string;
export function writeTeam(dir: string, team: Team, texts: Record<string, string>): Team;
export function defaults(): { team: Team; texts: Record<string, string> };
export function init(home?: string): 'created' | 'exists';
export function readTeam(home?: string): Team | null;

export type TeamChange =
  | { action: 'add-skill' | 'change-skill'; id: string; name: string; description: string; text: string }
  | { action: 'delete-skill'; id: string }
  | { action: 'attach'; specialist: string; skill: string; at?: number }
  | { action: 'detach'; specialist: string; skill: string }
  | { action: 'add-specialist'; name: string; guild: Guild; role: string; preset: Preset; skills: string[] }
  | { action: 'change-specialist'; id: string; role: string; preset: Preset; skills: string[] }
  | { action: 'delete-specialist'; id: string }
  | { action: 'switch'; id: string; on: boolean };
export type ChangeEntry =
  | { at: number; what: 'skill-added' | 'skill-changed' | 'skill-deleted'; skill: string }
  | { at: number; what: 'skill-attached' | 'skill-detached'; skill: string; specialist: string }
  | {
      at: number;
      what:
        'specialist-added' | 'specialist-changed' | 'specialist-deleted' | 'specialist-on' | 'specialist-off';
      specialist: string;
      guild: 'Design' | 'Frontend' | 'Backend' | 'Review';
    };
export const ACTIONS: readonly TeamChange['action'][];
export const MAX_CHANGES: number;
export function slugOf(name: string, max: number): string;
export function specialistIdOf(guild: Guild, name: string): string;
export function skillIdOf(name: string): string;
export const CHANGE_KINDS: readonly LogEntry['what'][];
export function readTexts(dir: string, team: Team): Record<string, string>;
export function applyChange(
  team: Team,
  texts: Record<string, string>,
  change: TeamChange,
  now: number,
): { team: Team; texts: Record<string, string>; entry: ChangeEntry };
export function isChange(entry: unknown): entry is LogEntry;
export function readChanges(dir: string): LogEntry[];
export function logChange(dir: string, entry: LogEntry): void;

// v3.7: the guild leads' notes.
export type NoteAgent = 'designer' | 'frontend' | 'backend' | 'reviewer';
export type Note = { id: string; text: string; proposedAt: number; approvedAt: number };
export type Notes = { version: 1; notes: Record<NoteAgent, Note[]> };
export type NoteChange =
  | { action: 'note-approve' | 'note-reject'; id: string }
  | { action: 'note-delete'; agent: NoteAgent; id: string };
export type NoteEntry = {
  at: number;
  what: 'note-approved' | 'note-rejected' | 'note-deleted' | 'note-kept' | 'note-dropped';
  agent: 'Designer' | 'Frontend dev' | 'Backend dev' | 'Reviewer';
};
export const NOTE_AGENTS: readonly NoteAgent[];
export const NOTE_SKILL_IDS: readonly string[];
export const NOTE_AGENT_NAMES: Readonly<Record<NoteAgent, NoteEntry['agent']>>;
export const MAX_NOTES: number;
export const MAX_NOTE: number;
export function noteProblem(text: unknown): string | null;
export function emptyNotes(): Notes;
export function notesProblem(notes: unknown): string | null;
export function readNotes(dir: string): Notes;
export function buildNotesSkill(agent: NoteAgent, list: readonly Note[]): string;
export function writeNotes(dir: string, notes: Notes, team: Team): void;
export function writeNotesSkills(dir: string, notes: Notes, team: Team): void;
export function applyNoteChange(
  notes: Notes,
  change: NoteChange,
  proposal: { agent: NoteAgent; text: string; at: number } | null,
  now: number,
): { notes: Notes; entry: NoteEntry };

// v3.9: a team per project, one skill library for the PC.
export type FilledEntry =
  | { at: number; what: 'starter-added' | 'team-copied' }
  | { at: number; what: 'team-given'; from: 'shared' | 'empty' };
export type LogEntry = ChangeEntry | NoteEntry | FilledEntry;
export type SourceKind = 'team' | 'starter' | 'written';
export type LibrarySkill = Skill & { source: { kind: SourceKind }; addedAt: number };
export type Library = { version: 1; skills: LibrarySkill[] };
export type ProjectTeam = { version: 3; generator: number; specialists: Specialist[] };
export type Project = { key: string; folder: string; name: string };
export type ReviewNote = {
  id: string;
  agent: NoteAgent;
  text: string;
  proposedAt: number;
  approvedAt: number;
};
export type ProjectChange =
  | Extract<
      TeamChange,
      {
        action: 'add-specialist' | 'change-specialist' | 'delete-specialist' | 'switch' | 'attach' | 'detach';
      }
    >
  | Extract<TeamChange, { action: 'add-skill' | 'change-skill' | 'delete-skill' }>
  | NoteChange
  | { action: 'add-starter' }
  | { action: 'copy-from'; project: string }
  | { action: 'note-keep' | 'note-drop'; id: string };
export type ProjectStatus = { status: 'own'; team: ProjectTeam } | { status: 'broken' | 'none' | 'unset' };

export const MAX_LIBRARY: number;
export const MAX_PROJECTS: number;
export const SOURCES: readonly SourceKind[];
export const PROJECT_ACTIONS: readonly ProjectChange['action'][];
export function isProjectKey(key: unknown): boolean;
export function woaDir(home?: string): string;
export function libraryDir(home?: string): string;
export function projectsDir(home?: string): string;
export function projectDir(home: string, key: string): string;
export function projectTeamDir(home: string, key: string): string;
export function projectOf(folder: unknown): Project | null;
export function readProject(home: string, key: string): (Project & { version: 1; createdAt: number }) | null;
export function projectTeamProblem(team: unknown): string | null;
export function emptyProjectTeam(): ProjectTeam;
export function readProjectTeam(home: string, key: string): ProjectTeam | null;
export function isSetUp(home?: string): boolean;
export function projectTeamOf(home: string, folder: unknown): ProjectStatus;
export function emptyLibrary(): Library;
export function libraryProblem(library: unknown): string | null;
export function readLibrary(home?: string): {
  library: Library;
  texts: Record<string, string>;
  there: boolean;
};
export function writeLibrary(home: string, library: Library, texts: Record<string, string>): void;
export function writeProjectTeam(
  home: string,
  key: string,
  team: ProjectTeam,
  library: Library,
  texts: Record<string, string>,
  notes: Notes,
): ProjectTeam;
export function listProjects(
  home?: string,
): { key: string; folder: string; name: string; createdAt: number; team: ProjectTeam | null }[];
export function installCommands(key: string): string[];
export function readShared(home?: string): { team: Team; texts: Record<string, string>; notes: Notes } | null;
export function reviewProblem(review: unknown): string | null;
export function readReview(home: string, key: string): ReviewNote[];
export function giveOwnTeam(
  home: string,
  folder: string,
  from: 'shared' | 'empty',
  now: number,
): { project: Project; team: ProjectTeam; review: number; libraryBuilt: boolean };
export function changeProject(
  home: string,
  key: string,
  change: ProjectChange,
  now: number,
  proposal?: { agent: NoteAgent; text: string; at: number } | null,
): LogEntry;
export function teamFilesOf(home: string, folder: unknown): 'current' | 'older' | 'none';
export function projectInput(raw: unknown): string | null;
