import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URL}food-delivery`);
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log(`Error connecting to Database`, error);
  }
};
