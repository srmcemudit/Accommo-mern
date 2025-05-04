import axios from "axios";
import { useState } from "react";
function Send_Alert({ darkMode }) {
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const handleClick = async () => {
    const data = { Title, Description }
    try {
      const response = await axios.post('https://accommo-mern.onrender.com/notification/register', data, { withCredentials: true });
      console.log(response.data);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="space-y-4">
      <h3 className={`text-xl font-semibold text-center ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
        Send Notification
      </h3>

      <div className="space-y-4">
        <div>
          <label className={`block font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Notification Title
          </label>
          <input
            type="text"
            placeholder="Enter notification title"
            value={Title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full p-2 rounded-lg border ${
              darkMode 
                ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400' 
                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
            } focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all`}
          />
        </div>

        <div>
          <label className={`block font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Description
          </label>
          <textarea
            placeholder="Enter notification description"
            rows="3"
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
            className={`w-full p-2 rounded-lg border ${
              darkMode 
                ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400' 
                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
            } focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all`}
          />
        </div>

        <button 
          onClick={handleClick}
          className="w-full bg-teal-600 hover:bg-teal-700 dark:bg-teal-700 dark:hover:bg-teal-800 text-white font-semibold py-2 rounded-lg transition-colors"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
export default Send_Alert;