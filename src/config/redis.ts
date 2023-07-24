const { REDIS_HOST, REDIS_PORT, REDIS_PASS, REDIS_DB } = process.env;

interface IRedisConfig {
  host: string;
  port: number;
  password?: string;
  db?: number;
}

export const redis = {
  host: REDIS_HOST || '127.0.0.1',
  port: REDIS_PORT || 6379,
  password: REDIS_PASS || '',
  db: parseInt(REDIS_DB || '0', 10),
  maxRetriesPerRequest: null,
} as IRedisConfig;
