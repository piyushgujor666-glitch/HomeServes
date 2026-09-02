import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">

      <div className="max-w-7xl mx-auto px-6 py-4">

        <div className="flex items-center justify-between">

          {/* LOGO */}

          <NavLink
            to="/home"
            className="flex items-center gap-3"
          >

            <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center text-white text-2xl">
              ⌂
            </div>

            <h1 className="text-2xl font-bold text-green-700">
              HomeServe
            </h1>

          </NavLink>


          {/* NAVIGATION */}

          <nav className="hidden md:flex items-center gap-8 ml-50">

            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 font-semibold"
                  : "text-gray-600 hover:text-green-600"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 font-semibold"
                  : "text-gray-600 hover:text-green-600"
              }
            >
              Services
            </NavLink>

            <NavLink
              to="/bookings"
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 font-semibold"
                  : "text-gray-600 hover:text-green-600"
              }
            >
              Bookings
            </NavLink>

            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 font-semibold"
                  : "text-gray-600 hover:text-green-600"
              }
            >
              Profile
            </NavLink>

          </nav>

          <button
  className="relative text-gray-600 hover:text-green-600 transition mt-1"
>
  <FontAwesomeIcon
    icon={faBell}
    className="text-xl"
  />

  {/* Notification dot */}
  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
</button>

          {/* PROFILE */}

          <NavLink
            to="/profile"
            className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold hover:bg-green-200"
          >
            P
          </NavLink>

        </div>

      </div>

    </header>
  );
}

export default Header;