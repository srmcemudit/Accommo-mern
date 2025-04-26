const mongoose = require("mongoose");

const user = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  } ,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required:true,
    default:'123'
  },
  role: {
    type: String,
    enum: ["client","admin"],
    default: "client",
  },
  RoomNo: {
    type: String,
    default: null,
  },
  Roomrent: {
    type: Number,
    default: 0,
  },
  Messrent: {
    type: Number,
    default: 0,
  },
  LastRoomrentDate: {
    type: Date,
    default: Date.now(),
  },
  LastMessrentDate: {
    type: Date,
    default: Date.now(),
  },

},{
  timestamps: true
});
const User = mongoose.model("User", user);
module.exports = User;