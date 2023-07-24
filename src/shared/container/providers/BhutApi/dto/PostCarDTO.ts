import { ICar } from '@modules/Car/entities/Car.interface';

type IPostCarDTO = Omit<ICar, '_id'>;

export { IPostCarDTO };
