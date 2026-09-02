import React from "react";
import { NavLink } from "react-router-dom";
import Layout from "../../Components/Layout.jsx";

import plumbing from "../../assets/Plumber.png";
import cleaning from "../../assets/cleaning.png";
import electrical from "../../assets/electrician.png";
import repair from "../../assets/Painting.png";
import Acrepair from "../../assets/Acrepair.png";
import Crpantry from "../../assets/Crpantry.png";
import repairappliance from "../../assets/repairappliance.png";
import PestControl from "../../assets/PestControl.png";
import WaterPurifierService from "../../assets/WaterPurifierService.png";
import Locksmith from "../../assets/Locksmith.png";

function Service() {
  const services = [
    {
      id: 1,
      title: "Plumbing",
      description: "Professional plumbing services for leaks, taps and pipes.",
      price: "₹299",
      image: plumbing,
    },
    {
      id: 2,
      title: "Cleaning",
      description: "Reliable cleaning services to keep your home fresh.",
      price: "₹399",
      image: cleaning,
    },
    {
      id: 3,
      title: "Electrical",
      description: "Safe electrical repair and installation services.",
      price: "₹349",
      image: electrical,
    },
    {
      id: 4,
      title: "Painting",
      description: "Get Help of your home Add Best Colour.",
      price: "₹299",
      image: repair,
    },
    {
      id:5,
      title: "AC Repair & Service",
      description: "Reliable AC repair, servicing, installation, and maintenance to keep your home cool and comfortable.",
      price:"₹599",
      image: Acrepair,
    },
    {
      id:6,
      title: "Carpentry",
      description: "Professional carpentry services for furniture repair, door and cabinet fixes, shelves, and custom woodwork at your home.",
      price:"₹899",
      image: Crpantry,
    },
    {
      id:7,
      title: "Appliance Repair",
      description: "Reliable repair and maintenance services for refrigerators, washing machines, microwaves, and other home appliances.",
      price:"₹499",
      image: repairappliance,
    },
    {
      id:8,
      title: "Pest Control",
      description: "Effective pest control services to protect your home from cockroaches, ants, termites, mosquitoes, and other unwanted pests.",
      price:"₹399",
      image: PestControl,
    },
    {
      id:9,
      title: "RO/Water Purifier Service",
      description: "Professional RO and water purifier servicing, filter replacement, repair, and maintenance to ensure clean and safe drinking water.",
      price:"₹699",
      image: WaterPurifierService,
    },
    {
      id:10,
      title: "Locksmith",
      description: "Professional locksmith services for lock repair, replacement, key duplication, and secure door access at your home.",
      price:"₹199",
      image: Locksmith,
    },
  ];

  return (
    <Layout>

      {/* SERVICE HERO */}

      <section className="max-w-7xl mx-auto px-6 py-10">

        <div
  className="relative h-[420px] rounded-3xl overflow-hidden bg-cover bg-center bg-green-700"
  // style={{ backgroundImage: `url(${serviceBg})` }}
>
  
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Content */}
  <div className="relative z-10 h-full flex items-center">

    <div className="px-8 md:px-14 text-white max-w-2xl">

      <p className="text-green-300 font-semibold">
        HOMESERVE SERVICES
      </p>

      <h1 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
        Professional services
        <br />
        for your home.
      </h1>

      <p className="mt-5 text-lg text-gray-200">
        From plumbing to cleaning and electrical work,
        find trusted professionals for your home.
      </p>

    </div>

  </div>

</div>

      </section>


      {/* SERVICES */}

      <section className="max-w-7xl mx-auto px-6 py-8">

        <div className="mb-8">

          <h2 className="text-3xl font-bold text-gray-800">
            Choose a Service
          </h2>

          <p className="text-gray-500 mt-2">
            Select the service you need.
          </p>

        </div>


        {/* FOUR CARDS */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {services.map((service) => (

            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >

              {/* CARD IMAGE */}

              <div className="h-52 overflow-hidden">

                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />

              </div>


              {/* CARD CONTENT */}

              <div className="p-6">

                <h3 className="text-xl font-bold text-gray-800">
                  {service.title}
                </h3>

                <p className="text-gray-500 text-sm mt-3 leading-6">
                  {service.description}
                </p>

                <p className="text-green-600 font-bold mt-4">
                  Starting from {service.price}
                </p>

                <NavLink
                  to="/book-service"
                  className="block text-center mt-5 bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition"
                >
                  Book Now
                </NavLink>

              </div>

            </div>

          ))}

        </div>

      </section>

    </Layout>
  );
}

export default Service;