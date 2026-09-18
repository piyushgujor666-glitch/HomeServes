import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  User,
  Phone,
  Mail,
  BriefcaseBusiness,
  LockKeyhole,
  Eye,
  EyeOff,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    service: "",
  });

  const [countryCode, setCountryCode] = useState("+91");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    // Temporary frontend signup
    console.log("Worker Signup:", {
      ...formData,
      phone: `${countryCode} ${formData.phone}`,
    });

    setTimeout(() => {
      setLoading(false);
      navigate("/dashboard");
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#FBFAF7]">

      {/* Top Accent */}
      <div className="h-1.5 bg-[#0E6B5C]" />

      <div className="flex min-h-[calc(100vh-6px)] items-center justify-center px-4 py-10">

        <div className="w-full max-w-lg">

          {/* Logo */}
          <div className="mb-7 text-center">

            <NavLink
              to="/login"
              className="inline-flex flex-col items-center"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#16302B] shadow-sm">
                <BriefcaseBusiness
                  size={27}
                  className="text-white"
                />
              </div>

              <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#16302B]">
                HomeServe
              </h1>
            </NavLink>

            <p className="mt-1 text-sm font-medium text-[#8A8A82]">
              Worker Registration
            </p>

          </div>

          {/* Signup Card */}
          <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5 sm:p-8">

            {/* Header */}
            <div className="mb-7">

              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#0E6B5C]/10">
                <User
                  size={20}
                  className="text-[#0E6B5C]"
                />
              </div>

              <h2 className="text-2xl font-bold text-[#16302B]">
                Create Worker Account
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#8A8A82]">
                Register as a service professional and start receiving orders.
              </p>

            </div>

            <form
              onSubmit={handleSignup}
              className="space-y-5"
            >

              {/* Full Name */}
              <div>

                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-[#3F4844]"
                >
                  Full Name
                </label>

                <div className="relative">

                  <User
                    size={18}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#8A8A82]"
                  />

                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full rounded-xl border border-[#E3E1DA] bg-[#FBFAF7] py-3.5 pl-10 pr-3 text-sm text-[#16302B] outline-none transition placeholder:text-[#A6A69C] focus:border-[#0E6B5C] focus:bg-white focus:ring-2 focus:ring-[#0E6B5C]/10"
                  />

                </div>

              </div>

              {/* Mobile Number */}
              <div>

                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold text-[#3F4844]"
                >
                  Mobile Number
                </label>

                <div className="flex">

                  {/* Country Code */}
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="w-[105px] rounded-l-xl border border-r-0 border-[#E3E1DA] bg-[#FBFAF7] px-2 text-sm font-medium text-[#16302B] outline-none focus:border-[#0E6B5C]"
                  >
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+61">🇦🇺 +61</option>
                    <option value="+971">🇦🇪 +971</option>
                    <option value="+65">🇸🇬 +65</option>
                    <option value="+60">🇲🇾 +60</option>
                    <option value="+49">🇩🇪 +49</option>
                    <option value="+33">🇫🇷 +33</option>
                    <option value="+81">🇯🇵 +81</option>
                  </select>

                  <div className="relative flex-1">

                    <Phone
                      size={18}
                      className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#8A8A82]"
                    />

                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          phone: e.target.value.replace(/\D/g, ""),
                        })
                      }
                      placeholder="Enter mobile number"
                      required
                      className="w-full rounded-r-xl border border-[#E3E1DA] bg-[#FBFAF7] py-3.5 pl-10 pr-3 text-sm text-[#16302B] outline-none transition placeholder:text-[#A6A69C] focus:border-[#0E6B5C] focus:bg-white focus:ring-2 focus:ring-[#0E6B5C]/10"
                    />

                  </div>

                </div>

              </div>

              {/* Email */}
              <div>

                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-[#3F4844]"
                >
                  Email Address
                </label>

                <div className="relative">

                  <Mail
                    size={18}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#8A8A82]"
                  />

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email address"
                    required
                    className="w-full rounded-xl border border-[#E3E1DA] bg-[#FBFAF7] py-3.5 pl-10 pr-3 text-sm text-[#16302B] outline-none transition placeholder:text-[#A6A69C] focus:border-[#0E6B5C] focus:bg-white focus:ring-2 focus:ring-[#0E6B5C]/10"
                  />

                </div>

              </div>

              {/* Service */}
              <div>

                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-semibold text-[#3F4844]"
                >
                  Primary Service
                </label>

                <div className="relative">

                  <BriefcaseBusiness
                    size={18}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#8A8A82]"
                  />

                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full appearance-none rounded-xl border border-[#E3E1DA] bg-[#FBFAF7] py-3.5 pl-10 pr-4 text-sm text-[#16302B] outline-none transition focus:border-[#0E6B5C] focus:bg-white focus:ring-2 focus:ring-[#0E6B5C]/10"
                  >

                    <option value="">
                      Select your service
                    </option>

                    <option value="plumber">
                      Plumbing
                    </option>

                    <option value="cleaning">
                      Cleaning
                    </option>

                    <option value="electrician">
                      Electrical
                    </option>

                    <option value="painting">
                      Painting
                    </option>

                    <option value="ac-repair">
                      AC Repair
                    </option>

                    <option value="carpentry">
                      Carpentry
                    </option>

                    <option value="appliance-repair">
                      Appliance Repair
                    </option>

                    <option value="pest-control">
                      Pest Control
                    </option>

                    <option value="water-purifier">
                      Water Purifier Service
                    </option>

                    <option value="locksmith">
                      Locksmith
                    </option>

                  </select>

                </div>

              </div>

              {/* Password */}
              <div>

                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-[#3F4844]"
                >
                  Password
                </label>

                <div className="relative">

                  <LockKeyhole
                    size={18}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#8A8A82]"
                  />

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a password"
                    required
                    minLength={6}
                    className="w-full rounded-xl border border-[#E3E1DA] bg-[#FBFAF7] py-3.5 pl-10 pr-11 text-sm text-[#16302B] outline-none transition placeholder:text-[#A6A69C] focus:border-[#0E6B5C] focus:bg-white focus:ring-2 focus:ring-[#0E6B5C]/10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8A8A82] hover:text-[#16302B]"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>

                </div>

                <p className="mt-1.5 text-xs text-[#A6A69C]">
                  Minimum 6 characters
                </p>

              </div>

              {/* Confirm Password */}
              <div>

                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-sm font-semibold text-[#3F4844]"
                >
                  Confirm Password
                </label>

                <div className="relative">

                  <LockKeyhole
                    size={18}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#8A8A82]"
                  />

                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    required
                    minLength={6}
                    className="w-full rounded-xl border border-[#E3E1DA] bg-[#FBFAF7] py-3.5 pl-10 pr-11 text-sm text-[#16302B] outline-none transition placeholder:text-[#A6A69C] focus:border-[#0E6B5C] focus:bg-white focus:ring-2 focus:ring-[#0E6B5C]/10"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8A8A82] hover:text-[#16302B]"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>

                </div>

              </div>

              {/* Password Match */}
              {formData.confirmPassword && (
                <div
                  className={`flex items-center gap-2 text-xs font-medium ${
                    formData.password === formData.confirmPassword
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  <CheckCircle2 size={15} />

                  {formData.password === formData.confirmPassword
                    ? "Passwords match"
                    : "Passwords do not match"}
                </div>
              )}

              {/* Terms */}
              <div className="flex items-start gap-2">

                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="mt-1 h-4 w-4 rounded border-[#D8D6CE] accent-[#0E6B5C]"
                />

                <label
                  htmlFor="terms"
                  className="text-xs leading-5 text-[#6B6B62]"
                >
                  I agree to the{" "}
                  <button
                    type="button"
                    className="font-semibold text-[#0E6B5C] hover:underline"
                  >
                    Terms & Conditions
                  </button>{" "}
                  and{" "}
                  <button
                    type="button"
                    className="font-semibold text-[#0E6B5C] hover:underline"
                  >
                    Privacy Policy
                  </button>
                  .
                </label>

              </div>

              {/* Security Info */}
              <div className="flex gap-3 rounded-xl bg-[#0E6B5C]/5 p-4">

                <ShieldCheck
                  size={18}
                  className="mt-0.5 shrink-0 text-[#0E6B5C]"
                />

                <p className="text-xs leading-5 text-[#6B6B62]">
                  Your account information is protected and will only be used
                  to manage your HomeServe worker account.
                </p>

              </div>

              {/* Create Account */}
              <button
                type="submit"
                disabled={loading}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#16302B] px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0E6B5C] disabled:cursor-not-allowed disabled:opacity-70"
              >

                {loading ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Creating Account...
                  </>
                ) : (
                  <>
                    Create Worker Account

                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </>
                )}

              </button>

            </form>

            {/* Login */}
            <div className="mt-7 border-t border-[#EEECE5] pt-6 text-center">

              <p className="text-sm text-[#8A8A82]">
                Already have a worker account?
              </p>

              <NavLink
                to="/login"
                className="mt-2 inline-block text-sm font-semibold text-[#0E6B5C] hover:text-[#16302B] hover:underline"
              >
                Login to your account
              </NavLink>

            </div>

          </div>

          {/* Bottom */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-[#A6A69C]">
            <ShieldCheck size={14} />
            <span>Secure worker registration</span>
          </div>

          <p className="mt-3 text-center text-xs text-[#B2B0A8]">
            © {new Date().getFullYear()} HomeServe. All rights reserved.
          </p>

        </div>

      </div>
    </div>
  );
};

export default Signup;