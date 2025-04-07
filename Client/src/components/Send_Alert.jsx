import { useState } from "react";
import axios from 'axios';

function Send_Alert() {
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const handleClick = async () =>{
    const data = {Title,Description}
    try {
      const response = await axios.post('http://localhost:3001/notification/register',data,{withCredentials:true});
      console.log(response.data);
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="space-y-4 mt-6">
      <h3 className="text-xl font-semibold text-center">Drop Your Notification</h3>

      <div className="space-y-4">
        <div>
          <label className="block text-gray-300 font-medium">Suggestion Title</label>
          <input
            type="text"
            placeholder="Enter your suggestion title"
            value={Title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 bg-gray-800 text-gray-100 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-300 font-medium">Description</label>
          <textarea
            placeholder="Enter your description here"
            rows="3"
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 bg-gray-800 text-gray-100 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md shadow-lg transition-all" onClick={handleClick}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Send_Alert;
