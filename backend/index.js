const mongoose = require('mongoose');
const express = require('express');
const cors = require("cors");
const connectDB = require("./connect"); // Import the connectDB function
require('dotenv').config();
const UserModel = require("./models/user") // Import the UserModel

// Express setup
const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB and start the server
const startServer = async () => {
    try {
        await connectDB(); // Call the function to connect to MongoDB
        app.listen(3000, () => { // Ensure this matches the port you're using
            console.log('Connected to IndiaPost database and server running on port 3000');
        });
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
        process.exit(1); // Exit process with failure
    }
};

// Call the function to start the server
startServer();

// Define your routes
app.get("/", (req, res) => {
    res.send("App is Working");
});

app.post('/register',  (req, res) => {
 UserModel.create(req.body)
 .then(users => res.json(users))
 .catch(err => res.json(err))
});