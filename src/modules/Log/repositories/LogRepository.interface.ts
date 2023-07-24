import { ILog } from '../entities/ILog';
import { ICreateLogDTO } from './dto/CreateLogDTO';

interface ILogRepository {
  create(log: ICreateLogDTO): Promise<ILog>;
}

export { ILogRepository };
