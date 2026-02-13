import React from 'react';

export const TopNavbar = ({ activePage }: { activePage: string }) => {
  const pageTitle = activePage.charAt(0).toUpperCase() + activePage.slice(1);

  return (
    <nav className="flex items-center justify-between py-4 px-6 mb-2">
      <div className="flex items-center gap-4">
        <h2 className="hidden lg:block text-xl font-bold text-slate-900 dark:text-white">{pageTitle}</h2>
      </div>
    </nav>
  );
};
