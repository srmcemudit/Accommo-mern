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