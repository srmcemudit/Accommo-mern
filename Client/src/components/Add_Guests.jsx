import { useState } from "react";

function AddGuest() {
  const [guestDetails, setGuestDetails] = useState({
    name: "",
    email: "",
    contact: "",
    roomNo: "",
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
      email: "",
      contact: "",
      roomNo: "",
    });
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Add New Guest</h3>
      {successMessage && (
        <div className="p-3 bg-green-600 rounded-md text-sm">{successMessage}</div>
      )}
      <form onSubmit={handleSubmit} className="space-y-3">
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
          type="email"
          name="email"
          placeholder="Email"
          value={guestDetails.email}
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
          type="number"
          name="roomNo"
          placeholder="Room No"
          value={guestDetails.roomNo}
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
