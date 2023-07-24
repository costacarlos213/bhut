import { ILog } from '../entities/Log.interface';
import { ICreateLogDTO } from './dto/CreateLogDTO';

interface ILogRepository {
  create(log: ICreateLogDTO): Promise<ILog>;
}

export { ILogRepository };
