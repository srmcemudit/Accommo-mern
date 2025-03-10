import axios from "axios"
function ChangePass() {
  axios.post('http://localhost:3001/user/changepass')
  return (
    <div className="flex flex-col justify-center text-white">
        <p className="text-xl font-semibold p-4 ">Change Password</p>
        <form className="space-y-2 " >
            <input type="password" required placeholder="Current Password" className="w-full p-2 text-black rounded-md focus:outline-none focus:ring-blue-500 block "/>
            <input type="password" required placeholder="New Password" className="w-full p-2 text-black rounded-md focus:outline-none focus:ring-blue-500 block"/>
            <input type="password" required placeholder="Confirm Password" className="w-full p-2 text-black rounded-md focus:outline-none focus:ring-blue-500 block"/>
            <div className="flex justify-center items-center" >
            <button type="submit" className="p-2 text-white font-semibold rounded-md bg-blue-500 hover:bg-blue-600">Change Password</button>
            </div>
        </form>
    </div>
  )
}

export default ChangePass