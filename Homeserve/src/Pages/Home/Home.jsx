import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarCheck2,
  CheckCircle2,
  Clock3,
  MapPin,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Wrench,
} from "lucide-react";

import Layout from "../../Components/Layout.jsx";

import hero from "../../assets/Home_background.png";
import plumber from "../../assets/Plumber.png";
import cleaning from "../../assets/cleaning.png";
import electrician from "../../assets/electrician.png";
import ac from "../../assets/Acrepair.png";

const featuredServices = [
  ["Plumbing", plumber, "Leaks, taps & pipes", "₹299"],
  ["Cleaning", cleaning, "Deep & regular cleaning", "₹399"],
  ["Electrical", electrician, "Repairs & installation", "₹249"],
  ["AC Repair", ac, "Cooling & service", "₹499"],
];

const quickPicks = [
  [
    "Need it today",
    "Fast help for an urgent home problem",
    "/book-service?service=Electrical",
    "Today",
    Clock3,
  ],
  [
    "Under ₹500",
    "Everyday fixes without a big starting price",
    "/services",
    "Budget",
    Wrench,
  ],
  [
    "Most booked",
    "Reliable services customers request often",
    "/services",
    "Popular",
    Search,
  ],
];

const steps = [
  [
    "01",
    "Choose a service",
    "Pick the service that matches the job at home.",
  ],
  [
    "02",
    "Share the details",
    "Tell us your location, problem and preferred slot.",
  ],
  [
    "03",
    "Get it sorted",
    "Your request is ready for a FixMate professional.",
  ],
];

