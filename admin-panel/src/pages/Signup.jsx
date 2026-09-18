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

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log("Signup:", {
      name,
      email,
      phone,
      password,
    });

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#FBFAF7] flex items-center justify-center px-4 py-8">

      <div className="w-full max-w-md">

        {/* Brand */}
        <div className="text-center mb-7">

          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-11 h-11 rounded-xl bg-[#16302B] flex items-center justify-center shadow-sm">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>

            <span className="text-2xl font-bold text-[#16302B]">
              Home<span className="text-[#0E6B5C]">Serve</span>
            </span>
          </div>

          <h1 className="text-3xl font-bold text-[#16302B]">
            Create Account
          </h1>

          <p className="text-[#8A8A82] mt-2 text-sm">
            Sign up to get started with HomeServe
          </p>

        </div>


        {/* Card */}
        <div className="bg-white rounded-2xl border border-[#E3E1DA] shadow-[0_8px_30px_rgba(22,48,43,0.06)] p-7 sm:p-8">

          <form onSubmit={handleSignup} className="space-y-5">

            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold text-[#16302B] mb-2">
                Full Name
              </label>

              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8A8A82] z-10" />

                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full pl-12 pr-4 py-3.5
                  bg-[#FBFAF7]
                  border border-[#E3E1DA]
                  rounded-xl
                  text-[#16302B]
                  placeholder-[#A5A49D]
                  outline-none transition
                  focus:border-[#0E6B5C]
                  focus:ring-4 focus:ring-[#0E6B5C]/10"
                />
              </div>
            </div>


            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-[#16302B] mb-2">
                Email Address
              </label>

              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8A8A82] z-10" />

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-12 pr-4 py-3.5
                  bg-[#FBFAF7]
                  border border-[#E3E1DA]
                  rounded-xl
                  text-[#16302B]
                  placeholder-[#A5A49D]
                  outline-none transition
                  focus:border-[#0E6B5C]
                  focus:ring-4 focus:ring-[#0E6B5C]/10"
                />
              </div>
            </div>


            {/* Phone Number */}
            <div>
              <label className="block text-sm font-semibold text-[#16302B] mb-2">
                Phone Number
              </label>

              <div className="relative">

                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8A8A82] z-10 pointer-events-none" />

                <PhoneInput
                  international
                  defaultCountry="IN"
                  value={phone}
                  onChange={setPhone}
                  placeholder="Enter phone number"
                  className="homeserve-phone-input"
                  required
                />

              </div>
            </div>


            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-[#16302B] mb-2">
                Password
              </label>

              <div className="relative">

                <LockKeyhole className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8A8A82] z-10" />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pl-12 pr-12 py-3.5
                  bg-[#FBFAF7]
                  border border-[#E3E1DA]
                  rounded-xl
                  text-[#16302B]
                  placeholder-[#A5A49D]
                  outline-none transition
                  focus:border-[#0E6B5C]
                  focus:ring-4 focus:ring-[#0E6B5C]/10"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2
                  text-[#8A8A82] hover:text-[#16302B] transition"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>

              </div>
            </div>


            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-semibold text-[#16302B] mb-2">
                Confirm Password
              </label>

              <div className="relative">

                <LockKeyhole className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8A8A82] z-10" />

                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full pl-12 pr-12 py-3.5
                  bg-[#FBFAF7]
                  border border-[#E3E1DA]
                  rounded-xl
                  text-[#16302B]
                  placeholder-[#A5A49D]
                  outline-none transition
                  focus:border-[#0E6B5C]
                  focus:ring-4 focus:ring-[#0E6B5C]/10"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2
                  text-[#8A8A82] hover:text-[#16302B] transition"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>

              </div>
            </div>


            {/* Create Account */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2
              bg-[#0E6B5C]
              text-white
              py-3.5
              rounded-xl
              font-semibold
              shadow-sm
              hover:bg-[#0B5A4D]
              hover:shadow-md
              transition-all duration-200"
            >
              Create Account
              <ArrowRight className="w-5 h-5" />
            </button>

          </form>


          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-[#EEECE5]" />
            <span className="text-xs text-[#A5A49D]">
              OR
            </span>
            <div className="flex-1 h-px bg-[#EEECE5]" />
          </div>


          {/* Login */}
          <p className="text-center text-sm text-[#8A8A82]">
            Already have an account?{" "}

            <Link
              to="/login"
              className="text-[#0E6B5C] font-semibold hover:text-[#16302B] transition"
            >
              Login
            </Link>
          </p>

        </div>


        {/* Security */}
        <div className="flex items-center justify-center gap-2 mt-5 text-xs text-[#8A8A82]">
          <ShieldCheck className="w-4 h-4 text-[#0E6B5C]" />
          <span>Secure account registration</span>
        </div>


        {/* Footer */}
        <p className="text-center text-xs text-[#A5A49D] mt-3">
          © 2026 HomeServe. All rights reserved.
        </p>

      </div>


      {/* Phone Input Styling */}
      <style>{`
        .homeserve-phone-input {
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

        .homeserve-phone-input:focus-within {
          border-color: #0E6B5C;
          box-shadow: 0 0 0 4px rgba(14, 107, 92, 0.10);
        }

        .homeserve-phone-input .PhoneInputCountry {
          margin-right: 8px;
        }

        .homeserve-phone-input .PhoneInputCountrySelect {
          background: transparent;
          border: none;
          outline: none;
        }

        .homeserve-phone-input .PhoneInputInput {
          width: 100%;
          border: none;
          outline: none;
          background: transparent;
          color: #16302B;
          font-size: 14px;
          padding: 0;
        }

        .homeserve-phone-input .PhoneInputInput::placeholder {
          color: #A5A49D;
        }
      `}</style>

    </div>
  );
};

export default Signup;