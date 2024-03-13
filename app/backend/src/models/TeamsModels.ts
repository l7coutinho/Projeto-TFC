import ModelTeam from '../database/models/ModelTeam';
import ITeams from '../Interfaces/teams/ITeams';
import { ITeamsModel } from '../Interfaces/teams/ITeamsModel';
import ModelMatch from '../database/models/ModelMatch';

export default class TeamsModel implements ITeamsModel {
  private model = ModelTeam;
  public async findall(): Promise<ITeams[]> {
    const teams = await this.model.findAll();

    return teams.map((team) => ({
      id: team.id,
      teamName: team.teamName,
    }));
  }

  public async findById(ids: number): Promise<ITeams | null> {
    const team = await this.model.findByPk(ids);

    if (!team) return null;

    const { id, teamName }: ITeams = team;

    return { id, teamName };
  }

  async getAllMatchesInProgressFalse(): Promise<ITeams[]> {
    const data = await this.model.findAll({
      include: [
        { model: ModelMatch, as: 'homeMatches', where: { inProgress: false } },
        { model: ModelMatch, as: 'awayMatches', where: { inProgress: false } },
      ],
    });

    return data;
  }
}
