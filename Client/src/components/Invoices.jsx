import './Scroll.css';
import { useNavigate } from 'react-router-dom';
function Invoices() {
  const navigate=useNavigate();
  const HandleClick = () => {
    console.log('Invoice clicked!');    
    navigate('/pdf');                  //add pdf page 
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Page Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold mb-2 text-blue-400">
          Available Invoices
        </h1>
        <p className="text-gray-400 text-sm">
          View and manage all your invoices with ease
        </p>
        <div className="w-16 h-1 bg-blue-500 mx-auto mt-2"></div>
      </div>

      {/* Scrollable Invoice Cards Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-scroll custom-scrollbar"
        style={{ maxHeight: '400px' }}
      >
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">Invoice #{i + 1}</h2>
              <p className="text-gray-400 text-sm mb-3">Issued: 2024-06-12</p>
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-1.5 rounded-md text-sm transition-colors" onClick={HandleClick} >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Invoices;
