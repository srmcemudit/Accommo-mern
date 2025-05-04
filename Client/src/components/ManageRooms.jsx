import { useState } from "react";
import { useDispatch } from "react-redux";
import { setRoom, setVacant } from "../Redux/Userslice";
import axios from "axios";

const ManageRooms = ({ data }) => {
  const [status, setStatus] = useState(data?.Status || "");
  const guest = data?.guest || null;
  const dispatch = useDispatch();

  if (!data) {
    return (
      <div className="flex items-center justify-center h-full py-10 text-gray-500">
        Loading room details...
      </div>
    );
  }

  const handleLeaveRoom = () => {
    if (window.confirm("Are you sure the guest is leaving?")) {
      setStatus("vacant");
      handleSaveChanges();
    }
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSaveChanges = async () => {
    try {
      const response = await axios.put(
        `https://accommo-mern.onrender.com/rooms/updateroom/${data._id}`,
        {
          Status: status,
          guest: guest,
        }
      );

      if (response.status === 200) {
        const res = await axios.get(
          "https://accommo-mern.onrender.com/rooms/all"
        );
        const updatedRooms = res.data;
        const vacantRooms = updatedRooms.filter(
          (room) => room.Status === "vacant"
        );
        dispatch(setVacant(vacantRooms));
        dispatch(setRoom(updatedRooms));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800">
      <div className="bg-teal-600 px-6 py-4">
        <h2 className="text-xl font-semibold text-white">Manage Room</h2>
      </div>

      <div className="p-6 space-y-6">
        {/* Room Info */}
        <div className="space-y-3 p-4 rounded-lg bg-gray-50 border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
          <h3 className="font-medium text-teal-600 dark:text-teal-400">Room Information</h3>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Room No:</p>
              <p className="font-medium">{data.RoomNo}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Status:</p>
              <p className="font-medium capitalize">{data.Status}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Type:</p>
              <p className="font-medium">{data.type}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Created:</p>
              <p className="font-medium text-sm">{new Date(data.createdAt).toLocaleString()}</p>
            </div>
          </div>
        </div>

        {/* Guest Info */}
        {guest ? (
          <div className="p-4 rounded-lg bg-teal-50 border border-teal-100 dark:bg-teal-900/30 dark:border-teal-800">
            <h3 className="font-medium text-teal-600 dark:text-teal-400 mb-2">Guest Details</h3>
            <div className="space-y-2">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Name:</p>
                <p className="font-medium">{guest.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Email:</p>
                <p className="font-medium">{guest.email}</p>
              </div>
            </div>
            <button
              onClick={handleLeaveRoom}
              className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md transition-colors"
            >
              Guest Leaving
            </button>
          </div>
        ) : (
          <div className="text-center py-4 text-gray-500 dark:text-gray-400 italic">
            No guest assigned to this room
          </div>
        )}

        {/* Status Change */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Change Room Status
          </label>
          <select
            value={status}
            onChange={handleStatusChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="occupied">Occupied</option>
            <option value="vacant">Vacant</option>
            <option value="maintenance">Maintenance</option>
          </select>
        </div>

        {/* Save Button */}
        <button
          onClick={handleSaveChanges}
          className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default ManageRooms;