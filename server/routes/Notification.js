const express = require('express');
const { Register_Notification, allnotification } = require('../controllers/Notification');
const Notification_route = express.Router();

Notification_route.post("/register",Register_Notification);
Notification_route.get("/allnotification",allnotification)

module.exports = Notification_route;