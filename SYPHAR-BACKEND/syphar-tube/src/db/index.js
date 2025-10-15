import mongoose from "mongoose";
import { DB_NAME } from "../utils/constants.js";

export const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    console.log(
      `\nMongodb connected!! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("ERROR! connecting mongodb: ", error);
    process.exit(1);
  }
};
