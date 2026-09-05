import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminProfile = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("Admin User");
  const [email, setEmail] = useState("admin@example.com");
  const [phone, setPhone] = useState("+91 9876543210");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      name,
      email,
      phone,
    });

    alert("Profile updated successfully!");
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
    <div className="min-h-screen bg-gray-100 p-6">

      {/* TITLE */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Admin Profile
        </h1>

        <p className="text-gray-500 mt-1">
          Manage your account information
        </p>
      </div>

      <div className="max-w-4xl mx-auto">

        {/* PROFILE CARD */}
        <div className="bg-white rounded-2xl shadow-sm p-8">

          {/* Profile */}
          <div className="flex items-center gap-5 mb-8">

            <div
              className="w-24 h-24 rounded-full bg-blue-600
              flex items-center justify-center
              text-white text-3xl font-bold"
            >
              A
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800">
                {name}
              </h2>

              <p className="text-gray-500">
                Administrator
              </p>

              <button
                type="button"
                className="mt-2 text-sm text-blue-600 hover:underline"
              >
                Change Profile Picture
              </button>
            </div>

          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            {/* NAME */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border
                border-gray-300 rounded-lg
                outline-none focus:ring-2
                focus:ring-blue-500"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border
                border-gray-300 rounded-lg
                outline-none focus:ring-2
                focus:ring-blue-500"
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>

              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 border
                border-gray-300 rounded-lg
                outline-none focus:ring-2
                focus:ring-blue-500"
              />
            </div>

            {/* ROLE */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Role
              </label>

              <input
                type="text"
                value="Administrator"
                disabled
                className="w-full px-4 py-3 border
                border-gray-200 rounded-lg
                bg-gray-100 text-gray-500"
              />
            </div>

            {/* BUTTONS */}
            <div className="flex justify-end gap-3 pt-4">

              <button
                type="button"
                onClick={() => navigate("/admin/dashboard")}
                className="px-6 py-3 border
                border-gray-300 rounded-lg
                text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-6 py-3 bg-blue-600
                text-white rounded-lg
                font-semibold hover:bg-blue-700
                transition"
              >
                Save Changes
              </button>

            </div>

          </form>
        </div>

        {/* SECURITY */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mt-6">

          <h2 className="text-xl font-bold text-gray-800">
            Account Security
          </h2>

          <p className="text-gray-500 mt-1">
            Manage your password and account security
          </p>

          <button
            type="button"
            onClick={() => navigate("/forgot")}
            className="mt-5 px-5 py-3 border
            border-blue-600 text-blue-600
            rounded-lg font-medium
            hover:bg-blue-50 transition"
          >
            Change Password
          </button>

        </div>

        {/* LOGOUT AT END OF PAGE */}
        <div className="flex justify-center mt-8 mb-6">

          <button
            onClick={handleLogout}
            className="px-8 py-3 bg-red-600 text-white
            rounded-lg font-semibold
            hover:bg-red-700 transition"
          >
            Logout
          </button>

        </div>

      </div>
    </div>
  );
};

export default AdminProfile;