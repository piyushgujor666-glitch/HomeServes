import React, { useState } from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    if (email.trim() === "") {
      setMessage("Please enter your email.");
      return;
    }

    setMessage("Reset link sent successfully!");
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

        <div className="p-8 sm:p-12 flex items-center">

          <div className="w-full max-w-md mx-auto">


            {/* MOBILE LOGO */}

            <div className="flex md:hidden justify-center items-center gap-2 mb-8">

              <span className="text-4xl">
                🏠
              </span>

              <h2 className="text-2xl font-bold text-green-700">
                HomeServe
              </h2>

            </div>


            {/* ICON */}

            <div className="flex justify-center mb-5">

              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">

                <span className="text-3xl">
                  🔑
                </span>

              </div>

            </div>


            <h1 className="text-3xl font-bold text-gray-900 text-center">
              Forgot Password?
            </h1>

            <p className="text-gray-500 text-sm text-center mt-2 mb-8">
              Enter your email to reset your password
            </p>


            {/* FORM */}

            <form onSubmit={handleSubmit}>

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full h-12 px-4 border border-gray-300 rounded-lg outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
              />


              <button
                type="submit"
                className="w-full h-12 mt-6 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition"
              >
                Send Reset Link
              </button>

            </form>


            {/* MESSAGE */}

            {message && (
              <p className="text-center text-green-600 text-sm font-semibold mt-5">
                {message}
              </p>
            )}


            {/* BACK */}

            <Link
              to="/login"
              className="flex justify-center items-center gap-2 mt-7 text-green-700 font-semibold text-sm hover:underline"
            >
              ← Back to Login
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ForgotPassword;