import ITeams from '../Interfaces/teams/ITeams';
import TeamsModels from '../models/TeamsModels';
import { ITeamsModel } from '../Interfaces/teams/ITeamsModel';
import { ServiceResponse } from '../utils/ServiceResponse';

export default class TeamsService {
  constructor(
    private model: ITeamsModel = new TeamsModels(),
  ) { }

  public async getAllTeams(): Promise<ServiceResponse<ITeams[]>> {
    const teams = await this.model.findall();
    return { status: 'SUCCESSFUL', data: teams };
  }

  public async getTeamById(id: number): Promise<ServiceResponse<ITeams>> {
    const team = await this.model.findById(id);

    if (!team) return { status: 'NOT_FOUND', data: { message: 'TEAM NOT FOUND' } };

    return { status: 'SUCCESSFUL', data: team };
  }
}

// const getAllTeams = async (): Promise<ITeams[]> => {
//   const teams = await TeamsModel.findAll();

//   return teams;
// };

// const getTeamById = async (id: number): Promise<ITeams | null> => {
//   const team = await TeamsModel.findByPk(id);
//   return team;
// };

// export default {
//   getAllTeams,
//   getTeamById,
// };
