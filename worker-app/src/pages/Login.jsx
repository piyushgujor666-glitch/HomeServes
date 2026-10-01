import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import {
  Phone,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import logo from "../assets/FIX.jpg"
import image from "../assets/background.png"

const Login = () => {
  const navigate = useNavigate();

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    console.log("Worker Login:", {
      phone,
      password,
      remember,
    });

    // Frontend-only login for now
    setTimeout(() => {
      navigate("/dashboard");
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#FBFAF7] bg-cover"
    style={{backgroundImage:`url(${image})`}}>

      {/* Top Brand Bar */}
      <div className="h-1.5 bg-[#0E6B5C]" />

      <div className="flex min-h-[calc(100vh-6px)] items-center justify-center px-4 py-10">

        <div className="w-full max-w-md">

          {/* ================= LOGO / BRAND ================= */}
          <div className="mb-7 text-center">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-[#E3E1DA] overflow-hidden">
              <img
                src={logo}
                alt="FixMate Logo"
                className="h-full w-full object-cover"
              />
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#16302B]">
              Fix<span className="text-[#0E6B5C]">maTe</span>
            </h1>

            <p className="mt-1 text-sm font-medium text-[#8A8A82]">
              Worker Portal
            </p>

          </div>


          {/* ================= LOGIN CARD ================= */}
          <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5 sm:p-8">

            {/* Heading */}
            <div className="mb-7">

              <h2 className="text-2xl font-bold text-[#16302B]">
                Welcome Back
              </h2>

              <p className="mt-1.5 text-sm leading-6 text-[#8A8A82]">
                Login to manage your services, orders and customer requests.
              </p>

            </div>


            {/* ================= FORM ================= */}
            <form onSubmit={handleLogin} className="space-y-5">

              {/* ================= MOBILE NUMBER ================= */}
              <div>

                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold text-[#3F4844]"
                >
                  Mobile Number
                </label>

                <div className="relative">

                  <Phone
                    size={18}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#8A8A82]"
                  />

                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter mobile number"
                    required
                    className="
                      w-full
                      rounded-xl
                      border
                      border-[#E3E1DA]
                      bg-[#FBFAF7]
                      py-3.5
                      pl-11
                      pr-4
                      text-sm
                      text-[#16302B]
                      outline-none
                      transition
                      placeholder:text-[#A6A69C]
                      focus:border-[#0E6B5C]
                      focus:bg-white
                      focus:ring-2
                      focus:ring-[#0E6B5C]/10
                    "
                  />

                </div>

              </div>


              {/* ================= PASSWORD ================= */}
              <div>

                <div className="mb-2 flex items-center justify-between">

                  <label
                    htmlFor="password"
                    className="text-sm font-semibold text-[#3F4844]"
                  >
                    Password
                  </label>

                  <NavLink
                    to="/forgot"
                    className="
                      text-sm
                      font-semibold
                      text-[#0E6B5C]
                      transition
                      hover:text-[#16302B]
                      hover:underline
                    "
                  >
                    Forgot Password?
                  </NavLink>

                </div>


                <div className="relative">

                  <Lock
                    size={18}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#8A8A82]"
                  />

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    required
                    className="
                      w-full
                      rounded-xl
                      border
                      border-[#E3E1DA]
                      bg-[#FBFAF7]
                      py-3.5
                      pl-11
                      pr-12
                      text-sm
                      text-[#16302B]
                      outline-none
                      transition
                      placeholder:text-[#A6A69C]
                      focus:border-[#0E6B5C]
                      focus:bg-white
                      focus:ring-2
                      focus:ring-[#0E6B5C]/10
                    "
                  />


                  {/* Show / Hide Password */}
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="
                      absolute
                      right-3
                      top-1/2
                      -translate-y-1/2
                      rounded-lg
                      p-1.5
                      text-[#8A8A82]
                      transition
                      hover:bg-[#F0EEE8]
                      hover:text-[#16302B]
                    "
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >

                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}

                  </button>

                </div>

              </div>


              {/* ================= REMEMBER ME ================= */}
              <div className="flex items-center justify-between">

                <label className="flex cursor-pointer items-center gap-2.5">

                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    className="
                      h-4
                      w-4
                      cursor-pointer
                      rounded
                      border-[#D5D2CA]
                      accent-[#0E6B5C]
                    "
                  />

                  <span className="text-sm text-[#6B6B62]">
                    Remember me
                  </span>

                </label>


                <div className="flex items-center gap-1.5 text-xs text-[#8A8A82]">

                  <ShieldCheck
                    size={14}
                    className="text-[#0E6B5C]"
                  />

                  Secure Login

                </div>

              </div>


              {/* ================= LOGIN BUTTON ================= */}
              <button
                type="submit"
                disabled={loading}
                className="
                  group
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[#16302B]
                  px-4
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-sm
                  transition
                  hover:bg-[#0E6B5C]
                  disabled:cursor-not-allowed
                  disabled:opacity-70
                "
              >

                {loading ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Logging in...
                  </>
                ) : (
                  <>
                    Login to Dashboard

                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </>
                )}

              </button>

            </form>


            {/* ================= DIVIDER ================= */}
            <div className="my-7 flex items-center gap-3">

              <div className="h-px flex-1 bg-[#F0EEE8]" />

              <span className="text-xs text-[#A6A69C]">
                OR
              </span>

              <div className="h-px flex-1 bg-[#F0EEE8]" />

            </div>


            {/* ================= SIGNUP ================= */}
            <div className="text-center">

              <p className="text-sm text-[#8A8A82]">
                Don't have a worker account?
              </p>

              <NavLink
                to="/signup"
                className="
                  mt-2
                  inline-flex
                  items-center
                  gap-1.5
                  text-sm
                  font-bold
                  text-[#0E6B5C]
                  transition
                  hover:text-[#16302B]
                  hover:underline
                "
              >
                Register as a Worker

                <ArrowRight size={15} />

              </NavLink>

            </div>

          </div>


          {/* ================= SECURITY ================= */}
          <div className="mt-6 flex items-center justify-center gap-2 text-center text-xs text-black">

            <ShieldCheck size={14} />

            <span>
              Your account information is protected.
            </span>

          </div>


          {/* ================= FOOTER ================= */}
          <p className="mt-4 text-center text-xs text-black">
            © {new Date().getFullYear()} FixMate. All rights reserved.
          </p>

        </div>

      </div>

    </div>
  );
};

export default Login;