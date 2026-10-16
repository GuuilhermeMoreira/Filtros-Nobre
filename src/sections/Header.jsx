import { useLanguage } from "../i18n";
import { productImages } from "../productImages";
import { useEffect, useState } from "react";
import { contactUrl } from "../commercial";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.5 11.7a8.4 8.4 0 0 1-12.4 7.4L3.5 20.5l1.4-4.4A8.4 8.4 0 1 1 20.5 11.7Z" />
      <path d="M8.1 7.4c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.3.1.5-.1.7l-.6.8c-.2.2-.1.4 0 .6.7 1.3 1.8 2.3 3.2 2.9.3.1.5.1.7-.1l.9-1.1c.2-.2.4-.3.7-.2l1.8.9c.3.1.4.3.4.5 0 .5-.2 1.5-1 2.1-.7.6-1.7.9-3.4.3-1.7-.5-3.7-1.6-5.3-3.6-1.4-1.7-2.1-3.6-2-4.6.1-.5.2-.7.3-.9Z" />
    </svg>
  );
}

export default function Header() {
  const { t, language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sectionIds = ["produtos", "outros-produtos", "marcas-proprias", "empresa", "qualidade", "contato"];
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
      const reference = window.scrollY + 170;
      let current = "";
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= reference) current = id;
      });
      setActiveSection(current);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", isOpen);
    return () => document.body.classList.remove("nav-open");
  }, [isOpen]);

  useEffect(() => {
    const closeWithEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", closeWithEscape);
    return () => window.removeEventListener("keydown", closeWithEscape);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };
  const navClass = (section) => activeSection === section ? "is-active" : "";

  return (
    <header className={"site-header header--white" + (isScrolled ? " is-scrolled" : "") + (isOpen ? " nav-active" : "")}>
      <a className="brand" href="#inicio" aria-label={t("Filtros Nobre")} onClick={closeMenu}>
        <img className="brand__logo" src={productImages.logo} alt={t("")} />
      </a>

      <label className="language-picker">
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="4" ry="9" /><path d="M3 12h18" /></svg>
        <span className="sr-only">{t("Idioma do site")}</span>
        <select value={language} onChange={event => setLanguage(event.target.value)}>
          <option value="pt-BR" lang="pt-BR">PT-BR</option>
          <option value="en" lang="en">English</option>
          <option value="es" lang="es">Español</option>
        </select>
      </label>

      <button className="nav-toggle" type="button" aria-expanded={isOpen} aria-controls="site-nav" onClick={() => setIsOpen((open) => !open)}>
        <span className="nav-toggle__line" />
        <span className="nav-toggle__line" />
        <span className="nav-toggle__line" />
        <span className="sr-only">{isOpen ? "Fechar menu" : "Abrir menu"}</span>
      </button>

      <nav
        className={"site-nav" + (isOpen ? " is-open" : "")}
        id="site-nav"
        aria-label={t("Navegação principal")}
        onClick={(event) => {
          if (event.target.closest("a")) closeMenu();
        }}
      >
        <a className={navClass("produtos")} href="#produtos">{t("Produtos")}</a>

        <a className={navClass("marcas-proprias")} href="#marcas-proprias">{t("Marcas próprias")}</a>
        <a className={navClass("empresa")} href="#empresa">{t("A empresa")}</a>

        <a className={navClass("qualidade")} href="#qualidade">{t("Qualidade")}</a>
        <a className={navClass("contato")} href="#contato">{t("Contato")}</a>
        <a className="header-whatsapp" href={t(contactUrl)} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon />
          <span>{t("Solicitar orçamento")}</span>
        </a>
      </nav>

      <button
        className={"nav-backdrop" + (isOpen ? " is-visible" : "")}
        type="button"
        aria-label={t("Fechar menu")}
        onClick={closeMenu}
        tabIndex={isOpen ? 0 : -1}
      />
    </header>
  );
}




