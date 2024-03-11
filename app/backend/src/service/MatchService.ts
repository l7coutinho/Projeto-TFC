import { IMatchModel } from '../Interfaces/match/IMatchModel';
import IMatch, { IMatchGoals } from '../Interfaces/match/IMatch';
import MatchModels from '../models/MatchModels';
import { ServiceMessage, ServiceResponse } from '../utils/ServiceResponse';

export default class MatchService {
  constructor(private matchModel: IMatchModel = new MatchModels()) { }

  async getAllMatches(inProgress: boolean | undefined): Promise<ServiceResponse<IMatch[]>> {
    if (inProgress === undefined) {
      const matches = await this.matchModel.getAllMatches();

      if (!matches) return { status: 'NOT_FOUND', data: { message: 'No matches found' } };

      return { status: 'SUCCESSFUL', data: matches };
    }

    const matches = await this.matchModel.getAllMatchesInProgress(inProgress);

    return { status: 'SUCCESSFUL', data: matches };
  }

  async updateMatchStatus(id: number): Promise<ServiceResponse<ServiceMessage>> {
    await this.matchModel.updateMatchProgress(id);

    return { status: 'SUCCESSFUL', data: { message: 'Finished' } };
  }

  async updateMatchGoals(id: number, goals: IMatchGoals):
  Promise<ServiceResponse<ServiceMessage>> {
    await this.matchModel.updateMatchGoals(id, goals);

    return {
      status: 'SUCCESSFUL',
      data: { message: `Updated with ${goals.awayTeamGoals} : ${goals.homeTeamGoals}` },
    };
  }
}
