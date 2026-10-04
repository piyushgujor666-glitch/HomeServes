import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/FIX.jpg";
import useTheme from "../../context/theme";
import { Phone } from "lucide-react";

function Header() {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const handleTheme = () => {
    if (themeMode === "light") {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <header
      className="
        bg-white dark:bg-gray-900
        border-b border-gray-200 dark:border-gray-700
        shadow-sm
        rounded-[30px]
        mt-1 ml-6 mr-6
        zoom-animation zoomanimation
        transition-colors duration-300
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4">

        <div className="flex items-center justify-between">

          {/* LOGO */}

          <NavLink
            to="/home"
            className="flex items-center gap-2"
          >
            <img
              src={logo}
              alt="FixmaTe"
              className="
                w-10 h-10
                transition-all duration-500
                zoomanimation
                hover:scale-110
                hover:drop-shadow-[0_0_15px_rgba(34,197,94,0.8)]
              "
            />

            <h1 className="text-2xl font-bold text-green-700">
              Fixma🔨e
            </h1>
          </NavLink>


          {/* NAVIGATION */}

          <nav className="hidden md:flex items-center gap-8 ml-50">

            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 font-semibold"
                  : "text-gray-700 dark:text-gray-200 hover:text-green-600"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 font-semibold"
                  : "text-gray-700 dark:text-gray-200 hover:text-green-600"
              }
            >
              Services
            </NavLink>

            <NavLink
              to="/bookings"
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 font-semibold"
                  : "text-gray-700 dark:text-gray-200 hover:text-green-600"
              }
            >
              Bookings
            </NavLink>

          </nav>


          {/* NOTIFICATION */}

          <Link
            to="#"
            className="
              relative
              text-gray-600 dark:text-gray-300
              hover:text-green-600
              transition
              mt-1
            "
          >
            <FontAwesomeIcon
              icon={faBell}
              className="text-xl"
            />

            {/* Notification dot */}

            <span
              className="
                absolute
                -top-1
                -right-1
                w-2.5
                h-2.5
                bg-red-500
                rounded-full
              "
            ></span>
          </Link>


          {/* PROFILE */}

          <Link
            to="/profile"
            className="
              w-10 h-10
              bg-green-100 dark:bg-green-900
              rounded-full
              flex items-center justify-center
              text-green-700 dark:text-green-300
              font-bold
              transition-colors
            "
          >
            P
          </Link>


          <div>

          <button
            onClick={handleTheme}
            className="
              px-4 py-2
              rounded-lg
              bg-gray-200 dark:bg-gray-700
              text-black dark:text-white
              hover:bg-gray-300 dark:hover:bg-gray-600
              transition-colors
              zoomanimation
            "
          >
            {themeMode === "light" ? "🌙" : "☀️"}
          </button>
          <NavLink
  to="tel:+919998091751"
  className="fixed bottom-20 right-6 z-50 flex items-center gap-3 
             rounded-full bg-red-600 px-5 py-3 text-white 
             font-semibold shadow-lg hover:bg-red-700 
             hover:scale-105 transition-all duration-300"
>
  <Phone size={20} />
  <span>24/7 Helpline</span>
</NavLink>
          </div>

        </div>

      </div>
    </header>
  );
}

export default Header;