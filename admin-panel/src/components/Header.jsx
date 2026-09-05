import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">

            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">
                🏠
              </span>
            </div>

            <div>
              <h1 className="text-lg font-bold text-gray-900">
                HomeServe
              </h1>

              <p className="text-xs text-gray-500">
                Admin Panel
              </p>
            </div>

          </div>


          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-2">

            {/* Dashboard */}
            <NavLink
              to="/admin/dashboard"
              className={({ isActive }) =>
                
                isActive
                  ? "px-2 text-blue-600 text-medium bg-white/80 backdrop-blur-lg border border-white/30 shadow-sm rounded-2xl h-8 w-30 flex items-center justify-center"
                  : "px-1 text-gray-600 hover:bg-gray-100"
              }
            >
              Dashboard
            </NavLink>


            {/* Orders */}
            <NavLink
              to="/admin/order"
              className={({ isActive }) =>
                isActive
                  ? "px-2 text-blue-600 text-medium bg-white/80 backdrop-blur-lg border border-white/30 shadow-sm rounded-2xl h-8 w-30 flex items-center justify-center"
                  : "px-1 text-gray-600 hover:bg-gray-100"
              }
            >
              Orders
            </NavLink>


            {/* Services */}
            <NavLink
              to="/admin/services"
              className={({ isActive }) =>
                isActive
                  ? "px-2 text-blue-600 text-medium bg-white/80 backdrop-blur-lg border border-white/30 shadow-sm rounded-2xl h-8 w-30 flex items-center justify-center"
                  : "px-1 text-gray-600 hover:bg-gray-100"
              }
            >
              Services
            </NavLink>


            {/* Users */}
            <NavLink
              to="/admin/users"
              className={({ isActive }) =>
                isActive
                  ? "px-2 text-blue-600 text-medium bg-white/80 backdrop-blur-lg border border-white/30 shadow-sm rounded-2xl h-8 w-30 flex items-center justify-center"
                  : "px-1 text-gray-600 hover:bg-gray-100"
              }
            >
              Users
            </NavLink>


            {/* Workers */}
            <NavLink
              to="/admin/workers"
              className={({ isActive }) =>
                isActive
                  ? "px-2 text-blue-600 text-medium bg-white/80 backdrop-blur-lg border border-white/30 shadow-sm rounded-2xl h-8 w-30 flex items-center justify-center"
                  : "px-1 text-gray-600 hover:bg-gray-100"
              }
            >
              Workers
            </NavLink>

          </nav>


          {/* Right Side */}
          <div className="flex items-center gap-3">

            {/* Notification */}
            <button className="relative w-10 h-10 rounded-lg hover:bg-gray-100">
              🔔
            </button>


            {/* Admin Profile */}
            <div className="flex items-center gap-2">

              <NavLink className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center"
              to="/admin/adminprofile"
              >
                <span className="text-white text-sm font-semibold">
                  A
                </span>
              </NavLink>

              <div className="hidden lg:block">
                <p className="text-sm font-semibold text-gray-900">
                  Admin
                </p>

                <p className="text-xs text-gray-500">
                  Administrator
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;