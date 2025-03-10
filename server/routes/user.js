const express = require("express");
const { getUser, getId, Login, Register, ChangePass } = require("../controllers/user");
const { Validate } = require("../Middlewares/Validator");
const userRouter = express.Router();

// Get all users
userRouter.get("/getAllUser", getUser);

// Get user by ID
userRouter.get("/getUserById/:id", getId);

// Login route
userRouter.post("/login", Login);

// Register routes
userRouter.post("/register", Register);

//Change Password
userRouter.post("/changepass", Validate, ChangePass);

module.exports = userRouter;
