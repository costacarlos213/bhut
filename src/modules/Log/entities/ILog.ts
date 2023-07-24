import { Types } from 'mongoose';

interface ILog {
  data_hora: Date;
  car_id: string;
  _id: Types.ObjectId;
}

export { ILog };
