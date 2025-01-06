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
        }//,
        // user: {
        //     id:{type: mongoose.Schema.Types.ObjectId,
        //         ref: 'User',
        //         required: true
        //     },
        //     name:{type: String,
        //         required: true
        //     }
        //}
    },
    {
        timestamps: true
    })

const Complaint = mongoose.model('Complaint',ComplaintsSchema);
module.exports = Complaint;