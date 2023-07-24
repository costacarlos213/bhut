import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateCarService } from '../services/CreateCar.service';
import { IndexCarsService } from '../services/IndexCars.service';

class CarController {
  async create(req: Request, res: Response): Promise<Response> {
    const { title, age, brand, price, webhook_url } = req.body;

    const createCarService = container.resolve(CreateCarService);

    await createCarService.execute({
      title,
      age,
      brand,
      price,
      webhook_url,
    });

    return res.status(202).json();
  }

  async index(req: Request, res: Response): Promise<Response> {
    const indexCarsService = container.resolve(IndexCarsService);

    const cars = await indexCarsService.execute();

    return res.status(200).json(cars);
  }
}

export { CarController };
