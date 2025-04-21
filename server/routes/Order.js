const express = require('express');
const getKey = require('../controllers/Key');
const { Order, payment } = require('../controllers/Order');
const OrderRoute = express.Router();

OrderRoute.post('/order',Order)
OrderRoute.get("/getkey", getKey);
OrderRoute.post("/paymentverify",payment)

module.exports = OrderRoute;