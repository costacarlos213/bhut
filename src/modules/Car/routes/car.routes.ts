import { Router } from 'express';
import { CarController } from '../controllers/Car.controller';
import { createCarMiddleware } from './validators/car.validation';

const carRouter = Router();
const carController = new CarController();

carRouter.post('/createCar', createCarMiddleware, carController.create);

carRouter.get('/listCars', carController.index);

export { carRouter };
