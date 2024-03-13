import { Router } from 'express';
import teamRouter from './teams.routes';
import loginRouter from './userLogin.routes';
import matchRouter from './match.routes';
import leaderBoardRouter from './leaderboard.routes';

const routes = Router();

routes.use('/teams', teamRouter);
routes.use('/login', loginRouter);
routes.use('/matches', matchRouter);
routes.use('/leaderboard', leaderBoardRouter);

export default routes;
