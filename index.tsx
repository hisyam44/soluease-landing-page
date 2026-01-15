import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Ensure body does not block scrolling due to injected classes
const body = document.body;
body.classList.remove(
  "overflow-hidden",
  "h-screen",
  "w-screen",
  "bg-gradient-to-br",
  "from-pink-100",
  "via-blue-50",
  "to-yellow-50"
);
body.style.overflowY = "auto";

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
