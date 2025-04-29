import { useState } from "react";

function AddGuest({ darkMode }) {
  const [guestDetails, setGuestDetails] = useState({
    name: "",
    email: "",
    contact: "",
    roomNo: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setGuestDetails({ ...guestDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(guestDetails).some((val) => val.trim() === "")) {
      alert("Please fill in all fields.");
      return;
    }
    setSuccessMessage(`Guest ${guestDetails.name} has been successfully added.`);
    setGuestDetails({ name: "", email: "", contact: "", roomNo: "" });
  };

  return (
    <div className="space-y-4">
      <h3 className={`text-xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
        Add New Guest
      </h3>
      
      {successMessage && (
        <div className="p-3 bg-green-600 dark:bg-green-800 rounded-md text-sm text-white">
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">
        {['name', 'email', 'contact', 'roomNo'].map((field) => (
          <div key={field}>
            <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
            </label>
            <input
              type={field === 'email' ? 'email' : field === 'roomNo' ? 'number' : 'text'}
              name={field}
              placeholder={`Enter ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`}
              value={guestDetails[field]}
              onChange={handleChange}
              className={`w-full p-2 rounded-lg border ${
                darkMode 
                  ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400' 
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
              } focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all`}
              required
            />
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-teal-600 hover:bg-teal-700 dark:bg-teal-700 dark:hover:bg-teal-800 text-white font-semibold py-2 rounded-lg transition-colors"
        >
          Add Guest
        </button>
      </form>
    </div>
  );
}
export default AddGuest;