import { Request, Router, Response } from 'express';
import MatchController from '../controller/MatchController';
import authMiddleware from '../middlewares/authMiddleware';

const matchController = new MatchController();

const router = Router();

router.get('/', (req: Request, res: Response) => matchController.getAllMatches(req, res));
router.patch(
  '/:id/finish',
  authMiddleware.auth,
  (req: Request, res: Response) => matchController.updateMatchStatus(req, res),
);
router.patch(
  '/:id',
  authMiddleware.auth,
  (req: Request, res: Response) => matchController.updateMatchGoals(req, res),
);
router.post(
  '/',
  authMiddleware.auth,
  (req: Request, res: Response) => matchController.createMatch(req, res),
);

export default router;
