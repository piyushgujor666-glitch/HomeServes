import { useState } from "react";
import { NavLink } from "react-router-dom";
import RPI from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import image from "./assets/image.png"

const PhoneInput = RPI.default || RPI;

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [phone, setPhone] = useState("");

  return (
    <div className="min-h-screen flex bg-slate-50">

      {/* =====================================================
          LEFT SECTION
      ====================================================== */}
      <div className="hidden lg:flex lg:w-[45%] min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white px-12 xl:px-20 py-12">

        {/* Background Decoration */}
        <div className="absolute -right-32 -bottom-32 w-[450px] h-[450px] rounded-full border-[70px] border-white/5" />

        <div className="absolute -left-32 top-[45%] w-64 h-64 rounded-full bg-white/5" />

        <div className="relative z-10 w-full">

          {/* Logo */}
          <div className="flex items-center gap-3">

            <img
              src={image}
              alt="FixMate Logo"
              className="w-14 h-14 object-contain bg-white p-1.5 rounded-xl"
            />

            <span className="text-3xl font-extrabold tracking-tight">
              FixMate
            </span>

          </div>

          {/* Hero Content */}
          <div className="mt-36 max-w-lg">

            <p className="text-sm font-bold tracking-[3px] text-blue-100 mb-5">
              JOIN FIXMATE
            </p>

            <h1 className="text-5xl xl:text-6xl font-extrabold leading-[1.08] tracking-tight">
              Make Your Home
              <br />

              <span className="text-blue-200">
                Care Easy.
              </span>
            </h1>

            <p className="mt-7 text-lg leading-8 text-white/80">
              Create your FixMate account and get reliable
              professionals for all your home service needs.
            </p>

            {/* Features */}
            <div className="mt-10 space-y-5">

              {/* Feature 1 */}
              <div className="flex items-center gap-4">

                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  ✓
                </div>

                <div>
                  <p className="font-semibold">
                    Trusted Professionals
                  </p>

                  <p className="text-sm text-white/60">
                    Find verified service providers
                  </p>
                </div>

              </div>

              {/* Feature 2 */}
              <div className="flex items-center gap-4">

                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  ⚡
                </div>

                <div>
                  <p className="font-semibold">
                    Quick Booking
                  </p>

                  <p className="text-sm text-white/60">
                    Book services in just a few clicks
                  </p>
                </div>

              </div>

              {/* Feature 3 */}
              <div className="flex items-center gap-4">

                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  🏠
                </div>

                <div>
                  <p className="font-semibold">
                    Complete Home Care
                  </p>

                  <p className="text-sm text-white/60">
                    Everything your home needs
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          RIGHT SECTION
      ====================================================== */}
      <div className="w-full lg:w-[55%] min-h-screen flex items-center justify-center p-5 sm:p-8">

        <div className="w-full max-w-[520px] bg-white rounded-3xl shadow-xl shadow-blue-900/10 p-7 sm:p-10">

          {/* Mobile Logo */}
          <div className="flex lg:hidden justify-center items-center gap-3 mb-7">

            <img
              src="/logo.png"
              alt="FixMate Logo"
              className="w-12 h-12 object-contain"
            />

            <h2 className="text-2xl font-extrabold text-blue-600">
              FixMate
            </h2>

          </div>


          {/* Heading */}
          <h2 className="text-3xl font-bold text-slate-900">
            Create Account
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Join FixMate and take care of your home with ease
          </p>


          {/* =====================================================
              FORM
          ====================================================== */}
          <form className="mt-7">

            {/* ================= FULL NAME ================= */}
            <div className="mb-5">

              <label className="block mb-2 text-sm font-semibold text-slate-700">
                Full Name
              </label>

              <div className="flex items-center h-14 border border-slate-300 rounded-xl px-4 transition focus-within:border-blue-600 focus-within:ring-4 focus-within:ring-blue-100">

                <span className="text-slate-400 mr-3">
                  👤
                </span>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  required
                  className="w-full h-full outline-none text-sm text-slate-800 placeholder:text-slate-400 bg-transparent"
                />

              </div>

            </div>


            {/* ================= EMAIL ================= */}
            <div className="mb-5">

              <label className="block mb-2 text-sm font-semibold text-slate-700">
                Email Address
              </label>

              <div className="flex items-center h-14 border border-slate-300 rounded-xl px-4 transition focus-within:border-blue-600 focus-within:ring-4 focus-within:ring-blue-100">

                <span className="text-slate-400 mr-3">
                  ✉
                </span>

                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full h-full outline-none text-sm text-slate-800 placeholder:text-slate-400 bg-transparent"
                />

              </div>

            </div>


            {/* ================= PHONE ================= */}
            <div className="mb-5">

              <label className="block mb-2 text-sm font-semibold text-slate-700">
                Phone Number
              </label>

              <div>

                <PhoneInput
                  country="in"
  value={phone}
  onChange={(value) => setPhone(value)}
  enableSearch
  preferredCountries={["in", "us", "gb", "ae", "ca"]}
  placeholder="Enter phone number"
  inputProps={{
    name: "phone",
    required: true,
  }}
  containerStyle={{
    width: "100%",
  }}
  inputStyle={{
    width: "100%",
    height: "56px",
    borderRadius: "12px",
    border: "1px solid #cbd5e1",
    fontSize: "14px",
    paddingLeft: "52px",
  }}
  buttonStyle={{
    border: "none",
    background: "transparent",
    borderRadius: "12px 0 0 12px",
  }}
