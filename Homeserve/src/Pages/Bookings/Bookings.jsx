import React from "react";
import { NavLink,useNavigate } from "react-router-dom";

import Layout from "../../Components/Layout.jsx";

function Bookings() {
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

        {/* =====================================================
            HEADER
        ===================================================== */}

        <section className="max-w-7xl mx-auto px-6 pt-10">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">

            <div>

              <p className="text-green-600 font-bold text-sm uppercase tracking-wider">
                Dashboard
              </p>

              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
                My Bookings
              </h1>

              <p className="text-gray-500 mt-2">
                Track and manage your home service bookings.
              </p>

            </div>


            <NavLink
              to="/services"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-green-600/20"
            >
              + Book New Service
            </NavLink>

          </div>

        </section>



        {/* =====================================================
            BOOKING SUMMARY
        ===================================================== */}

        <section className="max-w-7xl mx-auto px-6 mt-8">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            {/* Total */}

            <div className="bg-white border border-gray-200 rounded-2xl p-5">

              <div className="flex items-center justify-between">

                <div className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center text-xl">
                  📋
                </div>

                <span className="text-xs text-gray-400">
                  TOTAL
                </span>

              </div>

              <h3 className="text-2xl font-extrabold text-gray-900 mt-4">
                1
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Total bookings
              </p>

            </div>


            {/* Pending */}

            <div className="bg-white border border-gray-200 rounded-2xl p-5">

              <div className="flex items-center justify-between">

                <div className="w-11 h-11 rounded-xl bg-yellow-100 flex items-center justify-center text-xl">
                  ⏳
                </div>

                <span className="text-xs text-yellow-600 font-bold">
                  WAITING
                </span>

              </div>

              <h3 className="text-2xl font-extrabold text-gray-900 mt-4">
                1
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Pending bookings
              </p>

            </div>


            {/* Completed */}

            <div className="bg-white border border-gray-200 rounded-2xl p-5">

              <div className="flex items-center justify-between">

                <div className="w-11 h-11 rounded-xl bg-green-100 flex items-center justify-center text-xl">
                  ✓
                </div>

                <span className="text-xs text-green-600 font-bold">
                  DONE
                </span>

              </div>

              <h3 className="text-2xl font-extrabold text-gray-900 mt-4">
                0
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Completed services
              </p>

            </div>


            {/* Spent */}

            <div className="bg-white border border-gray-200 rounded-2xl p-5">

              <div className="flex items-center justify-between">

                <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center text-xl">
                  ₹
                </div>

                <span className="text-xs text-blue-600 font-bold">
                  SPENT
                </span>

              </div>

              <h3 className="text-2xl font-extrabold text-gray-900 mt-4">
                ₹299
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Total booking value
              </p>

            </div>

          </div>

        </section>



        {/* =====================================================
            BOOKING SECTION
        ===================================================== */}

        <section className="max-w-7xl mx-auto px-6 py-10">

          <div className="flex items-center justify-between mb-5">

            <div>

              <h2 className="text-xl font-extrabold text-gray-900">
                Upcoming Booking
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Your next scheduled service.
              </p>

            </div>

          </div>


          {/* BOOKING CARD */}

          <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">

            {/* Top status bar */}

            <div className="px-6 py-4 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

              <div className="flex items-center gap-2">

                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>

                <span className="text-sm font-bold text-gray-700">
                  Booking #FM-001
                </span>

              </div>


              <span className="inline-flex items-center gap-1.5 bg-yellow-100 text-yellow-700 px-4 py-1.5 rounded-full text-xs font-bold">

                ⏳ Pending

              </span>

            </div>



            {/* Main content */}

            <div className="p-6 md:p-8">

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">


                {/* SERVICE */}

                <div className="flex items-start gap-4">

                  <div className="w-16 h-16 shrink-0 rounded-2xl bg-green-100 flex items-center justify-center text-3xl">
                    🔧
                  </div>


                  <div>

                    <p className="text-xs uppercase tracking-wider font-bold text-gray-400">
                      Home Service
                    </p>

                    <h3 className="text-2xl font-extrabold text-gray-900 mt-1">
                      Plumbing
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      Professional plumbing service
                    </p>

                  </div>

                </div>



                {/* PRICE */}

                <div className="lg:text-right">

                  <p className="text-xs text-gray-400 uppercase font-bold">
                    Estimated Price
                  </p>

                  <p className="text-3xl font-extrabold text-green-600 mt-1">
                    ₹299
                  </p>

                </div>

              </div>



              {/* DETAILS */}

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-7 border-t border-gray-100">


                {/* DATE */}

                <div className="bg-gray-50 rounded-2xl p-4">

                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                      📅
                    </div>

                    <div>

                      <p className="text-xs text-gray-400 font-semibold">
                        DATE
                      </p>

                      <p className="text-sm font-bold text-gray-800 mt-1">
                        15 September 2026
                      </p>

                    </div>

                  </div>

                </div>



                {/* TIME */}

                <div className="bg-gray-50 rounded-2xl p-4">

                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                      🕐
                    </div>

                    <div>

                      <p className="text-xs text-gray-400 font-semibold">
                        TIME
                      </p>

                      <p className="text-sm font-bold text-gray-800 mt-1">
                        10:00 AM
                      </p>

                    </div>

                  </div>

                </div>



                {/* ADDRESS */}

                <div className="bg-gray-50 rounded-2xl p-4">

                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                      📍
                    </div>

                    <div>

                      <p className="text-xs text-gray-400 font-semibold">
                        LOCATION
                      </p>

                      <p className="text-sm font-bold text-gray-800 mt-1">
                        Your home address
                      </p>

                    </div>

                  </div>

                </div>

              </div>



              {/* ACTIONS */}

              <div className="flex flex-col sm:flex-row gap-3 mt-7">

                <button
                  type="button"
                  className="flex-1 py-3 rounded-xl border border-gray-200 text-gray-700 font-bold text-sm hover:bg-gray-50 transition"
                >
                  View Details
                </button>

                <button
                  type="button"
                  className="flex-1 py-3 rounded-xl border border-red-200 text-red-600 font-bold text-sm hover:bg-red-50 transition"
                >
                  Cancel Booking
                </button>

              </div>

            </div>

          </div>

        </section>



        {/* =====================================================
            EMPTY / QUICK BOOKING
        ===================================================== */}

        <section className="max-w-7xl mx-auto px-6 pb-16">

          <div className="relative overflow-hidden bg-gray-900 rounded-3xl p-8 md:p-10 text-white">

            <div className="absolute -right-20 -top-20 w-72 h-72 bg-green-500/20 rounded-full blur-3xl"></div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-7">

              <div>

                <p className="text-green-400 text-sm font-bold uppercase tracking-wider">
                  Need another service?
                </p>

                <h2 className="text-2xl md:text-3xl font-extrabold mt-2">
                  Your home has needs. We've got you covered.
                </h2>

                <p className="text-gray-400 mt-2">
                  Choose from plumbing, cleaning, electrical and more.
                </p>

              </div>


              <NavLink
                to="/services"
                className="shrink-0 inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 px-7 py-3.5 rounded-xl font-bold transition-all hover:scale-105"
              >
                Explore Services →
              </NavLink>

            </div>

          </div>

        </section>

      </div>

    </Layout>
  );
}

export default Bookings;
