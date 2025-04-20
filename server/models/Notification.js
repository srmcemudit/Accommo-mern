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
        },
        createdAt: {
            type: Date,
            default: Date.now,
            expires: 24*60*60,
          }
    }
)

const Notification = mongoose.model('Notification', Notification_Schema);
module.exports = Notification;