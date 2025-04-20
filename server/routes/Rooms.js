const express = require("express");
const { availableroom, allrooms } = require("../controllers/Rooms");
const RoomsRoute = express.Router();

RoomsRoute.get('/all',allrooms);
RoomsRoute.get('/available',availableroom);

module.exports = RoomsRoute;