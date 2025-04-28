import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
function ChangePass() {
  const User = useSelector((state)=> (state.user.user));
  console.log(User);
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
      const response = await axios.post("http://localhost:3001/user/changepass",{UserPass,Userid,Current,New});
      console.log(response.data);
      success()
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
          className="w-full p-2 text-black rounded-md focus:outline-none focus:ring-blue-500 block "
        />
        <input
          type="password"
          required
          placeholder="New Password"
          value={New}
          onChange={(e) => setNew(e.target.value)}
          className="w-full p-2 text-black rounded-md focus:outline-none focus:ring-blue-500 block"
        />
        <input
          type="password"
          required
          placeholder="Confirm Password"
          value={Confirm}
          onChange={(e) => setConfirm(e.target.value)}
          className="w-full p-2 text-black rounded-md focus:outline-none focus:ring-blue-500 block"
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