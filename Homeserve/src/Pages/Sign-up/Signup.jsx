import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import backgroundimage from "../../assets/login_bg.png";
import logo from "../../assets/FIX.jpg"

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <main
      className="min-h-screen bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: `url(${backgroundimage})` }}
    >

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-slate-950/70"></div>

      {/* Decorative glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>

      <div className="absolute -bottom-40 -right-20 w-[500px] h-[500px] bg-amber-400/10 rounded-full blur-3xl"></div>


      {/* Main wrapper */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-5 py-8">

        <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-10 items-center">


          {/* ================= LEFT SIDE ================= */}

          <div className="hidden lg:block text-white px-8">

            {/* Logo / Brand */}

            <div className="mb-10">

              <div className="inline-flex items-center gap-3">

                <img src={logo} alt="logo" className="h-10"/>

                <div>
                  <h2 className="text-2xl font-extrabold">
                    Fixma🔨e
                  </h2>

                  <p className="text-xs text-gray-300">
                    Home services made simple
                  </p>
                </div>

              </div>

            </div>


            {/* Heading */}

            <div className="max-w-xl">

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm text-green-300 mb-6">

                <span className="w-2 h-2 rounded-full bg-green-400"></span>

                Join the Fixm🔨te community

              </div>


              <h1 className="text-5xl xl:text-6xl font-extrabold leading-tight">

                Your home deserves
                <br />

                <span className="text-amber-400">
                  better care.
                </span>

              </h1>


              <p className="mt-6 text-lg text-gray-200 leading-relaxed max-w-lg">

                Create your Fixmate account and get easy access
                to trusted professionals for all your home service needs.

              </p>


              {/* Benefits */}

              <div className="mt-10 space-y-5">

                <div className="flex items-center gap-4">

                  <div className="w-11 h-11 rounded-xl bg-green-500/20 border border-green-400/20 flex items-center justify-center">
                    ✓
                  </div>

                  <div>
                    <h3 className="font-bold">
                      Trusted Professionals
                    </h3>

                    <p className="text-sm text-gray-300">
                      Find reliable experts for your home.
                    </p>
                  </div>

                </div>


                <div className="flex items-center gap-4">

                  <div className="w-11 h-11 rounded-xl bg-blue-500/20 border border-blue-400/20 flex items-center justify-center">
                    ⚡
                  </div>

                  <div>
                    <h3 className="font-bold">
                      Fast & Easy Booking
                    </h3>

                    <p className="text-sm text-gray-300">
                      Book your service in just a few clicks.
                    </p>
                  </div>

                </div>


                <div className="flex items-center gap-4">

                  <div className="w-11 h-11 rounded-xl bg-yellow-500/20 border border-yellow-400/20 flex items-center justify-center">
                    ⭐
                  </div>

                  <div>
                    <h3 className="font-bold">
                      Quality Service
                    </h3>

                    <p className="text-sm text-gray-300">
                      Get your home problems handled properly.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>



          {/* ================= SIGNUP CARD ================= */}

          <div className="w-full max-w-md mx-auto">


            {/* Mobile Brand */}

            <div className="lg:hidden text-center mb-6">

              <div className="inline-flex items-center gap-3 text-white">

                <img src={logo} alt="logo" className="h-10"/>

                <span className="text-2xl font-extrabold">
                  Fixma🔨e
                </span>

              </div>

            </div>


            {/* Card */}

            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 px-6 py-8 sm:px-9 sm:py-9">


              {/* Header */}

              <div className="mb-7">

                <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center text-2xl mb-5">
                  👋
                </div>

                <h1 className="text-3xl font-extrabold text-gray-900">
                  Create your account
                </h1>

                <p className="text-sm text-gray-500 mt-2">
                  Get started with Fixmate today.
                </p>

              </div>



              <form className="space-y-5">


                {/* NAME */}

                <div>

                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-800 mb-2"
                  >
                    Full name
                  </label>

                  <div className="relative">

                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      👤
                    </span>

                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm outline-none transition-all duration-200 focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                    />

                  </div>

                </div>



                {/* EMAIL */}

                <div>

                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-800 mb-2"
                  >
                    Email address
                  </label>

                  <div className="relative">

                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      ✉️
                    </span>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="you@example.com"
                      required
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm outline-none transition-all duration-200 focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                    />

                  </div>

                </div>



                {/* PASSWORD */}

                <div>

                  <label
                    htmlFor="password"
                    className="block text-sm font-semibold text-gray-800 mb-2"
                  >
                    Password
                  </label>

                  <div className="relative">

                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      🔒
                    </span>

                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      placeholder="Create a password"
                      required
                      className="w-full pl-11 pr-12 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm outline-none transition-all duration-200 focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 transition"
                    >
                      {showPassword ? "🙈" : "👁️"}
                    </button>

                  </div>

                </div>



                {/* CONFIRM PASSWORD */}

                <div>

                  <label
                    htmlFor="confirm-password"
                    className="block text-sm font-semibold text-gray-800 mb-2"
                  >
                    Confirm password
                  </label>

                  <div className="relative">

                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      🔐
                    </span>

                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirm-password"
                      name="confirm-password"
                      placeholder="Confirm your password"
                      required
                      className="w-full pl-11 pr-12 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm outline-none transition-all duration-200 focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 transition"
                    >
                      {showConfirmPassword ? "🙈" : "👁️"}
                    </button>

                  </div>

                </div>



                {/* TERMS */}

                <div className="flex items-start gap-3 pt-1">

                  <input
                    id="tmc"
                    name="tmc"
                    type="checkbox"
                    required
                    className="mt-1 w-4 h-4 accent-green-600 cursor-pointer"
                  />

                  <label
                    htmlFor="tmc"
                    className="text-sm text-gray-500 leading-relaxed cursor-pointer"
                  >
                    I agree to the{" "}

                    <a
                      href="#"
                      className="font-semibold text-green-600 hover:text-green-700"
                    >
                      Terms & Conditions
                    </a>

                    {" "}and acknowledge the privacy policy.
                  </label>

                </div>



                {/* CREATE ACCOUNT */}

                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold text-sm shadow-lg shadow-green-600/20 hover:shadow-green-600/30 hover:-translate-y-0.5 transition-all duration-300"
                >

                  Create account

                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>

                </button>

              </form>



              {/* LOGIN */}

              <p className="text-center text-sm text-gray-500 mt-7">

                Already have an account?

                <NavLink
                  to="/login"
                  className="ml-1 font-bold text-green-600 hover:text-green-700"
                >
                  Login here
                </NavLink>

              </p>



              {/* Security */}

              <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-center gap-2 text-xs text-gray-400">

                <span>
                  🔐
                </span>

                <span>
                  Your account information is securely protected
                </span>

              </div>

            </div>


            {/* Footer */}

            <p className="text-center text-xs text-gray-300 mt-5">
              © 2026 Fixmate · Home services made simple
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}
