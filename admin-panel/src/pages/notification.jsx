import React, { useState } from "react";
import {
  Bell,
  CheckCircle2,
  Clock3,
  AlertTriangle,
  UserPlus,
  CalendarDays,
  CreditCard,
  Wrench,
  Check,
  Trash2,
  MoreHorizontal,
} from "lucide-react";

const notificationsData = [
  {
    id: 1,
    type: "booking",
    title: "New booking received",
    message:
      "A new AC Repair booking has been created by Piyush Gujor.",
    time: "10 minutes ago",
    date: "Today",
    unread: true,
    icon: CalendarDays,
  },
  {
    id: 2,
    type: "worker",
    title: "New worker registered",
    message:
      "Rohit Patel has completed his registration and is waiting for approval.",
    time: "32 minutes ago",
    date: "Today",
    unread: true,
    icon: UserPlus,
  },
  {
    id: 3,
    type: "payment",
    title: "Payment received",
    message:
      "Payment of ₹699 has been successfully received for booking FM-1046.",
    time: "1 hour ago",
    date: "Today",
    unread: true,
    icon: CreditCard,
  },
  {
    id: 4,
    type: "service",
    title: "Service updated",
    message:
      "The AC Repair service price has been updated successfully.",
    time: "2 hours ago",
    date: "Today",
    unread: false,
    icon: Wrench,
  },
  {
    id: 5,
    type: "booking",
    title: "Booking completed",
    message:
      "Booking FM-1045 for Electrical service has been marked as completed.",
    time: "3 hours ago",
    date: "Today",
    unread: false,
    icon: CheckCircle2,
  },
  {
    id: 6,
    type: "warning",
    title: "Worker approval required",
    message:
      "A worker profile is waiting for admin verification.",
    time: "Yesterday",
    date: "Yesterday",
    unread: false,
    icon: AlertTriangle,
  },
  {
    id: 7,
    type: "booking",
    title: "Booking rescheduled",
    message:
      "Booking FM-1047 has been rescheduled to 12:30 PM.",
    time: "Yesterday",
    date: "Yesterday",
    unread: false,
    icon: Clock3,
  },
];

const getIconStyle = (type) => {
  switch (type) {
    case "booking":
      return "bg-[#EAF4F1] text-[#0E6B5C]";

    case "worker":
      return "bg-[#EEF2FF] text-[#5367C9]";

    case "payment":
      return "bg-[#FFF3E8] text-[#E08A3C]";

    case "service":
      return "bg-[#F3F0FF] text-[#7659B8]";

    case "warning":
      return "bg-[#FFF4E5] text-[#C57A18]";

    default:
      return "bg-[#F3F5F2] text-[#6F7773]";
  }
};

