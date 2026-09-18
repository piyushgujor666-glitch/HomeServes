import React from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Users as UsersIcon,
  UserPlus,
  UserCheck,
  UserX,
  UserRoundPlus,
  Search,
  Eye,
  TrendingUp,
  Mail,
  Phone,
} from "lucide-react";

const Users = () => {
  return (
    <div className="min-h-screen bg-[#FBFAF7] p-4 sm:p-6 lg:p-8">

      {/* Page Header */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

        <div>
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-[#16302B] flex items-center justify-center shadow-sm">
              <UsersIcon className="w-5 h-5 text-white" />
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-[#16302B]">
              Users
            </h1>
          </div>

          <p className="mt-2 text-sm text-[#8A8A82]">
            Manage all HomeServe customers.
          </p>
        </div>

        <NavLink
          className="inline-flex items-center justify-center gap-2
          px-5 py-3 bg-[#0E6B5C] text-white rounded-xl
          font-semibold shadow-sm
          hover:bg-[#0B5A4D] hover:shadow-md transition-all"
        >
          <UserPlus className="w-5 h-5" />
          Add User
        </NavLink>

      </div>


      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">

        {/* Total Users */}
        <div className="bg-white border border-[#E3E1DA] rounded-2xl p-5 shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm font-medium text-[#8A8A82]">
                Total Users
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#16302B]">
                1,248
              </h2>

              <p className="mt-2 text-xs font-medium text-[#0E6B5C] flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" />
                12% this month
              </p>
            </div>

            <div className="w-11 h-11 rounded-xl bg-[#16302B]/10 flex items-center justify-center">
              <UsersIcon className="w-5 h-5 text-[#16302B]" />
            </div>

          </div>
        </div>


        {/* Active Users */}
        <div className="bg-white border border-[#E3E1DA] rounded-2xl p-5 shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm font-medium text-[#8A8A82]">
                Active Users
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#0E6B5C]">
                1,156
              </h2>

              <p className="mt-2 text-xs text-[#8A8A82]">
                Currently active
              </p>
            </div>

            <div className="w-11 h-11 rounded-xl bg-[#0E6B5C]/10 flex items-center justify-center">
              <UserCheck className="w-5 h-5 text-[#0E6B5C]" />
            </div>

          </div>
        </div>


        {/* New Users */}
        <div className="bg-white border border-[#E3E1DA] rounded-2xl p-5 shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm font-medium text-[#8A8A82]">
                New Users
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#E08A3C]">
                86
              </h2>

              <p className="mt-2 text-xs text-[#8A8A82]">
                This month
              </p>
            </div>

            <div className="w-11 h-11 rounded-xl bg-[#E08A3C]/10 flex items-center justify-center">
              <UserRoundPlus className="w-5 h-5 text-[#E08A3C]" />
            </div>

          </div>
        </div>


        {/* Blocked Users */}
        <div className="bg-white border border-[#E3E1DA] rounded-2xl p-5 shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm font-medium text-[#8A8A82]">
                Blocked Users
              </p>

              <h2 className="mt-2 text-3xl font-bold text-red-600">
                6
              </h2>

              <p className="mt-2 text-xs text-[#8A8A82]">
                Currently blocked
              </p>
            </div>

            <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center">
              <UserX className="w-5 h-5 text-red-600" />
            </div>

          </div>
        </div>

      </div>


      {/* Users Table */}
      <div className="bg-white border border-[#E3E1DA] rounded-2xl shadow-sm overflow-hidden">

        {/* Table Header */}
        <div className="p-5 sm:p-6 border-b border-[#EEECE5]">

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

            <div>
              <h2 className="text-lg font-bold text-[#16302B]">
                All Users
              </h2>

              <p className="text-sm text-[#8A8A82] mt-1">
                Customer accounts registered on HomeServe.
              </p>
            </div>


            {/* Search */}
            <div className="relative w-full lg:w-72">

              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A8A82]" />

              <input
                type="text"
                placeholder="Search users..."
                className="w-full pl-10 pr-4 py-2.5
                bg-[#FBFAF7]
                border border-[#E3E1DA]
                rounded-xl
                outline-none
                text-sm text-[#16302B]
                placeholder-[#A5A49D]
                focus:border-[#0E6B5C]
                focus:ring-4 focus:ring-[#0E6B5C]/10
                transition"
              />

            </div>

          </div>

        </div>


        {/* Table */}
        <div className="overflow-x-auto">

          <table className="w-full text-sm min-w-[900px]">

            <thead className="bg-[#FBFAF7]">

              <tr>

                <th className="text-left px-6 py-4 font-semibold text-[#6F716B]">
                  User
                </th>

                <th className="text-left px-6 py-4 font-semibold text-[#6F716B]">
                  Email
                </th>

                <th className="text-left px-6 py-4 font-semibold text-[#6F716B]">
                  Phone
                </th>

                <th className="text-left px-6 py-4 font-semibold text-[#6F716B]">
                  Orders
                </th>

                <th className="text-left px-6 py-4 font-semibold text-[#6F716B]">
                  Status
                </th>

                <th className="text-left px-6 py-4 font-semibold text-[#6F716B]">
                  Action
                </th>

              </tr>

            </thead>


            <tbody className="divide-y divide-[#EEECE5]">

              {/* User 1 */}
              <tr className="hover:bg-[#FBFAF7] transition">

                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-xl bg-[#0E6B5C]/10 flex items-center justify-center">
                      <span className="font-bold text-[#0E6B5C]">
                        RS
                      </span>
                    </div>

                    <div>
                      <p className="font-semibold text-[#16302B]">
                        Rahul Sharma
                      </p>

                      <p className="text-xs text-[#8A8A82]">
                        User #1001
                      </p>
                    </div>

                  </div>
                </td>

                <td className="px-6 py-4 text-[#6F716B]">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#A5A49D]" />
                    rahul@example.com
                  </div>
                </td>

                <td className="px-6 py-4 text-[#6F716B]">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#A5A49D]" />
                    +91 98765 43210
                  </div>
                </td>

                <td className="px-6 py-4 font-semibold text-[#16302B]">
                  24
                </td>

                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-[#0E6B5C]/10 text-[#0E6B5C] rounded-full">
                    <UserCheck className="w-3.5 h-3.5" />
                    Active
                  </span>
                </td>

                <td className="px-6 py-4">
                  <NavLink className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-[#0E6B5C] font-semibold hover:bg-[#0E6B5C]/10 transition">
                    <Eye className="w-4 h-4" />
                    View
                  </NavLink>
                </td>

              </tr>


              {/* User 2 */}
              <tr className="hover:bg-[#FBFAF7] transition">

                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-xl bg-[#E08A3C]/10 flex items-center justify-center">
                      <span className="font-bold text-[#E08A3C]">
                        PP
                      </span>
                    </div>

                    <div>
                      <p className="font-semibold text-[#16302B]">
                        Priya Patel
                      </p>

                      <p className="text-xs text-[#8A8A82]">
                        User #1002
                      </p>
                    </div>

                  </div>
                </td>

                <td className="px-6 py-4 text-[#6F716B]">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#A5A49D]" />
                    priya@example.com
                  </div>
                </td>

                <td className="px-6 py-4 text-[#6F716B]">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#A5A49D]" />
                    +91 91234 56789
                  </div>
                </td>

                <td className="px-6 py-4 font-semibold text-[#16302B]">
                  18
                </td>

                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-[#0E6B5C]/10 text-[#0E6B5C] rounded-full">
                    <UserCheck className="w-3.5 h-3.5" />
                    Active
                  </span>
                </td>

                <td className="px-6 py-4">
                  <NavLink className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-[#0E6B5C] font-semibold hover:bg-[#0E6B5C]/10 transition">
                    <Eye className="w-4 h-4" />
                    View
                  </NavLink>
                </td>

              </tr>


              {/* User 3 */}
              <tr className="hover:bg-[#FBFAF7] transition">

                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-xl bg-[#16302B]/10 flex items-center justify-center">
                      <span className="font-bold text-[#16302B]">
                        AM
                      </span>
                    </div>

                    <div>
                      <p className="font-semibold text-[#16302B]">
                        Arjun Mehta
                      </p>

                      <p className="text-xs text-[#8A8A82]">
                        User #1003
                      </p>
                    </div>

                  </div>
                </td>

                <td className="px-6 py-4 text-[#6F716B]">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#A5A49D]" />
                    arjun@example.com
                  </div>
                </td>

                <td className="px-6 py-4 text-[#6F716B]">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#A5A49D]" />
                    +91 99887 66554
                  </div>
                </td>

                <td className="px-6 py-4 font-semibold text-[#16302B]">
                  31
                </td>

                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-[#0E6B5C]/10 text-[#0E6B5C] rounded-full">
                    <UserCheck className="w-3.5 h-3.5" />
                    Active
                  </span>
                </td>

                <td className="px-6 py-4">
                  <NavLink className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-[#0E6B5C] font-semibold hover:bg-[#0E6B5C]/10 transition">
                    <Eye className="w-4 h-4" />
                    View
                  </NavLink>
                </td>

              </tr>


              {/* User 4 */}
              <tr className="hover:bg-[#FBFAF7] transition">

                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                      <span className="font-bold text-red-600">
                        NV
                      </span>
                    </div>

                    <div>
                      <p className="font-semibold text-[#16302B]">
                        Neha Verma
                      </p>

                      <p className="text-xs text-[#8A8A82]">
                        User #1004
                      </p>
                    </div>

                  </div>
                </td>

                <td className="px-6 py-4 text-[#6F716B]">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#A5A49D]" />
                    neha@example.com
                  </div>
                </td>

                <td className="px-6 py-4 text-[#6F716B]">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#A5A49D]" />
                    +91 90123 45678
                  </div>
                </td>

                <td className="px-6 py-4 font-semibold text-[#16302B]">
                  9
                </td>

                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-red-50 text-red-600 rounded-full">
                    <UserX className="w-3.5 h-3.5" />
                    Blocked
                  </span>
                </td>

                <td className="px-6 py-4">
                  <NavLink className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-[#0E6B5C] font-semibold hover:bg-[#0E6B5C]/10 transition">
                    <Eye className="w-4 h-4" />
                    View
                  </NavLink>
                </td>

              </tr>


              {/* User 5 */}
              <tr className="hover:bg-[#FBFAF7] transition">

                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-xl bg-[#E08A3C]/10 flex items-center justify-center">
                      <span className="font-bold text-[#E08A3C]">
                        KS
                      </span>
                    </div>

                    <div>
                      <p className="font-semibold text-[#16302B]">
                        Karan Singh
                      </p>

                      <p className="text-xs text-[#8A8A82]">
                        User #1005
                      </p>
                    </div>

                  </div>
                </td>

                <td className="px-6 py-4 text-[#6F716B]">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#A5A49D]" />
                    karan@example.com
                  </div>
                </td>

                <td className="px-6 py-4 text-[#6F716B]">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#A5A49D]" />
                    +91 93456 78901
                  </div>
                </td>

                <td className="px-6 py-4 font-semibold text-[#16302B]">
                  15
                </td>

                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-[#0E6B5C]/10 text-[#0E6B5C] rounded-full">
                    <UserCheck className="w-3.5 h-3.5" />
                    Active
                  </span>
                </td>

                <td className="px-6 py-4">
                  <NavLink className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-[#0E6B5C] font-semibold hover:bg-[#0E6B5C]/10 transition">
                    <Eye className="w-4 h-4" />
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