import { Request, Response } from 'express';
import UserLoginService from '../service/UserLoginService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class UserLoginController {
  constructor(private userLoginService = new UserLoginService()) { }

  async signIn(req: Request, res: Response) {
    const { email, password } = req.body;
    const { status, data } = await this.userLoginService.signIn({ email, password });

    return res.status(mapStatusHTTP(status)).json(data);
  }

  async getUserRole(_req: Request, res: Response): Promise<Response> {
    const { email } = res.locals.user;
    const { status, data } = await this.userLoginService.getUserRole(email);

    return res.status(mapStatusHTTP(status)).json(data);
  }
}
