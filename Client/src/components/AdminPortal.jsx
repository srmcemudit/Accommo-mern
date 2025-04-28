import { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import Modal from "react-awesome-modal";
import AddGuest from "./Add_Guests";
import Send_Alert from "./Send_Alert";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setRoom, setVacant } from "../Redux/Userslice";

ChartJS.register(ArcElement, Tooltip, Legend);

function AdminPortal() {
  const [ModalData, setModalData] = useState("");
  const [visible, setVisible] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [occupied, setOccupied] = useState([]);
  const [maintenance, setMaintenance] = useState([]);
  const [vacant, setVacant] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const fetchRooms = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:3001/rooms/all");
      const data = response.data;
      
      // Update all states at once
      setRooms(data);
      setOccupied(data.filter(room => room.Status === "occupied"));
      setVacant(data.filter(room => room.Status === "vacant"));
      setMaintenance(data.filter(room => room.Status === "maintenance"));
      
      // Dispatch to Redux
      dispatch(setRoom(data));
      dispatch(setVacant(data.filter(room => room.Status === "vacant")));
      
    } catch (error) {
      console.error("Error fetching rooms:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  // Prepare chart data
  const pieData = {
    labels: ["Occupied", "Available", "Maintenance"],
    datasets: [
      {
        data: [occupied.length, vacant.length, maintenance.length],
        backgroundColor: ["#0ea5e9", "#22c55e", "#ef4444"],
        borderColor: "#ffffff",
        borderWidth: 1,
      },
    ],
  };

  const openModal = (data) => {
    setModalData(data);
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
    setModalData("");
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">
          Admin Dashboard
        </h1>
        <div className="flex space-x-3">
          <button
            className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg shadow-sm transition-colors flex items-center"
            onClick={() => openModal(<Send_Alert />)}
          >
            <span>Send Alert</span>
          </button>
          <button
            className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg shadow-sm transition-colors flex items-center"
            onClick={() => openModal(<AddGuest />)}
          >
            <span>Add New</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-gray-500 text-sm font-medium mb-1">
            Total Rooms
          </h2>
          <p className="text-3xl font-bold text-gray-800">{rooms.length}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-gray-500 text-sm font-medium mb-1">
            Occupied Rooms
          </h2>
          <p className="text-3xl font-bold text-blue-600">{occupied.length}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-gray-500 text-sm font-medium mb-1">
            Maintenance
          </h2>
          <p className="text-3xl font-bold text-red-500">
            {maintenance.length}
          </p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-gray-800 font-medium mb-4">Room Occupancy</h2>
          <div className="h-64">
            {rooms.length > 0 ? (
              <Pie
                data={pieData}
                options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      position: "bottom",
                      labels: {
                        color: "#6b7280",
                        font: {
                          size: 12,
                        },
                      },
                    },
                  },
                  maintainAspectRatio: false,
                }}
              />
            ) : (
              <div className="h-full flex items-center justify-center text-gray-500">
                No room data available
              </div>
            )}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-gray-800 font-medium mb-4">Recent Activity</h2>
          <ul className="space-y-3">
            {rooms.slice(0, 5).map((room, index) => (
              <li
                key={index}
                className="flex items-start pb-3 border-b border-gray-100 last:border-0"
              >
                <div
                  className={`flex-shrink-0 h-2 w-2 mt-2 rounded-full ${
                    room.Status === "occupied"
                      ? "bg-blue-500"
                      : room.Status === "vacant"
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                ></div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-800">
                    Room #{room.RoomNo}
                  </p>
                  <p className="text-xs text-gray-500 capitalize">
                    {room.Status}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Modal */}
      <Modal
        visible={visible}
        width="500"
        height="auto"
        effect="fadeInUp"
        onClickAway={closeModal}
      >
        <div className="bg-white p-6 rounded-lg">
          <div className="mb-6">{ModalData}</div>
          <div className="flex justify-end">
            <button
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg transition-colors"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default AdminPortal;