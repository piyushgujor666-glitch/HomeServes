import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import {
  User,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ShieldCheck,
  ArrowRight,
  Phone,
} from "lucide-react";

import logo from "../assets/FIX.jpg";
import image from "../assets/sign_up_.png";

const Signup = () => {
  const navigate = useNavigate();

  // ================= FORM STATES =================
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // ================= UI STATES =================
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // ================= SIGNUP FUNCTION =================
  const handleSignup = (e) => {
    e.preventDefault();

    // Check password match first
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Start loading
    setLoading(true);

    console.log("Signup:", {
      name,
      email,
      phone,
      password,
    });

    // Wait 9 seconds, then go to Login
    setTimeout(() => {
      navigate("/admin/dashboard");
    }, 2000);
  };

  return (
    <div
      className="
        min-h-screen
        bg-[#FBFAF7]
        flex
        items-center
        justify-center
        px-4
        py-8
        bg-cover
        bg-center
        bg-no-repeat
      "
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* ================= MAIN CONTAINER ================= */}
      <div className="w-full max-w-md">

        {/* ================= BRAND ================= */}
        <div className="text-center mb-7">

          {/* Logo + Brand */}
          <div className="inline-flex items-center gap-3 mb-4">

            <img
              src={logo}
              alt="FixMate Logo"
              className="
                w-11
                h-11
                rounded-xl
                object-cover
                shadow-sm
              "
            />

            <span className="text-2xl font-bold text-[#16302B]">
              Fix<span className="text-[#0E6B5C]">Mate</span>
            </span>

          </div>

          {/* Heading */}
          <h1 className="text-3xl font-bold text-[#16302B]">
            Create Account
          </h1>

          <p className="text-[#8A8A82] mt-2 text-sm">
            Sign up to get started with FixMate
          </p>

        </div>

        {/* ================= CARD ================= */}
        <div
          className="
            bg-white
            rounded-2xl
            border
            border-[#E3E1DA]
            shadow-[0_8px_30px_rgba(22,48,43,0.06)]
            p-7
            sm:p-8
          "
        >

          {/* ================= FORM ================= */}
          <form onSubmit={handleSignup} className="space-y-5">

            {/* ================= FULL NAME ================= */}
            <div>

              <label className="block text-sm font-semibold text-[#16302B] mb-2">
                Full Name
              </label>

              <div className="relative">

                <User
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    w-5
                    h-5
                    text-[#8A8A82]
                    z-10
                  "
                />

                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  disabled={loading}
                  className="
                    w-full
                    pl-12
                    pr-4
                    py-3.5
                    bg-[#FBFAF7]
                    border
                    border-[#E3E1DA]
                    rounded-xl
                    text-[#16302B]
                    placeholder-[#A5A49D]
                    outline-none
                    transition
                    focus:border-[#0E6B5C]
                    focus:ring-4
                    focus:ring-[#0E6B5C]/10
                    disabled:opacity-60
                    disabled:cursor-not-allowed
                  "
                />

              </div>

            </div>

            {/* ================= EMAIL ================= */}
            <div>

              <label className="block text-sm font-semibold text-[#16302B] mb-2">
                Email Address
              </label>

              <div className="relative">

                <Mail
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    w-5
                    h-5
                    text-[#8A8A82]
                    z-10
                  "
                />

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                  className="
                    w-full
                    pl-12
                    pr-4
                    py-3.5
                    bg-[#FBFAF7]
                    border
                    border-[#E3E1DA]
                    rounded-xl
                    text-[#16302B]
                    placeholder-[#A5A49D]
                    outline-none
                    transition
                    focus:border-[#0E6B5C]
                    focus:ring-4
                    focus:ring-[#0E6B5C]/10
                    disabled:opacity-60
                    disabled:cursor-not-allowed
                  "
                />

              </div>

            </div>

            {/* ================= PHONE ================= */}
            <div>

              <label className="block text-sm font-semibold text-[#16302B] mb-2">
                Phone Number
              </label>

              <div className="relative">

                <Phone
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    w-5
                    h-5
                    text-[#8A8A82]
                    z-10
                    pointer-events-none
                  "
                />

                <PhoneInput
                  international
                  defaultCountry="IN"
                  value={phone}
                  onChange={setPhone}
                  placeholder="Enter phone number"
                  className="fixmate-phone-input"
                  required
                  disabled={loading}
                />

              </div>

            </div>

            {/* ================= PASSWORD ================= */}
            <div>

              <label className="block text-sm font-semibold text-[#16302B] mb-2">
                Password
              </label>

              <div className="relative">

                <LockKeyhole
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    w-5
                    h-5
                    text-[#8A8A82]
                  "
                />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={loading}
                  className="
                    w-full
                    pl-12
                    pr-12
                    py-3.5
                    bg-[#FBFAF7]
                    border
                    border-[#E3E1DA]
                    rounded-xl
                    text-[#16302B]
                    placeholder-[#A5A49D]
                    outline-none
                    transition
                    focus:border-[#0E6B5C]
                    focus:ring-4
                    focus:ring-[#0E6B5C]/10
                    disabled:opacity-60
                    disabled:cursor-not-allowed
                  "
                />

                {/* Show / Hide Password */}
                <button
                  type="button"
                  disabled={loading}
                  onClick={() => setShowPassword(!showPassword)}
                  className="
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    text-[#8A8A82]
                    hover:text-[#16302B]
                    transition
                    disabled:opacity-50
                  "
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>

              </div>

            </div>

            {/* ================= CONFIRM PASSWORD ================= */}
            <div>

              <label className="block text-sm font-semibold text-[#16302B] mb-2">
                Confirm Password
              </label>

              <div className="relative">

                <LockKeyhole
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    w-5
                    h-5
                    text-[#8A8A82]
                  "
                />

                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  disabled={loading}
                  className="
                    w-full
                    pl-12
                    pr-12
                    py-3.5
                    bg-[#FBFAF7]
                    border
                    border-[#E3E1DA]
                    rounded-xl
                    text-[#16302B]
                    placeholder-[#A5A49D]
                    outline-none
                    transition
                    focus:border-[#0E6B5C]
                    focus:ring-4
                    focus:ring-[#0E6B5C]/10
                    disabled:opacity-60
                    disabled:cursor-not-allowed
                  "
                />

                {/* Show / Hide Confirm Password */}
                <button
                  type="button"
                  disabled={loading}
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    text-[#8A8A82]
                    hover:text-[#16302B]
                    transition
                    disabled:opacity-50
                  "
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>

              </div>

            </div>

            {/* ================= CREATE ACCOUNT BUTTON ================= */}
            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                flex
                items-center
                justify-center
                gap-2
                bg-[#0E6B5C]
                text-white
                py-3.5
                rounded-xl
                font-semibold
                shadow-sm
                hover:bg-[#0B5A4D]
                hover:shadow-md
                transition-all
                duration-200
                disabled:opacity-70
                disabled:cursor-not-allowed
                disabled:hover:bg-[#0E6B5C]
              "
            >
              {loading ? (
                <>
                  {/* Loading Spinner */}
                  <span
                    className="
                      w-5
                      h-5
                      border-2
                      border-white
                      border-t-transparent
                      rounded-full
                      animate-spin
                    "
                  />

                  Creating Account...
                </>
              ) : (
                <>
                  Create Account

                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>

          </form>

          {/* ================= DIVIDER ================= */}
          <div className="flex items-center gap-3 my-6">

            <div className="flex-1 h-px bg-[#EEECE5]" />

            <span className="text-xs text-[#A5A49D]">
              OR
            </span>

            <div className="flex-1 h-px bg-[#EEECE5]" />

          </div>

          {/* ================= LOGIN ================= */}
          <p className="text-center text-sm text-[#8A8A82]">

            Already have an account?

            <Link
              to="/login"
              className="
                ml-1
                text-[#0E6B5C]
                font-semibold
                hover:text-[#16302B]
                transition
              "
            >
              Login
            </Link>

          </p>

        </div>

        {/* ================= SECURITY ================= */}
        <div
          className="
            flex
            items-center
            justify-center
            gap-2
            mt-5
            text-xs
            text-black
          "
        >

          <ShieldCheck className="w-4 h-4 text-black" />

          <span>
            Secure FixMate Registration
          </span>

        </div>

        {/* ================= FOOTER ================= */}
        <p className="text-center text-xs text-black mt-3">
          © 2026 FixMate. All rights reserved.
        </p>

      </div>

      {/* ================= PHONE INPUT STYLE ================= */}
      <style>{`
        .fixmate-phone-input {
          width: 100%;
          min-height: 52px;
          display: flex;
          align-items: center;
          padding-left: 48px;
          padding-right: 14px;
          background: #FBFAF7;
          border: 1px solid #E3E1DA;
          border-radius: 12px;
          transition: all 0.2s ease;
        }

        .fixmate-phone-input:focus-within {
          border-color: #0E6B5C;
          box-shadow: 0 0 0 4px rgba(14, 107, 92, 0.10);
        }

        .fixmate-phone-input .PhoneInputCountry {
          margin-right: 8px;
        }

        .fixmate-phone-input .PhoneInputCountrySelect {
          background: transparent;
          border: none;
          outline: none;
        }

        .fixmate-phone-input .PhoneInputInput {
          width: 100%;
          border: none;
          outline: none;
          background: transparent;
          color: #16302B;
          font-size: 14px;
          padding: 0;
        }

        .fixmate-phone-input .PhoneInputInput::placeholder {
          color: #A5A49D;
        }

        .fixmate-phone-input .PhoneInputInput:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
};

export default Signup;