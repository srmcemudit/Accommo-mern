const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
module.exports.getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
    module.exports = users;
  } catch (error) {
    console.error(error);
    res.status(500).json({Message : "Server Error"});
  }
};

module.exports.getId = async (req,res) =>{
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    console.log(user);
    

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("catch error",error);
    res.status(500).json({message:"server error"})
  }
}

module.exports.Login = async (req, res) => {
  const { email, password } = req.body;
  console.log(email);

  console.log("request recieved at /user/login");
  try {
    //compare password with db hashed password
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.json({ sucess: false, message: "invalid email" });
    } else {
      const DB_password = user.password;
      const compare = await bcrypt.compareSync(password, DB_password);

      if (compare) {
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
          expiresIn: "7d",
        });
        res.cookie("token", token, {
          httpOnly: true,
          maxAge: 7 * 24 * 60 * 60 * 1000,
          secure: false,
        });
        console.log(token);

        return res.status(200).json({ message: "Login successful", user });
      } else {
        return res.status(401).json({ message: "Invalid credentials" });
      }
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}


module.exports.Register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log("request recieved at /user/register");

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    // Hash the password before saving to the database
    const salt = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(password, salt);

    const user = new User({ name, email, password: hash_password });
    const result = await user.save();
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    console.log(token);

    res.cookie("token", token, {
      //httpOnly:true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res.status(201).json({ message: "User created successfully", result });
    console.log(result);
  } catch (err) {
    console.log("error in catch");
    res.status(500).json({ message: "Server error" });
  }
}

module.exports.ChangePass = async(req,res) =>{
  try {
    const{CurrentPass, NewPass} = req.body;
    const user = req.user;
    console.log(user);
    
  } catch (error) {
    
  }
}