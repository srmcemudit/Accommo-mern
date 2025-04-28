import { useNavigate } from "react-router-dom";
import { FiUser, FiLock, FiBell } from "react-icons/fi";

function Settings() {
  const navigate = useNavigate();

  const options = [
    { name: "Profile", icon: <FiUser className="text-lg" />, link: "profile" },
    {
      name: "Change Password",
      icon: <FiLock className="text-lg" />,
      link: "change_password",
    },
    {
      name: "Notifications",
      icon: <FiBell className="text-lg" />,
      link: "notifications",
    },
  ];

  const handleNavigation = (link) => {
    navigate(`/Dashboard/${link}`);
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
          Account Settings
        </h3>
        <ul className="space-y-3">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleNavigation(option.link)}
              className="flex items-center p-4 rounded-lg border border-gray-200 hover:border-teal-300 hover:bg-teal-50 cursor-pointer transition-colors group"
            >
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-teal-100 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors mr-4">
                {option.icon}
              </div>
              <span className="text-gray-700 group-hover:text-teal-600 font-medium transition-colors">
                {option.name}
              </span>
              <div className="ml-auto text-gray-400 group-hover:text-teal-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Settings;
