import { ILog } from '../entities/ILog';
import { Log } from '../entities/Log';
import { ILogRepository } from './LogRepository.interface';
import { ICreateLogDTO } from './dto/CreateLogDTO';

class LogRepository implements ILogRepository {
  async create(log: ICreateLogDTO): Promise<ILog> {
    const document = await Log.create({
      data_hora: log.data_hora,
      car_id: log.car_id,
    });

    return document;
  }
}

export { LogRepository };
