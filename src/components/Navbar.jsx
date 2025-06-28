 import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-white text-black p-4">
      <div className="container mx-auto flex items-center justify-between flex-wrap">
        <div className="text-lg font-semibold">Navbar</div>
        <div className="w-full block flex-grow md:flex md:items-center md:w-auto">
          <div className="text-sm md:flex-grow">
            <a
              href="#dashboard"
              className="block mt-4 md:inline-block md:mt-0 text-white hover:text-blue-300 mr-6"
            >
              Dashboard
            </a>
            <a
              href="#projects"
              className="block mt-4 md:inline-block md:mt-0 text-white hover:text-blue-300"
            >
              Projects
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
