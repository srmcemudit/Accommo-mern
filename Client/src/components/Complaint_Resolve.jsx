import axios from "axios";
import { useEffect, useState } from "react";
import { FiAlertTriangle, FiUser, FiMessageSquare } from "react-icons/fi";

function Complaint_Resolve() {
  const [complaints, setComplaints] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchComplaints = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "http://localhost:3001/complaint/getallcomplaints"
      );
      setComplaints(response.data);
    } catch (error) {
      console.error("Error fetching complaints:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  const resolveComplaint = async (complaintId) => {
    try {
      await axios.patch(`http://localhost:3001/complaint/resolve/${complaintId}`);
      fetchComplaints(); // Refresh the list after resolving
    } catch (error) {
      console.error("Error resolving complaint:", error);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center">
          <FiAlertTriangle className="mr-2 text-teal-600" />
          Student Complaints
        </h2>
        <button 
          onClick={fetchComplaints}
          className="text-sm text-teal-600 hover:text-teal-800 flex items-center"
        >
          Refresh
        </button>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-teal-500"></div>
        </div>
      ) : complaints.length > 0 ? (
        <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
          {complaints.map((complaint) => (
            <div 
              key={complaint._id} 
              className={`p-4 rounded-lg border ${
                complaint.status === 'resolved' 
                  ? 'border-green-200 bg-green-50' 
                  : 'border-gray-200 hover:border-teal-300 bg-white'
              } transition-colors shadow-xs`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-gray-800 flex items-center">
                    <FiMessageSquare className="mr-2 text-teal-600" />
                    {complaint.title}
                  </h3>
                  <p className="text-gray-600 mt-2 pl-6">{complaint.content}</p>
                  <div className="flex items-center mt-3 text-sm text-gray-500 pl-6">
                    <FiUser className="mr-1" />
                    {complaint.userId?.name || 'Anonymous'}
                    <span className="mx-2">•</span>
                    {new Date(complaint.createdAt).toLocaleDateString()}
                  </div>
                </div>
                {complaint.status !== 'resolved' && (
                  <button
                    onClick={() => resolveComplaint(complaint._id)}
                    className="bg-teal-600 hover:bg-teal-700 text-white px-3 py-1 rounded-md text-sm font-medium transition-colors whitespace-nowrap"
                  >
                    Mark Resolved
                  </button>
                )}
              </div>
              {complaint.status === 'resolved' && (
                <div className="mt-2 pl-6 text-sm text-green-600 flex items-center">
                  ✓ Resolved
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 text-gray-500">
          No complaints found
        </div>
      )}
    </div>
  );
}

export default Complaint_Resolve;