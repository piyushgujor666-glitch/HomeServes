import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#F7F8F7] text-[#16302B] transition-colors dark:bg-slate-950 dark:text-white">
      <Header />

      <main className="min-h-[calc(100vh-4rem)] pb-24 md:pb-0">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
