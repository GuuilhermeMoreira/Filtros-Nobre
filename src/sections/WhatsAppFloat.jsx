import { useEffect, useState } from "react";
import { contactUrl } from "../commercial";

export default function WhatsAppFloat() {
  const [showWelcome, setShowWelcome] = useState(true);
  useEffect(() => {
    const timeout = window.setTimeout(() => setShowWelcome(false), 4000);
    return () => window.clearTimeout(timeout);
  }, []);
  return (
    <a className={`whatsapp-float${showWelcome ? " whatsapp-float--welcome" : ""}`} href={contactUrl} target="_blank" rel="noopener noreferrer" aria-label="Fale com a Nobre pelo WhatsApp. Atendemos todo o Brasil.">
      <span className="whatsapp-float__label">Atendemos todo o Brasil</span>
      <span className="whatsapp-float__icon">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.5 11.7a8.4 8.4 0 0 1-12.4 7.4L3.5 20.5l1.4-4.4A8.4 8.4 0 1 1 20.5 11.7Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M8.1 7.4c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.3.1.5-.1.7l-.6.8c-.2.2-.1.4 0 .6.7 1.3 1.8 2.3 3.2 2.9.3.1.5.1.7-.1l.9-1.1c.2-.2.4-.3.7-.2l1.8.9c.3.1.4.3.4.5 0 .5-.2 1.5-1 2.1-.7.6-1.7.9-3.4.3-1.7-.5-3.7-1.6-5.3-3.6-1.4-1.7-2.1-3.6-2-4.6.1-.5.2-.7.3-.9Z" fill="currentColor" />
        </svg>
      </span>
    </a>
  );
}
