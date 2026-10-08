import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  ClipboardList,
  Wallet,
  User,
  CalendarDays,
  Bell,
  LogOut,
  X,
  Sparkles,
} from "lucide-react";

import logo from "../assets/FIX.jpg";

const navigation = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Orders",
    path: "/orders",
    icon: ClipboardList,
  },
  {
    label: "Earnings",
    path: "/earning",
    icon: Wallet,
  },
  {
    label: "Schedule",
    path: "/schedule",
    icon: CalendarDays,
  },
  {
    label: "Profile",
    path: "/profile",
    icon: User,
  },
];

const Header = () => {
  const navigate = useNavigate();

  const [notifications, setNotifications] = useState(false);

  const logout = () => {
    navigate("/login");
  };

  return (
    <>
      {/* =====================================================
          DESKTOP / MAIN HEADER
      ====================================================== */}

      <header
        className="
          sticky
          top-0
          z-50
          h-16
          border-b
          border-slate-200/80
          bg-white/95
          backdrop-blur-xl
        "
      >
        <div
          className="
            mx-auto
            flex
            h-full
            max-w-7xl
            items-center
            gap-3
            px-4
            sm:px-6
            lg:px-8
          "
        >

          {/* =================================================
              LOGO
          ================================================== */}

          <NavLink
            to="/dashboard"
            className="
              group
              flex
              shrink-0
              items-center
              gap-2.5
            "
          >
            <div className="relative">

              <img
                src={logo}
                alt="FixMate"
                className="
                  h-9
                  w-9
                  rounded-xl
                  object-cover
                  shadow-sm
                  transition
                  duration-300
                  group-hover:rotate-3
                  group-hover:scale-105
                "
              />

              {/* Online indicator */}

              <span
                className="
                  absolute
                  -right-1
                  -top-1
                  h-2.5
                  w-2.5
                  rounded-full
                  bg-[#E08A3C]
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


          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <nav
            className="
              ml-4
              hidden
              flex-1
              items-center
              gap-1
              lg:flex
            "
          >

            {navigation.map(
              ({ label, path, icon: Icon }) => (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) => `
                    group
                    relative
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    px-3.5
                    py-2
                    text-sm
                    font-semibold
                    transition-all
                    duration-200

                    ${
                      isActive
                        ? "bg-[#16302B] text-white shadow-md shadow-[#16302B]/10"
                        : "text-slate-600 hover:-translate-y-0.5 hover:bg-slate-100 hover:text-[#16302B]"
                    }
                  `}
                >
                  <Icon
                    size={17}
                    className="
                      transition-transform
                      duration-200
                      group-hover:scale-110
                    "
                  />

                  {label}
                </NavLink>
              )
            )}

          </nav>


          {/* =================================================
              RIGHT SIDE
          ================================================== */}

          <div
            className="
              ml-auto
              flex
              items-center
              gap-1.5
            "
          >

            {/* =================================================
                NOTIFICATIONS
            ================================================== */}

            <div className="relative">

              <button
                type="button"
                onClick={() =>
                  setNotifications((v) => !v)
                }
                aria-label="Notifications"
                className="
                  relative
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  text-slate-600
                  transition
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-slate-100
                  hover:text-[#16302B]
                "
              >

                <Bell size={19} />

                {/* Notification dot */}

                <span
                  className="
                    absolute
                    right-2
                    top-1.5
                    h-2
                    w-2
                    rounded-full
                    bg-red-500
                    ring-2
                    ring-white
                  "
                />

              </button>


              {/* =================================================
                  NOTIFICATION DROPDOWN
              ================================================== */}

              {notifications && (
                <div
                  className="
                    absolute
                    right-0
                    top-12
                    z-[100]
                    w-80
                    overflow-hidden
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    shadow-2xl
                    shadow-slate-900/10
                  "
                >

                  {/* Header */}

                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      border-b
                      border-slate-100
                      px-4
                      py-3
                    "
                  >

                    <div>

                      <p
                        className="
                          text-sm
                          font-bold
                          text-slate-900
                        "
                      >
                        Notifications
                      </p>

                      <p
                        className="
                          text-xs
                          text-slate-500
                        "
                      >
                        One new update
                      </p>

                    </div>


                    <button
                      type="button"
                      onClick={() =>
                        setNotifications(false)
                      }
                      className="
                        rounded-lg
                        p-1.5
                        text-slate-400
                        transition
                        hover:bg-slate-100
                        hover:text-slate-700
                      "
                    >
                      <X size={16} />
                    </button>

                  </div>


                  {/* Notification */}

                  <div className="p-3">

                    <button
                      type="button"
                      onClick={() => {
                        setNotifications(false);
                        navigate("/orders");
                      }}
                      className="
                        flex
                        w-full
                        gap-3
                        rounded-xl
                        p-3
                        text-left
                        transition
                        duration-200
                        hover:bg-slate-50
                      "
                    >

                      <span
                        className="
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          bg-[#0E6B5C]/10
                          text-[#0E6B5C]
                        "
                      >
                        <Sparkles size={17} />
                      </span>


                      <span>

                        <span
                          className="
                            block
                            text-sm
                            font-semibold
                            text-slate-900
                          "
                        >
                          New service request
                        </span>

                        <span
                          className="
                            mt-1
                            block
                            text-xs
                            leading-5
                            text-slate-500
                          "
                        >
                          A new customer booking is waiting
                          for your response.
                        </span>

                        <span
                          className="
                            mt-1.5
                            block
                            text-[11px]
                            text-slate-400
                          "
                        >
                          Just now
                        </span>

                      </span>

                    </button>

                  </div>

                </div>
              )}

            </div>


            {/* =================================================
                PROFILE
            ================================================== */}

            <NavLink
              to="/profile"
              className="
                group
                flex
                items-center
                gap-2
                rounded-xl
                px-1.5
                py-1.5
                transition
                duration-200
                hover:bg-slate-100
              "
            >

              <span
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-slate-100
                  text-slate-600
                  ring-1
                  ring-slate-200
                  transition
                  group-hover:ring-[#0E6B5C]/30
                "
              >
                <User size={18} />
              </span>


              <span className="hidden xl:block">

                <span
                  className="
                    block
                    text-sm
                    font-bold
                    text-slate-900
                  "
                >
                  Worker
                </span>

                <span
                  className="
                    block
                    text-xs
                    text-slate-500
                  "
                >
                  Service Professional
                </span>

              </span>

            </NavLink>


            {/* =================================================
                LOGOUT
            ================================================== */}

            <button
              type="button"
              onClick={logout}
              className="
                hidden
                items-center
                gap-2
                rounded-xl
                border
                border-slate-200
                px-3
                py-2
                text-sm
                font-semibold
                text-slate-600
                transition
                duration-200
                hover:-translate-y-0.5
                hover:border-red-200
                hover:bg-red-50
                hover:text-red-600
                sm:flex
              "
            >

              <LogOut size={16} />

              Logout

            </button>

          </div>

        </div>
      </header>


      {/* =====================================================
          MOBILE BOTTOM NAVIGATION
      ====================================================== */}

      <nav
        className="
          fixed
          bottom-0
          left-0
          right-0
          z-[60]
          border-t
          border-slate-200/90
          bg-white/95
          pb-[env(safe-area-inset-bottom)]
          shadow-[0_-10px_30px_rgba(15,23,42,0.08)]
          backdrop-blur-xl
          md:hidden
        "
      >

        <div
          className="
            mx-auto
            grid
            h-16
            max-w-lg
            grid-cols-4
            px-2
          "
        >

          {navigation
            .filter((item) =>
              [
                "/dashboard",
                "/orders",
                "/earning",
                "/profile",
              ].includes(item.path)
            )
            .map(
              ({
                label,
                path,
                icon: Icon,
              }) => (

                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) => `
                    relative
                    flex
                    h-full
                    flex-col
                    items-center
                    justify-center
                    gap-1
                    text-[10px]
                    font-semibold
                    transition-all
                    duration-200

                    ${
                      isActive
                        ? "text-[#0E6B5C]"
                        : "text-slate-500"
                    }
                  `}
                >

                  {({ isActive }) => (
                    <>

                      <span
                        className={`
                          flex
                          h-8
                          w-10
                          items-center
                          justify-center
                          rounded-xl
                          transition
                          duration-200

                          ${
                            isActive
                              ? "bg-[#0E6B5C]/10"
                              : "hover:bg-slate-100"
                          }
                        `}
                      >
                        <Icon
                          size={19}
                          strokeWidth={
                            isActive ? 2.5 : 1.8
                          }
                        />
                      </span>


                      <span>
                        {label}
                      </span>


                      {isActive && (
                        <span
                          className="
                            absolute
                            bottom-0
                            h-0.5
                            w-8
                            rounded-full
                            bg-[#0E6B5C]
                          "
                        />
                      )}

                    </>
                  )}

                </NavLink>

              )
            )}

        </div>

      </nav>
    </>
  );
};

export default Header;