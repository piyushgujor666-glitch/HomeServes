import React from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Users,
  UserPlus,
  UserCheck,
  BriefcaseBusiness,
  Clock3,
  Search,
  Eye,
  Phone,
  CheckCircle2,
  CircleDot,
  ShieldCheck,
} from "lucide-react";

const Workers = () => {
  return (
    <div className="min-h-screen bg-[#FBFAF7] p-4 sm:p-6 lg:p-8">

      {/* Page Header */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

        <div>
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-[#16302B] flex items-center justify-center shadow-sm">
              <Users className="w-5 h-5 text-white" />
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-[#16302B]">
              Workers
            </h1>
          </div>

          <p className="mt-2 text-sm text-[#8A8A82]">
            Manage all HomeServe service workers.
          </p>
        </div>

        <NavLink
          className="inline-flex items-center justify-center gap-2
          px-5 py-3 bg-[#0E6B5C] text-white rounded-xl
          font-semibold shadow-sm
          hover:bg-[#0B5A4D] hover:shadow-md transition-all"
        >
          <UserPlus className="w-5 h-5" />
          Add Worker
        </NavLink>

      </div>


      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">

        {/* Total Workers */}
        <div className="bg-white border border-[#E3E1DA] rounded-2xl p-5 shadow-sm hover:shadow-md transition">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm font-medium text-[#8A8A82]">
                Total Workers
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#16302B]">
                326
              </h2>

              <p className="mt-2 text-xs font-medium text-[#0E6B5C]">
                ↑ 8% this month
              </p>
            </div>

            <div className="w-11 h-11 rounded-xl bg-[#16302B]/10 flex items-center justify-center">
              <Users className="w-5 h-5 text-[#16302B]" />
            </div>

          </div>

        </div>


        {/* Active Workers */}
        <div className="bg-white border border-[#E3E1DA] rounded-2xl p-5 shadow-sm hover:shadow-md transition">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm font-medium text-[#8A8A82]">
                Active Workers
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#0E6B5C]">
                218
              </h2>

              <p className="mt-2 text-xs text-[#8A8A82]">
                Currently available
              </p>
            </div>

            <div className="w-11 h-11 rounded-xl bg-[#0E6B5C]/10 flex items-center justify-center">
              <UserCheck className="w-5 h-5 text-[#0E6B5C]" />
            </div>

          </div>

        </div>


        {/* Busy Workers */}
        <div className="bg-white border border-[#E3E1DA] rounded-2xl p-5 shadow-sm hover:shadow-md transition">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm font-medium text-[#8A8A82]">
                Busy Workers
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#0E6B5C]">
                82
              </h2>

              <p className="mt-2 text-xs text-[#8A8A82]">
                Working on orders
              </p>
            </div>

            <div className="w-11 h-11 rounded-xl bg-[#0E6B5C]/10 flex items-center justify-center">
              <BriefcaseBusiness className="w-5 h-5 text-[#0E6B5C]" />
            </div>

          </div>

        </div>


        {/* Pending Verification */}
        <div className="bg-white border border-[#E3E1DA] rounded-2xl p-5 shadow-sm hover:shadow-md transition">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm font-medium text-[#8A8A82]">
                Pending Verification
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#E08A3C]">
                26
              </h2>

              <p className="mt-2 text-xs text-[#8A8A82]">
                Need approval
              </p>
            </div>

            <div className="w-11 h-11 rounded-xl bg-[#E08A3C]/10 flex items-center justify-center">
              <Clock3 className="w-5 h-5 text-[#E08A3C]" />
            </div>

          </div>

        </div>

      </div>


      {/* Workers Table */}
      <div className="bg-white border border-[#E3E1DA] rounded-2xl shadow-sm overflow-hidden">

        {/* Table Header */}
        <div className="p-5 sm:p-6 border-b border-[#EEECE5]">

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

            <div>
              <h2 className="text-lg font-bold text-[#16302B]">
                All Workers
              </h2>

              <p className="text-sm text-[#8A8A82] mt-1">
                Service professionals registered on HomeServe.
              </p>
            </div>


            {/* Search */}
            <div className="relative w-full lg:w-72">

              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A8A82]" />

              <input
                type="text"
                placeholder="Search workers..."
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

          <table className="w-full text-sm min-w-[1000px]">

            <thead className="bg-[#FBFAF7]">

              <tr>

                <th className="text-left px-6 py-4 font-semibold text-[#6F716B]">
                  Worker
                </th>

                <th className="text-left px-6 py-4 font-semibold text-[#6F716B]">
                  Service
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
                  Verification
                </th>

                <th className="text-left px-6 py-4 font-semibold text-[#6F716B]">
                  Action
                </th>

              </tr>

            </thead>


            <tbody className="divide-y divide-[#EEECE5]">

              {/* Worker 1 */}
              <tr className="hover:bg-[#FBFAF7] transition">

                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-xl bg-[#0E6B5C]/10 flex items-center justify-center">
                      <span className="font-bold text-[#0E6B5C]">
                        AK
                      </span>
                    </div>

                    <div>
                      <p className="font-semibold text-[#16302B]">
                        Amit Kumar
                      </p>

                      <p className="text-xs text-[#8A8A82]">
                        Worker #W001
                      </p>
                    </div>

                  </div>
                </td>

                <td className="px-6 py-4 text-[#6F716B]">
                  Plumbing
                </td>

                <td className="px-6 py-4 text-[#6F716B]">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#A5A49D]" />
                    +91 98765 43210
                  </div>
                </td>

                <td className="px-6 py-4 font-semibold text-[#16302B]">
                  124
                </td>

                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-[#0E6B5C]/10 text-[#0E6B5C] rounded-full">
                    <CircleDot className="w-3.5 h-3.5" />
                    Available
                  </span>
                </td>

                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-[#0E6B5C]/10 text-[#0E6B5C] rounded-full">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified
                  </span>
                </td>

                <td className="px-6 py-4">
                  <NavLink className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-[#0E6B5C] font-semibold hover:bg-[#0E6B5C]/10 transition">
                    <Eye className="w-4 h-4" />
                    View
                  </NavLink>
                </td>

              </tr>


              {/* Worker 2 */}
              <tr className="hover:bg-[#FBFAF7] transition">

                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-xl bg-[#E08A3C]/10 flex items-center justify-center">
                      <span className="font-bold text-[#E08A3C]">
                        RS
                      </span>
                    </div>

                    <div>
                      <p className="font-semibold text-[#16302B]">
                        Rohit Singh
                      </p>

                      <p className="text-xs text-[#8A8A82]">
                        Worker #W002
                      </p>
                    </div>

                  </div>
                </td>

                <td className="px-6 py-4 text-[#6F716B]">
                  AC Repair
                </td>

                <td className="px-6 py-4 text-[#6F716B]">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#A5A49D]" />
                    +91 91234 56789
                  </div>
                </td>

                <td className="px-6 py-4 font-semibold text-[#16302B]">
                  98
                </td>

                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-[#E08A3C]/10 text-[#C36F20] rounded-full">
                    <BriefcaseBusiness className="w-3.5 h-3.5" />
                    Busy
                  </span>
                </td>

                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-[#0E6B5C]/10 text-[#0E6B5C] rounded-full">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified
                  </span>
                </td>

                <td className="px-6 py-4">
                  <NavLink className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-[#0E6B5C] font-semibold hover:bg-[#0E6B5C]/10 transition">
                    <Eye className="w-4 h-4" />
                    View
                  </NavLink>
                </td>

              </tr>


              {/* Worker 3 */}
              <tr className="hover:bg-[#FBFAF7] transition">

                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-xl bg-[#16302B]/10 flex items-center justify-center">
                      <span className="font-bold text-[#16302B]">
                        SK
                      </span>
                    </div>

                    <div>
                      <p className="font-semibold text-[#16302B]">
                        Suresh Kumar
                      </p>

                      <p className="text-xs text-[#8A8A82]">
                        Worker #W003
                      </p>
                    </div>

                  </div>
                </td>

                <td className="px-6 py-4 text-[#6F716B]">
                  Cleaning
                </td>

                <td className="px-6 py-4 text-[#6F716B]">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#A5A49D]" />
                    +91 99887 66554
                  </div>
                </td>

                <td className="px-6 py-4 font-semibold text-[#16302B]">
                  87
                </td>

                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-[#E08A3C]/10 text-[#C36F20] rounded-full">
                    <BriefcaseBusiness className="w-3.5 h-3.5" />
                    Busy
                  </span>
                </td>

                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-[#0E6B5C]/10 text-[#0E6B5C] rounded-full">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified
                  </span>
                </td>

                <td className="px-6 py-4">
                  <NavLink className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-[#0E6B5C] font-semibold hover:bg-[#0E6B5C]/10 transition">
                    <Eye className="w-4 h-4" />
                    View
                  </NavLink>
                </td>

              </tr>


              {/* Worker 4 */}
              <tr className="hover:bg-[#FBFAF7] transition">

                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-xl bg-[#E08A3C]/10 flex items-center justify-center">
                      <span className="font-bold text-[#E08A3C]">
                        VY
                      </span>
                    </div>

                    <div>
                      <p className="font-semibold text-[#16302B]">
                        Vikash Yadav
                      </p>

                      <p className="text-xs text-[#8A8A82]">
                        Worker #W004
                      </p>
                    </div>

                  </div>
                </td>

                <td className="px-6 py-4 text-[#6F716B]">
                  Electrical
                </td>

                <td className="px-6 py-4 text-[#6F716B]">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#A5A49D]" />
                    +91 90123 45678
                  </div>
                </td>

                <td className="px-6 py-4 font-semibold text-[#16302B]">
                  73
                </td>

                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-[#0E6B5C]/10 text-[#0E6B5C] rounded-full">
                    <CircleDot className="w-3.5 h-3.5" />
                    Available
                  </span>
                </td>

                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-[#E08A3C]/10 text-[#C36F20] rounded-full">
                    <Clock3 className="w-3.5 h-3.5" />
                    Pending
                  </span>
                </td>

                <td className="px-6 py-4">
                  <NavLink className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-[#0E6B5C] font-semibold hover:bg-[#0E6B5C]/10 transition">
                    <Eye className="w-4 h-4" />
                    View
                  </NavLink>
                </td>

              </tr>


              {/* Worker 5 */}
              <tr className="hover:bg-[#FBFAF7] transition">

                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-xl bg-[#16302B]/10 flex items-center justify-center">
                      <span className="font-bold text-[#16302B]">
                        MG
                      </span>
                    </div>

                    <div>
                      <p className="font-semibold text-[#16302B]">
                        Manish Gupta
                      </p>

                      <p className="text-xs text-[#8A8A82]">
                        Worker #W005
                      </p>
                    </div>

                  </div>
                </td>

                <td className="px-6 py-4 text-[#6F716B]">
                  Painting
                </td>

                <td className="px-6 py-4 text-[#6F716B]">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#A5A49D]" />
                    +91 93456 78901
                  </div>
                </td>

                <td className="px-6 py-4 font-semibold text-[#16302B]">
                  64
                </td>

                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-gray-100 text-gray-600 rounded-full">
                    Offline
                  </span>
                </td>

                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-[#0E6B5C]/10 text-[#0E6B5C] rounded-full">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified
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

export default Workers;