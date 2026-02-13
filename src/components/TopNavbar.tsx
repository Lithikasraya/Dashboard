import React from 'react';
import { Search } from 'lucide-react';

export const TopNavbar = ({ activePage }: { activePage: string }) => {
  const pageTitle = activePage.charAt(0).toUpperCase() + activePage.slice(1);

  return (
    <nav className="flex items-center justify-between py-4 px-6 mb-2">
      <div className="flex items-center gap-4">
        <h2 className="hidden lg:block text-xl font-bold text-slate-900 dark:text-white">{pageTitle}</h2>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          <input 
            type="text" 
            placeholder="Search metrics..." 
            className="pl-10 pr-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:ring-2 focus:ring-amber-500/20 outline-none transition-all w-48 md:w-64"
          />
        </div>
      </div>
    </nav>
  );
};
