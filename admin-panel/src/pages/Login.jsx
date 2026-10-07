import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import fix from "../assets/FIX.jpg";
import image from "../assets/Login_bg.png";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    console.log("Login:", {
      email,
      password,
    });

    setTimeout(() => {
      navigate("/admin/dashboard");
    }, 3000);
  };

  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#f6f9f7]
        px-4
        py-8
        sm:px-6
        lg:px-8
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-cover
          bg-center
          bg-no-repeat
          opacity-[0.18]
        "
        style={{
          backgroundImage: `url(${image})`,
        }}
      />

      {/* Soft background shapes */}

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          -top-32
          h-[360px]
          w-[360px]
          rounded-full
          bg-[#dceee8]
          blur-3xl
          opacity-70
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          -right-32
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#e7f1ed]
          blur-3xl
          opacity-80
        "
      />

      {/* =====================================================
          PAGE CONTENT
      ====================================================== */}

      <div className="relative z-10 flex min-h-[calc(100vh-4rem)] items-center justify-center">

        <div className="w-full max-w-[1040px]">

          {/* =================================================
              MAIN LOGIN SHELL
          ================================================== */}

          <div
            className="
              overflow-hidden
              rounded-[28px]
              border
              border-[#dfe8e4]
              bg-white
              shadow-[0_25px_70px_rgba(24,52,47,0.10)]
            "
          >

            <div className="grid lg:grid-cols-[0.95fr_1.05fr]">

              {/* =================================================
                  LEFT BRAND PANEL
              ================================================== */}

              <section
                className="
                  relative
                  hidden
                  overflow-hidden
                  bg-[#173f36]
                  p-10
                  text-white
                  lg:flex
                  lg:min-h-[650px]
                  lg:flex-col
                  lg:justify-between
                  xl:p-12
                "
              >

                {/* Decorative circles */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-28
                    -top-28
                    h-72
                    w-72
                    rounded-full
                    border
                    border-white/10
                  "
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    -bottom-32
                    -left-32
                    h-80
                    w-80
                    rounded-full
                    border
                    border-white/10
                  "
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    right-12
                    top-28
                    h-20
                    w-20
                    rounded-full
                    bg-[#0f7565]/40
                    blur-2xl
                  "
                />

                {/* Brand */}

                <div className="relative z-10">

                  <div className="flex items-center gap-3">

                    <div
                      className="
                        rounded-2xl
                        bg-white
                        p-1.5
                        shadow-lg
                      "
                    >
                      <img
                        src={fix}
                        alt="FixMate"
                        className="
                          h-12
                          w-12
                          rounded-xl
                          object-cover
                        "
                      />
                    </div>

                    <div>
                      <h2 className="text-xl font-black tracking-[-0.04em]">
                        FixMate
                      </h2>

                      <p
                        className="
                          mt-1
                          text-[9px]
                          font-black
                          uppercase
                          tracking-[0.18em]
                          text-white/50
                        "
                      >
                        Admin Workspace
                      </p>
                    </div>

                  </div>

                  {/* Main message */}

                  <div className="mt-20 max-w-md">

                    <div
                      className="
                        mb-5
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-white/10
                        bg-white/10
                        px-3
                        py-1.5
                        text-[10px]
                        font-bold
                        text-[#b9e4d9]
                      "
                    >
                      <Sparkles size={13} />
                      Smart service management
                    </div>

                    <h1
                      className="
                        text-[42px]
                        font-black
                        leading-[1.05]
                        tracking-[-0.05em]
                        xl:text-[48px]
                      "
                    >
                      Everything you need
                      <span className="block text-[#79c9b5]">
                        in one workspace.
                      </span>
                    </h1>

                    <p className="mt-6 max-w-sm text-sm leading-7 text-white/60">
                      Manage bookings, workers, customers and services from
                      one simple FixMate admin workspace.
                    </p>

                  </div>

                  {/* Benefits */}

                  <div className="mt-10 space-y-4">

                    <Feature
                      title="Manage bookings"
                      description="Track and organize every service request."
                    />

                    <Feature
                      title="Monitor your team"
                      description="Keep workers and operations organized."
                    />

                    <Feature
                      title="Built for daily operations"
                      description="A focused workspace for your entire team."
                    />

                  </div>

                </div>

                {/* Bottom */}

                <div className="relative z-10 border-t border-white/10 pt-6">

                  <div className="flex items-center justify-between">

                    <div>
                      <p className="text-[10px] font-bold text-white/40">
                        FIXMATE ADMIN
                      </p>

                      <p className="mt-1 text-xs text-white/60">
                        Secure management workspace
                      </p>
                    </div>

                    <ShieldCheck
                      size={24}
                      className="text-[#79c9b5]"
                    />

                  </div>

                </div>

              </section>

              {/* =================================================
                  LOGIN PANEL
              ================================================== */}

              <section className="flex items-center bg-white p-6 sm:p-10 lg:p-12">

                <div className="mx-auto w-full max-w-[430px]">

                  {/* Mobile logo */}

                  <div className="mb-8 flex items-center gap-3 lg:hidden">

                    <img
                      src={fix}
                      alt="FixMate"
                      className="
                        h-11
                        w-11
                        rounded-xl
                        object-cover
                        shadow-sm
                      "
                    />

                    <div>
                      <p className="text-lg font-black tracking-[-0.04em] text-[#18342f]">
                        FixMate
                      </p>

                      <p className="text-[9px] font-black uppercase tracking-[0.16em] text-[#909b96]">
                        Admin Workspace
                      </p>
                    </div>

                  </div>

                  {/* Heading */}

                  <div className="mb-8">

                    <p
                      className="
                        text-[10px]
                        font-black
                        uppercase
                        tracking-[0.18em]
                        text-[#0f7565]
                      "
                    >
                      Welcome back
                    </p>

                    <h1
                      className="
                        mt-2
                        text-[32px]
                        font-black
                        tracking-[-0.045em]
                        text-[#18342f]
                        sm:text-[36px]
                      "
                    >
                      Sign in to FixMate
                    </h1>

                    <p className="mt-2 text-sm leading-6 text-[#89958f]">
                      Access your admin workspace and manage your operations.
                    </p>

                  </div>

                  {/* =================================================
                      FORM
                  ================================================== */}

                  <form
                    onSubmit={handleLogin}
                    className="space-y-5"
                  >

                    {/* Email */}

                    <div>

                      <label
                        htmlFor="email"
                        className="
                          mb-2
                          block
                          text-[12px]
                          font-black
                          text-[#35433e]
                        "
                      >
                        Email address
                      </label>

                      <div className="group relative">

                        <Mail
                          size={18}
                          strokeWidth={1.8}
                          className="
                            absolute
                            left-4
                            top-1/2
                            -translate-y-1/2
                            text-[#98a49f]
                            transition-colors
                            duration-200
                            group-focus-within:text-[#0f7565]
                          "
                        />

                        <input
                          id="email"
                          type="email"
                          placeholder="you@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          disabled={loading}
                          className="
                            h-[52px]
                            w-full
                            rounded-xl
                            border
                            border-[#dfe7e3]
                            bg-[#fafcfb]
                            pl-11
                            pr-4
                            text-sm
                            font-medium
                            text-[#18342f]
                            outline-none
                            transition-all
                            duration-200
                            placeholder:text-[#a4afaa]

                            hover:border-[#bfd3cb]

                            focus:border-[#0f7565]
                            focus:bg-white
                            focus:ring-4
                            focus:ring-[#0f7565]/10

                            disabled:cursor-not-allowed
                            disabled:opacity-60
                          "
                        />

                      </div>

                    </div>

                    {/* Password */}

                    <div>

                      <div className="mb-2 flex items-center justify-between">

                        <label
                          htmlFor="password"
                          className="
                            text-[12px]
                            font-black
                            text-[#35433e]
                          "
                        >
                          Password
                        </label>

                        <Link
                          to="/forgot"
                          className="
                            text-[11px]
                            font-bold
                            text-[#0f7565]
                            transition-colors
                            hover:text-[#18342f]
                          "
                        >
                          Forgot password?
                        </Link>

                      </div>

                      <div className="group relative">

                        <LockKeyhole
                          size={18}
                          strokeWidth={1.8}
                          className="
                            absolute
                            left-4
                            top-1/2
                            -translate-y-1/2
                            text-[#98a49f]
                            transition-colors
                            duration-200
                            group-focus-within:text-[#0f7565]
                          "
                        />

                        <input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          disabled={loading}
                          className="
                            h-[52px]
                            w-full
                            rounded-xl
                            border
                            border-[#dfe7e3]
                            bg-[#fafcfb]
                            pl-11
                            pr-12
                            text-sm
                            font-medium
                            text-[#18342f]
                            outline-none
                            transition-all
                            duration-200
                            placeholder:text-[#a4afaa]

                            hover:border-[#bfd3cb]

                            focus:border-[#0f7565]
                            focus:bg-white
                            focus:ring-4
                            focus:ring-[#0f7565]/10

                            disabled:cursor-not-allowed
                            disabled:opacity-60
                          "
                        />

                        <button
                          type="button"
                          disabled={loading}
                          onClick={() =>
                            setShowPassword(!showPassword)
                          }
                          aria-label={
                            showPassword
                              ? "Hide password"
                              : "Show password"
                          }
                          className="
                            absolute
                            right-3
                            top-1/2
                            grid
                            h-9
                            w-9
                            -translate-y-1/2
                            place-items-center
                            rounded-lg
                            text-[#8b9893]
                            transition-all
                            duration-200
                            hover:bg-[#eef5f2]
                            hover:text-[#0f7565]
                            disabled:opacity-50
                          "
                        >
                          {showPassword ? (
                            <EyeOff size={18} />
                          ) : (
                            <Eye size={18} />
                          )}
                        </button>

                      </div>

                    </div>

                    {/* Login button */}

                    <button
                      type="submit"
                      disabled={loading}
                      className="
                        group
                        relative
                        mt-2
                        flex
                        h-[53px]
                        w-full
                        items-center
                        justify-center
                        gap-2
                        overflow-hidden
                        rounded-xl
                        bg-[#0f7565]
                        text-sm
                        font-black
                        text-white
                        shadow-[0_8px_20px_rgba(15,117,101,0.18)]
                        transition-all
                        duration-200

                        hover:-translate-y-0.5
                        hover:bg-[#0c6658]
                        hover:shadow-[0_12px_25px_rgba(15,117,101,0.24)]

                        active:translate-y-0
                        disabled:cursor-not-allowed
                        disabled:opacity-70
                        disabled:hover:translate-y-0
                      "
                    >

                      {!loading && (
                        <span
                          className="
                            absolute
                            inset-y-0
                            -left-full
                            w-1/2
                            skew-x-[-20deg]
                            bg-white/10
                            transition-all
                            duration-500
                            group-hover:left-[120%]
                          "
                        />
                      )}

                      {loading ? (
                        <>
                          <span
                            className="
                              h-5
                              w-5
                              animate-spin
                              rounded-full
                              border-2
                              border-white/30
                              border-t-white
                            "
                          />

                          Signing in...
                        </>
                      ) : (
                        <>
                          Sign in

                          <ArrowRight
                            size={18}
                            className="
                              transition-transform
                              duration-200
                              group-hover:translate-x-1
                            "
                          />
                        </>
                      )}

                    </button>

                  </form>

                  {/* Divider */}

                  <div className="my-7 flex items-center gap-4">

                    <div className="h-px flex-1 bg-[#e9eeec]" />

                    <span
                      className="
                        text-[9px]
                        font-black
                        uppercase
                        tracking-[0.14em]
                        text-[#a1aaa6]
                      "
                    >
                      Or
                    </span>

                    <div className="h-px flex-1 bg-[#e9eeec]" />

                  </div>

                  {/* Signup */}

                  <div
                    className="
                      rounded-xl
                      border
                      border-[#e5ece9]
                      bg-[#fafcfb]
                      px-4
                      py-3.5
                      text-center
                    "
                  >

                    <span className="text-xs text-[#89958f]">
                      Don't have an account?
                    </span>

                    <Link
                      to="/signup"
                      className="
                        ml-1
                        text-xs
                        font-black
                        text-[#0f7565]
                        transition-colors
                        hover:text-[#18342f]
                      "
                    >
                      Create account
                    </Link>

                  </div>

                  {/* Security */}

                  <div className="mt-6 flex items-center justify-center gap-2">

                    <div
                      className="
                        grid
                        h-7
                        w-7
                        place-items-center
                        rounded-lg
                        bg-[#eaf6f2]
                        text-[#0f7565]
                      "
                    >
                      <ShieldCheck size={15} />
                    </div>

                    <div>

                      <p className="text-[10px] font-bold text-[#53615c]">
                        Secure admin login
                      </p>

                      <p className="text-[9px] text-[#9aa49f]">
                        Your workspace is protected
                      </p>

                    </div>

                  </div>

                  {/* Footer */}

                  <p className="mt-6 text-center text-[9px] text-[#a0aaa6]">
                    © 2026 FixMate · All rights reserved
                  </p>

                </div>

              </section>

            </div>

          </div>

        </div>

      </div>
    </main>
  );
};

/* =========================================================
   FEATURE ITEM
========================================================= */

function Feature({ title, description }) {
  return (
    <div className="group flex items-start gap-3">

      <div
        className="
          mt-0.5
          grid
          h-8
          w-8
          shrink-0
          place-items-center
          rounded-lg
          bg-white/10
          text-[#8ed5c3]
          transition-all
          duration-200
          group-hover:bg-[#0f7565]
          group-hover:text-white
        "
      >
        <CheckCircle2 size={15} />
      </div>

      <div>
        <p className="text-xs font-bold text-white">
          {title}
        </p>

        <p className="mt-1 text-[10px] leading-5 text-white/45">
          {description}
        </p>
      </div>

    </div>
  );
}

export default Login;