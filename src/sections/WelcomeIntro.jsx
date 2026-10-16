import { useEffect, useState } from "react";
import { useLanguage } from "../i18n";

export default function WelcomeIntro() {
  const [visible, setVisible] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const dismiss = () => setVisible(false);
    const handlePreference = () => { if (preference.matches) dismiss(); };
    handlePreference();
    // A fallback also removes the decoration when animations are interrupted.
    const timeout = window.setTimeout(dismiss, 2500);
    window.addEventListener("pointerdown", dismiss, { once: true });
    window.addEventListener("keydown", dismiss, { once: true });
    preference.addEventListener("change", handlePreference);
    return () => {
      window.clearTimeout(timeout);
      window.removeEventListener("pointerdown", dismiss);
      window.removeEventListener("keydown", dismiss);
      preference.removeEventListener("change", handlePreference);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="welcome-intro" aria-hidden="true" onAnimationEnd={event => {
      if (event.target === event.currentTarget) setVisible(false);
    }}>
      <div className="welcome-intro__halo" />
      <div className="welcome-intro__content">
        <span className="welcome-intro__eyebrow">Filtros Nobre</span>
        <div className="welcome-intro__word">
          {Array.from("NOBRE").map((letter, index) => <span key={index} style={{ "--letter-index": index }}>{letter}</span>)}
        </div>
        <span className="welcome-intro__rule" />
        <p className="welcome-intro__tagline">{t("Pequenos cuidados. Bons momentos.")}</p>
      </div>
    </div>
  );
}
