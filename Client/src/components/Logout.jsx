import { Link } from "react-router-dom";

function Logout() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-teal-50 to-gray-100 dark:from-teal-900 dark:to-gray-900 p-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center transition-all transform hover:shadow-xl">
        {/* Success icon */}
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-teal-100 dark:bg-teal-900 mb-6">
          <svg
            className="h-10 w-10 text-teal-600 dark:text-teal-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Success message */}
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 dark:text-white mb-2">
          Logout Successful
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          You have been successfully logged out of your account.
        </p>

        {/* Login again prompt */}
        <div className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
          <span>Want to access your account?</span>
          <Link
            to="/"
            className="ml-2 text-teal-600 dark:text-teal-400 font-medium hover:text-teal-700 dark:hover:text-teal-300 transition-colors flex items-center"
          >
            Login again
            <svg
              className="ml-1 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Logout;
