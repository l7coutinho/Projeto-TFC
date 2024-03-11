import { Request, Response, Router } from 'express';
import UserLoginController from '../controller/UserLoginController';
import isValidLogin from '../middlewares/loginMiddleware';
import authMiddleware from '../middlewares/authMiddleware';

const userLoginController = new UserLoginController();

const router = Router();

router.post('/', isValidLogin.validateLogin, (req: Request, res: Response) => {
  userLoginController.signIn(req, res);
});
router.get('/role', authMiddleware.auth, (req: Request, res: Response) => {
  userLoginController.getUserRole(req, res);
});

export default router;
