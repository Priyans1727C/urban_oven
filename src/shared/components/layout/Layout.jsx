import React from 'react';
import NavBarDock from './NavBarDock';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main content */}
      <main className="pb-8">
        {children}
      </main>
      
      {/* Navigation */}
      <NavBarDock />
    </div>
  );
};

export default Layout;