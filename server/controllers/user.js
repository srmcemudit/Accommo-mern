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
