import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);


// payment option needed to be Added

function Admin() {
  const pieData = {
    labels: ['Occupied', 'Available', 'Maintenance'],
    datasets: [
      {
        data: [38, 12, 5],
        backgroundColor: ['#FFC107', '#4CAF50', '#F44336'], // Softer colors for dark theme
        borderColor: '#1F2937', // Dark background for separation
      },
    ],
  };

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Stats</h1>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-4 py-2 rounded-md">
            Add New
          </button>
        </header>

        {/* Stats and Cards */}
        <div className="p-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-2">Total Rooms</h2>
            <p className="text-3xl">50</p>
          </div>
          <div className="p-6 bg-gradient-to-r from-green-600 to-teal-600 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-2">Occupied Rooms</h2>
            <p className="text-3xl">38</p>
          </div>
          <div className="p-6 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-2">Pending Requests</h2>
            <p className="text-3xl">5</p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          <div className="p-6 bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-lg font-bold">Occupancy Stats</h2>
            <Pie data={pieData} />
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-lg font-bold">Recent Activity</h2>
            <ul className="space-y-3">
              <li className="text-gray-300">Room #201 assigned to John Doe</li>
              <li className="text-gray-300">Room #105 maintenance requested</li>
              <li className="text-gray-300">Payment received from Jane Smith</li>
              <li className="text-gray-300">Room #302 vacated</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Admin;
