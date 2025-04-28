import "./Scroll.css";
import { useState } from "react";
import Modal from "react-awesome-modal";
import { useSelector } from "react-redux";
import ManageRooms from "./ManageRooms";

function Rooms() {
  const [visible, setVisible] = useState(false);
  const [ModalData, setModalData] = useState(null);
  const data = useSelector((state) => state.room.roomData);

  const handleClick = (room) => {
    setModalData(room);
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
    setModalData(null);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "occupied":
        return "bg-blue-100 text-blue-800";
      case "vacant":
        return "bg-green-100 text-green-800";
      case "maintenance":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-6 bg-gray-50">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200 overflow-auto custom-scrollbar">
        <div className="overflow-x-auto">
          <table className="divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Room No
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Guest Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
          </table>

          <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
            <table className="min-w-full divide-y divide-gray-200">
              <tbody className="bg-white divide-y divide-gray-200">
                {data && Array.isArray(data) && data.length > 0 ? (
                  data.map((room) => (
                    <tr key={room._id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {room.RoomNo}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {room.guest?.name || "N/A"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full capitalize ${getStatusColor(room.Status)}`}>
                          {room.Status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                        <button
                          onClick={() => handleClick(room)}
                          className="text-teal-600 hover:text-teal-900 bg-teal-50 hover:bg-teal-100 px-3 py-1 rounded-md text-sm font-medium transition-colors"
                        >
                          Manage
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="px-6 py-4 text-center text-sm text-gray-500">
                      No rooms found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Modal
        visible={visible}
        width="500"
        height="auto"
        effect="fadeInUp"
        onClickAway={closeModal}
      >
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-6">
            {ModalData && <ManageRooms data={ModalData} />}
          </div>
          <div className="flex justify-end">
            <button
              onClick={closeModal}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Rooms;