/>

              </div>

            </div>


            {/* ================= PASSWORD ================= */}
            <div className="mb-5">

              <label className="block mb-2 text-sm font-semibold text-slate-700">
                Password
              </label>

              <div className="flex items-center h-14 border border-slate-300 rounded-xl px-4 transition focus-within:border-blue-600 focus-within:ring-4 focus-within:ring-blue-100">

                <span className="text-slate-400 mr-3">
                  🔒
                </span>

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  required
                  className="w-full h-full outline-none text-sm text-slate-800 placeholder:text-slate-400 bg-transparent"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="ml-2 text-slate-400 hover:text-blue-600 transition cursor-pointer"
                >
                  {showPassword ? "🙈" : "👁"}
                </button>

              </div>

            </div>


            {/* ================= CONFIRM PASSWORD ================= */}
            <div className="mb-5">

              <label className="block mb-2 text-sm font-semibold text-slate-700">
                Confirm Password
              </label>

              <div className="flex items-center h-14 border border-slate-300 rounded-xl px-4 transition focus-within:border-blue-600 focus-within:ring-4 focus-within:ring-blue-100">

                <span className="text-slate-400 mr-3">
                  🔒
                </span>

                <input
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Confirm your password"
                  required
                  className="w-full h-full outline-none text-sm text-slate-800 placeholder:text-slate-400 bg-transparent"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                  className="ml-2 text-slate-400 hover:text-blue-600 transition cursor-pointer"
                >
                  {showConfirmPassword ? "🙈" : "👁"}
                </button>

              </div>

            </div>


            {/* ================= TERMS ================= */}
            <label className="flex items-start gap-3 mb-6 text-sm text-slate-500 cursor-pointer">

              <input
                type="checkbox"
                required
                className="w-4 h-4 mt-0.5 accent-blue-600 cursor-pointer"
              />

              <span>
                I agree to the{" "}

                <a
                  href="#"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Terms & Conditions
                </a>

                {" "}and{" "}

                <a
                  href="#"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Privacy Policy
                </a>

              </span>

            </label>


            {/* ================= CREATE ACCOUNT ================= */}
            <NavLink
              type="submit"
              to="/"
              className="w-full h-14 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white font-bold text-base flex items-center justify-center gap-3 transition duration-200 shadow-lg shadow-blue-600/20 cursor-pointer"
            >
              Create Account

              <span className="text-xl">
                →
              </span>

            </NavLink>

          </form>


          {/* ================= LOGIN ================= */}
          <p className="text-center text-sm text-slate-500 mt-7">

            Already have an account?

            <NavLink
              to="/"
              className="ml-1 font-bold text-blue-600 hover:text-blue-700"
            >
              Login
            </NavLink>

          </p>


          {/* ================= SECURITY ================= */}
          <p className="text-center text-[11px] text-slate-400 mt-5">
            🔒 Your information is securely protected
          </p>

        </div>

      </div>

    </div>
  );
}

export default Signup;