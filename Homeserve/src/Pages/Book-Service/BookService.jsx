import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  FileText,
  Home,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  UserRound,
  Wrench,
} from "lucide-react";
import Layout from "../../Components/Layout.jsx";

const services = [
  "Plumbing",
  "Cleaning",
  "Electrical",
  "Painting",
  "AC Repair",
  "Carpentry",
  "Appliance Repair",
  "Pest Control",
  "Water Purifier",
  "Locksmith",
];

const prices = {
  Plumbing: "₹299",
  Cleaning: "₹399",
  Electrical: "₹249",
  Painting: "₹699",
  "AC Repair": "₹499",
  Carpentry: "₹349",
  "Appliance Repair": "₹299",
  "Pest Control": "₹599",
  "Water Purifier": "₹299",
  Locksmith: "₹249",
};

const slots = [
  "09:00 AM – 11:00 AM",
  "11:00 AM – 01:00 PM",
  "02:00 PM – 04:00 PM",
  "05:00 PM – 07:00 PM",
];

export default function BookService() {
  const [params] = useSearchParams();

  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [service, setService] = useState(
    params.get("service") || "Plumbing"
  );

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [problem, setProblem] = useState("");

  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [village, setVillage] = useState("");
  const [pincode, setPincode] = useState("");
  const [address, setAddress] = useState("");

  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");

  const price = prices[service] || "₹299";
  const today = new Date().toISOString().split("T")[0];

  const goNext = () => {
    if (step === 1) {
      if (
        !service ||
        !name.trim() ||
        mobile.length !== 10 ||
        !problem.trim()
      ) {
        return;
      }
    }

    if (step === 2) {
      if (
        !state.trim() ||
        !city.trim() ||
        !village.trim() ||
        !/^\d{6}$/.test(pincode) ||
        !address.trim()
      ) {
        return;
      }
    }

    setStep((current) => Math.min(current + 1, 3));
  };

  const goBack = () => {
    setStep((current) => Math.max(current - 1, 1));
  };

  const confirmBooking = () => {
    if (!date || !slot) {
      return;
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Layout>
        <main className="min-h-screen bg-slate-50 px-4 py-10 text-slate-900 dark:bg-[#07110e] dark:text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="overflow-hidden rounded-[34px] border border-slate-200 bg-white shadow-[0_25px_80px_rgba(15,23,42,0.10)] dark:border-slate-800 dark:bg-[#111b18]">

              <div className="relative overflow-hidden bg-[#087f68] px-6 py-16 text-center text-white sm:px-10">

                <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/10" />

                <div className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full border-[55px] border-white/[0.04]" />

                <div className="relative">

                  <div className="mx-auto grid h-24 w-24 place-items-center rounded-[28px] bg-white/15 ring-1 ring-white/20">
                    <Check size={45} />
                  </div>

                  <p className="mt-7 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-100">
                    Booking request received
                  </p>

                  <h1 className="mt-3 text-3xl font-black tracking-[-0.05em] sm:text-5xl">
                    You're all set, {name.split(" ")[0]}!
                  </h1>

                  <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-emerald-50">
                    Your {service.toLowerCase()} request has been prepared
                    with your selected date, time and location.
                  </p>

                </div>
              </div>

              <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-8">

                <ResultCard
                  icon={Wrench}
                  title="Service"
                  value={service}
                  detail={`Starting from ${price}`}
                />

                <ResultCard
                  icon={CalendarDays}
                  title="Schedule"
                  value={date}
                  detail={slot}
                />

                <ResultCard
                  icon={MapPin}
                  title="Location"
                  value={`${village}, ${city}`}
                  detail={`${state} • ${pincode}`}
                />

                <ResultCard
                  icon={Phone}
                  title="Contact"
                  value={`+91 ${mobile}`}
                  detail={name}
                />

              </div>

              <div className="border-t border-slate-100 p-5 dark:border-slate-800 sm:p-8">

                <div className="rounded-2xl bg-slate-50 p-5 dark:bg-[#18221f]">

                  <div className="flex items-center gap-2">

                    <Home
                      size={17}
                      className="text-emerald-600 dark:text-emerald-400"
                    />

                    <p className="text-xs font-black">
                      Service address
                    </p>

                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {address}
                  </p>

                </div>

                <Link
                  to="/bookings"
                  className="group mt-5 flex h-14 items-center justify-center gap-3 rounded-2xl bg-emerald-600 text-sm font-black text-white shadow-lg shadow-emerald-600/20 transition duration-300 hover:-translate-y-1 hover:bg-emerald-700 hover:shadow-xl dark:bg-emerald-400 dark:text-emerald-950 dark:hover:bg-emerald-300"
                >
                  View my bookings

                  <ArrowRight
                    size={18}
                    className="transition duration-300 group-hover:translate-x-1"
                  />
                </Link>

              </div>

            </div>
          </div>
        </main>
      </Layout>
    );
  }

  return (
    <Layout>
      <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#07110e] dark:text-white">

        {/* TOP */}

        <section className="mx-auto max-w-7xl px-4 pb-6 pt-7 sm:px-6 lg:px-8 lg:pt-10">

          <Link
            to="/services"
            className="group inline-flex items-center gap-2 text-xs font-black text-emerald-700 transition-all duration-300 hover:gap-3 dark:text-emerald-400"
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />

            Back to services
          </Link>

          {/* PROGRESS */}

          <div className="mt-8 flex items-center">

            <ProgressStep
              number="1"
              label="Your service"
              active={step >= 1}
              current={step === 1}
            />

            <ProgressLine active={step >= 2} />

            <ProgressStep
              number="2"
              label="Your location"
              active={step >= 2}
              current={step === 2}
            />

            <ProgressLine active={step >= 3} />

            <ProgressStep
              number="3"
              label="Schedule"
              active={step >= 3}
              current={step === 3}
            />

          </div>

        </section>

        {/* CONTENT */}

        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">

          <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_360px]">

            {/* MAIN FORM */}

            <div className="overflow-hidden rounded-[34px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.07)] dark:border-slate-800 dark:bg-[#111b18]">

              {step === 1 && (
                <StepOne
                  service={service}
                  setService={setService}
                  name={name}
                  setName={setName}
                  mobile={mobile}
                  setMobile={setMobile}
                  problem={problem}
                  setProblem={setProblem}
                  price={price}
                  onNext={goNext}
                />
              )}

              {step === 2 && (
                <StepTwo
                  state={state}
                  setState={setState}
                  city={city}
                  setCity={setCity}
                  village={village}
                  setVillage={setVillage}
                  pincode={pincode}
                  setPincode={setPincode}
                  address={address}
                  setAddress={setAddress}
                  onBack={goBack}
                  onNext={goNext}
                />
              )}

              {step === 3 && (
                <StepThree
                  date={date}
                  setDate={setDate}
                  slot={slot}
                  setSlot={setSlot}
                  today={today}
                  service={service}
                  name={name}
                  onBack={goBack}
                  onConfirm={confirmBooking}
                />
              )}

            </div>

            {/* RIGHT SUMMARY */}

            <aside className="lg:sticky lg:top-24 lg:self-start">

              <BookingSummary
                service={service}
                price={price}
                name={name}
                mobile={mobile}
                state={state}
                city={city}
                village={village}
                pincode={pincode}
                address={address}
                date={date}
                slot={slot}
              />

            </aside>

          </div>

        </section>

      </main>
    </Layout>
  );
}

