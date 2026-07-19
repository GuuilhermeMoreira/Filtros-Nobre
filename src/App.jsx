import { useEffect, useState } from "react";

const pvcVariants = [
  {
    meters: 10,
    label: "10 metros",
    size: "28 cm × 10 m",
    image: "/assets/produto-filme-pvc.png",
  },
  {
    meters: 15,
    label: "15 metros",
    size: "28 cm × 15 m",
    image: "/assets/produto-filme-pvc-15m.png",
  },
  {
    meters: 30,
    label: "30 metros",
    size: "28 cm × 30 m",
    image: "/assets/produto-filme-pvc-30m.png",
  },
];
const filterVariants = [
  {
    label: "100 Pequeno",
    primary: "100",
    unit: "c/30",
    detail: "Pequeno | 30 unidades",
    image: "/assets/produto-filtro-cafe-100.png",
  },
  {
    label: "102 Médio",
    primary: "102",
    unit: "c/30",
    detail: "Médio | 30 unidades",
    image: "/assets/produto-filtro-cafe-102.png",
  },
  {
    label: "103 Grande",
    primary: "103",
    unit: "c/30",
    detail: "Grande | 30 unidades",
    image: "/assets/produto-filtro-cafe-103.png",
  },
];

const products = [
  {
    slug: "filme-pvc",
    tag: "Conservação",
    title: "Filme de PVC transparente",
    text: "Filme de PVC transparente desenvolvido para proteger e conservar os alimentos, ajudando a preservar o frescor, o sabor e a organização da cozinha. Disponível em rolos de 10, 15 e 30 metros.",
    variants: pvcVariants,
    featured: true,
  },
  {
    slug: "filtros-papel",
    tag: "3 tamanhos | 30 unidades",
    title: "Filtros de papel",
    text: "Modelos 100, 102 e 103, todos com 30 unidades e produzidos com fibras vegetais.",
    variants: filterVariants,
    brandHighlight: true,
  },
  {
    slug: "filtro-tnt",
    tag: "Reutilizável",
    title: "Filtro de café TNT 103 Grande",
    text: "Modelo reutilizável que pode ser lavado até cinco vezes. Cartucho com 30 unidades, produzido em polipropileno.",
    image: "/assets/produto-filtro-cafe-tnt-103.png",
    imageAlt: "Cartucho Filtros Nobre de filtro para café reutilizável TNT 103 Grande com 30 unidades",
  },
  {
    slug: "papel-aluminio",
    tag: "Cozinha",
    title: "Papel-alumínio",
    text: "Praticidade para preparar, conservar e embalar alimentos na rotina.",
    placeholder: "Foto do produto",
  },
  {
    slug: "descartaveis",
    tag: "Para servir",
    title: "Descartáveis",
    text: "Itens para servir, compartilhar e tornar cada ocasião mais simples.",
    placeholder: "Foto da linha",
  },
  {
    tag: "Novidade",
    title: "Novidades em breve",
    text: "Estamos preparando novas soluções para ampliar a linha Filtros Nobre.",
    placeholder: "Em breve",
    comingSoon: true,
  },
  {
    tag: "Novidade",
    title: "Mais produtos",
    text: "Este espaço receberá em breve outros produtos para o seu dia a dia.",
    placeholder: "Em breve",
    comingSoon: true,
  },
];

const moments = [
  ["01", "Prepare", "Comece o dia com o sabor e o aroma de um café bem passado."],
  ["02", "Conserve", "Proteja alimentos e preserve o frescor com soluções simples para a cozinha."],
  ["03", "Compartilhe", "Sirva com praticidade nos encontros, nas pausas e nos momentos especiais."],
];

