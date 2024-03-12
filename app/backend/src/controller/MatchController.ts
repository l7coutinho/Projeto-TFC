import { Request, Response } from 'express';
import MatchService from '../service/MatchService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class MatchController {
  constructor(private matchService: MatchService = new MatchService()) { }

  async getAllMatches(req: Request, res: Response) {
    const { inProgress } = req.query;
    const verify = inProgress === undefined ? undefined : inProgress === 'true';

    const { status, data } = await this.matchService.getAllMatches(verify);

    return res.status(mapStatusHTTP(status)).json(data);
  }

  async updateMatchStatus(req: Request, res: Response) {
    const { id } = req.params;
    const { status, data } = await this.matchService.updateMatchStatus(Number(id));

    return res.status(mapStatusHTTP(status)).json(data);
  }

  async updateMatchGoals(req: Request, res: Response) {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;
    const { status, data } = await this.matchService
      .updateMatchGoals(Number(id), { homeTeamGoals, awayTeamGoals });

    return res.status(mapStatusHTTP(status)).json(data);
  }

  async createMatch(req: Request, res: Response) {
    const { homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals } = req.body;
    const { status, data } = await this.matchService.createMatch({
      homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals,
    });

    return res.status(mapStatusHTTP(status)).json(data);
  }
}
