import React from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Wrench,
  Sparkles,
  Zap,
  Snowflake,
  Paintbrush,
  Hammer,
  Plus,
  Pencil,
  Trash2,
  CheckCircle2,
  XCircle,
  CalendarCheck,
  Layers,
} from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen bg-[#FBFAF7] p-4 sm:p-6 lg:p-8">

      {/* Page Header */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

        <div>
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-[#16302B] flex items-center justify-center shadow-sm">
              <Layers className="w-5 h-5 text-white" />
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-[#16302B]">
              Services
            </h1>
          </div>

          <p className="mt-2 text-sm text-[#8A8A82]">
            Manage all HomeServe services.
          </p>
        </div>

        <NavLink
          className="inline-flex items-center justify-center gap-2
          px-5 py-3 bg-[#0E6B5C] text-white rounded-xl
          font-semibold shadow-sm
          hover:bg-[#0B5A4D] hover:shadow-md
          transition-all"
        >
          <Plus className="w-5 h-5" />
          Add Service
        </NavLink>

      </div>


      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">

        {/* Total Services */}
        <div className="bg-white border border-[#E3E1DA] rounded-2xl p-5 shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm font-medium text-[#8A8A82]">
                Total Services
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#16302B]">
                6
              </h2>
            </div>

            <div className="w-11 h-11 rounded-xl bg-[#16302B]/10 flex items-center justify-center">
              <Layers className="w-5 h-5 text-[#16302B]" />
            </div>

          </div>
        </div>


        {/* Active Services */}
        <div className="bg-white border border-[#E3E1DA] rounded-2xl p-5 shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm font-medium text-[#8A8A82]">
                Active Services
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#0E6B5C]">
                5
              </h2>
            </div>

            <div className="w-11 h-11 rounded-xl bg-[#0E6B5C]/10 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-[#0E6B5C]" />
            </div>

          </div>
        </div>


        {/* Inactive Services */}
        <div className="bg-white border border-[#E3E1DA] rounded-2xl p-5 shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm font-medium text-[#8A8A82]">
                Inactive Services
              </p>

              <h2 className="mt-2 text-3xl font-bold text-red-600">
                1
              </h2>
            </div>

            <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center">
              <XCircle className="w-5 h-5 text-red-600" />
            </div>

          </div>
        </div>


        {/* Total Bookings */}
        <div className="bg-white border border-[#E3E1DA] rounded-2xl p-5 shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm font-medium text-[#8A8A82]">
                Total Bookings
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#E08A3C]">
                2,845
              </h2>
            </div>

            <div className="w-11 h-11 rounded-xl bg-[#E08A3C]/10 flex items-center justify-center">
              <CalendarCheck className="w-5 h-5 text-[#E08A3C]" />
            </div>

          </div>
        </div>

      </div>


      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">


        {/* Plumbing */}
        <div className="bg-white border border-[#E3E1DA] rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">

          <div className="h-40 bg-[#0E6B5C]/10 flex items-center justify-center">
            <div className="w-20 h-20 rounded-2xl bg-white shadow-sm flex items-center justify-center">
              <Wrench className="w-10 h-10 text-[#0E6B5C]" />
            </div>
          </div>

          <div className="p-6">

            <div className="flex items-center justify-between gap-3">
              <h2 className="text-xl font-bold text-[#16302B]">
                Plumbing
              </h2>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-[#0E6B5C]/10 text-[#0E6B5C] rounded-full">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Active
              </span>
            </div>

            <p className="mt-3 text-sm leading-6 text-[#8A8A82]">
              Professional plumbing repair and maintenance services.
            </p>

            <div className="mt-5 flex items-center justify-between text-sm border-t border-[#EEECE5] pt-4">
              <span className="text-[#8A8A82]">
                Bookings
              </span>

              <span className="font-bold text-[#16302B]">
                624
              </span>
            </div>

            <div className="mt-5 flex gap-3">

              <NavLink className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-[#E3E1DA] rounded-xl text-sm font-semibold text-[#16302B] hover:bg-[#FBFAF7] transition">
                <Pencil className="w-4 h-4" />
                Edit
              </NavLink>

              <NavLink className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-red-600 border border-red-200 rounded-xl text-sm font-semibold hover:bg-red-50 transition">
                <Trash2 className="w-4 h-4" />
                Delete
              </NavLink>

            </div>

          </div>
        </div>


        {/* Cleaning */}
        <div className="bg-white border border-[#E3E1DA] rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">

          <div className="h-40 bg-[#0E6B5C]/10 flex items-center justify-center">
            <div className="w-20 h-20 rounded-2xl bg-white shadow-sm flex items-center justify-center">
              <Sparkles className="w-10 h-10 text-[#0E6B5C]" />
            </div>
          </div>

          <div className="p-6">

            <div className="flex items-center justify-between gap-3">
              <h2 className="text-xl font-bold text-[#16302B]">
                Cleaning
              </h2>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-[#0E6B5C]/10 text-[#0E6B5C] rounded-full">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Active
              </span>
            </div>

            <p className="mt-3 text-sm leading-6 text-[#8A8A82]">
              Home and office cleaning services by professionals.
            </p>

            <div className="mt-5 flex items-center justify-between text-sm border-t border-[#EEECE5] pt-4">
              <span className="text-[#8A8A82]">
                Bookings
              </span>

              <span className="font-bold text-[#16302B]">
                518
              </span>
            </div>

            <div className="mt-5 flex gap-3">

              <NavLink className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-[#E3E1DA] rounded-xl text-sm font-semibold text-[#16302B] hover:bg-[#FBFAF7] transition">
                <Pencil className="w-4 h-4" />
                Edit
              </NavLink>

              <NavLink className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-red-600 border border-red-200 rounded-xl text-sm font-semibold hover:bg-red-50 transition">
                <Trash2 className="w-4 h-4" />
                Delete
              </NavLink>

            </div>

          </div>
        </div>


        {/* Electrical */}
        <div className="bg-white border border-[#E3E1DA] rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">

          <div className="h-40 bg-[#E08A3C]/10 flex items-center justify-center">
            <div className="w-20 h-20 rounded-2xl bg-white shadow-sm flex items-center justify-center">
              <Zap className="w-10 h-10 text-[#E08A3C]" />
            </div>
          </div>

          <div className="p-6">

            <div className="flex items-center justify-between gap-3">
              <h2 className="text-xl font-bold text-[#16302B]">
                Electrical
              </h2>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-[#0E6B5C]/10 text-[#0E6B5C] rounded-full">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Active
              </span>
            </div>

            <p className="mt-3 text-sm leading-6 text-[#8A8A82]">
              Electrical installation, repair and maintenance.
            </p>

            <div className="mt-5 flex items-center justify-between text-sm border-t border-[#EEECE5] pt-4">
              <span className="text-[#8A8A82]">
                Bookings
              </span>

              <span className="font-bold text-[#16302B]">
                436
              </span>
            </div>

            <div className="mt-5 flex gap-3">

              <NavLink className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-[#E3E1DA] rounded-xl text-sm font-semibold text-[#16302B] hover:bg-[#FBFAF7] transition">
                <Pencil className="w-4 h-4" />
                Edit
              </NavLink>

              <NavLink className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-red-600 border border-red-200 rounded-xl text-sm font-semibold hover:bg-red-50 transition">
                <Trash2 className="w-4 h-4" />
                Delete
              </NavLink>

            </div>

          </div>
        </div>


        {/* AC Repair */}
        <div className="bg-white border border-[#E3E1DA] rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">

          <div className="h-40 bg-[#0E6B5C]/10 flex items-center justify-center">
            <div className="w-20 h-20 rounded-2xl bg-white shadow-sm flex items-center justify-center">
              <Snowflake className="w-10 h-10 text-[#0E6B5C]" />
            </div>
          </div>

          <div className="p-6">

            <div className="flex items-center justify-between gap-3">
              <h2 className="text-xl font-bold text-[#16302B]">
                AC Repair
              </h2>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-[#0E6B5C]/10 text-[#0E6B5C] rounded-full">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Active
              </span>
            </div>

            <p className="mt-3 text-sm leading-6 text-[#8A8A82]">
              AC servicing, repair and installation services.
            </p>

            <div className="mt-5 flex items-center justify-between text-sm border-t border-[#EEECE5] pt-4">
              <span className="text-[#8A8A82]">
                Bookings
              </span>

              <span className="font-bold text-[#16302B]">
                391
              </span>
            </div>

            <div className="mt-5 flex gap-3">

              <NavLink className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-[#E3E1DA] rounded-xl text-sm font-semibold text-[#16302B] hover:bg-[#FBFAF7] transition">
                <Pencil className="w-4 h-4" />
                Edit
              </NavLink>

              <NavLink className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-red-600 border border-red-200 rounded-xl text-sm font-semibold hover:bg-red-50 transition">
                <Trash2 className="w-4 h-4" />
                Delete
              </NavLink>

            </div>

          </div>
        </div>


        {/* Painting */}
        <div className="bg-white border border-[#E3E1DA] rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">

          <div className="h-40 bg-[#E08A3C]/10 flex items-center justify-center">
            <div className="w-20 h-20 rounded-2xl bg-white shadow-sm flex items-center justify-center">
              <Paintbrush className="w-10 h-10 text-[#E08A3C]" />
            </div>
          </div>

          <div className="p-6">

            <div className="flex items-center justify-between gap-3">
              <h2 className="text-xl font-bold text-[#16302B]">
                Painting
              </h2>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-[#0E6B5C]/10 text-[#0E6B5C] rounded-full">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Active
              </span>
            </div>

            <p className="mt-3 text-sm leading-6 text-[#8A8A82]">
              Interior and exterior painting services.
            </p>

            <div className="mt-5 flex items-center justify-between text-sm border-t border-[#EEECE5] pt-4">
              <span className="text-[#8A8A82]">
                Bookings
              </span>

              <span className="font-bold text-[#16302B]">
                284
              </span>
            </div>

            <div className="mt-5 flex gap-3">

              <NavLink className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-[#E3E1DA] rounded-xl text-sm font-semibold text-[#16302B] hover:bg-[#FBFAF7] transition">
                <Pencil className="w-4 h-4" />
                Edit
              </NavLink>

              <NavLink className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-red-600 border border-red-200 rounded-xl text-sm font-semibold hover:bg-red-50 transition">
                <Trash2 className="w-4 h-4" />
                Delete
              </NavLink>

            </div>

          </div>
        </div>


        {/* Appliance Repair */}
        <div className="bg-white border border-[#E3E1DA] rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">

          <div className="h-40 bg-[#E08A3C]/10 flex items-center justify-center">
            <div className="w-20 h-20 rounded-2xl bg-white shadow-sm flex items-center justify-center">
              <Hammer className="w-10 h-10 text-[#E08A3C]" />
            </div>
          </div>

          <div className="p-6">

            <div className="flex items-center justify-between gap-3">
              <h2 className="text-xl font-bold text-[#16302B]">
                Appliance Repair
              </h2>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-red-50 text-red-600 rounded-full">
                <XCircle className="w-3.5 h-3.5" />
                Inactive
              </span>
            </div>

            <p className="mt-3 text-sm leading-6 text-[#8A8A82]">
              Repair and maintenance for home appliances.
            </p>

            <div className="mt-5 flex items-center justify-between text-sm border-t border-[#EEECE5] pt-4">
              <span className="text-[#8A8A82]">
                Bookings
              </span>

              <span className="font-bold text-[#16302B]">
                592
              </span>
            </div>

            <div className="mt-5 flex gap-3">

              <NavLink className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-[#E3E1DA] rounded-xl text-sm font-semibold text-[#16302B] hover:bg-[#FBFAF7] transition">
                <Pencil className="w-4 h-4" />
                Edit
              </NavLink>

              <NavLink className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-red-600 border border-red-200 rounded-xl text-sm font-semibold hover:bg-red-50 transition">
                <Trash2 className="w-4 h-4" />
                Delete
              </NavLink>

            </div>

          </div>
        </div>

      </div>

    </div>
  );
};

export default Services;