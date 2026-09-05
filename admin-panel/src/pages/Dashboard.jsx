import React from "react";
import {NavLink,Link} from "react-router-dom"

const Dashboard = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-4 sm:p-6 lg:p-8">

      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Dashboard
        </h1>

        <p className="mt-2 text-gray-500">
          Welcome back, Admin. Here's what's happening with HomeServe.
        </p>
      </div>


      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* Users */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Total Users
              </p>

              <h2 className="mt-2 text-3xl font-bold text-gray-900">
                1,248
              </h2>
            </div>

            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              👥
            </div>

          </div>

          <p className="mt-4 text-sm text-green-600">
            ↑ 12% from last month
          </p>
        </div>


        {/* Workers */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Total Workers
              </p>

              <h2 className="mt-2 text-3xl font-bold text-gray-900">
                326
              </h2>
            </div>

            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              🧑‍🔧
            </div>

          </div>

          <p className="mt-4 text-sm text-green-600">
            ↑ 8% from last month
          </p>
        </div>


        {/* Orders */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Total Orders
              </p>

              <h2 className="mt-2 text-3xl font-bold text-gray-900">
                2,845
              </h2>
            </div>

            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              📦
            </div>

          </div>

          <p className="mt-4 text-sm text-green-600">
            ↑ 18% from last month
          </p>
        </div>


        {/* Revenue */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Total Revenue
              </p>

              <h2 className="mt-2 text-3xl font-bold text-gray-900">
                ₹2.4L
              </h2>
            </div>

            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              💰
            </div>

          </div>

          <p className="mt-4 text-sm text-green-600">
            ↑ 15% from last month
          </p>
        </div>

      </div>


      {/* Main Dashboard Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">


        {/* Recent Orders */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm">

          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              Recent Orders
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Latest service orders
            </p>
          </div>


          <div className="overflow-x-auto">

            <table className="w-full text-sm">

              <thead className="bg-gray-50">
                <tr>

                  <th className="text-left px-6 py-3 font-medium text-gray-500">
                    Customer
                  </th>

                  <th className="text-left px-6 py-3 font-medium text-gray-500">
                    Service
                  </th>

                  <th className="text-left px-6 py-3 font-medium text-gray-500">
                    Worker
                  </th>

                  <th className="text-left px-6 py-3 font-medium text-gray-500">
                    Status
                  </th>

                </tr>
              </thead>


              <tbody className="divide-y divide-gray-100">

                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Rahul
                  </td>

                  <td className="px-6 py-4 text-gray-500">
                    Plumbing
                  </td>

                  <td className="px-6 py-4 text-gray-500">
                    Amit
                  </td>

                  <td className="px-6 py-4">
                    <span className="px-3 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                      Completed
                    </span>
                  </td>
                </tr>


                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Priya
                  </td>

                  <td className="px-6 py-4 text-gray-500">
                    AC Repair
                  </td>

                  <td className="px-6 py-4 text-gray-500">
                    Rohit
                  </td>

                  <td className="px-6 py-4">
                    <span className="px-3 py-1 text-xs font-medium text-yellow-700 bg-yellow-100 rounded-full">
                      Pending
                    </span>
                  </td>
                </tr>


                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Arjun
                  </td>

                  <td className="px-6 py-4 text-gray-500">
                    Cleaning
                  </td>

                  <td className="px-6 py-4 text-gray-500">
                    Suresh
                  </td>

                  <td className="px-6 py-4">
                    <span className="px-3 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full">
                      In Progress
                    </span>
                  </td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>


        {/* Quick Overview */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm">

          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              Quick Overview
            </h2>
          </div>


          <div className="p-6 space-y-6">

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">
                Pending Orders
              </span>

              <span className="font-semibold text-gray-900">
                42
              </span>
            </div>


            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">
                Active Workers
              </span>

              <span className="font-semibold text-gray-900">
                218
              </span>
            </div>


            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">
                New Users
              </span>

              <span className="font-semibold text-gray-900">
                86
              </span>
            </div>


            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">
                Cancelled Orders
              </span>

              <span className="font-semibold text-red-600">
                12
              </span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;