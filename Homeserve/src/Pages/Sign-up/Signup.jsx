import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">

      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">


        {/* LEFT SIDE */}

        <div className="hidden md:flex bg-green-700 text-white items-center justify-center p-12">

          <div className="text-center">

            <div className="text-7xl">
              🏠
            </div>

            <h1 className="text-4xl font-bold mt-5">
              HomeServe
            </h1>

            <p className="mt-4 text-green-100 leading-6">
              Reliable Home Services,
              <br />
              Just a Click Away
            </p>

          </div>

        </div>


        {/* RIGHT SIDE */}

        <div className="p-8 sm:p-10 md:p-12 flex items-center">

          <div className="w-full max-w-md mx-auto">


            {/* MOBILE LOGO */}

            <div className="flex md:hidden justify-center items-center gap-2 mb-7">

              <span className="text-4xl">
                🏠
              </span>

              <h2 className="text-2xl font-bold text-green-700">
                HomeServe
              </h2>

            </div>


            <h1 className="text-3xl font-bold text-gray-900 text-center">
              Create Account
            </h1>

            <p className="text-gray-500 text-sm text-center mt-2 mb-7">
              Join HomeServe today
            </p>


            {/* NAME */}

            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full h-11 px-4 border border-gray-300 rounded-lg outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />


            {/* EMAIL */}

            <label className="block text-sm font-semibold text-gray-700 mt-4 mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full h-11 px-4 border border-gray-300 rounded-lg outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />


            {/* PHONE */}

            <label className="block text-sm font-semibold text-gray-700 mt-4 mb-2">
              Phone Number
            </label>

            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full h-11 px-4 border border-gray-300 rounded-lg outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />


            {/* PASSWORD */}

            <label className="block text-sm font-semibold text-gray-700 mt-4 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Create a password"
              className="w-full h-11 px-4 border border-gray-300 rounded-lg outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />


            {/* CONFIRM PASSWORD */}

            <label className="block text-sm font-semibold text-gray-700 mt-4 mb-2">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full h-11 px-4 border border-gray-300 rounded-lg outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />


            {/* TERMS */}

            <label className="flex items-start gap-2 mt-4 text-sm text-gray-600">

              <input
                type="checkbox"
                className="mt-1 accent-green-600"
              />

              <span>
                I agree to the Terms & Conditions
              </span>

            </label>


            {/* SIGN UP */}

            <button
              onClick={handleSignup}
              className="w-full h-12 mt-5 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition"
            >
              Create Account
            </button>


            {/* LOGIN */}

            <p className="text-center text-sm text-gray-500 mt-6">

              Already have an account?

              <Link
                to="/login"
                className="ml-1 text-green-700 font-bold hover:underline"
              >
                Login
              </Link>

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Signup;