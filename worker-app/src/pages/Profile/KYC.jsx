import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Layout from "../../components/Layout";

const KYC = () => {
  const [idFile, setIdFile] = useState(null);
  const [panFile, setPanFile] = useState(null);

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
            KYC Verification
          </h1>

          <p className="mt-1 text-gray-500">
            Submit your identity documents for verification.
          </p>
        </div>

        {/* Status */}
        <div className="mb-6 max-w-3xl rounded-xl border border-yellow-200 bg-yellow-50 p-4">
          <div className="flex items-center gap-3">
            <span className="text-xl">⏳</span>

            <div>
              <h3 className="font-semibold text-yellow-800">
                Verification Pending
              </h3>

              <p className="text-sm text-yellow-700">
                Your documents will be reviewed by the HomeServe team.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-3xl space-y-6">

          {/* Government ID */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">
              Government ID
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Upload your government identity document.
            </p>

            <input
              type="text"
              placeholder="Enter ID number"
              className="mt-5 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
            />

            <label className="mt-4 flex cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-8 text-center hover:border-gray-500">
              <div>
                <div className="text-3xl">📄</div>

                <p className="mt-2 font-medium text-gray-700">
                  {idFile ? idFile.name : "Click to upload document"}
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  PDF, JPG or PNG
                </p>
              </div>

              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) => setIdFile(e.target.files[0])}
                className="hidden"
              />
            </label>
          </div>

          {/* PAN */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">
              PAN Details
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Add your PAN information if applicable.
            </p>

            <input
              type="text"
              placeholder="Enter PAN number"
              className="mt-5 w-full rounded-lg border border-gray-300 px-4 py-3 uppercase outline-none focus:border-black"
            />

            <label className="mt-4 flex cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-8 text-center hover:border-gray-500">
              <div>
                <div className="text-3xl">📄</div>

                <p className="mt-2 font-medium text-gray-700">
                  {panFile ? panFile.name : "Click to upload PAN"}
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  PDF, JPG or PNG
                </p>
              </div>

              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) => setPanFile(e.target.files[0])}
                className="hidden"
              />
            </label>
          </div>

          {/* Submit */}
          <div className="flex justify-end">
            <button
              type="button"
              className="rounded-lg bg-black px-6 py-3 font-medium text-white hover:bg-gray-800"
            >
              Submit for Verification
            </button>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default KYC;