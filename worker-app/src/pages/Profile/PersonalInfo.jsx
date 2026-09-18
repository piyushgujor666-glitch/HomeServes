import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Layout from "../../components/Layout";
import {
  ArrowLeft,
  User,
  Camera,
  Phone,
  Mail,
  MapPin,
  Save,
  CheckCircle2,
} from "lucide-react";

const PersonalInfo = () => {
  const [photo, setPhoto] = useState(null);
  const [saved, setSaved] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setSaved(false);
  };

  const handlePhoto = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPhoto(URL.createObjectURL(file));
      setSaved(false);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();

    console.log("Personal Information:", {
      ...formData,
      photo,
    });

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 3000);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-[#FBFAF7] p-5 md:p-8">

        {/* Header */}
        <div className="mb-7">

          <NavLink
            to="/profile"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#8A8A82] transition hover:text-[#0E6B5C]"
          >
            <ArrowLeft size={16} />
            Back to Profile
          </NavLink>

          <div className="mt-5">

            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#0E6B5C]/10">
              <User
                size={20}
                className="text-[#0E6B5C]"
              />
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-[#16302B]">
              Personal Information
            </h1>

            <p className="mt-2 text-sm text-[#8A8A82]">
              Add and manage your personal details.
            </p>

          </div>
        </div>

        {/* Form Card */}
        <div className="max-w-4xl rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 md:p-8">

          <form onSubmit={handleSave}>

            {/* Profile Photo */}
            <div className="border-b border-[#EEECE5] pb-8">

              <div className="mb-5">
                <h2 className="text-lg font-bold text-[#16302B]">
                  Profile Photo
                </h2>

                <p className="mt-1 text-sm text-[#8A8A82]">
                  Add a professional photo to your worker profile.
                </p>
              </div>

              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

                {/* Image */}
                <div className="relative flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-[#16302B]">

                  {photo ? (
                    <img
                      src={photo}
                      alt="Profile"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <User
                      size={40}
                      className="text-white"
                    />
                  )}

                </div>

                {/* Upload */}
                <div>

                  <label className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-[#16302B] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0E6B5C]">

                    <Camera size={17} />

                    Upload Photo

                    <input
                      type="file"
                      accept="image/png,image/jpeg,image/webp"
                      onChange={handlePhoto}
                      className="hidden"
                    />

                  </label>

                  <p className="mt-2 text-xs text-[#A6A69C]">
                    JPG, PNG or WEBP • Recommended: square image
                  </p>

                </div>

              </div>
            </div>

            {/* Basic Information */}
            <div className="pt-8">

              <div className="mb-5">
                <h2 className="text-lg font-bold text-[#16302B]">
                  Basic Information
                </h2>

                <p className="mt-1 text-sm text-[#8A8A82]">
                  Keep your contact information up to date.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">

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
                      name="phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          phone: e.target.value.replace(/\D/g, ""),
                        })
                      }
                      placeholder="Enter phone number"
                      required
                      className="w-full rounded-xl border border-[#E3E1DA] bg-[#FBFAF7] py-3.5 pl-10 pr-3 text-sm text-[#16302B] outline-none transition placeholder:text-[#A6A69C] focus:border-[#0E6B5C] focus:bg-white focus:ring-2 focus:ring-[#0E6B5C]/10"
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
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter email address"
                      required
                      className="w-full rounded-xl border border-[#E3E1DA] bg-[#FBFAF7] py-3.5 pl-10 pr-3 text-sm text-[#16302B] outline-none transition placeholder:text-[#A6A69C] focus:border-[#0E6B5C] focus:bg-white focus:ring-2 focus:ring-[#0E6B5C]/10"
                    />

                  </div>

                </div>

                {/* City */}
                <div>

                  <label
                    htmlFor="city"
                    className="mb-2 block text-sm font-semibold text-[#3F4844]"
                  >
                    City
                  </label>

                  <div className="relative">

                    <MapPin
                      size={18}
                      className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#8A8A82]"
                    />

                    <input
                      id="city"
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Enter your city"
                      required
                      className="w-full rounded-xl border border-[#E3E1DA] bg-[#FBFAF7] py-3.5 pl-10 pr-3 text-sm text-[#16302B] outline-none transition placeholder:text-[#A6A69C] focus:border-[#0E6B5C] focus:bg-white focus:ring-2 focus:ring-[#0E6B5C]/10"
                    />

                  </div>

                </div>

              </div>

              {/* Address */}
              <div className="mt-5">

                <label
                  htmlFor="address"
                  className="mb-2 block text-sm font-semibold text-[#3F4844]"
                >
                  Complete Address
                </label>

                <textarea
                  id="address"
                  name="address"
                  rows="4"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your complete address"
                  required
                  className="w-full resize-none rounded-xl border border-[#E3E1DA] bg-[#FBFAF7] px-4 py-3.5 text-sm text-[#16302B] outline-none transition placeholder:text-[#A6A69C] focus:border-[#0E6B5C] focus:bg-white focus:ring-2 focus:ring-[#0E6B5C]/10"
                />

              </div>

            </div>

            {/* Success Message */}
            {saved && (
              <div className="mt-6 flex items-center gap-3 rounded-xl bg-green-50 p-4 text-sm font-medium text-green-700">
                <CheckCircle2 size={18} />
                Personal information saved successfully.
              </div>
            )}

            {/* Bottom Actions */}
            <div className="mt-8 flex flex-col-reverse gap-3 border-t border-[#EEECE5] pt-6 sm:flex-row sm:justify-end">

              <NavLink
                to="/profile"
                className="inline-flex items-center justify-center rounded-xl border border-[#E3E1DA] bg-white px-6 py-3 text-sm font-semibold text-[#3F4844] transition hover:bg-[#FBFAF7]"
              >
                Cancel
              </NavLink>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#16302B] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0E6B5C]"
              >
                <Save size={17} />
                Save Information
              </button>

            </div>

          </form>
        </div>

        {/* Security Note */}
        <div className="mt-5 flex max-w-4xl items-center gap-2 text-xs text-[#A6A69C]">
          <CheckCircle2 size={14} />
          Your personal information is securely stored.
        </div>

      </div>
    </Layout>
  );
};

export default PersonalInfo;