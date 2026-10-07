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
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import logo from "../assets/FIX.jpg";
import image from "../assets/sign_up_.png";

const Signup = () => {
  const navigate = useNavigate();

  /* =========================================================
     FORM STATES
  ========================================================= */

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  /* =========================================================
     UI STATES
  ========================================================= */

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [loading, setLoading] = useState(false);

  /* =========================================================
     SIGNUP
  ========================================================= */

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setLoading(true);

    console.log("Signup:", {
      name,
      email,
      phone,
      password,
    });

    setTimeout(() => {
      navigate("/admin/dashboard");
    }, 2000);
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
          opacity-[0.14]
        "
        style={{
          backgroundImage: `url(${image})`,
        }}
      />

      {/* Background decorations */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          -top-40
          h-[420px]
          w-[420px]
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
          -right-40
          h-[440px]
          w-[440px]
          rounded-full
          bg-[#e6f0ec]
          blur-3xl
          opacity-80
        "
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 flex min-h-[calc(100vh-4rem)] items-center justify-center">

        <div className="w-full max-w-[1080px]">

          {/* =================================================
              MAIN SHELL
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

            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">

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
                  lg:min-h-[760px]
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
                    -right-32
                    -top-32
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
                    right-10
                    top-40
                    h-24
                    w-24
                    rounded-full
                    bg-[#0f7565]/40
                    blur-2xl
                  "
                />

                {/* =================================================
                    BRAND
                ================================================== */}

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
                        src={logo}
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

                      <h2
                        className="
                          text-xl
                          font-black
                          tracking-[-0.04em]
                        "
                      >
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

                  {/* =================================================
                      BRAND MESSAGE
                  ================================================== */}

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

                      Join FixMate
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
                      Build your
                      <span className="block text-[#79c9b5]">
                        workspace today.
                      </span>
                    </h1>

                    <p
                      className="
                        mt-6
                        max-w-sm
                        text-sm
                        leading-7
                        text-white/60
                      "
                    >
                      Create your FixMate account and get access
                      to a simple workspace for managing your
                      service operations.
                    </p>

                  </div>

                  {/* =================================================
                      BENEFITS
                  ================================================== */}

                  <div className="mt-10 space-y-4">

                    <Feature
                      title="Simple service management"
                      description="Keep your services organized in one place."
                    />

                    <Feature
                      title="Manage your operations"
                      description="Track bookings, customers and workers easily."
                    />

                    <Feature
                      title="Secure workspace"
                      description="Your FixMate admin workspace stays protected."
                    />

                  </div>

                </div>

                {/* =================================================
                    LEFT FOOTER
                ================================================== */}

                <div
                  className="
                    relative
                    z-10
                    border-t
                    border-white/10
                    pt-6
                  "
                >

                  <div className="flex items-center justify-between">

                    <div>

                      <p
                        className="
                          text-[10px]
                          font-bold
                          text-white/40
                        "
                      >
                        FIXMATE ADMIN
                      </p>

                      <p
                        className="
                          mt-1
                          text-xs
                          text-white/60
                        "
                      >
                        Professional service management
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
                  SIGNUP PANEL
              ================================================== */}

              <section
                className="
                  flex
                  items-center
                  bg-white
                  p-6
                  sm:p-10
                  lg:p-12
                "
              >

                <div className="mx-auto w-full max-w-[450px]">

                  {/* =================================================
                      MOBILE BRAND
                  ================================================== */}

                  <div
                    className="
                      mb-8
                      flex
                      items-center
                      gap-3
                      lg:hidden
                    "
                  >

                    <img
                      src={logo}
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

                      <p
                        className="
                          text-lg
                          font-black
                          tracking-[-0.04em]
                          text-[#18342f]
                        "
                      >
                        FixMate
                      </p>

                      <p
                        className="
                          text-[9px]
                          font-black
                          uppercase
                          tracking-[0.16em]
                          text-[#909b96]
                        "
                      >
                        Admin Workspace
                      </p>

                    </div>

                  </div>

                  {/* =================================================
                      HEADING
                  ================================================== */}

                  <div className="mb-7">

                    <p
                      className="
                        text-[10px]
                        font-black
                        uppercase
                        tracking-[0.18em]
                        text-[#0f7565]
                      "
                    >
                      Get started
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
                      Create your account
                    </h1>

                    <p
                      className="
                        mt-2
                        text-sm
                        leading-6
                        text-[#89958f]
                      "
                    >
                      Set up your FixMate admin account to get
                      started.
                    </p>

                  </div>

                  {/* =================================================
                      FORM
                  ================================================== */}

                  <form
                    onSubmit={handleSignup}
                    className="space-y-4"
                  >

                    {/* =================================================
                        NAME
                    ================================================== */}

                    <div>

                      <label
                        htmlFor="name"
                        className="
                          mb-2
                          block
                          text-[12px]
                          font-black
                          text-[#35433e]
                        "
                      >
                        Full name
                      </label>

                      <div className="group relative">

                        <User
                          size={18}
                          strokeWidth={1.8}
                          className="
                            absolute
                            left-4
                            top-1/2
                            z-10
                            -translate-y-1/2
                            text-[#98a49f]
                            transition-colors
                            duration-200
                            group-focus-within:text-[#0f7565]
                          "
                        />

                        <input
                          id="name"
                          type="text"
                          placeholder="Enter your full name"
                          value={name}
                          onChange={(e) =>
                            setName(e.target.value)
                          }
                          required
                          disabled={loading}
                          className="
                            h-[50px]
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

                    {/* =================================================
                        EMAIL
                    ================================================== */}

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
                            z-10
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
                          onChange={(e) =>
                            setEmail(e.target.value)
                          }
                          required
                          disabled={loading}
                          className="
                            h-[50px]
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

                    {/* =================================================
                        PHONE
                    ================================================== */}

                    <div>

                      <label
                        htmlFor="phone"
                        className="
                          mb-2
                          block
                          text-[12px]
                          font-black
                          text-[#35433e]
                        "
                      >
                        Phone number
                      </label>

                      <div className="relative">

                        <Phone
                          size={18}
                          strokeWidth={1.8}
                          className="
                            pointer-events-none
                            absolute
                            left-4
                            top-1/2
                            z-20
                            -translate-y-1/2
                            text-[#98a49f]
                          "
                        />

                        <PhoneInput
                          id="phone"
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

                    {/* =================================================
                        PASSWORD
                    ================================================== */}

                    <div>

                      <label
                        htmlFor="password"
                        className="
                          mb-2
                          block
                          text-[12px]
                          font-black
                          text-[#35433e]
                        "
                      >
                        Password
                      </label>

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
                          type={
                            showPassword
                              ? "text"
                              : "password"
                          }
                          placeholder="Create a password"
                          value={password}
                          onChange={(e) =>
                            setPassword(e.target.value)
                          }
                          required
                          disabled={loading}
                          className="
                            h-[50px]
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

                    {/* =================================================
                        CONFIRM PASSWORD
                    ================================================== */}

                    <div>

                      <label
                        htmlFor="confirmPassword"
                        className="
                          mb-2
                          block
                          text-[12px]
                          font-black
                          text-[#35433e]
                        "
                      >
                        Confirm password
                      </label>

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
                          id="confirmPassword"
                          type={
                            showConfirmPassword
                              ? "text"
                              : "password"
                          }
                          placeholder="Confirm your password"
                          value={confirmPassword}
                          onChange={(e) =>
                            setConfirmPassword(
                              e.target.value
                            )
                          }
                          required
                          disabled={loading}
                          className="
                            h-[50px]
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
                            setShowConfirmPassword(
                              !showConfirmPassword
                            )
                          }
                          aria-label={
                            showConfirmPassword
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
                          {showConfirmPassword ? (
                            <EyeOff size={18} />
                          ) : (
                            <Eye size={18} />
                          )}
                        </button>

                      </div>

                    </div>

                    {/* =================================================
                        PASSWORD MATCH MESSAGE
                    ================================================== */}

                    {confirmPassword && (
                      <div
                        className={`
                          flex
                          items-center
                          gap-2
                          rounded-lg
                          px-3
                          py-2.5
                          text-[10px]
                          font-bold

                          ${
                            password === confirmPassword
                              ? "bg-[#eaf6f2] text-[#16806b]"
                              : "bg-[#fff1f1] text-[#d95d5d]"
                          }
                        `}
                      >
                        <CheckCircle2 size={14} />

                        {password === confirmPassword
                          ? "Passwords match"
                          : "Passwords do not match"}
                      </div>
                    )}

                    {/* =================================================
                        CREATE ACCOUNT
                    ================================================== */}

                    <button
                      type="submit"
                      disabled={loading}
                      className="
                        group
                        relative
                        mt-2
                        flex
                        h-[52px]
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

                          Creating account...
                        </>
                      ) : (
                        <>
                          Create account

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

                  {/* =================================================
                      DIVIDER
                  ================================================== */}

                  <div className="my-6 flex items-center gap-4">

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

                  {/* =================================================
                      LOGIN
                  ================================================== */}

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
                      Already have an account?
                    </span>

                    <Link
                      to="/login"
                      className="
                        ml-1
                        text-xs
                        font-black
                        text-[#0f7565]
                        transition-colors
                        hover:text-[#18342f]
                      "
                    >
                      Sign in
                    </Link>

                  </div>

                  {/* =================================================
                      SECURITY
                  ================================================== */}

                  <div className="mt-5 flex items-center justify-center gap-2">

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

                      <p
                        className="
                          text-[10px]
                          font-bold
                          text-[#53615c]
                        "
                      >
                        Secure FixMate registration
                      </p>

                      <p
                        className="
                          text-[9px]
                          text-[#9aa49f]
                        "
                      >
                        Your information stays protected
                      </p>

                    </div>

                  </div>

                  {/* =================================================
                      FOOTER
                  ================================================== */}

                  <p
                    className="
                      mt-5
                      text-center
                      text-[9px]
                      text-[#a0aaa6]
                    "
                  >
                    © 2026 FixMate · All rights reserved
                  </p>

                </div>

              </section>

            </div>

          </div>

        </div>

      </div>

      {/* =====================================================
          PHONE INPUT STYLES
      ====================================================== */}

      <style>{`
        .fixmate-phone-input {
          width: 100%;
          min-height: 50px;
          display: flex;
          align-items: center;
          padding-left: 48px;
          padding-right: 14px;
          background: #fafcfb;
          border: 1px solid #dfe7e3;
          border-radius: 12px;
          transition: all 0.2s ease;
        }

        .fixmate-phone-input:hover {
          border-color: #bfd3cb;
        }

        .fixmate-phone-input:focus-within {
          border-color: #0f7565;
          background: #ffffff;
          box-shadow: 0 0 0 4px rgba(15, 117, 101, 0.10);
        }

        .fixmate-phone-input .PhoneInputCountry {
          margin-right: 8px;
        }

        .fixmate-phone-input .PhoneInputCountrySelect {
          background: transparent;
          border: none;
          outline: none;
          cursor: pointer;
        }

        .fixmate-phone-input .PhoneInputInput {
          width: 100%;
          border: none;
          outline: none;
          background: transparent;
          color: #18342f;
          font-size: 14px;
          font-weight: 500;
          padding: 0;
        }

        .fixmate-phone-input .PhoneInputInput::placeholder {
          color: #a4afaa;
        }

        .fixmate-phone-input .PhoneInputInput:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
      `}</style>
    </main>
  );
};

/* =========================================================
   FEATURE COMPONENT
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

export default Signup;