const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const Rooms = require("../models/Rooms");
require("dotenv").config();
module.exports.getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ Message: "Server Error" });
  }
};

module.exports.getId = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("catch error", error);
    res.status(500).json({ message: "server error" });
  }
};
module.exports.cookies = async (req, res) => {
  if (!req.cookies) {
    return res.status(400).json({ message: "no cookie found" });
  } else {
    return res.status(200).json({ cookie: req.cookies });
  }
};

module.exports.Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    //compare password with db hashed password
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.json({ sucess: false, message: "invalid email" });
    } else {
      const DB_password = user.password;
      const compare = await bcrypt.compare(password, DB_password);

      if (compare) {
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
          expiresIn: "7d",
        });
        res.cookie("token", token, {
          httpOnly: true,
          maxAge: 7 * 24 * 60 * 60 * 1000,
          secure: true,
          sameSite: "None",
        });
        return res.status(200).json({ message: "Login successful", user });
      } else {
        return res.status(401).json({ message: "Invalid credentials" });
      }
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports.Register = async (req, res) => {
  try {
    const { name, email, role, roomtype } = req.body;
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash default password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash("123", salt);

    const user = new User({ name, email, password: hashedPassword, role });
    if (role === "admin") {
      user.RoomNo = undefined;
    }
      const availableRoom = await Rooms.findOne({ Status: "vacant" ,type: roomtype });
      if (availableRoom) {
        availableRoom.guest = user._id;
        availableRoom.Status = "occupied";
        await availableRoom.save();
        await user.save();
        user.RoomNo = availableRoom.RoomNo;
      } else {
        return res.status(401).json({"message": "no rooms vacant"})
      }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("token", token, {
      // httpOnly: true, // Enable for security in production
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res
      .status(201)
      .json({ message: "User created successfully", user });
  } catch (err) {
    console.error("❌ Error in /user/register:", err);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports.ChangePass = async (req, res) => {
  try {
    const { UserPass, Userid, Current, New } = req.body;
    const compare = await bcrypt.compareSync(Current, UserPass);
    if (compare) {
      const user = await User.findById(Userid);
      const hashedPassword = await bcrypt.hash(New, 10);
      user.password = hashedPassword;
      await user.save();
      res.status(200).json({ message: "Password updated successfully" });
    } else {
      res.status(501).json({ message: "passwords incorrect" });
    }
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Server Error" });
  }
};
