import { Bell, CalendarDays, Home, Settings, Users, Wrench, UserCog } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/FIX.jpg";

const navItems = [
  {
    to: "/admin/dashboard",
    label: "Dashboard",
    icon: Home,
  },
  {
    to: "/admin/order",
    label: "Orders",
    icon: CalendarDays,
  },
  {
    to: "/admin/services",
    label: "Services",
    icon: Wrench,
  },
  {
    to: "/admin/users",
    label: "Users",
    icon: Users,
  },
  {
    to: "/admin/workers",
    label: "Workers",
    icon: UserCog,
  },
];

const navClass = ({ isActive }) =>
  `flex h-9 items-center rounded-lg px-3 text-sm font-medium transition-all duration-200 ${
    isActive
      ? "bg-[#EAF4F1] text-[#0E6B5C]"
      : "text-[#6F7773] hover:bg-[#F3F5F2] hover:text-[#16302B]"
  }`;

export default function Header() {
  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 border-b border-[#E3E1DA] bg-[#FBFAF7]/95 backdrop-blur-xl">
        <div className="mx-auto flex min-h-[68px] w-[calc(100%-24px)] max-w-[1200px] items-center justify-between gap-5">

          {/* Logo */}
          <Link
            to="/admin/dashboard"
            className="flex shrink-0 items-center gap-2.5 text-[#16302B] no-underline"
          >
            <img
              src={logo}
              alt="FixMate"
              className="h-9 w-9 rounded-lg object-cover"
            />

            <span className="text-xl font-extrabold tracking-tight">
              Fix<span className="text-[#0E6B5C]">Mate</span>
            </span>

            <span className="rounded-md bg-[#EAF4F1] px-1.5 py-1 text-[9px] font-bold uppercase tracking-wide text-[#0E6B5C]">
              Admin
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={navClass}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">

            {/* Notifications */}
            <Link
              to="/admin/notifications"
              aria-label="Notifications"
              title="Notifications"
              className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-[#E1E5E1] bg-white text-[#5E6864] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#C9DFD8] hover:bg-[#F5FAF8] hover:text-[#0E6B5C]"
            >
              <Bell size={18} />

              <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#E08A3C] px-1 text-[9px] font-bold text-white">
                2
              </span>
            </Link>

            {/* Profile */}
            <Link
              to="/admin/adminprofile"
              className="flex items-center gap-2 rounded-xl p-1 pr-2 text-[#16302B] transition-all duration-200 hover:bg-[#F3F5F2]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#16302B] text-xs font-bold text-white">
                P
              </span>

              <span className="hidden text-sm font-semibold sm:block">
                Piyush
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* ================= MOBILE NAV ================= */}
      <nav className="fixed bottom-3 left-3 right-3 z-[100] flex h-16 items-center justify-around rounded-[18px] border border-[#E1E5E1] bg-white/95 p-1.5 shadow-[0_10px_35px_rgba(22,48,43,0.13)] backdrop-blur-xl lg:hidden">

        <MobileNav
          to="/admin/dashboard"
          label="Home"
          icon={Home}
        />

        <MobileNav
          to="/admin/order"
          label="Orders"
          icon={CalendarDays}
        />

        <MobileNav
          to="/admin/services"
          label="Services"
          icon={Wrench}
        />

        <MobileNav
          to="/admin/users"
          label="Users"
          icon={Users}
        />

        <MobileNav
          to="/admin/workers"
          label="Workers"
          icon={UserCog}
        />
      </nav>
    </>
  );
}

/* ================= MOBILE NAV ITEM ================= */

function MobileNav({ to, label, icon: Icon }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex h-[52px] min-w-[52px] flex-col items-center justify-center gap-1 rounded-xl text-[10px] font-semibold transition-all duration-200 ${
          isActive
            ? "bg-[#EAF4F1] text-[#0E6B5C]"
            : "text-[#89918D] hover:bg-[#F3F5F2] hover:text-[#0E6B5C]"
        }`
      }
    >
      <Icon size={17} strokeWidth={2} />
      <span>{label}</span>
    </NavLink>
  );
}