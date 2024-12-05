
function Complaints() {
  return (
    <div className="text-white flex justify-center items-center gap-4 p-4">
      <div className="p-4 bg-slate-950 rounded-lg shadow-lg w-full sm:w-96">
        <p className="text-white font-semibold text-lg p-2">Register your complaint here ....</p>
        <div className="px-2 py-4">
          <input type="text" placeholder="Complaint Title" className="block w-full p-2 text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="px-2 py-4">
          <textarea placeholder="Description" className="p-2 block w-full text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <button className="bg-blue-400 p-2 border-none rounded-md w-full">Submit</button>
      </div>
      <div className="bg-slate-950 p-4 shadow-lg rounded-lg w-full sm:w-96 h-72 overflow-y-auto">
        <p className="text-white font-semibold text-lg p-2">Registered Complaints</p>
        <ul className="list-none space-y-2">
          <li>Complaint 1</li>
          <li>Complaint 2</li>
          <li>Complaint 3</li>
          <li>Complaint 4</li>
          <li>Complaint 5</li>
          <li>Complaint 6</li>
          <li>Complaint 7</li>
          <li>Complaint 8</li>
          <li>Complaint 9</li>
          <li>Complaint 10</li>
        </ul>
      </div>
    </div>
  )
}

export default Complaints