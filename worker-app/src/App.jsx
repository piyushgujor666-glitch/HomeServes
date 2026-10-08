import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/Layout";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Forgot from "./pages/Forgot";

import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Earnings from "./pages/Earnings";
import Schedule from "./pages/Schedule";
import OrderDetails from "./pages/OrderDetails";

import Profile from "./pages/Profile/Profile";
import PersonalInfo from "./pages/Profile/PersonalInfo";
import KYC from "./pages/Profile/KYC";
import Experience from "./pages/Profile/Experience";
import Certificate from "./pages/Profile/Certificate";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public / Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<Forgot />} />

        {/* Worker App */}
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/orders" element={<Layout><Orders /></Layout>} />
        <Route path="/orders/:orderId" element={<Layout><OrderDetails /></Layout>} />
        <Route path="/earning" element={<Layout><Earnings /></Layout>} />
        <Route path="/schedule" element={<Layout><Schedule /></Layout>} />

        {/* Profile */}
        <Route path="/profile" element={<Layout><Profile /></Layout>} />
        <Route path="/profile/personal" element={<Layout><PersonalInfo /></Layout>} />
        <Route path="/profile/kyc" element={<Layout><KYC /></Layout>} />
        <Route path="/profile/experience" element={<Layout><Experience /></Layout>} />
        <Route path="/profile/certificates" element={<Layout><Certificate /></Layout>} />

        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
