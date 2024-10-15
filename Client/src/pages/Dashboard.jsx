import './Dashboard.css';
import Left_Section from '../components/Left_Section';
import Portal from '../components/Portal';
import { Outlet } from 'react-router-dom';


function Dashboard() {
  return (
    <div className="flex h-[calc(100vh-1.5rem)] bg-gray-900">
      <Left_Section />
      <div >
        <Outlet />
      </div>      
    </div>
  );
}

export default Dashboard;