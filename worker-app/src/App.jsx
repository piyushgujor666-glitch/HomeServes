import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// ================= MAIN PAGES =================
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";

// ================= AUTH =================
import Forgot from "./pages/Forgot";

// ================= PROFILE PAGES =================
import Profile from "./pages/Profile/Profile";
import PersonalInfo from "./pages/Profile/PersonalInfo";
import KYC from "./pages/Profile/KYC";
import Experience from "./pages/Profile/Experience";
import Certificate from "./pages/Profile/Certificate";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* ================= AUTH ================= */}

        {/* Login */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Signup */}
        <Route
          path="/signup"
          element={<Signup />}
        />

        {/* Forgot Password */}
        <Route
          path="/forgot"
          element={<Forgot />}
        />


        {/* ================= MAIN ================= */}

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        {/* Orders */}
        <Route
          path="/orders"
          element={<Orders />}
        />


        {/* ================= PROFILE ================= */}

        {/* Main Profile */}
        <Route
          path="/profile"
          element={<Profile />}
        />

        {/* Personal Information */}
        <Route
          path="/profile/personal"
          element={<PersonalInfo />}
        />

        {/* KYC */}
        <Route
          path="/profile/kyc"
          element={<KYC />}
        />

        {/* Professional Experience */}
        <Route
          path="/profile/experience"
          element={<Experience />}
        />

        {/* Certificates */}
        <Route
          path="/profile/certificates"
          element={<Certificate />}
        />


        {/* ================= DEFAULT ================= */}

        {/* Open "/" → Login */}
        <Route
          path="/"
          element={
            <Navigate
              to="/login"
              replace
            />
          }
        />

        {/* Invalid URL → Login */}
        <Route
          path="*"
          element={
            <Navigate
              to="/login"
              replace
            />
          }
        />

      </Routes>
    </BrowserRouter>
  );
};

export default App;