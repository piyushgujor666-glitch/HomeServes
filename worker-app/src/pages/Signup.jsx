import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    service: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Temporary frontend signup
    // Backend/API will be added later

    console.log("Worker Signup:", formData);

    navigate("/dashboard");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-10">

      <div className="w-full max-w-lg">

        {/* Logo */}
        <div className="mb-8 text-center">

          <NavLink
            to="/login"
            className="text-3xl font-bold text-gray-900"
          >
            HomeServe
          </NavLink>

          <p className="mt-2 text-gray-500">
            Worker Registration
          </p>

        </div>

        {/* Signup Card */}
        <div className="rounded-2xl bg-white p-6 shadow-lg sm:p-8">

          {/* Title */}
          <div className="mb-6">

            <h1 className="text-2xl font-bold text-gray-900">
              Create Worker Account
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Register to start receiving service orders.
            </p>

          </div>

          <form
            onSubmit={handleSignup}
            className="space-y-5"
          >

            {/* Full Name */}
            <div>

              <label className="mb-2 block text-sm font-medium text-gray-700">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black focus:ring-1 focus:ring-black"
              />

            </div>

            {/* Phone */}
            <div>

              <label className="mb-2 block text-sm font-medium text-gray-700">
                Mobile Number
              </label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter mobile number"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black focus:ring-1 focus:ring-black"
              />

            </div>

            {/* Email */}
            <div>

              <label className="mb-2 block text-sm font-medium text-gray-700">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black focus:ring-1 focus:ring-black"
              />

            </div>

            {/* Service */}
            <div>

              <label className="mb-2 block text-sm font-medium text-gray-700">
                Primary Service
              </label>

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-black focus:ring-1 focus:ring-black"
              >

                <option value="">
                  Select your service
                </option>

                <option value="plumber">
                  Plumber
                </option>

                <option value="electrician">
                  Electrician
                </option>

                <option value="ac-repair">
                  AC Repair
                </option>

                <option value="cleaning">
                  Cleaning
                </option>

                <option value="painting">
                  Painting
                </option>

                <option value="appliance-repair">
                  Appliance Repair
                </option>

              </select>

            </div>

            {/* Password */}
            <div>

              <label className="mb-2 block text-sm font-medium text-gray-700">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
                required
                minLength={6}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black focus:ring-1 focus:ring-black"
              />

            </div>

            {/* Confirm Password */}
            <div>

              <label className="mb-2 block text-sm font-medium text-gray-700">
                Confirm Password
              </label>

              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                required
                minLength={6}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black focus:ring-1 focus:ring-black"
              />

            </div>

            {/* Terms */}
            <div className="flex items-start gap-2">

              <input
                type="checkbox"
                id="terms"
                required
                className="mt-1 h-4 w-4 rounded border-gray-300"
              />

              <label
                htmlFor="terms"
                className="text-sm text-gray-600"
              >
                I agree to the{" "}
                <button
                  type="button"
                  className="font-medium text-black hover:underline"
                >
                  Terms & Conditions
                </button>{" "}
                and{" "}
                <button
                  type="button"
                  className="font-medium text-black hover:underline"
                >
                  Privacy Policy
                </button>
              </label>

            </div>

            {/* Signup Button */}
            <button
              type="submit"
              className="w-full rounded-lg bg-black px-4 py-3 font-semibold text-white transition hover:bg-gray-800"
            >
              Create Account
            </button>

          </form>

          {/* Login */}
          <div className="mt-6 border-t border-gray-100 pt-6 text-center">

            <p className="text-sm text-gray-500">
              Already have a worker account?
            </p>

            <NavLink
              to="/login"
              className="mt-2 inline-block font-semibold text-black hover:underline"
            >
              Login
            </NavLink>

          </div>

        </div>

        {/* Bottom */}
        <p className="mt-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} HomeServe. All rights reserved.
        </p>

      </div>

    </div>
  );
};

export default Signup;