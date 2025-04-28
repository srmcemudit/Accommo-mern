import { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function Mess() {
  const [orders, setOrders] = useState([]);
  const [activeTab, setActiveTab] = useState('menu');

  const menuItems = [
    { id: 1, name: 'Chicken Biryani', price: 10, category: 'main', popularity: 75 },
    { id: 2, name: 'Paneer Butter Masala', price: 8, category: 'main', popularity: 65 },
    { id: 3, name: 'Veg Pulao', price: 7, category: 'main', popularity: 50 },
    { id: 4, name: 'Dal Tadka', price: 6, category: 'main', popularity: 45 },
    { id: 5, name: 'Butter Naan', price: 2, category: 'bread', popularity: 80 },
    { id: 6, name: 'Masala Dosa', price: 5, category: 'snack', popularity: 60 },
    { id: 7, name: 'Chicken Tikka', price: 9, category: 'starter', popularity: 55 },
    { id: 8, name: 'Gulab Jamun', price: 3, category: 'dessert', popularity: 70 },
  ];

  const categories = [...new Set(menuItems.map(item => item.category))];

  const addToOrder = (item) => {
    setOrders([...orders, {...item, orderId: Date.now()}]);
  };

  const removeOrder = (orderId) => {
    setOrders(orders.filter(order => order.orderId !== orderId));
  };

  const clearAllOrders = () => {
    setOrders([]);
  };

  const totalAmount = orders.reduce((sum, order) => sum + order.price, 0);

  // Chart data for popular items
  const popularItemsData = {
    labels: menuItems.map(item => item.name),
    datasets: [
      {
        data: menuItems.map(item => item.popularity),
        backgroundColor: [
          '#0d9488', '#14b8a6', '#2dd4bf', '#5eead4', '#99f6e4',
          '#ccfbf1', '#e6fffa', '#f0fdfa'
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-teal-700">Canteen Management</h1>
        <p className="text-gray-600">Explore our menu and manage your orders</p>
        <div className="w-20 h-1 bg-teal-500 mt-2 rounded-full"></div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6">
        <button
          className={`py-2 px-4 font-medium ${activeTab === 'menu' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-500 hover:text-teal-500'}`}
          onClick={() => setActiveTab('menu')}
        >
          Menu
        </button>
        <button
          className={`py-2 px-4 font-medium ${activeTab === 'orders' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-500 hover:text-teal-500'}`}
          onClick={() => setActiveTab('orders')}
        >
          Your Orders ({orders.length})
        </button>
        <button
          className={`py-2 px-4 font-medium ${activeTab === 'stats' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-500 hover:text-teal-500'}`}
          onClick={() => setActiveTab('stats')}
        >
          Statistics
        </button>
      </div>

      {/* Menu Tab */}
      {activeTab === 'menu' && (
        <div>
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-6">
            <button className="px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-sm font-medium">
              All
            </button>
            {categories.map(category => (
              <button 
                key={category}
                className="px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm font-medium hover:bg-teal-100 hover:text-teal-800"
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <span className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-teal-600 font-medium mb-4">${item.price.toFixed(2)}</p>
                  <button 
                    onClick={() => addToOrder(item)}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-md transition-colors flex items-center justify-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Add to Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Orders Tab */}
      {activeTab === 'orders' && (
        <div>
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6 border border-gray-100">
            <div className="p-5">
              {orders.length === 0 ? (
                <div className="text-center py-8">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <h3 className="mt-2 text-lg font-medium text-gray-700">No orders yet</h3>
                  <p className="mt-1 text-gray-500">Add items from the menu to get started</p>
                  <button 
                    onClick={() => setActiveTab('menu')}
                    className="mt-4 bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-md transition-colors"
                  >
                    Browse Menu
                  </button>
                </div>
              ) : (
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-teal-700">Your Order Summary</h2>
                    <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
                      {orders.length} items
                    </span>
                  </div>
                  
                  <div className="divide-y divide-gray-100">
                    {orders.map((order) => (
                      <div key={order.orderId} className="py-3 flex justify-between items-center">
                        <div>
                          <h3 className="font-medium">{order.name}</h3>
                          <p className="text-sm text-gray-500">${order.price.toFixed(2)}</p>
                        </div>
                        <button 
                          onClick={() => removeOrder(order.orderId)}
                          className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-50"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-medium text-gray-700">Total Amount:</span>
                      <span className="font-bold text-teal-700">${totalAmount.toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between gap-4">
                      <button 
                        onClick={clearAllOrders}
                        className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 rounded-md transition-colors flex items-center justify-center gap-2"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        Clear All
                      </button>
                      <button className="flex-1 bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-md transition-colors flex items-center justify-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Place Order
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Statistics Tab */}
      {activeTab === 'stats' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <h2 className="text-xl font-semibold text-teal-700 mb-4">Popular Items</h2>
            <div className="h-64">
              <Doughnut 
                data={popularItemsData} 
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'right',
                    },
                  },
                }}
              />
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <h2 className="text-xl font-semibold text-teal-700 mb-4">Recent Orders</h2>
            {orders.length > 0 ? (
              <div className="space-y-4">
                {orders.slice(0, 5).map(order => (
                  <div key={order.orderId} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h3 className="font-medium">{order.name}</h3>
                      <p className="text-sm text-gray-500">${order.price.toFixed(2)}</p>
                    </div>
                    <span className="text-xs bg-teal-100 text-teal-800 px-2 py-1 rounded-full">
                      {new Date(order.orderId).toLocaleTimeString()}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                No recent orders to display
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Mess;