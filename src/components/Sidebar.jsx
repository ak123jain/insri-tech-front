 import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Folder } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);

  const navLinks = [
    { to: '/', label: 'Dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
    { to: '/projects', label: 'Projects', icon: <Folder className="w-4 h-4" /> },
  ];

  return (
    <aside
      className={`${
        isOpen ? 'w-64' : 'w-16'
      } bg-gray-900 text-white min-h-screen transition-all duration-300 flex flex-col`}
    >
      {/* Toggle button */}
      <div className="p-4 flex items-center justify-between border-b border-gray-800">
        <span className={`${isOpen ? 'text-xl font-bold' : 'hidden'}`}>MyApp</span>
        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
          ☰
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`flex items-center space-x-3 px-3 py-2 rounded hover:bg-gray-800 transition ${
              location.pathname === link.to ? 'bg-gray-800' : ''
            }`}
          >
            {link.icon}
            {isOpen && <span>{link.label}</span>}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
