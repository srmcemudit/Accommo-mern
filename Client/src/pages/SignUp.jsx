

function SignUp() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 flex flex-col items-center justify-center p-4">
      {/* Main Content */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold text-white mb-4">
          Welcome to Our Platform
        </h1>
        <p className="text-lg text-gray-200">
          Streamline your tasks with ease and efficiency.
        </p>
      </div>

      {/* Login Card */}
      <div className="w-full max-w-sm bg-white shadow-md rounded-lg p-6 space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Login</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Username
            </label>
            <input
              type="text"
              id="email"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-3 rounded-lg font-semibold hover:bg-indigo-600 transition duration-200"
          >
            SignUp
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignUp