/* eslint-disable no-console */
import { Job, Worker } from 'bullmq';
import { redis } from '@config/redis';
import axios, { isAxiosError } from 'axios';
import { IQueue } from '../Queue.interface';

export const worker = new Worker<IQueue>(
  'webhook-queue',
  async ({ data }: Job<IQueue>) => {
    try {
      if (data.status === 'success') {
        await axios.post(data.webhook_url, {
          status: data.status,
          car_id: data.car_id,
          message: 'The car was successfully created!',
        });

        return;
      }

      await axios.post(data.webhook_url, {
        status: data.status,
        message: 'There was an error creating the car',
      });
    } catch (error) {
      if (!isAxiosError(error)) {
        console.log(error);
      }
    }
  },
  {
    connection: redis,
    concurrency: 10,
  },
);

worker.on('failed', (job, err) =>
  console.log(`Failed job ${job?.id} with ${err}`),
);
