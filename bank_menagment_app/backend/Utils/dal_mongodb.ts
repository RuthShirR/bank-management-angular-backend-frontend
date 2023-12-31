import mongoose from "mongoose";
import config from "./Config";


// Function to connect to MongoDB
const connect = async (): Promise<void> => {
  try {
    const db = await mongoose.connect(config.connectionString);
    console.log("Connected to MongoDB");
  } catch (error: any) {
    console.error("Error: ", error);
  }
};

export default connect;