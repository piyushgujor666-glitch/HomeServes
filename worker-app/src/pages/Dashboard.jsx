import React from "react";
import { NavLink } from "react-router-dom";
import Layout from "../components/Layout";

const Dashboard = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 p-6 md:p-8">

        {/* Welcome Section */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">
              Welcome back 👋
            </p>

            <h1 className="mt-1 text-3xl font-bold text-gray-900">
              Worker Name
            </h1>

            <p className="mt-1 text-gray-500">
              Here's what's happening with your work today.
            </p>
          </div>

          {/* Availability */}
          <div className="flex w-fit items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm">
            <span className="h-3 w-3 rounded-full bg-green-500"></span>

            <div>
              <p className="text-sm font-semibold text-gray-900">
                You're Available
              </p>

              <p className="text-xs text-gray-500">
                Ready to receive orders
              </p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {/* New Orders */}
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  New Orders
                </p>

                <h2 className="mt-2 text-3xl font-bold text-gray-900">
                  5
                </h2>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                📦
              </div>
            </div>

            <p className="mt-4 text-xs font-medium text-blue-600">
              2 new today
            </p>
          </div>

          {/* Completed */}
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  Completed Jobs
                </p>

                <h2 className="mt-2 text-3xl font-bold text-gray-900">
                  126
                </h2>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-2xl">
                ✅
              </div>
            </div>

            <p className="mt-4 text-xs font-medium text-green-600">
              +8 this month
            </p>
          </div>

          {/* Earnings */}
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  This Month
                </p>

                <h2 className="mt-2 text-3xl font-bold text-gray-900">
                  ₹18,500
                </h2>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-50 text-2xl">
                💰
              </div>
            </div>

            <p className="mt-4 text-xs font-medium text-green-600">
              +12.5% from last month
            </p>
          </div>

          {/* Rating */}
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  Rating
                </p>

                <h2 className="mt-2 text-3xl font-bold text-gray-900">
                  4.8
                </h2>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-2xl">
                ⭐
              </div>
            </div>

            <p className="mt-4 text-xs font-medium text-orange-600">
              From 98 reviews
            </p>
          </div>

        </div>

        {/* Main Content */}
        <div className="grid gap-6 lg:grid-cols-3">

          {/* Recent Orders */}
          <div className="rounded-2xl bg-white shadow-sm lg:col-span-2">

            <div className="flex items-center justify-between border-b border-gray-100 p-5">
              <div>
                <h2 className="text-lg font-bold text-gray-900">
                  Recent Orders
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Your latest service requests
                </p>
              </div>

              <NavLink
                to="/orders"
                className="text-sm font-semibold text-black hover:underline"
              >
                View All →
              </NavLink>
            </div>

            {/* Order 1 */}
            <div className="flex flex-col gap-4 border-b border-gray-100 p-5 sm:flex-row sm:items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl">
                🔧
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">
                  Plumbing Repair
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Customer: Rahul Sharma
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  📍 Delhi • Today, 10:30 AM
                </p>
              </div>

              <div className="text-left sm:text-right">
                <p className="font-semibold text-gray-900">
                  ₹650
                </p>

                <span className="mt-1 inline-block rounded-full bg-yellow-50 px-3 py-1 text-xs font-medium text-yellow-700">
                  Pending
                </span>
              </div>
            </div>

            {/* Order 2 */}
            <div className="flex flex-col gap-4 border-b border-gray-100 p-5 sm:flex-row sm:items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-xl">
                ❄️
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">
                  AC Repair
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Customer: Amit Kumar
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  📍 Delhi • Yesterday, 3:00 PM
                </p>
              </div>

              <div className="text-left sm:text-right">
                <p className="font-semibold text-gray-900">
                  ₹1,200
                </p>

                <span className="mt-1 inline-block rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                  Completed
                </span>
              </div>
            </div>

            {/* Order 3 */}
            <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-xl">
                ⚡
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">
                  Electrical Work
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Customer: Priya Singh
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  📍 Delhi • Yesterday, 11:00 AM
                </p>
              </div>

              <div className="text-left sm:text-right">
                <p className="font-semibold text-gray-900">
                  ₹800
                </p>

                <span className="mt-1 inline-block rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                  Completed
                </span>
              </div>
            </div>

          </div>

          {/* Profile Completion */}
          <div className="rounded-2xl bg-white p-5 shadow-sm">

            <h2 className="text-lg font-bold text-gray-900">
              Profile Completion
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Complete your profile to receive more orders.
            </p>

            {/* Progress */}
            <div className="mt-6">
              <div className="mb-2 flex justify-between text-sm">
                <span className="font-medium text-gray-700">
                  60% Complete
                </span>

                <span className="text-gray-500">
                  60%
                </span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-gray-200">
                <div className="h-full w-[60%] rounded-full bg-black"></div>
              </div>
            </div>

            {/* Checklist */}
            <div className="mt-6 space-y-4">

              <div className="flex items-center gap-3">
                <span className="text-green-500">✓</span>

                <span className="text-sm text-gray-700">
                  Basic information
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-green-500">✓</span>

                <span className="text-sm text-gray-700">
                  Profile photo
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-yellow-500">○</span>

                <span className="text-sm text-gray-700">
                  KYC verification
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-yellow-500">○</span>

                <span className="text-sm text-gray-700">
                  Experience details
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-yellow-500">○</span>

                <span className="text-sm text-gray-700">
                  Certificates
                </span>
              </div>

            </div>

            <NavLink
              to="/profile"
              className="mt-6 block rounded-lg bg-black px-5 py-3 text-center text-sm font-medium text-white hover:bg-gray-800"
            >
              Complete Profile
            </NavLink>

          </div>

        </div>

      </div>
    </Layout>
  );
};

export default Dashboard;