import './Scroll.css'
function Complaints() {
  return (
    <div className="flex justify-center items-center gap-8 p-8 bg-gradient-to-r from-gray-900 to-gray-800 min-h-screen ">
      {/* Complaint Registration Form */}
      <div className="bg-gradient-to-r from-indigo-700 to-indigo-600 p-8 rounded-lg shadow-xl w-full sm:w-96">
        <p className="text-white font-semibold text-lg mb-6">Register your complaint here...</p>

        {/* Complaint Title Input */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Complaint Title"
            className="block w-full p-3 text-black bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          />
        </div>

        {/* Complaint Description */}
        <div className="mb-4">
          <textarea
            placeholder="Description"
            className="p-3 block w-full text-black bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all overflow-hidden"
          />
        </div>

        {/* Submit Button */}
        <button className="bg-indigo-500 hover:bg-indigo-600 text-white p-3 rounded-md w-full mt-4 transition-all">
          Submit
        </button>
      </div>

      {/* Registered Complaints List */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-500 p-8 shadow-xl rounded-lg w-full sm:w-96 h-80 overflow-y-auto custom-scrollbar">
        <p className="text-white font-semibold text-lg mb-6">Registered Complaints</p>
        <ul className="space-y-3 text-gray-100">
          <li className="p-3 hover:bg-teal-700 rounded-md transition-all">Complaint 1</li>
          <li className="p-3 hover:bg-teal-700 rounded-md transition-all">Complaint 2</li>
          <li className="p-3 hover:bg-teal-700 rounded-md transition-all">Complaint 3</li>
          <li className="p-3 hover:bg-teal-700 rounded-md transition-all">Complaint 4</li>
          <li className="p-3 hover:bg-teal-700 rounded-md transition-all">Complaint 5</li>
          <li className="p-3 hover:bg-teal-700 rounded-md transition-all">Complaint 6</li>
          <li className="p-3 hover:bg-teal-700 rounded-md transition-all">Complaint 7</li>
          <li className="p-3 hover:bg-teal-700 rounded-md transition-all">Complaint 8</li>
          <li className="p-3 hover:bg-teal-700 rounded-md transition-all">Complaint 9</li>
          <li className="p-3 hover:bg-teal-700 rounded-md transition-all">Complaint 10</li>
        </ul>
      </div>
    </div>
  );
}

export default Complaints;
