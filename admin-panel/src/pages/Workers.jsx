import React from "react";
import {NavLink,Link} from "react-router-dom"

const Workers = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-4 sm:p-6 lg:p-8">

      {/* Page Header */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Workers
          </h1>

          <p className="mt-2 text-gray-500">
            Manage all HomeServe service workers.
          </p>
        </div>

        <NavLink className="px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
          + Add Worker
        </NavLink>

      </div>


      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

        {/* Total Workers */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <p className="text-sm text-gray-500">
            Total Workers
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            326
          </h2>

          <p className="mt-2 text-sm text-green-600">
            ↑ 8% this month
          </p>
        </div>


        {/* Active Workers */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <p className="text-sm text-gray-500">
            Active Workers
          </p>

          <h2 className="mt-2 text-3xl font-bold text-green-600">
            218
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Currently available
          </p>
        </div>


        {/* Busy Workers */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <p className="text-sm text-gray-500">
            Busy Workers
          </p>

          <h2 className="mt-2 text-3xl font-bold text-blue-600">
            82
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Working on orders
          </p>
        </div>


        {/* Pending Verification */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <p className="text-sm text-gray-500">
            Pending Verification
          </p>

          <h2 className="mt-2 text-3xl font-bold text-yellow-600">
            26
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Need approval
          </p>
        </div>

      </div>


      {/* Workers Table */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">

        {/* Table Header */}
        <div className="p-6 border-b border-gray-200">

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                All Workers
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Service professionals registered on HomeServe.
              </p>
            </div>

            {/* Search */}
            <input
              type="text"
              placeholder="Search workers..."
              className="w-full lg:w-72 px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

        </div>


        {/* Table */}
        <div className="overflow-x-auto">

          <table className="w-full text-sm">

            <thead className="bg-gray-50">

              <tr>

                <th className="text-left px-6 py-4 font-semibold text-gray-600">
                  Worker
                </th>

                <th className="text-left px-6 py-4 font-semibold text-gray-600">
                  Service
                </th>

                <th className="text-left px-6 py-4 font-semibold text-gray-600">
                  Phone
                </th>

                <th className="text-left px-6 py-4 font-semibold text-gray-600">
                  Orders
                </th>

                <th className="text-left px-6 py-4 font-semibold text-gray-600">
                  Status
                </th>

                <th className="text-left px-6 py-4 font-semibold text-gray-600">
                  Verification
                </th>

                <th className="text-left px-6 py-4 font-semibold text-gray-600">
                  Action
                </th>

              </tr>

            </thead>


            <tbody className="divide-y divide-gray-100">

              {/* Worker 1 */}
              <tr className="hover:bg-gray-50">

                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="font-semibold text-blue-600">
                        AK
                      </span>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900">
                        Amit Kumar
                      </p>

                      <p className="text-xs text-gray-500">
                        Worker #W001
                      </p>
                    </div>

                  </div>
                </td>

                <td className="px-6 py-4 text-gray-600">
                  Plumbing
                </td>

                <td className="px-6 py-4 text-gray-600">
                  +91 98765 43210
                </td>

                <td className="px-6 py-4 font-medium">
                  124
                </td>

                <td className="px-6 py-4">
                  <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                    Available
                  </span>
                </td>

                <td className="px-6 py-4">
                  <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                    Verified
                  </span>
                </td>

                <td className="px-6 py-4">
                  <NavLink className="text-blue-600 hover:underline">
                    View
                  </NavLink>
                </td>

              </tr>


              {/* Worker 2 */}
              <tr className="hover:bg-gray-50">

                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                      <span className="font-semibold text-purple-600">
                        RS
                      </span>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900">
                        Rohit Singh
                      </p>

                      <p className="text-xs text-gray-500">
                        Worker #W002
                      </p>
                    </div>

                  </div>
                </td>

                <td className="px-6 py-4 text-gray-600">
                  AC Repair
                </td>

                <td className="px-6 py-4 text-gray-600">
                  +91 91234 56789
                </td>

                <td className="px-6 py-4 font-medium">
                  98
                </td>

                <td className="px-6 py-4">
                  <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">
                    Busy
                  </span>
                </td>

                <td className="px-6 py-4">
                  <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                    Verified
                  </span>
                </td>

                <td className="px-6 py-4">
                  <NavLink className="text-blue-600 hover:underline">
                    View
                  </NavLink>
                </td>

              </tr>


              {/* Worker 3 */}
              <tr className="hover:bg-gray-50">

                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="font-semibold text-green-600">
                        SK
                      </span>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900">
                        Suresh Kumar
                      </p>

                      <p className="text-xs text-gray-500">
                        Worker #W003
                      </p>
                    </div>

                  </div>
                </td>

                <td className="px-6 py-4 text-gray-600">
                  Cleaning
                </td>

                <td className="px-6 py-4 text-gray-600">
                  +91 99887 66554
                </td>

                <td className="px-6 py-4 font-medium">
                  87
                </td>

                <td className="px-6 py-4">
                  <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">
                    Busy
                  </span>
                </td>

                <td className="px-6 py-4">
                  <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                    Verified
                  </span>
                </td>

                <td className="px-6 py-4">
                  <NavLink className="text-blue-600 hover:underline">
                    View
                  </NavLink>
                </td>

              </tr>


              {/* Worker 4 */}
              <tr className="hover:bg-gray-50">

                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                      <span className="font-semibold text-yellow-600">
                        VY
                      </span>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900">
                        Vikash Yadav
                      </p>

                      <p className="text-xs text-gray-500">
                        Worker #W004
                      </p>
                    </div>

                  </div>
                </td>

                <td className="px-6 py-4 text-gray-600">
                  Electrical
                </td>

                <td className="px-6 py-4 text-gray-600">
                  +91 90123 45678
                </td>

                <td className="px-6 py-4 font-medium">
                  73
                </td>

                <td className="px-6 py-4">
                  <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                    Available
                  </span>
                </td>

                <td className="px-6 py-4">
                  <span className="px-3 py-1 text-xs font-medium bg-yellow-100 text-yellow-700 rounded-full">
                    Pending
                  </span>
                </td>

                <td className="px-6 py-4">
                  <NavLink className="text-blue-600 hover:underline">
                    View
                  </NavLink>
                </td>

              </tr>


              {/* Worker 5 */}
              <tr className="hover:bg-gray-50">

                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                      <span className="font-semibold text-orange-600">
                        MG
                      </span>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900">
                        Manish Gupta
                      </p>

                      <p className="text-xs text-gray-500">
                        Worker #W005
                      </p>
                    </div>

                  </div>
                </td>

                <td className="px-6 py-4 text-gray-600">
                  Painting
                </td>

                <td className="px-6 py-4 text-gray-600">
                  +91 93456 78901
                </td>

                <td className="px-6 py-4 font-medium">
                  64
                </td>

                <td className="px-6 py-4">
                  <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">
                    Offline
                  </span>
                </td>

                <td className="px-6 py-4">
                  <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                    Verified
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

export default Workers;