// src/App.tsx
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Notification from "./components/Notification";
import AppRoutes from "./router";

export default function App() {
  const [notis, setNotis] = useState("");
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <>
      {isLoggedIn && !isLoginPage && <Navbar />}
      <AppRoutes />
      {isLoggedIn && !isLoginPage && <Footer />}
      {notis && <Notification message={notis} onClose={() => setNotis("")} />}
    </>
  );
}
