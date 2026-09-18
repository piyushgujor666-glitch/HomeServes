import React from "react";
import { NavLink } from "react-router-dom";
import Layout from "../../components/Layout";
import {
  User,
  MapPin,
  Star,
  Pencil,
  CheckCircle2,
  Clock3,
  Wrench,
  FileText,
  ShieldCheck,
  ChevronRight,
  BriefcaseBusiness,
  Award,
} from "lucide-react";

const Profile = () => {
  const profileOptions = [
    {
      title: "Personal Information",
      description: "Name, phone, email, address and profile photo",
      status: "Completed",
      statusType: "completed",
      icon: User,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
      path: "/profile/personal",
    },
    {
      title: "KYC Verification",
      description: "Government ID and identity verification",
      status: "Pending",
      statusType: "pending",
      icon: ShieldCheck,
      iconBg: "bg-purple-50",
      iconColor: "text-purple-600",
      path: "/profile/kyc",
    },
    {
      title: "Professional Experience",
      description: "Skills, experience and previous work",
      status: "Complete your details",
      statusType: "incomplete",
      icon: Wrench,
      iconBg: "bg-orange-50",
      iconColor: "text-orange-600",
      path: "/profile/experience",
    },
    {
      title: "Certificates",
      description: "Professional and experience certificates",
      status: "Not Uploaded",
      statusType: "missing",
      icon: FileText,
      iconBg: "bg-green-50",
      iconColor: "text-[#0E6B5C]",
      path: "/profile/certificates",
    },
  ];

  const getStatusStyle = (type) => {
    switch (type) {
      case "completed":
        return "bg-green-50 text-green-700";

      case "pending":
        return "bg-yellow-50 text-yellow-700";

      case "incomplete":
        return "bg-orange-50 text-orange-700";

      case "missing":
        return "bg-red-50 text-red-600";

      default:
        return "bg-gray-50 text-gray-600";
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-[#FBFAF7] p-5 md:p-8">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-[#16302B]">
            My Profile
          </h1>

          <p className="mt-2 text-sm text-[#8A8A82]">
            Manage your personal and professional information
          </p>
        </div>

        {/* Main Profile Card */}
        <div className="mb-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">

          {/* Top Accent */}
          <div className="h-1.5 bg-[#0E6B5C]" />

          <div className="p-6 md:p-7">

            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">

              {/* Profile Image */}
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-[#16302B] shadow-sm">
                <User size={40} className="text-white" />
              </div>

              {/* Worker Details */}
              <div className="min-w-0 flex-1">

                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-2xl font-bold text-[#16302B]">
                    Worker Name
                  </h2>

                  <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                    Available
                  </span>
                </div>

                <p className="mt-1 text-sm font-medium text-[#6B6B62]">
                  Service Professional
                </p>

                <div className="mt-3 flex flex-wrap gap-4 text-sm text-[#8A8A82]">

                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={15} />
                    Your Location
                  </span>

                  <span className="inline-flex items-center gap-1.5">
                    <Star
                      size={15}
                      className="fill-[#E08A3C] text-[#E08A3C]"
                    />
                    <span className="font-semibold text-[#16302B]">
                      4.8
                    </span>
                    Rating
                  </span>

                </div>
              </div>

              {/* Edit Profile */}
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

        {/* Profile Completion */}
        <div className="mb-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">

          <div className="flex items-start justify-between gap-4">

            <div>
              <div className="flex items-center gap-2">
                <CheckCircle2
                  size={19}
                  className="text-[#0E6B5C]"
                />

                <h2 className="font-bold text-[#16302B]">
                  Profile Completion
                </h2>
              </div>

              <p className="mt-2 text-sm text-[#8A8A82]">
                Complete your profile to receive more orders.
              </p>
            </div>

            <span className="text-xl font-bold text-[#16302B]">
              60%
            </span>

          </div>

          {/* Progress */}
          <div className="mt-5 h-2.5 overflow-hidden rounded-full bg-[#EAE8E1]">
            <div className="h-full w-[60%] rounded-full bg-[#0E6B5C]" />
          </div>

          <div className="mt-3 flex items-center justify-between text-xs">
            <span className="text-[#8A8A82]">
              Profile progress
            </span>

            <span className="font-medium text-[#0E6B5C]">
              40% remaining
            </span>
          </div>

        </div>

        {/* Profile Options */}
        <div className="mb-6">

          <div className="mb-4">
            <h2 className="text-lg font-bold text-[#16302B]">
              Profile Settings
            </h2>

            <p className="mt-1 text-sm text-[#8A8A82]">
              Keep your worker profile up to date.
            </p>
          </div>

          <div className="grid gap-4">

            {profileOptions.map((item) => {
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

                    <p className="mt-1 text-sm text-[#8A8A82]">
                      {item.description}
                    </p>

                    <span
                      className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusStyle(
                        item.statusType
                      )}`}
                    >
                      {item.status}
                    </span>

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
        </div>

        {/* Professional Summary */}
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0E6B5C]/10">
              <BriefcaseBusiness
                size={20}
                className="text-[#0E6B5C]"
              />
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#16302B]">
                Professional Summary
              </h2>

              <p className="text-sm text-[#8A8A82]">
                Your current professional information
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {/* Primary Service */}
            <div className="rounded-xl bg-[#FBFAF7] p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-[#A6A69C]">
                Primary Service
              </p>

              <div className="mt-2 flex items-center gap-2">
                <Wrench
                  size={16}
                  className="text-[#0E6B5C]"
                />

                <p className="font-semibold text-[#16302B]">
                  Electrician
                </p>
              </div>
            </div>

            {/* Experience */}
            <div className="rounded-xl bg-[#FBFAF7] p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-[#A6A69C]">
                Experience
              </p>

              <div className="mt-2 flex items-center gap-2">
                <Clock3
                  size={16}
                  className="text-[#0E6B5C]"
                />

                <p className="font-semibold text-[#16302B]">
                  3 Years
                </p>
              </div>
            </div>

            {/* Jobs */}
            <div className="rounded-xl bg-[#FBFAF7] p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-[#A6A69C]">
                Jobs Completed
              </p>

              <div className="mt-2 flex items-center gap-2">
                <CheckCircle2
                  size={16}
                  className="text-[#0E6B5C]"
                />

                <p className="font-semibold text-[#16302B]">
                  126
                </p>
              </div>
            </div>

            {/* Rating */}
            <div className="rounded-xl bg-[#FBFAF7] p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-[#A6A69C]">
                Customer Rating
              </p>

              <div className="mt-2 flex items-center gap-2">
                <Award
                  size={16}
                  className="text-[#E08A3C]"
                />

                <p className="font-semibold text-[#16302B]">
                  4.8
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </Layout>
  );
};

export default Profile;