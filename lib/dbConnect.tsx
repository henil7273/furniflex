import mongoose, { Mongoose } from "mongoose";

const MONGODB_URI = "mongodb://localhost:27017/furniflex"
;
if (!MONGODB_URI) throw new Error("Missing MONGO_DB_URI in .env.local");

// Extend NodeJS global type to persist cache across hot reloads
declare global {
  var mongoose: {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
  };
}

const cached = global.mongoose || { conn: null, promise: null };

if (!global.mongoose) {
  global.mongoose = cached;
}

export async function connectDb(): Promise<Mongoose> {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, { dbName: "furniflex" });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
