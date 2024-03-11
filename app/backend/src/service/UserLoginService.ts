import * as bcrypt from 'bcryptjs';
import UserLoginModels from '../models/UserLoginModels';
import IUserModel from '../Interfaces/users/IUsersModel';
import JWT_TOKEN from '../utils/jwtToken';
import { ILogin, IRole } from '../Interfaces/users/IUsers';
import { IToken } from '../Interfaces/IToken';
import { ServiceMessage, ServiceResponse } from '../utils/ServiceResponse';

const invalidInput = 'Invalid email or password';

export default class UserLoginService {
  constructor(private userLoginModels: IUserModel = new UserLoginModels()) { }

  async signIn({ email, password }: ILogin): Promise<ServiceResponse<IToken | ServiceMessage>> {
    const user = await this.userLoginModels.findByEmail(email);

    if (!user) {
      return { status: 'UNAUTHORIZED', data: { message: invalidInput } };
    }

    if (!bcrypt.compareSync(password, user.password)) {
      return { status: 'UNAUTHORIZED', data: { message: invalidInput } };
    }

    const token = JWT_TOKEN.sign({ id: user.id, email: user.email });

    return { status: 'SUCCESSFUL', data: { token } };
  }

  async getUserRole(email: string): Promise<ServiceResponse<IRole | ServiceMessage>> {
    const user = await this.userLoginModels.findByEmail(email);

    if (!user) {
      return { status: 'UNAUTHORIZED', data: { message: invalidInput } };
    }

    return { status: 'SUCCESSFUL', data: { role: user.role } };
  }
}
