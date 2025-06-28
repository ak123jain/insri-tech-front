  
// import { Link, useLocation } from 'react-router-dom';
// import { LayoutDashboard, Folder } from 'lucide-react';

// const Sidebar = () => {
//   const location = useLocation();
//   const [isOpen, setIsOpen] = useState(false);

//   const navLinks = [
//     { to: '/', label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
//     { to: '/projects', label: 'Projects', icon: <Folder className="w-5 h-5" /> },
//   ];

//   return (
//     <>
//       {/* Mobile Header */}
//       <div className="md:hidden bg-white text-black p-2 flex justify-between place-items-start shadow ">
         
//         <button onClick={() => setIsOpen(true)} className="text-black text-2xl ">
//           ☰
//         </button>
//       </div>

//       {/* Mobile Overlay */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
//           onClick={() => setIsOpen(false)}
//         ></div>
//       )}

//       {/* Sidebar */}
//       <aside
//         className={`fixed top-0 left-0 z-50   bg-white text-black transition-transform duration-300 ease-in-out
//           ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
//           md:translate-x-0 md:static md:block w-64 shadow-md`}
//           style={{ width: '270.65px'  }}
//       >
//         {/* Sidebar Header */}
//         <div className="p-4 flex items-center justify-between border-b border-gray-200 md:border-none">
//           <span className="text-xl font-bold">MyApp</span>
//           <button onClick={() => setIsOpen(false)} className="text-black text-xl md:hidden">
//             ✕
//           </button>
//         </div>

//         {/* Navigation */}
//         <nav className="flex-1 p-4 space-y-2">
//           {navLinks.map((link) => (
//             <Link
//               key={link.to}
//               to={link.to}
//               onClick={() => setIsOpen(false)}
//               className={`flex items-center space-x-3 px-3 py-2 rounded transition ${
//                 location.pathname === link.to
//                   ? 'bg-gray-200 text-black'
//                   : 'hover:bg-gray-100'
//               }`}
//             >
//               {link.icon}
//               <span>{link.label}</span>
//             </Link>
//           ))}
//         </nav>
//       </aside>
//     </>
//   );
// };

// export default Sidebar;

 // Sidebar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Folder } from 'lucide-react';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
    { to: '/projects', label: 'Projects', icon: <Folder className="w-5 h-5" /> },
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 bg-black h-[100vh] text-black transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:translate-x-0 md:static md:block w-64 shadow-md`}
        style={{ width: '270.65px' }}
      >
        <div className="p-4 flex items-center justify-between border-b border-gray-200 md:border-none">
          <span className="text-xl font-bold">MyApp</span>
          <button onClick={() => setIsOpen(false)} className="text-black text-xl md:hidden">
            ✕
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={`flex items-center space-x-3 px-3 py-2 rounded transition ${
                location.pathname === link.to
                  ? 'bg-gray-200 text-black'
                  : 'hover:bg-gray-100'
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
