import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export async function GET(req, res) {
  const keys = await redis.keys("*");

  const data = [];

  console.log("Api Called");

  for (const key of keys) {
    const value = await redis.get(key);
    data.push(value);
  }

  return NextResponse.json(data);
}