export default function Home() {
  return (
    <Layout>
      <main className="overflow-hidden bg-[#f7f9f8] text-slate-900 dark:bg-[#07110e] dark:text-white">

        {/* ================= HERO ================= */}

        <section className="mx-auto w-full max-w-[1440px] px-3 pt-3 sm:px-5 lg:px-7 lg:pt-5">
          <div
            className="group relative min-h-[620px] overflow-hidden rounded-[32px] bg-[#09241d] bg-cover bg-center shadow-[0_25px_70px_rgba(8,35,28,.18)] sm:min-h-[650px] lg:min-h-[680px]"
            style={{
              backgroundImage: `url("${hero}")`,
            }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,25,20,.98)_0%,rgba(3,25,20,.91)_34%,rgba(3,25,20,.52)_62%,rgba(3,25,20,.12)_100%)]" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_25%,rgba(95,231,185,.16),transparent_28%)]" />

            <div className="absolute bottom-0 right-0 hidden h-[68%] w-[44%] rounded-tl-[100px] bg-gradient-to-t from-[#061b15]/50 to-transparent lg:block" />

            <div className="relative z-10 flex min-h-[620px] items-center px-5 py-12 sm:min-h-[650px] sm:px-10 lg:min-h-[680px] lg:px-16">
              <div className="max-w-[680px]">

                {/* Badge */}

                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-emerald-100 backdrop-blur-xl transition duration-300 group-hover:border-emerald-300/30">
                  <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,.8)]" />

                  Home services, made simple
                </div>

                {/* Heading */}

                <h1 className="mt-6 max-w-3xl text-[43px] font-black leading-[.96] tracking-[-0.06em] text-white sm:text-6xl lg:text-[78px]">
                  Your home needs help.

                  <span className="mt-2 block text-emerald-300">
                    We make it easy.
                  </span>
                </h1>

                {/* Description */}

                <p className="mt-6 max-w-xl text-sm leading-7 text-slate-200 sm:text-base">
                  Book trusted home services with clear details, convenient
                  slots and one simple request from start to finish.
                </p>

                {/* Buttons */}

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                  {/* Explore Services */}

                  <Link
                    to="/services"
                    className="group/btn inline-flex items-center justify-center gap-3 rounded-2xl bg-emerald-500 px-6 py-3.5 text-sm font-black text-white shadow-[0_12px_30px_rgba(16,185,129,.18)] transition duration-300 hover:-translate-y-1 hover:bg-emerald-600 hover:shadow-[0_18px_40px_rgba(16,185,129,.28)] dark:bg-emerald-400 dark:text-emerald-950 dark:hover:bg-emerald-300"
                  >
                    Explore services

                    <ArrowRight
                      size={17}
                      className="transition duration-300 group-hover/btn:translate-x-1"
                    />
                  </Link>

                  {/* Book Directly */}

                  <Link
                    to="/book-service"
                    className="group/btn inline-flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-black text-slate-900 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:bg-emerald-50 hover:shadow-lg dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:border-emerald-300/40 dark:hover:bg-white/15"
                  >
                    Book directly

                    <ArrowUpRight
                      size={17}
                      className="transition duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                    />
                  </Link>

                </div>

                {/* Trust Points */}

                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-[11px] font-semibold text-slate-300">

                  <span className="inline-flex items-center gap-2">
                    <CheckCircle2
                      size={15}
                      className="text-emerald-300"
                    />
                    Clear booking details
                  </span>

                  <span className="inline-flex items-center gap-2">
                    <ShieldCheck
                      size={15}
                      className="text-emerald-300"
                    />
                    Service-first experience
                  </span>

                  <span className="inline-flex items-center gap-2">
                    <Star
                      size={15}
                      className="text-emerald-300"
                      fill="currentColor"
                    />
                    4.8 customer rating
                  </span>

                </div>
              </div>
            </div>

            {/* ================= FLOATING BOOKING BAR ================= */}

            <div className="absolute bottom-4 left-4 right-4 z-20 sm:bottom-6 sm:left-8 sm:right-8 lg:left-1/2 lg:right-8 lg:-translate-x-0">

              <div className="overflow-hidden rounded-[22px] border border-white/50 bg-white/95 p-2 shadow-[0_20px_50px_rgba(0,0,0,.2)] backdrop-blur-xl dark:border-slate-700 dark:bg-[#111b18]/95">

                <div className="grid lg:grid-cols-[1.4fr_1fr_1fr_auto]">

                  {/* Service */}

                  <div className="flex items-center gap-3 rounded-2xl px-3 py-3.5 transition hover:bg-emerald-50 dark:hover:bg-emerald-500/10">

                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
                      <Search size={18} />
                    </span>

                    <div className="min-w-0">
                      <p className="text-xs font-black text-slate-900 dark:text-white">
                        What needs fixing?
                      </p>

                      <p className="truncate text-[11px] text-slate-500 dark:text-slate-400">
                        Plumbing, cleaning, electrical...
                      </p>
                    </div>

                  </div>

                  {/* Location */}

                  <div className="flex items-center gap-3 border-t border-slate-100 px-3 py-3.5 transition hover:bg-emerald-50 dark:border-slate-800 dark:hover:bg-emerald-500/10 lg:border-l lg:border-t-0">

                    <MapPin
                      size={18}
                      className="shrink-0 text-emerald-700 dark:text-emerald-300"
                    />

                    <div>
                      <p className="text-xs font-black text-slate-900 dark:text-white">
                        Your area
                      </p>

                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        Choose during booking
                      </p>
                    </div>

                  </div>

                  {/* Time */}

                  <div className="flex items-center gap-3 border-t border-slate-100 px-3 py-3.5 transition hover:bg-emerald-50 dark:border-slate-800 dark:hover:bg-emerald-500/10 lg:border-l lg:border-t-0">

                    <Clock3
                      size={18}
                      className="shrink-0 text-emerald-700 dark:text-emerald-300"
                    />

                    <div>
                      <p className="text-xs font-black text-slate-900 dark:text-white">
                        Preferred time
                      </p>

                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        Pick a slot that works
                      </p>
                    </div>

                  </div>

                  {/* Start Booking */}

                  <Link
                    to="/services"
                    className="group/start flex items-center justify-center gap-3 rounded-2xl bg-[#087f61] px-6 py-4 text-sm font-black text-white transition duration-300 hover:bg-[#066c53] lg:m-1"
                  >
                    Start booking

                    <ArrowRight
                      size={17}
                      className="transition group-hover/start:translate-x-1"
                    />
                  </Link>

                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ================= SERVICES ================= */}

        <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">

          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

            <div>

              <div className="mb-3 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-400">
                <span className="h-px w-7 bg-emerald-500" />
                Popular right now
              </div>

              <h2 className="max-w-3xl text-3xl font-black tracking-[-0.05em] text-slate-950 dark:text-white sm:text-5xl">
                Start with the jobs people book most.
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">
                A focused set of everyday services. Need something else?
                The full service list is one tap away.
              </p>

            </div>

            <Link
              to="/services"
              className="group inline-flex items-center gap-2 text-sm font-black text-emerald-700 transition hover:text-emerald-600 dark:text-emerald-400"
            >
              View all services

              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-1"
              />
            </Link>

          </div>

          {/* Service Cards */}

          <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {featuredServices.map(
              ([name, image, description, price], index) => (
                <Link
                  key={name}
                  to={`/book-service?service=${encodeURIComponent(name)}`}
                  className="group relative overflow-hidden rounded-[24px] border border-slate-200 bg-white p-2 shadow-[0_8px_30px_rgba(15,23,42,.04)] transition duration-300 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-[0_22px_45px_rgba(15,23,42,.10)] dark:border-slate-800 dark:bg-[#111b18] dark:hover:border-emerald-500/30"
                >

                  <div className="relative overflow-hidden rounded-[19px] bg-slate-100 dark:bg-[#18221f]">

                    <img
                      src={image}
                      alt={name}
                      className="h-48 w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-60 transition group-hover:opacity-80" />

                    <span className="absolute left-3 top-3 rounded-full border border-white/60 bg-white/90 px-3 py-1.5 text-[9px] font-black text-slate-800 shadow-sm backdrop-blur-md dark:bg-[#111b18]/90 dark:text-white">
                      From {price}
                    </span>

                    <span className="absolute bottom-3 right-3 grid h-10 w-10 translate-y-2 place-items-center rounded-full bg-white text-slate-900 opacity-0 shadow-lg transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <ArrowUpRight size={17} />
                    </span>

                  </div>

                  <div className="px-2 pb-3 pt-4">

                    <div className="flex items-start justify-between gap-3">

                      <div>

                        <span className="mb-1 block text-[9px] font-black uppercase tracking-[0.16em] text-emerald-600">
                          0{index + 1}
                        </span>

                        <h3 className="text-base font-black text-slate-950 dark:text-white">
                          {name}
                        </h3>

                      </div>

                      <ArrowRight
                        size={16}
                        className="mt-2 shrink-0 text-slate-300 transition duration-300 group-hover:translate-x-1 group-hover:text-emerald-500"
                      />

                    </div>

                    <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                      {description}
                    </p>

                  </div>

                </Link>
              )
            )}

          </div>
        </section>

        {/* ================= QUICK PICKS ================= */}

        <section className="border-y border-slate-200 bg-[#edf3f0] dark:border-slate-800 dark:bg-[#0c1713]">

          <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">

            <div className="flex items-end justify-between gap-4">

              <div>

                <div className="mb-3 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-400">
                  <Sparkles size={14} />
                  Quick picks
                </div>

                <h2 className="text-3xl font-black tracking-[-0.045em] text-slate-950 dark:text-white sm:text-4xl">
                  Choose by what you need today.
                </h2>

              </div>

            </div>

            <div className="mt-7 grid gap-4 md:grid-cols-3">

              {quickPicks.map(
                ([title, description, link, tag, Icon]) => (
                  <Link
                    key={title}
                    to={link}
                    className="group relative overflow-hidden rounded-[24px] border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1.5 hover:border-emerald-200 hover:shadow-[0_20px_40px_rgba(15,23,42,.08)] dark:border-slate-800 dark:bg-[#111b18] dark:hover:border-emerald-500/30"
                  >

                    <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-emerald-100/70 transition duration-500 group-hover:scale-150 dark:bg-emerald-500/10" />

                    <div className="relative z-10">

                      <div className="flex items-start justify-between">

                        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-700 transition duration-300 group-hover:rotate-[-6deg] group-hover:scale-105 dark:bg-emerald-500/10 dark:text-emerald-300">
                          <Icon size={20} />
                        </span>

                        <span className="rounded-full bg-slate-100 px-3 py-1.5 text-[9px] font-black uppercase tracking-wide text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                          {tag}
                        </span>

                      </div>

                      <div className="mt-9">

                        <div className="flex items-center justify-between gap-3">

                          <h3 className="text-lg font-black text-slate-950 dark:text-white">
                            {title}
                          </h3>

                          <ArrowRight
                            size={17}
                            className="text-slate-300 transition duration-300 group-hover:translate-x-1 group-hover:text-emerald-500"
                          />

                        </div>

                        <p className="mt-2 max-w-sm text-xs leading-5 text-slate-500 dark:text-slate-400">
                          {description}
                        </p>

                      </div>

                    </div>

                  </Link>
                )
              )}

            </div>
          </div>
        </section>

        {/* ================= WHY FIXMATE ================= */}

        <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">

          <div className="grid gap-5 lg:grid-cols-[.82fr_1.18fr]">

            {/* Why FixMate */}

            <div className="group relative overflow-hidden rounded-[30px] bg-[#0d2b23] p-7 text-white shadow-[0_20px_50px_rgba(7,40,31,.14)] sm:p-9">

              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-300/10 transition duration-700 group-hover:scale-125" />

              <div className="absolute bottom-0 right-0 h-32 w-32 rounded-tl-full bg-emerald-300/5" />

              <div className="relative z-10">

                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-300 text-emerald-950 transition duration-300 group-hover:rotate-6 group-hover:scale-105">
                  <Wrench size={21} />
                </div>

                <p className="mt-9 text-[10px] font-black uppercase tracking-[0.18em] text-emerald-300">
                  Why FixMate
                </p>

                <h2 className="mt-3 max-w-md text-4xl font-black leading-[1.02] tracking-[-0.05em] sm:text-5xl">
                  Less searching.

                  <span className="block text-emerald-300">
                    More fixing.
                  </span>
                </h2>

                <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
                  The booking flow keeps your service, location, problem and
                  preferred time together so the request is clear.
                </p>

                <Link
                  to="/services"
                  className="group/link mt-8 inline-flex items-center gap-2 text-sm font-black text-white transition hover:text-emerald-300"
                >
                  See every service

                  <ArrowRight
                    size={16}
                    className="transition group-hover/link:translate-x-1"
                  />
                </Link>

              </div>
            </div>

            {/* How It Works */}

            <div>

              <div className="mb-5">

                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-400">
                  How it works
                </p>

                <h2 className="mt-2 text-3xl font-black tracking-[-0.045em] text-slate-950 dark:text-white sm:text-4xl">
                  Simple from the first click.
                </h2>

              </div>

              <div className="grid gap-3 sm:grid-cols-3">

                {steps.map(
                  ([number, title, description], index) => (
                    <div
                      key={number}
                      className="group relative min-h-[220px] overflow-hidden rounded-[22px] border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_18px_35px_rgba(15,23,42,.07)] dark:border-slate-800 dark:bg-[#111b18] dark:hover:border-emerald-500/30"
                    >

                      <div className="flex items-center justify-between">

                        <span className="text-xs font-black text-emerald-700 dark:text-emerald-400">
                          {number}
                        </span>

                        <span className="text-[10px] font-bold text-slate-300 dark:text-slate-600">
                          0{index + 1}
                        </span>

                      </div>

                      <div className="mt-14">

                        <h3 className="text-base font-black text-slate-950 dark:text-white">
                          {title}
                        </h3>

                        <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
                          {description}
                        </p>

                      </div>

                      <div className="absolute bottom-0 left-0 h-1 w-0 bg-emerald-400 transition-all duration-500 group-hover:w-full" />

                    </div>
                  )
                )}

              </div>
            </div>

          </div>
        </section>

        {/* ================= FINAL CTA ================= */}

        <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">

          <div className="group relative overflow-hidden rounded-[30px] bg-[#07805f] px-6 py-9 text-white shadow-[0_20px_50px_rgba(7,128,95,.18)] sm:px-10 sm:py-11">

            <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-white/10 transition duration-700 group-hover:scale-125" />

            <div className="absolute -bottom-28 left-1/3 h-60 w-60 rounded-full border-[35px] border-white/[0.04]" />

            <div className="relative z-10 flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">

              <div>

                <div className="flex items-center gap-2 text-xs font-black">
                  <CalendarCheck2 size={15} />
                  Ready when your home needs us.
                </div>

                <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                  Need a service today?
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-6 text-emerald-50">
                  Browse all FixMate services and choose the one that fits the
                  job.
                </p>

              </div>

              {/* Fixed CTA button */}

              <Link
                    to="/book-service"
                    className="group/btn inline-flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-black px-6 py-3.5 text-sm font-black text-slate-900 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:bg-emerald-50 hover:shadow-lg dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:border-emerald-300/40 dark:hover:bg-white/15"
                  >
                    View All Services

                    <ArrowUpRight
                      size={17}
                      className="transition duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                    />
                  </Link>

            </div>
          </div>
        </section>

      </main>
    </Layout>
  );
}