import './Dashboard.css';
import Left_Section from '../components/Left_Section';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="flex flex-1">
        {/* Sidebar/Navigation */}
        <div className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 shadow-sm">
          <Left_Section />
        </div>
        
        {/* Main Content Area */}
        <main className="flex-1 p-6 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto">
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