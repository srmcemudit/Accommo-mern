import { useSelector } from "react-redux";

function Portal() {
  const user = useSelector((state) => state.user.user);
  const storedUser = JSON.parse(sessionStorage.getItem("userdata"));
  console.log(storedUser);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-slate-800 to-gray-950 text-gray-100 flex flex-col p-6 gap-y-4">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-teal-400">Welcome, {user?.name || "Guest"} 👋</h1>
      </div>

      <div className="bg-slate-800 border border-slate-700 p-6 rounded-2xl shadow-md w-full max-w-2xl mx-auto space-y-6">
        <h2 className="text-xl font-semibold text-center text-violet-400">💳 Payment Options</h2>

        <div className="flex justify-around text-center text-lg font-medium text-white">
          <div className="bg-slate-700 px-4 py-3 rounded-xl hover:bg-slate-600 transition-all duration-300">
            Room Rent
          </div>
          <div className="bg-slate-700 px-4 py-3 rounded-xl hover:bg-slate-600 transition-all duration-300">
            Mess Rent
          </div>
          <div className="bg-slate-700 px-4 py-3 rounded-xl hover:bg-slate-600 transition-all duration-300">
            Total Rent
          </div>
        </div>

        <div className="text-center">
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-2 rounded-full transition duration-300">
            Pay Now
          </button>
        </div>
      </div>

      <div className="bg-slate-800 border border-slate-700 p-4 rounded-2xl w-full max-w-2xl mx-auto">
      <h3 className="text-lg font-semibold text-violet-300 mb-2">🏠 Current Room Details</h3>

      <div className="text-sm text-gray-300 space-y-1">
        <p><span className="font-medium text-violet-200">Room No:</span> {user.RoomNo}</p>
        <p><span className="font-medium text-violet-200">Type:</span> {user?.name}</p>
        <p><span className="font-medium text-violet-200">Amenities:</span> {user?.name}</p>
      </div>
    </div>
    </div>
  );
}

export default Portal;