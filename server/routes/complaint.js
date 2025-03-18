const express = require('express');
const { getcomplaints, registercomplaints } = require('../controllers/complaints');
const complaintRoute = express.Router();

complaintRoute.post("/register", registercomplaints);
complaintRoute.get("/get/:userId", getcomplaints);

  complaintRoute.get("/getallcomplaints",getcomplaints)
  module.exports = complaintRoute;