import ModelMatch from '../../database/models/ModelMatch';
import { IMatchGoals, IMatchCreate } from './IMatch';

export interface IMatchModel {
  getAllMatches(): Promise<ModelMatch[]>;
  getAllMatchesInProgress(inProgress: boolean): Promise<ModelMatch[]>;
  updateMatchProgress(id: number): Promise<number>;
  updateMatchGoals(id: number, goals: IMatchGoals): Promise<number | IMatchGoals>;
  createMatch(match: IMatchCreate): Promise<ModelMatch | null>;
}
