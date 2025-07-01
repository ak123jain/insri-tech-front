 import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Folder,
  Calendar,
  MessageCircle,
  Users,
  Settings,
  HelpCircle,
  LogOut,
} from 'lucide-react';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();

  const navLinks = [
    { section: 'Menu', items: [
      { to: '/', label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
      { to: '/projects', label: 'Projects', icon: <Folder className="w-5 h-5" /> },
      { to: '/calendar', label: 'Calendar', icon: <Calendar className="w-5 h-5" /> },
      { to: '/chat', label: 'Chat', icon: <MessageCircle className="w-5 h-5" /> },
      { to: '/team', label: 'Team', icon: <Users className="w-5 h-5" /> },
    ]},
    { section: 'General', items: [
      { to: '/settings', label: 'Settings', icon: <Settings className="w-5 h-5" /> },
      { to: '/help', label: 'Help', icon: <HelpCircle className="w-5 h-5" /> },
      { to: '/logout', label: 'Logout', icon: <LogOut className="w-5 h-5" /> },
    ]}
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed  top-0 left-0 z-50 bg-gray-200 h-[100vh] text-black transition-transform duration-300 mr-4 ml-4 mt-4 ease-in-out 
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:translate-x-0 md:static md:block w-64 shadow-md rounded-r-3xl rounded-l-3xl`}
      >
        <div className="p-6">
          <h1 className="text-2xl font-semibold mb-6">TaskFleet</h1>

          {navLinks.map((section, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-xs uppercase text-gray-400 mb-2">{section.section}</h2>
              <div className="space-y-1">
                {section.items.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition ${
                      location.pathname === link.to
                        ? 'bg-gray-200 text-black font-medium'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
