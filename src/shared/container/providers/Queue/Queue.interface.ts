import { JobsOptions } from 'bullmq';

interface ISuccessQueue {
  status: 'success';
  webhook_url: string;
  car_id: string;
}

interface IErrorQueue {
  status: 'error';
  webhook_url: string;
}

type IQueue = ISuccessQueue | IErrorQueue;

interface IJobOptions {
  jobName: string;
  jobOptions?: JobsOptions;
  data: IQueue;
}

interface IQueueProvider {
  addToQueue(options: IJobOptions): Promise<string>;
}

export { IQueueProvider, IJobOptions, IQueue };
