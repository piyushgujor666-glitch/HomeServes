import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-3xl font-bold text-center text-gray-800">
          Forgot Password?
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Enter your email to reset your password
        </p>

        <form
          onSubmit={handleForgotPassword}
          className="mt-8 space-y-5"
        >

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg
              outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="text-right">
          <Link
              to="/forgot-phone-temp"
              className="text-sm text-blue-600 font-medium hover:underline"
          >
              Using Phone Number
          </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg
            font-semibold hover:bg-blue-700 transition"
          >
            Send Reset Link
          </button>

        </form>

        {message && (
          <p className="mt-5 text-center text-green-600 text-sm">
            {message}
          </p>
        )}

        <p className="text-center text-gray-600 mt-6">
          Remember your password?{" "}
          <Link
            to="/login"
            className="text-blue-600 font-semibold"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default ForgotPassword;