import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Pages/Login/Login.jsx";
import Signup from "./Pages/Sign-up/Signup.jsx";
import ForgotPassword from "./Pages/Forgot.jsx/Forgot.jsx";

import Home from "./Pages/Home/Home.jsx";
import Service from "./Pages/Servicese/Service.jsx";
import BookService from "./Pages/Book-Service/BookService.jsx";
import Bookings from "./Pages/Bookings/Bookings.jsx";
import Profile from "./Pages/Profile/Profile.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/forgot" element={<ForgotPassword />} />

        <Route path="/home" element={<Home />} />

        <Route path="/services" element={<Service />} />

        <Route path="/book-service" element={<BookService />} />

        <Route path="/bookings" element={<Bookings />} />

        <Route path="/profile" element={<Profile />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;