const qualities = [
  ["Uso recorrente", "Produtos presentes nos pequenos momentos do dia."],
  ["Mix objetivo", "Linhas simples, úteis e fáceis de reconhecer."],
  ["Marca próxima", "Uma relação clara e feita para durar."],
];

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.5 11.7a8.4 8.4 0 0 1-12.4 7.4L3.5 20.5l1.4-4.4A8.4 8.4 0 1 1 20.5 11.7Z" />
      <path d="M8.1 7.4c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.3.1.5-.1.7l-.6.8c-.2.2-.1.4 0 .6.7 1.3 1.8 2.3 3.2 2.9.3.1.5.1.7-.1l.9-1.1c.2-.2.4-.3.7-.2l1.8.9c.3.1.4.3.4.5 0 .5-.2 1.5-1 2.1-.7.6-1.7.9-3.4.3-1.7-.5-3.7-1.6-5.3-3.6-1.4-1.7-2.1-3.6-2-4.6.1-.5.2-.7.3-.9Z" />
    </svg>
  );
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sectionIds = ["empresa", "produtos", "momentos", "qualidade", "contato"];
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
      <a className="brand" href="#inicio" aria-label="Filtros Nobre" onClick={closeMenu}>
        <span className="brand__mark" aria-hidden="true">FN</span>
        <span className="brand__text">
          <strong>Filtros Nobre</strong>
          <small>Desde 2011</small>
        </span>
      </a>

      <button className="nav-toggle" type="button" aria-expanded={isOpen} aria-controls="site-nav" onClick={() => setIsOpen((open) => !open)}>
        <span className="nav-toggle__line" />
        <span className="nav-toggle__line" />
        <span className="nav-toggle__line" />
        <span className="sr-only">Abrir menu</span>
      </button>

      <nav
        className={"site-nav" + (isOpen ? " is-open" : "")}
        id="site-nav"
        aria-label="Navegação principal"
        onClick={(event) => {
          if (event.target.closest("a")) closeMenu();
        }}
      >
        <a className={navClass("empresa")} href="#empresa">Empresa</a>

        <div className="nav-dropdown">
          <a className={"nav-dropdown__trigger " + navClass("produtos")} href="#produtos">
            Produtos
          </a>
        </div>

        <a className={navClass("momentos")} href="#momentos">No dia a dia</a>
        <a className={navClass("qualidade")} href="#qualidade">Qualidade</a>
        <a className={navClass("contato")} href="#contato">Contato</a>
        <a className="header-whatsapp" href="https://wa.me/5511947673377" target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon />
          <span>Fale conosco</span>
        </a>
      </nav>

      <button
        className={"nav-backdrop" + (isOpen ? " is-visible" : "")}
        type="button"
        aria-label="Fechar menu"
        onClick={closeMenu}
        tabIndex={isOpen ? 0 : -1}
      />
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <img className="hero__image" src="/assets/hero-filtros-nobre.png" alt="Café e produtos Filtros Nobre sobre uma bancada" />
      <div className="hero__shade" aria-hidden="true" />
      <div className="hero__content">
        <p className="eyebrow">Praticidade que faz parte da rotina</p>
        <h1 id="hero-title">Filtros Nobre</h1>
        <p className="hero__lead">Produtos pensados para acompanhar o café, a cozinha e os pequenos momentos de todos os dias.</p>
        <div className="hero__actions" aria-label="Ações principais">
          <a className="button button--primary" href="#produtos">Conheça nossos produtos</a>
          <a className="button button--ghost" href="#empresa">Nossa história</a>
        </div>
      </div>
    </section>
  );
}

function QuickFacts() {
  return (
    <section className="quick-facts" aria-label="Essência da marca">
      <article><strong>2011</strong><span>O início da nossa história</span></article>
      <article><strong>Feito para o dia a dia</strong><span>Café, cozinha e praticidade</span></article>
      <article><strong>Uma marca próxima</strong><span>Presente em casas e negócios</span></article>
    </section>
  );
}

function Company() {
  return (
    <section className="section section--split" id="empresa" aria-labelledby="empresa-title">
      <div className="section__copy">
        <p className="eyebrow">A empresa</p>
        <h2 id="empresa-title">Uma marca simples, próxima e presente.</h2>
        <p>A Filtros Nobre nasceu com foco em filtros de papel para café e ampliou seu cuidado para outros itens que fazem parte da rotina de preparo, conservação e organização da cozinha.</p>
        <p>Desde 2011, buscamos tornar as tarefas cotidianas mais práticas com produtos úteis, acessíveis e fáceis de usar.</p>
      </div>
      <div className="note-panel">
        <h3>Presente nos pequenos momentos</h3>
        <ul className="check-list">
          <li>No aroma do café preparado todos os dias.</li>
          <li>No cuidado com o alimento e com a cozinha.</li>
          <li>Na rotina de famílias, comércios e profissionais.</li>
        </ul>
      </div>
    </section>
  );
}

function ProductCarousel({ variants, title }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeVariant = variants[activeIndex];

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + variants.length) % variants.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % variants.length);
  };

  return (
    <div className="product-carousel" aria-roledescription="carrossel" aria-label={`Variações de ${title}`}>
      <div className="product-carousel__stage">
        <img
          src={activeVariant.image}
          alt={`${title} Filtros Nobre com ${activeVariant.label}`}
        />
        <button className="product-carousel__arrow product-carousel__arrow--prev" type="button" onClick={showPrevious} aria-label="Ver metragem anterior">‹</button>
        <button className="product-carousel__arrow product-carousel__arrow--next" type="button" onClick={showNext} aria-label="Ver próxima metragem">›</button>
      </div>
      <div className="product-carousel__options" aria-label="Escolha a metragem">
        {variants.map((variant, index) => (
          <button
            className={index === activeIndex ? "is-active" : ""}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-pressed={index === activeIndex}
            key={variant.meters ?? variant.primary}
          >
            {variant.label}
          </button>
        ))}
      </div>
    </div>
  );
}
function Products() {
  return (
    <section className="section product-section" id="produtos" aria-labelledby="produtos-title">
      <div className="section__header product-section__header">
        <div>
          <p className="eyebrow">Nossos produtos</p>
          <h2 id="produtos-title">Soluções para uma rotina mais prática.</h2>
        </div>
        <p>Uma vitrine organizada para conhecer cada produto Filtros Nobre.</p>
      </div>
      <div className="product-grid">
        {products.map((product, index) => (
          <article
            id={product.slug}
            className={`product-card${product.featured ? " product-card--featured" : ""}${product.brandHighlight ? " product-card--brand-highlight" : ""}${product.comingSoon ? " product-card--coming" : ""}`}
            key={`${product.title}-${index}`}
          >
            {product.brandHighlight && (
              <span className="product-card__highlight">Destaque</span>
            )}
            <div className="product-card__media">
              {product.variants ? (
                <ProductCarousel variants={product.variants} title={product.title} />
              ) : product.image ? (
                <img src={product.image} alt={product.imageAlt} />
              ) : (
                <span aria-hidden="true">{product.placeholder}</span>
              )}
            </div>
            <div className="product-card__body">
              <span className="product-card__tag">{product.tag}</span>
              <h3>{product.title}</h3>
              <p>{product.text}</p>
            </div>
          </article>
        ))}
      </div>
      <p className="product-section__note">Em breve, novas linhas completarão esta seleção de produtos.</p>
    </section>
  );
}

