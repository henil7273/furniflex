import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGO_DB_URI as string;
if (!MONGODB_URI) throw new Error("Missing MONGO_DB_URI in .env.local");

// Properly type the global object
declare global {
  var mongoose: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  } | undefined;
}

const cached = global.mongoose || { conn: null, promise: null };

if (!global.mongoose) {
  global.mongoose = cached;
}

export async function connectDb() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, { dbName: "furniflex" });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}