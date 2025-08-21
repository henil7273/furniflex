// import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGO_DB_URI as string;
// if (!MONGODB_URI) throw new Error("Missing MONGO_DB_URI in .env.local");

// let cached = (global as any).mongoose as {
//   conn: typeof mongoose | null;
//   promise: Promise<typeof mongoose> | null;
// };

// if (!cached) { 
//   cached = (global as any).mongoose = { conn: null, promise: null };
// }

// export async function connectDb() {
//   if (cached.conn) return cached.conn;
//   if (!cached.promise) {
//     cached.promise = mongoose.connect(MONGODB_URI, { dbName: "furniflex" });
//   }
//   cached.conn = await cached.promise;
//   return cached.conn;
// }


//chatgpt code

import mongoose, { Connection } from "mongoose";

const MONGODB_URI = process.env.MONGO_DB_URI as string;
if (!MONGODB_URI) throw new Error("Missing MONGO_DB_URI in .env.local");

interface MongooseCache {
  conn: Connection | null;
  promise: Promise<typeof mongoose> | null;
}

// Augment NodeJS global type
declare global {
  // eslint-disable-next-line no-var
  var mongoose: MongooseCache | undefined;
}

let cached: MongooseCache = global.mongoose || { conn: null, promise: null };

export async function connectDb(): Promise<Connection> {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, { dbName: "furniflex" });
  }

  const mongooseInstance = await cached.promise;
  cached.conn = mongooseInstance.connection;
  global.mongoose = cached;
  return cached.conn;
}
