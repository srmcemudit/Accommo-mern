import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the components of Chart.js that you need
ChartJS.register(ArcElement, Tooltip, Legend);
function Mess() {
  const menuItems = [
    { id: 1, name: 'Chicken Biryani', price: '$10' },
    { id: 2, name: 'Paneer Butter Masala', price: '$8' },
    { id: 3, name: 'Veg Pulao', price: '$7' },
    { id: 4, name: 'Dal Tadka', price: '$6' },
    { id: 5, name: 'Butter Naan', price: '$2' },
    { id: 6, name: 'Masala Dosa', price: '$5' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      {/* Page Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 text-yellow-400">Canteen Menu</h1>
        <p className="text-gray-400">Choose from a variety of delicious meals</p>
        <div className="w-20 h-1 bg-yellow-500 mx-auto mt-2"></div>
      </div>

      {/* Menu Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
          >
            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
              <p className="text-gray-400 text-sm mb-4">{item.price}</p>
              <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md transition-colors">
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Order Status */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Your Orders</h2>
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <p className="text-gray-400 text-sm">You currently have no orders placed.</p>
          <div className="mt-4 flex justify-between">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded-md text-sm transition-colors">
              View Order History
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded-md text-sm transition-colors">
              Clear All Orders
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mess;

   
