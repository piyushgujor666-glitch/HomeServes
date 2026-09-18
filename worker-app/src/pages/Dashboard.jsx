import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Layout from "../components/Layout";
import {
  Package,
  CheckCircle2,
  Wallet,
  Star,
  Wrench,
  Snowflake,
  Zap,
  MapPin,
  TrendingUp,
  Clock,
  CalendarDays,
  UserRound,
  ChevronRight,
  Phone,
  Navigation,
} from "lucide-react";

const Dashboard = () => {
  const [isAvailable, setIsAvailable] = useState(true);

  const stats = [
    {
      title: "New Orders",
      value: "5",
      subtitle: "2 new today",
      icon: Package,
      iconBg: "bg-[#0E6B5C]/10",
      iconColor: "text-[#0E6B5C]",
      subtitleColor: "text-[#0E6B5C]",
    },
    {
      title: "Completed Jobs",
      value: "126",
      subtitle: "+8 this month",
      icon: CheckCircle2,
      iconBg: "bg-[#0E6B5C]/10",
      iconColor: "text-[#0E6B5C]",
      subtitleColor: "text-[#0E6B5C]",
    },
    {
      title: "This Month",
      value: "₹18,500",
      subtitle: "+12.5% from last month",
      icon: Wallet,
      iconBg: "bg-[#E08A3C]/10",
      iconColor: "text-[#E08A3C]",
      subtitleColor: "text-[#E08A3C]",
    },
    {
      title: "Rating",
      value: "4.8",
      subtitle: "From 98 reviews",
      icon: Star,
      iconBg: "bg-[#E08A3C]/10",
      iconColor: "text-[#E08A3C]",
      subtitleColor: "text-[#E08A3C]",
    },
  ];

  const orders = [
    {
      service: "Plumbing Repair",
      customer: "Rahul Sharma",
      initials: "RS",
      location: "Delhi",
      time: "Today, 10:30 AM",
      amount: "₹650",
      status: "Pending",
      icon: Wrench,
      iconColor: "text-[#0E6B5C]",
      iconBg: "bg-[#0E6B5C]/10",
      statusBg: "bg-[#E08A3C]/10",
      statusColor: "text-[#B5661E]",
      barColor: "bg-[#E08A3C]",
    },
    {
      service: "AC Repair",
      customer: "Amit Kumar",
      initials: "AK",
      location: "Delhi",
      time: "Yesterday, 3:00 PM",
      amount: "₹1,200",
      status: "Completed",
      icon: Snowflake,
      iconColor: "text-[#0E6B5C]",
      iconBg: "bg-[#0E6B5C]/10",
      statusBg: "bg-[#0E6B5C]/10",
      statusColor: "text-[#0E6B5C]",
      barColor: "bg-[#0E6B5C]",
    },
    {
      service: "Electrical Work",
      customer: "Priya Singh",
      initials: "PS",
      location: "Delhi",
      time: "Yesterday, 11:00 AM",
      amount: "₹800",
      status: "Completed",
      icon: Zap,
      iconColor: "text-[#E08A3C]",
      iconBg: "bg-[#E08A3C]/10",
      statusBg: "bg-[#0E6B5C]/10",
      statusColor: "text-[#0E6B5C]",
      barColor: "bg-[#0E6B5C]",
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-[#FBFAF7] p-4 md:p-8">

        {/* Header */}
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-medium text-[#8A8A82]">
              Welcome back 👋
            </p>

            <h1 className="mt-1 text-3xl font-bold text-[#16302B]">
              Worker Name
            </h1>

            <p className="mt-1 text-[#6B6B62]">
              Here's what's happening with your work today.
            </p>
          </div>

          {/* Availability */}
          <button
            onClick={() => setIsAvailable(!isAvailable)}
            className="flex w-fit items-center gap-3 rounded-xl bg-white px-4 py-3 text-left shadow-sm ring-1 ring-black/5 transition hover:shadow-md"
          >
            <span className="relative flex h-3 w-3">
              {isAvailable && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0E6B5C] opacity-50" />
              )}

              <span
                className={`relative inline-flex h-3 w-3 rounded-full ${
                  isAvailable ? "bg-[#0E6B5C]" : "bg-gray-400"
                }`}
              />
            </span>

            <div>
              <p className="text-sm font-semibold text-[#16302B]">
                {isAvailable ? "You're Available" : "You're Offline"}
              </p>

              <p className="text-xs text-[#8A8A82]">
                {isAvailable
                  ? "Ready to receive orders"
                  : "You won't receive new orders"}
              </p>
            </div>
          </button>
        </div>

        {/* Statistics */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-[#8A8A82]">
                      {stat.title}
                    </p>

                    <h2 className="mt-2 text-3xl font-bold text-[#16302B]">
                      {stat.value}
                    </h2>
                  </div>

                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${stat.iconBg}`}
                  >
                    <Icon size={20} className={stat.iconColor} />
                  </div>
                </div>

                <p
                  className={`mt-4 flex items-center gap-1 text-xs font-medium ${stat.subtitleColor}`}
                >
                  {stat.title !== "Rating" && <TrendingUp size={13} />}
                  {stat.subtitle}
                </p>
              </div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="mb-4 text-lg font-bold text-[#16302B]">
            Quick Actions
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <NavLink
              to="/orders"
              className="group flex items-center justify-between rounded-xl bg-white p-4 shadow-sm ring-1 ring-black/5 transition hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-[#0E6B5C]/10 p-2.5">
                  <Package size={19} className="text-[#0E6B5C]" />
                </div>

                <span className="text-sm font-semibold text-[#16302B]">
                  View Orders
                </span>
              </div>

              <ChevronRight
                size={18}
                className="text-[#8A8A82] transition group-hover:translate-x-1"
              />
            </NavLink>

            <NavLink
              to="/profile"
              className="group flex items-center justify-between rounded-xl bg-white p-4 shadow-sm ring-1 ring-black/5 transition hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-[#0E6B5C]/10 p-2.5">
                  <UserRound size={19} className="text-[#0E6B5C]" />
                </div>

                <span className="text-sm font-semibold text-[#16302B]">
                  Edit Profile
                </span>
              </div>

              <ChevronRight
                size={18}
                className="text-[#8A8A82] transition group-hover:translate-x-1"
              />
            </NavLink>

            <button className="group flex items-center justify-between rounded-xl bg-white p-4 text-left shadow-sm ring-1 ring-black/5 transition hover:shadow-md">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-[#E08A3C]/10 p-2.5">
                  <Wallet size={19} className="text-[#E08A3C]" />
                </div>

                <span className="text-sm font-semibold text-[#16302B]">
                  View Earnings
                </span>
              </div>

              <ChevronRight
                size={18}
                className="text-[#8A8A82] transition group-hover:translate-x-1"
              />
            </button>

            <button className="group flex items-center justify-between rounded-xl bg-white p-4 text-left shadow-sm ring-1 ring-black/5 transition hover:shadow-md">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-[#E08A3C]/10 p-2.5">
                  <CalendarDays size={19} className="text-[#E08A3C]" />
                </div>

                <span className="text-sm font-semibold text-[#16302B]">
                  My Schedule
                </span>
              </div>

              <ChevronRight
                size={18}
                className="text-[#8A8A82] transition group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>

        {/* Upcoming Job */}
        <div className="mb-8 rounded-2xl bg-[#16302B] p-5 text-white shadow-sm md:p-6">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <Clock size={17} />
                <span className="text-sm font-medium text-white/70">
                  Upcoming Job
                </span>
              </div>

              <h2 className="text-xl font-bold">
                Plumbing Repair
              </h2>

              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/70">
                <span className="flex items-center gap-1.5">
                  <UserRound size={14} />
                  Rahul Sharma
                </span>

                <span className="flex items-center gap-1.5">
                  <MapPin size={14} />
                  Delhi
                </span>

                <span className="flex items-center gap-1.5">
                  <Clock size={14} />
                  Today, 10:30 AM
                </span>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-[#16302B] transition hover:bg-gray-100">
                <Navigation size={16} />
                Navigate
              </button>

              <button className="flex items-center gap-2 rounded-lg bg-[#E08A3C] px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90">
                <Phone size={16} />
                Call
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid gap-6 lg:grid-cols-3">

          {/* Recent Orders */}
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 lg:col-span-2">

            <div className="flex items-center justify-between border-b border-[#F0EEE8] p-5">
              <div>
                <h2 className="text-lg font-bold text-[#16302B]">
                  Recent Orders
                </h2>

                <p className="mt-1 text-sm text-[#8A8A82]">
                  Your latest service requests
                </p>
              </div>

              <NavLink
                to="/orders"
                className="flex items-center gap-1 text-sm font-semibold text-[#0E6B5C] hover:underline"
              >
                View all
                <ChevronRight size={15} />
              </NavLink>
            </div>

            {orders.map((order, index) => {
              const Icon = order.icon;

              return (
                <NavLink
                  to="/orders"
                  key={order.service}
                  className={`group flex flex-col gap-4 p-5 transition hover:bg-[#FBFAF7] sm:flex-row sm:items-center ${
                    index !== orders.length - 1
                      ? "border-b border-[#F0EEE8]"
                      : ""
                  }`}
                >
                  <span
                    className={`hidden w-1 self-stretch rounded-full sm:block ${order.barColor}`}
                  />

                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${order.iconBg}`}
                  >
                    <Icon size={18} className={order.iconColor} />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold text-[#16302B]">
                      {order.service}
                    </h3>

                    <div className="mt-1 flex items-center gap-2">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#16302B] text-[9px] font-bold text-white">
                        {order.initials}
                      </span>

                      <p className="text-sm text-[#6B6B62]">
                        {order.customer}
                      </p>
                    </div>

                    <p className="mt-1 flex items-center gap-1 text-xs text-[#A6A69C]">
                      <MapPin size={11} />
                      {order.location} • {order.time}
                    </p>
                  </div>

                  <div className="flex items-center justify-between sm:block sm:text-right">
                    <div>
                      <p className="font-semibold text-[#16302B]">
                        {order.amount}
                      </p>

                      <span
                        className={`mt-1 inline-block rounded-full px-3 py-1 text-xs font-medium ${order.statusBg} ${order.statusColor}`}
                      >
                        {order.status}
                      </span>
                    </div>

                    <ChevronRight
                      size={18}
                      className="text-[#A6A69C] transition group-hover:translate-x-1 sm:hidden"
                    />
                  </div>
                </NavLink>
              );
            })}
          </div>

          {/* Profile Completion */}
          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
            <h2 className="text-lg font-bold text-[#16302B]">
              Profile Completion
            </h2>

            <p className="mt-1 text-sm text-[#8A8A82]">
              Complete your profile to receive more orders.
            </p>

            {/* Progress */}
            <div className="mt-6">
              <div className="mb-2 flex justify-between text-sm">
                <span className="font-medium text-[#16302B]">
                  60% Complete
                </span>

                <span className="text-[#8A8A82]">
                  60%
                </span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-[#EAE7E1]">
                <div className="h-full w-[60%] rounded-full bg-[#0E6B5C]" />
              </div>
            </div>

            {/* Checklist */}
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0E6B5C] text-xs text-white">
                  ✓
                </span>

                <span className="text-sm text-[#3F4844]">
                  Basic information
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0E6B5C] text-xs text-white">
                  ✓
                </span>

                <span className="text-sm text-[#3F4844]">
                  Profile photo
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="h-5 w-5 rounded-full border-2 border-[#E08A3C]" />

                <span className="text-sm text-[#3F4844]">
                  KYC verification
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="h-5 w-5 rounded-full border-2 border-[#E08A3C]" />

                <span className="text-sm text-[#3F4844]">
                  Experience details
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="h-5 w-5 rounded-full border-2 border-[#E08A3C]" />

                <span className="text-sm text-[#3F4844]">
                  Certificates
                </span>
              </div>
            </div>

            <NavLink
              to="/profile"
              className="mt-6 block rounded-lg bg-[#16302B] px-5 py-3 text-center text-sm font-medium text-white transition hover:bg-[#0E6B5C]"
            >
              Complete Profile
            </NavLink>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;