import { useState, useEffect, useCallback } from "react";
import Modal from "react-awesome-modal";
import axios from "axios";
import Register_Complaints from "./Register_Complaints";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { FiAlertCircle, FiRefreshCw, FiEdit3 } from "react-icons/fi";

function Complaints() {
  const user = useSelector((state) => state.user.user);
  const [visible, setVisible] = useState(false);
  const [modalData, setModalData] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [complaints, setComplaints] = useState([]);

  const GetComplaints = useCallback(async () => {
    if (!user?._id) return;
    try {
      const response = await axios.get(`http://localhost:3001/complaint/get/${user._id}`);
      setComplaints(response.data);
    } catch (error) {
      console.error("Error fetching complaints:", error);
      toast.error("Failed to load complaints");
    }
  }, [user?._id]);

  useEffect(() => {
    GetComplaints();
  }, [GetComplaints]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:3001/complaint/register",
        { title, content, userId: user._id },
        { withCredentials: true }
      );
      setTitle("");
      setContent("");
      toast.success("Complaint registered successfully!");
      GetComplaints();
    } catch (error) {
      console.error("Error submitting complaint:", error);
      toast.error("Failed to register complaint");
    }
  };

  const openModal = (content) => {
    setModalData(content);
    setVisible(true);
  };

  const closeModal = () => setVisible(false);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6 flex items-center">
          <FiAlertCircle className="mr-2 text-teal-600" />
          Complaint Management
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Complaint Registration Card */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center mb-4">
              <FiEdit3 className="text-xl text-teal-600 mr-3" />
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Register New Complaint</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  placeholder="Brief complaint title"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  placeholder="Detailed description of your complaint"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white dark:bg-teal-700 dark:hover:bg-teal-800 py-2 px-4 rounded-lg font-medium transition-colors"
              >
                Submit Complaint
              </button>
            </form>
          </div>

          {/* Complaints List Card */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <FiAlertCircle className="text-xl text-teal-600 mr-3" />
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Your Complaints</h2>
              </div>
              <button
                onClick={GetComplaints}
                className="text-teal-600 hover:text-teal-800 dark:bg-teal-700 dark:hover:bg-teal-800 flex items-center text-sm"
              >
                <FiRefreshCw className="mr-1" /> Refresh
              </button>
            </div>

            <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
              {complaints.length > 0 ? (
                complaints.map((complaint) => (
                  <Register_Complaints
                    key={complaint._id}
                    complaint={complaint.title}
                    status={complaint.status}
                    date={new Date(complaint.createdAt).toLocaleDateString()}
                    openModal={() => openModal(complaint.content)}
                  />
                ))
              ) : (
                <div className="text-center py-8 text-gray-500">
                  No complaints found
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Complaint Detail Modal */}
      <Modal
        visible={visible}
        width="500"
        height="auto"
        effect="fadeInUp"
        onClickAway={closeModal}
      >
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">Complaint Details</h2>
          <div className="bg-gray-50 p-4 rounded-md">
            <p className="text-gray-700 whitespace-pre-wrap">{modalData}</p>
          </div>
          <div className="flex justify-end mt-6">
            <button
              onClick={closeModal}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 dark:text-gray-100 px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </Modal>

      <ToastContainer 
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default Complaints;