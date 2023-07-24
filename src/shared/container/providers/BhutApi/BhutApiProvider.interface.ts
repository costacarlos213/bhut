import { ICar } from '@modules/Car/entities/Car.interface';
import { IPostCarDTO } from './dto/PostCarDTO';

interface IBhutApiProvider {
  getCars(): Promise<ICar[]>;
  postCar(car: IPostCarDTO): Promise<ICar>;
}

export { IBhutApiProvider };
