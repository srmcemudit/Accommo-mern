const User = require("../models/user");
module.exports.getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({Message : "Server Error"});
  }
};
