import './Dashboard.css';
import {Link} from "react-router-dom"
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { PiCookingPotBold } from "react-icons/pi";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { TfiWrite } from "react-icons/tfi";
import { GrNotes } from "react-icons/gr";
import { GoGear } from "react-icons/go";
import { ImExit } from "react-icons/im";


function Dashboard() {
  return (
    <div className="flex h-[calc(100vh-1.5rem)] bg-gray-900">
      <section className="flex flex-col h-full w-52 bg-gray-800 pt-5 text-gray-300">
        <div className="bg-blue-600 w-full flex justify-center text-center items-center flex-[0,0,auto]">
          <span className=" w-full flex text-3xl justify-center text-center items-center head select-none "> <MdOutlineSpaceDashboard /> Dashboard</span>
        </div>
        <div className="flex flex-col flex-1 justify-center items-start space-y-4 list-none ">
          <li>
            <Link to='/home' className="flex items-center">
              <span className="ml-2 flex items-center gap-2 font-semibold text-xl "><IoHomeOutline/> Home</span >
            </Link>
          </li>
          <li>
            <Link to= '/mess' className="flex items-center">
              <span className="ml-2 flex items-center gap-2 font-semibold text-xl"><PiCookingPotBold/>  Mess</span >
            </Link>
          </li>
          <li>
            <Link to= '/invoices' className="flex items-center">
              <span className="ml-2 flex items-center gap-2 font-semibold text-xl"><LiaFileInvoiceSolid/> Invoices</span >
            </Link>
          </li>
          <li>
            <Link to= '/complaints' className="flex items-center">
              <span className="ml-2 flex items-center gap-2 font-semibold text-xl"><TfiWrite/> Complaints</span >
            </Link>
          </li>
          <li>
            <Link to= '/suggestions' className="flex items-center">
              <span className="ml-2 flex items-center gap-2 font-semibold text-xl"><GrNotes/> Suggestions</span >
            </Link>
          </li>
          <li>
            <Link to= '/settings' className="flex items-center">
              <span className="ml-2 flex items-center gap-2 font-semibold text-xl"><GoGear /> Settings</span>
            </Link>
          </li>
        </div>
        <div className="flex-[0,0,auto] p-2 mb-1 text-center items-center bg-red-800 " >
            <Link to='/home'>
            <span className='flex justify-center items-center gap-2 font-semibold text-xl ' ><ImExit /> Logout</span>
            </Link>
        </div>
      </section>
      <div className="flex-1 p-4">
        <h1 className="text-3xl font-bold mb-4 text-[#fff] ">Welcome to Dashboard</h1>
        <p className="text-gray-500">
          This is a sample dashboard page. You can customize this page as per your
          requirement.
        </p>
        <p className='text-[#f5f5f5] ' >this is another sample</p>
      </div>
    </div>
  );
}

export default Dashboard;