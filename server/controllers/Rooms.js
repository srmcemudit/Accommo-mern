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