import { useState } from "react";

function AddGuest() {
  const [guestDetails, setGuestDetails] = useState({
    name: "",
    age: "",
    contact: "",
    stayDuration: "",
    rentAmount: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const availableRooms = [101, 102, 103, 104, 105, 106]; // Example available rooms

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGuestDetails({ ...guestDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (Object.values(guestDetails).some((val) => val.trim() === "")) {
      alert("Please fill in all fields.");
      return;
    }

    // Assign a random available room
    const randomRoom =
      availableRooms[Math.floor(Math.random() * availableRooms.length)];

    setSuccessMessage(
      `Guest ${guestDetails.name} has been successfully added. Allotted Room: ${randomRoom}`
    );

    // Reset form fields
    setGuestDetails({
      name: "",
      age: "",
      contact: "",
      stayDuration: "",
      rentAmount: "",
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-900 text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Add New Guest</h2>
      {successMessage && (
        <div className="mb-4 p-3 bg-green-600 rounded-md">{successMessage}</div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Guest Name"
          value={guestDetails.name}
          onChange={handleChange}
          className="w-full p-2 border rounded-md bg-gray-800 text-white"
          required
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={guestDetails.age}
          onChange={handleChange}
          className="w-full p-2 border rounded-md bg-gray-800 text-white"
          required
        />

        <input
          type="text"
          name="contact"
          placeholder="Contact Number"
          value={guestDetails.contact}
          onChange={handleChange}
          className="w-full p-2 border rounded-md bg-gray-800 text-white"
          required
        />

        <input
          type="text"
          name="stayDuration"
          placeholder="Duration of Stay (e.g. 6 months)"
          value={guestDetails.stayDuration}
          onChange={handleChange}
          className="w-full p-2 border rounded-md bg-gray-800 text-white"
          required
        />

        <input
          type="number"
          name="rentAmount"
          placeholder="Rent Amount"
          value={guestDetails.rentAmount}
          onChange={handleChange}
          className="w-full p-2 border rounded-md bg-gray-800 text-white"
          required
        />

        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 rounded-md"
        >
          Add Guest
        </button>
      </form>
    </div>
  );
}

export default AddGuest;
