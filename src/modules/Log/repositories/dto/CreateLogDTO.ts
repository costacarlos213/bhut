import { ILog } from '@modules/Log/entities/ILog';

interface ICreateLogDTO extends Partial<ILog> {
  car_id: string;
}

export { ICreateLogDTO };
