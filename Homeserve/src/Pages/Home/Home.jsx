import React from "react";
import { NavLink } from "react-router-dom";
import Layout from "../../Components/Layout.jsx";

function Home() {

  return (
    <Layout>

      {/* HERO */}

      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="bg-green-700 rounded-3xl overflow-hidden">

          <div className="grid md:grid-cols-2 items-center">


            {/* LEFT */}

            <div className="p-8 md:p-14 text-white">

              <p className="text-green-200 font-semibold text-sm">
                WELCOME TO HOMESERVE
              </p>

              <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
                Reliable services
                <br />
                for your home.
              </h1>

              <p className="mt-5 text-green-100 text-lg max-w-lg">
                Find trusted professionals for cleaning,
                plumbing, electrical work and other home services.
              </p>

              <NavLink
                to="/services"
                className="inline-block mt-8 bg-white text-green-700 px-7 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
              >
                Book a Service
              </NavLink>

            </div>


            {/* RIGHT */}

            <div className="hidden md:flex justify-center items-center p-10">

              <div className="w-72 h-72 bg-green-600 rounded-full flex items-center justify-center">

                <div className="w-52 h-52 bg-white rounded-3xl shadow-xl flex flex-col items-center justify-center">

                  <span className="text-7xl">
                    🏠
                  </span>

                  <h2 className="mt-3 text-xl font-bold text-green-700">
                    HomeServe
                  </h2>

                  <p className="text-gray-500 text-sm">
                    Home made easy
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* SERVICES */}

      <section className="max-w-7xl mx-auto px-6 py-8">

        <div className="flex justify-between items-center mb-6">

          <div>

            <h2 className="text-2xl font-bold text-gray-800">
              Popular Services
            </h2>

            <p className="text-gray-500 mt-1">
              Choose the service you need
            </p>

          </div>

          <NavLink
            to="/services"
            className="text-green-600 font-semibold"
          >
            View All →
          </NavLink>

        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">


          {/* REPAIR */}

          <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition">

            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center text-3xl">
              🔧
            </div>

            <h3 className="mt-5 text-xl font-semibold text-gray-800">
              Painting
            </h3>

            <p className="mt-2 text-gray-500 text-sm">
              Get help with colour of you Home.
            </p>

            <NavLink
              to="/services"
              className="inline-block mt-5 text-green-600 font-semibold"
            >
              Book Now →
            </NavLink>

          </div>


          {/* CLEANING */}

          <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition">

            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-3xl">
              🧹
            </div>

            <h3 className="mt-5 text-xl font-semibold text-gray-800">
              Cleaning
            </h3>

            <p className="mt-2 text-gray-500 text-sm">
              Professional cleaning for your home.
            </p>

            <NavLink
              to="/services"
              className="inline-block mt-5 text-green-600 font-semibold"
            >
              Book Now →
            </NavLink>

          </div>


          {/* ELECTRICAL */}

          <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition">

            <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center text-3xl">
              ⚡
            </div>

            <h3 className="mt-5 text-xl font-semibold text-gray-800">
              Electrical
            </h3>

            <p className="mt-2 text-gray-500 text-sm">
              Safe and reliable electrical services.
            </p>

            <NavLink
              to="/services"
              className="inline-block mt-5 text-green-600 font-semibold"
            >
              Book Now →
            </NavLink>

          </div>


          {/* PLUMBING */}

          <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition">

            <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center text-3xl">
              🚰
            </div>

            <h3 className="mt-5 text-xl font-semibold text-gray-800">
              Plumbing
            </h3>

            <p className="mt-2 text-gray-500 text-sm">
              Fix leaks and plumbing problems.
            </p>

            <NavLink
              to="/services"
              className="inline-block mt-5 text-green-600 font-semibold"
            >
              Book Now →
            </NavLink>

          </div>

        </div>

      </section>


      {/* WHY CHOOSE US */}

      <section className="bg-white border-y border-gray-200 mt-8">

        <div className="max-w-7xl mx-auto px-6 py-12">

          <div className="text-center">

            <h2 className="text-3xl font-bold text-gray-800">
              Why Choose HomeServe?
            </h2>

            <p className="mt-2 text-gray-500">
              Simple, reliable and convenient home services.
            </p>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">


            <div className="text-center">

              <div className="mx-auto w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-2xl">
                ✓
              </div>

              <h3 className="mt-4 text-lg font-bold text-gray-800">
                Trusted Professionals
              </h3>

              <p className="mt-2 text-gray-500">
                Find reliable professionals for your home.
              </p>

            </div>


            <div className="text-center">

              <div className="mx-auto w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                📅
              </div>

              <h3 className="mt-4 text-lg font-bold text-gray-800">
                Easy Booking
              </h3>

              <p className="mt-2 text-gray-500">
                Book your service quickly and easily.
              </p>

            </div>


            <div className="text-center">

              <div className="mx-auto w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center text-2xl">
                ⭐
              </div>

              <h3 className="mt-4 text-lg font-bold text-gray-800">
                Quality Service
              </h3>

              <p className="mt-2 text-gray-500">
                Get quality work done at your home.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* BOOKINGS */}

      <section className="max-w-7xl mx-auto px-6 py-12">

        <h2 className="text-2xl font-bold text-gray-800">
          Recent Bookings
        </h2>

        <div className="mt-5 bg-white border border-gray-200 rounded-2xl p-10 text-center">

          <div className="text-5xl">
            📋
          </div>

          <h3 className="mt-4 text-xl font-semibold text-gray-800">
            No bookings yet
          </h3>

          <p className="mt-2 text-gray-500">
            Your upcoming bookings will appear here.
          </p>

          <NavLink
            to="/services"
            className="inline-block mt-6 bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700"
          >
            Book Your First Service
          </NavLink>

        </div>

      </section>

    </Layout>
  );
}

export default Home;