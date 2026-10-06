import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  SlidersHorizontal,
  Star,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

import Layout from "../../Components/Layout.jsx";

import plumber from "../../assets/Plumber.png";
import cleaning from "../../assets/cleaning.png";
import electrician from "../../assets/electrician.png";
import painting from "../../assets/Painting.png";
import ac from "../../assets/Acrepair.png";
import carpentry from "../../assets/Crpantry.png";
import appliance from "../../assets/repairappliance.png";
import pest from "../../assets/PestControl.png";
import purifier from "../../assets/WaterPurifierService.png";
import locksmith from "../../assets/Locksmith.png";

const services = [
  {
    name: "Plumbing",
    img: plumber,
    desc: "Leaks, taps, pipes, fittings and common water issues.",
    price: "₹299",
    rating: "4.8",
    tag: "Most booked",
  },
  {
    name: "Cleaning",
    img: cleaning,
    desc: "Deep cleaning, kitchen, bathroom and regular home cleaning.",
    price: "₹399",
    rating: "4.7",
    tag: "Popular",
  },
  {
    name: "Electrical",
    img: electrician,
    desc: "Switches, fans, lights, wiring and home electrical repairs.",
    price: "₹249",
    rating: "4.8",
    tag: "Verified",
  },
  {
    name: "Painting",
    img: painting,
    desc: "Room painting, touch-ups and clean professional finishes.",
    price: "₹699",
    rating: "4.6",
    tag: "",
  },
  {
    name: "AC Repair",
    img: ac,
    desc: "AC service, cooling problems, installation and maintenance.",
    price: "₹499",
    rating: "4.8",
    tag: "Popular",
  },
  {
    name: "Carpentry",
    img: carpentry,
    desc: "Furniture repair, shelves, doors and custom woodwork.",
    price: "₹349",
    rating: "4.6",
    tag: "",
  },
  {
    name: "Appliance Repair",
    img: appliance,
    desc: "Repair support for common household appliances.",
    price: "₹299",
    rating: "4.5",
    tag: "",
  },
  {
    name: "Pest Control",
    img: pest,
    desc: "Home pest treatment designed for everyday household needs.",
    price: "₹599",
    rating: "4.7",
    tag: "",
  },
  {
    name: "Water Purifier",
    img: purifier,
    desc: "RO/purifier service, filter checks and maintenance.",
    price: "₹299",
    rating: "4.7",
    tag: "",
  },
  {
    name: "Locksmith",
    img: locksmith,
    desc: "Lock repair, replacement and urgent access support.",
    price: "₹249",
    rating: "4.6",
    tag: "",
  },
];

