const express = require("express");
const { getUser } = require("../controllers/user");
const User = require("../models/user"); // Import Mongoose model

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

module.exports = userRouter;
