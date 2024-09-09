const mongoose = require('mongoose');
const express = require('express');
const cors = require("cors");
const connectDB = require("C:/coding/India Post/backend/connect.js"); // Import the connectDB function
require('dotenv').config();
const UserModel = require("C:/coding/India Post/backend/models/User.js"); // Import the UserModel
const bodyParser = require('body-parser');
const AuthRouter =  require('./Routes/AuthRouter.js')

// Express setup
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

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

app.use('/auth', AuthRouter);

// Call the function to start the server
startServer();

// Define your routes
app.get("/", (req, res) => {
    res.send("App is Working");
});


