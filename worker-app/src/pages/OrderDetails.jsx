import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { ArrowLeft, CalendarDays, CheckCircle2, Clock3, MapPin, Phone, UserRound, Wallet } from "lucide-react";

const OrderDetails = () => {
  const { orderId } = useParams();
  const order = {
    id: orderId || "HS1001",
    service: "Plumbing Repair",
    customer: "Rahul Sharma",
    phone: "+91 98765 43210",
    location: "Delhi",
    date: "08 Oct 2026",
    time: "10:30 AM",
    amount: "₹650",
    status: "Pending",
    notes: "Kitchen sink is leaking and the customer requested a complete inspection.",
  };

  return (
    <div className="min-h-screen bg-[#F7F8F7] px-4 py-6 sm:px-6 lg:px-8 dark:bg-slate-950">
      <div className="mx-auto max-w-5xl">
        <NavLink to="/orders" className="mb-5 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-sm font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:text-white"><ArrowLeft size={16} />Back to Orders</NavLink>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="bg-[#16302B] p-6 text-white sm:p-8"><div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-xs font-bold uppercase tracking-wider text-white/55">Order #{order.id}</p><h1 className="mt-2 text-3xl font-black">{order.service}</h1><p className="mt-2 text-sm text-white/65">Customer service request</p></div><span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-[#E08A3C] px-3 py-1.5 text-xs font-black"><Clock3 size={13} />{order.status}</span></div></div>

          <div className="grid gap-6 p-5 sm:p-8 lg:grid-cols-[1.3fr_0.7fr]">
            <div><h2 className="text-lg font-black text-[#16302B] dark:text-white">Service Details</h2><div className="mt-5 grid gap-3 sm:grid-cols-2"><div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-950"><UserRound size={17} className="text-[#0E6B5C]" /><p className="mt-3 text-xs text-slate-400">Customer</p><p className="mt-1 font-bold text-slate-900 dark:text-white">{order.customer}</p></div><div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-950"><MapPin size={17} className="text-[#0E6B5C]" /><p className="mt-3 text-xs text-slate-400">Location</p><p className="mt-1 font-bold text-slate-900 dark:text-white">{order.location}</p></div><div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-950"><CalendarDays size={17} className="text-[#0E6B5C]" /><p className="mt-3 text-xs text-slate-400">Date & Time</p><p className="mt-1 font-bold text-slate-900 dark:text-white">{order.date} · {order.time}</p></div><div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-950"><Wallet size={17} className="text-[#0E6B5C]" /><p className="mt-3 text-xs text-slate-400">Estimated Earnings</p><p className="mt-1 font-bold text-[#0E6B5C]">{order.amount}</p></div></div><div className="mt-5 rounded-2xl border border-slate-200 p-4 dark:border-slate-800"><p className="text-xs font-bold uppercase tracking-wider text-slate-400">Customer note</p><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{order.notes}</p></div></div>

            <div className="rounded-3xl bg-[#F7F8F7] p-5 dark:bg-slate-950"><h2 className="font-black text-[#16302B] dark:text-white">Next step</h2><p className="mt-2 text-sm leading-6 text-slate-500">Confirm the request, then contact the customer before leaving.</p><div className="mt-5 space-y-3"><button className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0E6B5C] px-4 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#095244]"><CheckCircle2 size={17} />Accept Order</button><a href={`tel:${order.phone.replace(/\s/g, "")}`} className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#E08A3C] px-4 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:brightness-105"><Phone size={17} />Call Customer</a></div></div>
          </div>
        </div>
        <div className="h-8 md:hidden" />
      </div>
    </div>
  );
};

export default OrderDetails;
