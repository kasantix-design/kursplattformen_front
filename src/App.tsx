// 📄 src/App.tsx
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Notification from "./components/Notification";
import AppRoutes from "./router";

export default function App() {
  const location = useLocation();
  const [notis, setNotis] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const isLoginPage = location.pathname === "/login";
  const isUnknownPublicPage = isMounted && !isLoggedIn && !isLoginPage;

  return (
    <>
      {isLoggedIn && !isLoginPage && <Navbar />}

      {isUnknownPublicPage && (
        <div className="content-box" style={{ textAlign: "center", marginTop: "4rem" }}>
          <h2>Du må logge inn</h2>
          <p>
            <a href="/login">Gå til innlogging</a>
          </p>
        </div>
      )}

      <AppRoutes />

      {isLoggedIn && !isLoginPage && <Footer />}

      {notis && <Notification message={notis} onClose={() => setNotis("")} />}
    </>
  );
}
