import React from "react";
import { NavLink } from "react-router-dom";
import Layout from "../../components/Layout";

const Experience = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 p-6 md:p-8">

        <div className="mb-6">
          <NavLink
            to="/profile"
            className="text-sm font-medium text-gray-500 hover:text-black"
          >
            ← Back to Profile
          </NavLink>

          <h1 className="mt-4 text-3xl font-bold text-gray-900">
            Professional Experience
          </h1>

          <p className="mt-1 text-gray-500">
            Tell customers about your professional experience.
          </p>
        </div>

        <div className="max-w-3xl rounded-2xl bg-white p-6 shadow-sm md:p-8">

          <div className="space-y-5">

            {/* Service */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Primary Service
              </label>

              <select className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-black">
                <option>Select Service</option>
                <option>Plumber</option>
                <option>Electrician</option>
                <option>AC Repair</option>
                <option>Cleaning</option>
                <option>Painting</option>
                <option>Appliance Repair</option>
              </select>
            </div>

            {/* Experience */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Years of Experience
              </label>

              <select className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-black">
                <option>Select Experience</option>
                <option>Less than 1 year</option>
                <option>1 - 2 years</option>
                <option>3 - 5 years</option>
                <option>5 - 10 years</option>
                <option>10+ years</option>
              </select>
            </div>

            {/* Previous Company */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Previous Company / Organization
              </label>

              <input
                type="text"
                placeholder="Enter company name"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
              />
            </div>

            {/* Skills */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Skills
              </label>

              <input
                type="text"
                placeholder="Example: Wiring, Installation, Repair"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
              />

              <p className="mt-1 text-xs text-gray-500">
                Separate multiple skills with commas.
              </p>
            </div>

            {/* Description */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Professional Description
              </label>

              <textarea
                rows="5"
                placeholder="Describe your professional experience..."
                className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
              ></textarea>
            </div>

          </div>

          {/* Save */}
          <div className="mt-6 flex justify-end">
            <button
              type="button"
              className="rounded-lg bg-black px-6 py-3 font-medium text-white hover:bg-gray-800"
            >
              Save Experience
            </button>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default Experience;