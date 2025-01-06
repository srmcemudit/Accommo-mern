const express = require("express");
const { getUser } = require("../controllers/user");
const User = require("../models/user"); // Import Mongoose model
const bcrypt = require('bcryptjs');
const Suggestion = require("../models/Suggestion");

const userRouter = express.Router();

// Get all users
userRouter.get("/getAllUser", getUser);

// Get user by ID
userRouter.get("/getUserById/:id", getUser);



// Login route
userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log("request recieved at /user/login")

  try {
    // Find user with matching email and password
    const user = await User.findOne({ email: email, password: password });

    if (user) {
      res.status(200).json({ message: "Login successful", user });
    } else {
      return res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Register routes
userRouter.post('/register', async(req, res) => {
  try{
      const {name, email, password} = req.body;
      console.log("request recieved at /user/register");

      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if(existingUser) return res.status(400).json({ message: "User already exists" });

      // Hash the password before saving to the database
      const salt = await bcrypt.genSalt(10);
      const hash_password = await bcrypt.hash(password, salt);

      const user = new User({name, email, password: hash_password});
      const result = await user.save();
      res.status(201).json({ message: "User created successfully", result});
      console.log(result);
    }catch(err) {
    console.log("error in catch");
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = userRouter;
