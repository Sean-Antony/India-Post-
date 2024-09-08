const mongoose = require("mongoose");

// Move sensitive data like URI to environment variables
const uri = process.env.MONGO_URI || 'mongodb+srv://fernandezfigo:NdlomxQtGYFNfH2A@indiapost.jezbi.mongodb.net/IndiaPost?retryWrites=true&w=majority&appName=IndiaPost';

const connectDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;