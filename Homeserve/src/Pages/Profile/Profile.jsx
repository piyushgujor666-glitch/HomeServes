import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Layout from "../../Components/Layout.jsx";

function Profile() {
  const navigate = useNavigate();

  return (
    <Layout>

      {/* =========================
          FLOATING BACK BUTTON
      ========================= */}
      <div className="fixed bottom-6 left-6 z-50">

        <button
          type="button"
          onClick={() => navigate("/services")}
          className="
            profile-back-button
            zoomanimation
            flex items-center gap-2
            px-5 py-3
            rounded-full
            font-semibold
            text-sm
            shadow-xl
            transition-all duration-300
          "
        >
          ← Back
        </button>

      </div>


      {/* =========================
          MAIN PAGE
      ========================= */}
      <div className="
        min-h-screen
        bg-gray-50 dark:bg-[#0b1220]
        text-gray-900 dark:text-white
        transition-colors duration-300
      ">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">


          {/* =========================
              PAGE INTRO
          ========================= */}
          <div className="mb-8">

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">

              <div>

                <div className="flex items-center gap-2 mb-2">

                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>

                  <p className="
                    text-sm
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-green-600
                  ">
                    Account
                  </p>

                </div>

                <h1 className="
                  text-3xl
                  sm:text-4xl
                  lg:text-5xl
                  font-black
                  tracking-tight
                  text-gray-900 dark:text-white
                ">
                  My Profile
                </h1>

                <p className="
                  mt-3
                  text-gray-500 dark:text-gray-400
                  max-w-xl
                ">
                  Manage your personal information, bookings and
                  account security from one place.
                </p>

              </div>


              {/* ACTIVE STATUS */}

              <div className="
                inline-flex
                items-center
                gap-3
                self-start
                lg:self-auto
                px-4 py-3
                rounded-2xl
                bg-white dark:bg-[#151f30]
                border border-gray-200 dark:border-gray-700
                shadow-sm
              ">

                <span className="
                  flex items-center justify-center
                  w-9 h-9
                  rounded-xl
                  bg-green-100 dark:bg-green-900/30
                ">
                  🟢
                </span>

                <div>

                  <p className="text-xs text-gray-400 uppercase tracking-wider">
                    Status
                  </p>

                  <p className="text-sm font-bold text-gray-900 dark:text-white">
                    Account Active
                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* =========================
              PROFILE HERO
          ========================= */}
          <div className="
            relative
            overflow-hidden
            rounded-[2rem]
            bg-white dark:bg-[#151f30]
            border border-gray-200 dark:border-gray-700
            shadow-xl
            mb-8
          ">

            {/* Banner */}

            <div className="
              relative
              h-44
              sm:h-52
              bg-gradient-to-br
              from-gray-950
              via-gray-900
              to-green-950
              overflow-hidden
            ">

              {/* Glow */}

              <div className="
                absolute
                -right-20
                -top-32
                w-96 h-96
                rounded-full
                bg-green-500/20
                blur-3xl
              "></div>

              <div className="
                absolute
                right-20
                bottom-[-120px]
                w-80 h-80
                rounded-full
                bg-green-400/10
                blur-2xl
              "></div>

              {/* Grid pattern */}

              <div className="
                absolute inset-0
                opacity-[0.08]
                profile-grid
              "></div>

              {/* Banner text */}

              <div className="
                absolute
                top-7
                left-7
                sm:left-10
                text-white
              ">

                <p className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-green-300
                ">
                  FixMate
                </p>

                <p className="
                  mt-2
                  text-lg
                  sm:text-xl
                  font-bold
                ">
                  Your home service account
                </p>

              </div>

            </div>


            {/* PROFILE INFORMATION */}

            <div className="
              relative
              px-5
              sm:px-8
              lg:px-10
              pb-8
            ">

              <div className="
                flex
                flex-col
                lg:flex-row
                lg:items-end
                lg:justify-between
                gap-6
              ">


                {/* USER */}

                <div className="
                  flex
                  flex-col
                  sm:flex-row
                  sm:items-end
                  gap-5
                  -mt-16
                  relative
                  z-10
                ">

                  {/* AVATAR */}

                  <div className="
                    w-28 h-28
                    sm:w-32 sm:h-32
                    shrink-0
                    rounded-[2rem]
                    bg-gradient-to-br
                    from-green-500
                    to-green-700
                    border-[6px]
                    border-white dark:border-[#151f30]
                    shadow-2xl
                    flex items-center justify-center
                    text-5xl
                    sm:text-6xl
                    font-black
                    text-white
                    zoomanimation
                  ">
                    P
                  </div>


                  {/* USER DETAILS */}

                  <div className="pb-1">

                    <div className="
                      flex
                      flex-wrap
                      items-center
                      gap-3
                    ">

                      <h2 className="
                        text-3xl
                        font-black
                        text-gray-900 dark:text-white
                      ">
                        Piyush
                      </h2>

                      <span className="
                        px-3 py-1
                        rounded-full
                        bg-green-100 dark:bg-green-900/30
                        text-green-700 dark:text-green-300
                        text-xs
                        font-bold
                      ">
                        Customer
                      </span>

                    </div>

                    <p className="
                      mt-1
                      text-gray-500 dark:text-gray-400
                    ">
                      FixMate Customer Account
                    </p>

                  </div>

                </div>


                {/* EDIT */}

                <button
                  type="button"
                  className="
                    profile-edit-button
                    zoomanimation
                    w-full
                    lg:w-auto
                    px-6 py-3
                    rounded-xl
                    font-bold
                    transition-all duration-300
                    shadow-lg
                  "
                >
                  ✏️ Edit Profile
                </button>

              </div>


              {/* DIVIDER */}

              <div className="
                border-t
                border-gray-200 dark:border-gray-700
                mt-8
                pt-8
              ">


                {/* =========================
                    STATS
                ========================= */}

                <div className="
                  grid
                  grid-cols-2
                  lg:grid-cols-4
                  gap-4
                ">


                  {/* BOOKINGS */}

                  <div className="profile-stat-card">

                    <div className="profile-stat-icon bg-blue-100 dark:bg-blue-900/30">
                      📋
                    </div>

                    <div>

                      <p className="profile-stat-label">
                        Total Bookings
                      </p>

                      <p className="profile-stat-value">
                        1
                      </p>

                    </div>

                  </div>


                  {/* COMPLETED */}

                  <div className="profile-stat-card">

                    <div className="profile-stat-icon bg-green-100 dark:bg-green-900/30">
                      ✓
                    </div>

                    <div>

                      <p className="profile-stat-label">
                        Completed
                      </p>

                      <p className="profile-stat-value text-green-600">
                        0
                      </p>

                    </div>

                  </div>


                  {/* PENDING */}

                  <div className="profile-stat-card">

                    <div className="profile-stat-icon bg-orange-100 dark:bg-orange-900/30">
                      ⏳
                    </div>

                    <div>

                      <p className="profile-stat-label">
                        Pending
                      </p>

                      <p className="profile-stat-value text-orange-500">
                        1
                      </p>

                    </div>

                  </div>


                  {/* MEMBER */}

                  <div className="profile-stat-card">

                    <div className="profile-stat-icon bg-purple-100 dark:bg-purple-900/30">
                      ⭐
                    </div>

                    <div>

                      <p className="profile-stat-label">
                        Member Since
                      </p>

                      <p className="profile-stat-value text-lg">
                        2026
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* =========================
              TWO COLUMN SECTION
          ========================= */}

          <div className="
            grid
            lg:grid-cols-3
            gap-8
            mb-8
          ">


            {/* =========================
                PERSONAL INFORMATION
            ========================= */}

            <div className="
              lg:col-span-2
              profile-section-card
            ">

              <div className="mb-6">

                <div className="flex items-center gap-3">

                  <div className="
                    w-11 h-11
                    rounded-xl
                    bg-green-100 dark:bg-green-900/30
                    flex items-center justify-center
                    text-xl
                  ">
                    👤
                  </div>

                  <div>

                    <h3 className="
                      text-xl
                      font-black
                      text-gray-900 dark:text-white
                    ">
                      Personal Information
                    </h3>

                    <p className="
                      text-sm
                      text-gray-500 dark:text-gray-400
                    ">
                      Your basic account information.
                    </p>

                  </div>

                </div>

              </div>


              <div className="
                grid
                sm:grid-cols-2
                gap-4
              ">


                {/* NAME */}

                <div className="profile-info-card">

                  <div className="profile-info-icon">
                    👤
                  </div>

                  <div className="min-w-0">

                    <p className="profile-info-label">
                      Full Name
                    </p>

                    <p className="profile-info-value">
                      Piyush
                    </p>

                  </div>

                </div>


                {/* EMAIL */}

                <div className="profile-info-card">

                  <div className="profile-info-icon">
                    ✉️
                  </div>

                  <div className="min-w-0">

                    <p className="profile-info-label">
                      Email Address
                    </p>

                    <p className="profile-info-value truncate">
                      user@example.com
                    </p>

                  </div>

                </div>


                {/* PHONE */}

                <div className="profile-info-card">

                  <div className="profile-info-icon">
                    📱
                  </div>

                  <div>

                    <p className="profile-info-label">
                      Phone Number
                    </p>

                    <p className="profile-info-value">
                      +91 98765 43210
                    </p>

                  </div>

                </div>


                {/* LOCATION */}

                <div className="profile-info-card">

                  <div className="profile-info-icon">
                    📍
                  </div>

                  <div>

                    <p className="profile-info-label">
                      Location
                    </p>

                    <p className="profile-info-value">
                      India
                    </p>

                  </div>

                </div>

              </div>

            </div>


            {/* =========================
                QUICK ACTIONS
            ========================= */}

            <div className="profile-section-card">

              <div className="mb-6">

                <h3 className="
                  text-xl
                  font-black
                  text-gray-900 dark:text-white
                ">
                  Quick Actions
                </h3>

                <p className="
                  text-sm
                  text-gray-500 dark:text-gray-400
                  mt-1
                ">
                  Manage your account quickly.
                </p>

              </div>


              <div className="space-y-3">


                <NavLink
                  to="/bookings"
                  className="profile-action-card"
                >

                  <span className="profile-action-icon">
                    📅
                  </span>

                  <span className="flex-1">

                    <span className="block font-bold">
                      My Bookings
                    </span>

                    <span className="block text-xs opacity-60">
                      View your service bookings
                    </span>

                  </span>

                  <span>→</span>

                </NavLink>


                <NavLink
                  to="/services"
                  className="profile-action-card"
                >

                  <span className="profile-action-icon">
                    🔧
                  </span>

                  <span className="flex-1">

                    <span className="block font-bold">
                      Find a Service
                    </span>

                    <span className="block text-xs opacity-60">
                      Browse FixMate services
                    </span>

                  </span>

                  <span>→</span>

                </NavLink>


                <button
                  type="button"
                  className="profile-action-card profile-action-card-button"
                >

                  <span className="profile-action-icon">
                    🔐
                  </span>

                  <span className="flex-1 text-left">

                    <span className="block font-bold">
                      Security
                    </span>

                    <span className="block text-xs opacity-60">
                      Manage your password
                    </span>

                  </span>

                  <span>→</span>

                </button>

              </div>

            </div>

          </div>


          {/* =========================
              SECURITY
          ========================= */}

          <div className="
            profile-security-card
            mb-8
          ">

            <div className="
              flex
              flex-col
              md:flex-row
              md:items-center
              md:justify-between
              gap-6
            ">

              <div className="flex items-start gap-4">

                <div className="
                  w-12 h-12
                  shrink-0
                  rounded-2xl
                  bg-green-500/15
                  flex items-center justify-center
                  text-xl
                ">
                  🔒
                </div>

                <div>

                  <div className="flex flex-wrap items-center gap-3">

                    <h3 className="text-xl font-black">
                      Account Security
                    </h3>

                    <span className="
                      px-2.5 py-1
                      rounded-full
                      bg-green-500/15
                      text-green-400
                      text-xs
                      font-bold
                    ">
                      Protected
                    </span>

                  </div>

                  <p className="
                    text-gray-400
                    text-sm
                    mt-2
                    max-w-2xl
                  ">
                    Keep your account secure by regularly updating
                    your password and protecting your login credentials.
                  </p>

                </div>

              </div>


              <button
                type="button"
                className="
                  profile-password-button
                  shrink-0
                  px-5 py-3
                  rounded-xl
                  font-bold
                  transition-all duration-300
                "
              >
                🔑 Change Password
              </button>

            </div>

          </div>


          {/* =========================
              LOGOUT
          ========================= */}

          <div className="
            profile-logout-card
            mb-8
          ">

            <div className="
              flex
              flex-col
              md:flex-row
              md:items-center
              md:justify-between
              gap-5
            ">

              <div className="flex items-start gap-4">

                <div className="
                  w-11 h-11
                  rounded-xl
                  bg-red-100 dark:bg-red-900/20
                  flex items-center justify-center
                ">
                  🚪
                </div>

                <div>

                  <h3 className="
                    font-black
                    text-gray-900 dark:text-white
                  ">
                    Sign out of your account
                  </h3>

                  <p className="
                    text-sm
                    text-gray-500 dark:text-gray-400
                    mt-1
                  ">
                    You can sign back in anytime using your account credentials.
                  </p>

                </div>

              </div>


              <NavLink
                onClick={(e) => {

                  const confirmlogout = window.confirm(
                    "Are you sure you want to log out? 🥺\nWe’ll miss having you around! Your next order is just one click away. ❤️"
                  );

                  if (!confirmlogout) {
                    e.preventDefault();
                  }

                }}
                to="/login"
                className="
                  profile-logout-button
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  px-6 py-3
                  rounded-xl
                  font-bold
                  transition-all duration-300
                "
              >
                Logout
                →
              </NavLink>

            </div>

          </div>


          {/* =========================
              CTA
          ========================= */}

          <div className="
            relative
            overflow-hidden
            rounded-[2rem]
            bg-gradient-to-r
            from-green-600
            via-green-500
            to-emerald-500
            p-7
            sm:p-9
            text-white
            shadow-xl
          ">

            {/* Background decoration */}

            <div className="
              absolute
              -right-20
              -top-28
              w-80 h-80
              rounded-full
              bg-white/10
            "></div>

            <div className="
              absolute
              -right-10
              -bottom-40
              w-96 h-96
              rounded-full
              bg-white/5
            "></div>


            <div className="
              relative z-10
              flex
              flex-col
              md:flex-row
              md:items-center
              md:justify-between
              gap-6
            ">

              <div>

                <p className="
                  text-green-100
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.2em]
                ">
                  Need a service?
                </p>

                <h2 className="
                  text-2xl
                  sm:text-3xl
                  lg:text-4xl
                  font-black
                  mt-2
                ">
                  Your home deserves the best.
                </h2>

                <p className="
                  text-green-50
                  mt-2
                  max-w-xl
                ">
                  Book a trusted professional with FixMate today.
                </p>

              </div>


              <NavLink
                to="/services"
                className="
                  profile-cta-button
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  px-6 py-3
                  rounded-xl
                  font-black
                  transition-all duration-300
                  shadow-xl
                "
              >
                Explore Services
                →
              </NavLink>

            </div>

          </div>


        </div>

      </div>

    </Layout>
  );
}

export default Profile;