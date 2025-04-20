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
  const [Rooms, setRooms] = useState([])
  const [occupied, setoccupied] = useState([]);
  const [maintenance, setmaintenance] = useState([]);
  const [Vacant, setvacant] = useState([]);
  const dispatch = useDispatch()
  
  const fetch = async() =>{
    try {
      const Response = await axios.get('http://localhost:3001/rooms/all')
      console.log(Response.data);
      const data = Response.data;
      setRooms(data);
      // dispatch(setRoom(Rooms))
      const vacantRooms = data.filter(room => room.Status == "vacant");
      const occupiedRooms = data.filter(room => room.Status == "occupied");
      const maintenanceRooms = data.filter(room => room.Status == "maintenance");
      setvacant(vacantRooms);
      dispatch(setVacant(vacantRooms))
      setoccupied(occupiedRooms);
      setmaintenance(maintenanceRooms);
      console.log(Vacant)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetch()
  },[])
  dispatch(setRoom(Rooms))
  console.log(Rooms);
    
  const user = useSelector((state) => state);
  console.log(user)

  const pieData = {
    labels: ["Occupied", "Available", "Maintenance"],
    datasets: [
      {
        data: [occupied.length, Vacant.length, maintenance.length],
        backgroundColor: ["#FFC107", "#4CAF50", "#F44336"], // Soft colors
        borderColor: "#1F2937",
      },
    ],
  };

  const openModal = (data) => {
    setModalData(data);
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
    setModalData(""); // Reset after closing
  };

  return (
    <>
      <div className="flex h-screen bg-gray-900 text-gray-100">
        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Header */}
          <header className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Stats</h1>
            <button
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-4 py-2 rounded-md"
              onClick={() => openModal(<Send_Alert />)}
            >
              Send Alert
            </button>
            <button
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-4 py-2 rounded-md"
              onClick={() => openModal(<AddGuest />)}
            >
              Add New
            </button>
          </header>

          {/* Stats and Cards */}
          <div className="p-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 bg-yellow-600 rounded-lg shadow-md">
              <h2 className="text-lg font-bold mb-2">Total Rooms</h2>
              <p className="text-3xl">{Rooms.length}</p>
            </div>
            <div className="p-6 bg-green-600 rounded-lg shadow-md">
              <h2 className="text-lg font-bold mb-2">Occupied Rooms</h2>
              <p className="text-3xl">{occupied.length}</p>
            </div>
            <div className="p-6 bg-red-600 rounded-lg shadow-md">
              <h2 className="text-lg font-bold mb-2">Pending Requests</h2>
              <p className="text-3xl">{maintenance.length}</p>
            </div>
          </div>

          {/* Charts */}
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <div className="p-6 bg-gray-800 rounded-lg shadow-md">
              <h2 className="text-lg font-bold">Occupancy Stats</h2>
              <Pie data={pieData} />
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-md">
              <h2 className="text-lg font-bold">Recent Activity</h2>
              <ul className="space-y-3 text-gray-300">
                <li>Room #201 assigned to John Doe</li>
                <li>Room #105 maintenance requested</li>
                <li>Payment received from Jane Smith</li>
                <li>Room #302 vacated</li>
              </ul>
            </div>
          </div>
        </main>
      </div>

      <Modal
        visible={visible}
        width="400"
        height="400"
        effect="fadeInUp"
        onClickAway={closeModal}
      >
        <div className="text-center bg-gray-900 text-white p-6 rounded-md flex flex-col justify-between items-center">
          {ModalData}
      <button
        className="bg-red-500 text-white px-6 py-2 rounded-md mt-4"
        onClick={closeModal}
      >
        Close
      </button>
    </div>
      </Modal>
    </>
  );
}

export default AdminPortal;
