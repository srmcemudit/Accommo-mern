const express = require("express");
const { getUser, getId, Login, Register, ChangePass } = require("../controllers/user");
const { Validate } = require("../Middlewares/Validator");
const userRouter = express.Router();

//Middleware
userRouter.use((req, res, next) => {
    if (req.path === "/login" || req.path === "/register") {
      return next(); // Skip validation for login and register
    }
    Validate(req, res, next); // Apply validation middleware for other routes
  });

// Get all users
userRouter.get("/getAllUser", getUser);

// Get user by ID
userRouter.get("/getUserById/:id", getId);

// Login route
userRouter.post("/login", Login);
userRouter.get("/login", Validate);

// Register routes
userRouter.post("/register", Register);

//Change Password
userRouter.post("/changepass", Validate, ChangePass);

module.exports = userRouter;
