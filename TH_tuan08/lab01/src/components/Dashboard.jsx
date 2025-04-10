import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

const Dashboard = (props) => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-gray-50">
      <div className="w-64 bg-white border-r border-gray-200">
        <div className="p-4 flex items-center">
          <div className="cursor-pointer">
            <div className="bg-red-500 px-13 py-4">logo dashboard</div>
          </div>
        </div>

        <nav className="mt-6">
          <div className="px-4 mb-4">
            <button className="w-full bg-pink-500 text-white flex items-center px-4 py-3 rounded">
              <span className="mr-2"></span>
              <span>Dashboard</span>
            </button>
          </div>

          <div className="px-4 mb-4">
            <button className="w-full text-gray-600 flex items-center px-4 py-3 rounded hover:bg-gray-100">
              <span>Projects</span>
            </button>
          </div>

          <div className="px-4 mb-4">
            <button className="w-full text-gray-600 flex items-center px-4 py-3 rounded hover:bg-gray-100">
              <span>Teams</span>
            </button>
          </div>

          <div className="px-4 mb-4">
            <button className="w-full text-gray-600 flex items-center px-4 py-3 rounded hover:bg-gray-100">
              <span>Analytics</span>
            </button>
          </div>

          <div className="px-4 mb-4">
            <button className="w-full text-gray-600 flex items-center px-4 py-3 rounded hover:bg-gray-100">
              <span>Messages</span>
            </button>
          </div>

          <div className="px-4 mb-4">
            <button className="w-full text-gray-600 flex items-center px-4 py-3 rounded hover:bg-gray-100">
              <span>Integrations</span>
            </button>
          </div>
        </nav>

        {/* V2.0 Promo  */}
        <div className="mx-4 mt-10 bg-blue-50 p-4 rounded-lg">
          <div className="flex justify-center mb-3"></div>
          <h3 className="font-bold text-center">V2.0 is available</h3>
          <div className="mt-3">
            <button className="w-full bg-white text-blue-500 border border-blue-300 py-2 rounded text-sm font-medium">
              Try now
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-pink-500">Dashboard</h1>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-100 rounded-lg px-4 py-2 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            <button className="p-2 text-gray-400 hover:text-gray-600"></button>

            <button className="p-2 text-gray-400 hover:text-gray-600"></button>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6">
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              Overview
            </h2>

            {/* Stats Cards */}
          </div>

          {/* Detailed Report Section */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold flex items-center">
                Detailed report
              </h2>

              <div className="flex space-x-2">
                <button className="border border-gray-200 rounded px-3 py-1 text-sm font-medium flex items-center">
                  <span className="mr-1">Import</span>
                </button>
                <button className="border border-gray-200 rounded px-3 py-1 text-sm font-medium flex items-center">
                  <span className="mr-1">Export</span>
                </button>
              </div>
            </div>

            {/* Data Table */}

            {/* Pagination */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
