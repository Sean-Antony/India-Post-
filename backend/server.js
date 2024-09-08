const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const startServer = async () => {
    try {
        await mongoose.connect("mongodb+srv://seanantonyjr11:posting1234@indiapost.jezbi.mongodb.net/IndiaPost?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to IndiaPost database');

        // Define schema for users
        const UserSchema = new mongoose.Schema({
            name: {
                type: String,
                required: true,
            },
            userid: {
                type: String,
                required: true,
                unique: true,
            },
            password: {
                type: String,
                required: true,
            },
        });
        
        UserSchema.index({ userid: 1 }); // Create an index for the userid field
        const User = mongoose.model('User', UserSchema);

        // Routes
        app.get("/", (req, res) => {
            res.send("App is Working");
        });

        app.post("/register", async (req, res) => {
            try {
                const user = new User(req.body);
                const result = await user.save();
                const userData = result.toObject();
                delete userData.password;
                res.status(201).json(userData); // Return user data without password
            } catch (e) {
                console.error("Error:", e.message);
                res.status(500).json({ message: "Something Went Wrong", error: e.message });
            }
        });

        // Start server
        const port = process.env.PORT || 5000;
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (err) {
        console.error('Failed to connect to MongoDB:', err);
    }
};

startServer();