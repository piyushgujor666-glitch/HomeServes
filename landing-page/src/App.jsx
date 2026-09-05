import React from "react";
import { Routes, Route, Link } from "react-router-dom";

/* =========================================================
   DEPLOYED PROJECT LINKS
========================================================= */

const USER_URL = "https://home-serves-wism.vercel.app/";
const WORKER_URL = "https://home-serves-hs1g.vercel.app/";
const ADMIN_URL = "https://home-serves-biwa.vercel.app/";


/* =========================================================
   HOME / LANDING PAGE
========================================================= */

function Home() {
  return (
    <div className="min-h-screen bg-white text-[#17323a]">

      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600 text-2xl text-white shadow-md">
              ⌂
            </div>

            <div>
              <h1 className="text-xl font-bold">
                Home<span className="text-emerald-600">Serve</span>
              </h1>

              <p className="text-[10px] text-gray-500">
                Your Home. Our Care.
              </p>
            </div>

          </Link>


          {/* NAVIGATION */}
          <div className="hidden items-center gap-8 md:flex">

            <Link
              to="/"
              className="font-medium transition hover:text-emerald-600"
            >
              Home
            </Link>

            <a
              href={USER_URL}
              className="font-medium transition hover:text-emerald-600"
            >
              User
            </a>

            <a
              href={WORKER_URL}
              className="font-medium transition hover:text-emerald-600"
            >
              Worker
            </a>

            <a
              href={ADMIN_URL}
              className="font-medium transition hover:text-emerald-600"
            >
              Admin
            </a>

          </div>


          {/* GET STARTED */}
          <a
            href={USER_URL}
            className="rounded-lg bg-emerald-600 px-5 py-3 font-semibold text-white shadow-md transition hover:bg-emerald-700"
          >
            Get Started
          </a>

        </div>

      </nav>


      {/* ================= HERO ================= */}
      <section className="overflow-hidden bg-gradient-to-r from-emerald-50 via-white to-green-50">

        <div className="mx-auto grid min-h-[600px] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div>

            <p className="mb-5 text-sm font-bold tracking-[3px] text-emerald-600">
              WELCOME TO HOMESERVE
            </p>


            <h2 className="text-5xl font-extrabold leading-tight md:text-6xl">

              Reliable Home Services

              <br />

              <span className="text-emerald-600">
                At Your Fingertips
              </span>

            </h2>


            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              HomeServe connects you with trusted professionals
              for all your home service needs. Simple booking,
              reliable workers, and quality service.
            </p>


            {/* BUTTONS */}
            <div className="mt-9 flex flex-wrap gap-4">

              <a
                href={USER_URL}
                className="rounded-lg bg-emerald-600 px-7 py-4 font-bold text-white shadow-lg transition hover:bg-emerald-700"
              >
                Book a Service →
              </a>


              <a
                href="#how-it-works"
                className="rounded-lg border-2 border-emerald-600 px-7 py-4 font-bold text-gray-700 transition hover:bg-emerald-50"
              >
                How It Works
              </a>

            </div>


            {/* FEATURES */}
            <div className="mt-11 flex flex-wrap gap-8">

              <div className="flex items-center gap-3">

                <span className="text-2xl">
                  🛡️
                </span>

                <span className="text-sm font-medium">
                  Trusted
                  <br />
                  Professionals
                </span>

              </div>


              <div className="flex items-center gap-3">

                <span className="text-2xl">
                  ⚡
                </span>

                <span className="text-sm font-medium">
                  Quick
                  <br />
                  Booking
                </span>

              </div>


              <div className="flex items-center gap-3">

                <span className="text-2xl">
                  👍
                </span>

                <span className="text-sm font-medium">
                  Quality
                  <br />
                  Assurance
                </span>

              </div>

            </div>

          </div>


          {/* RIGHT SIDE */}
          <div className="relative">

            <div className="relative flex min-h-[470px] items-end justify-center overflow-hidden rounded-[35px] bg-gradient-to-br from-emerald-100 to-green-200 shadow-xl">

              {/* HOUSE */}
              <div className="absolute left-1/2 top-8 -translate-x-1/2 text-[180px] opacity-30">
                🏠
              </div>


              {/* WORKERS */}
              <div className="relative z-10 text-[100px]">
                👨‍🔧
              </div>

              <div className="relative z-10 -ml-7 text-[135px]">
                👨‍🔧
              </div>

              <div className="relative z-10 -ml-7 text-[100px]">
                👷
              </div>


              {/* CARD */}
              <div className="absolute bottom-7 right-7 rounded-2xl bg-white px-6 py-4 shadow-xl">

                <p className="font-bold">
                  Skilled Workers.
                </p>

                <p className="font-bold text-emerald-600">
                  Happier Homes.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= SERVICES PREVIEW ================= */}
      <section className="px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">

            <p className="font-bold tracking-widest text-emerald-600">
              WHAT WE OFFER
            </p>

            <h2 className="mt-2 text-4xl font-bold">
              Home Services Made Simple
            </h2>

            <p className="mt-3 text-gray-500">
              Find the right professional for your home.
            </p>

          </div>


          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">

            {[
              ["🔧", "Plumbing"],
              ["⚡", "Electrical"],
              ["🎨", "Painting"],
              ["🧹", "Cleaning"],
              ["⚙️", "Appliance Repair"],
              ["🏠", "Home Maintenance"],
            ].map(([icon, title]) => (

              <div
                key={title}
                className="rounded-2xl border border-gray-200 bg-white p-6 text-center transition hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-2xl">
                  {icon}
                </div>

                <h3 className="mt-5 font-bold">
                  {title}
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Professional service
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= HOW IT WORKS ================= */}
      <section
        id="how-it-works"
        className="bg-gray-50 px-6 py-20"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">

            <p className="font-bold tracking-widest text-emerald-600">
              SIMPLE PROCESS
            </p>

            <h2 className="mt-2 text-4xl font-bold">
              How It Works
            </h2>

            <p className="mt-3 text-gray-500">
              Get your home service in four easy steps.
            </p>

          </div>


          <div className="grid gap-8 md:grid-cols-4">

            {[
              ["1", "Choose Service", "Select the service you need."],
              ["2", "Book Schedule", "Choose your preferred date and time."],
              ["3", "Worker Assigned", "A trusted worker handles your request."],
              ["4", "Service Completed", "Enjoy your completed home service."],
            ].map(([number, title, description]) => (

              <div
                key={number}
                className="rounded-2xl bg-white p-7 text-center shadow-sm"
              >

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-xl font-bold text-white">
                  {number}
                </div>

                <h3 className="mt-5 font-bold">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= CHOOSE YOUR PORTAL ================= */}
      <section className="px-6 py-20">

        <div className="mx-auto max-w-6xl">

          <div className="mb-12 text-center">

            <h2 className="text-4xl font-bold">
              Choose Your Portal
            </h2>

            <p className="mt-3 text-gray-500">
              Select the platform you want to access.
            </p>

          </div>


          <div className="grid gap-6 md:grid-cols-3">


            {/* ================= USER ================= */}
            <a
              href={USER_URL}
              className="group rounded-3xl border border-gray-200 p-8 text-center transition hover:-translate-y-2 hover:border-emerald-500 hover:shadow-xl"
            >

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-4xl">
                👤
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                User
              </h3>

              <p className="mt-3 text-gray-500">
                Book services, manage bookings and track your requests.
              </p>

              <p className="mt-6 font-bold text-emerald-600">
                Open User Portal →
              </p>

            </a>


            {/* ================= WORKER ================= */}
            <a
              href={WORKER_URL}
              className="group rounded-3xl border border-gray-200 p-8 text-center transition hover:-translate-y-2 hover:border-emerald-500 hover:shadow-xl"
            >

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-4xl">
                🛠️
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Worker
              </h3>

              <p className="mt-3 text-gray-500">
                Manage assigned jobs, update status and view your work.
              </p>

              <p className="mt-6 font-bold text-emerald-600">
                Open Worker Portal →
              </p>

            </a>


            {/* ================= ADMIN ================= */}
            <a
              href={ADMIN_URL}
              className="group rounded-3xl border border-gray-200 p-8 text-center transition hover:-translate-y-2 hover:border-emerald-500 hover:shadow-xl"
            >

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-4xl">
                🔐
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Admin
              </h3>

              <p className="mt-3 text-gray-500">
                Manage users, workers, services and bookings.
              </p>

              <p className="mt-6 font-bold text-emerald-600">
                Open Admin Portal →
              </p>

            </a>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="bg-emerald-600 px-6 py-16 text-center text-white">

        <h2 className="text-4xl font-bold">
          Your Home Deserves the Best
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-emerald-50">
          Get reliable professionals for your home service needs.
        </p>

        <a
          href={USER_URL}
          className="mt-7 inline-block rounded-lg bg-white px-8 py-4 font-bold text-emerald-700 shadow-lg transition hover:bg-gray-100"
        >
          Get Started →
        </a>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="bg-[#17323a] px-6 py-12 text-white">

        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">


          {/* LOGO */}
          <div>

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600 text-2xl">
                ⌂
              </div>

              <div>

                <h2 className="text-xl font-bold">
                  Home<span className="text-emerald-400">
                    Serve
                  </span>
                </h2>

                <p className="text-xs text-gray-400">
                  Your Home. Our Care.
                </p>

              </div>

            </div>

          </div>


          {/* PORTALS */}
          <div>

            <h3 className="mb-4 font-bold">
              Portals
            </h3>

            <div className="flex flex-col gap-3 text-sm">

              <a
                href={USER_URL}
                className="text-gray-300 hover:text-emerald-400"
              >
                User
              </a>

              <a
                href={WORKER_URL}
                className="text-gray-300 hover:text-emerald-400"
              >
                Worker
              </a>

              <a
                href={ADMIN_URL}
                className="text-gray-300 hover:text-emerald-400"
              >
                Admin
              </a>

            </div>

          </div>


          {/* SOCIAL */}
          <div>

            <h3 className="mb-4 font-bold">
              Follow Us
            </h3>

            <div className="flex gap-3">

              {["f", "◎", "𝕏", "in", "▶"].map((item) => (

                <div
                  key={item}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-500 text-sm"
                >
                  {item}
                </div>

              ))}

            </div>

          </div>


          {/* SLOGAN */}
          <div className="text-center md:text-right">

            <p className="text-xl italic text-emerald-400">
              Better Homes,
              <br />
              Brighter Lives
            </p>

          </div>

        </div>


        <div className="mx-auto mt-10 max-w-7xl border-t border-gray-600 pt-5 text-center text-xs text-gray-400">
          © 2026 HomeServe. All rights reserved.
        </div>

      </footer>

    </div>
  );
}


/* =========================================================
   404 PAGE
========================================================= */

function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-6 text-center">

      <div className="text-7xl">
        🏠
      </div>

      <h1 className="mt-6 text-5xl font-bold">
        404
      </h1>

      <p className="mt-3 text-gray-500">
        The page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="mt-7 rounded-lg bg-emerald-600 px-6 py-3 font-bold text-white hover:bg-emerald-700"
      >
        Go Back Home
      </Link>

    </div>
  );
}


/* =========================================================
   ROUTER
========================================================= */

function App() {
  return (
    <Routes>

      {/* Landing Page */}
      <Route
        path="/"
        element={<Home />}
      />

      {/* 404 */}
      <Route
        path="*"
        element={<NotFound />}
      />

    </Routes>
  );
}


export default App;