export default function Notifications() {
  const [notifications, setNotifications] =
    useState(notificationsData);

  const [filter, setFilter] = useState("all");

  const unreadCount = notifications.filter(
    (notification) => notification.unread
  ).length;

  const filteredNotifications =
    filter === "unread"
      ? notifications.filter(
          (notification) => notification.unread
        )
      : notifications;

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notification) => ({
        ...notification,
        unread: false,
      }))
    );
  };

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id
          ? { ...notification, unread: false }
          : notification
      )
    );
  };

  const deleteNotification = (id) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id)
    );
  };

  return (
    <div className="min-h-[calc(100vh-68px)] bg-[#F6F9F7]">

      {/* ================= PAGE HEADER ================= */}
      <section className="border-b border-[#E3E9E6] bg-[#FBFAF7]">
        <div className="mx-auto max-w-[1200px] px-4 py-7 sm:px-6 lg:px-8">

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            {/* Title */}
            <div>
              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF4F1] text-[#0E6B5C]">
                  <Bell size={21} />
                </div>

                <div>
                  <h1 className="text-2xl font-bold tracking-tight text-[#16302B] sm:text-3xl">
                    Notifications
                  </h1>

                  <p className="mt-1 text-sm text-[#7B8580]">
                    Stay updated with your latest admin activities.
                  </p>
                </div>

              </div>
            </div>

            {/* Mark all */}
            {unreadCount > 0 && (
              <button
                type="button"
                onClick={markAllAsRead}
                className="inline-flex w-fit items-center gap-2 rounded-lg border border-[#DCE5E1] bg-white px-4 py-2.5 text-sm font-semibold text-[#0E6B5C] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#BFD8D1] hover:bg-[#F3F9F7]"
              >
                <Check size={16} />
                Mark all as read
              </button>
            )}

          </div>

        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <main className="mx-auto max-w-[1200px] px-4 py-7 pb-32 sm:px-6 lg:px-8 lg:pb-10">

        {/* ================= SUMMARY ================= */}
        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">

          {/* Total */}
          <div className="rounded-2xl border border-[#E1E7E4] bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-[#89918D]">
                  Total notifications
                </p>

                <p className="mt-2 text-2xl font-bold text-[#16302B]">
                  {notifications.length}
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F3F5F2] text-[#6F7773]">
                <Bell size={18} />
              </div>

            </div>
          </div>

          {/* Unread */}
          <div className="rounded-2xl border border-[#DCE9E5] bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-[#89918D]">
                  Unread
                </p>

                <p className="mt-2 text-2xl font-bold text-[#0E6B5C]">
                  {unreadCount}
                </p>
              </div>

              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF4F1] text-[#0E6B5C]">
                <Bell size={18} />

                {unreadCount > 0 && (
                  <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-[#E08A3C]" />
                )}
              </div>

            </div>
          </div>

          {/* Status */}
          <div className="rounded-2xl border border-[#E1E7E4] bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-[#89918D]">
                  System status
                </p>

                <p className="mt-2 text-base font-bold text-[#0E6B5C]">
                  All systems operational
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF4F1] text-[#0E6B5C]">
                <CheckCircle2 size={18} />
              </div>

            </div>
          </div>

        </div>

        {/* ================= FILTER ================= */}
        <div className="mb-4 flex items-center justify-between">

          <div className="flex rounded-xl border border-[#E1E7E4] bg-white p-1">

            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`rounded-lg px-4 py-2 text-xs font-semibold transition ${
                filter === "all"
                  ? "bg-[#EAF4F1] text-[#0E6B5C]"
                  : "text-[#7B8580] hover:text-[#16302B]"
              }`}
            >
              All
            </button>

            <button
              type="button"
              onClick={() => setFilter("unread")}
              className={`rounded-lg px-4 py-2 text-xs font-semibold transition ${
                filter === "unread"
                  ? "bg-[#EAF4F1] text-[#0E6B5C]"
                  : "text-[#7B8580] hover:text-[#16302B]"
              }`}
            >
              Unread
              {unreadCount > 0 && (
                <span className="ml-1.5">
                  ({unreadCount})
                </span>
              )}
            </button>

          </div>

          <span className="hidden text-xs text-[#89918D] sm:block">
            {filteredNotifications.length} notification
            {filteredNotifications.length !== 1 ? "s" : ""}
          </span>

        </div>

        {/* ================= NOTIFICATIONS ================= */}
        <div className="overflow-hidden rounded-2xl border border-[#E1E7E4] bg-white shadow-sm">

          {filteredNotifications.length > 0 ? (
            <div className="divide-y divide-[#EDF0EE]">

              {filteredNotifications.map((notification) => {
                const Icon = notification.icon;

                return (
                  <div
                    key={notification.id}
                    className={`group relative flex gap-4 p-4 transition-all duration-200 sm:p-5 ${
                      notification.unread
                        ? "bg-[#FAFCFB]"
                        : "bg-white"
                    } hover:bg-[#F7FAF8]`}
                  >

                    {/* Unread indicator */}
                    {notification.unread && (
                      <span className="absolute left-0 top-0 h-full w-1 bg-[#0E6B5C]" />
                    )}

                    {/* Icon */}
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${getIconStyle(
                        notification.type
                      )}`}
                    >
                      <Icon size={19} />
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">

                      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">

                        <div>
                          <div className="flex items-center gap-2">

                            <h3
                              className={`text-sm ${
                                notification.unread
                                  ? "font-bold text-[#16302B]"
                                  : "font-semibold text-[#3F4B46]"
                              }`}
                            >
                              {notification.title}
                            </h3>

                            {notification.unread && (
                              <span className="h-1.5 w-1.5 rounded-full bg-[#E08A3C]" />
                            )}

                          </div>

                          <p className="mt-1 max-w-2xl text-sm leading-5 text-[#7B8580]">
                            {notification.message}
                          </p>
                        </div>

                        <span className="shrink-0 text-xs text-[#9AA39F]">
                          {notification.time}
                        </span>

                      </div>

                      {/* Actions */}
                      <div className="mt-3 flex items-center gap-3">

                        {notification.unread && (
                          <button
                            type="button"
                            onClick={() =>
                              markAsRead(notification.id)
                            }
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0E6B5C] transition hover:text-[#16302B]"
                          >
                            <Check size={14} />
                            Mark as read
                          </button>
                        )}

                        <button
                          type="button"
                          onClick={() =>
                            deleteNotification(notification.id)
                          }
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#9A6A55] transition hover:text-[#B34D32]"
                        >
                          <Trash2 size={14} />
                          Delete
                        </button>

                      </div>
                    </div>

                    {/* More */}
                    <button
                      type="button"
                      className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[#9AA39F] transition hover:bg-[#EEF2EF] hover:text-[#16302B] sm:flex"
                      aria-label="More options"
                    >
                      <MoreHorizontal size={18} />
                    </button>

                  </div>
                );
              })}

            </div>
          ) : (
            /* ================= EMPTY STATE ================= */
            <div className="flex min-h-[360px] flex-col items-center justify-center px-6 text-center">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EAF4F1] text-[#0E6B5C]">
                <Bell size={27} />
              </div>

              <h3 className="mt-5 text-lg font-bold text-[#16302B]">
                No notifications
              </h3>

              <p className="mt-2 max-w-sm text-sm leading-6 text-[#89918D]">
                You're all caught up. New admin activities and
                important updates will appear here.
              </p>

            </div>
          )}

        </div>

      </main>
    </div>
  );
}