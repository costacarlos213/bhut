import mongoose from 'mongoose';

const connection_url =
  process.env.MONGO_URL || 'mongodb://localhost:27017/test';

async function connect(): Promise<void> {
  await mongoose.connect(connection_url);
}

connect();
