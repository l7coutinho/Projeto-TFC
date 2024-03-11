import { Request, Response } from 'express';
import TeamsService from '../service/TeamsService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class TeamsController {
  constructor(private service = new TeamsService()) { }

  public async getAllTeams(_req: Request, res: Response) {
    const { status, data } = await this.service.getAllTeams();

    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async getTeamById(req: Request, res: Response) {
    const { id } = req.params;
    const { status, data } = await this.service.getTeamById(Number(id));

    return res.status(mapStatusHTTP(status)).json(data);
  }
}

// const getAllTeams = async (_req: Request, res: Response) => {
//   const teams = await TeamsService.getAllTeams();
//   return res.status(200).json(teams);
// };

// const getTeamById = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const team = await TeamsService.getTeamById(Number(id));
//   return res.status(200).json(team);
// };

// export default {
//   getAllTeams,
//   getTeamById,
// };
