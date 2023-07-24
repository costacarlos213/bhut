import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';
import { ILog } from './ILog';

const logSchema = new mongoose.Schema<ILog>({
  _id: ObjectId,
  data_hora: {
    type: Date,
    default: Date.now,
  },
  car_id: String,
});

const Log = mongoose.model<ILog>('Log', logSchema);

export { Log };
