import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  User,
  Mail,
  Phone,
  ShieldCheck,
  LockKeyhole,
  LogOut,
  Save,
  Camera,
  CheckCircle2,
} from "lucide-react";

const AdminProfile = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("Admin User");
  const [email, setEmail] = useState("admin@example.com");
  const [phone, setPhone] = useState("+91 9876543210");
  const [photo, setPhoto] = useState(null);
  const [saved, setSaved] = useState(false);

  const handlePhoto = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPhoto(URL.createObjectURL(file));
      setSaved(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      name,
      email,
      phone,
      photo,
    });

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 3000);
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );

    if (confirmLogout) {
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen bg-[#FBFAF7]">

      {/* Top Accent */}
      <div className="h-1.5 bg-[#0E6B5C]" />

      <div className="p-5 md:p-8">

        <div className="mx-auto max-w-4xl">

          {/* Header */}
          <div className="mb-7">

            <button
              type="button"
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#8A8A82] transition hover:text-[#0E6B5C]"
            >
              <ArrowLeft size={16} />
              Back
            </button>

            <div className="mt-5">

              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#0E6B5C]/10">
                <User
                  size={20}
                  className="text-[#0E6B5C]"
                />
              </div>

              <h1 className="text-3xl font-bold tracking-tight text-[#16302B]">
                Admin Profile
              </h1>

              <p className="mt-2 text-sm text-[#8A8A82]">
                Manage your account information
              </p>

            </div>
          </div>

          {/* Profile Card */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">

            {/* Accent */}
            <div className="h-1.5 bg-[#0E6B5C]" />

            <div className="p-6 md:p-8">

              {/* Profile Header */}
              <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center">

                {/* Profile Image */}
                <div className="relative">

                  <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl bg-[#16302B]">

                    {photo ? (
                      <img
                        src={photo}
                        alt="Admin Profile"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <span className="text-3xl font-bold text-white">
                        A
                      </span>
                    )}

                  </div>

                  {/* Camera */}
                  <label className="absolute -bottom-2 -right-2 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#0E6B5C] text-white shadow-md transition hover:bg-[#16302B]">

                    <Camera size={16} />

                    <input
                      type="file"
                      accept="image/png,image/jpeg,image/webp"
                      onChange={handlePhoto}
                      className="hidden"
                    />

                  </label>

                </div>

                {/* Details */}
                <div className="flex-1">

                  <h2 className="text-2xl font-bold text-[#16302B]">
                    {name}
                  </h2>

                  <p className="mt-1 text-sm font-medium text-[#6B6B62]">
                    Administrator
                  </p>

                  <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                    Active Account
                  </div>

                </div>

              </div>

              {/* Form */}
              <form
                onSubmit={handleSubmit}
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
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        setSaved(false);
                      }}
                      required
                      className="w-full rounded-xl border border-[#E3E1DA] bg-[#FBFAF7] py-3.5 pl-10 pr-3 text-sm text-[#16302B] outline-none transition focus:border-[#0E6B5C] focus:bg-white focus:ring-2 focus:ring-[#0E6B5C]/10"
                    />

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
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setSaved(false);
                      }}
                      required
                      className="w-full rounded-xl border border-[#E3E1DA] bg-[#FBFAF7] py-3.5 pl-10 pr-3 text-sm text-[#16302B] outline-none transition focus:border-[#0E6B5C] focus:bg-white focus:ring-2 focus:ring-[#0E6B5C]/10"
                    />

                  </div>
                </div>

                {/* Phone */}
                <div>

                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-[#3F4844]"
                  >
                    Phone Number
                  </label>

                  <div className="relative">

                    <Phone
                      size={18}
                      className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#8A8A82]"
                    />

                    <input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        setSaved(false);
                      }}
                      required
                      className="w-full rounded-xl border border-[#E3E1DA] bg-[#FBFAF7] py-3.5 pl-10 pr-3 text-sm text-[#16302B] outline-none transition focus:border-[#0E6B5C] focus:bg-white focus:ring-2 focus:ring-[#0E6B5C]/10"
                    />

                  </div>
                </div>

                {/* Role */}
                <div>

                  <label className="mb-2 block text-sm font-semibold text-[#3F4844]">
                    Role
                  </label>

                  <div className="relative">

                    <ShieldCheck
                      size={18}
                      className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#8A8A82]"
                    />

                    <input
                      type="text"
                      value="Administrator"
                      disabled
                      className="w-full rounded-xl border border-[#E3E1DA] bg-[#F1F0EB] py-3.5 pl-10 pr-3 text-sm text-[#8A8A82] outline-none"
                    />

                  </div>

                  <p className="mt-2 text-xs text-[#A6A69C]">
                    Administrator role cannot be changed here.
                  </p>

                </div>

                {/* Success */}
                {saved && (
                  <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 text-sm font-medium text-green-700">
                    <CheckCircle2 size={18} />
                    Profile updated successfully.
                  </div>
                )}

                {/* Buttons */}
                <div className="flex flex-col-reverse gap-3 border-t border-[#EEECE5] pt-6 sm:flex-row sm:justify-end">

                  <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="rounded-xl border border-[#E3E1DA] bg-white px-6 py-3 text-sm font-semibold text-[#3F4844] transition hover:bg-[#FBFAF7]"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#16302B] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0E6B5C]"
                  >
                    <Save size={17} />
                    Save Changes
                  </button>

                </div>

              </form>
            </div>
          </div>

          {/* Account Security */}
          <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 md:p-8">

            <div className="flex items-start gap-4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0E6B5C]/10">
                <LockKeyhole
                  size={21}
                  className="text-[#0E6B5C]"
                />
              </div>

              <div>
                <h2 className="text-lg font-bold text-[#16302B]">
                  Account Security
                </h2>

                <p className="mt-1 text-sm text-[#8A8A82]">
                  Manage your password and account security.
                </p>
              </div>

            </div>

            <button
              type="button"
              onClick={() => navigate("/forgot")}
              className="mt-5 inline-flex items-center gap-2 rounded-xl border border-[#0E6B5C] px-5 py-3 text-sm font-semibold text-[#0E6B5C] transition hover:bg-[#0E6B5C] hover:text-white"
            >
              <LockKeyhole size={16} />
              Change Password
            </button>

          </div>

          {/* Logout */}
          <div className="mt-7 mb-6 flex justify-center">

            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-7 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-600 hover:text-white"
            >
              <LogOut size={17} />
              Logout
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default AdminProfile;