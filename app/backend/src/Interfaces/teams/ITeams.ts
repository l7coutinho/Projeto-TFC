import IMatch from '../match/IMatch';

export default interface ITeams {
  id: number;
  teamName: string;
  homeMatches?: IMatch[],
  awayMatches?: IMatch[],
}
