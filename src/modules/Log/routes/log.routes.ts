import { Router } from 'express';
import { LogController } from '../controllers/Log.controller';

const logRouter = Router();
const logController = new LogController();

logRouter.get('/', logController.index);

export { logRouter };
