import { IMatchModel } from '../Interfaces/match/IMatchModel';
import IMatch, { IMatchGoals, IMatchCreate } from '../Interfaces/match/IMatch';
import MatchModels from '../models/MatchModels';
import TeamsModel from '../models/TeamsModels';
import { ServiceMessage, ServiceResponse } from '../utils/ServiceResponse';

export default class MatchService {
  constructor(
    private matchModel: IMatchModel = new MatchModels(),
    private teamsModel: TeamsModel = new TeamsModel(),
  ) { }

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

  async createMatch(teams: IMatchCreate) {
    const { homeTeamId, awayTeamId } = teams;
    if (homeTeamId === awayTeamId) {
      return {
        status: 'ERROR',
        data: { message: 'It is not possible to create a match with two equal teams' },
      };
    }

    const newMatch = await this.matchModel.createMatch(teams);

    if (!newMatch) {
      return {
        status: 'NOT_FOUND',
        data: { message: 'There is no team with such id!' },
      };
    }

    return { status: 'CREATED', data: newMatch };
  }
}
