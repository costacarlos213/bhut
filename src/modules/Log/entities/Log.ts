import mongoose from 'mongoose';
import { ILog } from './Log.interface';

const logSchema = new mongoose.Schema<ILog>({
  data_hora: {
    type: Date,
    default: Date.now,
  },
  car_id: String,
});

const Log = mongoose.model<ILog>('Log', logSchema);

export { Log };
