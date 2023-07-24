import { ILogRepository } from '@modules/Log/repositories/LogRepository.interface';
import './providers';

import { container } from 'tsyringe';
import { LogRepository } from '@modules/Log/repositories/LogRepository';

container.registerSingleton<ILogRepository>('LogRepository', LogRepository);
