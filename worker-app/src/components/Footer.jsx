import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-8">

        {/* Main Footer */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

          {/* Logo / About */}
          <div>
            <NavLink
              to="/dashboard"
              className="text-xl font-bold text-gray-900"
            >
              HomeServe
            </NavLink>

            <p className="mt-2 max-w-sm text-sm text-gray-500">
              Your trusted platform for professional home service workers.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">

            <NavLink
              to="/dashboard"
              className="text-gray-500 hover:text-black"
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/orders"
              className="text-gray-500 hover:text-black"
            >
              Orders
            </NavLink>

            <NavLink
              to="/profile"
              className="text-gray-500 hover:text-black"
            >
              Profile
            </NavLink>

            <NavLink
              to="/settings"
              className="text-gray-500 hover:text-black"
            >
              Settings
            </NavLink>

          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col gap-2 border-t border-gray-100 pt-5 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} HomeServe. All rights reserved.
          </p>

          <div className="flex gap-5">
            <button className="hover:text-black">
              Privacy Policy
            </button>

            <button className="hover:text-black">
              Terms & Conditions
            </button>

            <button className="hover:text-black">
              Help
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;