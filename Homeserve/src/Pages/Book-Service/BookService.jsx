import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../../Components/Layout.jsx";
import logo from "../../assets/FIX.jpg"

function BookService() {
  const navigate = useNavigate();

  const [service, setService] = useState("");

  const handleBooking = (e) => {
    e.preventDefault();

    navigate("/bookings");
  };

  const serviceData = {
    plumbing: {
      name: "Plumbing",
      icon: "🚰",
      price: "₹299",
    },
    cleaning: {
      name: "Cleaning",
      icon: "🧹",
      price: "₹399",
    },
    electrical: {
      name: "Electrical",
      icon: "⚡",
      price: "₹349",
    },
    painting: {
      name: "Painting",
      icon: "🎨",
      price: "₹299",
    },
    ac: {
      name: "AC Repair & Service",
      icon: "❄️",
      price: "₹599",
    },
    carpentry: {
      name: "Carpentry",
      icon: "🪚",
      price: "₹899",
    },
    appliance: {
      name: "Appliance Repair",
      icon: "🔧",
      price: "₹499",
    },
    pest: {
      name: "Pest Control",
      icon: "🦟",
      price: "₹399",
    },
    water: {
      name: "RO / Water Purifier",
      icon: "💧",
      price: "₹699",
    },
    locksmith: {
      name: "Locksmith",
      icon: "🔐",
      price: "₹199",
    },
  };

  const selectedService = serviceData[service];

  return (
    <Layout>

      <div className="min-h-screen bg-gray-50">

        {/* =====================================================
            PAGE HEADER
        ===================================================== */}

        <section className="max-w-7xl mx-auto px-6 pt-10">

          <div className="max-w-3xl">

            <p className="text-green-600 font-bold text-sm uppercase tracking-wider">
              Fixmate Booking
            </p>

            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
              Book a home service
            </h1>

            <p className="text-gray-500 mt-2">
              Tell us what you need and choose a convenient time.
            </p>

          </div>


          {/* Progress */}

          <div className="flex items-center gap-3 mt-8 max-w-xl">

            <div className="flex items-center gap-2">

              <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center text-sm font-bold">
                1
              </div>

              <span className="text-sm font-semibold text-gray-800">
                Details
              </span>

            </div>

            <div className="h-px bg-gray-300 flex-1"></div>

            <div className="flex items-center gap-2">

              <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center text-sm font-bold">
                2
              </div>

              <span className="text-sm text-gray-400">
                Confirmation
              </span>

            </div>

          </div>

        </section>



        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}

        <section className="max-w-7xl mx-auto px-6 py-8">

          <div className="grid lg:grid-cols-3 gap-8">


            {/* =================================================
                FORM
            ================================================= */}

            <div className="lg:col-span-2">

              <div className="bg-white border border-gray-200 rounded-3xl shadow-sm p-6 md:p-8">

                <div className="mb-7">

                  <h2 className="text-xl font-extrabold text-gray-900">
                    Service details
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    Enter your information so we can arrange your service.
                  </p>

                </div>


                <form
                  onSubmit={handleBooking}
                  className="space-y-6"
                >

                  {/* ==========================================
                      PERSONAL DETAILS
                  ========================================== */}

                  <div className="grid md:grid-cols-2 gap-5">

                    {/* NAME */}

                    <div>

                      <label
                        htmlFor="name"
                        className="block text-sm font-bold text-gray-700 mb-2"
                      >
                        Full Name
                      </label>

                      <div className="relative">

                        <span className="absolute left-4 top-1/2 -translate-y-1/2">
                          👤
                        </span>

                        <input
                          id="name"
                          type="text"
                          placeholder="Enter your name"
                          required
                          className="w-full pl-11 pr-4 h-12 border border-gray-200 bg-gray-50 rounded-xl outline-none text-sm transition focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                        />

                      </div>

                    </div>


                    {/* PHONE */}

                    <div>

                      <label
                        htmlFor="phone"
                        className="block text-sm font-bold text-gray-700 mb-2"
                      >
                        Phone Number
                      </label>

                      <div className="relative">

                        <span className="absolute left-4 top-1/2 -translate-y-1/2">
                          📞
                        </span>

                        <input
                          id="phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          required
                          className="w-full pl-11 pr-4 h-12 border border-gray-200 bg-gray-50 rounded-xl outline-none text-sm transition focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                        />

                      </div>

                    </div>

                  </div>



                  {/* ==========================================
                      SERVICE
                  ========================================== */}

                  <div>

                    <label
                      htmlFor="service"
                      className="block text-sm font-bold text-gray-700 mb-2"
                    >
                      Select Service
                    </label>

                    <div className="relative">

                      <span className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                        🛠️
                      </span>

                      <select
                        id="service"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        required
                        className="appearance-none w-full pl-11 pr-10 h-12 border border-gray-200 bg-gray-50 rounded-xl outline-none text-sm text-gray-700 cursor-pointer transition focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                      >

                        <option value="">
                          Choose the service you need
                        </option>

                        <option value="plumbing">
                          🚰 Plumbing
                        </option>

                        <option value="cleaning">
                          🧹 Cleaning
                        </option>

                        <option value="electrical">
                          ⚡ Electrical
                        </option>

                        <option value="painting">
                          🎨 Painting
                        </option>

                        <option value="ac">
                          ❄️ AC Repair & Service
                        </option>

                        <option value="carpentry">
                          🪚 Carpentry
                        </option>

                        <option value="appliance">
                          🔧 Appliance Repair
                        </option>

                        <option value="pest">
                          🦟 Pest Control
                        </option>

                        <option value="water">
                          💧 RO / Water Purifier Service
                        </option>

                        <option value="locksmith">
                          🔐 Locksmith
                        </option>

                      </select>

                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                        ▼
                      </span>

                    </div>

                  </div>



                  {/* ==========================================
                      DATE + TIME
                  ========================================== */}

                  <div className="grid md:grid-cols-2 gap-5">

                    <div>

                      <label
                        htmlFor="date"
                        className="block text-sm font-bold text-gray-700 mb-2"
                      >
                        Preferred Date
                      </label>

                      <div className="relative">

                        <span className="absolute left-4 top-1/2 -translate-y-1/2">
                          📅
                        </span>

                        <input
                          id="date"
                          type="date"
                          required
                          className="w-full pl-11 pr-4 h-12 border border-gray-200 bg-gray-50 rounded-xl outline-none text-sm transition focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                        />

                      </div>

                    </div>


                    <div>

                      <label
                        htmlFor="time"
                        className="block text-sm font-bold text-gray-700 mb-2"
                      >
                        Preferred Time
                      </label>

                      <div className="relative">

                        <span className="absolute left-4 top-1/2 -translate-y-1/2">
                          🕐
                        </span>

                        <select
                          id="time"
                          required
                          className="w-full pl-11 pr-4 h-12 border border-gray-200 bg-gray-50 rounded-xl outline-none text-sm transition focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                        >

                          <option value="">
                            Select time
                          </option>

                          <option value="09:00">
                            9:00 AM
                          </option>

                          <option value="10:00">
                            10:00 AM
                          </option>

                          <option value="11:00">
                            11:00 AM
                          </option>

                          <option value="13:00">
                            1:00 PM
                          </option>

                          <option value="15:00">
                            3:00 PM
                          </option>

                          <option value="17:00">
                            5:00 PM
                          </option>

                          <option value="19:00">
                            7:00 PM
                          </option>

                        </select>

                      </div>

                    </div>

                  </div>



                  {/* ==========================================
                      ADDRESS
                  ========================================== */}

                  <div>

                    <label
                      htmlFor="address"
                      className="block text-sm font-bold text-gray-700 mb-2"
                    >
                      Service Address
                    </label>

                    <div className="relative">

                      <span className="absolute left-4 top-4">
                        📍
                      </span>

                      <textarea
                        id="address"
                        rows="4"
                        placeholder="Enter the complete address where the service is required..."
                        required
                        className="w-full pl-11 pr-4 py-3 border border-gray-200 bg-gray-50 rounded-xl outline-none text-sm resize-none transition focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                      ></textarea>

                    </div>

                  </div>



                  {/* ==========================================
                      ADDITIONAL NOTE
                  ========================================== */}

                  <div>

                    <label
                      htmlFor="note"
                      className="block text-sm font-bold text-gray-700 mb-2"
                    >
                      Additional Notes
                      <span className="font-normal text-gray-400 ml-1">
                        (Optional)
                      </span>
                    </label>

                    <textarea
                      id="note"
                      rows="3"
                      placeholder="Tell us anything the professional should know..."
                      className="w-full px-4 py-3 border border-gray-200 bg-gray-50 rounded-xl outline-none text-sm resize-none transition focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                    ></textarea>

                  </div>



                  {/* ==========================================
                      SUBMIT
                  ========================================== */}

                  <button
                    type="submit"
                    className="group w-full h-13 py-3.5 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold shadow-lg shadow-green-600/20 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
                  >

                    Confirm Booking

                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>

                  </button>


                  <p className="text-xs text-center text-gray-400">
                    By booking a service, you agree to our terms and conditions.
                  </p>

                </form>

              </div>

            </div>



            {/* =================================================
                BOOKING SUMMARY
            ================================================= */}

            <div className="lg:col-span-1">

              <div className="lg:sticky lg:top-6 space-y-5">


                {/* SUMMARY CARD */}

                <div className="bg-gray-900 rounded-3xl p-6 text-white shadow-xl">

                  <p className="text-green-400 text-xs font-bold uppercase tracking-wider">
                    Booking Summary
                  </p>

                  <h2 className="text-2xl font-extrabold mt-2">
                    Your service
                  </h2>


                  {selectedService ? (

                    <div className="mt-7">

                      <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-3xl">
                        {selectedService.icon}
                      </div>

                      <h3 className="text-xl font-bold mt-5">
                        {selectedService.name}
                      </h3>

                      <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">

                        <span className="text-sm text-gray-400">
                          Starting from
                        </span>

                        <span className="text-2xl font-extrabold text-green-400">
                          {selectedService.price}
                        </span>

                      </div>

                    </div>

                  ) : (

                    <div className="mt-7">

                      <img src={logo} alt="logo" className="h-15" />

                      <p className="text-gray-400 text-sm mt-5 leading-relaxed">
                        Select a service from the form and your booking
                        summary will appear here.
                      </p>

                    </div>

                  )}

                </div>



                {/* WHY BOOK WITH US */}

                <div className="bg-white border border-gray-200 rounded-3xl p-6">

                  <h3 className="font-extrabold text-gray-900">
                    Why book with Fixmate?
                  </h3>


                  <div className="mt-5 space-y-4">

                    <div className="flex items-center gap-3">

                      <div className="w-9 h-9 rounded-xl bg-green-100 flex items-center justify-center">
                        ✓
                      </div>

                      <p className="text-sm text-gray-600">
                        Trusted professionals
                      </p>

                    </div>


                    <div className="flex items-center gap-3">

                      <div className="w-9 h-9 rounded-xl bg-blue-100 flex items-center justify-center">
                        ⚡
                      </div>

                      <p className="text-sm text-gray-600">
                        Quick & easy booking
                      </p>

                    </div>


                    <div className="flex items-center gap-3">

                      <div className="w-9 h-9 rounded-xl bg-yellow-100 flex items-center justify-center">
                        ⭐
                      </div>

                      <p className="text-sm text-gray-600">
                        Quality service
                      </p>

                    </div>


                    <div className="flex items-center gap-3">

                      <div className="w-9 h-9 rounded-xl bg-purple-100 flex items-center justify-center">
                        🔐
                      </div>

                      <p className="text-sm text-gray-600">
                        Secure booking
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

      </div>

    </Layout>
  );
}

export default BookService;

