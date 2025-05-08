import './Dashboard.css';
import Left_Section from '../components/Left_Section';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import { MdMenu, MdOutlineSpaceDashboard } from "react-icons/md";
import Radio from '../components/MenuIcon';
import { useState } from 'react';

function Dashboard() {
  const [radio, setradio] = useState(false)
  return (
    <div className="md:min-h-screen h-dvh flex flex-col bg-gray-50" onClick={() => setradio(false)}>
      <div className="md:flex md:flex-1 ">
        <div className="flex md:hidden items-center px-2 dark:bg-gray-800 justify-between text-teal-600">
          <div className='flex items-center gap-4 p-2'>
            <MdOutlineSpaceDashboard className="text-2xl" />
            <span className="text-2xl font-semibold">Dashboard</span>
          </div>
          <div className='absolute right-0 p-2'>
            <MdMenu className='text-3xl' onClick={() => setradio(true)} />
            <div className='absolute ease-in-out right-0 p-2'>
              {radio && (<Radio />)}
            </div>
            
          </div>
        </div>
        {/* Sidebar/Navigation */}
        <div className="hidden md:block w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 shadow-sm">
          <Left_Section />
        </div>
        
        {/* Main Content Area */}
        <main className="flex-1 md:p-6 bg-gray-50 dark:bg-gray-800">
          <div className="md:max-w-6xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
      
      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-4">
        <Footer />
      </footer>
    </div>
  );
}

export default Dashboard;