import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Forgot from "./pages/Forgot";
import ForgotPhoneTemp from "./pages/ForgotPhoneTemp";

import AdminLayout from "./Layout/AdminLayout";

import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Services from "./pages/Services";
import Users from "./pages/Users";
import Workers from "./pages/Workers";
import AdminProfile from "./pages/AdminProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Authentication */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<Forgot />} />

        {/* Forgot Password - Phone */}
        <Route
          path="/forgot-phone-temp"
          element={<ForgotPhoneTemp />}
        />

        {/* Admin */}
        <Route path="/admin" element={<AdminLayout />}>

          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="services" element={<Services />} />
          <Route path="users" element={<Users />} />
          <Route path="workers" element={<Workers />} />
          <Route path="adminprofile" element={<AdminProfile />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;