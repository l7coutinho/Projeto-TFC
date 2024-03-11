import IUsers from './IUsers';

export default interface IUsersModel {
  findByEmail(email: string): Promise<IUsers | null>;
}
