import React from "react";
import {NavLink,Link} from "react-router-dom"

const Orders = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-4 sm:p-6 lg:p-8">

      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Orders
        </h1>

        <p className="mt-2 text-gray-500">
          Manage and monitor all HomeServe service orders.
        </p>
      </div>


      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

        {/* Total */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <p className="text-sm text-gray-500">
            Total Orders
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-2">
            2,845
          </h2>
        </div>


        {/* Pending */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <p className="text-sm text-gray-500">
            Pending
          </p>

          <h2 className="text-3xl font-bold text-yellow-600 mt-2">
            42
          </h2>
        </div>


        {/* In Progress */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <p className="text-sm text-gray-500">
            In Progress
          </p>

          <h2 className="text-3xl font-bold text-blue-600 mt-2">
            28
          </h2>
        </div>


        {/* Completed */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <p className="text-sm text-gray-500">
            Completed
          </p>

          <h2 className="text-3xl font-bold text-green-600 mt-2">
            2,763
          </h2>
        </div>

      </div>


      {/* Orders Table */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">

        {/* Table Header */}
        <div className="p-6 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              All Orders
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Recent service requests
            </p>
          </div>


          {/* Search */}
          <input
            type="text"
            placeholder="Search orders..."
            className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>


        {/* Table */}
        <div className="overflow-x-auto">

          <table className="w-full text-sm">

            <thead className="bg-gray-50">

              <tr>

                <th className="text-left px-6 py-4 font-semibold text-gray-600">
                  Order ID
                </th>

                <th className="text-left px-6 py-4 font-semibold text-gray-600">
                  Customer
                </th>

                <th className="text-left px-6 py-4 font-semibold text-gray-600">
                  Service
                </th>

                <th className="text-left px-6 py-4 font-semibold text-gray-600">
                  Worker
                </th>

                <th className="text-left px-6 py-4 font-semibold text-gray-600">
                  Amount
                </th>

                <th className="text-left px-6 py-4 font-semibold text-gray-600">
                  Status
                </th>

                <th className="text-left px-6 py-4 font-semibold text-gray-600">
                  Action
                </th>

              </tr>

            </thead>


            <tbody className="divide-y divide-gray-100">

              {/* Order 1 */}
              <tr className="hover:bg-gray-50">

                <td className="px-6 py-4 font-semibold text-blue-600">
                  #HS1001
                </td>

                <td className="px-6 py-4 text-gray-900">
                  Rahul Sharma
                </td>

                <td className="px-6 py-4 text-gray-600">
                  Plumbing
                </td>

                <td className="px-6 py-4 text-gray-600">
                  Amit Kumar
                </td>

                <td className="px-6 py-4 font-medium">
                  ₹800
                </td>

                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                    Completed
                  </span>
                </td>

                <td className="px-6 py-4">
                  <button className="text-blue-600 hover:underline">
                    View
                  </button>
                </td>

              </tr>


              {/* Order 2 */}
              <tr className="hover:bg-gray-50">

                <td className="px-6 py-4 font-semibold text-blue-600">
                  #HS1002
                </td>

                <td className="px-6 py-4 text-gray-900">
                  Priya Patel
                </td>

                <td className="px-6 py-4 text-gray-600">
                  AC Repair
                </td>

                <td className="px-6 py-4 text-gray-600">
                  Rohit Singh
                </td>

                <td className="px-6 py-4 font-medium">
                  ₹1,200
                </td>

                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">
                    Pending
                  </span>
                </td>

                <td className="px-6 py-4">
                  <NavLink className="text-blue-600 hover:underline">
                    View
                  </NavLink>
                </td>

              </tr>


              {/* Order 3 */}
              <tr className="hover:bg-gray-50">

                <td className="px-6 py-4 font-semibold text-blue-600">
                  #HS1003
                </td>

                <td className="px-6 py-4 text-gray-900">
                  Arjun Mehta
                </td>

                <td className="px-6 py-4 text-gray-600">
                  Cleaning
                </td>

                <td className="px-6 py-4 text-gray-600">
                  Suresh Kumar
                </td>

                <td className="px-6 py-4 font-medium">
                  ₹600
                </td>

                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                    In Progress
                  </span>
                </td>

                <td className="px-6 py-4">
                  <NavLink className="text-blue-600 hover:underline">
                    View
                  </NavLink>
                </td>

              </tr>


              {/* Order 4 */}
              <tr className="hover:bg-gray-50">

                <td className="px-6 py-4 font-semibold text-blue-600">
                  #HS1004
                </td>

                <td className="px-6 py-4 text-gray-900">
                  Neha Verma
                </td>

                <td className="px-6 py-4 text-gray-600">
                  Electrical
                </td>

                <td className="px-6 py-4 text-gray-600">
                  Vikash Yadav
                </td>

                <td className="px-6 py-4 font-medium">
                  ₹950
                </td>

                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700">
                    Cancelled
                  </span>
                </td>

                <td className="px-6 py-4">
                  <NavLink className="text-blue-600 hover:underline">
                    View
                  </NavLink>
                </td>

              </tr>


              {/* Order 5 */}
              <tr className="hover:bg-gray-50">

                <td className="px-6 py-4 font-semibold text-blue-600">
                  #HS1005
                </td>

                <td className="px-6 py-4 text-gray-900">
                  Karan Singh
                </td>

                <td className="px-6 py-4 text-gray-600">
                  Painting
                </td>

                <td className="px-6 py-4 text-gray-600">
                  Manish Gupta
                </td>

                <td className="px-6 py-4 font-medium">
                  ₹2,500
                </td>

                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                    Completed
                  </span>
                </td>

                <td className="px-6 py-4">
                  <NavLink className="text-blue-600 hover:underline">
                    View
                  </NavLink>
                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default Orders;