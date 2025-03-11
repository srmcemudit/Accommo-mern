const mongoose = require('mongoose');

const ComplaintsSchema= new mongoose.Schema (
    {
        title:{
            type: String,
            required: true
        },
        content:{
            type: String,
            required: true
         },
         userId: {
            type: mongoose.Schema.Types.ObjectId, // Reference to User model
            ref: "User", // Ensure this matches your User model name
            required: true
          }
    },
    {
        timestamps: true
    })

const Complaint = mongoose.model('Complaint',ComplaintsSchema);
module.exports = Complaint;