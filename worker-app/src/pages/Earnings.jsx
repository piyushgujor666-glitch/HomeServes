import React, { useMemo, useState } from "react";
import { CalendarDays, CheckCircle2, Clock3, CreditCard, Download, Filter, IndianRupee, TrendingUp, Wallet, ArrowUpRight } from "lucide-react";

const Earnings = () => {
  const [filter, setFilter] = useState("All");
  const transactions = [
    ["AC Repair", "Rahul Sharma", "08 Oct 2026", 850, "Completed"],
    ["Plumbing", "Amit Patel", "07 Oct 2026", 650, "Completed"],
    ["Electrical Repair", "Neha Singh", "06 Oct 2026", 500, "Pending"],
    ["Home Cleaning", "Priya Shah", "05 Oct 2026", 900, "Completed"],
    ["Painting", "Karan Mehta", "03 Oct 2026", 1200, "Completed"],
    ["Carpentry", "Ravi Kumar", "01 Oct 2026", 750, "Pending"],
  ];
  const filtered = useMemo(() => filter === "All" ? transactions : transactions.filter((x) => x[4] === filter), [filter]);
  const months = [["May", 5200], ["Jun", 6800], ["Jul", 6100], ["Aug", 7900], ["Sep", 7200], ["Oct", 8450]];

  return (
    <div className="min-h-screen bg-[#F7F8F7] px-4 py-6 sm:px-6 lg:px-8 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl">
        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-sm font-bold text-[#0E6B5C]">Financial Overview</p><h1 className="mt-1 text-3xl font-black text-[#16302B] dark:text-white sm:text-4xl">Earnings</h1><p className="mt-2 text-sm text-slate-500">Track income, payouts and payment status.</p></div><button className="flex w-fit items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:text-white"><Download size={16} />Download Report</button></div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {[["Total Earnings", "₹24,850", "+18.4%", Wallet], ["This Month", "₹8,450", "+12.6%", TrendingUp], ["Completed Jobs", "42", "+8", CheckCircle2], ["Pending Payment", "₹1,250", "2 jobs", Clock3]].map(([title, value, change, Icon]) => <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"><div className="flex items-start justify-between"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0E6B5C]/10 text-[#0E6B5C] transition group-hover:rotate-6"><Icon size={20} /></span><span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-bold text-green-600">{change}</span></div><p className="mt-5 text-sm text-slate-500">{title}</p><p className="mt-1 text-2xl font-black text-[#16302B] dark:text-white">{value}</p></div>)}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.7fr_0.8fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-6"><div className="flex items-center justify-between"><div><h2 className="font-black text-[#16302B] dark:text-white">Earnings Overview</h2><p className="mt-1 text-xs text-slate-500">Monthly performance</p></div><span className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2 text-xs font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-300"><CalendarDays size={14} />2026</span></div><div className="mt-8 flex h-64 items-end justify-between gap-3 border-b border-slate-100 dark:border-slate-800">{months.map(([month, amount]) => <div key={month} className="flex h-full flex-1 flex-col items-center justify-end gap-2"><span className="text-[10px] text-slate-400">₹{amount.toLocaleString("en-IN")}</span><div className="w-full max-w-12 rounded-t-xl bg-[#0E6B5C] transition duration-500 hover:bg-[#0A5548]" style={{ height: `${Math.max(30, (amount / 9000) * 100)}%` }} /><span className="pb-2 text-xs font-semibold text-slate-500">{month}</span></div>)}</div></div>

          <div className="rounded-3xl bg-[#0E6B5C] p-6 text-white shadow-xl shadow-[#0E6B5C]/20"><div className="flex items-center justify-between"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15"><CreditCard size={20} /></span><span className="rounded-full bg-white/15 px-3 py-1.5 text-xs font-bold">Available</span></div><p className="mt-8 text-sm text-white/65">Available for payout</p><p className="mt-1 text-4xl font-black">₹7,200</p><p className="mt-2 text-xs text-white/60">After pending payments and platform fees</p><button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-black text-[#0E6B5C] transition hover:-translate-y-0.5 hover:shadow-lg"><IndianRupee size={16} />Request Payout</button></div>
        </div>

        <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900"><div className="flex flex-col gap-4 border-b border-slate-100 p-5 sm:flex-row sm:items-center sm:justify-between dark:border-slate-800"><div><h2 className="font-black text-[#16302B] dark:text-white">Recent Transactions</h2><p className="mt-1 text-xs text-slate-500">Latest service payments</p></div><div className="flex items-center gap-2"><Filter size={15} className="text-slate-400" />{["All", "Completed", "Pending"].map((item) => <button key={item} onClick={() => setFilter(item)} className={`rounded-lg px-3 py-1.5 text-xs font-bold transition ${filter === item ? "bg-[#16302B] text-white dark:bg-white dark:text-[#16302B]" : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300"}`}>{item}</button>)}</div></div>
          <div className="divide-y divide-slate-100 dark:divide-slate-800">{filtered.map(([service, customer, date, amount, status]) => <div key={`${service}-${date}`} className="group flex flex-col gap-3 p-5 transition hover:bg-slate-50 sm:flex-row sm:items-center dark:hover:bg-slate-950"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0E6B5C]/10 text-[#0E6B5C]"><Wallet size={17} /></span><span className="flex-1"><span className="block text-sm font-bold text-slate-900 dark:text-white">{service}</span><span className="block text-xs text-slate-500">{customer} · {date}</span></span><span className={`inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold ${status === "Completed" ? "bg-green-50 text-green-600" : "bg-yellow-50 text-yellow-700"}`}>{status === "Completed" ? <CheckCircle2 size={12} /> : <Clock3 size={12} />}{status}</span><span className="text-sm font-black text-slate-900 dark:text-white">+₹{amount.toLocaleString("en-IN")}</span><ArrowUpRight size={17} className="hidden text-slate-300 transition group-hover:text-[#0E6B5C] sm:block" /></div>)}</div></div>
        <div className="h-8 md:hidden" />
      </div>
    </div>
  );
};

export default Earnings;
