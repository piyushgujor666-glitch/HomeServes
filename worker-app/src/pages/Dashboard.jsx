import React, { useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  MapPin,
  Navigation,
  Package,
  Phone,
  Sparkles,
  Star,
  TrendingUp,
  UserRound,
  Wallet,
  Wrench,
} from "lucide-react";

const Dashboard = () => {
  const [available, setAvailable] = useState(true);

  const stats = [
    { title: "New Orders", value: "5", note: "+2 today", icon: Package },
    { title: "Completed Jobs", value: "126", note: "+8 this month", icon: CheckCircle2 },
    { title: "This Month", value: "₹18,500", note: "+12.5% vs last month", icon: Wallet },
    { title: "Rating", value: "4.8", note: "98 customer reviews", icon: Star },
  ];

  const recent = [
    { service: "Plumbing Repair", customer: "Rahul Sharma", location: "Delhi", time: "Today, 10:30 AM", amount: "₹650", status: "Pending", icon: Wrench },
    { service: "AC Repair", customer: "Amit Kumar", location: "Delhi", time: "Yesterday, 3:00 PM", amount: "₹1,200", status: "Completed", icon: Sparkles },
    { service: "Electrical Work", customer: "Priya Singh", location: "Delhi", time: "Yesterday, 11:00 AM", amount: "₹800", status: "Completed", icon: Package },
  ];

  const completion = useMemo(() => 60, []);

  return (
    <div className="min-h-screen bg-[#F7F8F7] px-4 py-6 sm:px-6 lg:px-8 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl">
        {/* Welcome */}
        <section className="mb-7 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold text-[#0E6B5C] dark:text-[#39A98D]">Good morning 👋</p>
            <h1 className="mt-1 text-3xl font-black tracking-tight text-[#16302B] dark:text-white sm:text-4xl">Worker Name</h1>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Here’s what’s happening with your work today.</p>
          </div>

          <button onClick={() => setAvailable((v) => !v)} className="group flex w-full max-w-sm items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0E6B5C]/10 dark:border-slate-800 dark:bg-slate-900">
            <span className="relative flex h-3 w-3 shrink-0">
              {available && <span className="absolute inset-0 animate-ping rounded-full bg-[#0E6B5C]/50" />}
              <span className={`relative h-3 w-3 rounded-full ${available ? "bg-[#0E6B5C]" : "bg-slate-400"}`} />
            </span>
            <span className="flex-1">
              <span className="block text-sm font-bold text-slate-900 dark:text-white">{available ? "You’re Available" : "You’re Offline"}</span>
              <span className="block text-xs text-slate-500">{available ? "Ready to receive new orders" : "New orders are paused"}</span>
            </span>
            <span className="text-xs font-bold text-[#0E6B5C]">{available ? "ON" : "OFF"}</span>
          </button>
        </section>

        {/* Stats */}
        <section className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map(({ title, value, note, icon: Icon }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#0E6B5C]/20 hover:shadow-xl hover:shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{title}</p>
                  <p className="mt-2 text-3xl font-black tracking-tight text-[#16302B] dark:text-white">{value}</p>
                </div>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0E6B5C]/10 text-[#0E6B5C] transition duration-300 group-hover:rotate-6 group-hover:scale-110"><Icon size={20} /></span>
              </div>
              <p className="mt-4 flex items-center gap-1 text-xs font-semibold text-[#0E6B5C]"><TrendingUp size={13} />{note}</p>
            </div>
          ))}
        </section>

        {/* Unique smart card */}
        <section className="mb-8 overflow-hidden rounded-3xl bg-[#16302B] p-5 text-white shadow-xl shadow-[#16302B]/10 sm:p-7">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold text-white/80"><Sparkles size={14} />Smart Workday</div>
              <h2 className="text-2xl font-black">Your next job is 82% ready.</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/65">Review the customer, route and service checklist before you leave. This reduces missed details and keeps your schedule on track.</p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:min-w-[320px]">
              <NavLink to="/schedule" className="rounded-2xl bg-white/10 p-4 transition hover:-translate-y-1 hover:bg-white/15"><p className="text-xs text-white/60">Next job</p><p className="mt-1 font-bold">10:30 AM</p></NavLink>
              <NavLink to="/orders" className="rounded-2xl bg-[#E08A3C] p-4 transition hover:-translate-y-1 hover:brightness-105"><p className="text-xs text-white/75">Action</p><p className="mt-1 font-bold">Review order</p></NavLink>
            </div>
          </div>
        </section>

        {/* Quick actions */}
        <section className="mb-8">
          <div className="mb-4 flex items-end justify-between">
            <div><h2 className="text-lg font-black text-[#16302B] dark:text-white">Quick Actions</h2><p className="mt-1 text-sm text-slate-500">Jump straight to what you need.</p></div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              ["View Orders", "/orders", Package],
              ["Edit Profile", "/profile", UserRound],
              ["View Earnings", "/earning", Wallet],
              ["My Schedule", "/schedule", CalendarDays],
            ].map(([label, path, Icon]) => (
              <NavLink key={path} to={path} className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#0E6B5C]/20 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
                <span className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0E6B5C]/10 text-[#0E6B5C] transition group-hover:scale-110"><Icon size={18} /></span><span className="text-sm font-bold text-slate-800 dark:text-white">{label}</span></span>
                <ChevronRight size={18} className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-[#0E6B5C]" />
              </NavLink>
            ))}
          </div>
        </section>

        {/* Upcoming + profile completion */}
        <section className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-6">
            <div className="flex items-center justify-between"><div><h2 className="text-lg font-black text-[#16302B] dark:text-white">Upcoming Job</h2><p className="mt-1 text-sm text-slate-500">Your next confirmed service</p></div><span className="rounded-full bg-[#0E6B5C]/10 px-3 py-1.5 text-xs font-bold text-[#0E6B5C]">Confirmed</span></div>
            <div className="mt-5 rounded-2xl bg-[#F7F8F7] p-5 dark:bg-slate-950">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div><div className="flex items-center gap-2 text-xs font-bold text-[#0E6B5C]"><Clock3 size={14} /> Today, 10:30 AM</div><h3 className="mt-2 text-xl font-black text-[#16302B] dark:text-white">Plumbing Repair</h3><div className="mt-3 flex flex-wrap gap-3 text-sm text-slate-500"><span className="flex items-center gap-1"><UserRound size={14} />Rahul Sharma</span><span className="flex items-center gap-1"><MapPin size={14} />Delhi</span></div></div>
                <div className="flex gap-2"><button className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-[#16302B] shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-md dark:bg-slate-900 dark:text-white dark:ring-slate-700"><Navigation size={16} />Navigate</button><button className="flex items-center gap-2 rounded-xl bg-[#E08A3C] px-4 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:brightness-105"><Phone size={16} />Call</button></div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-6">
            <div className="flex items-center justify-between"><div><h2 className="text-lg font-black text-[#16302B] dark:text-white">Profile Health</h2><p className="mt-1 text-sm text-slate-500">More complete profiles get more trust.</p></div><span className="text-lg font-black text-[#0E6B5C]">{completion}%</span></div>
            <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800"><div className="h-full rounded-full bg-[#0E6B5C] transition-all" style={{ width: `${completion}%` }} /></div>
            <div className="mt-5 space-y-3 text-sm">
              {["Basic information", "Profile photo", "KYC verification", "Experience details", "Certificates"].map((item, i) => <div key={item} className="flex items-center gap-3"><span className={`flex h-5 w-5 items-center justify-center rounded-full text-xs ${i < 2 ? "bg-[#0E6B5C] text-white" : "border-2 border-[#E08A3C]"}`}>{i < 2 ? "✓" : ""}</span><span className="text-slate-600 dark:text-slate-300">{item}</span></div>)}
            </div>
            <NavLink to="/profile" className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-[#16302B] px-4 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#0E6B5C]">Complete Profile <ArrowRight size={16} /></NavLink>
          </div>
        </section>

        {/* Recent orders */}
        <section className="mt-6 rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center justify-between border-b border-slate-100 p-5 dark:border-slate-800"><div><h2 className="text-lg font-black text-[#16302B] dark:text-white">Recent Orders</h2><p className="mt-1 text-sm text-slate-500">Your latest service activity</p></div><NavLink to="/orders" className="text-sm font-bold text-[#0E6B5C] hover:underline">View all</NavLink></div>
          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {recent.map(({ service, customer, location, time, amount, status, icon: Icon }) => <NavLink key={service} to="/orders" className="group flex flex-col gap-3 p-5 transition hover:bg-[#F7F8F7] sm:flex-row sm:items-center dark:hover:bg-slate-950"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0E6B5C]/10 text-[#0E6B5C] transition group-hover:scale-110"><Icon size={18} /></span><span className="flex-1"><span className="block font-bold text-[#16302B] dark:text-white">{service}</span><span className="mt-1 block text-sm text-slate-500">{customer} · {location} · {time}</span></span><span className="flex items-center justify-between gap-4 sm:block sm:text-right"><span className="block font-black text-[#16302B] dark:text-white">{amount}</span><span className={`mt-1 inline-block rounded-full px-2.5 py-1 text-[11px] font-bold ${status === "Completed" ? "bg-[#0E6B5C]/10 text-[#0E6B5C]" : "bg-orange-50 text-orange-700"}`}>{status}</span></span><ChevronRight size={18} className="hidden text-slate-400 transition group-hover:translate-x-1 sm:block" /></NavLink>)}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
