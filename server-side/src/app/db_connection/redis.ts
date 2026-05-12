import { Redis } from "ioredis";
import config from "../config";

const redisConfig = {
  host: config.RedisHost as string,
  port: Number(config.RedisPort),
  password: config.RedisPassword as string,
  username: config.RedisUserName as string,
  maxRetriesPerRequest: null, // Required by BullMQ
};

export const redisConnection = new Redis(redisConfig);

redisConnection.on("connect", () => {
  console.log("Redis connected successfully");
});

redisConnection.on("error", (err) => {
  console.error("Redis connection error:", err);
});
