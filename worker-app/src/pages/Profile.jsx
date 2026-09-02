import React from "react";
import { NavLink } from "react-router-dom";
import Layout from "../../components/Layout";

const Profile = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 p-6 md:p-8">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            My Profile
          </h1>

          <p className="mt-2 text-gray-500">
            Manage your personal and professional information
          </p>
        </div>

        {/* Profile Card */}
        <div className="mb-6 rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

            {/* Profile Image */}
            <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gray-100 text-4xl">
              👤
            </div>

            {/* Worker Details */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900">
                Worker Name
              </h2>

              <p className="mt-1 text-gray-500">
                Service Professional
              </p>

              <p className="mt-2 text-sm text-gray-500">
                📍 Your Location
              </p>

              <div className="mt-3 flex flex-wrap gap-3">
                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
                  ● Available
                </span>

                <span className="rounded-full bg-yellow-50 px-3 py-1 text-xs font-semibold text-yellow-700">
                  ⭐ 4.8 Rating
                </span>
              </div>
            </div>

            {/* Edit */}
            <NavLink
              to="/profile/personal"
              className="rounded-lg bg-black px-5 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              Edit Profile
            </NavLink>

          </div>
        </div>

        {/* Profile Completion */}
        <div className="mb-6 rounded-2xl bg-white p-6 shadow-sm">

          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-bold text-gray-900">
                Profile Completion
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Complete your profile to receive more orders.
              </p>
            </div>

            <span className="text-lg font-bold text-gray-900">
              60%
            </span>
          </div>

          <div className="mt-4 h-2 overflow-hidden rounded-full bg-gray-200">
            <div className="h-full w-[60%] rounded-full bg-black"></div>
          </div>

        </div>

        {/* Profile Options */}
        <div className="grid gap-4">

          {/* Personal Information */}
          <NavLink
            to="/profile/personal"
            className="group flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-2xl">
              👤
            </div>

            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">
                Personal Information
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Name, phone, email, address and profile photo
              </p>

              <span className="mt-2 inline-block text-xs font-medium text-green-600">
                ✓ Completed
              </span>
            </div>

            <span className="text-xl text-gray-400 transition group-hover:translate-x-1">
              →
            </span>
          </NavLink>

          {/* KYC */}
          <NavLink
            to="/profile/kyc"
            className="group flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-2xl">
              🪪
            </div>

            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">
                KYC Verification
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Government ID and identity verification
              </p>

              <span className="mt-2 inline-block rounded-full bg-yellow-50 px-3 py-1 text-xs font-semibold text-yellow-700">
                Pending
              </span>
            </div>

            <span className="text-xl text-gray-400 transition group-hover:translate-x-1">
              →
            </span>
          </NavLink>

          {/* Experience */}
          <NavLink
            to="/profile/experience"
            className="group flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-2xl">
              🔧
            </div>

            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">
                Professional Experience
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Skills, experience and previous work
              </p>

              <span className="mt-2 inline-block text-xs font-medium text-orange-600">
                Complete your details
              </span>
            </div>

            <span className="text-xl text-gray-400 transition group-hover:translate-x-1">
              →
            </span>
          </NavLink>

          {/* Certificates */}
          <NavLink
            to="/profile/certificates"
            className="group flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50 text-2xl">
              📜
            </div>

            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">
                Certificates
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Professional and experience certificates
              </p>

              <span className="mt-2 inline-block rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600">
                Not Uploaded
              </span>
            </div>

            <span className="text-xl text-gray-400 transition group-hover:translate-x-1">
              →
            </span>
          </NavLink>

        </div>

        {/* Professional Summary */}
        <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm">

          <h2 className="text-lg font-bold text-gray-900">
            Professional Summary
          </h2>

          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            <div>
              <p className="text-sm text-gray-500">
                Primary Service
              </p>

              <p className="mt-1 font-semibold text-gray-900">
                Electrician
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Experience
              </p>

              <p className="mt-1 font-semibold text-gray-900">
                3 Years
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Jobs Completed
              </p>

              <p className="mt-1 font-semibold text-gray-900">
                126
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Customer Rating
              </p>

              <p className="mt-1 font-semibold text-gray-900">
                ⭐ 4.8
              </p>
            </div>

          </div>
        </div>

      </div>
    </Layout>
  );
};

export default Profile;