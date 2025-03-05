import { useSelector } from "react-redux";

function Portal() {
  const user = useSelector((state) => state.user.user);
  
  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-gray-700 to-indigo-900 flex flex-col p-6">
      <div>
        <p>welcome {user?.name}</p>
      </div>
      <div className='p-4 flex flex-col items-center space-y-3'>
        <p className='block text-center'>payment options</p>
        <div className='flex justify-evenly items-center gap-10'>
        <div>Room rent</div>
        <div>Mess rent</div>
        <div>Total rent</div>
        </div>
        <div>
        <button>pay</button>
        </div>
      </div>
      <div>
        current room details
      </div>
    </div>
  )
}

export default Portal