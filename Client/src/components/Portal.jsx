import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

function Portal() {
  const pieData = {
    labels: ['Occupied', 'Available', 'Maintenance'],
    datasets: [
      {
        data: [38, 12, 5],
        backgroundColor: ['#4CAF50', '#2196F3', '#FF5722'],
      },
    ],
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <header className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
            Add New
          </button>
        </header>

        {/* Stats and Cards */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-2">Total Rooms</h2>
            <p className="text-3xl">50</p>
          </div>
          <div className="p-6 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-2">Occupied Rooms</h2>
            <p className="text-3xl">38</p>
          </div>
          <div className="p-6 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-2">Pending Requests</h2>
            <p className="text-3xl">5</p>
          </div>
        </div>

        {/* Charts */}
        <div className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-2">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-4">Occupancy Stats</h2>
            <Pie data={pieData} />
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-4">Recent Activity</h2>
            <ul className="space-y-3 text-gray-700">
              <li>Room #201 assigned to John Doe</li>
              <li>Room #105 maintenance requested</li>
              <li>Payment received from Jane Smith</li>
              <li>Room #302 vacated</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Portal;
