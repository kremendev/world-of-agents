import type { AgentId } from '../events/schema';
import { agentById, specialistWords } from '../office/roster';
import { stateWords } from '../office/states';
import type { OfficeState } from '../state/office';

/** What an agent's button says in words: everything the world shows of it (4d.4). */
export function agentLabel(office: OfficeState, id: AgentId): string {
  const { state, copies } = office.agents[id];
  const helped = id === 'lead' ? [] : office.specialists[id];
  const running = copies ? `, ${copies} copies running` : '';
  const withHelp = helped.length > 0 ? `, with ${helped.map(specialistWords).join(' and ')}` : '';
  return `${agentById(id).name}, ${stateWords(state)}${running}${withHelp}`;
}
