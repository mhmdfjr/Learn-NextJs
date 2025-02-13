// import mongoose from "mongoose";

// const MONGODB_URI: string = process.env.MONGODB_URI || "";

// if (!MONGODB_URI) {
//   throw new Error("Please define the MONGODB_URI environment variable");
// }

// interface MongooseCache {
//   conn: typeof mongoose | null;
//   promise: Promise<typeof mongoose> | null;
// }

// declare global {
//   var mongooseCache: MongooseCache | undefined;
// }

// let cached: MongooseCache = global.mongooseCache || { conn: null, promise: null };

// async function dbConnect() {
//   if (cached.conn) {
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     cached.promise = mongoose.connect(MONGODB_URI, {
//       bufferCommands: false,
//     });
//   }

//   cached.conn = await cached.promise;
//   global.mongooseCache = cached;

//   return cached.conn;
// }

// export default dbConnect;
