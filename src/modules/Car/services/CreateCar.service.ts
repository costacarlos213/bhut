import { inject, injectable } from 'tsyringe';
import { IBhutApiProvider } from '@shared/container/providers/BhutApi/BhutApiProvider.interface';
import { ILogRepository } from '@modules/Log/repositories/LogRepository.interface';
import { IQueueProvider } from '@shared/container/providers/Queue/Queue.interface';
import { ICreateCarDTO } from './dto/CreateCarDTO';

@injectable()
class CreateCarService {
  constructor(
    @inject('BhutApiProvider')
    private api: IBhutApiProvider,

    @inject('LogRepository')
    private logRepository: ILogRepository,

    @inject('QueueProvider')
    private queue: IQueueProvider,
  ) {}

  async execute({
    title,
    age,
    brand,
    price,
    webhook_url,
  }: ICreateCarDTO): Promise<void> {
    const car = await this.api.postCar({
      title,
      age,
      brand,
      price,
    });

    await Promise.all([
      this.logRepository.create({
        car_id: car._id,
      }),
      this.queue.addToQueue({
        data: {
          webhook_url,
          car_id: car._id,
          status: 'success',
        },
        jobName: 'SendWebhook',
      }),
    ]);
  }
}

export { CreateCarService };
