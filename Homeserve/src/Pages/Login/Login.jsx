import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const handleLogin = () => {
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


            <h1 className="text-3xl font-bold text-gray-900 text-center">
              Welcome Back
            </h1>

            <p className="text-gray-500 text-sm text-center mt-2 mb-8">
              Login to continue to HomeServe
            </p>


            {/* EMAIL */}

            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full h-12 px-4 border border-gray-300 rounded-lg outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />


            {/* PASSWORD */}

            <label className="block text-sm font-semibold text-gray-700 mt-5 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full h-12 px-4 border border-gray-300 rounded-lg outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />


            {/* REMEMBER + FORGOT */}

            <div className="flex justify-between items-center mt-4">

              <label className="flex items-center gap-2 text-sm text-gray-600">

                <input
                  type="checkbox"
                  className="accent-green-600"
                />

                Remember me

              </label>


              <Link
                to="/forgot"
                className="text-sm font-semibold text-green-700 hover:underline"
              >
                Forgot Password?
              </Link>

            </div>


            {/* LOGIN */}

            <button
              onClick={handleLogin}
              className="w-full h-12 mt-6 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition"
            >
              Login
            </button>


            {/* OR */}

            <div className="flex items-center gap-3 my-6">

              <div className="flex-1 border-t border-gray-200"></div>

              <span className="text-xs text-gray-500">
                Or continue with
              </span>

              <div className="flex-1 border-t border-gray-200"></div>

            </div>


            {/* SOCIAL */}

            <div className="grid grid-cols-2 gap-3">

              <button className="h-11 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50">
                Google
              </button>

              <button className="h-11 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50">
                Facebook
              </button>

            </div>


            {/* SIGNUP */}

            <p className="text-center text-sm text-gray-500 mt-7">

              Don't have an account?

              <Link
                to="/signup"
                className="ml-1 text-green-700 font-bold hover:underline"
              >
                Sign Up
              </Link>

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;