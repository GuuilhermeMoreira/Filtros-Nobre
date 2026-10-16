import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "./translations";

const LanguageContext = createContext({ language: "pt-BR", t: value => value });
const languages = ["pt-BR", "en", "es"];
const phrases = Object.keys(translations).sort((a, b) => b.length - a.length);
const escapeRegex = value => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const phrasePattern = new RegExp(phrases.map(escapeRegex).join("|"), "gu");

export function translate(value, language) {
  if (typeof value !== "string" || language === "pt-BR") return value;
  if (value.startsWith("https://wa.me/")) {
    const url = new URL(value);
    const message = url.searchParams.get("text");
    if (message) url.searchParams.set("text", translate(message, language));
    return url.toString();
  }
  const text = value.trim();
  if (translations[text]) return value.replace(text, translations[text][language]);
  // Handles composed labels such as product names in accessible descriptions.
  return value.replace(phrasePattern, phrase => translations[phrase][language]);
}

export function LanguageProvider({ children, initialLanguage = "pt-BR" }) {
  const [language, setLanguage] = useState(() => {
    try {
      const saved = localStorage.getItem("nobre-language");
      return languages.includes(saved) ? saved : initialLanguage;
    } catch { return initialLanguage; }
  });
  useEffect(() => {
    document.documentElement.lang = language;
    document.title = translate("Filtros Nobre | Filtros de café & utilidades para a cozinha", language);
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = {
      'pt-BR': 'Conheça os filtros de café, papel-alumínio, filme PVC e utilidades da linha Nobre. Consulte opções para revenda e fabricação de filtros para sua marca.',
      en: 'Discover Nobre coffee filters, aluminum foil, PVC food wrap and kitchen essentials. Ask about resale and private label manufacturing.',
      es: 'Conozca los filtros de café, papel de aluminio, film de PVC y artículos de cocina Nobre. Consulte opciones para reventa y fabricación para su marca.',
    }[language];
    try { localStorage.setItem("nobre-language", language); } catch { /* Storage may be disabled. */ }
  }, [language]);
  const value = useMemo(() => ({ language, setLanguage, t: value => translate(value, language) }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export const useLanguage = () => useContext(LanguageContext);
