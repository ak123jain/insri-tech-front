 // Layout.jsx
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom'; // ✅ Import this

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="flex-1 min-h-screen bg-gray-100">
        <Navbar onMenuClick={() => setIsSidebarOpen(true)} />
        
        {/* ✅ This is where the pages like Dashboard & Projects will render */}
        <div className="p-4">
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default Layout;

{/* <Outlet /> is a special component provided by React Router (v6+). It acts as a placeholder for rendering the component of a nested route. */}