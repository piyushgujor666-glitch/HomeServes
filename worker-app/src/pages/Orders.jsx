import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Layout from "../components/Layout";

const Orders = () => {
  const [filter, setFilter] = useState("All");

  // Temporary dummy data
  const orders = [
    {
      id: "#HS1001",
      service: "AC Repair",
      icon: "❄️",
      customer: "Rahul Sharma",
      phone: "+91 98765 43210",
      location: "Delhi",
      date: "02 Sep 2026",
      time: "10:30 AM",
      amount: "₹1,200",
      status: "New",
    },
    {
      id: "#HS1002",
      service: "Plumbing Repair",
      icon: "🔧",
      customer: "Amit Kumar",
      phone: "+91 98765 12345",
      location: "Delhi",
      date: "02 Sep 2026",
      time: "1:00 PM",
      amount: "₹650",
      status: "Accepted",
    },
    {
      id: "#HS1003",
      service: "Electrical Work",
      icon: "⚡",
      customer: "Priya Singh",
      phone: "+91 98765 67890",
      location: "Noida",
      date: "01 Sep 2026",
      time: "4:00 PM",
      amount: "₹800",
      status: "Completed",
    },
    {
      id: "#HS1004",
      service: "Home Cleaning",
      icon: "🧹",
      customer: "Neha Verma",
      phone: "+91 98765 11111",
      location: "Gurgaon",
      date: "31 Aug 2026",
      time: "11:00 AM",
      amount: "₹900",
      status: "Cancelled",
    },
  ];

  const filteredOrders =
    filter === "All"
      ? orders
      : orders.filter((order) => order.status === filter);

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 p-6 md:p-8">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Orders
          </h1>

          <p className="mt-1 text-gray-500">
            View and manage your customer service orders.
          </p>
        </div>

        {/* Statistics */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">
              Total Orders
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              4
            </h2>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">
              New Orders
            </p>

            <h2 className="mt-2 text-3xl font-bold text-blue-600">
              1
            </h2>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">
              Active Orders
            </p>

            <h2 className="mt-2 text-3xl font-bold text-yellow-600">
              1
            </h2>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">
              Completed
            </p>

            <h2 className="mt-2 text-3xl font-bold text-green-600">
              1
            </h2>
          </div>

        </div>

        {/* Filters */}
        <div className="mb-6 flex flex-wrap gap-2">

          {["All", "New", "Accepted", "Completed", "Cancelled"].map(
            (item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                  filter === item
                    ? "bg-black text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {item}
              </button>
            )
          )}

        </div>

        {/* Orders */}
        <div className="space-y-4">

          {filteredOrders.length === 0 ? (
            <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
              <div className="text-4xl">📦</div>

              <h3 className="mt-3 font-semibold text-gray-900">
                No orders found
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                There are no orders in this category.
              </p>
            </div>
          ) : (
            filteredOrders.map((order) => (
              <div
                key={order.id}
                className="rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center">

                  {/* Service Icon */}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-2xl">
                    {order.icon}
                  </div>

                  {/* Order Information */}
                  <div className="flex-1">

                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="text-lg font-bold text-gray-900">
                        {order.service}
                      </h2>

                      <span className="text-sm text-gray-400">
                        {order.id}
                      </span>
                    </div>

                    <div className="mt-2 grid gap-1 text-sm text-gray-500 sm:grid-cols-2">

                      <p>
                        👤 {order.customer}
                      </p>

                      <p>
                        📞 {order.phone}
                      </p>

                      <p>
                        📍 {order.location}
                      </p>

                      <p>
                        📅 {order.date} • {order.time}
                      </p>

                    </div>
                  </div>

                  {/* Amount + Status */}
                  <div className="lg:text-right">

                    <p className="text-lg font-bold text-gray-900">
                      {order.amount}
                    </p>

                    <span
                      className={`mt-2 inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                        order.status === "New"
                          ? "bg-blue-50 text-blue-700"
                          : order.status === "Accepted"
                          ? "bg-yellow-50 text-yellow-700"
                          : order.status === "Completed"
                          ? "bg-green-50 text-green-700"
                          : "bg-red-50 text-red-700"
                      }`}
                    >
                      {order.status}
                    </span>

                  </div>

                  {/* View Button */}
                  <NavLink
                    to={`/orders/${order.id.replace("#", "")}`}
                    className="rounded-lg border border-gray-300 px-5 py-2.5 text-center text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
                  >
                    View Details
                  </NavLink>

                </div>
              </div>
            ))
          )}

        </div>

      </div>
    </Layout>
  );
};

export default Orders;