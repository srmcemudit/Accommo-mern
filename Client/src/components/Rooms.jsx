function Rooms() {
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
          <tr className="text-center">
            <td className="border border-gray-500 px-4 py-2">101</td>
            <td className="border border-gray-500 px-4 py-2">John Doe</td>
            <td className="border border-gray-500 px-4 py-2 text-green-500">Occupied</td>
            <td className="border border-gray-500 px-4 py-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">
                Manage
              </button>
            </td>
          </tr>
          <tr className="text-center">
            <td className="border border-gray-500 px-4 py-2">102</td>
            <td className="border border-gray-500 px-4 py-2">Jane Smith</td>
            <td className="border border-gray-500 px-4 py-2 text-yellow-500">Vacant</td>
            <td className="border border-gray-500 px-4 py-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">
                Manage
              </button>
            </td>
          </tr>
          <tr className="text-center">
            <td className="border border-gray-500 px-4 py-2">103</td>
            <td className="border border-gray-500 px-4 py-2">Emily Brown</td>
            <td className="border border-gray-500 px-4 py-2 text-red-500">Maintenance</td>
            <td className="border border-gray-500 px-4 py-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">
                Manage
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Rooms;
