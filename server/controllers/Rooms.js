const Rooms = require("../models/Rooms")

module.exports.availableroom  = async(req,res) =>{
    try {
        const rooms = await Rooms.findOne({Status:"vacant"})
        res.status(200).json(rooms);
    } catch (error) {
        console.log(error);
    }
}

module.exports.allrooms = async(req,res) =>{
  try {
      const rooms = await Rooms.find().populate("guest", "name email");
      res.status(200).json(rooms);
  } catch (error) {
      console.log(error);
  }
}

module.exports.userroom = async(req,res) =>{
    try {
        const userid = req.params.userid;
        const UserRoom = await Rooms.findOne({guest: userid})
        res.status(200).json(UserRoom)
    } catch (error) {
        res.status(501).json(error)
    }
}