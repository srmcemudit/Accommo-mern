import { GoBell } from "react-icons/go"

function Notification() {
  return (
    <div className="text-white bg-slate-800 rounded-lg shadow-lg ">
        <p className="flex p-8 text-center items-center font-semibold text-xl gap-2 ">Notifications <GoBell/> </p>
        <div className=" w-full " >
        <ul className="" >
            <li className="hover:bg-slate-950 hover:cursor-pointer py-2 px-4">1st</li>
            <li className="hover:bg-slate-950 hover:cursor-pointer py-2 px-4">2nd</li>
            <li className="hover:bg-slate-950 hover:cursor-pointer py-2 px-4">3rd</li>
            <li className="hover:bg-slate-950 hover:cursor-pointer py-2 px-4">4th</li>
            <li className="hover:bg-slate-950 hover:cursor-pointer py-2 px-4">5th</li>
        </ul>
        </div>
    </div>
  )
}

export default Notification