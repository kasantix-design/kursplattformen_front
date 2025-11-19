// 📄 src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// ✅ Global stil
import "./assets/style.css";

// 🎯 Sørg for at root-elementet finnes før du prøver å mounte
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Fant ikke #root-elementet i index.html");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
