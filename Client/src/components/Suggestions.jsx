function Suggestions() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="w-full max-w-4xl p-8 bg-gray-800 rounded-lg shadow-2xl transform transition-all hover:shadow-xl">
        {/* Title */}
        <h1 className="text-3xl font-bold text-white mb-8 text-center">
          Drop Your Suggestions Here
        </h1>

        {/* Form Inputs */}
        <div className="space-y-6">
          {/* Suggestion Title */}
          <div>
            <label className="block text-gray-300 font-medium mb-2">
              Suggestion Title
            </label>
            <input type="text" placeholder="Enter your suggestion title" className="w-full p-4 bg-gray-700 text-gray-100 rounded-md border-2 border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"/>
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-300 font-medium mb-2">
              Description
            </label>
            <textarea
              placeholder="Enter your description here"
              rows="5"
              className="w-full p-4 bg-gray-700 text-gray-100 rounded-md border-2 border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all overflow-hidden "/>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center mt-8">
          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md shadow-lg transition-all transform"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Suggestions;