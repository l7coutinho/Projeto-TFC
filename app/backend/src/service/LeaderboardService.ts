import { ILeaderboard } from '../Interfaces/leaderboard/ILeaderboard';
import ILeaderboardModels from '../Interfaces/leaderboard/ILeaderboardModels';
import { ITeamsModel } from '../Interfaces/teams/ITeamsModel';
import TeamsModel from '../models/TeamsModels';

export default class LeaderboardService {
  constructor(
    private model: ITeamsModel = new TeamsModel(),
  ) { }

  async getLeaderboardHome() {
    const match = await this.model.getAllMatchesInProgressFalse();

    const leaderboard = match.map((team) => {
      const row = new ILeaderboardModels(team.teamName);
      if (team.homeMatches) row.addStatusMatch(team.homeMatches);

      return row.getPerformanceLeaderboard();
    });

    const sortedLeaderboard: ILeaderboard[] = leaderboard.sort((a, b) => {
      if (a.totalPoints !== b.totalPoints) return b.totalPoints - a.totalPoints;
      if (a.totalVictories !== b.totalVictories) return b.totalVictories - a.totalVictories;
      if (a.goalsBalance !== b.goalsBalance) {
        return b.goalsBalance - a.goalsBalance;
      }

      return b.goalsFavor - a.goalsFavor;
    });

    return { status: 'SUCCESSFUL', data: sortedLeaderboard };
  }
}
