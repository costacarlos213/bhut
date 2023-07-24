import { carRouter } from '@modules/Car/routes/car.routes';
import { Router, Request, Response, NextFunction } from 'express';

const router = Router();

router.get('/', (request: Request, response: Response) =>
  response.send('Teste BHUT - 0.0.1'),
);

router.use('/cars', carRouter);

router.use((request: Request, response: Response, next: NextFunction) => {
  if (!request.route) {
    return response.status(404).send(`${request.url} not found`);
  }

  return next();
});

export { router };
