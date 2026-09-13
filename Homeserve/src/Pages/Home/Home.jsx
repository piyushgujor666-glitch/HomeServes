
import React from "react";
import { NavLink } from "react-router-dom";
import Layout from "../../Components/Layout.jsx";
import image from "../../assets/Home_background.png";
import logo  from "../../assets/FIX.jpg"

function Home() {
  const services = [
    {
      number: "01",
      icon: "🎨",
      title: "Painting",
      description: "Give your home a fresh look with skilled painters.",
      bg: "bg-orange-50",
    },
    {
      number: "02",
      icon: "🧹",
      title: "Cleaning",
      description: "Professional cleaning that makes your home shine.",
      bg: "bg-blue-50",
    },
    {
      number: "03",
      icon: "⚡",
      title: "Electrical",
      description: "Safe electrical repairs and installation at home.",
      bg: "bg-yellow-50",
    },
    {
      number: "04",
      icon: "🚰",
      title: "Plumbing",
      description: "Quick solutions for leaks, pipes and water issues.",
      bg: "bg-cyan-50",
    },
  ];

  return (
    <Layout>

      {/* ================= HERO ================= */}

      <section className="max-w-7xl mx-auto px-6 pt-8 pb-16">

        <div
          className="relative overflow-hidden rounded-[2rem] min-h-[520px] bg-cover bg-center shadow-2xl"
          style={{ backgroundImage: `url(${image})` }}
        >

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/55"></div>

          {/* Decorative circles */}
          <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-green-500/20 blur-2xl"></div>
          <div className="absolute right-20 bottom-0 w-52 h-52 rounded-full bg-yellow-400/10 blur-3xl"></div>

          <div className="relative z-10 flex items-center min-h-[520px] px-8 md:px-16 py-14">

            <div className="max-w-3xl">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-sm text-white mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                Trusted home services
              </div>

              <p className="text-green-300 font-semibold tracking-widest text-sm uppercase">
                Welcome to Fixma🔨e
              </p>

              <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight text-white">
                Your home.
                <br />
                <span className="text-amber-400">
                  Our expertise.
                </span>
              </h1>

              <p className="mt-6 text-gray-200 text-base md:text-lg max-w-xl leading-relaxed">
                From a leaking tap to a complete home makeover,
                connect with trusted professionals and get the job
                done without the hassle.
              </p>

              <div className="mt-9 flex flex-col sm:flex-row gap-4">

                <NavLink
                  to="/services"
                  className="group inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105"
                >
                  Book a Service
                  <span className="group-hover:translate-x-1 transition">
                    →
                  </span>
                </NavLink>

                <NavLink
                  to="/services"
                  className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
                >
                  Explore Services
                </NavLink>

              </div>

              {/* Mini trust info */}
              <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-200">

                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Verified Professionals
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Easy Booking
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Reliable Service
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* ================= STATS ================= */}

      <section className="max-w-7xl mx-auto px-6 -mt-2 mb-16">

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 grid grid-cols-2 md:grid-cols-4 overflow-hidden">

          <div className="p-6 text-center border-b md:border-b-0 md:border-r border-gray-100">
            <h3 className="text-3xl font-extrabold text-green-600">
              500+
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              Services Completed
            </p>
          </div>

          <div className="p-6 text-center border-b md:border-b-0 md:border-r border-gray-100">
            <h3 className="text-3xl font-extrabold text-green-600">
              100+
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              Professionals
            </p>
          </div>

          <div className="p-6 text-center border-r border-gray-100">
            <h3 className="text-3xl font-extrabold text-green-600">
              4.8
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              Average Rating ⭐
            </p>
          </div>

          <div className="p-6 text-center">
            <h3 className="text-3xl font-extrabold text-green-600">
              24/7
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              Booking Available
            </p>
          </div>

        </div>

      </section>


      {/* ================= SERVICES ================= */}

      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">

          <div>

            <p className="text-green-600 font-bold text-sm uppercase tracking-wider">
              What we offer
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
              Services made simple.
            </h2>

            <p className="text-gray-500 mt-2">
              Everything your home needs, all in one place.
            </p>

          </div>

          <NavLink
            to="/services"
            className="text-green-600 font-bold hover:text-green-800 transition"
          >
            View all services →
          </NavLink>

        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {services.map((service) => (

            <div
              key={service.number}
              className="group relative bg-white border border-gray-200 rounded-2xl p-6 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >

              {/* Number */}
              <span className="absolute top-5 right-5 text-xs font-bold text-gray-300">
                {service.number}
              </span>

              <div
                className={`w-16 h-16 ${service.bg} rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300`}
              >
                {service.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-900">
                {service.title}
              </h3>

              <p className="mt-2 text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>

              <NavLink
                to="/services"
                className="inline-flex items-center gap-1 mt-6 text-green-600 font-bold text-sm group-hover:gap-3 transition-all"
              >
                Book now
                <span>→</span>
              </NavLink>

            </div>

          ))}

        </div>

      </section>


      {/* ================= HOW IT WORKS ================= */}

      <section className="bg-gray-50 mt-20 border-y border-gray-200">

        <div className="max-w-7xl mx-auto px-6 py-16">

          <div className="text-center max-w-2xl mx-auto">

            <p className="text-green-600 font-bold text-sm uppercase tracking-wider">
              How it works
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
              Get your problem solved in 3 steps
            </h2>

            <p className="text-gray-500 mt-3">
              No complicated process. Just choose, book and relax.
            </p>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">

            {/* STEP 1 */}
            <div className="relative text-center">

              <div className="mx-auto w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center text-xl font-bold shadow-lg">
                01
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Choose a Service
              </h3>

              <p className="mt-2 text-gray-500">
                Select the home service you need from our list.
              </p>

            </div>


            {/* STEP 2 */}
            <div className="relative text-center">

              <div className="mx-auto w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold shadow-lg">
                02
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Book a Professional
              </h3>

              <p className="mt-2 text-gray-500">
                Pick a convenient time and book your professional.
              </p>

            </div>


            {/* STEP 3 */}
            <div className="relative text-center">

              <div className="mx-auto w-16 h-16 rounded-full bg-amber-500 text-white flex items-center justify-center text-xl font-bold shadow-lg">
                03
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Sit Back & Relax
              </h3>

              <p className="mt-2 text-gray-500">
                Let our professional take care of the rest.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= WHY US ================= */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div>

            <p className="text-green-600 font-bold text-sm uppercase tracking-wider">
              Why Fixmate?
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 leading-tight">
              Home maintenance shouldn't
              <span className="text-green-600">
                {" "}feel like a headache.
              </span>
            </h2>

            <p className="mt-5 text-gray-500 leading-relaxed">
              We make it easier to find dependable professionals,
              schedule services and keep your home running smoothly.
            </p>

            <div className="mt-8 space-y-5">

              <div className="flex gap-4">

                <div className="w-11 h-11 shrink-0 rounded-xl bg-green-100 flex items-center justify-center text-green-600 font-bold">
                  ✓
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">
                    Verified Professionals
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Connect with professionals you can rely on.
                  </p>
                </div>

              </div>


              <div className="flex gap-4">

                <div className="w-11 h-11 shrink-0 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                  ⚡
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">
                    Fast & Convenient
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Book a service whenever it works for you.
                  </p>
                </div>

              </div>


              <div className="flex gap-4">

                <div className="w-11 h-11 shrink-0 rounded-xl bg-yellow-100 flex items-center justify-center text-yellow-600 font-bold">
                  ⭐
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">
                    Quality Comes First
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    We focus on making every service experience better.
                  </p>
                </div>

              </div>

            </div>

          </div>


          {/* RIGHT FEATURE CARD */}

          <div className="relative">

            <div className="bg-gray-900 rounded-[2rem] p-8 md:p-10 text-white shadow-2xl">

              <div className="flex items-center justify-between">

                <span className="text-sm text-gray-400">
                  YOUR HOME SERVICE
                </span>

                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-bold">
                  EASY
                </span>

              </div>

              <div className="mt-10">

                <img src={logo} alt="logo" className="h-20"/>

                <h3 className="text-3xl font-extrabold mt-5">
                  One place.
                  <br />
                  Every home service.
                </h3>

                <p className="text-gray-400 mt-4 leading-relaxed">
                  From everyday maintenance to unexpected repairs,
                  Fixmate helps you find the right service quickly.
                </p>

              </div>

              <NavLink
                to="/services"
                className="inline-block mt-8 bg-white text-gray-900 px-6 py-3 rounded-xl font-bold hover:bg-green-500 hover:text-white transition"
              >
                Find a Service →
              </NavLink>

            </div>

          </div>

        </div>

      </section>


      {/* ================= BOOKINGS ================= */}

      <section className="max-w-7xl mx-auto px-6 pb-16">

        <div className="bg-green-600 rounded-[2rem] px-8 md:px-14 py-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">

          <div>

            <p className="text-green-200 text-sm font-bold uppercase tracking-wider">
              Ready when you are
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
              Need something fixed?
            </h2>

            <p className="text-green-100 mt-2">
              Find the right professional for your home today.
            </p>

          </div>

          <NavLink
            to="/services"
            className="shrink-0 bg-white text-green-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 hover:scale-105 transition-all"
          >
            Book Your Service →
          </NavLink>

        </div>

      </section>


      {/* ================= RECENT BOOKINGS ================= */}

      <section className="max-w-7xl mx-auto px-6 pb-16">

        <div className="flex justify-between items-center">

          <div>

            <h2 className="text-2xl font-extrabold text-gray-900">
              Recent Bookings
            </h2>

            <p className="text-gray-500 mt-1">
              Keep track of your home services.
            </p>

          </div>

        </div>

        <div className="mt-6 bg-white border border-gray-200 rounded-2xl p-10 text-center">

          <div className="mx-auto w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-3xl">
            📋
          </div>

          <h3 className="mt-5 text-xl font-bold text-gray-900">
            No bookings yet
          </h3>

          <p className="mt-2 text-gray-500">
            Your upcoming bookings will appear here.
          </p>

          <NavLink
            to="/services"
            className="inline-block mt-6 bg-gray-900 text-white px-7 py-3 rounded-xl font-semibold hover:bg-green-600 transition-all"
          >
            Book Your First Service
          </NavLink>

        </div>

      </section>

    </Layout>
  );
}

export default Home;
