import React from "react";
import { NavLink,useNavigate } from "react-router-dom";
import Layout from "../../Components/Layout.jsx";

function Profile() {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex items-center justify-between px-4 md:px-6">

  {/* Back */}
  <button
    type="button"
    onClick={() => navigate("/services")}
    className="pointer-events-auto rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#16302B] shadow-lg ring-1 ring-black/10 transition hover:bg-[#16302B] hover:text-white"
  >
    ← Back
  </button>
</div>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-8 sm:py-10">

          {/* Page Header */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-green-600 uppercase tracking-wider">
                  Account
                </p>

                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-1">
                  My Profile
                </h1>

                <p className="text-gray-500 mt-2">
                  Manage your personal information and account details.
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                Account Active
              </div>
            </div>
          </div>


          {/* Main Profile Card */}
          <div className="bg-white border border-gray-200 rounded-3xl shadow-sm overflow-hidden">

            {/* Profile Banner */}
            <div className="h-32 sm:h-40 bg-gradient-to-r from-gray-950 via-gray-900 to-green-950 relative overflow-hidden">

              {/* Decorative circles */}
              <div className="absolute -right-10 -top-20 w-64 h-64 rounded-full bg-green-500/10"></div>
              <div className="absolute right-20 -bottom-24 w-52 h-52 rounded-full bg-green-400/10"></div>

              <div className="absolute inset-0 opacity-10">
                <div className="absolute w-40 h-40 border border-white rounded-full -left-10 top-10"></div>
                <div className="absolute w-72 h-72 border border-white rounded-full right-10 -top-32"></div>
              </div>
            </div>


            {/* Profile Header */}
            <div className="px-5 sm:px-8 lg:px-10 pb-8">

              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">

                <div className="flex flex-col sm:flex-row sm:items-end gap-4 -mt-12 relative">

                  {/* Avatar */}
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-green-600 border-4 border-white shadow-lg flex items-center justify-center text-4xl sm:text-5xl font-extrabold text-white">
                    P
                  </div>

                  <div className="sm:pb-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                        Piyush
                      </h2>

                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-green-100 text-green-700">
                        Customer
                      </span>
                    </div>

                    <p className="text-gray-500 mt-1">
                      Fixmate Customer Account
                    </p>
                  </div>

                </div>


                {/* Edit Button */}
                <button
                  type="button"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-green-600 text-white font-bold hover:bg-green-700 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                >
                  Edit Profile
                </button>

              </div>


              {/* Divider */}
              <div className="border-t border-gray-100 mt-8"></div>


              {/* Account Information */}
              <div className="mt-8">

                <div className="mb-5">
                  <h3 className="text-xl font-bold text-gray-900">
                    Personal Information
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Your basic account information.
                  </p>
                </div>


                <div className="grid sm:grid-cols-2 gap-4">

                  {/* Full Name */}
                  <div className="group bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:bg-green-50/50 hover:border-green-100 transition-all">
                    <div className="flex items-start gap-4">

                      <div className="w-11 h-11 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-xl shadow-sm">
                        👤
                      </div>

                      <div className="min-w-0">
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                          Full Name
                        </p>

                        <p className="font-bold text-gray-900 mt-1 truncate">
                          Piyush
                        </p>
                      </div>

                    </div>
                  </div>


                  {/* Email */}
                  <div className="group bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:bg-green-50/50 hover:border-green-100 transition-all">
                    <div className="flex items-start gap-4">

                      <div className="w-11 h-11 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-xl shadow-sm">
                        ✉️
                      </div>

                      <div className="min-w-0">
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                          Email Address
                        </p>

                        <p className="font-bold text-gray-900 mt-1 truncate">
                          user@example.com
                        </p>
                      </div>

                    </div>
                  </div>


                  {/* Phone */}
                  <div className="group bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:bg-green-50/50 hover:border-green-100 transition-all">
                    <div className="flex items-start gap-4">

                      <div className="w-11 h-11 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-xl shadow-sm">
                        📱
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                          Phone Number
                        </p>

                        <p className="font-bold text-gray-900 mt-1">
                          +91 98765 43210
                        </p>
                      </div>

                    </div>
                  </div>


                  {/* Location */}
                  <div className="group bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:bg-green-50/50 hover:border-green-100 transition-all">
                    <div className="flex items-start gap-4">

                      <div className="w-11 h-11 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-xl shadow-sm">
                        📍
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                          Location
                        </p>

                        <p className="font-bold text-gray-900 mt-1">
                          India
                        </p>
                      </div>

                    </div>
                  </div>

                </div>

              </div>


              {/* Account Stats */}
              <div className="mt-8">

                <div className="mb-5">
                  <h3 className="text-xl font-bold text-gray-900">
                    Account Overview
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    A quick look at your Fixmate activity.
                  </p>
                </div>


                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

                  <div className="rounded-2xl border border-gray-200 p-5">
                    <p className="text-sm text-gray-500">
                      Total Bookings
                    </p>

                    <p className="text-3xl font-extrabold text-gray-900 mt-2">
                      1
                    </p>
                  </div>


                  <div className="rounded-2xl border border-gray-200 p-5">
                    <p className="text-sm text-gray-500">
                      Completed
                    </p>

                    <p className="text-3xl font-extrabold text-green-600 mt-2">
                      0
                    </p>
                  </div>


                  <div className="rounded-2xl border border-gray-200 p-5">
                    <p className="text-sm text-gray-500">
                      Pending
                    </p>

                    <p className="text-3xl font-extrabold text-orange-500 mt-2">
                      1
                    </p>
                  </div>


                  <div className="rounded-2xl border border-gray-200 p-5">
                    <p className="text-sm text-gray-500">
                      Member Since
                    </p>

                    <p className="text-lg font-extrabold text-gray-900 mt-3">
                      2026
                    </p>
                  </div>

                </div>

              </div>


              {/* Security Section */}
              <div className="mt-8 bg-gray-950 rounded-2xl p-6 sm:p-7 text-white">

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">

                  <div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-green-500/15 flex items-center justify-center">
                        🔒
                      </div>

                      <h3 className="font-bold text-lg">
                        Account Security
                      </h3>
                    </div>

                    <p className="text-gray-400 text-sm mt-3 max-w-xl">
                      Keep your account information up to date and make sure
                      your login credentials are secure.
                    </p>
                  </div>

                  <button
                    type="button"
                    className="shrink-0 px-5 py-2.5 rounded-xl border border-gray-700 text-sm font-semibold hover:bg-white hover:text-gray-900 transition-all"
                  >
                    Change Password
                  </button>

                </div>

              </div>

            </div>

          </div>


          {/* Logout */}
          <div className="mt-6 bg-white border border-red-100 rounded-2xl p-5 sm:p-6">

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

              <div>
                <h3 className="font-bold text-gray-900">
                  Sign out of your account
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  You can sign back in anytime using your account credentials.
                </p>
              </div>

              <NavLink
                to="/login"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-red-200 text-red-600 font-bold hover:bg-red-50 transition-all duration-200"
              >
                Logout
              </NavLink>

            </div>

          </div>


          {/* Bottom CTA */}
          <div className="mt-8 rounded-3xl bg-green-600 p-7 sm:p-8 text-white overflow-hidden relative">

            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-5">

              <div>
                <p className="text-green-100 text-sm font-semibold uppercase tracking-wider">
                  Need a service?
                </p>

                <h2 className="text-2xl sm:text-3xl font-extrabold mt-1">
                  Your home deserves the best.
                </h2>

                <p className="text-green-50 mt-2">
                  Book a trusted professional with Fixmate today.
                </p>
              </div>

              <NavLink
                to="/services"
                className="inline-flex items-center justify-center bg-white text-green-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-sm"
              >
                Explore Services →
              </NavLink>

            </div>

            <div className="absolute -right-16 -top-20 w-64 h-64 rounded-full bg-white/10"></div>
            <div className="absolute -right-5 -bottom-32 w-72 h-72 rounded-full bg-white/5"></div>

          </div>

        </div>
      </div>
    </Layout>
  );
}

export default Profile;