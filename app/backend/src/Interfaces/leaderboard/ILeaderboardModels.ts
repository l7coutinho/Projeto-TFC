import IMatch from '../match/IMatch';
import { ILeaderboard } from './ILeaderboard';

export default class ILeaderboardModels {
  private totalPoints: number;
  private totalGames: number;
  private victories: number;
  private draws: number;
  private loss: number;
  private goalsFavor: number;
  private goalsOwn: number;
  private _goalsBalance: number;
  private _efficiency: number;

  constructor(public teamName: string) {
    this.totalPoints = 0;
    this.totalGames = 0;
    this.victories = 0;
    this.draws = 0;
    this.loss = 0;
    this.goalsFavor = 0;
    this.goalsOwn = 0;
    this._goalsBalance = 0;
    this._efficiency = 0;
  }

  getGames() {
    return this.victories + this.draws + this.loss;
  }

  getPoints() {
    return (this.victories * 3) + this.draws;
  }

  getGoalsBalance() {
    return this.goalsFavor - this.goalsOwn;
  }

  getEfficiency() {
    return Number(((this.getPoints() / (this.getGames() * 3)) * 100).toFixed(2));
  }

  addStatusMatch(match: IMatch[]) {
    match.forEach((element) => {
      this.goalsFavor += element.homeTeamGoals;
      this.goalsOwn += element.awayTeamGoals;
      if (element.homeTeamGoals > element.awayTeamGoals) { // Contabilizando vitória
        this.victories += 1;
      } else if (element.homeTeamGoals === element.awayTeamGoals) { // Contabilizando empates
        this.draws += 1;
      } else {
        this.loss += 1; // Contabilizando derrotas
      }
    });
  }

  getPerformanceLeaderboard(): ILeaderboard {
    return {
      name: this.teamName,
      totalPoints: this.getPoints(),
      totalGames: this.getGames(),
      totalVictories: this.victories,
      totalDraws: this.draws,
      totalLosses: this.loss,
      goalsFavor: this.goalsFavor,
      goalsOwn: this.goalsOwn,
      goalsBalance: this.getGoalsBalance(),
      efficiency: this.getEfficiency(),
    };
  }
}
