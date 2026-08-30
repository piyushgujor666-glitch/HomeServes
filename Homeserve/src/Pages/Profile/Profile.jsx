import React from "react";
import { NavLink } from "react-router-dom";

import Layout from "../../Components/Layout.jsx";

function Profile() {

  return (
    <Layout>

      <div className="max-w-4xl mx-auto px-6 py-10">

        <h1 className="text-3xl font-bold text-gray-800">
          My Profile
        </h1>

        <p className="text-gray-500 mt-2">
          View your account information.
        </p>


        {/* Profile */}

        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm mt-8 p-8">

          {/* Avatar */}

          <div className="flex items-center gap-5">

            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-3xl font-bold text-green-700">
              P
            </div>

            <div>

              <h2 className="text-2xl font-bold text-gray-800">
                Piyush
              </h2>

              <p className="text-gray-500">
                HomeServe Customer
              </p>

            </div>

          </div>


          {/* Information */}

          <div className="mt-8 grid md:grid-cols-2 gap-5">

            <div className="bg-gray-50 p-5 rounded-xl">

              <p className="text-sm text-gray-500">
                Full Name
              </p>

              <p className="font-semibold text-gray-800 mt-1">
                Piyush
              </p>

            </div>


            <div className="bg-gray-50 p-5 rounded-xl">

              <p className="text-sm text-gray-500">
                Email
              </p>

              <p className="font-semibold text-gray-800 mt-1">
                user@example.com
              </p>

            </div>


            <div className="bg-gray-50 p-5 rounded-xl">

              <p className="text-sm text-gray-500">
                Phone
              </p>

              <p className="font-semibold text-gray-800 mt-1">
                +91 98765 43210
              </p>

            </div>


            <div className="bg-gray-50 p-5 rounded-xl">

              <p className="text-sm text-gray-500">
                Location
              </p>

              <p className="font-semibold text-gray-800 mt-1">
                India
              </p>

            </div>

          </div>


          {/* Edit */}

          <button
            className="mt-8 bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700"
          >
            Edit Profile
          </button>

        </div>


        {/* Logout */}

        <div className="mt-6">

          <NavLink
            to="/login"
            className="inline-block border border-red-300 text-red-600 px-6 py-3 rounded-xl font-semibold hover:bg-red-50"
          >
            Logout
          </NavLink>

        </div>

      </div>

    </Layout>
  );
}

export default Profile;