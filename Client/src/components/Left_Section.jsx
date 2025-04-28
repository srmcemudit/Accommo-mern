import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { logoutUser } from "../Redux/Userslice";
import { MdOutlineSpaceDashboard, MdTableChart } from "react-icons/md";
import { PiCookingPotBold } from "react-icons/pi";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { TfiWrite } from "react-icons/tfi";
import { GrNotes } from "react-icons/gr";
import { GoGear } from "react-icons/go";
import { ImExit } from "react-icons/im";

function Left_Section() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = async () => {
    try {
      await axios.post(
        "http://localhost:3001/logout",
        {},
        { withCredentials: true }
      );
      setTimeout(() => {
        dispatch(logoutUser());
        navigate("/logout");
      }, 100);
    } catch (error) {
      console.log("Logout failed", error);
    }
  };

  return (
    <section className="flex flex-col h-full w-64 bg-white border-r border-gray-200">
      {/* Dashboard Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center gap-3 text-teal-600">
          <MdOutlineSpaceDashboard className="text-2xl" />
          <span className="text-xl font-semibold">Dashboard</span>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        <Link
          to="/Dashboard"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 text-gray-700 hover:text-teal-600 transition-colors"
        >
          <MdTableChart className="text-xl" />
          <span className="font-medium">Portal</span>
        </Link>

        <Link
          to="/Dashboard/mess"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 text-gray-700 hover:text-teal-600 transition-colors"
        >
          <PiCookingPotBold className="text-xl" />
          <span className="font-medium">Mess</span>
        </Link>

        <Link
          to="/Dashboard/invoices"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 text-gray-700 hover:text-teal-600 transition-colors"
        >
          <LiaFileInvoiceSolid className="text-xl" />
          <span className="font-medium">Invoices</span>
        </Link>

        <Link
          to="/Dashboard/complaints"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 text-gray-700 hover:text-teal-600 transition-colors"
        >
          <TfiWrite className="text-xl" />
          <span className="font-medium">Complaints</span>
        </Link>

        <Link
          to="/Dashboard/suggestions"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 text-gray-700 hover:text-teal-600 transition-colors"
        >
          <GrNotes className="text-xl" />
          <span className="font-medium">Suggestions</span>
        </Link>

        <Link
          to="/Dashboard/settings"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 text-gray-700 hover:text-teal-600 transition-colors"
        >
          <GoGear className="text-xl" />
          <span className="font-medium">Settings</span>
        </Link>
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={logout}
          className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-red-50 text-red-600 hover:text-red-700 transition-colors"
        >
          <ImExit className="text-xl" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </section>
  );
}

export default Left_Section;
