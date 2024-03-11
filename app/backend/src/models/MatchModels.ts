import { IMatchModel } from '../Interfaces/match/IMatchModel';
import ModelMatch from '../database/models/ModelMatch';
import ModelTeam from '../database/models/ModelTeam';
import { IMatchGoals } from '../Interfaces/match/IMatch';

export default class MatchModels implements IMatchModel {
  private model = ModelMatch;

  async getAllMatches(): Promise<ModelMatch[]> {
    const data = await this.model.findAll({
      include: [
        { model: ModelTeam, as: 'homeTeam', attributes: ['teamName'] },
        { model: ModelTeam, as: 'awayTeam', attributes: ['teamName'] },
      ],
    });

    return data;
  }

  async getAllMatchesInProgress(inProgress: boolean): Promise<ModelMatch[]> {
    const data = await this.model.findAll({
      where: { inProgress },
      include: [
        { model: ModelTeam, as: 'homeTeam', attributes: ['teamName'] },
        { model: ModelTeam, as: 'awayTeam', attributes: ['teamName'] },
      ],
    });

    return data;
  }

  async updateMatchProgress(id: number) {
    const [affectedRows] = await this.model.update({ inProgress: false }, { where: { id } });

    return affectedRows;
  }

  async updateMatchGoals(id: number, goals: IMatchGoals): Promise<IMatchGoals | number> {
    const { homeTeamGoals, awayTeamGoals } = goals;
    const [affectedRows] = await this.model
      .update({ homeTeamGoals, awayTeamGoals }, { where: { id } });

    return affectedRows;
  }
}
