const Complaint = require("../models/Complaints");

module.exports.getcomplaints = async(req,res) => {
  try {
    const { userId } = req.params;
    const complaints = await Complaint.find({ userId });  // Find posts by userId
    if (!complaints.length) {
        return res.status(404).json({ message: "No complaints found for this user" });
    }
    res.status(200).json(complaints);
} catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
}
}

module.exports.registercomplaints = async (req, res) => {
    try {
      const { title, content, userId } = req.body;
      const complaint = await Complaint.create({
        title: title,
        content: content,
        userId: userId,
      });
      res.status(200).json(complaint);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  module.exports.allcomplaints = async (req,res) => {
    try {
      const complaint = await Complaint.find().populate("userId", "name email");
      res.status(200).json(complaint);
    } catch (error) {
      console.log(error);
    }
  }