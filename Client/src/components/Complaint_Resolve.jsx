import axios from "axios";
import { useEffect, useState } from "react";

function Complaint_Resolve() {
  const [complaints, setcomplaints] = useState([]);
  const fetch = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/complaint/getallcomplaints"
      );
      setcomplaints(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="w-full max-w-xl overflow-auto max-h-[400px] custom-scrollbar border border-gray-600 rounded-lg shadow-lg">
      <h2 className="text-white text-center py-3 text-xl font-bold">Complaints</h2>
      <div className="space-y-4">
        {complaints.length > 0 ? (
          complaints.map((complaint, index) => (
            <div key={index} className="bg-white p-3 rounded shadow">
              <h3 className="font-semibold text-gray-800">{complaint.title}</h3>
              <p className="text-gray-600">{complaint.content}</p>
              <p className="text-gray-600">By: {complaint.userId.name || 'Loading...'}</p>
            </div>
          ))
        ) : (
          <p className="text-white">No complaints found.</p>
        )}
      </div>
    </div>
  );
}

export default Complaint_Resolve;
