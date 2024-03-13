import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import LeaderboardService from '../service/LeaderboardService';

export default class LeaderboardController {
  constructor(
    private leaderboardService: LeaderboardService = new LeaderboardService(),
  ) { }

  async getLeaderboardHome(_req: Request, res: Response) {
    const { status, data } = await this.leaderboardService.getLeaderboardHome();

    return res.status(mapStatusHTTP(status)).json(data);
  }

  async getLeaderboardAway(_req: Request, res: Response) {
    const { status, data } = await this.leaderboardService.getLeaderboardAway();

    return res.status(mapStatusHTTP(status)).json(data);
  }
}
