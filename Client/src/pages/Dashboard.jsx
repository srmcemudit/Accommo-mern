import './Dashboard.css';
import Left_Section from '../components/Left_Section';
import { Outlet } from 'react-router-dom';


function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-900">
      <Left_Section />
      <div className='w-full flex justify-center items-center '>
        <Outlet />
      </div>      
    </div>
  );
}

export default Dashboard;