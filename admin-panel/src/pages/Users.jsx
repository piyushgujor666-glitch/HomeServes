import React from "react";
import {NavLink,Link} from "react-router-dom"

const Users = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-4 sm:p-6 lg:p-8">

      {/* Page Header */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Users
          </h1>

          <p className="mt-2 text-gray-500">
            Manage all HomeServe customers.
          </p>
        </div>

        <NavLink className="px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
          + Add User
        </NavLink>

      </div>


      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

        {/* Total Users */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <p className="text-sm text-gray-500">
            Total Users
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            1,248
          </h2>

          <p className="mt-2 text-sm text-green-600">
            ↑ 12% this month
          </p>
        </div>


        {/* Active Users */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <p className="text-sm text-gray-500">
            Active Users
          </p>

          <h2 className="mt-2 text-3xl font-bold text-green-600">
            1,156
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Currently active
          </p>
        </div>


        {/* New Users */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <p className="text-sm text-gray-500">
            New Users
          </p>

          <h2 className="mt-2 text-3xl font-bold text-blue-600">
            86
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            This month
          </p>
        </div>


        {/* Blocked Users */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <p className="text-sm text-gray-500">
            Blocked Users
          </p>

          <h2 className="mt-2 text-3xl font-bold text-red-600">
            6
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Currently blocked
          </p>
        </div>

      </div>


      {/* Users Table */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">

        {/* Table Header */}
        <div className="p-6 border-b border-gray-200">

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                All Users
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Customer accounts registered on HomeServe.
              </p>
            </div>


            {/* Search */}
            <input
              type="text"
              placeholder="Search users..."
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
                  User
                </th>

                <th className="text-left px-6 py-4 font-semibold text-gray-600">
                  Email
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
                  Action
                </th>

              </tr>

            </thead>


            <tbody className="divide-y divide-gray-100">

              {/* User 1 */}
              <tr className="hover:bg-gray-50">

                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="font-semibold text-blue-600">
                        RS
                      </span>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900">
                        Rahul Sharma
                      </p>

                      <p className="text-xs text-gray-500">
                        User #1001
                      </p>
                    </div>

                  </div>
                </td>

                <td className="px-6 py-4 text-gray-600">
                  rahul@example.com
                </td>

                <td className="px-6 py-4 text-gray-600">
                  +91 98765 43210
                </td>

                <td className="px-6 py-4 font-medium">
                  24
                </td>

                <td className="px-6 py-4">
                  <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                    Active
                  </span>
                </td>

                <td className="px-6 py-4">
                  <NavLink className="text-blue-600 hover:underline">
                    View
                  </NavLink>
                </td>

              </tr>


              {/* User 2 */}
              <tr className="hover:bg-gray-50">

                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                      <span className="font-semibold text-purple-600">
                        PP
                      </span>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900">
                        Priya Patel
                      </p>

                      <p className="text-xs text-gray-500">
                        User #1002
                      </p>
                    </div>

                  </div>
                </td>

                <td className="px-6 py-4 text-gray-600">
                  priya@example.com
                </td>

                <td className="px-6 py-4 text-gray-600">
                  +91 91234 56789
                </td>

                <td className="px-6 py-4 font-medium">
                  18
                </td>

                <td className="px-6 py-4">
                  <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                    Active
                  </span>
                </td>

                <td className="px-6 py-4">
                  <NavLink className="text-blue-600 hover:underline">
                    View
                  </NavLink>
                </td>

              </tr>


              {/* User 3 */}
              <tr className="hover:bg-gray-50">

                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="font-semibold text-green-600">
                        AM
                      </span>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900">
                        Arjun Mehta
                      </p>

                      <p className="text-xs text-gray-500">
                        User #1003
                      </p>
                    </div>

                  </div>
                </td>

                <td className="px-6 py-4 text-gray-600">
                  arjun@example.com
                </td>

                <td className="px-6 py-4 text-gray-600">
                  +91 99887 66554
                </td>

                <td className="px-6 py-4 font-medium">
                  31
                </td>

                <td className="px-6 py-4">
                  <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                    Active
                  </span>
                </td>

                <td className="px-6 py-4">
                  <NavLink className="text-blue-600 hover:underline">
                    View
                  </NavLink>
                </td>

              </tr>


              {/* User 4 */}
              <tr className="hover:bg-gray-50">

                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                      <span className="font-semibold text-yellow-600">
                        NV
                      </span>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900">
                        Neha Verma
                      </p>

                      <p className="text-xs text-gray-500">
                        User #1004
                      </p>
                    </div>

                  </div>
                </td>

                <td className="px-6 py-4 text-gray-600">
                  neha@example.com
                </td>

                <td className="px-6 py-4 text-gray-600">
                  +91 90123 45678
                </td>

                <td className="px-6 py-4 font-medium">
                  9
                </td>

                <td className="px-6 py-4">
                  <span className="px-3 py-1 text-xs font-medium bg-red-100 text-red-700 rounded-full">
                    Blocked
                  </span>
                </td>

                <td className="px-6 py-4">
                  <NavLink className="text-blue-600 hover:underline">
                    View
                  </NavLink>
                </td>

              </tr>


              {/* User 5 */}
              <tr className="hover:bg-gray-50">

                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                      <span className="font-semibold text-orange-600">
                        KS
                      </span>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900">
                        Karan Singh
                      </p>

                      <p className="text-xs text-gray-500">
                        User #1005
                      </p>
                    </div>

                  </div>
                </td>

                <td className="px-6 py-4 text-gray-600">
                  karan@example.com
                </td>

                <td className="px-6 py-4 text-gray-600">
                  +91 93456 78901
                </td>

                <td className="px-6 py-4 font-medium">
                  15
                </td>

                <td className="px-6 py-4">
                  <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                    Active
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

export default Users;