// 📄 src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// ✅ Global stil
import "./assets/style.css";

function bootstrapApp() {
  const rootElement = document.getElementById("root");

  if (!rootElement) {
    console.error("❌ Fant ikke <div id='root'> i index.html");
    return;
  }

  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}

bootstrapApp();
