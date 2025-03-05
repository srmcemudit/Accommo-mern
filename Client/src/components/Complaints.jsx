import { useState } from "react";
import Modal from "react-awesome-modal";
import axios from "axios";
import Register_Complaints from "./Register_Complaints";
import { useSelector } from "react-redux";
import "./Scroll.css";

function Complaints() {
  const [visible, setVisible] = useState(false);
  const [modalData, setModalData] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const Onsubmit = async (e) => {
    e.preventDefault();
    const complaint = { title, content, userId: user._id };
    try {
      const result = await axios.post(
        "http://localhost:3001/complaint/register",
        complaint
      );
      console.log(result);
      
      setTitle("");
      setContent("");
    } catch (error) {
      console.log(error);
    }
  };

  const openModal = (data) => {
    setModalData(data);
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };
  const user = useSelector((state) => state.user.user);
  console.log(user._id);
  

  return (
    <div className="flex justify-center items-center gap-8 p-8 bg-gradient-to-r from-gray-900 to-gray-800 min-h-screen ">
      <Modal
        visible={visible}
        width="400"
        height="300"
        effect="fadeInUp"
        onClickAway={closeModal}
      >
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Complaint Details</h2>
          <p>{modalData}</p>
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded mt-4"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </Modal>
      {/* Complaint Registration Form */}
      <div className="bg-gradient-to-r from-indigo-700 to-indigo-600 p-8 rounded-lg shadow-xl w-full sm:w-96">
        <p className="text-white font-semibold text-lg mb-6">
          Register your complaint here...
        </p>

        {/* Complaint Title Input */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Complaint Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="block w-full p-3 text-black bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          />
        </div>

        {/* Complaint Description */}
        <div className="mb-4">
          <textarea
            placeholder="Description"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="p-3 block w-full text-black bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all overflow-hidden"
          />
        </div>

        {/* Submit Button */}
        <button
          className="bg-indigo-500 hover:bg-indigo-600 text-white p-3 rounded-md w-full mt-4 transition-all"
          onClick={Onsubmit}
        >
          Submit
        </button>
      </div>

      {/* Registered Complaints List */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-500 p-8 shadow-xl rounded-lg w-full sm:w-96 h-80 overflow-y-auto custom-scrollbar">
        <p className="text-white font-semibold text-lg mb-6">
          Registered Complaints
        </p>
        <Register_Complaints complaint="no fans" openModal={openModal} />
        <Register_Complaints complaint="no lights" openModal={openModal} />
        <Register_Complaints complaint="no electricity" openModal={openModal} />
        <Register_Complaints
          complaint="no room maintainance"
          openModal={openModal}
        />
        <Register_Complaints complaint="no nothing" openModal={openModal} />
      </div>
    </div>
  );
}

export default Complaints;
