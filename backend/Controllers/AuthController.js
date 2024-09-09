const UserModel = require("../models/User.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { name, userID, password } = req.body;

    const user = await UserModel.findOne({ userID });
    if (user) {
      return res.status(409).json({
        message: "User already exists, you can log in",
        success: false,
      });
    }

    const userModel = new UserModel({ name, userID, password });

    userModel.password = await bcrypt.hash(password, 10);
    await userModel.save();

    res.status(201).json({
      message: "Registered successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};


const login = async (req, res) => {
  try {
    const { userID, password } = req.body;
    const errorMsg = 'Auth failed, userID or password is wrong';

    if (!userID || !password) {
      return res.status(400).json({
        message: "Please provide both userID and password",
        success: false,
      });
    }

    const user = await UserModel.findOne({ userID });
    if (!user) {
      return res.status(403).json({
        message: errorMsg,
        success: false,
      });
    }

    const isPassEqual = await bcrypt.compare(password, user.password);
    if (!isPassEqual) {
      return res.status(403).json({
        message: errorMsg,
        success: false,
      });
    }

    const jwtToken = jwt.sign(
      { name: user.name, _id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.status(200).json({
      message: "Logged in successfully",
      success: true,
      jwtToken,
      userID,
      name: user.name
    });
  } catch (error) {
    console.error(error);  
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};
module.exports = { 
  register,
  login
};
