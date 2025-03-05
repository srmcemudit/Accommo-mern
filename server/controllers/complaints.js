const Complaint = require("../models/Complaints");

module.exports.getcomplaints = async(req,res) => {
    try {
       const complaints = await Complaint.find()
       res.status(200).json(complaints)
       console.log("success")        
    } catch (error) {
        res.status(500).json({Message: "error in server"})
        console.log(error);
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