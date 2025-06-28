 import React from 'react';
import { Menu } from 'lucide-react';

const Navbar = ({ onMenuClick }) => {
  return (
    <div className="bg-white h-[88px] px-4 border-b shadow-sm flex justify-between items-center">
      {/* Left: Menu Icon — hide on desktop */}
      <button
        onClick={onMenuClick}
        className="text-black text-2xl md:hidden" // hides on medium & up
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Right: Brand Name — center aligned if needed */}
      <span className="text-xl font-semibold">MyApp</span>
    </div>
  );
};

export default Navbar;
