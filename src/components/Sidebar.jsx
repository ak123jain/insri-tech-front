 import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Folder } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); // Start closed on mobile

  const navLinks = [
    { to: '/', label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
    { to: '/projects', label: 'Projects', icon: <Folder className="w-5 h-5" /> },
  ];

  return (
    <>
      {/* Mobile toggle button */}
      <div className="md:hidden bg-gray-900 text-white p-4 flex justify-between items-center">
        <span className="text-xl font-bold">MyApp</span>
        <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl">
          ☰
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static z-50 top-0 left-0 h-full bg-gray-900 text-white transition-all duration-300 ease-in-out
          ${isOpen ? 'w-64' : 'w-0 md:w-64'}
          overflow-hidden md:block
        `}
      >
        {/* Logo and toggle (for desktop) */}
        <div className="p-4 flex items-center justify-between border-b border-gray-800">
          <span className="text-xl font-bold">MyApp</span>
          <button onClick={() => setIsOpen(!isOpen)} className="text-white md:hidden">
            ✕
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)} // Close on mobile link click
              className={`flex items-center space-x-3 px-3 py-2 rounded hover:bg-gray-800 transition ${
                location.pathname === link.to ? 'bg-gray-800' : ''
              }`}
            >
              {link.icon}
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
