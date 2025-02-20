import { useLocation } from 'react-router-dom';

function Portal() {
  const location = useLocation();
  const userData = location.state?.Result;
  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-gray-700 to-indigo-900 flex flex-col p-6">
      <div>
        <p>welcome {userData.name}</p>
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