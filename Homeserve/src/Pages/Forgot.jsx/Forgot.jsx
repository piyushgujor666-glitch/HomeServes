import React, { useState } from "react";
import { Link,NavLink } from "react-router-dom";
import { Mail, Phone, KeyRound } from "lucide-react";
import  logo from "../../assets/forgot_logo.png"
import logo1 from "../../assets/FIX.jpg"

function Forgot() {
  const [method, setMethod] = useState("email");

  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [message, setMessage] = useState("");

  // Change Email / Mobile
  const handleMethodChange = (selectedMethod) => {
    setMethod(selectedMethod);
    setMessage("");
  };

  // Submit Form
  const handleSubmit = (e) => {
    e.preventDefault();

    // EMAIL
    if (method === "email") {
      if (!email.trim()) {
        setMessage("Please enter your email address.");
        return;
      }

      setMessage("Password reset link will be sent to your email.");
    }

    // MOBILE
    else {
      const cleanMobile = mobile.replace(/\D/g, "");

      if (!cleanMobile || cleanMobile.length < 10) {
        setMessage("Please enter a valid mobile number.");
        return;
      }

      setMessage(
        `OTP will be sent to ${countryCode} ${cleanMobile}.`
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 bg-no-repeat bg-cover"
    style={{backgroundImage : `url(${logo})`}}>

      <div className="absolute top-6 left-6 sm:top-8 sm:left-10 z-20">

        <NavLink
          to="/"
          className="flex items-center gap-3"
        >

          <img
            src={logo1}
            alt="FixMate"
            className="w-11 h-11 sm:w-12 sm:h-12 object-cover rounded-xl shadow-sm"
          />

          <span className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900">
            FixmaTe
          </span>

        </NavLink>

      </div>

      {/* Main Card */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-6 sm:p-8">

        {/* ================= LOGO ================= */}
        <div className="flex justify-center mb-5">
          <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center">
            <KeyRound className="w-7 h-7 text-green-600" />
          </div>
        </div>

        {/* ================= HEADING ================= */}
        <div className="text-center mb-7">

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Forgot Password?
          </h1>

          <p className="text-sm text-gray-500 mt-2">
            Choose how you want to reset your password
          </p>

        </div>

        {/* ================= EMAIL / MOBILE TABS ================= */}
        <div className="grid grid-cols-2 gap-2 bg-gray-100 p-1 rounded-xl mb-6">

          {/* EMAIL TAB */}
          <button
            type="button"
            onClick={() => handleMethodChange("email")}
            className={`flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-semibold transition ${
              method === "email"
                ? "bg-white text-green-600 shadow"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <Mail size={18} />
            Email
          </button>

          {/* MOBILE TAB */}
          <button
            type="button"
            onClick={() => handleMethodChange("mobile")}
            className={`flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-semibold transition ${
              method === "mobile"
                ? "bg-white text-green-600 shadow"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <Phone size={18} />
            Mobile
          </button>

        </div>

        {/* ================= FORM ================= */}
        <form onSubmit={handleSubmit}>

          {/* ================================================= */}
          {/* EMAIL SECTION */}
          {/* ================================================= */}

          {method === "email" && (
            <div>

              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>

              {/* Email Input */}
              <div className="relative">

                <Mail
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setMessage("");
                  }}
                  placeholder="Enter your email"
                  className="w-full h-12 border border-gray-300 rounded-xl pl-11 pr-4 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
                />

              </div>

              {/* Switch to Mobile */}
              <button
                type="button"
                onClick={() => handleMethodChange("mobile")}
                className="mt-3 text-sm text-green-600 hover:text-green-700 font-medium"
              >
                Reset using mobile number
              </button>

            </div>
          )}

          {/* ================================================= */}
          {/* MOBILE SECTION */}
          {/* ================================================= */}

          {method === "mobile" && (
            <div>

              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mobile Number
              </label>

              {/* Mobile Input */}
              <div className="flex w-full">

                {/* Country Code */}
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="h-12 px-3 border border-gray-300 rounded-l-xl bg-white text-gray-700 text-sm outline-none focus:border-green-500"
                >
                  <option value="+91">🇮🇳 +91</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                  <option value="+61">🇦🇺 +61</option>
                  <option value="+971">🇦🇪 +971</option>
                  <option value="+65">🇸🇬 +65</option>
                </select>

                {/* Phone Icon */}
                <div className="relative flex-1">

                  <Phone
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="tel"
                    value={mobile}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, "");

                      setMobile(value);
                      setMessage("");
                    }}
                    placeholder="Enter mobile number"
                    className="w-full h-12 border border-gray-300 border-l-0 rounded-r-xl pl-10 pr-4 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
                  />

                </div>

              </div>

              {/* Switch to Email */}
              <button
                type="button"
                onClick={() => handleMethodChange("email")}
                className="mt-3 text-sm text-green-600 hover:text-green-700 font-medium"
              >
                Reset using email address
              </button>

            </div>
          )}

          {/* ================================================= */}
          {/* MESSAGE */}
          {/* ================================================= */}

          {message && (
            <div className="mt-4 p-3 rounded-xl bg-green-50 border border-green-100 text-green-700 text-sm">
              {message}
            </div>
          )}

          {/* ================================================= */}
          {/* SUBMIT BUTTON */}
          {/* ================================================= */}

          <button
            type="submit"
            className="w-full mt-6 h-12 bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-semibold rounded-xl transition duration-200"
          >
            {method === "email"
              ? "Send Reset Link"
              : "Send OTP"}
          </button>

        </form>

        {/* ================= BACK TO LOGIN ================= */}

        <div className="text-center mt-6">

          <Link
            to="/login"
            className="text-sm text-green-600 hover:text-green-700 font-medium"
          >
            ← Back to Login
          </Link>

        </div>

      </div>
    </div>
  );
}

export default Forgot;