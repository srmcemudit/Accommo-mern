const express = require("express");
const { availableroom, allrooms, userroom, updateroom } = require("../controllers/Rooms");
const RoomsRoute = express.Router();

RoomsRoute.get('/all',allrooms);
RoomsRoute.get('/available',availableroom);
RoomsRoute.get('/userroom/:userid',userroom);
RoomsRoute.put('/updateroom/:id',updateroom);

module.exports = RoomsRoute;