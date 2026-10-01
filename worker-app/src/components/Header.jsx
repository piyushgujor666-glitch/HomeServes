import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/FIX.jpg"

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="flex h-16 items-center justify-between px-6">

        {/* Logo */}
<div className="flex items-center gap-3">
  <img
    src={logo}
    alt="FixMate Logo"
    className="h-10 w-10 rounded-lg object-contain"
  />

  <NavLink
    to="/dashboard"
    className="text-2xl font-bold text-gray-900"
  >
    Fix<span className="text-[#0E6B5C]">maTe</span>
  </NavLink>
</div>

        {/* Navigation */}
        <nav className="hidden items-center gap-2 md:flex">

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `rounded-lg px-4 py-2 text-sm font-medium transition ${
                isActive
                  ? "bg-black text-white"
                  : "text-gray-600 hover:bg-gray-100 hover:text-black"
              }`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/orders"
            className={({ isActive }) =>
              `rounded-lg px-4 py-2 text-sm font-medium transition ${
                isActive
                  ? "bg-black text-white"
                  : "text-gray-600 hover:bg-gray-100 hover:text-black"
              }`
            }
          >
            Orders
          </NavLink>

        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Notification */}
          <button
            type="button"
            className="relative flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100"
          >
            🔔

            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500"></span>
          </button>

          {/* Worker Profile */}
          <NavLink
            to="/profile"
            className="flex items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-gray-100"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200">
              👤
            </div>

            <div className="hidden text-left sm:block">
              <p className="text-sm font-semibold text-gray-900">
                Worker
              </p>

              <p className="text-xs text-gray-500">
                Service Professional
              </p>
            </div>
          </NavLink>

          {/* Logout */}
          <button
            type="button"
            onClick={handleLogout}
            className="hidden rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 sm:block"
          >
            Logout
          </button>

        </div>
      </div>
    </header>
  );
};

export default Header;