function Moments() {
  return (
    <section className="section process" id="momentos" aria-labelledby="momentos-title">
      <div className="section__header">
        <p className="eyebrow">No dia a dia</p>
        <h2 id="momentos-title">Praticidade do começo ao fim.</h2>
      </div>
      <div className="process__steps">
        {moments.map(([number, title, text]) => (
          <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>
        ))}
      </div>
    </section>
  );
}

function Quality() {
  return (
    <section className="section section--split section--soft" id="qualidade" aria-labelledby="qualidade-title">
      <div className="section__copy">
        <p className="eyebrow eyebrow--green">Qualidade</p>
        <h2 id="qualidade-title">Cuidado percebido em cada detalhe.</h2>
        <p>Escolhemos criar produtos descomplicados, porque acreditamos que qualidade também está em facilitar a vida das pessoas.</p>
      </div>
      <div className="quality-list" aria-label="Diferenciais">
        {qualities.map(([title, text]) => (
          <article key={title}><strong>{title}</strong><span>{text}</span></article>
        ))}
      </div>
    </section>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.25" />
      <circle className="instagram-dot" cx="17.4" cy="6.7" r="1.1" />
    </svg>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer__main">
        <div className="footer__brand">
          <a className="brand footer__logo" href="#inicio" aria-label="Filtros Nobre - voltar ao início">
            <span className="brand__mark" aria-hidden="true">FN</span>
            <span className="brand__text">
              <strong>Filtros Nobre</strong>
              <small>Desde 2011</small>
            </span>
          </a>
          <p>Produtos práticos e confiáveis para acompanhar o café, a cozinha e os pequenos momentos de todos os dias.</p>
          <a
            className="footer__instagram"
            href="https://www.instagram.com/filtrosnobree/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Acompanhe a Filtros Nobre no Instagram"
          >
            <span className="footer__instagram-icon"><InstagramIcon /></span>
            <span><small>Siga no Instagram</small><strong>@filtrosnobree</strong></span>
          </a>
        </div>

        <nav className="footer__column" aria-label="Navegação do rodapé">
          <h3>Navegue</h3>
          <a href="#empresa">A empresa</a>
          <a href="#produtos">Nossos produtos</a>
          <a href="#momentos">No dia a dia</a>
          <a href="#qualidade">Qualidade</a>
        </nav>

        <div className="footer__column">
          <h3>Produtos</h3>
          <a href="#produtos">Filme de PVC</a>
          <a href="#produtos">Filtros de papel</a>
          <a href="#produtos">Filtro de café TNT reutilizável</a>
          <a href="#produtos">Papel-alumínio</a>
          <a href="#produtos">Descartáveis</a>
        </div>

        <div className="footer__column footer__contact">
          <h3>Fale conosco</h3>
          <p><strong>Capela do Alto - SP</strong><br />Segunda a quinta-feira, das 7h10 às 17h10.<br />Sexta-feira, das 7h10 às 16h10.</p>
          <a href="https://wa.me/5511947673377" target="_blank" rel="noopener noreferrer">Falar pelo WhatsApp</a>
          <a href="https://www.filtrosnobre.com/" target="_blank" rel="noopener noreferrer">www.filtrosnobre.com</a>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} Filtros Nobre. Todos os direitos reservados.</span>
        <a href="#inicio">Voltar ao topo <span aria-hidden="true">↑</span></a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main id="inicio">
        <Hero />
        <QuickFacts />
        <Company />
        <Products />
        <Moments />
        <Quality />
        <section className="contact" id="contato" aria-labelledby="contato-title">
          <div><p className="eyebrow">Contato</p><h2 id="contato-title">Quer conhecer melhor a Filtros Nobre?</h2></div>
          <a className="button button--primary" href="https://wa.me/5511947673377" target="_blank" rel="noopener noreferrer">Fale com a gente</a>
        </section>
      </main>
      <Footer />
    </>
  );
}
