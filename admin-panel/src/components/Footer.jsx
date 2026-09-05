import React from "react";
import {NavLink,Link} from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-10">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* HomeServe */}
          <div>
            <h2 className="text-xl font-bold">
              HomeServe
            </h2>

            <p className="mt-3 text-sm text-gray-400 leading-6">
              Home service management made simple.
              Manage customers, workers and orders
              from one place.
            </p>
          </div>


          {/* Admin Panel */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Admin Panel
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-gray-400">

              <li>
                Dashboard
              </li>

              <li>
                Users
              </li>

              <li>
                Workers
              </li>

              <li>
                Orders
              </li>

              <li>
                Services
              </li>

            </ul>
          </div>


          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Contact
            </h3>

            <div className="mt-4 space-y-3 text-sm text-gray-400">

              <p>
                📧 admin@homeserve.com
              </p>

              <p>
                📞 +91 98765 43210
              </p>

              <p>
                📍 India
              </p>

            </div>
          </div>

        </div>


        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">

          <p className="text-sm text-gray-400">
            © 2026 HomeServe. All rights reserved.
          </p>

          <p className="text-sm text-gray-500">
            Admin Panel
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;