// global.d.ts
import { Mongoose } from 'mongoose';

declare global {
  namespace NodeJS {
    interface Global {
      mongoose: {
        conn: Mongoose | null;
        promise: Promise<Mongoose> | null;
      };
    }
  }
}

// This line is necessary to ensure the file is treated as a module
export {};
