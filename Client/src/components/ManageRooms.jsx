import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setRoom, setVacant } from "../Redux/Userslice";

const ManageRooms = ({ data }) => {
  const [status, setStatus] = useState(data?.Status || "");
  const guest = data?.guest || null
  const dispatch = useDispatch();

  if (!data) {
    return <div className="text-center py-10">Loading room details...</div>;
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
      const response = await axios.put(`http://localhost:3001/rooms/updateroom/${data._id}`,{"Status": status, "guest": guest});
      if(response.status==200) {
        const Response = await axios.get('http://localhost:3001/rooms/all')
        const updatedRooms = Response.data;
        const vacantRooms = updatedRooms.filter(room => room.Status == "vacant");
        dispatch(setVacant(vacantRooms));
        dispatch(setRoom(updatedRooms));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-2xl w-full bg-zinc-900 rounded-2xl shadow-md space-y-4">
      <h2 className="text-2xl font-semibold text-center">Manage Room</h2>

      <div className="space-y-2 bg-zinc-800 rounded-lg">
        <p>
          <span className="font-semibold">Room No:</span> {data.RoomNo}
        </p>
        <p>
          <span className="font-semibold">Status:</span> {data.Status}
        </p>
        <p>
          <span className="font-semibold">Type:</span> {data.type}
        </p>
        <p>
          <span className="font-semibold">Created At:</span>{" "}
          {new Date(data.createdAt).toLocaleString()}
        </p>
        <p>
          <span className="font-semibold">Updated At:</span>{" "}
          {new Date(data.updatedAt).toLocaleString()}
        </p>
      </div>

      {guest ? (
        <div className="p-4 bg-blue-500 rounded-lg space-y-2">
          <h3 className="text-lg font-semibold text-white">Guest Details</h3>
          <p>
            <span className="font-semibold">Name:</span> {guest.name}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {guest.email}
          </p>
          <button
            onClick={handleLeaveRoom}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition"
          >
            Guest Leaving
          </button>
        </div>
      ) : (
        <p className="text-gray-400 p-4 italic text-center">No guest assigned to this room.</p>
      )}

      <div className="bg-zinc-800 rounded-lg space-y-2">
        <label className="block font-semibold">Change Room Status:</label>
        <select
          value={status}
          onChange={handleStatusChange}
          className="w-full p-2 rounded-lg bg-stone-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="occupied">Occupied</option>
          <option value="vacant">Vacant</option>
          <option value="maintenance">Maintenance</option>
        </select>
      </div>

      <button
        onClick={handleSaveChanges}
        className="w-full px-4 py-2 rounded-xl text-lg font-medium transition bg-green-500 hover:bg-green-600 text-white disabled:bg-green-300"
      >
        Save Changes
      </button>

    </div>
  );
};
export default ManageRooms;