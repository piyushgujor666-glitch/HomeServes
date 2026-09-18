import React from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Users,
  Wrench,
  Package,
  IndianRupee,
  TrendingUp,
  Clock3,
  UserCheck,
  UserPlus,
  XCircle,
  ChevronRight,
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#FBFAF7] p-4 sm:p-6 lg:p-8">

      {/* Page Header */}
      <div className="mb-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <p className="mb-2 text-sm font-semibold text-[#0E6B5C]">
              Admin Panel
            </p>

            <h1 className="text-3xl font-bold tracking-tight text-[#16302B]">
              Dashboard
            </h1>

            <p className="mt-2 text-sm text-[#8A8A82]">
              Welcome back, Admin. Here's what's happening with HomeServe.
            </p>
          </div>

          <div className="flex w-fit items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            System Active
          </div>

        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

        {/* Users */}
        <div className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 transition duration-200 hover:-translate-y-1 hover:shadow-md">
          <div className="flex items-start justify-between">

            <div>
              <p className="text-sm font-medium text-[#8A8A82]">
                Total Users
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#16302B]">
                1,248
              </h2>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
              <Users
                size={22}
                className="text-blue-600"
              />
            </div>

          </div>

          <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-green-600">
            <TrendingUp size={15} />
            <span>12% from last month</span>
          </div>
        </div>

        {/* Workers */}
        <div className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 transition duration-200 hover:-translate-y-1 hover:shadow-md">
          <div className="flex items-start justify-between">

            <div>
              <p className="text-sm font-medium text-[#8A8A82]">
                Total Workers
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#16302B]">
                326
              </h2>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50">
              <Wrench
                size={22}
                className="text-[#0E6B5C]"
              />
            </div>

          </div>

          <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-green-600">
            <TrendingUp size={15} />
            <span>8% from last month</span>
          </div>
        </div>

        {/* Orders */}
        <div className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 transition duration-200 hover:-translate-y-1 hover:shadow-md">
          <div className="flex items-start justify-between">

            <div>
              <p className="text-sm font-medium text-[#8A8A82]">
                Total Orders
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#16302B]">
                2,845
              </h2>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50">
              <Package
                size={22}
                className="text-purple-600"
              />
            </div>

          </div>

          <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-green-600">
            <TrendingUp size={15} />
            <span>18% from last month</span>
          </div>
        </div>

        {/* Revenue */}
        <div className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 transition duration-200 hover:-translate-y-1 hover:shadow-md">
          <div className="flex items-start justify-between">

            <div>
              <p className="text-sm font-medium text-[#8A8A82]">
                Total Revenue
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#16302B]">
                ₹2.4L
              </h2>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50">
              <IndianRupee
                size={22}
                className="text-[#E08A3C]"
              />
            </div>

          </div>

          <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-green-600">
            <TrendingUp size={15} />
            <span>15% from last month</span>
          </div>
        </div>

      </div>

      {/* Main Dashboard Content */}
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">

        {/* Recent Orders */}
        <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 lg:col-span-2">

          <div className="flex items-center justify-between border-b border-[#EEECE5] p-6">

            <div>
              <h2 className="text-lg font-bold text-[#16302B]">
                Recent Orders
              </h2>

              <p className="mt-1 text-sm text-[#8A8A82]">
                Latest service orders
              </p>
            </div>

            <Link
              to="/admin/orders"
              className="hidden items-center gap-1 text-sm font-semibold text-[#0E6B5C] transition hover:text-[#16302B] sm:flex"
            >
              View All
              <ChevronRight size={16} />
            </Link>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full text-sm">

              <thead className="bg-[#FBFAF7]">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#8A8A82]">
                    Customer
                  </th>

                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#8A8A82]">
                    Service
                  </th>

                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#8A8A82]">
                    Worker
                  </th>

                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#8A8A82]">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-[#F0EEE8]">

                <tr className="transition hover:bg-[#FBFAF7]">
                  <td className="whitespace-nowrap px-6 py-4 font-semibold text-[#16302B]">
                    Rahul
                  </td>

                  <td className="whitespace-nowrap px-6 py-4 text-[#6B6B62]">
                    Plumbing
                  </td>

                  <td className="whitespace-nowrap px-6 py-4 text-[#6B6B62]">
                    Amit
                  </td>

                  <td className="whitespace-nowrap px-6 py-4">
                    <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700">
                      Completed
                    </span>
                  </td>
                </tr>

                <tr className="transition hover:bg-[#FBFAF7]">
                  <td className="whitespace-nowrap px-6 py-4 font-semibold text-[#16302B]">
                    Priya
                  </td>

                  <td className="whitespace-nowrap px-6 py-4 text-[#6B6B62]">
                    AC Repair
                  </td>

                  <td className="whitespace-nowrap px-6 py-4 text-[#6B6B62]">
                    Rohit
                  </td>

                  <td className="whitespace-nowrap px-6 py-4">
                    <span className="rounded-full bg-yellow-50 px-3 py-1.5 text-xs font-semibold text-yellow-700">
                      Pending
                    </span>
                  </td>
                </tr>

                <tr className="transition hover:bg-[#FBFAF7]">
                  <td className="whitespace-nowrap px-6 py-4 font-semibold text-[#16302B]">
                    Arjun
                  </td>

                  <td className="whitespace-nowrap px-6 py-4 text-[#6B6B62]">
                    Cleaning
                  </td>

                  <td className="whitespace-nowrap px-6 py-4 text-[#6B6B62]">
                    Suresh
                  </td>

                  <td className="whitespace-nowrap px-6 py-4">
                    <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
                      In Progress
                    </span>
                  </td>
                </tr>

              </tbody>

            </table>

          </div>

          {/* Mobile View All */}
          <div className="border-t border-[#EEECE5] p-4 sm:hidden">
            <Link
              to="/admin/orders"
              className="flex items-center justify-center gap-1 text-sm font-semibold text-[#0E6B5C]"
            >
              View All Orders
              <ChevronRight size={16} />
            </Link>
          </div>

        </div>

        {/* Quick Overview */}
        <div className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5">

          <div className="border-b border-[#EEECE5] p-6">
            <h2 className="text-lg font-bold text-[#16302B]">
              Quick Overview
            </h2>

            <p className="mt-1 text-sm text-[#8A8A82]">
              Current platform activity
            </p>
          </div>

          <div className="space-y-3 p-5">

            {/* Pending */}
            <div className="flex items-center justify-between rounded-xl bg-[#FBFAF7] p-4 transition hover:bg-[#F5F3EC]">
              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-yellow-50">
                  <Clock3
                    size={17}
                    className="text-yellow-600"
                  />
                </div>

                <span className="text-sm font-medium text-[#6B6B62]">
                  Pending Orders
                </span>

              </div>

              <span className="font-bold text-[#16302B]">
                42
              </span>
            </div>

            {/* Active Workers */}
            <div className="flex items-center justify-between rounded-xl bg-[#FBFAF7] p-4 transition hover:bg-[#F5F3EC]">
              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-50">
                  <UserCheck
                    size={17}
                    className="text-[#0E6B5C]"
                  />
                </div>

                <span className="text-sm font-medium text-[#6B6B62]">
                  Active Workers
                </span>

              </div>

              <span className="font-bold text-[#16302B]">
                218
              </span>
            </div>

            {/* New Users */}
            <div className="flex items-center justify-between rounded-xl bg-[#FBFAF7] p-4 transition hover:bg-[#F5F3EC]">
              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50">
                  <UserPlus
                    size={17}
                    className="text-blue-600"
                  />
                </div>

                <span className="text-sm font-medium text-[#6B6B62]">
                  New Users
                </span>

              </div>

              <span className="font-bold text-[#16302B]">
                86
              </span>
            </div>

            {/* Cancelled */}
            <div className="flex items-center justify-between rounded-xl bg-[#FBFAF7] p-4 transition hover:bg-[#F5F3EC]">
              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-50">
                  <XCircle
                    size={17}
                    className="text-red-600"
                  />
                </div>

                <span className="text-sm font-medium text-[#6B6B62]">
                  Cancelled Orders
                </span>

              </div>

              <span className="font-bold text-red-600">
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