import './Dashboard.css';
import Left_Section from '../components/Left_Section';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';

function Dashboard() {
  const location = useLocation();
  const userData = location.state?.userData;
  if(!userData){
    console.log("no data")
  }
  return (
    <>
    <div className="flex h-dvh bg-gray-900">
      <Left_Section />
      <div className='w-full flex justify-center items-center '>
        <Outlet context={{userData}} />
      </div>
    </div>
      <Footer />
    </>
  );
}

export default Dashboard;