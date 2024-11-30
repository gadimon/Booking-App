import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_CONNECTION);
        console.log("connected to the mongoDB");

    } catch (error) {
        console.error("Failed to connect to database", error);

    }
};
