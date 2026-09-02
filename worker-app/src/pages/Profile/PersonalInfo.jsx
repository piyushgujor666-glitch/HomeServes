import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Layout from "../../components/Layout";

const PersonalInfo = () => {
  const [photo, setPhoto] = useState(null);

  const handlePhoto = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 p-6 md:p-8">

        {/* Header */}
        <div className="mb-6">
          <NavLink
            to="/profile"
            className="text-sm font-medium text-gray-500 hover:text-black"
          >
            ← Back to Profile
          </NavLink>

          <h1 className="mt-4 text-3xl font-bold text-gray-900">
            Personal Information
          </h1>

          <p className="mt-1 text-gray-500">
            Add and manage your personal details.
          </p>
        </div>

        {/* Form */}
        <div className="max-w-3xl rounded-2xl bg-white p-6 shadow-sm md:p-8">

          {/* Photo */}
          <div className="mb-8">
            <h2 className="mb-4 text-lg font-semibold text-gray-900">
              Profile Photo
            </h2>

            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">

              <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-gray-100 text-4xl">
                {photo ? (
                  <img
                    src={photo}
                    alt="Profile"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  "👤"
                )}
              </div>

              <div>
                <label className="cursor-pointer rounded-lg bg-black px-5 py-2.5 font-medium text-white hover:bg-gray-800">
                  Upload Photo

                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhoto}
                    className="hidden"
                  />
                </label>

                <p className="mt-2 text-xs text-gray-500">
                  JPG, PNG or WEBP
                </p>
              </div>

            </div>
          </div>

          {/* Fields */}
          <div className="grid gap-5 md:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Phone Number
              </label>

              <input
                type="tel"
                placeholder="Enter phone number"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter email"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                City
              </label>

              <input
                type="text"
                placeholder="Enter city"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
              />
            </div>

          </div>

          {/* Address */}
          <div className="mt-5">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Address
            </label>

            <textarea
              rows="4"
              placeholder="Enter your complete address"
              className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
            ></textarea>
          </div>

          {/* Button */}
          <div className="mt-6 flex justify-end">
            <button
              type="button"
              className="rounded-lg bg-black px-6 py-3 font-medium text-white hover:bg-gray-800"
            >
              Save Information
            </button>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default PersonalInfo;