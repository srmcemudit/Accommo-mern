
function Suggestions() {
  return (
    <div className="p-4 bg-slate-950 rounded-lg shadow-lg w-full sm:w-96">
        <p className="text-white font-semibold text-lg p-2">Drop your Suggestions here ....</p>
        <div className="px-2 py-4">
          <input type="text" placeholder="Suggestion Title" className="block w-full p-2 text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="px-2 py-4">
          <textarea placeholder="Description" className="p-2 block w-full text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <button className="bg-blue-400 p-2 border-none rounded-md w-full">Submit</button>
      </div>
  )
}

export default Suggestions