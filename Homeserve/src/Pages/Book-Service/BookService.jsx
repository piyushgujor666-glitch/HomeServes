import React from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../../Components/Layout.jsx";

function BookService() {

  const navigate = useNavigate();

  const handleBooking = (e) => {
    e.preventDefault();

    navigate("/bookings");
  };

  return (
    <Layout>

      <div className="max-w-3xl mx-auto px-6 py-10">

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">

          <h1 className="text-3xl font-bold text-gray-800">
            Book a Service
          </h1>

          <p className="text-gray-500 mt-2">
            Fill in the details to book your home service.
          </p>


          <form
            onSubmit={handleBooking}
            className="mt-8 space-y-5"
          >

            {/* Name */}

            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full h-12 px-4 border border-gray-300 rounded-lg outline-none focus:border-green-600"
              />

            </div>


            {/* Phone */}

            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number
              </label>

              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full h-12 px-4 border border-gray-300 rounded-lg outline-none focus:border-green-600"
              />

            </div>


            {/* Service */}

            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Select Service
              </label>

              <select
                className="w-full h-12 px-4 border border-gray-300 rounded-lg outline-none focus:border-green-600"
              >

                <option value="">
                  Select a service
                </option>

                <option value="plumbing">
                  Plumbing
                </option>

                <option value="cleaning">
                  Cleaning
                </option>

                <option value="electrical">
                  Electrical
                </option>

                <option value="repair">
                  Home Repair
                </option>

              </select>

            </div>


            {/* Date */}

            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Preferred Date
              </label>

              <input
                type="date"
                className="w-full h-12 px-4 border border-gray-300 rounded-lg outline-none focus:border-green-600"
              />

            </div>


            {/* Address */}

            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Address
              </label>

              <textarea
                rows="4"
                placeholder="Enter your address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-green-600 resize-none"
              ></textarea>

            </div>


            {/* Button */}

            <button
              type="submit"
              className="w-full h-12 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition"
            >
              Confirm Booking
            </button>

          </form>

        </div>

      </div>

    </Layout>
  );
}

export default BookService;