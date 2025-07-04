 import React from 'react';
import { Menu } from 'lucide-react';

const Navbar = ({ onMenuClick }) => {
  return (
    <div className="bg-gray-200 sticky h-[79px] px-4 w-full ml-2 border-b shadow-sm flex justify-between items-center rounded-full mt-4">
      {/* Left: Menu Icon — hide on desktop */}
      <button
        onClick={onMenuClick}
        className="text-black text-2xl md:hidden" // hides on medium & up
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Right: Brand Name — center aligned if needed */}
       <input type="text" placeholder="Search" className="px-3 py-2 border border-gray-300 rounded-full w-96 ml-2" />

       <div className="icon">

       </div>

       <div className="flex gap-2 mr-8 ">
        <img src="" className='rounded-full w-10 h-10' alt="" />
        <div className="flex flex-col">
          <span className="text-md font-semibold">Akash Jain</span>
          <span className="text-sm text-gray-500">User</span>
        </div>
       </div>
    </div>
  );
};

export default Navbar;
