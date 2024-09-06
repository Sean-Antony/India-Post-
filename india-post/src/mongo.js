import { connect, Schema, model } from "mongoose";

// Connect to MongoDB
connect("mongodb://localhost:27017/IndiaPost")
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((error) => {
        console.error('MongoDB connection failed:', error);
    });

// Define schema
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true  // Adding unique constraint for email
    },
    password: {
        type: String,
        required: true
    }
});

// Create model
const User = model("User", userSchema);

// Export the model
export default User;
