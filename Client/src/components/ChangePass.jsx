import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
const SERVER_URL = import.meta.env.VITE_SERVER;
function ChangePass() {
  const User = useSelector((state)=> (state.user.user));
  const Userid = User._id;
  const UserPass = User.password;
  const [Current, setCurrent] = useState("");
  const [New, setNew] = useState("");
  const [Confirm, setConfirm] = useState("");
  const success = () => toast.success("Password Changed Success !")
  const failed = () => toast.error("Failed To Change Password !")

  const handleClick = async(e)=>{
    e.preventDefault();
    if(New != Confirm){
      alert("passwords must be same in confirm field")
    }
    try {
      const response = await axios.post(`${SERVER_URL}/user/changepass`,{UserPass,Userid,Current,New});
      if(response.status==200){
        success()
      }else{
        failed()
      }
    } catch (error) {
      console.log(error);
      failed();
    }
  }

  return (
    <div className="flex flex-col justify-center text-white">
      <p className="text-xl font-semibold p-4 ">Change Password</p>
      <form className="space-y-2 ">
        <input
          type="password"
          required
          placeholder="Current Password"
          value={Current}
          onChange={(e) => setCurrent(e.target.value)}
          className="border rounded p-2 w-full border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
        />
        <input
          type="password"
          required
          placeholder="New Password"
          value={New}
          onChange={(e) => setNew(e.target.value)}
          className="border rounded p-2 w-full border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
        />
        <input
          type="password"
          required
          placeholder="Confirm Password"
          value={Confirm}
          onChange={(e) => setConfirm(e.target.value)}
          className="border rounded p-2 w-full border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
        />
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="p-2 text-white font-semibold rounded-md bg-blue-500 hover:bg-blue-600"
            onClick={handleClick}
          >
            Change Password
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default ChangePass;