import React from "react";
import { NavLink } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";
import logo from "../assets/FIX.jpg";

const adminLinks = [
  {
    to: "/admin/dashboard",
    label: "Dashboard",
  },
  {
    to: "/admin/users",
    label: "Users",
  },
  {
    to: "/admin/workers",
    label: "Workers",
  },
  {
    to: "/admin/order",
    label: "Orders",
  },
  {
    to: "/admin/services",
    label: "Services",
  },
  {
    to: "/admin/adminprofile",
    label: "Profile",
  },
];

const Footer = () => {
  return (
    <footer className="mt-12 hidden border-t border-[#E3E1DA] bg-[#FBFAF7] text-[#16302B] lg:block">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">

        {/* ================= MAIN FOOTER ================= */}
        <div className="grid grid-cols-1 gap-10 py-10 md:grid-cols-3">

          {/* ================= BRAND ================= */}
          <div>
            <div className="flex items-center gap-3">

              {/* Logo */}
              <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-[#E1E5E1] bg-white shadow-sm">
                <img
                  src={logo}
                  alt="FixMate"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Brand */}
              <div>
                <h2 className="text-xl font-extrabold tracking-tight">
                  Fix<span className="text-[#0E6B5C]">Mate</span>
                </h2>

                <p className="text-[10px] font-semibold uppercase tracking-wider text-[#89918D]">
                  Admin Panel
                </p>
              </div>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-6 text-[#6F7773]">
              Home service management made simple. Manage customers,
              workers, services and orders from one place.
            </p>

            {/* System Status */}
            <div className="mt-5 inline-flex items-center gap-2 rounded-lg border border-[#DDE9E5] bg-[#F3F9F7] px-3 py-2 text-xs font-medium text-[#0E6B5C]">
              <span className="h-2 w-2 rounded-full bg-[#0E6B5C]" />
              System operational
            </div>
          </div>

          {/* ================= ADMIN LINKS ================= */}
          <div>
            <h3 className="text-sm font-bold text-[#16302B]">
              Admin Panel
            </h3>

            <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3">
              {adminLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className="group flex items-center gap-1 text-sm text-[#6F7773] transition-all duration-200 hover:translate-x-0.5 hover:text-[#0E6B5C]"
                >
                  <span>{label}</span>

                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </NavLink>
              ))}
            </div>
          </div>

          {/* ================= CONTACT ================= */}
          <div>
            <h3 className="text-sm font-bold text-[#16302B]">
              Contact
            </h3>

            <div className="mt-4 space-y-4">

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#EAF4F1] text-[#0E6B5C]">
                  <Mail size={16} />
                </div>

                <div>
                  <p className="text-[11px] font-medium uppercase tracking-wide text-[#89918D]">
                    Email
                  </p>

                  <p className="text-sm font-medium text-[#4F5B56]">
                    admin@fixmate.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FFF3E8] text-[#E08A3C]">
                  <Phone size={16} />
                </div>

                <div>
                  <p className="text-[11px] font-medium uppercase tracking-wide text-[#89918D]">
                    Phone
                  </p>

                  <p className="text-sm font-medium text-[#4F5B56]">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#EAF4F1] text-[#0E6B5C]">
                  <MapPin size={16} />
                </div>

                <div>
                  <p className="text-[11px] font-medium uppercase tracking-wide text-[#89918D]">
                    Location
                  </p>

                  <p className="text-sm font-medium text-[#4F5B56]">
                    India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM FOOTER ================= */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-[#E3E1DA] py-5 sm:flex-row">

          <p className="text-xs text-[#89918D]">
            © 2026 FixMate. All rights reserved.
          </p>

          <div className="flex items-center gap-2 rounded-lg bg-[#F3F5F2] px-3 py-2 text-xs font-medium text-[#6F7773]">
            <ShieldCheck
              size={15}
              className="text-[#0E6B5C]"
            />

            <span>
              Secure Admin Panel
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;