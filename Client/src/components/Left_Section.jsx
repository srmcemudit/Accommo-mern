
import {Link} from "react-router-dom"
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { MdTableChart } from "react-icons/md";
import { PiCookingPotBold } from "react-icons/pi";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { TfiWrite } from "react-icons/tfi";
import { GrNotes } from "react-icons/gr";
import { GoGear } from "react-icons/go";
import { ImExit } from "react-icons/im";

function Left_Section() {
  return (
    <section className="flex flex-col h-full w-52 bg-gray-800 pt-5 text-gray-300">
        <div className="bg-blue-600 w-full flex justify-center text-center items-center flex-[0,0,auto]">
          <span className=" w-full flex text-3xl justify-center text-center items-center head select-none "> <MdOutlineSpaceDashboard /> Dashboard</span>
        </div>
        <div className="flex flex-col flex-1 justify-center items-start space-y-4 list-none ">
          <li>
            <Link to='/Dashboard' className="flex items-center">
              <span className="ml-2 flex items-center gap-2 font-semibold text-xl "><MdTableChart/> Portal</span >
            </Link>
          </li>
          <li>
            <Link to= '/Dashboard/mess' className="flex items-center">
              <span className="ml-2 flex items-center gap-2 font-semibold text-xl"><PiCookingPotBold/>  Mess</span >
            </Link>
          </li>
          <li>
            <Link to= '/Dashboard/invoices' className="flex items-center">
              <span className="ml-2 flex items-center gap-2 font-semibold text-xl"><LiaFileInvoiceSolid/> Invoices</span >
            </Link>
          </li>
          <li>
            <Link to= '/Dashboard/complaints' className="flex items-center">
              <span className="ml-2 flex items-center gap-2 font-semibold text-xl"><TfiWrite/> Complaints</span >
            </Link>
          </li>
          <li>
            <Link to= '/Dashboard/suggestions' className="flex items-center">
              <span className="ml-2 flex items-center gap-2 font-semibold text-xl"><GrNotes/> Suggestions</span >
            </Link>
          </li>
          <li>
            <Link to= '/Dashboard/settings' className="flex items-center">
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
  )
}

export default Left_Section