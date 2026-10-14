import { productImages } from "../productImages";
import { contactUrl } from "../commercial";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.25" />
      <circle className="instagram-dot" cx="17.4" cy="6.7" r="1.1" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer__main">
        <div className="footer__brand">
          <a className="brand footer__logo" href="#inicio" aria-label="Filtros Nobre - voltar ao início">
            <img className="brand__logo" src={productImages.logo} alt="" />
          </a>
          <p>Fabricação de filtros de café para marcas próprias e produtos da linha Nobre para sua empresa.</p>
          <div className="footer__socials">
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
          <a className="footer__instagram footer__facebook" href="https://www.facebook.com/filtrosnobre/" target="_blank" rel="noopener noreferrer" aria-label="Acompanhe a Filtros Nobre no Facebook">
            <span className="footer__instagram-icon footer__facebook-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 21v-8h3l.5-4H14V7c0-1.1.3-2 2-2h2V1.5A25 25 0 0 0 15 1c-3 0-5 1.8-5 5v3H7v4h3v8Z" /></svg>
            </span>
            <span><small>Siga no Facebook</small><strong>/filtrosnobre</strong></span>
          </a>
          </div>
        </div>

        <nav className="footer__column" aria-label="Navegação do rodapé">
          <h3>Navegue</h3>
          <a href="#empresa">A empresa</a>
          <a href="#produtos">Nossos produtos</a>
          <a href="#marcas-proprias">Marcas próprias</a>
          <a href="#contratacao">Como funciona</a>
          <a href="#qualidade">Qualidade</a>
        </nav>

        <div className="footer__column">
          <h3>Produtos</h3>
          <a href="#filme-pvc">Filme de PVC</a>
          <a href="#filtros-papel">Filtros de papel</a>
          <a href="#filtro-tnt">Filtro de café TNT reutilizável</a>
          <a href="#papel-aluminio">Papel-alumínio</a>
          <a href="#protetores-fogao">Protetores de fogão</a>
          <a href="#panos-multiuso">Panos multiuso</a>

        </div>

        <div className="footer__column footer__contact">
          <h3>Fale conosco</h3>
          <p><strong>Capela do Alto - SP</strong><br />Segunda a quinta-feira, das 7h10 às 17h10.<br />Sexta-feira, das 7h10 às 16h10.</p>
          <a href={contactUrl} target="_blank" rel="noopener noreferrer">Falar pelo WhatsApp</a>
          <a href="https://www.filtrosnobre.com/" target="_blank" rel="noopener noreferrer">www.filtrosnobre.com</a>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__legal">
          <p className="footer__company-name">FILTROS NOBRE INDUSTRIA E COMERCIO LTDA</p>
          <p>CNPJ: 32.123.446/0001-08</p>
        </div>
        <p className="footer__copyright">© {new Date().getFullYear()} Filtros Nobre. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}



