import React from "react";
import { NavLink } from "react-router-dom";
import Layout from "../../components/Layout";

const Profile = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 p-6 md:p-8">

        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              My Profile
            </h1>

            <p className="mt-1 text-gray-500">
              Manage your personal and professional information
            </p>
          </div>

          <div className="flex w-fit items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-600">
            <span className="h-2.5 w-2.5 rounded-full bg-green-500"></span>
            Available
          </div>
        </div>

        {/* Main Profile Card */}
        <div className="mb-6 rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-5 md:flex-row md:items-center">

            {/* Photo */}
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-gray-100 text-4xl">
              👤
            </div>

            {/* Information */}
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
            </div>

            {/* Edit */}
            <NavLink
              to="/profile/personal"
              className="rounded-lg bg-black px-5 py-2.5 text-center font-medium text-white transition hover:bg-gray-800"
            >
              Edit Profile
            </NavLink>

          </div>
        </div>

        {/* Profile Options */}
        <div className="grid gap-4">

          {/* Personal */}
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
                Manage your name, phone, email, address and profile photo.
              </p>
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
                Upload your identity verification documents.
              </p>

              <span className="mt-2 inline-block rounded-full bg-yellow-50 px-3 py-1 text-xs font-semibold text-yellow-700">
                Pending Verification
              </span>
            </div>

            <span className="text-xl text-gray-400">
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
                Add your skills, experience and previous work information.
              </p>
            </div>

            <span className="text-xl text-gray-400">
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
                Upload your professional and experience certificates.
              </p>

              <span className="mt-2 inline-block rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600">
                Not Uploaded
              </span>
            </div>

            <span className="text-xl text-gray-400">
              →
            </span>
          </NavLink>

        </div>
      </div>
    </Layout>
  );
};

export default Profile;