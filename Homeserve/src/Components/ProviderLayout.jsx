import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function ProviderLayout() {
  const navStyle = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-gray-600 hover:bg-gray-100"
    }`;

  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <aside className="hidden md:flex w-64 bg-white border-r min-h-screen flex-col">

        {/* Logo */}
        <div className="h-20 flex items-center px-6 border-b">
          <NavLink
            to="/"
            className="text-2xl font-bold text-gray-800"
          >
            Home<span className="text-blue-600">Serve</span>
          </NavLink>
        </div>

        {/* Provider */}
        <div className="p-5 border-b">
          <div className="flex items-center gap-3">

            <div className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center text-xl">
              👨‍🔧
            </div>

            <div>
              <h3 className="font-semibold text-gray-800">
                Rahul Sharma
              </h3>

              <p className="text-xs text-gray-500">
                Service Provider
              </p>
            </div>

          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">

          <NavLink
            to="/provider/dashboard"
            className={navStyle}
          >
            🏠 Dashboard
          </NavLink>

          <NavLink
            to="/provider/bookings"
            className={navStyle}
          >
            📋 Bookings
          </NavLink>

          <NavLink
            to="/provider/earnings"
            className={navStyle}
          >
            💰 Earnings
          </NavLink>

          <NavLink
            to="/provider/profile"
            className={navStyle}
          >
            👤 Profile
          </NavLink>

        </nav>

        {/* Logout */}
        <div className="mt-auto p-4">

          <button className="w-full text-left px-4 py-3 rounded-lg text-red-600 hover:bg-red-50">
            🚪 Logout
          </button>

        </div>

      </aside>

      {/* Main Content */}
      <div className="flex-1 min-w-0">

        {/* Topbar */}
        <header className="h-20 bg-white border-b flex items-center justify-between px-5 md:px-8">

          <div>
            <h2 className="font-semibold text-gray-800">
              Service Provider Panel
            </h2>

            <p className="text-xs text-gray-500">
              Manage your services and bookings
            </p>
          </div>

          <div className="flex items-center gap-4">

            <button className="relative text-xl">
              🔔

              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center">
                3
              </span>
            </button>

            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              👨‍🔧
            </div>

          </div>

        </header>

        {/* Mobile Navigation */}
        <div className="md:hidden bg-white border-b p-3 overflow-x-auto">

          <div className="flex gap-2 min-w-max">

            <NavLink
              to="/provider/dashboard"
              className={navStyle}
            >
              🏠 Dashboard
            </NavLink>

            <NavLink
              to="/provider/bookings"
              className={navStyle}
            >
              📋 Bookings
            </NavLink>

            <NavLink
              to="/provider/earnings"
              className={navStyle}
            >
              💰 Earnings
            </NavLink>

            <NavLink
              to="/provider/profile"
              className={navStyle}
            >
              👤 Profile
            </NavLink>

          </div>

        </div>

        {/* Current Provider Page */}
        <main>
          <Outlet />
        </main>

      </div>

    </div>
  );
}

export default ProviderLayout;