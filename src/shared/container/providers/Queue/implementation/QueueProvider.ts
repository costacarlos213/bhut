import { Queue } from 'bullmq';
import { redis } from '@config/redis';
import { IQueueProvider, IQueue, IJobOptions } from '../Queue.interface';
import './worker';

class QueueProvider implements IQueueProvider {
  private queue: Queue;

  constructor() {
    this.queue = new Queue<IQueue>('webhook-queue', {
      connection: redis,
    });
  }

  async addToQueue({
    data,
    jobName,
    jobOptions,
  }: IJobOptions): Promise<string> {
    const job = await this.queue.add(jobName, data, jobOptions);

    return job.id as string;
  }
}

export { QueueProvider };
