import { useState } from "react";
import axios from 'axios';
const SERVER_URL = import.meta.env.VITE_SERVER;
function AddGuest({ darkMode }) {
  const [guestDetails, setGuestDetails] = useState({
    name: "",
    email: "",
    roomtype: "", // Add roomtype here
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGuestDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (Object.values(guestDetails).some((val) => val.trim() === "")) {
      alert("Please fill in all fields.");
      return;
    }
  
    try {
      const response = await axios.post(`${SERVER_URL}/user/register`, guestDetails);
      console.log(response.data);
      setSuccessMessage(`Guest ${guestDetails.name} has been successfully alloted room no ${response.data.user.RoomNo}.`);
      
      setGuestDetails({
        name: "",
        email: "",
        roomtype: "",
      });
    } catch (error) {
      console.error("Failed to add guest:", error);
      alert("Something went wrong while adding the guest.");
    }
  };
  

  return (
    <div className="space-y-4">
      <h3
        className={`text-xl font-semibold ${darkMode ? "text-gray-100" : "text-gray-800"}`}
      >
        Add New Guest
      </h3>

      {successMessage && (
        <div className="p-3 bg-green-600 dark:bg-green-800 rounded-md text-sm text-white">
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 w-full">
        {["name", "email"].map((field) => (
          <div key={field} className="space-y-2">
            <label
              className={`block text-sm font-medium ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            <input
              type={field === "email" ? "email" : "text"}
              name={field}
              placeholder={`Enter ${field}`}
              value={guestDetails[field]}
              onChange={handleChange}
              className={`w-full p-2 rounded-lg border ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
                  : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
              } focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all`}
              required
            />
          </div>
        ))}

        {/* Room Type - Radio */}
        <div className="space-y-2">
          <label
            className={`block text-sm font-medium ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Room Type
          </label>
          <div className="flex gap-4">
            {["Single", "Double"].map((type) => (
              <label key={type} className="flex items-center space-x-2 text-sm">
                <input
                  type="radio"
                  name="roomtype"
                  value={type}
                  checked={guestDetails.roomtype === type}
                  onChange={handleChange}
                  className="text-teal-600 focus:ring-teal-500"
                  required
                />
                <span className={darkMode ? "text-gray-300" : "text-gray-700"}>
                  {type}
                </span>
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-teal-600 hover:bg-teal-700 dark:bg-teal-700 
          dark:hover:bg-teal-800 text-white font-semibold py-2 rounded-lg transition-colors"
        >
          Add Guest
        </button>
      </form>
    </div>
  );
}

export default AddGuest;