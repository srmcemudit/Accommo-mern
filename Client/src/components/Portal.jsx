import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { setUser } from "../Redux/Userslice";
import { toast, ToastContainer } from "react-toastify";
import { FiHome, FiDollarSign, FiUser } from "react-icons/fi";

function Portal() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  
  const PaymentHandler = async () => {
    try {
      const key = await axios.get("http://localhost:3001/razorpay/getkey");
      const order = await axios.post("http://localhost:3001/razorpay/order");
      
      const options = {
        key: key.data.key,
        amount: order.data.amount,
        currency: order.data.currency,
        name: "Accommo",
        description: "PG Rent",
        image: "https://ibb.co/201JNfqb",
        order_id: order.data.id,
        handler: async function (response) {
          try {
            await axios.post(
              "http://localhost:3001/razorpay/paymentverify",
              response
            );
            toast.success("Payment successful!");
            window.location.href = "/dashboard";
          } catch (error) {
            toast.error("Payment verification failed");
            console.error(error);
          }
        },
        prefill: {
          name: user.name,
          email: user.email,
          contact: "000000000000",
        },
        notes: {
          address: "lko",
        },
        theme: {
          color: "#0d9488", // Teal color matching your theme
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      toast.error("Payment initialization failed");
      console.error(error);
    }
  };

  const Roomsdata = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/rooms/userroom/${user._id}`
      );
      dispatch(setUser({ user, room: response.data }));
    } catch (error) {
      console.error("Error fetching room data:", error);
    }
  };

  const room = useSelector((state) => state.user.room);
  
  useEffect(() => {
    Roomsdata();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Welcome Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
            <FiUser className="mr-3 text-teal-600" />
            Welcome, {user?.name || "Guest"}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">Your accommodation dashboard</p>
        </div>

        {/* Payment Card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center mb-4">
            <FiDollarSign className="text-2xl text-teal-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Payment Options</h2>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-teal-300 dark:hover:border-teal-500 transition-colors text-center">
              <p className="font-medium text-gray-700 dark:text-gray-300">Room Rent</p>
              <p className="text-teal-600 font-semibold dark:text-teal-400">₹5,000</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-teal-300 dark:hover:border-teal-500 transition-colors text-center">
              <p className="font-medium text-gray-700 dark:text-gray-300">Mess Rent</p>
              <p className="text-teal-600 font-semibold dark:text-teal-400">₹3,000</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-teal-300 dark:hover:border-teal-500 transition-colors text-center">
              <p className="font-medium text-gray-700 dark:text-gray-300">Total Rent</p>
              <p className="text-teal-600 font-semibold dark:text-teal-400">₹8,000</p>
            </div>
          </div>

          <button
            onClick={PaymentHandler}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white dark:bg-teal-700 dark:hover:bg-teal-800 font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
          >
            <FiDollarSign className="mr-2" />
            Pay Now
          </button>
        </div>

        {/* Room Details Card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center mb-4">
            <FiHome className="text-2xl text-teal-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Current Room Details</h2>
          </div>
          
          {room ? (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Room Number</p>
                <p className="font-medium dark:text-gray-200">{room.RoomNo}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Room Type</p>
                <p className="font-medium dark:text-gray-200 capitalize">{room.type}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Status</p>
                <p className="font-medium dark:text-gray-200 capitalize">{room.Status}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Monthly Rent</p>
                <p className="font-medium dark:text-gray-200 text-teal-600">₹5,000</p>
              </div>
            </div>
          ) : (
            <p className="text-gray-500 dark:text-gray-400">Loading room details...</p>
          )}
        </div>
      </div>

      <ToastContainer 
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default Portal;