export default function Service() {
  const [q, setQ] = useState("");
  const [sort, setSort] = useState("recommended");

  const filtered = useMemo(() => {
    const result = services.filter((service) =>
      service.name.toLowerCase().includes(q.toLowerCase())
    );

    if (sort === "price") {
      return [...result].sort(
        (a, b) =>
          Number(a.price.replace("₹", "")) -
          Number(b.price.replace("₹", ""))
      );
    }

    if (sort === "rating") {
      return [...result].sort(
        (a, b) => Number(b.rating) - Number(a.rating)
      );
    }

    return result;
  }, [q, sort]);

  return (
    <Layout>
      <main className="min-h-screen bg-[#f7f9f8] text-slate-900 dark:bg-[#07110e] dark:text-white">

        {/* ================= HEADER ================= */}

        <section className="mx-auto max-w-7xl px-4 pb-8 pt-8 sm:px-6 lg:px-8 lg:pb-12 lg:pt-12">

          <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end">

            {/* Heading */}

            <div>

              <div className="mb-4 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400">

                <span className="h-px w-7 bg-emerald-500" />

                FixMate Services

              </div>

              <h1 className="max-w-3xl text-[42px] font-black leading-[.98] tracking-[-0.06em] text-slate-950 dark:text-white sm:text-6xl">

                Find the right service
                <span className="block text-emerald-600 dark:text-emerald-400">
                  for your home.
                </span>

              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500 dark:text-slate-400 sm:text-base">

                From quick repairs to regular home maintenance, choose a
                service and book it when it works for you.

              </p>

            </div>

            {/* Small trust card */}

            <div className="hidden rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-[#111b18] lg:block">

              <div className="flex items-center gap-3">

                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
                  <CheckCircle2 size={20} />
                </div>

                <div>
                  <p className="text-sm font-black">
                    Simple, clear booking
                  </p>

                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    Choose a service and tell us what you need.
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* ================= SEARCH BAR ================= */}

          <div className="mt-8 rounded-[24px] border border-slate-200 bg-white p-2 shadow-[0_12px_35px_rgba(15,23,42,.06)] dark:border-slate-800 dark:bg-[#111b18]">

            <div className="flex flex-col gap-2 lg:flex-row">

              {/* Search */}

              <div className="relative flex-1">

                <Search
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search plumbing, cleaning, AC..."
                  className="h-14 w-full rounded-[18px] border-0 bg-slate-50 pl-12 pr-4 text-sm font-semibold text-slate-900 outline-none transition placeholder:text-slate-400 focus:bg-emerald-50/60 dark:bg-[#18221f] dark:text-white dark:placeholder:text-slate-500 dark:focus:bg-emerald-500/5"
                />

              </div>

              {/* Sort */}

              <div className="relative lg:w-[210px]">

                <SlidersHorizontal
                  size={17}
                  className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-slate-400"
                />

                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="h-14 w-full appearance-none rounded-[18px] border-0 bg-slate-50 pl-11 pr-4 text-sm font-bold text-slate-800 outline-none transition focus:bg-emerald-50/60 dark:bg-[#18221f] dark:text-white dark:focus:bg-emerald-500/5"
                >
                  <option value="recommended">
                    Recommended
                  </option>

                  <option value="price">
                    Lowest price
                  </option>

                  <option value="rating">
                    Top rated
                  </option>
                </select>

              </div>

            </div>

          </div>

          {/* Results count */}

          <div className="mt-6 flex items-center justify-between">

            <p className="text-xs font-bold text-slate-500 dark:text-slate-400">
              {filtered.length}{" "}
              {filtered.length === 1 ? "service" : "services"} available
            </p>

            {q && (
              <button
                onClick={() => setQ("")}
                className="text-xs font-black text-emerald-700 transition hover:text-emerald-500 dark:text-emerald-400"
              >
                Clear search
              </button>
            )}

          </div>

        </section>

        {/* ================= SERVICE GRID ================= */}

        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">

          {filtered.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

              {filtered.map((service, index) => (

                <div
                  key={service.name}
                  className="group overflow-hidden rounded-[26px] border border-slate-200 bg-white p-2 shadow-[0_8px_30px_rgba(15,23,42,.04)] transition duration-300 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-[0_24px_50px_rgba(15,23,42,.10)] dark:border-slate-800 dark:bg-[#111b18] dark:hover:border-emerald-500/30"
                >

                  {/* ================= IMAGE ================= */}

                  <div className="relative overflow-hidden rounded-[21px] bg-slate-100 dark:bg-[#18221f]">

                    <img
                      src={service.img}
                      alt={service.name}
                      className="h-[230px] w-full object-cover transition duration-700 ease-out group-hover:scale-110"
                    />

                    {/* Overlay */}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-50 transition duration-300 group-hover:opacity-80" />

                    {/* Tag */}

                    {service.tag && (
                      <span className="absolute left-4 top-4 rounded-full border border-white/50 bg-white/95 px-3 py-1.5 text-[9px] font-black uppercase tracking-wide text-emerald-800 shadow-lg backdrop-blur-md dark:bg-[#111b18]/95 dark:text-emerald-300">
                        {service.tag}
                      </span>
                    )}

                    {/* Number */}

                    <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-white/30 bg-black/20 text-[10px] font-black text-white backdrop-blur-md">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Hover arrow */}

                    <div className="absolute bottom-4 right-4 grid h-11 w-11 translate-y-3 place-items-center rounded-full bg-white text-slate-900 opacity-0 shadow-xl transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <ArrowRight size={18} />
                    </div>

                  </div>

                  {/* ================= CONTENT ================= */}

                  <div className="px-3 pb-3 pt-5">

                    <div className="flex items-start justify-between gap-4">

                      <div>

                        <h2 className="text-lg font-black tracking-[-0.02em] text-slate-950 dark:text-white">
                          {service.name}
                        </h2>

                        <div className="mt-2 flex items-center gap-2">

                          <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-1 text-[10px] font-black text-amber-700 dark:bg-amber-500/10 dark:text-amber-300">

                            <Star
                              size={11}
                              fill="currentColor"
                            />

                            {service.rating}

                          </span>

                          <span className="text-[10px] font-semibold text-slate-400">
                            Customer rating
                          </span>

                        </div>

                      </div>

                    </div>

                    <p className="mt-3 min-h-[42px] text-xs leading-5 text-slate-500 dark:text-slate-400">
                      {service.desc}
                    </p>

                    {/* Bottom */}

                    <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-800">

                      <div>

                        <p className="text-[9px] font-black uppercase tracking-[0.14em] text-slate-400">
                          Starting from
                        </p>

                        <p className="mt-1 text-lg font-black text-slate-950 dark:text-white">
                          {service.price}
                        </p>

                      </div>

                      <Link
                        to={`/book-service?service=${encodeURIComponent(
                          service.name
                        )}`}
                        className="group/book inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-black text-white transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-lg dark:bg-emerald-400 dark:text-emerald-950 dark:hover:bg-emerald-300"
                      >
                        Book now

                        <ArrowRight
                          size={14}
                          className="transition duration-300 group-hover/book:translate-x-1"
                        />
                      </Link>

                    </div>

                  </div>

                </div>

              ))}

            </div>
          ) : (

            /* ================= EMPTY STATE ================= */

            <div className="mx-auto max-w-xl rounded-[28px] border border-dashed border-slate-300 bg-white px-6 py-14 text-center dark:border-slate-700 dark:bg-[#111b18]">

              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
                <Search size={23} />
              </div>

              <h2 className="mt-5 text-xl font-black text-slate-950 dark:text-white">
                No service found
              </h2>

              <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500 dark:text-slate-400">
                We couldn't find a service matching your search. Try another
                service name.
              </p>

              <button
                onClick={() => setQ("")}
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-xs font-black text-white transition hover:bg-emerald-700 dark:bg-emerald-400 dark:text-emerald-950 dark:hover:bg-emerald-300"
              >
                Show all services
                <ArrowRight size={15} />
              </button>

            </div>

          )}

        </section>

        {/* ================= BOTTOM CTA ================= */}

        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">

          <div className="group relative overflow-hidden rounded-[30px] bg-[#0b2b23] px-6 py-9 text-white shadow-[0_20px_50px_rgba(7,40,31,.15)] sm:px-10 sm:py-11">

            {/* Decorative glow */}

            <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-emerald-300/10 transition duration-700 group-hover:scale-125" />

            <div className="absolute -bottom-24 left-1/3 h-52 w-52 rounded-full border-[30px] border-emerald-300/[0.04]" />

            <div className="relative z-10 flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">

              <div>

                <div className="flex items-center gap-2 text-xs font-black text-emerald-300">
                  <Sparkles size={15} />
                  Can't decide where to start?
                </div>

                <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                  Tell us what needs fixing.
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300">
                  Choose a service, share the problem and pick a convenient
                  time.
                </p>

              </div>

              <Link
                    to="/book-service"
                    className="group/btn inline-flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-black px-6 py-3.5 text-sm font-black text-slate-900 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:bg-emerald-50 hover:shadow-lg dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:border-emerald-300/40 dark:hover:bg-white/15"
                  >
                    Start Booking

                    <ArrowRight
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