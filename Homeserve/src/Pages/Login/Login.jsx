import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/FIX.jpg";
import bg from "../../assets/Background.png";

export default function LoginForm() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{ backgroundImage: `url(${bg})` }}
    >

      {/* Background overlay */}
      <div className="absolute inset-0 bg-slate-950/70"></div>

      {/* Decorative shapes */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-20 w-[500px] h-[500px] bg-amber-400/10 rounded-full blur-3xl"></div>


      {/* Main container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-5 py-8">

        <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-10 items-center">


          {/* ================= LEFT SIDE ================= */}

          <div className="hidden lg:block text-white px-8">

            {/* Logo */}
            <img
              src={logo}
              alt="Fixmate"
              className="w-40 h-auto rounded-2xl mb-10 shadow-2xl"
            />

            <div className="max-w-xl">

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm text-green-300 mb-6">
                <span className="w-2 h-2 rounded-full bg-green-400"></span>
                Your home, our responsibility
              </div>

              <h1 className="text-5xl xl:text-6xl font-extrabold leading-tight">
                Welcome back to
                <br />

                <span className="text-amber-400">
                  Fixma🔨e
                </span>
              </h1>

              <p className="mt-6 text-lg text-gray-200 leading-relaxed max-w-lg">
                One place for all your home service needs.
                Book trusted professionals, manage your bookings,
                and keep your home running smoothly.
              </p>


              {/* Feature cards */}

              <div className="mt-10 grid grid-cols-2 gap-4 max-w-lg">

                <div className="bg-white/10 border border-white/10 backdrop-blur-md rounded-2xl p-5">
                  <div className="text-2xl mb-3">
                    🛠️
                  </div>

                  <h3 className="font-bold">
                    Trusted Experts
                  </h3>

                  <p className="text-sm text-gray-300 mt-1">
                    Skilled professionals
                  </p>
                </div>


                <div className="bg-white/10 border border-white/10 backdrop-blur-md rounded-2xl p-5">
                  <div className="text-2xl mb-3">
                    ⚡
                  </div>

                  <h3 className="font-bold">
                    Easy Booking
                  </h3>

                  <p className="text-sm text-gray-300 mt-1">
                    Quick & convenient
                  </p>
                </div>

              </div>


              {/* Bottom trust */}

              <div className="flex items-center gap-3 mt-8 text-sm text-gray-300">

                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-slate-900 flex items-center justify-center">
                    👤
                  </div>

                  <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-slate-900 flex items-center justify-center">
                    👤
                  </div>

                  <div className="w-8 h-8 rounded-full bg-yellow-500 border-2 border-slate-900 flex items-center justify-center">
                    👤
                  </div>
                </div>

                <span>
                  Helping homeowners get things done.
                </span>

              </div>

            </div>

          </div>



          {/* ================= LOGIN CARD ================= */}

          <div className="w-full max-w-md mx-auto">

            {/* Mobile logo */}

            <div className="lg:hidden text-center mb-6">

              <img
                src={logo}
                alt="Fixmate"
                className="w-32 mx-auto rounded-2xl shadow-xl"
              />

            </div>


            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 px-6 py-8 sm:px-9 sm:py-10">

              {/* Header */}

              <div className="mb-8">

                <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center text-2xl mb-5">
                  👋
                </div>

                <h2 className="text-3xl font-extrabold text-gray-900">
                  Welcome back
                </h2>

                <p className="text-gray-500 mt-2 text-sm">
                  Sign in to continue to your Fixmate account.
                </p>

              </div>


              {/* Form */}

              <form className="space-y-5">


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

                  <div className="flex items-center justify-between mb-2">

                    <label
                      htmlFor="password"
                      className="text-sm font-semibold text-gray-800"
                    >
                      Password
                    </label>

                    <NavLink
                      to="/forgot"
                      className="text-xs font-semibold text-green-600 hover:text-green-700"
                    >
                      Forgot password?
                    </NavLink>

                  </div>


                  <div className="relative">

                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      🔒
                    </span>

                    <input
                      type={isVisible ? "text" : "password"}
                      id="password"
                      name="password"
                      placeholder="Enter your password"
                      required
                      className="w-full pl-11 pr-12 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm outline-none transition-all duration-200 focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                    />


                    <button
                      type="button"
                      onClick={() => setIsVisible(!isVisible)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 transition"
                      aria-label={
                        isVisible
                          ? "Hide password"
                          : "Show password"
                      }
                    >
                      {isVisible ? "🙈" : "👁️"}
                    </button>

                  </div>

                </div>



                {/* REMEMBER */}

                <div className="flex items-center">

                  <label className="flex items-center gap-2 cursor-pointer">

                    <input
                      type="checkbox"
                      name="remember"
                      className="w-4 h-4 accent-green-600 cursor-pointer"
                    />

                    <span className="text-sm text-gray-600">
                      Remember me
                    </span>

                  </label>

                </div>



                {/* SIGN IN */}

                <NavLink
                  to="/home"
                  className="group w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold text-sm shadow-lg shadow-green-600/20 hover:shadow-green-600/30 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Sign in

                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>

                </NavLink>

              </form>



              {/* Divider */}

              <div className="flex items-center gap-4 my-7">

                <div className="h-px bg-gray-200 flex-1"></div>

                <span className="text-xs font-medium text-gray-400">
                  OR CONTINUE WITH
                </span>

                <div className="h-px bg-gray-200 flex-1"></div>

              </div>



              {/* SOCIAL LOGIN */}

              <div className="grid grid-cols-2 gap-3">

                <button
                  type="button"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all text-sm font-semibold text-gray-700"
                >
                  <span className="text-lg font-bold">
                    G
                  </span>

                  Google
                </button>


                <button
                  type="button"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all text-sm font-semibold text-gray-700"
                >
                  <span className="text-lg">
                    
                  </span>

                  Apple
                </button>

              </div>



              {/* Register */}

              <p className="text-center text-sm text-gray-500 mt-8">

                Don't have an account?

                <NavLink
                  to="/signup"
                  className="ml-1 font-bold text-green-600 hover:text-green-700"
                >
                  Create one
                </NavLink>

              </p>


              {/* Security */}

              <div className="mt-7 pt-5 border-t border-gray-100 flex items-center justify-center gap-2 text-xs text-gray-400">

                <span>
                  🔐
                </span>

                <span>
                  Your information is securely protected
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

