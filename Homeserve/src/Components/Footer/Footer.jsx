import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.jpeg"

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 hover:scale-102
             hover:drop-shadow-[0_0_20px_rgba(255,0,0,0.8)] rounded-[20px] ml-10 mr-10 mb-10 zoomanimation">

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {/* LOGO */}

          <div>

            <NavLink to="/home" className="flex items-center gap-3 " > 
              <img src={Logo} alt="Fixma🔨e Logo" className="w-15 transition-all duration-300
             hover:scale-110 zoom-animation transition-all duration-100
             hover:drop-shadow-[0_0_15px_rgba(34,197,94,0.8)] height-10 " /> 
              <h1 className="text-2xl font-bold text-green-700"> Fixma🔨e </h1> 
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
            © 2026 Fixma🔨e. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;