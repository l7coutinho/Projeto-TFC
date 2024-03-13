import ITeams from './ITeams';

export interface ITeamsModel {
  findall(): Promise<ITeams[]>,
  findById(id: number): Promise<ITeams | null>,
  getAllMatchesInProgressFalse(): Promise<ITeams[]>,
}
