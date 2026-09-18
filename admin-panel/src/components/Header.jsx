import React from "react";
import { NavLink } from "react-router-dom";
import {
  ShieldCheck,
  Bell,
  LayoutDashboard,
  ClipboardList,
  Wrench,
  Users,
  UserCog,
} from "lucide-react";

const Header = () => {
  const navClass = ({ isActive }) =>
    isActive
      ? "h-9 px-4 rounded-xl flex items-center gap-2 text-sm font-medium text-[#0E6B5C] bg-[#EAF4F1] border border-[#D5E9E4] shadow-sm"
      : "h-9 px-4 rounded-xl flex items-center gap-2 text-sm font-medium text-[#6F7773] hover:text-[#16302B] hover:bg-[#F4F5F2] transition";

  return (
    <header className="sticky top-0 z-50 bg-[#FBFAF7]/95 backdrop-blur-md border-b border-[#E3E1DA] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-[72px] flex items-center justify-between gap-4">

          {/* Logo */}
          <NavLink
            to="/admin/dashboard"
            className="flex items-center gap-3 shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-[#0E6B5C] flex items-center justify-center shadow-sm">
              <ShieldCheck size={21} className="text-white" />
            </div>

            <div>
              <h1 className="text-lg font-bold tracking-tight text-[#16302B]">
                HomeServe
              </h1>

              <p className="text-[11px] font-medium text-[#8A8A82]">
                Admin Panel
              </p>
            </div>
          </NavLink>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-1.5">

            <NavLink to="/admin/dashboard" className={navClass}>
              <LayoutDashboard size={16} />
              Dashboard
            </NavLink>

            <NavLink to="/admin/order" className={navClass}>
              <ClipboardList size={16} />
              Orders
            </NavLink>

            <NavLink to="/admin/services" className={navClass}>
              <Wrench size={16} />
              Services
            </NavLink>

            <NavLink to="/admin/users" className={navClass}>
              <Users size={16} />
              Users
            </NavLink>

            <NavLink to="/admin/workers" className={navClass}>
              <UserCog size={16} />
              Workers
            </NavLink>

          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">

            {/* Notification */}
            <button
              type="button"
              className="relative w-10 h-10 rounded-xl flex items-center justify-center text-[#68716D] hover:text-[#16302B] hover:bg-[#F1F2EF] transition"
            >
              <Bell size={19} />

              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#E08A3C] border-2 border-[#FBFAF7]" />
            </button>

            {/* Divider */}
            <div className="hidden sm:block h-8 w-px bg-[#E3E1DA]" />

            {/* Admin Profile */}
            <NavLink
              to="/admin/adminprofile"
              className="flex items-center gap-2.5 rounded-xl px-2 py-1.5 hover:bg-[#F4F5F2] transition"
            >
              <div className="w-9 h-9 rounded-full bg-[#16302B] flex items-center justify-center shadow-sm">
                <span className="text-white text-sm font-semibold">
                  A
                </span>
              </div>

              <div className="hidden xl:block">
                <p className="text-sm font-semibold text-[#16302B]">
                  Admin
                </p>

                <p className="text-[11px] text-[#8A8A82]">
                  Administrator
                </p>
              </div>
            </NavLink>

          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;