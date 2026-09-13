import React from "react";
import { NavLink } from "react-router-dom";
import Layout from "../../Components/Layout.jsx";

import plumbing from "../../assets/Plumber.png";
import cleaning from "../../assets/cleaning.png";
import electrical from "../../assets/electrician.png";
import repair from "../../assets/Painting.png";
import Acrepair from "../../assets/Acrepair.png";
import Crpantry from "../../assets/Crpantry.png";
import repairappliance from "../../assets/repairappliance.png";
import PestControl from "../../assets/PestControl.png";
import WaterPurifierService from "../../assets/WaterPurifierService.png";
import Locksmith from "../../assets/Locksmith.png";
import backgroundimage from "../../assets/service_background.jpg";

function Service() {
  const services = [
    {
      id: 1,
      title: "Plumbing",
      description:
        "Professional plumbing services for leaks, taps and pipes.",
      price: "₹299",
      image: plumbing,
      icon: "🚰",
    },
    {
      id: 2,
      title: "Cleaning",
      description:
        "Reliable cleaning services to keep your home fresh.",
      price: "₹399",
      image: cleaning,
      icon: "🧹",
    },
    {
      id: 3,
      title: "Electrical",
      description:
        "Safe electrical repair and installation services.",
      price: "₹349",
      image: electrical,
      icon: "⚡",
    },
    {
      id: 4,
      title: "Painting",
      description:
        "Give your home a fresh look with professional painting.",
      price: "₹299",
      image: repair,
      icon: "🎨",
    },
    {
      id: 5,
      title: "AC Repair & Service",
      description:
        "AC repair, servicing, installation and maintenance.",
      price: "₹599",
      image: Acrepair,
      icon: "❄️",
    },
    {
      id: 6,
      title: "Carpentry",
      description:
        "Furniture repair, doors, cabinets, shelves and custom woodwork.",
      price: "₹899",
      image: Crpantry,
      icon: "🪚",
    },
    {
      id: 7,
      title: "Appliance Repair",
      description:
        "Repair services for refrigerators, washing machines and appliances.",
      price: "₹499",
      image: repairappliance,
      icon: "🔧",
    },
    {
      id: 8,
      title: "Pest Control",
      description:
        "Protect your home from cockroaches, ants, termites and pests.",
      price: "₹399",
      image: PestControl,
      icon: "🦟",
    },
    {
      id: 9,
      title: "RO / Water Purifier",
      description:
        "RO servicing, filter replacement, repair and maintenance.",
      price: "₹699",
      image: WaterPurifierService,
      icon: "💧",
    },
    {
      id: 10,
      title: "Locksmith",
      description:
        "Lock repair, replacement, key duplication and door access.",
      price: "₹199",
      image: Locksmith,
      icon: "🔐",
    },
  ];

  return (
    <Layout>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="max-w-7xl mx-auto px-6 pt-8 pb-12">

        <div
          className="relative overflow-hidden rounded-[2rem] min-h-[430px] bg-cover bg-center shadow-2xl"
          style={{
            backgroundImage: `url(${backgroundimage})`,
          }}
        >

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Decorative glow */}
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-green-500/20 blur-3xl"></div>

          <div className="relative z-10 min-h-[430px] flex items-center">

            <div className="px-8 md:px-14 max-w-3xl text-white">

              {/* Badge */}

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm mb-6">

                <span className="w-2 h-2 bg-green-400 rounded-full"></span>

                10+ Home Services Available

              </div>


              <p className="text-green-300 font-bold tracking-widest text-sm uppercase">
                Fixmate Services
              </p>


              <h1 className="text-4xl md:text-6xl font-extrabold mt-4 leading-tight">

                Everything your home
                <br />

                <span className="text-amber-400">
                  needs. One place.
                </span>

              </h1>


              <p className="mt-6 text-gray-200 text-base md:text-lg leading-relaxed max-w-xl">

                From everyday maintenance to unexpected repairs,
                find trusted professionals and book the service you need.

              </p>


              {/* Hero stats */}

              <div className="flex flex-wrap gap-8 mt-8">

                <div>

                  <p className="text-2xl font-extrabold">
                    10+
                  </p>

                  <p className="text-xs text-gray-300">
                    Services
                  </p>

                </div>


                <div>

                  <p className="text-2xl font-extrabold">
                    ₹199+
                  </p>

                  <p className="text-xs text-gray-300">
                    Starting Price
                  </p>

                </div>


                <div>

                  <p className="text-2xl font-extrabold">
                    ⭐ 4.8
                  </p>

                  <p className="text-xs text-gray-300">
                    Customer Rating
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          SECTION HEADER
      ===================================================== */}

      <section className="max-w-7xl mx-auto px-6 pt-6">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">

          <div>

            <p className="text-green-600 font-bold text-sm uppercase tracking-wider">
              Our Services
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
              What does your home need?
            </h2>

            <p className="text-gray-500 mt-2">
              Choose a service and let our professionals handle the rest.
            </p>

          </div>


          <div className="hidden md:flex items-center gap-2 text-sm text-gray-500">

            <span className="w-2 h-2 rounded-full bg-green-500"></span>

            {services.length} services available

          </div>

        </div>

      </section>



      {/* =====================================================
          SERVICES GRID
      ===================================================== */}

      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

          {services.map((service) => (

            <div
              key={service.id}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              {/* IMAGE */}

              <div className="relative h-52 overflow-hidden">

                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Image overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>


                {/* Service number */}

                <div className="absolute top-4 left-4 w-9 h-9 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center text-xs font-extrabold text-gray-700">

                  {String(service.id).padStart(2, "0")}

                </div>


                {/* Icon */}

                <div className="absolute bottom-4 left-4 w-11 h-11 rounded-xl bg-white/95 flex items-center justify-center text-xl shadow-lg">

                  {service.icon}

                </div>

              </div>



              {/* CONTENT */}

              <div className="p-5">

                <div className="flex items-start justify-between gap-3">

                  <h3 className="text-xl font-extrabold text-gray-900 leading-tight">

                    {service.title}

                  </h3>

                </div>


                <p className="text-gray-500 text-sm mt-3 leading-6 min-h-[72px]">

                  {service.description}

                </p>


                {/* Price */}

                <div className="flex items-end justify-between mt-4">

                  <div>

                    <p className="text-xs text-gray-400">
                      Starting from
                    </p>

                    <p className="text-xl font-extrabold text-green-600">
                      {service.price}
                    </p>

                  </div>

                  <span className="text-xs text-gray-400">
                    ⭐ 4.8
                  </span>

                </div>


                {/* Button */}

                <NavLink
                  to="/book-service"
                  className="group/button mt-5 w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gray-900 text-white font-bold text-sm hover:bg-green-600 transition-all duration-300"
                >

                  Book Now

                  <span className="group-hover/button:translate-x-1 transition-transform">
                    →
                  </span>

                </NavLink>

              </div>

            </div>

          ))}

        </div>

      </section>



      {/* =====================================================
          HOW IT WORKS
      ===================================================== */}

      <section className="bg-gray-50 border-y border-gray-200 mt-10">

        <div className="max-w-7xl mx-auto px-6 py-16">

          <div className="text-center">

            <p className="text-green-600 font-bold text-sm uppercase tracking-wider">
              Simple Process
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
              Book a service in 3 easy steps
            </h2>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">


            {/* STEP 1 */}

            <div className="text-center">

              <div className="mx-auto w-16 h-16 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center text-2xl font-extrabold">
                01
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Choose a Service
              </h3>

              <p className="mt-2 text-gray-500 max-w-xs mx-auto">
                Select the service that your home needs.
              </p>

            </div>


            {/* STEP 2 */}

            <div className="text-center">

              <div className="mx-auto w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-2xl font-extrabold">
                02
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Pick a Convenient Time
              </h3>

              <p className="mt-2 text-gray-500 max-w-xs mx-auto">
                Choose a time that works best for you.
              </p>

            </div>


            {/* STEP 3 */}

            <div className="text-center">

              <div className="mx-auto w-16 h-16 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center text-2xl font-extrabold">
                03
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Relax
              </h3>

              <p className="mt-2 text-gray-500 max-w-xs mx-auto">
                Our professional takes care of the rest.
              </p>

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="relative overflow-hidden rounded-[2rem] bg-gray-900 px-8 md:px-14 py-12 text-white">

          {/* Background decoration */}

          <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-green-500/20 blur-3xl"></div>


          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">

            <div>

              <p className="text-green-400 font-bold text-sm uppercase tracking-wider">
                Need help at home?
              </p>

              <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
                Don't let a small problem become a big one.
              </h2>

              <p className="text-gray-400 mt-3">
                Find a professional and get it sorted today.
              </p>

            </div>


            <NavLink
              to="/book-service"
              className="shrink-0 bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all duration-300"
            >
              Book a Service →
            </NavLink>

          </div>

        </div>

      </section>

    </Layout>
  );
}

export default Service;
