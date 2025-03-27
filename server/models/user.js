const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

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
},{
  timestamps: true
});
const User = mongoose.model("User", user);
module.exports = User;