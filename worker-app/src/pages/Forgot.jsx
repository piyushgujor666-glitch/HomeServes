import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Temporary frontend flow
    // OTP/API will be added later
    setSubmitted(true);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">

      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="mb-8 text-center">
          <NavLink
            to="/login"
            className="text-3xl font-bold text-gray-900"
          >
            HomeServe
          </NavLink>

          <p className="mt-2 text-gray-500">
            Worker Portal
          </p>
        </div>

        {/* Card */}
        <div className="rounded-2xl bg-white p-6 shadow-lg sm:p-8">

          {!submitted ? (
            <>
              {/* Title */}
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900">
                  Forgot Password?
                </h1>

                <p className="mt-2 text-sm text-gray-500">
                  Enter your registered mobile number and we'll help you
                  reset your password.
                </p>
              </div>

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                {/* Mobile */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Mobile Number
                  </label>

                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter registered mobile number"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black focus:ring-1 focus:ring-black"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full rounded-lg bg-black px-4 py-3 font-semibold text-white transition hover:bg-gray-800"
                >
                  Send OTP
                </button>

              </form>
            </>
          ) : (
            <>
              {/* Success */}
              <div className="text-center">

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-3xl">
                  ✓
                </div>

                <h1 className="mt-5 text-2xl font-bold text-gray-900">
                  OTP Sent
                </h1>

                <p className="mt-2 text-sm text-gray-500">
                  We've sent an OTP to
                </p>

                <p className="mt-1 font-semibold text-gray-900">
                  {phone}
                </p>

                <button
                  type="button"
                  onClick={() => navigate("/login")}
                  className="mt-6 w-full rounded-lg bg-black px-4 py-3 font-semibold text-white transition hover:bg-gray-800"
                >
                  Back to Login
                </button>

              </div>
            </>
          )}

          {/* Back to Login */}
          {!submitted && (
            <div className="mt-6 text-center">
              <NavLink
                to="/login"
                className="text-sm font-semibold text-gray-700 hover:text-black hover:underline"
              >
                ← Back to Login
              </NavLink>
            </div>
          )}

        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} HomeServe. All rights reserved.
        </p>

      </div>
    </div>
  );
};

export default ForgotPassword;