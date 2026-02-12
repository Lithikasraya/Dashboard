import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopNavbar } from './components/TopNavbar';
import { Dashboard } from './components/Dashboard';
import { Analytics } from './components/Analytics';
import { Sensors } from './components/Sensors';
import { Alerts } from './components/Alerts';
import { Admin } from './components/Admin';
import { Menu } from 'lucide-react';

const App = () => {
  const [activePage, setActivePage] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard': return <Dashboard />;
      case 'sensors': return <Sensors />;
      case 'analytics': return <Analytics />;
      case 'admin': return <Admin />;
      case 'alerts': return <Alerts />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-slate-950 font-sans transition-colors duration-300">
      <Sidebar 
        activePage={activePage} 
        setActivePage={setActivePage}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        isDarkMode={isDarkMode}
        toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
        logout={() => {}}
      />

      <div className="lg:pl-64 flex flex-col min-h-screen">
        {/* Mobile Header Bar */}
        <div className="lg:hidden flex items-center justify-between p-4 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center text-white">
              <span className="font-bold">S</span>
            </div>
            <span className="font-bold text-slate-900 dark:text-white">SolarMonitor</span>
          </div>
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 text-slate-600 dark:text-slate-400"
          >
            <Menu size={24} />
          </button>
        </div>

        <TopNavbar activePage={activePage} />

        <main className="flex-1 p-4 md:p-6 max-w-[1600px] mx-auto w-full">
          {renderPage()}
        </main>

        <footer className="p-6 text-center text-slate-400 dark:text-slate-500 text-xs font-medium">
          © 2026 SolarMonitor Intelligence System. All rights reserved. • System Version v4.2.0
        </footer>
      </div>
    </div>
  );
};

export default App;
