import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.set("strictQuery", true);
  console.log("establishing connection to database...");
  try {
    await mongoose.connect(process.env.MONGODB_URI || "");
  } catch (error) {
    throw error;
  }
};

export default connectDB;