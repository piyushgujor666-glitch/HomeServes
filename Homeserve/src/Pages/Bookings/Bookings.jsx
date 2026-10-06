import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  MapPin,
  ShieldCheck,
  Star,
  Wrench,
} from "lucide-react";
import Layout from "../../Components/Layout.jsx";

const bookings = [
  {
    id: "FM-1048",
    service: "AC Repair",
    date: "18 Oct 2026",
    slot: "11:00 AM – 01:00 PM",
    status: "Confirmed",
    price: "₹499",
    provider: "Aarav Services",
  },
  {
    id: "FM-1036",
    service: "Plumbing",
    date: "07 Oct 2026",
    slot: "05:00 PM – 07:00 PM",
    status: "Completed",
    price: "₹399",
    provider: "Ravi Home Care",
  },
];

export default function Bookings() {
  return (
    <Layout>
      <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#07110e] dark:text-white">

        {/* HEADER */}

        <section className="mx-auto max-w-7xl px-4 pb-8 pt-8 sm:px-6 lg:px-8 lg:pt-12">

          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

            <div>

              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400">
                <Wrench size={12} />
                My FixMate
              </div>

              <h1 className="text-4xl font-black tracking-[-0.055em] text-slate-950 dark:text-white sm:text-5xl">
                Your bookings
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 dark:text-slate-400 sm:text-base">
                Keep track of upcoming services and see your previous FixMate
                visits in one place.
              </p>

            </div>

            <Link
              to="/services"
              className="group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-2xl bg-[#087f68] px-6 text-sm font-black text-white shadow-[0_12px_30px_rgba(8,127,104,0.20)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#066d5a] hover:shadow-[0_18px_38px_rgba(8,127,104,0.28)] dark:bg-emerald-400 dark:text-emerald-950 dark:hover:bg-emerald-300"
            >
              Book a service

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

          </div>

        </section>

        {/* QUICK SUMMARY */}

        <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">

          <div className="grid gap-4 sm:grid-cols-3">

            <SummaryCard
              icon={CalendarDays}
              label="Upcoming"
              value="1"
              text="Service scheduled"
            />

            <SummaryCard
              icon={CheckCircle2}
              label="Completed"
              value="1"
              text="Service completed"
            />

            <SummaryCard
              icon={ShieldCheck}
              label="FixMate care"
              value="4.8"
              text="Average service rating"
            />

          </div>

        </section>

        {/* BOOKINGS */}

        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">

          <div className="mb-5 flex items-center justify-between">

            <div>

              <h2 className="text-lg font-black tracking-[-0.03em]">
                Recent bookings
              </h2>

              <p className="mt-1 text-xs text-slate-400">
                Your service history
              </p>

            </div>

            <span className="rounded-full bg-white px-3 py-1.5 text-[10px] font-black text-slate-500 shadow-sm ring-1 ring-slate-200 dark:bg-[#111b18] dark:text-slate-400 dark:ring-slate-800">
              {bookings.length} bookings
            </span>

          </div>

          <div className="space-y-5">

            {bookings.map((booking) => (
              <BookingCard
                key={booking.id}
                booking={booking}
              />
            ))}

          </div>

          {/* BOTTOM CTA */}

          <div className="relative mt-8 overflow-hidden rounded-[30px] bg-[#092c24] p-7 text-white shadow-[0_20px_50px_rgba(9,44,36,0.15)] sm:p-9">

            <div className="absolute -right-24 -top-28 h-72 w-72 rounded-full bg-emerald-300/10" />

            <div className="absolute -bottom-32 -left-20 h-64 w-64 rounded-full border-[45px] border-white/[0.03]" />

            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

              <div>

                <div className="mb-3 flex items-center gap-2 text-emerald-300">

                  <Wrench size={16} />

                  <span className="text-[10px] font-black uppercase tracking-[0.16em]">
                    Need something else?
                  </span>

                </div>

                <h2 className="text-2xl font-black tracking-[-0.04em] sm:text-3xl">
                  Something needs fixing?
                </h2>

                <p className="mt-2 max-w-lg text-sm leading-6 text-slate-300">
                  Find a service, choose a convenient time and get your home
                  sorted.
                </p>

              </div>

              <Link
                to="/services"
                className="group inline-flex min-h-[54px] shrink-0 items-center justify-center gap-3 rounded-2xl bg-emerald-300 px-6 text-sm font-black text-emerald-950 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-200 hover:shadow-[0_15px_35px_rgba(110,231,183,0.20)]"
              >
                Explore services

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

            </div>

          </div>

        </section>

      </main>
    </Layout>
  );
}

/* ============================================================
   SUMMARY CARD
============================================================ */

function SummaryCard({
  icon: Icon,
  label,
  value,
  text,
}) {
  return (
    <div className="group rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_15px_35px_rgba(15,23,42,0.08)] dark:border-slate-800 dark:bg-[#111b18] dark:hover:border-emerald-500/30">

      <div className="flex items-center justify-between">

        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-50 text-emerald-700 transition-transform duration-300 group-hover:scale-105 dark:bg-emerald-500/10 dark:text-emerald-400">
          <Icon size={19} />
        </div>

        <span className="text-2xl font-black tracking-[-0.04em]">
          {value}
        </span>

      </div>

      <div className="mt-5">

        <p className="text-xs font-black">
          {label}
        </p>

        <p className="mt-1 text-[11px] text-slate-400">
          {text}
        </p>

      </div>

    </div>
  );
}

