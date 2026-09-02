import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Layout from "../../components/Layout";

const Certificates = () => {
  const [certificate, setCertificate] = useState(null);

  const handleCertificate = (e) => {
    const file = e.target.files[0];

    if (file) {
      setCertificate(file);
    }
  };

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
            Certificates
          </h1>

          <p className="mt-1 text-gray-500">
            Upload your professional and experience certificates.
          </p>
        </div>

        <div className="max-w-3xl rounded-2xl bg-white p-6 shadow-sm md:p-8">

          {/* Certificate Name */}
          <div className="mb-5">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Certificate Name
            </label>

            <input
              type="text"
              placeholder="Example: Electrical Technician Certificate"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
            />
          </div>

          {/* Organization */}
          <div className="mb-5">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Issuing Organization
            </label>

            <input
              type="text"
              placeholder="Enter organization name"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
            />
          </div>

          {/* Issue Date */}
          <div className="mb-5">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Issue Date
            </label>

            <input
              type="date"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
            />
          </div>

          {/* Upload */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Upload Certificate
            </label>

            <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 p-10 text-center hover:border-gray-500">

              <span className="text-4xl">📜</span>

              <span className="mt-3 font-medium text-gray-700">
                {certificate
                  ? certificate.name
                  : "Click to upload certificate"}
              </span>

              <span className="mt-1 text-xs text-gray-500">
                PDF, JPG, JPEG or PNG
              </span>

              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleCertificate}
                className="hidden"
              />

            </label>
          </div>

          {/* Status */}
          <div className="mt-6 rounded-lg bg-gray-50 p-4">
            <p className="text-sm text-gray-600">
              Verification Status:
              <span className="ml-2 font-semibold text-yellow-600">
                Not Uploaded
              </span>
            </p>
          </div>

          {/* Save */}
          <div className="mt-6 flex justify-end">
            <button
              type="button"
              className="rounded-lg bg-black px-6 py-3 font-medium text-white hover:bg-gray-800"
            >
              Save Certificate
            </button>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default Certificates;