/* ============================================================
   STEP ONE
============================================================ */

function StepOne({
  service,
  setService,
  name,
  setName,
  mobile,
  setMobile,
  problem,
  setProblem,
  price,
  onNext,
}) {
  return (
    <div>

      <Header
        eyebrow="STEP 01 · SERVICE"
        title="What can we help you with?"
        description="Tell us about the job and we'll keep the rest simple."
      />

      <div className="space-y-10 p-6 sm:p-10 lg:p-12">

        {/* SERVICE */}

        <div>

          <Field label="Choose a service">

            <div className="relative">

              <select
                value={service}
                onChange={(event) => setService(event.target.value)}
                className="h-[62px] w-full appearance-none rounded-2xl border border-slate-200 bg-slate-50 px-5 pr-14 text-sm font-semibold text-slate-900 outline-none transition-all duration-200 hover:border-slate-300 focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 dark:border-slate-700 dark:bg-[#18221f] dark:text-white dark:hover:border-slate-600 dark:focus:border-emerald-400 dark:focus:bg-[#18221f]"
              >
                {services.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              <ChevronDown
                size={18}
                className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-slate-400"
              />

            </div>

          </Field>

          {/* SELECTED SERVICE */}

          <div className="mt-4 flex min-h-[80px] items-center justify-between rounded-2xl bg-emerald-50 px-5 py-4 transition duration-300 hover:bg-emerald-100/70 dark:bg-emerald-500/10 dark:hover:bg-emerald-500/15">

            <div className="flex items-center gap-4">

              <div className="grid h-12 w-12 place-items-center rounded-xl bg-white text-emerald-700 shadow-sm dark:bg-[#18221f] dark:text-emerald-400">
                <Wrench size={20} />
              </div>

              <div>

                <p className="text-sm font-black">
                  {service}
                </p>

                <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
                  Selected service
                </p>

              </div>

            </div>

            <div className="text-right">

              <p className="text-[9px] font-black uppercase tracking-wide text-slate-400">
                Starting from
              </p>

              <p className="text-lg font-black text-emerald-700 dark:text-emerald-400">
                {price}
              </p>

            </div>

          </div>

        </div>

        {/* CUSTOMER DETAILS */}

        <div>

          <SectionTitle
            icon={UserRound}
            title="Your details"
            text="So our professional knows who to meet."
          />

          <div className="mt-6 grid gap-6 sm:grid-cols-2">

            <Field label="Full name">

              <input
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Enter your full name"
                className="h-[62px] w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 text-sm font-semibold text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 dark:border-slate-700 dark:bg-[#18221f] dark:text-white dark:placeholder:text-slate-500 dark:hover:border-slate-600 dark:focus:border-emerald-400 dark:focus:bg-[#18221f]"
              />

            </Field>

            <Field label="Mobile number">

              <div className="flex h-[62px] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 transition-all duration-200 hover:border-slate-300 focus-within:border-emerald-400 focus-within:bg-white focus-within:ring-4 focus-within:ring-emerald-500/10 dark:border-slate-700 dark:bg-[#18221f] dark:hover:border-slate-600 dark:focus-within:border-emerald-400 dark:focus-within:bg-[#18221f]">

                <div className="flex w-[72px] shrink-0 items-center justify-center border-r border-slate-200 text-sm font-black text-slate-800 dark:border-slate-700 dark:text-white">
                  +91
                </div>

                <input
                  required
                  inputMode="numeric"
                  maxLength="10"
                  value={mobile}
                  onChange={(event) =>
                    setMobile(
                      event.target.value.replace(/\D/g, "")
                    )
                  }
                  placeholder="10-digit mobile number"
                  className="min-w-0 flex-1 bg-transparent px-5 text-sm font-semibold text-slate-900 outline-none placeholder:text-slate-400 dark:text-white dark:placeholder:text-slate-500"
                />

              </div>

            </Field>

          </div>

        </div>

        {/* PROBLEM */}

        <div>

          <SectionTitle
            icon={FileText}
            title="What needs fixing?"
            text="A little detail helps the professional prepare."
          />

          <textarea
            value={problem}
            onChange={(event) => setProblem(event.target.value)}
            placeholder="Tell us what is wrong, what you noticed, and anything the professional should know."
            className="mt-6 min-h-[200px] w-full resize-y rounded-[20px] border border-slate-200 bg-slate-50 px-5 py-5 text-sm font-medium leading-7 text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 dark:border-slate-700 dark:bg-[#18221f] dark:text-white dark:placeholder:text-slate-500 dark:hover:border-slate-600 dark:focus:border-emerald-400 dark:focus:bg-[#18221f]"
          />

          <p className="mt-3 text-[11px] text-slate-400">
            Example: "The AC is cooling slowly and making a strange noise."
          </p>

        </div>

        <NextButton onClick={onNext}>
          Continue to location
        </NextButton>

      </div>

    </div>
  );
}

/* ============================================================
   STEP TWO
============================================================ */

function StepTwo({
  state,
  setState,
  city,
  setCity,
  village,
  setVillage,
  pincode,
  setPincode,
  address,
  setAddress,
  onBack,
  onNext,
}) {
  return (
    <div>

      <Header
        eyebrow="STEP 02 · LOCATION"
        title="Where should we come?"
        description="Give us a clear location so your professional can find you without hassle."
      />

      <div className="space-y-9 p-6 sm:p-10 lg:p-12">

        {/* LOCATION INTRO */}

        <div className="rounded-[26px] border border-emerald-100 bg-emerald-50 p-5 transition duration-300 hover:border-emerald-200 dark:border-emerald-500/15 dark:bg-emerald-500/10">

          <div className="flex items-start gap-4">

            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white text-emerald-700 shadow-sm dark:bg-[#18221f] dark:text-emerald-400">
              <MapPin size={21} />
            </div>

            <div>

              <h3 className="text-sm font-black">
                Help us find your home
              </h3>

              <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                Add your area and a useful landmark. This helps the
                professional reach your door faster.
              </p>

            </div>

          </div>

        </div>

        {/* LOCATION FIELDS */}

        <div className="grid gap-6 sm:grid-cols-2">

          <Field label="State">

            <input
              value={state}
              onChange={(event) => setState(event.target.value)}
              placeholder="Enter your state"
              className="h-[62px] w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 text-sm font-semibold text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 dark:border-slate-700 dark:bg-[#18221f] dark:text-white dark:placeholder:text-slate-500 dark:hover:border-slate-600 dark:focus:border-emerald-400 dark:focus:bg-[#18221f]"
            />

          </Field>

          <Field label="City">

            <input
              value={city}
              onChange={(event) => setCity(event.target.value)}
              placeholder="Enter your city"
              className="h-[62px] w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 text-sm font-semibold text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 dark:border-slate-700 dark:bg-[#18221f] dark:text-white dark:placeholder:text-slate-500 dark:hover:border-slate-600 dark:focus:border-emerald-400 dark:focus:bg-[#18221f]"
            />

          </Field>

          <Field label="Village / Area">

            <input
              value={village}
              onChange={(event) => setVillage(event.target.value)}
              placeholder="Enter village or area"
              className="h-[62px] w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 text-sm font-semibold text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 dark:border-slate-700 dark:bg-[#18221f] dark:text-white dark:placeholder:text-slate-500 dark:hover:border-slate-600 dark:focus:border-emerald-400 dark:focus:bg-[#18221f]"
            />

          </Field>

          <Field label="PIN code">

            <input
              inputMode="numeric"
              maxLength="6"
              value={pincode}
              onChange={(event) =>
                setPincode(
                  event.target.value.replace(/\D/g, "")
                )
              }
              placeholder="6-digit PIN code"
              className="h-[62px] w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 text-sm font-semibold text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 dark:border-slate-700 dark:bg-[#18221f] dark:text-white dark:placeholder:text-slate-500 dark:hover:border-slate-600 dark:focus:border-emerald-400 dark:focus:bg-[#18221f]"
            />

          </Field>

        </div>

        {/* COMPLETE ADDRESS */}

        <div>

          <Field label="Complete home address">

            <div className="relative">

              <Home
                size={19}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-emerald-600 dark:text-emerald-400"
              />

              <input
                value={address}
                onChange={(event) => setAddress(event.target.value)}
                placeholder="House / flat, building, street, landmark"
                className="h-[64px] w-full rounded-2xl border border-slate-200 bg-slate-50 pl-14 pr-5 text-sm font-semibold text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 dark:border-slate-700 dark:bg-[#18221f] dark:text-white dark:placeholder:text-slate-500 dark:hover:border-slate-600 dark:focus:border-emerald-400 dark:focus:bg-[#18221f]"
              />

            </div>

          </Field>

          <p className="mt-3 text-[11px] text-slate-400">
            Add enough detail for the professional to find your door easily.
          </p>

        </div>

        {/* TIPS */}

        <div className="grid gap-4 sm:grid-cols-3">

          <Tip
            icon={Home}
            title="House number"
            text="Add your flat or house number."
          />

          <Tip
            icon={MapPin}
            title="Landmark"
            text="Add something easy to recognize."
          />

          <Tip
            icon={ShieldCheck}
            title="Private"
            text="Your details are used for this booking."
          />

        </div>

        {/* BUTTONS */}

        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">

          <BackButton onClick={onBack}>
            Back
          </BackButton>

          <NextButton
            onClick={onNext}
            className="sm:w-auto sm:min-w-[250px]"
          >
            Continue to schedule
          </NextButton>

        </div>

      </div>

    </div>
  );
}

/* ============================================================
   STEP THREE
============================================================ */

function StepThree({
  date,
  setDate,
  slot,
  setSlot,
  today,
  service,
  name,
  onBack,
  onConfirm,
}) {
  return (
    <div>

      <Header
        eyebrow="STEP 03 · SCHEDULE"
        title="When should we come?"
        description="Pick a convenient time. We'll use these details for your service request."
      />

      <div className="space-y-9 p-6 sm:p-10 lg:p-12">

        {/* ALMOST DONE */}

        <div className="relative overflow-hidden rounded-[26px] bg-[#092c24] p-6 text-white">

          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-emerald-300/10" />

          <div className="relative flex items-start gap-4">

            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-emerald-300 text-emerald-950">
              <CheckCircle2 size={22} />
            </div>

            <div>

              <p className="text-sm font-black">
                Almost there, {name.split(" ")[0]}!
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-300">
                Just choose when you'd like your {service.toLowerCase()} service.
              </p>

            </div>

          </div>

        </div>

        {/* DATE */}

        <div>

          <SectionTitle
            icon={CalendarDays}
            title="Choose a date"
            text="Select a day that works best for you."
          />

          <div className="relative mt-6">

            <CalendarDays
              size={18}
              className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-emerald-600 dark:text-emerald-400"
            />

            <input
              type="date"
              min={today}
              value={date}
              onChange={(event) => setDate(event.target.value)}
              className="h-[64px] w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 pr-14 text-sm font-semibold text-slate-900 outline-none transition-all duration-200 hover:border-slate-300 focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 dark:border-slate-700 dark:bg-[#18221f] dark:text-white dark:hover:border-slate-600 dark:focus:border-emerald-400 dark:focus:bg-[#18221f]"
            />

          </div>

        </div>

        {/* TIME */}

        <div>

          <SectionTitle
            icon={Clock3}
            title="Choose a time"
            text="Pick the slot that feels comfortable."
          />

          <div className="mt-6 grid gap-4 sm:grid-cols-2">

            {slots.map((item) => (

              <button
                key={item}
                type="button"
                onClick={() => setSlot(item)}
                className={`group flex min-h-[66px] items-center justify-between rounded-2xl border px-5 text-left transition-all duration-300 ${
                  slot === item
                    ? "border-emerald-500 bg-emerald-50 text-emerald-800 shadow-[0_10px_30px_rgba(16,185,129,0.10)] dark:border-emerald-400 dark:bg-emerald-500/10 dark:text-emerald-300"
                    : "border-slate-200 bg-slate-50 text-slate-700 hover:-translate-y-1 hover:border-emerald-300 hover:bg-emerald-50/50 hover:shadow-md dark:border-slate-700 dark:bg-[#18221f] dark:text-slate-300 dark:hover:border-emerald-500/40"
                }`}
              >

                <div className="flex items-center gap-3">

                  <Clock3
                    size={18}
                    className={
                      slot === item
                        ? "text-emerald-600 dark:text-emerald-400"
                        : "text-slate-400"
                    }
                  />

                  <span className="text-xs font-black">
                    {item}
                  </span>

                </div>

                {slot === item && (
                  <Check
                    size={18}
                    className="text-emerald-600 dark:text-emerald-400"
                  />
                )}

              </button>

            ))}

          </div>

        </div>

        {/* FINAL MESSAGE */}

        <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:border-emerald-200 dark:border-slate-800 dark:bg-[#18221f] dark:hover:border-emerald-500/30">

          <div className="flex items-center gap-3">

            <div className="grid h-11 w-11 place-items-center rounded-xl bg-white text-amber-500 shadow-sm dark:bg-[#111b18]">
              <Star size={18} fill="currentColor" />
            </div>

            <div>

              <p className="text-xs font-black">
                You're almost done
              </p>

              <p className="mt-1 text-[11px] leading-5 text-slate-500 dark:text-slate-400">
                Review your details and confirm your service request.
              </p>

            </div>

          </div>

        </div>

        {/* BUTTONS */}

        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">

          <BackButton onClick={onBack}>
            Back to location
          </BackButton>

          <button
            type="button"
            onClick={onConfirm}
            className="group flex min-h-[62px] items-center justify-center gap-3 rounded-2xl bg-[#087f68] px-8 text-sm font-black text-white shadow-[0_15px_35px_rgba(8,127,104,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#066d5a] hover:shadow-[0_20px_45px_rgba(8,127,104,0.28)] dark:bg-emerald-400 dark:text-emerald-950 dark:hover:bg-emerald-300"
          >
            Confirm my booking

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>

        </div>

      </div>

    </div>
  );
}

/* ============================================================
   BOOKING SUMMARY
============================================================ */

function BookingSummary({
  service,
  price,
  name,
  mobile,
  state,
  city,
  village,
  pincode,
  address,
  date,
  slot,
}) {
  return (
    <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.07)] dark:border-slate-800 dark:bg-[#111b18]">

      <div className="relative overflow-hidden bg-[#e9faf4] p-6 dark:bg-emerald-500/10">

        <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-emerald-300/20" />

        <div className="relative">

          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-400">
            Your booking
          </p>

          <div className="mt-4 flex items-center justify-between gap-4">

            <div>

              <h2 className="text-xl font-black tracking-[-0.03em]">
                {service}
              </h2>

              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Starting from {price}
              </p>

            </div>

            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white text-emerald-700 shadow-sm dark:bg-[#18221f] dark:text-emerald-400">
              <Wrench size={18} />
            </div>

          </div>

        </div>

      </div>

      <div className="p-6">

        <SummaryRow
          icon={UserRound}
          label="Customer"
          value={name || "Not added yet"}
        />

        <SummaryRow
          icon={Phone}
          label="Mobile"
          value={mobile ? `+91 ${mobile}` : "Not added yet"}
        />

        <SummaryRow
          icon={MapPin}
          label="Location"
          value={
            city && village
              ? `${village}, ${city}`
              : "Location not added yet"
          }
          subValue={
            state && pincode
              ? `${state} • ${pincode}`
              : ""
          }
        />

        <SummaryRow
          icon={Home}
          label="Address"
          value={address || "Complete address not added"}
        />

        <SummaryRow
          icon={CalendarDays}
          label="Schedule"
          value={date || "Date not selected"}
          subValue={slot || ""}
          last
        />

      </div>

      <div className="border-t border-slate-100 p-6 dark:border-slate-800">

        <div className="flex gap-3 rounded-2xl bg-slate-50 p-4 dark:bg-[#18221f]">

          <ShieldCheck
            size={18}
            className="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400"
          />

          <p className="text-[11px] leading-5 text-slate-500 dark:text-slate-400">
            Clear booking details with a simple and convenient service request.
          </p>

        </div>

      </div>

    </div>
  );
}

/* ============================================================
   HEADER
============================================================ */

function Header({
  eyebrow,
  title,
  description,
}) {
  return (
    <div className="relative overflow-hidden border-b border-slate-100 px-6 py-9 dark:border-slate-800 sm:px-9 lg:px-12 lg:py-11">

      <div className="absolute -right-20 -top-24 h-56 w-56 rounded-full bg-emerald-50 dark:bg-emerald-500/5" />

      <div className="relative">

        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400">
          {eyebrow}
        </p>

        <h1 className="mt-3 max-w-3xl text-3xl font-black tracking-[-0.055em] text-slate-950 dark:text-white sm:text-[42px]">
          {title}
        </h1>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500 dark:text-slate-400 sm:text-base">
          {description}
        </p>

      </div>

    </div>
  );
}

/* ============================================================
   SECTION TITLE
============================================================ */

function SectionTitle({
  icon: Icon,
  title,
  text,
}) {
  return (
    <div className="flex items-center gap-4">

      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-emerald-50 text-emerald-700 transition duration-300 dark:bg-emerald-500/10 dark:text-emerald-400">
        <Icon size={19} />
      </div>

      <div>

        <h2 className="text-base font-black tracking-[-0.02em]">
          {title}
        </h2>

        <p className="mt-1 text-xs text-slate-400">
          {text}
        </p>

      </div>

    </div>
  );
}

/* ============================================================
   FIELD
============================================================ */

function Field({
  label,
  children,
}) {
  return (
    <div className="w-full">

      <label className="mb-3 block text-xs font-black text-slate-700 dark:text-slate-300">
        {label}
      </label>

      {children}

    </div>
  );
}

/* ============================================================
   NEXT BUTTON
============================================================ */

function NextButton({
  children,
  onClick,
  className = "",
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group flex min-h-[62px] w-full items-center justify-center gap-3 rounded-2xl bg-[#087f68] px-7 text-sm font-black text-white shadow-[0_15px_35px_rgba(8,127,104,0.20)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#066d5a] hover:shadow-[0_20px_45px_rgba(8,127,104,0.28)] dark:bg-emerald-400 dark:text-emerald-950 dark:hover:bg-emerald-300 ${className}`}
    >
      {children}

      <ArrowRight
        size={18}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </button>
  );
}

/* ============================================================
   BACK BUTTON
============================================================ */

function BackButton({
  children,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex min-h-[62px] items-center justify-center gap-2 rounded-2xl border border-slate-200 px-7 text-sm font-black text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:bg-slate-50 hover:shadow-md dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:bg-slate-800"
    >
      <ArrowLeft size={17} />

      {children}
    </button>
  );
}

/* ============================================================
   PROGRESS STEP
============================================================ */

function ProgressStep({
  number,
  label,
  active,
  current,
}) {
  return (
    <div className="flex shrink-0 items-center gap-2">

      <div
        className={`grid h-9 w-9 place-items-center rounded-full text-[10px] font-black transition-all duration-300 ${
          active
            ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/20 dark:bg-emerald-400 dark:text-emerald-950"
            : "bg-white text-slate-400 ring-1 ring-slate-200 dark:bg-[#111b18] dark:ring-slate-700"
        } ${current ? "scale-110" : ""}`}
      >
        {active && !current && number !== "1" ? (
          <Check size={15} />
        ) : (
          number
        )}
      </div>

      <span
        className={`hidden text-[10px] font-black uppercase tracking-wide sm:block ${
          active
            ? "text-slate-800 dark:text-slate-200"
            : "text-slate-400"
        }`}
      >
        {label}
      </span>

    </div>
  );
}

/* ============================================================
   PROGRESS LINE
============================================================ */

function ProgressLine({ active }) {
  return (
    <div className="mx-2 h-[2px] flex-1 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800 sm:mx-4">

      <div
        className={`h-full rounded-full bg-emerald-500 transition-all duration-500 ${
          active ? "w-full" : "w-0"
        }`}
      />

    </div>
  );
}

/* ============================================================
   SUMMARY ROW
============================================================ */

function SummaryRow({
  icon: Icon,
  label,
  value,
  subValue,
  last,
}) {
  return (
    <div
      className={`flex gap-3 ${
        last ? "" : "mb-5"
      }`}
    >

      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
        <Icon size={16} />
      </div>

      <div className="min-w-0">

        <p className="text-[9px] font-black uppercase tracking-[0.12em] text-slate-400">
          {label}
        </p>

        <p className="mt-1 break-words text-xs font-black leading-5 text-slate-800 dark:text-slate-200">
          {value}
        </p>

        {subValue && (
          <p className="mt-1 text-[10px] text-slate-400">
            {subValue}
          </p>
        )}

      </div>

    </div>
  );
}

/* ============================================================
   TIP
============================================================ */

function Tip({
  icon: Icon,
  title,
  text,
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:bg-emerald-50/50 hover:shadow-md dark:border-slate-800 dark:bg-[#18221f] dark:hover:border-emerald-500/30 dark:hover:bg-emerald-500/5">

      <Icon
        size={18}
        className="text-emerald-600 dark:text-emerald-400"
      />

      <p className="mt-3 text-xs font-black">
        {title}
      </p>

      <p className="mt-1 text-[10px] leading-5 text-slate-400">
        {text}
      </p>

    </div>
  );
}

/* ============================================================
   RESULT CARD
============================================================ */

function ResultCard({
  icon: Icon,
  title,
  value,
  detail,
}) {
  return (
    <div className="rounded-2xl bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-50/50 hover:shadow-md dark:bg-[#18221f] dark:hover:bg-emerald-500/5">

      <div className="flex items-start gap-3">

        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-emerald-700 shadow-sm dark:bg-[#111b18] dark:text-emerald-400">
          <Icon size={17} />
        </div>

        <div className="min-w-0">

          <p className="text-[9px] font-black uppercase tracking-[0.12em] text-slate-400">
            {title}
          </p>

          <p className="mt-1 truncate text-sm font-black">
            {value}
          </p>

          <p className="mt-1 text-[10px] text-slate-400">
            {detail}
          </p>

        </div>

      </div>

    </div>
  );
}