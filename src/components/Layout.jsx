// Layout.jsx
// import React, { useState } from "react";
// import Sidebar from "./Sidebar";
// import Navbar from "./Navbar";
// import { Outlet } from "react-router-dom"; // ✅ Import this

// const Layout = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   return (
//     <div className="flex  h-screen">
//       <div className="top-0 bottom-0 left-0 z-50  fixed ">
//         <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
//       </div>
//       <div className="flex-1 min-h-screen bg-white ml-64">

//         <div className="fixed top-0 ml-4 z-50 px-16 bg-white ">
//           <Navbar onMenuClick={() => setIsSidebarOpen(true)} />
//         </div>

//         {/* ✅ This is where the pages like Dashboard & Projects will render */}
//         <div className="p-4 mt-32  overflow-y-auto">
//           <Outlet />
//         </div>
        
//       </div>
//     </div>
//   );
// };

// export default Layout;

// {
//   /* <Outlet /> is a special component provided by React Router (v6+). It acts as a placeholder for rendering the component of a nested route. */
// }

  
// {
//   /* <Outlet /> is a special component provided by React Router (v6+). It acts as a placeholder for rendering the component of a nested route. */
// }


 
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import React, { useState } from "react";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden ">
      {/* Sidebar */}
      <div className="w-64 bg-white ">
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      </div>

      {/* Main Content */}
      <div className=" flex-1 flex flex-col">
        {/* Navbar */}
        <div className="bg-white border-b px-4 py-2 shadow-md">
          <Navbar onMenuClick={() => setIsSidebarOpen(true)} />
        </div>

        {/* Content */}
        <div className=" overflow-y-auto p-4  ">
          <Outlet />
        </div>


      </div>
    </div>
  );
};

export default Layout;
