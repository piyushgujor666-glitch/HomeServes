import React from "react";
import { NavLink, Link } from "react-router-dom";
import {
  ClipboardList,
  Clock3,
  LoaderCircle,
  CheckCircle2,
  XCircle,
  Search,
  Eye,
  ShoppingBag,
} from "lucide-react";

const Orders = () => {
  return (
    <div className="min-h-screen bg-[#FBFAF7] p-4 sm:p-6 lg:p-8">

      {/* Page Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-11 h-11 rounded-xl bg-[#16302B] flex items-center justify-center shadow-sm">
            <ShoppingBag className="w-5 h-5 text-white" />
          </div>

          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#16302B]">
              Orders
            </h1>

            <p className="text-sm text-[#8A8A82] mt-1">
              Manage and monitor all HomeServe service orders.
            </p>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">

        {/* Total */}
        <div className="bg-white border border-[#E3E1DA] rounded-2xl p-5 shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-[#8A8A82]">
                Total Orders
              </p>

              <h2 className="text-3xl font-bold text-[#16302B] mt-2">
                2,845
              </h2>
            </div>

            <div className="w-11 h-11 rounded-xl bg-[#16302B]/10 flex items-center justify-center">
              <ClipboardList className="w-5 h-5 text-[#16302B]" />
            </div>
          </div>
        </div>

        {/* Pending */}
        <div className="bg-white border border-[#E3E1DA] rounded-2xl p-5 shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-[#8A8A82]">
                Pending
              </p>

              <h2 className="text-3xl font-bold text-[#D4872F] mt-2">
                42
              </h2>
            </div>

            <div className="w-11 h-11 rounded-xl bg-[#E08A3C]/10 flex items-center justify-center">
              <Clock3 className="w-5 h-5 text-[#E08A3C]" />
            </div>
          </div>
        </div>

        {/* In Progress */}
        <div className="bg-white border border-[#E3E1DA] rounded-2xl p-5 shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-[#8A8A82]">
                In Progress
              </p>

              <h2 className="text-3xl font-bold text-[#0E6B5C] mt-2">
                28
              </h2>
            </div>

            <div className="w-11 h-11 rounded-xl bg-[#0E6B5C]/10 flex items-center justify-center">
              <LoaderCircle className="w-5 h-5 text-[#0E6B5C]" />
            </div>
          </div>
        </div>

        {/* Completed */}
        <div className="bg-white border border-[#E3E1DA] rounded-2xl p-5 shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-[#8A8A82]">
                Completed
              </p>

              <h2 className="text-3xl font-bold text-[#0E6B5C] mt-2">
                2,763
              </h2>
            </div>

            <div className="w-11 h-11 rounded-xl bg-[#0E6B5C]/10 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-[#0E6B5C]" />
            </div>
          </div>
        </div>

      </div>

      {/* Orders Table */}
      <div className="bg-white border border-[#E3E1DA] rounded-2xl shadow-sm overflow-hidden">

        {/* Table Header */}
        <div className="p-5 sm:p-6 border-b border-[#EEECE5] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

          <div>
            <h2 className="text-lg font-bold text-[#16302B]">
              All Orders
            </h2>

            <p className="text-sm text-[#8A8A82] mt-1">
              Recent service requests
            </p>
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A8A82]" />

            <input
              type="text"
              placeholder="Search orders..."
              className="w-full pl-10 pr-4 py-2.5
              bg-[#FBFAF7]
              border border-[#E3E1DA]
              rounded-xl
              text-sm text-[#16302B]
              placeholder-[#A5A49D]
              outline-none
              transition
              focus:border-[#0E6B5C]
              focus:ring-4 focus:ring-[#0E6B5C]/10"
            />
          </div>

        </div>

        {/* Table */}
        <div className="overflow-x-auto">

          <table className="w-full text-sm min-w-[900px]">

            <thead className="bg-[#FBFAF7]">
              <tr>

                <th className="text-left px-6 py-4 font-semibold text-[#6F716B]">
                  Order ID
                </th>

                <th className="text-left px-6 py-4 font-semibold text-[#6F716B]">
                  Customer
                </th>

                <th className="text-left px-6 py-4 font-semibold text-[#6F716B]">
                  Service
                </th>

                <th className="text-left px-6 py-4 font-semibold text-[#6F716B]">
                  Worker
                </th>

                <th className="text-left px-6 py-4 font-semibold text-[#6F716B]">
                  Amount
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

              {/* Order 1 */}
              <tr className="hover:bg-[#FBFAF7] transition">

                <td className="px-6 py-4 font-bold text-[#0E6B5C]">
                  #HS1001
                </td>

                <td className="px-6 py-4 font-medium text-[#16302B]">
                  Rahul Sharma
                </td>

                <td className="px-6 py-4 text-[#6F716B]">
                  Plumbing
                </td>

                <td className="px-6 py-4 text-[#6F716B]">
                  Amit Kumar
                </td>

                <td className="px-6 py-4 font-semibold text-[#16302B]">
                  ₹800
                </td>

                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#0E6B5C]/10 text-[#0E6B5C]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Completed
                  </span>
                </td>

                <td className="px-6 py-4">
                  <button className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-[#0E6B5C] font-semibold hover:bg-[#0E6B5C]/10 transition">
                    <Eye className="w-4 h-4" />
                    View
                  </button>
                </td>

              </tr>

              {/* Order 2 */}
              <tr className="hover:bg-[#FBFAF7] transition">

                <td className="px-6 py-4 font-bold text-[#0E6B5C]">
                  #HS1002
                </td>

                <td className="px-6 py-4 font-medium text-[#16302B]">
                  Priya Patel
                </td>

                <td className="px-6 py-4 text-[#6F716B]">
                  AC Repair
                </td>

                <td className="px-6 py-4 text-[#6F716B]">
                  Rohit Singh
                </td>

                <td className="px-6 py-4 font-semibold text-[#16302B]">
                  ₹1,200
                </td>

                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#E08A3C]/10 text-[#C36F20]">
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

              {/* Order 3 */}
              <tr className="hover:bg-[#FBFAF7] transition">

                <td className="px-6 py-4 font-bold text-[#0E6B5C]">
                  #HS1003
                </td>

                <td className="px-6 py-4 font-medium text-[#16302B]">
                  Arjun Mehta
                </td>

                <td className="px-6 py-4 text-[#6F716B]">
                  Cleaning
                </td>

                <td className="px-6 py-4 text-[#6F716B]">
                  Suresh Kumar
                </td>

                <td className="px-6 py-4 font-semibold text-[#16302B]">
                  ₹600
                </td>

                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#0E6B5C]/10 text-[#0E6B5C]">
                    <LoaderCircle className="w-3.5 h-3.5" />
                    In Progress
                  </span>
                </td>

                <td className="px-6 py-4">
                  <NavLink className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-[#0E6B5C] font-semibold hover:bg-[#0E6B5C]/10 transition">
                    <Eye className="w-4 h-4" />
                    View
                  </NavLink>
                </td>

              </tr>

              {/* Order 4 */}
              <tr className="hover:bg-[#FBFAF7] transition">

                <td className="px-6 py-4 font-bold text-[#0E6B5C]">
                  #HS1004
                </td>

                <td className="px-6 py-4 font-medium text-[#16302B]">
                  Neha Verma
                </td>

                <td className="px-6 py-4 text-[#6F716B]">
                  Electrical
                </td>

                <td className="px-6 py-4 text-[#6F716B]">
                  Vikash Yadav
                </td>

                <td className="px-6 py-4 font-semibold text-[#16302B]">
                  ₹950
                </td>

                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-red-50 text-red-600">
                    <XCircle className="w-3.5 h-3.5" />
                    Cancelled
                  </span>
                </td>

                <td className="px-6 py-4">
                  <NavLink className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-[#0E6B5C] font-semibold hover:bg-[#0E6B5C]/10 transition">
                    <Eye className="w-4 h-4" />
                    View
                  </NavLink>
                </td>

              </tr>

              {/* Order 5 */}
              <tr className="hover:bg-[#FBFAF7] transition">

                <td className="px-6 py-4 font-bold text-[#0E6B5C]">
                  #HS1005
                </td>

                <td className="px-6 py-4 font-medium text-[#16302B]">
                  Karan Singh
                </td>

                <td className="px-6 py-4 text-[#6F716B]">
                  Painting
                </td>

                <td className="px-6 py-4 text-[#6F716B]">
                  Manish Gupta
                </td>

                <td className="px-6 py-4 font-semibold text-[#16302B]">
                  ₹2,500
                </td>

                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#0E6B5C]/10 text-[#0E6B5C]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Completed
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

export default Orders;