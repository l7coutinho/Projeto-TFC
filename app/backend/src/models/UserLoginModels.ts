import ModelUser from '../database/models/ModelUser';
import IUsers from '../Interfaces/users/IUsers';
import IUsersModel from '../Interfaces/users/IUsersModel';

export default class UserLoginModels implements IUsersModel {
  private model = ModelUser;

  async findByEmail(email: string): Promise<IUsers | null> {
    const user = await this.model.findOne({ where: { email } });
    if (!user) return null;

    const { id, username, role, password } = user;
    return { id, username, email, role, password };
  }
}
