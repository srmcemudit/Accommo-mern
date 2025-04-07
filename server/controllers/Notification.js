const Notification = require("../models/Notification");

module.exports.Register_Notification = async(req,res) =>{
    try {
        const {Title, Description} = req.body;
        console.log("req recived at notification");
        console.log(Title,Description);
        const notification = await Notification.create({
            Title: Title,
            Description: Description
        });
        res.status(200).json(notification);
    } catch (error) {
        res.status(401).json({error});
    }
}

module.exports.allnotification = async(req,res) => {
    try {
        const notification = await Notification.find();
        res.status(200).json(notification);
    } catch (error) {
        res.status(501).json(error);
    }
}

