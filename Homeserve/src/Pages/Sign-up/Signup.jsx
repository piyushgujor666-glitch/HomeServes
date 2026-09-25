import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import * as PhoneInputModule from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import logo from "../../assets/FIX.jpg";
import backgroundimage from "../../assets/Signup_image.png";

const PhoneInput =
  PhoneInputModule.default?.default ||
  PhoneInputModule.default ||
  PhoneInputModule;

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [phone, setPhone] = useState("");

  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-white via-[#F8FAFC] to-[#ECFDF5] bg-cover"
    style={{backgroundImage:`url(${backgroundimage})`}}>

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
          SIGNUP AREA
          ===================================================== */}

      <div className="min-h-screen flex items-center justify-center px-4 py-24 sm:py-20">

        <div className="w-full max-w-md">

          {/* =================================================
              SIGNUP CARD
              ================================================= */}

          <div className="bg-white rounded-2xl border border-gray-100 shadow-xl shadow-gray-200/50 px-6 py-8 sm:px-8 sm:py-9">

            {/* Header */}

            <div className="text-center mb-7">

              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Create your account
              </h1>

              <p className="text-sm text-gray-500 mt-2">
                Get started with FixMate today
              </p>

            </div>


            {/* =================================================
                SIGNUP FORM
                ================================================= */}

            <form className="space-y-4">

              {/* =================================================
                  FULL NAME
                  ================================================= */}

              <div>

                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  autoComplete="name"
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


              {/* =================================================
                  EMAIL
                  ================================================= */}

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


              {/* =================================================
                  PHONE NUMBER
                  ================================================= */}

              <div>

                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone number
                </label>

                <PhoneInput
                  country="in"
                  value={phone}
                  onChange={(value) => setPhone(value)}
                  enableSearch={true}
                  searchPlaceholder="Search country..."
                  countryCodeEditable={false}
                  inputProps={{
                    name: "phone",
                    id: "phone",
                    required: true,
                    autoComplete: "tel",
                  }}
                  containerClass="phone-input-container"
                  inputClass="
                    !w-full
                    !h-[48px]
                    !rounded-lg
                    !border-gray-200
                    !bg-gray-50
                    !text-gray-900
                    focus:!bg-white
                    focus:!border-green-500
                    focus:!ring-2
                    focus:!ring-green-500/10
                  "
                  buttonClass="
                    !rounded-l-lg
                    !border-gray-200
                    !bg-gray-50
                  "
                  dropdownClass="!rounded-lg"
                />

                <p className="text-xs text-gray-400 mt-1.5">
                  Select your country and enter your phone number.
                </p>

              </div>


              {/* =================================================
                  PASSWORD
                  ================================================= */}

              <div>

                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Password
                </label>

                <div className="relative">

                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Create a password"
                    autoComplete="new-password"
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

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
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
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </button>

                </div>

              </div>


              {/* =================================================
                  CONFIRM PASSWORD
                  ================================================= */}

              <div>

                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Confirm password
                </label>

                <div className="relative">

                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    autoComplete="new-password"
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

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
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
                      showConfirmPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showConfirmPassword ? "🙈" : "👁️"}
                  </button>

                </div>

              </div>


              {/* =================================================
                  TERMS
                  ================================================= */}

              <div className="flex items-start gap-2 pt-1">

                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="mt-1 w-4 h-4 accent-green-600 cursor-pointer"
                />

                <label
                  htmlFor="terms"
                  className="text-xs sm:text-sm text-gray-500 leading-relaxed"
                >
                  I agree to the{" "}

                  <a
                    href="#"
                    className="font-semibold text-green-600 hover:text-green-700"
                  >
                    Terms & Conditions
                  </a>

                  {" "}and Privacy Policy.
                </label>

              </div>


              {/* =================================================
                  CREATE ACCOUNT
                  ================================================= */}

              <button
                type="submit"
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
                Create account
              </button>

            </form>


            {/* =================================================
                SOCIAL SIGNUP DIVIDER
                ================================================= */}

            <div className="flex items-center gap-3 my-6">

              <div className="h-px bg-gray-200 flex-1"></div>

              <span className="text-xs font-medium text-gray-400 whitespace-nowrap">
                OR SIGN UP WITH
              </span>

              <div className="h-px bg-gray-200 flex-1"></div>

            </div>


            {/* =================================================
                GOOGLE
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
              <span className="text-lg font-bold">
                G
              </span>

              <span>
                Sign up with Google
              </span>
            </button>


            {/* =================================================
                FACEBOOK
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
                Sign up with Facebook
              </span>
            </button>


            {/* =================================================
                APPLE
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
              <span className="text-xl">
                
              </span>

              <span>
                Sign up with Apple
              </span>
            </button>


            {/* =================================================
                LOGIN
                ================================================= */}

            <p className="text-center text-sm text-gray-500 mt-7">

              Already have an account?

              <NavLink
                to="/login"
                className="
                  ml-1
                  font-semibold
                  text-green-600
                  hover:text-green-700
                  transition
                "
              >
                Login
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
