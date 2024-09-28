import mongoose from "mongoose";

/* eslint-disable @typescript-eslint/no-explicit-any */
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

// Initialize a cached connection object
let cached = (global as any).mongoose;

if (!cached) {
  cached = global as unknown as  unknown & { mongoose: { conn: null, promise: null } };
}

async function dbConnect() {
  // Return cached connection if available
  if (cached.conn) {
    return cached.conn;
  }

  // Create a new connection if not cached
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      useNewUrlParser: true, // Avoid deprecation warnings
      useUnifiedTopology: true,
    };

    cached.promise = mongoose.connect(MONGODB_URI!, opts).then((mongooseInstance) => {
      return mongooseInstance; // Return the mongoose instance
    });
  }

  cached.conn = await cached.promise; // Await the connection
  return cached.conn; // Return the connected instance
}

export default dbConnect;
