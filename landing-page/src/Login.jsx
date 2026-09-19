import { useState } from "react";
import { NavLink } from "react-router-dom";
import img from "./assets/image.png"

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex bg-slate-50">

      {/* ================= LEFT SECTION ================= */}
      <div className="hidden lg:flex lg:w-[55%] min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white px-12 xl:px-24 py-12">

        {/* Background circles */}
        <div className="absolute -right-32 -bottom-32 w-[450px] h-[450px] rounded-full border-[70px] border-white/5" />
        <div className="absolute -left-32 top-[45%] w-64 h-64 rounded-full bg-white/5" />

        <div className="relative z-10 w-full">

          {/* Brand */}
          <div className="flex items-center gap-3">
            <img
              src={img}
              alt="FixMate Logo"
              className="w-14 h-14 object-contain bg-white p-1.5 rounded-xl"
            />

            <span className="text-3xl font-extrabold tracking-tight">
              FixMate
            </span>
          </div>

          {/* Hero Content */}
          <div className="mt-36 max-w-xl">

            <p className="text-sm font-bold tracking-[3px] text-blue-100 mb-5">
              WELCOME TO FIXMATE
            </p>

            <h1 className="text-5xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight">
              Your Home.
              <br />
              <span className="text-blue-200">
                Fixed Right.
              </span>
            </h1>

            <p className="mt-7 text-lg leading-8 text-white/80 max-w-lg">
              Book trusted professionals for plumbing, electrical,
              cleaning, painting, AC repair and more — all in one place.
            </p>

            {/* Features */}
            <div className="mt-10 space-y-4">

              <div className="flex items-center gap-3">
                <span className="w-7 h-7 flex items-center justify-center rounded-full bg-white/15 text-sm">
                  ✓
                </span>
                <span className="text-base">
                  Verified Professionals
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-7 h-7 flex items-center justify-center rounded-full bg-white/15 text-sm">
                  ✓
                </span>
                <span className="text-base">
                  Easy & Fast Booking
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-7 h-7 flex items-center justify-center rounded-full bg-white/15 text-sm">
                  ✓
                </span>
                <span className="text-base">
                  Reliable Home Services
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ================= RIGHT SECTION ================= */}
      <div className="w-full lg:w-[45%] min-h-screen flex items-center justify-center p-5 sm:p-8 bg-slate-50">

        <div className="w-full max-w-[470px] bg-white rounded-3xl shadow-xl shadow-blue-900/10 p-7 sm:p-10">

          {/* Mobile Logo */}
          <div className="flex lg:hidden justify-center items-center gap-3 mb-8">

            <img
              src="/logo.png"
              alt="FixMate Logo"
              className="w-12 h-12 object-contain"
            />

            <h2 className="text-2xl font-extrabold text-blue-600">
              FixMate
            </h2>

          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold text-slate-900">
            Welcome Back
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Login to manage your home services
          </p>

          {/* Form */}
          <form className="mt-8">

            {/* Email */}
            <div className="mb-5">

              <label className="block mb-2 text-sm font-semibold text-slate-700">
                Email Address
              </label>

              <div className="flex items-center h-14 border border-slate-300 rounded-xl px-4 transition focus-within:border-blue-600 focus-within:ring-4 focus-within:ring-blue-100">

                <span className="text-slate-400 mr-3">
                  ✉
                </span>

                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full h-full outline-none text-sm text-slate-800 placeholder:text-slate-400 bg-transparent"
                />

              </div>
            </div>

            {/* Password */}
            <div className="mb-5">

              <label className="block mb-2 text-sm font-semibold text-slate-700">
                Password
              </label>

              <div className="flex items-center h-14 border border-slate-300 rounded-xl px-4 transition focus-within:border-blue-600 focus-within:ring-4 focus-within:ring-blue-100">

                <span className="text-slate-400 mr-3">
                  🔒
                </span>

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  required
                  className="w-full h-full outline-none text-sm text-slate-800 placeholder:text-slate-400 bg-transparent"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="ml-2 text-slate-400 hover:text-blue-600 transition cursor-pointer"
                >
                  {showPassword ? "🙈" : "👁"}
                </button>

              </div>
            </div>

            {/* Options */}
            <div className="flex items-center justify-between mb-6 text-sm">

              <label className="flex items-center gap-2 text-slate-600 cursor-pointer">

                <input
                  type="checkbox"
                  className="w-4 h-4 accent-blue-600 cursor-pointer"
                />

                <span>
                  Remember me
                </span>

              </label>

              <NavLink
                to="/forgot"
                className="font-semibold text-blue-600 hover:text-blue-700 transition"
              >
                Forgot Password?
              </NavLink>

            </div>

            {/* Login Button */}
            <NavLink
              type="submit"
              to="/home"
              className="w-full h-14 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white font-bold text-base flex items-center justify-center gap-3 transition duration-200 shadow-lg shadow-blue-600/20 cursor-pointer"
            >
              Login
              <span className="text-xl">
                →
              </span>
            </NavLink>

          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-7 text-xs text-slate-400">

            <div className="h-px bg-slate-200 flex-1" />

            <span>
              OR
            </span>

            <div className="h-px bg-slate-200 flex-1" />

          </div>

          {/* Signup */}
          <p className="text-center text-sm text-slate-500">

            Don't have an account?

            <NavLink
            to="./Signup"
              className="ml-1 font-bold text-blue-600 hover:text-blue-700"
            >
              Create Account
            </NavLink>

          </p>

          {/* Security */}
          <p className="text-center text-[11px] text-slate-400 mt-6">
            🔒 Your information is securely protected
          </p>

        </div>
      </div>

    </div>
  );
}

export default Login;