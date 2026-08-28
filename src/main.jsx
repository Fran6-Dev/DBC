import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { CookieConsentProvider } from "./context/CookieConsentContext";
import "./styles/tokens.css";
import "./styles/global.css";
import "./styles/animations.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CookieConsentProvider>
        <App />
      </CookieConsentProvider>
    </BrowserRouter>
  </StrictMode>
);
