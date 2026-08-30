import React from "react";
import { NavLink } from "react-router-dom";

import Layout from "../../Components/Layout.jsx";

function Bookings() {

  return (
    <Layout>

      <div className="max-w-7xl mx-auto px-6 py-10">

        <h1 className="text-3xl font-bold text-gray-800">
          My Bookings
        </h1>

        <p className="text-gray-500 mt-2">
          View your home service bookings.
        </p>


        {/* Booking Card */}

        <div className="mt-8 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

            <div>

              <div className="flex items-center gap-3">

                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-2xl">
                  🔧
                </div>

                <div>

                  <h2 className="text-xl font-bold text-gray-800">
                    Plumbing
                  </h2>

                  <p className="text-sm text-gray-500">
                    Home Service
                  </p>

                </div>

              </div>

              <div className="mt-5 space-y-2 text-sm text-gray-600">

                <p>
                  📅 Date: 15 September 2026
                </p>

                <p>
                  📍 Address: Your home address
                </p>

                <p>
                  💰 Price: ₹299
                </p>

              </div>

            </div>


            <div>

              <span className="inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold">
                Pending
              </span>

            </div>

          </div>

        </div>


        {/* Another empty state */}

        <div className="mt-6 text-center">

          <NavLink
            to="/services"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700"
          >
            Book Another Service
          </NavLink>

        </div>

      </div>

    </Layout>
  );
}

export default Bookings;