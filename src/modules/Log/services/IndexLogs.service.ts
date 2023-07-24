import { inject, injectable } from 'tsyringe';
import { ILogRepository } from '../repositories/LogRepository.interface';
import { ILog } from '../entities/Log.interface';

@injectable()
class IndexLogsService {
  constructor(
    @inject('LogRepository')
    private logRepository: ILogRepository,
  ) {}

  async execute(): Promise<ILog[]> {
    const logs = await this.logRepository.index();

    return logs;
  }
}

export { IndexLogsService };
