 import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
 
import Sidebar from './components/Sidebar.jsx';
import Dashboard from './Pages/Dashboard.jsx';

const App = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar always visible on the left */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex flex-col flex-1">
        {/* Navbar stays on top */}
        <Navbar />

        {/* Page content changes here */}
        <div className="p-4 flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
