const mongoose = require('mongoose');

const Notification_Schema = new mongoose.Schema (
    {
        Title: {
            type: String,
            required: true
        },
        Description: {
            type: String,
            required: true
        }
    },
    {
        timestamps:true
    }
)

const Notification = mongoose.model('Notification', Notification_Schema);
module.exports = Notification;