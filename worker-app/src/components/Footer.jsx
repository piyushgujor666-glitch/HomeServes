import React from "react";
import { NavLink } from "react-router-dom";
import {
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  HelpCircle,
  LayoutDashboard,
  Mail,
  ShieldCheck,
  User,
  Wallet,
} from "lucide-react";

import logo from "../assets/FIX.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="
        hidden
        border-t
        border-slate-200
        bg-white
        md:block
      "
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* =====================================================
            TOP SECTION
        ====================================================== */}

        <div
          className="
            grid
            gap-10
            py-12
            lg:grid-cols-[1.6fr_1fr_1fr_1.1fr]
          "
        >

          {/* =================================================
              BRAND
          ================================================== */}

          <div>

            <NavLink
              to="/dashboard"
              className="
                group
                inline-flex
                items-center
                gap-3
              "
            >
              <div className="relative">

                <img
                  src={logo}
                  alt="FixMate"
                  className="
                    h-11
                    w-11
                    rounded-xl
                    object-cover
                    shadow-sm
                    ring-1
                    ring-slate-200
                    transition
                    duration-300
                    group-hover:rotate-2
                    group-hover:scale-105
                  "
                />

                <span
                  className="
                    absolute
                    -right-1
                    -top-1
                    h-2.5
                    w-2.5
                    rounded-full
                    bg-[#0E6B5C]
                    ring-2
                    ring-white
                  "
                />

              </div>

              <span
                className="
                  text-xl
                  font-extrabold
                  tracking-tight
                  text-[#16302B]
                "
              >
                Fix<span className="text-[#0E6B5C]">maTe</span>
              </span>

            </NavLink>


            <p
              className="
                mt-5
                max-w-md
                text-sm
                leading-6
                text-slate-500
              "
            >
              A professional workspace built for service workers
              to manage customers, jobs, earnings and schedules
              from one simple platform.
            </p>


            {/* Workspace Status */}

            <div
              className="
                mt-5
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#0E6B5C]/10
                bg-[#0E6B5C]/5
                px-3
                py-1.5
                text-xs
                font-semibold
                text-[#0E6B5C]
              "
            >
              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-[#0E6B5C]
                "
              />

              Worker Workspace
            </div>

          </div>


          {/* =================================================
              WORKSPACE
          ================================================== */}

         {/* =================================================
    WORKSPACE
================================================= */}

<div>
  <p
    className="
      mb-4
      px-2
      text-[11px]
      font-bold
      uppercase
      tracking-[0.16em]
      text-slate-400
    "
  >
    Workspace
  </p>

  <div className="space-y-1.5">

    {/* Dashboard */}
    <NavLink
      to="/dashboard"
      className="
        group
        flex
        items-center
        gap-3
        rounded-xl
        px-2.5
        py-2.5
        text-sm
        font-medium
        text-slate-600
        transition-all
        duration-200
        hover:translate-x-1
        hover:bg-slate-50
        hover:text-[#16302B]
      "
    >
      <span
        className="
          flex
          h-8
          w-8
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-slate-100
          text-slate-500
          transition-all
          duration-200
          group-hover:bg-[#0E6B5C]/10
          group-hover:text-[#0E6B5C]
        "
      >
        <LayoutDashboard size={16} />
      </span>

      <span className="flex-1">
        Dashboard
      </span>

      <ArrowUpRight
        size={14}
        className="
          opacity-0
          text-[#0E6B5C]
          transition-all
          duration-200
          group-hover:translate-x-0.5
          group-hover:opacity-100
        "
      />
    </NavLink>


    {/* Orders */}
    <NavLink
      to="/orders"
      className="
        group
        flex
        items-center
        gap-3
        rounded-xl
        px-2.5
        py-2.5
        text-sm
        font-medium
        text-slate-600
        transition-all
        duration-200
        hover:translate-x-1
        hover:bg-slate-50
        hover:text-[#16302B]
      "
    >
      <span
        className="
          flex
          h-8
          w-8
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-slate-100
          text-slate-500
          transition-all
          duration-200
          group-hover:bg-[#0E6B5C]/10
          group-hover:text-[#0E6B5C]
        "
      >
        <ClipboardList size={16} />
      </span>

      <span className="flex-1">
        Orders
      </span>

      <ArrowUpRight
        size={14}
        className="
          opacity-0
          text-[#0E6B5C]
          transition-all
          duration-200
          group-hover:translate-x-0.5
          group-hover:opacity-100
        "
      />
    </NavLink>


    {/* Earnings */}
    <NavLink
      to="/earning"
      className="
        group
        flex
        items-center
        gap-3
        rounded-xl
        px-2.5
        py-2.5
        text-sm
        font-medium
        text-slate-600
        transition-all
        duration-200
        hover:translate-x-1
        hover:bg-slate-50
        hover:text-[#16302B]
      "
    >
      <span
        className="
          flex
          h-8
          w-8
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-slate-100
          text-slate-500
          transition-all
          duration-200
          group-hover:bg-[#0E6B5C]/10
          group-hover:text-[#0E6B5C]
        "
      >
        <Wallet size={16} />
      </span>

      <span className="flex-1">
        Earnings
      </span>

      <ArrowUpRight
        size={14}
        className="
          opacity-0
          text-[#0E6B5C]
          transition-all
          duration-200
          group-hover:translate-x-0.5
          group-hover:opacity-100
        "
      />
    </NavLink>


    {/* Schedule */}
    <NavLink
      to="/schedule"
      className="
        group
        flex
        items-center
        gap-3
        rounded-xl
        px-2.5
        py-2.5
        text-sm
        font-medium
        text-slate-600
        transition-all
        duration-200
        hover:translate-x-1
        hover:bg-slate-50
        hover:text-[#16302B]
      "
    >
      <span
        className="
          flex
          h-8
          w-8
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-slate-100
          text-slate-500
          transition-all
          duration-200
          group-hover:bg-[#0E6B5C]/10
          group-hover:text-[#0E6B5C]
        "
      >
        <CalendarDays size={16} />
      </span>

      <span className="flex-1">
        Schedule
      </span>

      <ArrowUpRight
        size={14}
        className="
          opacity-0
          text-[#0E6B5C]
          transition-all
          duration-200
          group-hover:translate-x-0.5
          group-hover:opacity-100
        "
      />
    </NavLink>


    {/* Profile */}
    <NavLink
      to="/profile"
      className="
        group
        flex
        items-center
        gap-3
        rounded-xl
        px-2.5
        py-2.5
        text-sm
        font-medium
        text-slate-600
        transition-all
        duration-200
        hover:translate-x-1
        hover:bg-slate-50
        hover:text-[#16302B]
      "
    >
      <span
        className="
          flex
          h-8
          w-8
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-slate-100
          text-slate-500
          transition-all
          duration-200
          group-hover:bg-[#0E6B5C]/10
          group-hover:text-[#0E6B5C]
        "
      >
        <User size={16} />
      </span>

      <span className="flex-1">
        My Profile
      </span>

      <ArrowUpRight
        size={14}
        className="
          opacity-0
          text-[#0E6B5C]
          transition-all
          duration-200
          group-hover:translate-x-0.5
          group-hover:opacity-100
        "
      />
    </NavLink>

  </div>
</div>


          {/* =================================================
              SUPPORT
          ================================================== */}

          <div>

            <p
              className="
                mb-5
                text-xs
                font-bold
                uppercase
                tracking-[0.12em]
                text-slate-400
              "
            >
              Support
            </p>


            <div className="space-y-1">

              <button
                type="button"
                className="footer-link"
              >
                <ShieldCheck size={16} />
                <span>Privacy & Security</span>
              </button>


              <button
                type="button"
                className="footer-link"
              >
                <HelpCircle size={16} />
                <span>Help Center</span>

                <ArrowUpRight
                  size={14}
                  className="ml-auto"
                />
              </button>


              <button
                type="button"
                className="footer-link"
              >
                <CheckCircle2 size={16} />
                <span>Terms & Conditions</span>
              </button>


              <button
                type="button"
                className="footer-link"
              >
                <Mail size={16} />
                <span>Contact Support</span>

                <ArrowUpRight
                  size={14}
                  className="ml-auto"
                />
              </button>

            </div>

          </div>


          {/* =================================================
              PROFESSIONAL CARD
          ================================================== */}

          <div
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-slate-200
              bg-slate-50
              p-5
            "
          >

            {/* Decorative circle */}

            <div
              className="
                pointer-events-none
                absolute
                -right-8
                -top-8
                h-24
                w-24
                rounded-full
                bg-[#0E6B5C]/5
              "
            />


            <div
              className="
                relative
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-[#0E6B5C]/10
                text-[#0E6B5C]
              "
            >
              <CheckCircle2 size={20} />
            </div>


            <h3
              className="
                relative
                mt-4
                text-sm
                font-bold
                text-[#16302B]
              "
            >
              Keep your profile ready
            </h3>


            <p
              className="
                relative
                mt-2
                text-xs
                leading-5
                text-slate-500
              "
            >
              Complete your KYC, experience and certificates
              to improve your chances of receiving service orders.
            </p>


            <NavLink
              to="/profile"
              className="
                relative
                mt-4
                inline-flex
                items-center
                gap-1.5
                text-xs
                font-bold
                text-[#0E6B5C]
                transition
                hover:gap-2.5
              "
            >
              Complete Profile

              <ArrowUpRight size={14} />
            </NavLink>

          </div>

        </div>


        {/* =====================================================
            DIVIDER
        ====================================================== */}

        <div className="border-t border-slate-100" />


        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}

        <div
          className="
            flex
            flex-col
            gap-3
            py-5
            text-xs
            text-slate-400
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          <p>
            © {currentYear} FixmaTe. All rights reserved.
          </p>


          <div
            className="
              flex
              items-center
              gap-2
            "
          >
            <span
              className="
                h-1
                w-1
                rounded-full
                bg-slate-300
              "
            />

            <span>
              Built for service professionals
            </span>

            <span
              className="
                h-1
                w-1
                rounded-full
                bg-slate-300
              "
            />

            <span className="font-medium text-[#0E6B5C]">
              FixMate
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;