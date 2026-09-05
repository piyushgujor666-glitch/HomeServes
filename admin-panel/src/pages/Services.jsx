import React from "react";
import {NavLink,Link} from "react-router-dom"

const Services = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-4 sm:p-6 lg:p-8">

      {/* Page Header */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Services
          </h1>

          <p className="mt-2 text-gray-500">
            Manage all HomeServe services.
          </p>
        </div>

        <NavLink className="px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
          + Add Service
        </NavLink>

      </div>


      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <p className="text-sm text-gray-500">
            Total Services
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            6
          </h2>
        </div>


        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <p className="text-sm text-gray-500">
            Active Services
          </p>

          <h2 className="mt-2 text-3xl font-bold text-green-600">
            5
          </h2>
        </div>


        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <p className="text-sm text-gray-500">
            Inactive Services
          </p>

          <h2 className="mt-2 text-3xl font-bold text-red-600">
            1
          </h2>
        </div>


        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <p className="text-sm text-gray-500">
            Total Bookings
          </p>

          <h2 className="mt-2 text-3xl font-bold text-blue-600">
            2,845
          </h2>
        </div>

      </div>


      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">


        {/* Plumbing */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">

          <div className="h-40 bg-blue-50 flex items-center justify-center">
            <span className="text-6xl">
              🔧
            </span>
          </div>

          <div className="p-6">

            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">
                Plumbing
              </h2>

              <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                Active
              </span>
            </div>

            <p className="mt-3 text-sm text-gray-500">
              Professional plumbing repair and maintenance services.
            </p>

            <div className="mt-4 flex justify-between text-sm">
              <span className="text-gray-500">
                Bookings
              </span>

              <span className="font-semibold text-gray-900">
                624
              </span>
            </div>

            <div className="mt-5 flex gap-3">
              <NavLink className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50">
                Edit
              </NavLink>

              <NavLink className="px-4 py-2 text-red-600 border border-red-200 rounded-lg text-sm font-medium hover:bg-red-50">
                Delete
              </NavLink>
            </div>

          </div>

        </div>


        {/* Cleaning */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">

          <div className="h-40 bg-green-50 flex items-center justify-center">
            <span className="text-6xl">
              🧹
            </span>
          </div>

          <div className="p-6">

            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">
                Cleaning
              </h2>

              <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                Active
              </span>
            </div>

            <p className="mt-3 text-sm text-gray-500">
              Home and office cleaning services by professionals.
            </p>

            <div className="mt-4 flex justify-between text-sm">
              <span className="text-gray-500">
                Bookings
              </span>

              <span className="font-semibold text-gray-900">
                518
              </span>
            </div>

            <div className="mt-5 flex gap-3">
              <NavLink className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50">
                Edit
              </NavLink>

              <NavLink className="px-4 py-2 text-red-600 border border-red-200 rounded-lg text-sm font-medium hover:bg-red-50">
                Delete
              </NavLink>
            </div>

          </div>

        </div>


        {/* Electrical */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">

          <div className="h-40 bg-yellow-50 flex items-center justify-center">
            <span className="text-6xl">
              ⚡
            </span>
          </div>

          <div className="p-6">

            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">
                Electrical
              </h2>

              <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                Active
              </span>
            </div>

            <p className="mt-3 text-sm text-gray-500">
              Electrical installation, repair and maintenance.
            </p>

            <div className="mt-4 flex justify-between text-sm">
              <span className="text-gray-500">
                Bookings
              </span>

              <span className="font-semibold text-gray-900">
                436
              </span>
            </div>

            <div className="mt-5 flex gap-3">
              <NavLink className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50">
                Edit
              </NavLink>

              <NavLink className="px-4 py-2 text-red-600 border border-red-200 rounded-lg text-sm font-medium hover:bg-red-50">
                Delete
              </NavLink>
            </div>

          </div>

        </div>


        {/* AC Repair */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">

          <div className="h-40 bg-cyan-50 flex items-center justify-center">
            <span className="text-6xl">
              ❄️
            </span>
          </div>

          <div className="p-6">

            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">
                AC Repair
              </h2>

              <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                Active
              </span>
            </div>

            <p className="mt-3 text-sm text-gray-500">
              AC servicing, repair and installation services.
            </p>

            <div className="mt-4 flex justify-between text-sm">
              <span className="text-gray-500">
                Bookings
              </span>

              <span className="font-semibold text-gray-900">
                391
              </span>
            </div>

            <div className="mt-5 flex gap-3">
              <NavLink className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50">
                Edit
              </NavLink>

              <NavLink className="px-4 py-2 text-red-600 border border-red-200 rounded-lg text-sm font-medium hover:bg-red-50">
                Delete
              </NavLink>
            </div>

          </div>

        </div>


        {/* Painting */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">

          <div className="h-40 bg-purple-50 flex items-center justify-center">
            <span className="text-6xl">
              🎨
            </span>
          </div>

          <div className="p-6">

            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">
                Painting
              </h2>

              <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                Active
              </span>
            </div>

            <p className="mt-3 text-sm text-gray-500">
              Interior and exterior painting services.
            </p>

            <div className="mt-4 flex justify-between text-sm">
              <span className="text-gray-500">
                Bookings
              </span>

              <span className="font-semibold text-gray-900">
                284
              </span>
            </div>

            <div className="mt-5 flex gap-3">
              <NavLink className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50">
                Edit
              </NavLink>

              <NavLink className="px-4 py-2 text-red-600 border border-red-200 rounded-lg text-sm font-medium hover:bg-red-50">
                Delete
              </NavLink>
            </div>

          </div>

        </div>


        {/* Appliance Repair */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">

          <div className="h-40 bg-orange-50 flex items-center justify-center">
            <span className="text-6xl">
              🔨
            </span>
          </div>

          <div className="p-6">

            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">
                Appliance Repair
              </h2>

              <span className="px-3 py-1 text-xs font-medium bg-red-100 text-red-700 rounded-full">
                Inactive
              </span>
            </div>

            <p className="mt-3 text-sm text-gray-500">
              Repair and maintenance for home appliances.
            </p>

            <div className="mt-4 flex justify-between text-sm">
              <span className="text-gray-500">
                Bookings
              </span>

              <span className="font-semibold text-gray-900">
                592
              </span>
            </div>

            <div className="mt-5 flex gap-3">
              <NavLink className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50">
                Edit
              </NavLink>

              <NavLink className="px-4 py-2 text-red-600 border border-red-200 rounded-lg text-sm font-medium hover:bg-red-50">
                Delete
              </NavLink>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Services;