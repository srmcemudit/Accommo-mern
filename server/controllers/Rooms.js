const Rooms = require("../models/Rooms");
const User = require("../models/user");

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

module.exports.updateroom = async(req,res) =>{
    try {
        const roomId = req.params.id;
        const Status = req.body.Status;
        const guest = req.body.guest;
        const Room = await Rooms.findOne({_id: roomId})
        let user = null;
        if(guest){
            user = await User.findOne({ _id: guest._id });
        }
        console.log(guest);
        console.log(Room);
        console.log(Status);
        if(Status === "maintenance" && guest ){
            const newRoom = await Rooms.findOne({ Status: "vacant", type: Room.type});
            if (!newRoom) {
                return res.status(400).json({ message: "No vacant rooms available" });
            }
            Room.Status = "maintenance";
            Room.guest = null;
            newRoom.guest = guest;
            newRoom.Status = "occupied";
            console.log("user",user)
            user.RoomNo = newRoom.RoomNo;
            await Room.save()
            await newRoom.save()
            await user.save()
            return res.status(200).json(newRoom);
        }
        if(Status === "maintenance" && guest == null){
            Room.Status = "maintenance";
            await Room.save();
            return res.status(200).json({"message": "room updated"})
        }
        if(Status === "vacant" && user){
            Room.Status = "vacant";
            Room.guest = null;
            await User.deleteOne({_id: guest._id});
            await Room.save()
            return res.status(200).json({"message": "room updated and user deleted"})
        }
        if(Status === "vacant" && !user){
            Room.Status = "vacant";
            Room.guest = null;
            await Room.save();
            return res.status(200).json({"message": "room updated"})
        }
        res.status(400).json({ message: "Invalid status update" });
    } catch (error) {
        console.log(error);
        res.status(400).json(error)
    }
}