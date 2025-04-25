function ManageRooms({data}) {
  const room = data;
  console.log(data);

  return (
    <div className="bg-slate-800 p-5 rounded-xl shadow-lg text-gray-100 max-w-md mx-auto">
      <h2 className="text-xl font-bold text-teal-400 mb-4">Manage Room {room?.RoomNo || "NA"}</h2>

      <div className="space-y-2">
        <p><strong>Room No:</strong> {room?.RoomNo|| "NA"}</p>
        <p><strong>Status:</strong> {room?.Status|| "NA"}</p>
        <p><strong>Type:</strong> {room?.type || "NA"}</p>
        <p><strong>Guest:</strong> {room.guest.name || "None"}</p>
      </div>

      <div className="mt-4 space-y-4">
        <div>
          HELLO
        </div>

        <button
          className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded"
          
        >
          
        </button>
      </div>
    </div>
  );
}

export default ManageRooms;