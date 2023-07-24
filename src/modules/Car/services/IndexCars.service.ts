import { IBhutApiProvider } from '@shared/container/providers/BhutApi/BhutApiProvider.interface';
import { inject, injectable } from 'tsyringe';
import { ICar } from '../entities/Car.interface';

@injectable()
class IndexCarsService {
  constructor(
    @inject('BhutApiProvider')
    private api: IBhutApiProvider,
  ) {}

  async execute(): Promise<ICar[]> {
    const cars = await this.api.getCars();

    return cars;
  }
}

export { IndexCarsService };
