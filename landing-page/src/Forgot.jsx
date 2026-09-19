import { useState } from "react";
import { NavLink } from "react-router-dom";
import RPI from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import image from "./assets/image.png"

const PhoneInput = RPI.default || RPI;

function ForgotPassword() {
  const [method, setMethod] = useState("email");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (method === "email") {
      alert(`OTP/Reset link will be sent to ${email}`);
    } else {
      alert(`OTP will be sent to +${phone}`);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-8">

      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden">

        <div className="grid md:grid-cols-2">

          {/* LEFT SIDE */}
          <div className="hidden md:flex bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-12 flex-col justify-center">

            <img
              src={image}
              alt="FixMate Logo"
              className="w-28 h-auto object-contain mb-8"
            />

            <h1 className="text-4xl font-bold leading-tight mb-5">
              Forgot your password?
            </h1>

            <p className="text-blue-100 text-lg leading-relaxed">
              Don't worry. Enter your registered email or mobile number
              and we'll help you recover your FixMate account.
            </p>

            <div className="mt-10 space-y-4">

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
                  ✓
                </div>
                <span>Secure account recovery</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
                  ✓
                </div>
                <span>OTP verification</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
                  ✓
                </div>
                <span>Quick password reset</span>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="p-7 sm:p-10 md:p-12">

            {/* MOBILE LOGO */}
            <div className="flex justify-center mb-6 md:hidden">
              <img
                src="/logo.png"
                alt="FixMate Logo"
                className="w-24 h-auto object-contain"
              />
            </div>

            <div className="text-center mb-8">

              <h2 className="text-3xl font-bold text-gray-900">
                Forgot Password?
              </h2>

              <p className="text-gray-500 mt-2">
                Choose how you want to recover your account
              </p>

            </div>

            {/* METHOD BUTTONS */}
            <div className="grid grid-cols-2 gap-3 mb-7">

              <button
                type="button"
                onClick={() => setMethod("email")}
                className={`h-12 rounded-xl font-semibold transition ${
                  method === "email"
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                ✉ Email
              </button>

              <button
                type="button"
                onClick={() => setMethod("phone")}
                className={`h-12 rounded-xl font-semibold transition ${
                  method === "phone"
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                ☎ Mobile
              </button>

            </div>

            <form onSubmit={handleSubmit}>

              {/* EMAIL */}
              {method === "email" && (
                <div>

                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Registered Email
                  </label>

                  <div className="flex items-center border border-gray-300 rounded-xl px-4 h-12 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100">

                    <span className="text-gray-400 mr-3">
                      ✉
                    </span>

                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full outline-none text-sm text-gray-800"
                    />

                  </div>

                  <p className="text-xs text-gray-500 mt-2">
                    We'll send a password reset link to your email.
                  </p>

                </div>
              )}

              {/* PHONE */}
              {method === "phone" && (
                <div>

                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Registered Mobile Number
                  </label>

                  <div className="border border-gray-300 rounded-xl h-12 flex items-center focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100">

                    <PhoneInput
                      country="in"
                      value={phone}
                      onChange={(value) => setPhone(value)}
                      preferredCountries={[
                        "in",
                        "us",
                        "gb",
                        "ae",
                        "ca"
                      ]}
                      enableSearch={true}
                      searchPlaceholder="Search country..."
                      placeholder="Enter mobile number"
                      inputProps={{
                        name: "phone",
                        required: true
                      }}
                      containerClass="!w-full"
                      inputClass="!w-full !h-11 !border-0 !text-sm !bg-transparent !outline-none !shadow-none"
                      buttonClass="!border-0 !bg-transparent"
                      dropdownClass="!rounded-xl"
                    />

                  </div>

                  <p className="text-xs text-gray-500 mt-2">
                    We'll send an OTP to your registered mobile number.
                  </p>

                </div>
              )}

              {/* SUBMIT */}
              <button
                type="submit"
                className="w-full h-12 mt-7 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition shadow-lg shadow-blue-200"
              >
                {method === "email"
                  ? "Send Reset Link"
                  : "Send OTP"}
              </button>

            </form>

            {/* BACK TO LOGIN */}
            <div className="text-center mt-7">

              <NavLink
                to="/"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                ← Back to Login
              </NavLink>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ForgotPassword;