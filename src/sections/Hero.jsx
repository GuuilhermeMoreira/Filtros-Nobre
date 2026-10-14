import { productImages } from "../productImages";
import { contactUrl } from "../commercial";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__content">
        <p className="eyebrow">Filtros de café & utilidades para a cozinha</p>
        <h1 id="hero-title">Mais praticidade.<br />Mais sabor.<br /><em>Mais Nobre.</em></h1>
        <p className="hero__lead">Do café passado na hora aos cuidados com a cozinha. Conheça a linha Nobre e encontre os produtos para o seu negócio.</p>
        <div className="hero__actions">
          <a className="button button--primary" href="#produtos">Conhecer os produtos <span aria-hidden="true">↗</span></a>
          <a className="hero__contact" href={contactUrl} target="_blank" rel="noopener noreferrer">Falar com a equipe →</a>
        </div>
        <p className="hero__footnote">Linha Nobre para revenda · Filtros para marcas próprias</p>
      </div>
      <div className="hero-showcase">
        <span className="hero-showcase__label">O café de cada dia começa aqui.</span>
        <div className="hero-showcase__products">
          <img src={productImages.filter100} alt="Filtro de papel Nobre modelo 100" />
          <img src={productImages.filter103} alt="Filtro de papel Nobre modelo 103" fetchPriority="high" />
          <img src={productImages.filter102} alt="Filtro de papel Nobre modelo 102" />
        </div>
        <div className="hero-showcase__caption"><strong>Pequenos cuidados. Bons momentos.</strong><a href="#filtros-papel">Explore a linha de filtros →</a></div>
      </div>
    </section>
  );
}
