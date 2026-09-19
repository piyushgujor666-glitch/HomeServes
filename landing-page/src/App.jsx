import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./SignUp";
import Forgotpassword from "./Forgot";

function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/signup" element={<Signup />} />

      <Route path="/forgot" element={<Forgotpassword />} />

      <Route path="/home" element={<Home />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;