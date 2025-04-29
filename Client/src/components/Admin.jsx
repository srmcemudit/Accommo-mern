import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Admin_Section from './Admin_Section';
// payment option needed to be Added

function Admin() {

  return (
    <>
    <div className="flex h-dvh bg-white dark:bg-gray-800">
      <Admin_Section />
      <div className='w-full flex justify-center items-center '>
        <Outlet />
      </div>
    </div>
      <Footer />
    </>
  );
}

export default Admin;