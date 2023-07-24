import { container } from 'tsyringe';
import { BhutApiProvider } from './BhutApi/BhutApiProvider';
import { IBhutApiProvider } from './BhutApi/BhutApiProvider.interface';
import { QueueProvider } from './Queue/implementation/QueueProvider';
import { IQueueProvider } from './Queue/Queue.interface';

container.registerSingleton<IBhutApiProvider>(
  'BhutApiProvider',
  BhutApiProvider,
);

container.registerSingleton<IQueueProvider>('QueueProvider', QueueProvider);
