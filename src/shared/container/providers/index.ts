import { container } from 'tsyringe';
import { BhutApiProvider } from './BhutApi/BhutApiProvider';
import { IBhutApiProvider } from './BhutApi/BhutApiProvider.interface';

container.registerSingleton<IBhutApiProvider>(
  'BhutApiProvider',
  BhutApiProvider,
);
