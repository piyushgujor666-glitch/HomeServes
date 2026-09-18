import React from "react";
import { NavLink } from "react-router-dom";
import Layout from "../../components/Layout";
import {
  User,
  MapPin,
  Pencil,
  ShieldCheck,
  Wrench,
  FileText,
  ChevronRight,
  BriefcaseBusiness,
} from "lucide-react";

const Profile = () => {
  const options = [
    {
      title: "Personal Information",
      description:
        "Manage your name, phone, email, address and profile photo.",
      icon: User,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
      path: "/profile/personal",
    },
    {
      title: "KYC Verification",
      description:
        "Upload your identity verification documents.",
      icon: ShieldCheck,
      iconBg: "bg-purple-50",
      iconColor: "text-purple-600",
      path: "/profile/kyc",
      status: "Pending Verification",
      statusClass: "bg-yellow-50 text-yellow-700",
    },
    {
      title: "Professional Experience",
      description:
        "Add your skills, experience and previous work information.",
      icon: Wrench,
      iconBg: "bg-orange-50",
      iconColor: "text-orange-600",
      path: "/profile/experience",
    },
    {
      title: "Certificates",
      description:
        "Upload your professional and experience certificates.",
      icon: FileText,
      iconBg: "bg-green-50",
      iconColor: "text-[#0E6B5C]",
      path: "/profile/certificates",
      status: "Not Uploaded",
      statusClass: "bg-red-50 text-red-600",
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-[#FBFAF7] p-5 md:p-8">

        {/* Header */}
        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <h1 className="text-3xl font-bold tracking-tight text-[#16302B]">
              My Profile
            </h1>

            <p className="mt-2 text-sm text-[#8A8A82]">
              Manage your personal and professional information
            </p>
          </div>

          {/* Availability */}
          <div className="flex w-fit items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
            <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
            Available
          </div>

        </div>

        {/* Main Profile Card */}
        <div className="mb-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">

          {/* Accent */}
          <div className="h-1.5 bg-[#0E6B5C]" />

          <div className="p-6 md:p-7">

            <div className="flex flex-col gap-6 md:flex-row md:items-center">

              {/* Profile Photo */}
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-[#16302B]">
                <User
                  size={40}
                  className="text-white"
                />
              </div>

              {/* Information */}
              <div className="min-w-0 flex-1">

                <h2 className="text-2xl font-bold text-[#16302B]">
                  Worker Name
                </h2>

                <p className="mt-1 text-sm font-medium text-[#6B6B62]">
                  Service Professional
                </p>

                <div className="mt-3 flex items-center gap-2 text-sm text-[#8A8A82]">
                  <MapPin size={16} />
                  Your Location
                </div>

              </div>

              {/* Edit */}
              <NavLink
                to="/profile/personal"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#16302B] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0E6B5C]"
              >
                <Pencil size={16} />
                Edit Profile
              </NavLink>

            </div>

          </div>
        </div>

        {/* Profile Settings Heading */}
        <div className="mb-4">

          <h2 className="text-lg font-bold text-[#16302B]">
            Profile Settings
          </h2>

          <p className="mt-1 text-sm text-[#8A8A82]">
            Keep your worker profile complete and up to date.
          </p>

        </div>

        {/* Profile Options */}
        <div className="grid gap-4">

          {options.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.title}
                to={item.path}
                className="group flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5 transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >

                {/* Icon */}
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${item.iconBg}`}
                >
                  <Icon
                    size={22}
                    className={item.iconColor}
                  />
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">

                  <h3 className="font-semibold text-[#16302B]">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm leading-5 text-[#8A8A82]">
                    {item.description}
                  </p>

                  {item.status && (
                    <span
                      className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${item.statusClass}`}
                    >
                      {item.status}
                    </span>
                  )}

                </div>

                {/* Arrow */}
                <ChevronRight
                  size={20}
                  className="shrink-0 text-[#B2B0A8] transition group-hover:translate-x-1 group-hover:text-[#0E6B5C]"
                />

              </NavLink>
            );
          })}

        </div>

        {/* Profile Tip */}
        <div className="mt-6 flex items-start gap-3 rounded-2xl bg-[#0E6B5C]/5 p-5">

          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0E6B5C]/10">
            <BriefcaseBusiness
              size={18}
              className="text-[#0E6B5C]"
            />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#16302B]">
              Complete your worker profile
            </h3>

            <p className="mt-1 text-xs leading-5 text-[#6B6B62]">
              Add your professional experience, KYC documents and
              certificates to keep your profile ready for service orders.
            </p>
          </div>

        </div>

      </div>
    </Layout>
  );
};

export default Profile;