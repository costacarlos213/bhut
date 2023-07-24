import { ILog } from '@modules/Log/entities/Log.interface';

interface ICreateLogDTO extends Partial<ILog> {
  car_id: string;
}

export { ICreateLogDTO };
