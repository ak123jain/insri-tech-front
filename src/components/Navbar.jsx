 
import React from 'react';
import { Menu } from 'lucide-react';

const Navbar = ({ onMenuClick }) => {
  return (
    <div className="bg-white p-4 shadow flex justify-between items-center md:hidden">
      <button onClick={onMenuClick} className="text-black text-2xl">
        <Menu className="w-6 h-6" />
      </button>
      <span className="text-xl font-semibold">MyApp</span>
       
    </div>
  );
};

export default Navbar;
