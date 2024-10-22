import mongoose from "mongoose";


export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://gulati:12345@cluster0.4xuab.mongodb.net/foodie');
        console.log("DB Connected");
    } catch (error) {
        console.error("DB Connection Error:", error.message);
        process.exit(1); // Exit the process if connection fails
    }
};
