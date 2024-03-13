import { ILeaderboard } from '../Interfaces/leaderboard/ILeaderboard';
import ILeaderboardModels from '../Interfaces/leaderboard/ILeaderboardModels';
import { ITeamsModel } from '../Interfaces/teams/ITeamsModel';
import TeamsModel from '../models/TeamsModels';
import leaderBoardSort from './utils/leaderBoard.sort';

export default class LeaderboardService {
  constructor(
    private model: ITeamsModel = new TeamsModel(),
  ) { }

  async getLeaderboardHome() {
    const match = await this.model.getAllMatchesInProgressFalse();

    const leaderboardHome = match.map((team) => {
      const row = new ILeaderboardModels(team.teamName);
      if (team.homeMatches) row.addHomeStatusMatch(team.homeMatches);

      return row.getPerformanceLeaderboard();
    });

    const sortedHomeLeaderboard: ILeaderboard[] = leaderBoardSort(leaderboardHome);

    return { status: 'SUCCESSFUL', data: sortedHomeLeaderboard };
  }

  async getLeaderboardAway() {
    const match = await this.model.getAllMatchesInProgressFalse();

    const awayLeaderboard = match.map((team) => {
      const row = new ILeaderboardModels(team.teamName);
      if (team.awayMatches) row.addAwayStatusMatch(team.awayMatches);

      return row.getPerformanceLeaderboard();
    });

    const sortedAwayLeaderboard: ILeaderboard[] = leaderBoardSort(awayLeaderboard);

    return { status: 'SUCCESSFUL', data: sortedAwayLeaderboard };
  }
}
