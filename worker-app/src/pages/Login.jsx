import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Temporary frontend login
    // API authentication will be added later
    navigate("/dashboard");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">

      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            HomeServe
          </h1>

          <p className="mt-2 text-gray-500">
            Worker Portal
          </p>
        </div>

        {/* Login Card */}
        <div className="rounded-2xl bg-white p-6 shadow-lg sm:p-8">

          {/* Title */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Welcome Back
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Login to manage your services and orders.
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-5">

            {/* Phone */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Mobile Number
              </label>

              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter mobile number"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black focus:ring-1 focus:ring-black"
              />
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between">

                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>

                <NavLink
                to="/forgot"
                  type="button"
                  className="text-sm font-medium text-gray-600 hover:text-black"
                >
                  Forgot Password?
                </NavLink>

              </div>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black focus:ring-1 focus:ring-black"
              />
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-2">

              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 rounded border-gray-300"
              />

              <label
                htmlFor="remember"
                className="text-sm text-gray-600"
              >
                Remember me
              </label>

            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full rounded-lg bg-black px-4 py-3 font-semibold text-white transition hover:bg-gray-800"
            >
              Login
            </button>

          </form>

          {/* Signup */}
          <div className="mt-6 border-t border-gray-100 pt-6 text-center">

            <p className="text-sm text-gray-500">
              Don't have a worker account?
            </p>

            <NavLink
              to="/signup"
              className="mt-2 inline-block font-semibold text-black hover:underline"
            >
              Register as a Worker
            </NavLink>

          </div>

        </div>

        {/* Footer Text */}
        <p className="mt-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} HomeServe. All rights reserved.
        </p>

      </div>

    </div>
  );
};

export default Login;