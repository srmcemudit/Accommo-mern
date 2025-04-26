import { useState } from "react";
import Modal from "react-awesome-modal";
import { useSelector } from "react-redux";
import ManageRooms from "./ManageRooms";

function Rooms() {
  const [visible, setVisible] = useState(false);
  const [ModalData, setModalData] = useState(null);

  const data = useSelector((state) => state.room.roomData); // This has all rooms
  console.log(data);

  const handleClick = (room) => {
    setModalData(room);
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
    setModalData(null);
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
                  Guest Name
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
              {data && Array.isArray(data) && data.length > 0 ? (
                data.map((room) => (
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
        width="500"
        height="500"
        effect="fadeInUp"
        onClickAway={closeModal}
      >
        <div className="bg-gray-900 text-white items-center p-4 flex flex-col space-y-2 rounded-md mb-10">
          {ModalData && <ManageRooms data={ModalData} />}
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md"
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