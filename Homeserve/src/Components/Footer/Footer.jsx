import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {/* LOGO */}

          <div>

            <NavLink
              to="/home"
              className="flex items-center gap-3"
            >

              <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center text-white text-2xl">
                ⌂
              </div>

              <h2 className="text-xl font-bold text-white">
                HomeServe
              </h2>

            </NavLink>

            <p className="mt-4 text-sm text-gray-400">
              Reliable home services,
              <br />
              just a click away.
            </p>

          </div>


          {/* QUICK LINKS */}

          <div>

            <h3 className="text-white font-semibold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-sm">

              <NavLink
                to="/home"
                className="hover:text-green-400"
              >
                Home
              </NavLink>

              <NavLink
                to="/services"
                className="hover:text-green-400"
              >
                Services
              </NavLink>

              <NavLink
                to="/bookings"
                className="hover:text-green-400"
              >
                Bookings
              </NavLink>

              <NavLink
                to="/profile"
                className="hover:text-green-400"
              >
                Profile
              </NavLink>

            </div>

          </div>


          {/* SERVICES */}

          <div>

            <h3 className="text-white font-semibold mb-4">
              Our Services
            </h3>

            <div className="flex flex-col gap-3 text-sm text-gray-400">

              <p>🔧 Home Repair</p>
              <p>🧹 Cleaning</p>
              <p>⚡ Electrical</p>
              <p>🚰 Plumbing</p>

            </div>

          </div>


          {/* CONTACT */}

          <div>

            <h3 className="text-white font-semibold mb-4">
              Contact Us
            </h3>

            <div className="flex flex-col gap-3 text-sm text-gray-400">

              <p>📧 support@homeserve.com</p>
              <p>📞 +91 98765 43210</p>
              <p>📍 India</p>

            </div>

          </div>

        </div>


        {/* COPYRIGHT */}

        <div className="border-t border-gray-700 mt-10 pt-6 text-center">

          <p className="text-sm text-gray-500">
            © 2026 HomeServe. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;