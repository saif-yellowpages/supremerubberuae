import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { HashRouter } from "react-router-dom"; // ✅ Use HashRouter for GitHub Pages
import "./index.css";

const rootElement = document.getElementById("root");

if (!rootElement) throw new Error("Root element not found");

createRoot(rootElement).render(
  <HashRouter>
    <App />
  </HashRouter>
);
