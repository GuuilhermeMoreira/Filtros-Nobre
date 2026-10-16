import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { LanguageProvider } from "./i18n";
import "./styles.css";
import "./brand.css";
import "./private-label.css";
import "./motion.css";
import "./whatsapp-float.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider><App /></LanguageProvider>
  </StrictMode>,
);

