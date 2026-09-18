import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  LockKeyhole,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleForgotPassword = (e) => {
    e.preventDefault();

    // Frontend demo only
    console.log("Reset password for:", email);

    setMessage("Password reset link has been sent to your email.");
  };

  return (
    <div className="min-h-screen bg-[#FBFAF7]">

      {/* Top Accent */}
      <div className="h-1.5 bg-[#0E6B5C]" />

      <div className="flex min-h-[calc(100vh-6px)] items-center justify-center px-4 py-10">

        <div className="w-full max-w-md">

          {/* Logo */}
          <div className="mb-7 text-center">

            <Link
              to="/login"
              className="inline-flex flex-col items-center"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#16302B] shadow-sm">
                <ShieldCheck
                  size={28}
                  className="text-white"
                />
              </div>

              <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#16302B]">
                HomeServe
              </h1>
            </Link>

            <p className="mt-1 text-sm font-medium text-[#8A8A82]">
              Worker Portal
            </p>

          </div>

          {/* Card */}
          <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5 sm:p-8">

            {/* Header */}
            <div className="mb-7">

              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#0E6B5C]/10">
                <LockKeyhole
                  size={20}
                  className="text-[#0E6B5C]"
                />
              </div>

              <h2 className="text-2xl font-bold text-[#16302B]">
                Forgot Password?
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#8A8A82]">
                Enter your registered email address and we'll send you a
                password reset link.
              </p>

            </div>

            {/* Form */}
            <form
              onSubmit={handleForgotPassword}
              className="space-y-5"
            >

              {/* Email */}
              <div>

                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-[#3F4844]"
                >
                  Email Address
                </label>

                <div className="relative">

                  <Mail
                    size={18}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#8A8A82]"
                  />

                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setMessage("");
                    }}
                    required
                    className="w-full rounded-xl border border-[#E3E1DA] bg-[#FBFAF7] py-3.5 pl-10 pr-3 text-sm text-[#16302B] outline-none transition placeholder:text-[#A6A69C] focus:border-[#0E6B5C] focus:bg-white focus:ring-2 focus:ring-[#0E6B5C]/10"
                  />

                </div>

              </div>

              {/* Phone Option */}
              <div className="text-right">

                <Link
                  to="/forgot-phone-temp"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#0E6B5C] transition hover:text-[#16302B] hover:underline"
                >
                  Using Phone Number
                  <ArrowRight size={14} />
                </Link>

              </div>

              {/* Security Info */}
              <div className="flex gap-3 rounded-xl bg-[#0E6B5C]/5 p-4">

                <ShieldCheck
                  size={18}
                  className="mt-0.5 shrink-0 text-[#0E6B5C]"
                />

                <p className="text-xs leading-5 text-[#6B6B62]">
                  We'll send a secure password reset link to your registered
                  email address.
                </p>

              </div>

              {/* Button */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#16302B] px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0E6B5C]"
              >
                Send Reset Link

                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

            </form>

            {/* Success Message */}
            {message && (
              <div className="mt-5 flex items-start gap-3 rounded-xl bg-green-50 p-4">

                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0 text-green-600"
                />

                <p className="text-sm leading-5 font-medium text-green-700">
                  {message}
                </p>

              </div>
            )}

            {/* Login */}
            <div className="mt-7 border-t border-[#EEECE5] pt-6 text-center">

              <p className="text-sm text-[#8A8A82]">
                Remember your password?
              </p>

              <Link
                to="/login"
                className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0E6B5C] transition hover:text-[#16302B] hover:underline"
              >
                <ArrowLeft size={15} />
                Back to Login
              </Link>

            </div>

          </div>

          {/* Bottom */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-[#A6A69C]">
            <ShieldCheck size={14} />
            <span>Your account information is protected.</span>
          </div>

          <p className="mt-3 text-center text-xs text-[#B2B0A8]">
            © {new Date().getFullYear()} HomeServe. All rights reserved.
          </p>

        </div>

      </div>
    </div>
  );
};

export default ForgotPassword;