import { Request, Router, Response } from 'express';
import LeaderboardController from '../controller/LeaderboardController';

const leaderBoardController = new LeaderboardController();

const router = Router();

router.get(
  '/home',
  (req: Request, res: Response) => leaderBoardController.getLeaderboardHome(req, res),
);

router.get(
  '/away',
  (req: Request, res: Response) => leaderBoardController.getLeaderboardAway(req, res),
);

export default router;
