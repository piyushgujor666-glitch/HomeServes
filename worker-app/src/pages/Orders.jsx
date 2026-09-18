import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Layout from "../components/Layout";
import {
  Package,
  Snowflake,
  Wrench,
  Zap,
  Sparkles,
  UserRound,
  Phone,
  MapPin,
  CalendarDays,
  Clock,
  ChevronRight,
  CheckCircle2,
  XCircle,
  TrendingUp,
} from "lucide-react";

const Orders = () => {
  const [filter, setFilter] = useState("All");

  // Temporary dummy data
  const orders = [
    {
      id: "#HS1001",
      service: "AC Repair",
      customer: "Rahul Sharma",
      phone: "+91 98765 43210",
      location: "Delhi",
      date: "02 Sep 2026",
      time: "10:30 AM",
      amount: "₹1,200",
      status: "New",
      icon: Snowflake,
      iconBg: "bg-[#0E6B5C]/10",
      iconColor: "text-[#0E6B5C]",
    },
    {
      id: "#HS1002",
      service: "Plumbing Repair",
      customer: "Amit Kumar",
      phone: "+91 98765 12345",
      location: "Delhi",
      date: "02 Sep 2026",
      time: "1:00 PM",
      amount: "₹650",
      status: "Accepted",
      icon: Wrench,
      iconBg: "bg-[#E08A3C]/10",
      iconColor: "text-[#E08A3C]",
    },
    {
      id: "#HS1003",
      service: "Electrical Work",
      customer: "Priya Singh",
      phone: "+91 98765 67890",
      location: "Noida",
      date: "01 Sep 2026",
      time: "4:00 PM",
      amount: "₹800",
      status: "Completed",
      icon: Zap,
      iconBg: "bg-[#E08A3C]/10",
      iconColor: "text-[#E08A3C]",
    },
    {
      id: "#HS1004",
      service: "Home Cleaning",
      customer: "Neha Verma",
      phone: "+91 98765 11111",
      location: "Gurgaon",
      date: "31 Aug 2026",
      time: "11:00 AM",
      amount: "₹900",
      status: "Cancelled",
      icon: Sparkles,
      iconBg: "bg-red-50",
      iconColor: "text-red-500",
    },
  ];

  const filteredOrders =
    filter === "All"
      ? orders
      : orders.filter((order) => order.status === filter);

  const totalOrders = orders.length;
  const newOrders = orders.filter(
    (order) => order.status === "New"
  ).length;

  const activeOrders = orders.filter(
    (order) => order.status === "Accepted"
  ).length;

  const completedOrders = orders.filter(
    (order) => order.status === "Completed"
  ).length;

  const getStatusStyle = (status) => {
    switch (status) {
      case "New":
        return "bg-[#0E6B5C]/10 text-[#0E6B5C]";

      case "Accepted":
        return "bg-[#E08A3C]/10 text-[#B5661E]";

      case "Completed":
        return "bg-[#0E6B5C]/10 text-[#0E6B5C]";

      case "Cancelled":
        return "bg-red-50 text-red-600";

      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "New":
        return <Package size={13} />;

      case "Accepted":
        return <Clock size={13} />;

      case "Completed":
        return <CheckCircle2 size={13} />;

      case "Cancelled":
        return <XCircle size={13} />;

      default:
        return null;
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-[#FBFAF7] p-4 md:p-8">

        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium text-[#8A8A82]">
              Worker Portal
            </p>

            <h1 className="mt-1 text-3xl font-bold text-[#16302B]">
              Orders
            </h1>

            <p className="mt-1 text-[#6B6B62]">
              View and manage your customer service orders.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-sm ring-1 ring-black/5">
            <Package size={18} className="text-[#0E6B5C]" />

            <div>
              <p className="text-xs text-[#8A8A82]">
                Total Orders
              </p>

              <p className="text-sm font-bold text-[#16302B]">
                {totalOrders} orders
              </p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {/* Total */}
          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-[#8A8A82]">
                  Total Orders
                </p>

                <h2 className="mt-2 text-3xl font-bold text-[#16302B]">
                  {totalOrders}
                </h2>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0E6B5C]/10">
                <Package
                  size={20}
                  className="text-[#0E6B5C]"
                />
              </div>
            </div>

            <p className="mt-4 flex items-center gap-1 text-xs font-medium text-[#0E6B5C]">
              <TrendingUp size={13} />
              All service orders
            </p>
          </div>

          {/* New */}
          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-[#8A8A82]">
                  New Orders
                </p>

                <h2 className="mt-2 text-3xl font-bold text-[#16302B]">
                  {newOrders}
                </h2>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0E6B5C]/10">
                <Package
                  size={20}
                  className="text-[#0E6B5C]"
                />
              </div>
            </div>

            <p className="mt-4 text-xs font-medium text-[#0E6B5C]">
              Requires your attention
            </p>
          </div>

          {/* Active */}
          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-[#8A8A82]">
                  Active Orders
                </p>

                <h2 className="mt-2 text-3xl font-bold text-[#16302B]">
                  {activeOrders}
                </h2>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E08A3C]/10">
                <Clock
                  size={20}
                  className="text-[#E08A3C]"
                />
              </div>
            </div>

            <p className="mt-4 text-xs font-medium text-[#E08A3C]">
              Currently in progress
            </p>
          </div>

          {/* Completed */}
          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-[#8A8A82]">
                  Completed
                </p>

                <h2 className="mt-2 text-3xl font-bold text-[#16302B]">
                  {completedOrders}
                </h2>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0E6B5C]/10">
                <CheckCircle2
                  size={20}
                  className="text-[#0E6B5C]"
                />
              </div>
            </div>

            <p className="mt-4 text-xs font-medium text-[#0E6B5C]">
              Successfully completed
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-6 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5">
          <div className="mb-3">
            <h2 className="text-sm font-bold text-[#16302B]">
              Filter Orders
            </h2>

            <p className="mt-1 text-xs text-[#8A8A82]">
              Select an order status
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              "All",
              "New",
              "Accepted",
              "Completed",
              "Cancelled",
            ].map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                  filter === item
                    ? "bg-[#16302B] text-white shadow-sm"
                    : "bg-[#FBFAF7] text-[#6B6B62] ring-1 ring-black/5 hover:bg-[#F0EEE8]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Orders Header */}
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-[#16302B]">
              {filter === "All" ? "All Orders" : `${filter} Orders`}
            </h2>

            <p className="mt-1 text-sm text-[#8A8A82]">
              {filteredOrders.length} order
              {filteredOrders.length !== 1 ? "s" : ""} found
            </p>
          </div>
        </div>

        {/* Orders */}
        <div className="space-y-4">

          {filteredOrders.length === 0 ? (
            <div className="rounded-2xl bg-white p-10 text-center shadow-sm ring-1 ring-black/5">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-[#0E6B5C]/10">
                <Package
                  size={26}
                  className="text-[#0E6B5C]"
                />
              </div>

              <h3 className="mt-4 font-semibold text-[#16302B]">
                No orders found
              </h3>

              <p className="mt-1 text-sm text-[#8A8A82]">
                There are no orders in this category.
              </p>
            </div>
          ) : (
            filteredOrders.map((order) => {
              const Icon = order.icon;

              return (
                <div
                  key={order.id}
                  className="group rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex flex-col gap-5 p-5 lg:flex-row lg:items-center">

                    {/* Service Icon */}
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${order.iconBg}`}
                    >
                      <Icon
                        size={24}
                        className={order.iconColor}
                      />
                    </div>

                    {/* Order Information */}
                    <div className="flex-1">

                      <div className="flex flex-wrap items-center gap-3">
                        <h2 className="text-lg font-bold text-[#16302B]">
                          {order.service}
                        </h2>

                        <span className="rounded-md bg-[#FBFAF7] px-2 py-1 text-xs font-medium text-[#8A8A82]">
                          {order.id}
                        </span>
                      </div>

                      {/* Customer */}
                      <div className="mt-3 grid gap-2 text-sm text-[#6B6B62] sm:grid-cols-2">

                        <p className="flex items-center gap-2">
                          <UserRound
                            size={14}
                            className="text-[#0E6B5C]"
                          />
                          {order.customer}
                        </p>

                        <p className="flex items-center gap-2">
                          <Phone
                            size={14}
                            className="text-[#0E6B5C]"
                          />
                          {order.phone}
                        </p>

                        <p className="flex items-center gap-2">
                          <MapPin
                            size={14}
                            className="text-[#0E6B5C]"
                          />
                          {order.location}
                        </p>

                        <p className="flex items-center gap-2">
                          <CalendarDays
                            size={14}
                            className="text-[#0E6B5C]"
                          />
                          {order.date} • {order.time}
                        </p>

                      </div>
                    </div>

                    {/* Amount + Status */}
                    <div className="flex items-center justify-between gap-4 sm:justify-start lg:block lg:min-w-[110px] lg:text-right">

                      <div>
                        <p className="text-lg font-bold text-[#16302B]">
                          {order.amount}
                        </p>

                        <span
                          className={`mt-2 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${getStatusStyle(
                            order.status
                          )}`}
                        >
                          {getStatusIcon(order.status)}
                          {order.status}
                        </span>
                      </div>
                    </div>

                    {/* View Button */}
                    <NavLink
                      to={`/orders/${order.id.replace("#", "")}`}
                      className="flex items-center justify-center gap-1.5 rounded-lg bg-[#16302B] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0E6B5C]"
                    >
                      View Details
                      <ChevronRight size={16} />
                    </NavLink>

                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Orders;