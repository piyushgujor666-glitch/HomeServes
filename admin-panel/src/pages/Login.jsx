import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

import fix from "../assets/FIX.jpg";
import image from "../assets/Login_bg.png";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // Start loading
    setLoading(true);

    console.log("Login:", {
      email,
      password,
    });

    // Wait 9 seconds, then go to admin dashboard
    setTimeout(() => {
      navigate("/admin/dashboard");
    }, 3000);
  };

  return (
    <div
      className="min-h-screen bg-[#FBFAF7] flex items-center justify-center px-4 py-8 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Main Container */}
      <div className="w-full max-w-md">

        {/* ================= BRAND ================= */}
        <div className="text-center mb-7">

          {/* Logo + Brand */}
          <div className="inline-flex items-center gap-3 mb-4">

            <img
              src={fix}
              alt="FixMate Logo"
              className="w-12 h-12 object-contain rounded-xl"
            />

            <span className="text-2xl font-bold text-[#16302B]">
              Fix<span className="text-[#0E6B5C]">maTe</span>
            </span>

          </div>

          {/* Heading */}
          <h1 className="text-3xl font-bold text-[#16302B]">
            Welcome Back
          </h1>

          <p className="text-[#8A8A82] mt-2 text-sm">
            Login to your FixMate account
          </p>

        </div>

        {/* ================= CARD ================= */}
        <div className="bg-white rounded-2xl border border-[#E3E1DA] shadow-[0_8px_30px_rgba(22,48,43,0.06)] p-7 sm:p-8">

          {/* ================= FORM ================= */}
          <form onSubmit={handleLogin} className="space-y-5">

            {/* ================= EMAIL ================= */}
            <div>

              <label className="block text-sm font-semibold text-[#16302B] mb-2">
                Email Address
              </label>

              <div className="relative">

                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8A8A82]" />

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                  className="
                    w-full
                    pl-12
                    pr-4
                    py-3.5
                    bg-[#FBFAF7]
                    border
                    border-[#E3E1DA]
                    rounded-xl
                    text-[#16302B]
                    placeholder-[#A5A49D]
                    outline-none
                    transition
                    focus:border-[#0E6B5C]
                    focus:ring-4
                    focus:ring-[#0E6B5C]/10
                    disabled:opacity-60
                    disabled:cursor-not-allowed
                  "
                />

              </div>

            </div>

            {/* ================= PASSWORD ================= */}
            <div>

              <label className="block text-sm font-semibold text-[#16302B] mb-2">
                Password
              </label>

              <div className="relative">

                <LockKeyhole className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8A8A82]" />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={loading}
                  className="
                    w-full
                    pl-12
                    pr-12
                    py-3.5
                    bg-[#FBFAF7]
                    border
                    border-[#E3E1DA]
                    rounded-xl
                    text-[#16302B]
                    placeholder-[#A5A49D]
                    outline-none
                    transition
                    focus:border-[#0E6B5C]
                    focus:ring-4
                    focus:ring-[#0E6B5C]/10
                    disabled:opacity-60
                    disabled:cursor-not-allowed
                  "
                />

                {/* Show / Hide Password */}
                <button
                  type="button"
                  disabled={loading}
                  onClick={() => setShowPassword(!showPassword)}
                  className="
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    text-[#8A8A82]
                    hover:text-[#16302B]
                    transition
                    disabled:opacity-50
                  "
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>

              </div>

            </div>

            {/* ================= FORGOT PASSWORD ================= */}
            <div className="flex justify-end">

              <Link
                to="/forgot"
                className="
                  text-sm
                  font-semibold
                  text-[#0E6B5C]
                  hover:text-[#16302B]
                  transition
                "
              >
                Forgot Password?
              </Link>

            </div>

            {/* ================= LOGIN BUTTON ================= */}
            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                flex
                items-center
                justify-center
                gap-2
                bg-[#0E6B5C]
                text-white
                py-3.5
                rounded-xl
                font-semibold
                shadow-sm
                hover:bg-[#0B5A4D]
                hover:shadow-md
                transition-all
                duration-200
                disabled:opacity-70
                disabled:cursor-not-allowed
                disabled:hover:bg-[#0E6B5C]
              "
            >
              {loading ? (
                <>
                  {/* Loading Spinner */}
                  <span
                    className="
                      w-5
                      h-5
                      border-2
                      border-white
                      border-t-transparent
                      rounded-full
                      animate-spin
                    "
                  />

                  Logging in...
                </>
              ) : (
                <>
                  Login

                  <ArrowRight className="w-5 h-5" />
                </>
              )}

            </button>

          </form>

          {/* ================= DIVIDER ================= */}
          <div className="flex items-center gap-3 my-6">

            <div className="flex-1 h-px bg-[#EEECE5]" />

            <span className="text-xs text-[#A5A49D]">
              OR
            </span>

            <div className="flex-1 h-px bg-[#EEECE5]" />

          </div>

          {/* ================= SIGN UP ================= */}
          <p className="text-center text-sm text-[#8A8A82]">

            Don't have an account?

            <Link
              to="/signup"
              className="
                ml-1
                text-[#0E6B5C]
                font-semibold
                hover:text-[#16302B]
                transition
              "
            >
              Sign Up
            </Link>

          </p>

        </div>

        {/* ================= SECURITY ================= */}
        <div className="flex items-center justify-center gap-2 mt-5 text-xs text-black">

          <ShieldCheck className="w-4 h-4 text-black" />

          <span>
            Secure FixMate Login
          </span>

        </div>

        {/* ================= FOOTER ================= */}
        <p className="text-center text-xs text-black mt-3">
          © 2026 FixMate. All rights reserved.
        </p>

      </div>

    </div>
  );
};

export default Login;