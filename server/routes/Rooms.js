const express = require("express");
const { availableroom, allrooms, userroom } = require("../controllers/Rooms");
const RoomsRoute = express.Router();

RoomsRoute.get('/all',allrooms);
RoomsRoute.get('/available',availableroom);
RoomsRoute.get('/userroom/:userid',userroom);

module.exports = RoomsRoute;