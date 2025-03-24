const express = require('express');
const { getcomplaints, registercomplaints, allcomplaints } = require('../controllers/complaints');
const complaintRoute = express.Router();

complaintRoute.post("/register", registercomplaints);
complaintRoute.get("/get/:userId", getcomplaints);

  complaintRoute.get("/getallcomplaints",allcomplaints)
  module.exports = complaintRoute;