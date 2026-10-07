import React, { useState } from "react";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import {
  Mail,
  Phone,
  LockKeyhole,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import logo from "../assets/FIX.jpg";
import image from "../assets/forgot_bg.png";

const ForgotPassword = () => {
  const [method, setMethod] = useState("email");

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    if (method === "email") {
      console.log("Reset password for:", email);
    } else {
      console.log("OTP for:", phone);
    }

    setTimeout(() => {
      setLoading(false);

      if (method === "email") {
        setMessage(
          "Password reset link has been sent to your email address."
        );
      } else {
        setMessage(
          "OTP has been sent to your registered phone number."
        );
      }
    }, 1200);
  };

  const changeMethod = (newMethod) => {
    setMethod(newMethod);
    setMessage("");
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
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#e7f1ed]
          blur-3xl
          opacity-80
        "
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 flex min-h-[calc(100vh-4rem)] items-center justify-center">

        <div className="w-full max-w-[1040px]">

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
                      MESSAGE
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

                      Account recovery
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
                      Get back into your
                      <span className="block text-[#79c9b5]">
                        FixMate workspace.
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
                      Choose your preferred recovery method and
                      securely reset your FixMate admin password.
                    </p>

                  </div>

                  {/* =================================================
                      BENEFITS
                  ================================================== */}

                  <div className="mt-10 space-y-4">

                    <RecoveryFeature
                      title="Email recovery"
                      description="Receive a secure password reset link."
                    />

                    <RecoveryFeature
                      title="Phone recovery"
                      description="Receive a one-time verification OTP."
                    />

                    <RecoveryFeature
                      title="Secure verification"
                      description="Your account information stays protected."
                    />

                  </div>

                </div>

                {/* Bottom */}

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
                        Secure account recovery
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
                  RECOVERY PANEL
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
                      HEADER
                  ================================================== */}

                  <div className="mb-7">

                    <div
                      className="
                        mb-5
                        grid
                        h-11
                        w-11
                        place-items-center
                        rounded-xl
                        bg-[#eaf6f2]
                        text-[#0f7565]
                      "
                    >
                      <LockKeyhole size={20} />
                    </div>

                    <p
                      className="
                        text-[10px]
                        font-black
                        uppercase
                        tracking-[0.18em]
                        text-[#0f7565]
                      "
                    >
                      Account recovery
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
                      Forgot password?
                    </h1>

                    <p
                      className="
                        mt-2
                        text-sm
                        leading-6
                        text-[#89958f]
                      "
                    >
                      Choose how you'd like to receive your
                      password recovery instructions.
                    </p>

                  </div>

                  {/* =================================================
                      METHOD SELECTOR
                  ================================================== */}

                  <div
                    className="
                      mb-6
                      grid
                      grid-cols-2
                      gap-2
                      rounded-2xl
                      bg-[#f4f8f6]
                      p-1.5
                    "
                  >

                    {/* Email */}

                    <button
                      type="button"
                      onClick={() => changeMethod("email")}
                      className={`
                        flex
                        h-12
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        text-xs
                        font-black
                        transition-all
                        duration-200

                        ${
                          method === "email"
                            ? "bg-white text-[#0f7565] shadow-sm"
                            : "text-[#89958f] hover:text-[#18342f]"
                        }
                      `}
                    >
                      <Mail size={16} />

                      Email
                    </button>

                    {/* Phone */}

                    <button
                      type="button"
                      onClick={() => changeMethod("phone")}
                      className={`
                        flex
                        h-12
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        text-xs
                        font-black
                        transition-all
                        duration-200

                        ${
                          method === "phone"
                            ? "bg-white text-[#0f7565] shadow-sm"
                            : "text-[#89958f] hover:text-[#18342f]"
                        }
                      `}
                    >
                      <Phone size={16} />

                      Phone
                    </button>

                  </div>

                  {/* =================================================
                      FORM
                  ================================================== */}

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >

                    {/* =================================================
                        EMAIL FORM
                    ================================================== */}

                    {method === "email" && (
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
                              pointer-events-none
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
                            onChange={(e) => {
                              setEmail(e.target.value);
                              setMessage("");
                            }}
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

                        <p
                          className="
                            mt-2
                            text-[10px]
                            leading-5
                            text-[#9aa49f]
                          "
                        >
                          We'll send a secure password reset
                          link to this email address.
                        </p>

                      </div>
                    )}

                    {/* =================================================
                        PHONE FORM
                    ================================================== */}

                    {method === "phone" && (
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
                            onChange={(value) => {
                              setPhone(value || "");
                              setMessage("");
                            }}
                            placeholder="Enter phone number"
                            className="fixmate-phone-input"
                            required
                            disabled={loading}
                          />

                        </div>

                        <p
                          className="
                            mt-2
                            text-[10px]
                            leading-5
                            text-[#9aa49f]
                          "
                        >
                          Select your country and enter your
                          registered mobile number.
                        </p>

                      </div>
                    )}

                    {/* =================================================
                        SECURITY
                    ================================================== */}

                    <div
                      className="
                        flex
                        gap-3
                        rounded-xl
                        border
                        border-[#dfece7]
                        bg-[#f2f8f5]
                        p-4
                      "
                    >

                      <div
                        className="
                          grid
                          h-8
                          w-8
                          shrink-0
                          place-items-center
                          rounded-lg
                          bg-white
                          text-[#0f7565]
                          shadow-sm
                        "
                      >
                        <ShieldCheck size={16} />
                      </div>

                      <div>

                        <p
                          className="
                            text-[11px]
                            font-black
                            text-[#35514a]
                          "
                        >
                          Secure recovery
                        </p>

                        <p
                          className="
                            mt-1
                            text-[10px]
                            leading-5
                            text-[#71807a]
                          "
                        >
                          {method === "email"
                            ? "A secure reset link will be sent to your registered email."
                            : "A one-time OTP will be sent to verify your phone number."}
                        </p>

                      </div>

                    </div>

                    {/* =================================================
                        SUBMIT BUTTON
                    ================================================== */}

                    <button
                      type="submit"
                      disabled={loading}
                      className="
                        group
                        relative
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

                          {method === "email"
                            ? "Sending link..."
                            : "Sending OTP..."}
                        </>
                      ) : (
                        <>
                          {method === "email"
                            ? "Send reset link"
                            : "Send OTP"}

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
                      SUCCESS MESSAGE
                  ================================================== */}

                  {message && (
                    <div
                      className="
                        mt-5
                        flex
                        items-start
                        gap-3
                        rounded-xl
                        border
                        border-[#cce8df]
                        bg-[#effaf6]
                        p-4
                      "
                    >

                      <div
                        className="
                          grid
                          h-8
                          w-8
                          shrink-0
                          place-items-center
                          rounded-lg
                          bg-white
                          text-[#16806b]
                          shadow-sm
                        "
                      >
                        <CheckCircle2 size={17} />
                      </div>

                      <div>

                        <p
                          className="
                            text-[11px]
                            font-black
                            text-[#16806b]
                          "
                        >
                          Request sent
                        </p>

                        <p
                          className="
                            mt-1
                            text-[10px]
                            leading-5
                            text-[#4f756a]
                          "
                        >
                          {message}
                        </p>

                      </div>

                    </div>
                  )}

                  {/* =================================================
                      LOGIN
                  ================================================== */}

                  <div
                    className="
                      mt-7
                      border-t
                      border-[#e9eeec]
                      pt-6
                      text-center
                    "
                  >

                    <p className="text-xs text-[#89958f]">
                      Remember your password?
                    </p>

                    <Link
                      to="/login"
                      className="
                        group
                        mt-2
                        inline-flex
                        items-center
                        gap-1.5
                        text-xs
                        font-black
                        text-[#0f7565]
                        transition-colors
                        hover:text-[#18342f]
                      "
                    >
                      <ArrowLeft
                        size={15}
                        className="
                          transition-transform
                          duration-200
                          group-hover:-translate-x-1
                        "
                      />

                      Back to login
                    </Link>

                  </div>

                  {/* =================================================
                      FOOTER
                  ================================================== */}

                  <div className="mt-6 flex items-center justify-center gap-2">

                    <ShieldCheck
                      size={14}
                      className="text-[#0f7565]"
                    />

                    <span
                      className="
                        text-[9px]
                        font-bold
                        text-[#8d9994]
                      "
                    >
                      Your account information is protected
                    </span>

                  </div>

                  <p
                    className="
                      mt-3
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
          min-height: 52px;
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
          min-width: 0;
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
   RECOVERY FEATURE
========================================================= */

function RecoveryFeature({ title, description }) {
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

export default ForgotPassword;