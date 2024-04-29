import mongoose, { Mongoose } from "mongoose";

const mongoUrl = process.env.MONGODB_URL;

interface MongooseConnection {
  connection: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cachedConnection: MongooseConnection = (global as any).mongoose;

if (!cachedConnection) {
  cachedConnection = (global as any).mongoose = {
    connection: null,
    promise: null,
  };
}

export const connectToDatabase = async () => {
  if (cachedConnection.connection) {
    return cachedConnection.connection;
  }

  if (!mongoUrl) {
    throw new Error("MongoDB URL is not set");
  }
  if (!cachedConnection.promise) {
    const newConnection = mongoose.connect(mongoUrl, {
      dbName: "imaginify",
      bufferCommands: false,
    });

    cachedConnection.promise = newConnection;
  }

  cachedConnection.connection = await cachedConnection.promise;
  return cachedConnection.connection;
};
