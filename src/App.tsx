// src/App.tsx
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";
import Notification from "./components/Notification";
import AppRoutes from "./router";

export default function App() {
  const [notis, setNotis] = useState("");

  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
      {notis && <Notification message={notis} onClose={() => setNotis("")} />}
    </>
  );
}
