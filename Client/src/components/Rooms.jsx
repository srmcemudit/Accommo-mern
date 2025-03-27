import axios from "axios";
import { useState, useEffect } from "react";

function Rooms() {
  const [User, setUser] = useState([]);
  const getuser = async () => {
    const response = await axios.get("http://localhost:3001/user/getAllUser");
    setUser(response.data);
    console.log(response.data);
  };
  useEffect(() => {
    getuser();
  }, []);

  return (
    <div className="text-white flex justify-center p-4">
      <table className="border-collapse border border-gray-500 w-full">
        <thead>
          <tr className="bg-gray-700 text-white">
            <th className="border border-gray-500 px-4 py-2">Room No</th>
            <th className="border border-gray-500 px-4 py-2">Name</th>
            <th className="border border-gray-500 px-4 py-2">Status</th>
            <th className="border border-gray-500 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {User.length > 0 ? (
            User.map((user) => (
              <tr key={user._id} className="border-b p-20">
                <td className="border border-gray-500 px-4 py-2">{user._id}</td>
                <td className="border border-gray-500 px-4 py-2">
                  {user.name}
                </td>
                <td className="border border-gray-500 px-4 py-2">
                  {user.email}
                </td>
                <td className="border px-4 py-2">
                  <div className="flex justify-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">
                      Manage
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr className="text-center">
              <td colSpan="4" className="border border-gray-500 px-4 py-2 text-red-500">
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Rooms;
