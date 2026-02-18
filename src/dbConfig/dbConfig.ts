import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI as string;

if (!MONGO_URI) {
  throw new Error("Please define MONGO_URI in .env.local");
}

let isConnected = false;

export async function connect() {
  try {
    if (isConnected) {
      console.log("MongoDB already connected");
      return;
    }

    const db = await mongoose.connect(MONGO_URI);

    isConnected = db.connections[0].readyState === 1;

    if (isConnected) {
      console.log("MongoDB connected successfully");
    }
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
}
