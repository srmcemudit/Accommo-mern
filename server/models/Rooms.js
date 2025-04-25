const mongoose = require("mongoose");

const RoomsSchema  = new mongoose.Schema (
    {
        RoomNo : {
            type: String,
            required: true,
            unique: true,
        },
        Status : {
            type: String,
            enum: ["vacant","occupied","maintenance"],
            default: "vacant",
        },
        guest: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: null
        },
        type: {
            type: String,
            enum: ["Single", "Double"],
            default: "Single"
        }
    },
    {
        timestamps: true,
    }

)
const Rooms = mongoose.model('Rooms',RoomsSchema );
module.exports = Rooms;