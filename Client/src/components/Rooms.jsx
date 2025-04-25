import axios from "axios";
import { useState, useEffect } from "react";
import Modal from "react-awesome-modal";
import { useSelector } from "react-redux";
import ManageRooms from "./ManageRooms";

function Rooms() {
  const [User, setUser] = useState([]);
  const [Room, setRoom] = useState("");
  const [visible, setVisible] = useState(false);
  const [ModalData, setModalData] = useState("");

  const getuser = async () => {
    const response = await axios.get("http://localhost:3001/user/getAllUser");
    setUser(response.data);
  };

  useEffect(() => {
    getuser();
  }, []);

  const data = useSelector((state) => state.room.roomData);
  console.log(data);

  useEffect(() => {
    setRoom(data);
  }, [data]);

  const handleClick = (data) => {
    setModalData(data);
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };

  return (
    <>
      <div className="text-white flex justify-center p-6">
        <div className="w-full max-w-6xl overflow-auto max-h-[400px] custom-scrollbar border border-gray-600 rounded-lg shadow-lg">
          <table className="w-full text-sm border-collapse">
            <thead className="bg-gray-700 text-white">
              <tr>
                <th className="border border-gray-600 px-6 py-3 text-left">
                  Room No
                </th>
                <th className="border border-gray-600 px-6 py-3 text-left">
                  Room ID
                </th>
                <th className="border border-gray-600 px-6 py-3 text-left">
                  Status
                </th>
                <th className="border border-gray-600 px-6 py-3 text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {User.length > 0 && Array.isArray(Room) ? (
                Room.map((room) => (
                  <tr
                    key={room._id}
                    className="hover:bg-gray-800 text-center transition duration-200"
                  >
                    <td className="border border-gray-600 px-6 py-3">
                      {room.RoomNo}
                    </td>
                    <td className="border border-gray-600 px-6 py-3">
                      {room.guest?.name || "N/A"}
                    </td>
                    <td className="border border-gray-600 px-6 py-3 capitalize">
                      {room.Status}
                    </td>
                    <td className="border border-gray-600 px-6 py-3">
                      <div className="flex justify-center">
                        <button
                          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-1 rounded transition duration-150"
                          onClick={() => handleClick(room)}
                        >
                          Manage
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="text-center">
                  <td
                    colSpan="4"
                    className="px-6 py-4 text-red-400 font-semibold"
                  >
                    No rooms found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <Modal
        visible={visible}
        width="400"
        height="400"
        effect="fadeInUp"
        onClickAway={closeModal}
      >
        <div className="text-center bg-gray-900 text-white p-6 rounded-md flex flex-col justify-between items-center">
        {ModalData && <ManageRooms data={ModalData} />}
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

export default Rooms;
