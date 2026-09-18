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

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    console.log("Login:", {
      email,
      password,
    });

    // Go to admin dashboard
    navigate("/admin/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#FBFAF7] flex items-center justify-center px-4 py-8">

      {/* Main Card */}
      <div className="w-full max-w-md">

        {/* Brand */}
        <div className="text-center mb-7">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-11 h-11 rounded-xl bg-[#16302B] flex items-center justify-center shadow-sm">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>

            <span className="text-2xl font-bold text-[#16302B]">
              Home<span className="text-[#0E6B5C]">Serve</span>
            </span>
          </div>

          <h1 className="text-3xl font-bold text-[#16302B]">
            Welcome Back
          </h1>

          <p className="text-[#8A8A82] mt-2 text-sm">
            Login to your admin account
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl border border-[#E3E1DA] shadow-[0_8px_30px_rgba(22,48,43,0.06)] p-7 sm:p-8">

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-5">

            {/* Email */}
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
                  className="w-full pl-12 pr-4 py-3.5 bg-[#FBFAF7]
                  border border-[#E3E1DA] rounded-xl
                  text-[#16302B] placeholder-[#A5A49D]
                  outline-none transition
                  focus:border-[#0E6B5C]
                  focus:ring-4 focus:ring-[#0E6B5C]/10"
                />
              </div>
            </div>

            {/* Password */}
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
                  className="w-full pl-12 pr-12 py-3.5 bg-[#FBFAF7]
                  border border-[#E3E1DA] rounded-xl
                  text-[#16302B] placeholder-[#A5A49D]
                  outline-none transition
                  focus:border-[#0E6B5C]
                  focus:ring-4 focus:ring-[#0E6B5C]/10"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2
                  text-[#8A8A82] hover:text-[#16302B] transition"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">
              <Link
                to="/forgot"
                className="text-sm font-semibold text-[#0E6B5C]
                hover:text-[#16302B] transition"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2
              bg-[#0E6B5C] text-white py-3.5 rounded-xl
              font-semibold shadow-sm
              hover:bg-[#0B5A4D]
              hover:shadow-md transition-all duration-200"
            >
              Login
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          {/* Signup */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-[#EEECE5]" />
            <span className="text-xs text-[#A5A49D]">OR</span>
            <div className="flex-1 h-px bg-[#EEECE5]" />
          </div>

          <p className="text-center text-sm text-[#8A8A82]">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-[#0E6B5C] font-semibold hover:text-[#16302B] transition"
            >
              Sign Up
            </Link>
          </p>
        </div>

        {/* Security */}
        <div className="flex items-center justify-center gap-2 mt-5 text-xs text-[#8A8A82]">
          <ShieldCheck className="w-4 h-4 text-[#0E6B5C]" />
          <span>Secure Admin Login</span>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-[#A5A49D] mt-3">
          © 2026 HomeServe. All rights reserved.
        </p>

      </div>
    </div>
  );
};

export default Login;