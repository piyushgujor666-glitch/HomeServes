import React, { useState } from "react";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const ForgotPhoneTemp = () => {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Phone:", phone);

    setMessage("OTP has been sent to your phone number.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-3xl font-bold text-center text-gray-800">
          Forgot Password?
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Enter your phone number to reset your password
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>

            <PhoneInput
            international
            defaultCountry="IN"
            value={phone}
            onChange={setPhone}
            placeholder="Enter phone number"
            className="phone-input"
          />
          </div>

          <div className="text-right">
            <Link
              to="/forgot"
              className="text-sm text-blue-600 font-medium hover:underline"
            >
              Using Email Address
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3
            rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Send OTP
          </button>

        </form>

        {message && (
          <p className="mt-5 text-center text-green-600 text-sm">
            {message}
          </p>
        )}

        <p className="text-center text-gray-600 mt-6">
          Remember your password?{" "}

          <Link
            to="/login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
};

export default ForgotPhoneTemp;