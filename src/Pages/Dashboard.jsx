 import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-4 min-h-screen bg-white">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
          <h2 className="text-lg font-semibold text-gray-700">Total Users</h2>
          <p className="text-3xl font-bold mt-2 text-blue-600">1,234</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
          <h2 className="text-lg font-semibold text-gray-700">Active Projects</h2>
          <p className="text-3xl font-bold mt-2 text-green-600">12</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
          <h2 className="text-lg font-semibold text-gray-700">Pending Tasks</h2>
          <p className="text-3xl font-bold mt-2 text-yellow-600">45</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
