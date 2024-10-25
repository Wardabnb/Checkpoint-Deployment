import mongoose from "mongoose";

export async function dbConnect() {
  await mongoose.connect(process.env.DATABASE_URL);
  console.log("Connected to MongoDb!");
}
