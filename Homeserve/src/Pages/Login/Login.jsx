import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import logo from "../../assets/FIX.jpg";
import backgroundimage from "../../assets/login_page.png"

// Add your background image here.
// Example:
// import bg from "../../assets/login-background.jpg";

export default function LoginForm() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-white via-[#F8FAFC] to-[#ECFDF5] bg-cover"
    style={{backgroundImage:`url(${backgroundimage})`}}>

      {/* =====================================================
          OPTIONAL BACKGROUND IMAGE
          =====================================================

          If you want to use your own image, uncomment:

          import bg from "../../assets/login-background.jpg";

          Then add:

          style={{ backgroundImage: `url(${bg})` }}

          to this main element.
      */}

      {/* =====================================================
          TOP LEFT BRAND
          ===================================================== */}

      <div className="absolute top-6 left-6 sm:top-8 sm:left-10 z-20">

        <NavLink
          to="/"
          className="flex items-center gap-3"
        >

          <img
            src={logo}
            alt="FixMate"
            className="w-11 h-11 sm:w-12 sm:h-12 object-cover rounded-xl shadow-sm"
          />

          <span className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900">
            FixMate
          </span>

        </NavLink>

      </div>


      {/* =====================================================
          LOGIN AREA
          ===================================================== */}

      <div className="min-h-screen flex items-center justify-center px-4 py-24 sm:py-20">

        <div className="w-full max-w-md">

          {/* =================================================
              LOGIN CARD
              ================================================= */}

          <div className="bg-white rounded-2xl border border-gray-100 shadow-xl shadow-gray-200/50 px-6 py-8 sm:px-8 sm:py-9">

            {/* Header */}

            <div className="text-center mb-8">

              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Welcome back
              </h1>

              <p className="text-sm text-gray-500 mt-2">
                Login to your FixMate account
              </p>

            </div>


            {/* =================================================
                LOGIN FORM
                ================================================= */}

            <form className="space-y-5">

              {/* EMAIL */}

              <div>

                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email address
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  className="
                    w-full
                    px-4
                    py-3
                    rounded-lg
                    border
                    border-gray-200
                    bg-gray-50
                    text-gray-900
                    placeholder-gray-400
                    outline-none
                    transition
                    focus:bg-white
                    focus:border-green-500
                    focus:ring-2
                    focus:ring-green-500/10
                  "
                />

              </div>


              {/* PASSWORD */}

              <div>

                {/* Password label + forgot */}

                <div className="flex items-center justify-between mb-2">

                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>

                  <NavLink
                    to="/forgot"
                    className="
                      text-xs
                      font-semibold
                      text-green-600
                      hover:text-green-700
                      transition
                    "
                  >
                    Forgot password?
                  </NavLink>

                </div>


                {/* Password input */}

                <div className="relative">

                  <input
                    type={isVisible ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    required
                    className="
                      w-full
                      px-4
                      py-3
                      pr-12
                      rounded-lg
                      border
                      border-gray-200
                      bg-gray-50
                      text-gray-900
                      placeholder-gray-400
                      outline-none
                      transition
                      focus:bg-white
                      focus:border-green-500
                      focus:ring-2
                      focus:ring-green-500/10
                    "
                  />


                  {/* Show / Hide Password */}

                  <button
                    type="button"
                    onClick={() => setIsVisible(!isVisible)}
                    className="
                      absolute
                      right-3
                      top-1/2
                      -translate-y-1/2
                      text-gray-400
                      hover:text-gray-700
                      transition
                    "
                    aria-label={
                      isVisible
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {isVisible ? "🙈" : "👁️"}
                  </button>

                </div>

              </div>


              {/* =================================================
                  REMEMBER ME
                  ================================================= */}

              <div className="flex items-center">

                <label className="flex items-center gap-2 cursor-pointer">

                  <input
                    type="checkbox"
                    name="remember"
                    className="
                      w-4
                      h-4
                      accent-green-600
                      cursor-pointer
                    "
                  />

                  <span className="text-sm text-gray-600">
                    Remember me
                  </span>

                </label>

              </div>


              {/* =================================================
                  LOGIN BUTTON
                  ================================================= */}

              <NavLink
                to="/home"
                className="
                  w-full
                  flex
                  items-center
                  justify-center
                  py-3
                  rounded-lg
                  bg-green-600
                  hover:bg-green-700
                  active:bg-green-800
                  text-white
                  font-semibold
                  transition
                  shadow-sm
                  shadow-green-600/20
                "
              >
                Login
              </NavLink>

            </form>


            {/* =================================================
                DIVIDER
                ================================================= */}

            <div className="flex items-center gap-3 my-6">

              <div className="h-px bg-gray-200 flex-1"></div>

              <span className="text-xs font-medium text-gray-400">
                OR
              </span>

              <div className="h-px bg-gray-200 flex-1"></div>

            </div>


            {/* =================================================
                GOOGLE LOGIN
                Firebase can be added here later
                ================================================= */}

            <button
              type="button"
              className="
                w-full
                flex
                items-center
                justify-center
                gap-3
                py-3
                rounded-lg
                border
                border-gray-200
                bg-white
                hover:bg-gray-50
                hover:border-gray-300
                text-gray-700
                font-medium
                transition
              "
            >

              {/* Google icon */}

              <span className="text-lg font-bold">
                G
              </span>

              <span>
                Continue with Google
              </span>

            </button>


            {/* =================================================
                FACEBOOK LOGIN
                Firebase can be added here later
                ================================================= */}

            <button
              type="button"
              className="
                w-full
                flex
                items-center
                justify-center
                gap-3
                py-3
                rounded-lg
                border
                border-gray-200
                bg-white
                hover:bg-gray-50
                hover:border-gray-300
                text-gray-700
                font-medium
                transition
                mt-3
              "
            >

              {/* Facebook icon */}

              <span
                className="
                  w-5
                  h-5
                  flex
                  items-center
                  justify-center
                  rounded-full
                  bg-[#1877F2]
                  text-white
                  text-sm
                  font-bold
                "
              >
                f
              </span>

              <span>
                Continue with Facebook
              </span>

            </button>


            {/* =================================================
                SIGN UP
                ================================================= */}

            <p className="text-center text-sm text-gray-500 mt-7">

              Don't have an account?

              <NavLink
                to="/signup"
                className="
                  ml-1
                  font-semibold
                  text-green-600
                  hover:text-green-700
                  transition
                "
              >
                Create account
              </NavLink>

            </p>

          </div>


          {/* =================================================
              FOOTER
              ================================================= */}

          <p className="text-center text-xs text-gray-400 mt-6">
            © 2026 FixMate · Home services made simple
          </p>

        </div>

      </div>

    </main>
  );
}

