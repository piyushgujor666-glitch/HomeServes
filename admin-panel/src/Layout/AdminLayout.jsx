import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="min-h-screen bg-[#F6F9F7]">

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="min-h-[calc(100vh-68px)] pb-32 lg:pb-0">
        <Outlet />
      </main>

      {/* Footer - visible only on desktop */}
      <Footer />

    </div>
  );
}

export default AdminLayout;