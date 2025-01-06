const express = require('express');
const Complaint = require('../models/Complaints');
const { getcomplaints } = require('../controllers/complaints');
const complaintRoute = express.Router();

complaintRoute.post("/register", async (req, res) => {
    try {
      const { title, content } = req.body;
      const complaint = await Complaint.create({
        title: title,
        content: content,
      });
      res.status(200).json(complaint);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  });

  complaintRoute.get("/getallcomplaints",getcomplaints)
  module.exports = complaintRoute;