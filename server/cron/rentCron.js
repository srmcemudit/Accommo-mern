const cron = require("node-cron");
const User = require("../models/user");

// Run every day at 12:00 AM
cron.schedule('0 0 * * *', async () => {
  console.log("Daily room rent calculation started at", new Date().toLocaleString());

  try {
    const users = await User.find({ role: "client", RoomNo: { $ne: null } });

    for (let user of users) {
      const today = new Date();
      
      // If LastRoomrentDate is null, use the user's createdAt date for the initial calculation
      let roomLastPaid = user.LastRoomrentDate || user.createdAt;
      
      // Calculate the days between today and the last paid date for room rent
      const roomDaysPending = Math.floor((today - new Date(roomLastPaid)) / (1000 * 3600 * 24));

      // Check if there are any pending days to calculate
      if (roomDaysPending > 0) {
        // Calculate per day rent (assuming a month has 30 days)
        const roomPerDay = user.Roomrent / 30; 
        const roomPendingAmount = Math.round(roomDaysPending * roomPerDay);

        // Update the Room Rent by adding the calculated amount
        const updatedRoomRent = user.Roomrent + roomPendingAmount;

        // Update the user's rent and the LastRoomrentDate
        await User.updateOne(
          { _id: user._id },
          {
            $set: {
              Roomrent: updatedRoomRent,
              LastRoomrentDate: today // Update Last Room Rent Date to today
            }
          }
        );

        console.log(`✅ Updated Room rent for User ${user.name} - ₹${updatedRoomRent}`);
      }
    }

    console.log("✅ Daily room rent calculation completed.");
  } catch (err) {
    console.error("❌ Error calculating room rent:", err);
  }
});
