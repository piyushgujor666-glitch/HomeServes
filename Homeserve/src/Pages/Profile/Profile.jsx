import { Link,NavLink } from "react-router-dom";
import {
  ArrowRight,
  Bell,
  CalendarDays,
  Check,
  ChevronRight,
  Home,
  LogOut,
  MapPin,
  Pencil,
  Phone,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import Layout from "../../Components/Layout.jsx";

const contactDetails = [
  ["Full name", "Piyush Gujor"],
  ["Mobile", "+91 99980 91751"],
  ["Email", "piyush@example.com"],
  ["Member since", "2026"],
];

const homeAddress = [
  ["State", "Gujarat"],
  ["City / District", "Palanpur"],
  ["Village / Area", "Palanpur Village"],
  ["PIN code", "385001"],
];

export default function Profile() {
  return (
    <Layout>
      <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#07110e] dark:text-white">

        {/* PAGE */}

        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-10">

          {/* PROFILE HERO */}

          <section className="relative overflow-hidden rounded-[32px] bg-[#092c24] text-white shadow-[0_20px_60px_rgba(9,44,36,0.16)]">

            <div className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-emerald-300/10" />

            <div className="absolute -bottom-36 left-[35%] h-80 w-80 rounded-full border-[60px] border-white/[0.035]" />

            <div className="absolute right-[22%] top-1/2 h-32 w-32 rounded-full bg-teal-300/5 blur-3xl" />

            <div className="relative p-6 sm:p-8 lg:p-10">

              <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                {/* USER */}

                <div className="flex items-center gap-5">

                  <div className="relative">

                    <div className="grid h-20 w-20 place-items-center rounded-[26px] bg-emerald-300 text-3xl font-black text-emerald-950 shadow-xl shadow-black/10 ring-4 ring-white/10 sm:h-24 sm:w-24 sm:text-4xl">
                      P
                    </div>

                    <div className="absolute -bottom-1 -right-1 grid h-7 w-7 place-items-center rounded-full border-4 border-[#092c24] bg-emerald-400 text-emerald-950">
                      <Check size={13} strokeWidth={3} />
                    </div>

                  </div>

                  <div>

                    <div className="flex flex-wrap items-center gap-2">

                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-300">
                        FixMate customer
                      </span>

                      <span className="rounded-full bg-white/10 px-2.5 py-1 text-[9px] font-black text-emerald-100 ring-1 ring-white/10">
                        VERIFIED
                      </span>

                    </div>

                    <h1 className="mt-2 text-3xl font-black tracking-[-0.05em] sm:text-4xl">
                      Piyush Gujor
                    </h1>

                    <p className="mt-2 max-w-md text-xs leading-5 text-slate-300">
                      Manage your personal details, service address and FixMate
                      activity from one place.
                    </p>

                  </div>

                </div>

                {/* ACTIONS */}

                <div className="flex flex-col gap-3 sm:flex-row">

                  <Link
                    to="/bookings"
                    className="group/btn inline-flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-black px-6 py-3.5 text-sm font-black text-slate-900 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:bg-emerald-50 hover:shadow-lg dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:border-emerald-300/40 dark:hover:bg-white/15"
                  >
                    My Bookings

                    <ArrowRight
                      size={17}
                      className="transition duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                    />
                  </Link>

                  <Link
                    to="/services"
                    className="group inline-flex min-h-[50px] items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-5 text-xs font-black text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
                  >
                    Book a service
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>

                </div>

              </div>

              {/* HERO STATS */}

              <div className="mt-8 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-3">

                <HeroStat
                  icon={ShieldCheck}
                  label="Account"
                  value="Ready"
                />

                <HeroStat
                  icon={MapPin}
                  label="Service area"
                  value="Palanpur"
                />

                <HeroStat
                  icon={CalendarDays}
                  label="Member since"
                  value="2026"
                />

              </div>

            </div>

          </section>

          {/* CONTENT */}

          <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_350px]">

            {/* LEFT */}

            <div className="space-y-6">

              {/* CONTACT */}

              <section className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_10px_40px_rgba(15,23,42,0.045)] dark:border-slate-800 dark:bg-[#111b18]">

                <div className="flex flex-col gap-4 border-b border-slate-100 p-6 dark:border-slate-800 sm:flex-row sm:items-center sm:justify-between">

                  <div className="flex items-center gap-4">

                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
                      <UserRound size={20} />
                    </div>

                    <div>

                      <p className="text-[10px] font-black uppercase tracking-[0.16em] text-emerald-700 dark:text-emerald-400">
                        Personal details
                      </p>

                      <h2 className="mt-1 text-lg font-black tracking-[-0.03em]">
                        Contact information
                      </h2>

                    </div>

                  </div>

                  <button
                    type="button"
                    className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 text-xs font-black text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700 dark:border-slate-700 dark:bg-[#18221f] dark:text-slate-300 dark:hover:border-emerald-500/30 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400"
                  >
                    <Pencil size={13} />
                    Edit details
                  </button>

                </div>

                <div className="p-5 sm:p-6">

                  <div className="grid gap-3 sm:grid-cols-2">

                    {contactDetails.map(([label, value]) => (
                      <ContactCard
                        key={label}
                        label={label}
                        value={value}
                      />
                    ))}

                  </div>

                </div>

              </section>

              {/* ADDRESS */}

              <section className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_10px_40px_rgba(15,23,42,0.045)] dark:border-slate-800 dark:bg-[#111b18]">

                <div className="flex flex-col gap-4 border-b border-slate-100 p-6 dark:border-slate-800 sm:flex-row sm:items-center sm:justify-between">

                  <div className="flex items-center gap-4">

                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
                      <Home size={20} />
                    </div>

                    <div>

                      <p className="text-[10px] font-black uppercase tracking-[0.16em] text-emerald-700 dark:text-emerald-400">
                        Service address
                      </p>

                      <h2 className="mt-1 text-lg font-black tracking-[-0.03em]">
                        Your home
                      </h2>

                    </div>

                  </div>

                  <button
                    type="button"
                    className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl bg-emerald-50 px-4 text-xs font-black text-emerald-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-400 dark:hover:bg-emerald-500/15"
                  >
                    <Pencil size={13} />
                    Edit address
                  </button>

                </div>

                <div className="p-5 sm:p-6">

                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">

                    {homeAddress.map(([label, value]) => (
                      <AddressCard
                        key={label}
                        label={label}
                        value={value}
                      />
                    ))}

                  </div>

                  <div className="mt-4 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-5 dark:border-emerald-500/15 dark:bg-emerald-500/5">

                    <div className="flex items-start gap-4">

                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-emerald-700 shadow-sm dark:bg-[#18221f] dark:text-emerald-400">
                        <MapPin size={18} />
                      </div>

                      <div className="min-w-0">

                        <div className="flex flex-wrap items-center gap-2">

                          <p className="text-[10px] font-black uppercase tracking-[0.14em] text-emerald-700 dark:text-emerald-400">
                            Home address
                          </p>

                          <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[8px] font-black text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
                            PRIMARY
                          </span>

                        </div>

                        <p className="mt-2 text-sm font-bold leading-6 text-slate-700 dark:text-slate-200">
                          Add your house or flat number, building, street and a
                          useful landmark from the booking form.
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </section>

            </div>

            {/* RIGHT */}

            <aside className="space-y-6">

              {/* ACCOUNT CARD */}

              <section className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_10px_40px_rgba(15,23,42,0.045)] dark:border-slate-800 dark:bg-[#111b18]">

                <div className="bg-gradient-to-br from-emerald-50 to-white p-6 dark:from-emerald-500/10 dark:to-[#111b18]">

                  <div className="flex items-center justify-between">

                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-emerald-700 shadow-sm dark:bg-[#18221f] dark:text-emerald-400">
                      <ShieldCheck size={21} />
                    </div>

                    <span className="flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1.5 text-[9px] font-black text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      READY
                    </span>

                  </div>

                  <h2 className="mt-5 text-xl font-black tracking-[-0.03em]">
                    Account ready
                  </h2>

                  <p className="mt-2 text-xs leading-6 text-slate-500 dark:text-slate-400">
                    Your profile contains the important details needed for a
                    smoother service booking.
                  </p>

                </div>

                <div className="space-y-3 p-5">

                  <StatusItem
                    icon={UserRound}
                    text="Personal details"
                  />

                  <StatusItem
                    icon={Phone}
                    text="Mobile number"
                  />

                  <StatusItem
                    icon={MapPin}
                    text="Service location"
                  />

                </div>

              </section>

              {/* QUICK ACTIONS */}

              <section>

                <p className="mb-3 px-1 text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">
                  Quick actions
                </p>

                <div className="space-y-3">

                  <ActionCard
                    to="/bookings"
                    icon={CalendarDays}
                    title="My bookings"
                    text="Check upcoming and completed services."
                  />

                  <ActionCard
                    to="/notifications"
                    icon={Bell}
                    title="Notifications"
                    text="See your latest FixMate updates."
                  />

                </div>

              </section>

              {/* SIGN OUT */}

              <button
                type="button"
                className="group flex w-full items-center gap-4 rounded-[22px] border border-red-100 bg-red-50 p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:bg-red-100 hover:shadow-md dark:border-red-500/15 dark:bg-red-500/5 dark:hover:border-red-500/25 dark:hover:bg-red-500/10"
              >

                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-red-600 shadow-sm dark:bg-red-500/10 dark:text-red-400">
                  <LogOut size={18} />
                </div>

                <div className="flex-1">
                  <NavLink
                  to="/login">

                  <p className="text-sm font-black text-red-700 dark:text-red-400">
                    Sign out
                  </p>

                  <p className="mt-1 text-[10px] text-red-600/60 dark:text-red-300/60">
                    Leave this FixMate account.
                  </p>

                  </NavLink>

                </div>

                <ChevronRight
                  size={17}
                  className="text-red-400 transition-transform duration-300 group-hover:translate-x-1"
                />

              </button>

            </aside>

          </div>

        </div>

      </main>
    </Layout>
  );
}

/* ============================================================
   HERO STAT
============================================================ */

function HeroStat({
  icon: Icon,
  label,
  value,
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white/[0.06] p-4 transition-all duration-300 hover:bg-white/[0.10]">

      <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-emerald-300">
        <Icon size={17} />
      </div>

      <div>

        <p className="text-[9px] font-black uppercase tracking-[0.12em] text-slate-400">
          {label}
        </p>

        <p className="mt-1 text-sm font-black">
          {value}
        </p>

      </div>

    </div>
  );
}

/* ============================================================
   CONTACT CARD
============================================================ */

function ContactCard({
  label,
  value,
}) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-emerald-50/40 hover:shadow-sm dark:border-slate-800 dark:bg-[#18221f] dark:hover:border-emerald-500/25 dark:hover:bg-emerald-500/5">

      <p className="text-[9px] font-black uppercase tracking-[0.12em] text-slate-400">
        {label}
      </p>

      <p className="mt-2 break-words text-sm font-black text-slate-800 dark:text-slate-100">
        {value}
      </p>

    </div>
  );
}

/* ============================================================
   ADDRESS CARD
============================================================ */

function AddressCard({
  label,
  value,
}) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-emerald-50/40 hover:shadow-sm dark:border-slate-800 dark:bg-[#18221f] dark:hover:border-emerald-500/25 dark:hover:bg-emerald-500/5">

      <p className="text-[9px] font-black uppercase tracking-[0.1em] text-slate-400">
        {label}
      </p>

      <p className="mt-2 break-words text-sm font-black text-slate-800 dark:text-slate-100">
        {value}
      </p>

    </div>
  );
}

/* ============================================================
   STATUS ITEM
============================================================ */

function StatusItem({
  icon: Icon,
  text,
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 dark:border-slate-800 dark:bg-[#18221f]">

      <div className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
        <Icon size={14} />
      </div>

      <span className="flex-1 text-xs font-bold text-slate-700 dark:text-slate-300">
        {text}
      </span>

      <Check
        size={15}
        className="text-emerald-600 dark:text-emerald-400"
      />

    </div>
  );
}

/* ============================================================
   ACTION CARD
============================================================ */

function ActionCard({
  to,
  icon: Icon,
  title,
  text,
}) {
  return (
    <Link
      to={to}
      className="group flex items-center gap-4 rounded-[22px] border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_12px_30px_rgba(15,23,42,0.07)] dark:border-slate-800 dark:bg-[#111b18] dark:hover:border-emerald-500/30"
    >

      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-emerald-50 text-emerald-700 transition-transform duration-300 group-hover:scale-105 dark:bg-emerald-500/10 dark:text-emerald-400">
        <Icon size={18} />
      </div>

      <div className="min-w-0 flex-1">

        <p className="text-sm font-black">
          {title}
        </p>

        <p className="mt-1 text-[10px] leading-5 text-slate-400">
          {text}
        </p>

      </div>

      <ChevronRight
        size={17}
        className="shrink-0 text-slate-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400"
      />

    </Link>
  );
}