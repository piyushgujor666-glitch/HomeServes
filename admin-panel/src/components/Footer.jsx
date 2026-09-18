import React from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#16302B] text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* HomeServe */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0E6B5C]">
                <ShieldCheck size={21} />
              </div>

              <h2 className="text-xl font-bold tracking-tight">
                HomeServe
              </h2>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-6 text-white/65">
              Home service management made simple. Manage customers,
              workers and orders from one place.
            </p>
          </div>

          {/* Admin Panel */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Admin Panel
            </h3>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <NavLink
                  to="/admin/dashboard"
                  className="text-white/60 transition hover:text-white"
                >
                  Dashboard
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/admin/users"
                  className="text-white/60 transition hover:text-white"
                >
                  Users
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/admin/workers"
                  className="text-white/60 transition hover:text-white"
                >
                  Workers
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/admin/orders"
                  className="text-white/60 transition hover:text-white"
                >
                  Orders
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/admin/services"
                  className="text-white/60 transition hover:text-white"
                >
                  Services
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>

            <div className="mt-4 space-y-4 text-sm text-white/60">

              <div className="flex items-center gap-3">
                <Mail size={17} className="text-[#E08A3C]" />
                <span>admin@homeserve.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={17} className="text-[#E08A3C]" />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={17} className="text-[#E08A3C]" />
                <span>India</span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">

          <p className="text-sm text-white/50">
            © 2026 HomeServe. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-sm text-white/45">
            <ShieldCheck size={15} />
            <span>Admin Panel</span>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;