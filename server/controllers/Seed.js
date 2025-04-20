const Rooms = require('../models/Rooms')
const mongoose = require("mongoose");
require("dotenv").config();

const seedRooms = async () => {
    try {
      await mongoose.connect()
      console.log("MongoDB connected");
      const rooms = [];
      for (let i = 1; i <= 50; i++) {
        rooms.push({
        RoomNo: `${i.toString().padStart(3, '0')}`, // e.g., R001, R002, ..., R050
        status: "vacant",
        guests: []
        });
      }
      await Rooms.insertMany(rooms);
      console.log("🏠 50 rooms added successfully!");
      process.exit();
    } catch (err) {
      console.error("Seeding error:", err);
      process.exit(1);
    }
  };