/* ============================================================
   BOOKING CARD
============================================================ */

function BookingCard({ booking }) {
  const completed = booking.status === "Completed";

  return (
    <article className="group overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_10px_35px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_20px_50px_rgba(15,23,42,0.09)] dark:border-slate-800 dark:bg-[#111b18] dark:hover:border-emerald-500/30">

      {/* TOP */}

      <div className="p-5 sm:p-7">

        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

          <div className="flex items-start gap-4">

            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-emerald-50 text-emerald-700 transition-all duration-300 group-hover:scale-105 group-hover:bg-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-400 dark:group-hover:bg-emerald-500/15">
              <Wrench size={23} />
            </div>

            <div>

              <div className="flex flex-wrap items-center gap-2">

                <span className="text-[10px] font-black uppercase tracking-[0.12em] text-slate-400">
                  {booking.id}
                </span>

                <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700" />

                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[9px] font-black ${
                    completed
                      ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400"
                      : "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      completed
                        ? "bg-emerald-500"
                        : "bg-amber-500"
                    }`}
                  />

                  {booking.status}
                </span>

              </div>

              <h2 className="mt-2 text-xl font-black tracking-[-0.035em] sm:text-2xl">
                {booking.service}
              </h2>

              <p className="mt-1 text-xs text-slate-400">
                {booking.provider}
              </p>

            </div>

          </div>

          <div className="sm:text-right">

            <p className="text-[9px] font-black uppercase tracking-[0.12em] text-slate-400">
              Service price
            </p>

            <p className="mt-1 text-xl font-black">
              {booking.price}
            </p>

          </div>

        </div>

        {/* DETAILS */}

        <div className="mt-7 grid gap-3 sm:grid-cols-3">

          <BookingDetail
            icon={CalendarDays}
            label="Date"
            value={booking.date}
          />

          <BookingDetail
            icon={Clock3}
            label="Time slot"
            value={booking.slot}
          />

          <BookingDetail
            icon={MapPin}
            label="Location"
            value="Home address"
          />

        </div>

      </div>

      {/* STATUS */}

      <div className="border-t border-slate-100 px-5 py-5 dark:border-slate-800 sm:px-7">

        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

          {/* TIMELINE */}

          <div className="flex items-center">

            <StatusPoint
              active
              completed={completed}
              label="Booked"
            />

            <StatusLine active />

            <StatusPoint
              active={!completed}
              completed={completed}
              label={completed ? "Completed" : "Confirmed"}
            />

            <StatusLine active={completed} />

            <StatusPoint
              active={completed}
              completed={completed}
              label="Done"
            />

          </div>

          {/* ACTION */}

          <div className="flex items-center justify-between gap-4 sm:justify-end">

            {completed ? (
              <div className="flex items-center gap-2 text-xs font-black text-slate-500 dark:text-slate-400">

                <Star
                  size={15}
                  fill="#f4b942"
                  color="#f4b942"
                />

                4.8 rated

              </div>
            ) : (
              <span className="flex items-center gap-2 text-xs font-semibold text-slate-400">

                <Clock3 size={14} />

                Upcoming service

              </span>
            )}

            <Link
              to="/bookings"
              className="group/track inline-flex items-center gap-1 text-xs font-black text-emerald-700 transition-all duration-300 hover:gap-2 dark:text-emerald-400"
            >
              {completed ? "View booking" : "Track booking"}

              <ChevronRight
                size={15}
                className="transition-transform duration-300 group-hover/track:translate-x-0.5"
              />

            </Link>

          </div>

        </div>

      </div>

    </article>
  );
}

/* ============================================================
   BOOKING DETAIL
============================================================ */

function BookingDetail({
  icon: Icon,
  label,
  value,
}) {
  return (
    <div className="group/detail rounded-2xl bg-slate-50 p-4 transition-all duration-300 hover:bg-emerald-50/60 dark:bg-[#18221f] dark:hover:bg-emerald-500/5">

      <div className="flex items-center gap-2">

        <Icon
          size={16}
          className="text-emerald-600 dark:text-emerald-400"
        />

        <span className="text-[9px] font-black uppercase tracking-[0.1em] text-slate-400">
          {label}
        </span>

      </div>

      <p className="mt-2 text-xs font-black leading-5 text-slate-700 dark:text-slate-200">
        {value}
      </p>

    </div>
  );
}

/* ============================================================
   STATUS POINT
============================================================ */

function StatusPoint({
  active,
  completed,
  label,
}) {
  return (
    <div className="flex flex-col items-center gap-2">

      <div
        className={`grid h-7 w-7 place-items-center rounded-full transition-all duration-300 ${
          active
            ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20 dark:bg-emerald-400 dark:text-emerald-950"
            : "bg-slate-100 text-slate-300 dark:bg-slate-800 dark:text-slate-600"
        }`}
      >
        {active ? (
          <CheckCircle2 size={14} />
        ) : (
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
        )}
      </div>

      <span
        className={`text-[8px] font-black uppercase tracking-wide ${
          active
            ? "text-slate-600 dark:text-slate-300"
            : "text-slate-400"
        }`}
      >
        {label}
      </span>

    </div>
  );
}

/* ============================================================
   STATUS LINE
============================================================ */

function StatusLine({ active }) {
  return (
    <div className="mx-2 mb-5 h-[2px] w-8 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800 sm:w-14">

      <div
        className={`h-full rounded-full bg-emerald-500 transition-all duration-500 ${
          active ? "w-full" : "w-0"
        }`}
      />

    </div>
  );
}