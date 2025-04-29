import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { logoutUser } from "../Redux/Userslice";
import { toast, ToastContainer } from "react-toastify";
import { MdOutlineSpaceDashboard, MdTableChart, MdOutlineBedroomParent, MdPayments} from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import { GoGear } from "react-icons/go";
import { ImExit } from "react-icons/im";

function Admin_Section() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = async () => {
    try {
      await axios.post(
        "http://localhost:3001/logout",
        {},
        { withCredentials: true }
      );
      toast.success("Logout successfully!")
      setTimeout(() => {
        dispatch(logoutUser());
        navigate("/logout");
      }, 100);
    } catch (error) {
      console.log("Logout failed", error);
    }
  };

  return (
    <div className="flex flex-col h-full w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
      {/* Dashboard Header */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3 text-teal-600">
          <MdOutlineSpaceDashboard className="text-2xl" />
          <span className="text-xl font-semibold">Admin Dashboard</span>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        <Link 
          to="/admin" 
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
        >
          <MdTableChart className="text-xl" />
          <span className="font-medium">Portal</span>
        </Link>

        <Link 
          to="/admin/rooms" 
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
        >
          <MdOutlineBedroomParent className="text-xl" />
          <span className="font-medium">Rooms</span>
        </Link>

        <Link 
          to="/admin/payments" 
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
        >
          <MdPayments className="text-xl" />
          <span className="font-medium">Payments</span>
        </Link>

        <Link 
          to="/admin/acomplaints" 
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
        >
          <TfiWrite className="text-xl" />
          <span className="font-medium">Complaints</span>
        </Link>

        <Link 
          to="/admin/asettings" 
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
        >
          <GoGear className="text-xl" />
          <span className="font-medium">Settings</span>
        </Link>
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <button
          onClick={logout}
          className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/30 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors"
        >
          <ImExit className="text-xl" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Admin_Section;