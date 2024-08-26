import express from "express";
import User from "./mongo.js"; // Ensure this imports your Mongoose model correctly
import cors from "cors";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


const MONGO_URI = "mongodb://localhost:27017/IndiaPost"; // Replace 'yourdbname' with your actual database name
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection failed:', err));
// Routes
app.get("/", (req, res) => {
    res.json({ message: "Welcome to the API" });
});

app.post("/", async (req, res) => {
    const { email, password } = req.body;  // Ensure password is also handled if needed
    try {
        const user = await User.findOne({ email: email });
        if (user) {
            return res.status(409).json({ status: "exist", message: "User already exists." });
        } else {
            // Here you might want to create a new user if they do not exist
            // For example:
            // const newUser = new collection({ email, password });
            // await newUser.save();
            return res.status(200).json({ status: "not exist", message: "User does not exist." });
        }
    } catch (error) {
        console.error(error);  // Log the error for debugging
        return res.status(500).json({ status: "error", message: "Internal server error." });
    }
});

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});