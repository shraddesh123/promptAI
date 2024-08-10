import mongoose from "mongoose";

let isConnected = false;//tracing the connection

export const connectToDB = async () => {
    mongoose.set('strict', true);

    if (isConnected) {
        console.log("mongoose is already connected");
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
        })
        isConnected = true;
        console.log('mongoose is connected');
    } catch (error) {
        console.log(error);
    }
}