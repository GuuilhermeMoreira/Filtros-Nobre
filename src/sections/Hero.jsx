import Icon from "../Icon";
import { useLanguage } from "../i18n";
import { productImages } from "../productImages";
import { contactUrl } from "../commercial";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__content">
        <p className="eyebrow">{t("Filtros de café & utilidades para a cozinha")}</p>
        <h1 id="hero-title">{t("Mais praticidade.")}<br />{t("Mais sabor.")}<br /><em>{t("Mais Nobre.")}</em></h1>
        <p className="hero__lead">{t("Do café passado na hora aos cuidados com a cozinha. Conheça a linha Nobre e encontre os produtos para o seu negócio.")}</p>
        <div className="hero__actions">
          <a className="button button--primary" href="#produtos">{t("Conhecer os produtos ")}<span aria-hidden="true"><Icon name="arrowRight" /></span></a>
          <a className="hero__contact" href={t(contactUrl)} target="_blank" rel="noopener noreferrer">{t("Falar com a equipe")} <Icon name="arrowRight" /></a>
        </div>
        <p className="hero__footnote">{t("Linha Nobre para revenda · Filtros para marcas próprias")}</p>
      </div>
      <div className="hero-showcase">
        <span className="hero-showcase__label">{t("O café de cada dia começa aqui.")}</span>
        <div className="hero-showcase__products">
          <img src={productImages.filter100} alt={t("Filtro de papel Nobre modelo 100")} />
          <img src={productImages.filter103} alt={t("Filtro de papel Nobre modelo 103")} fetchPriority="high" />
          <img src={productImages.filter102} alt={t("Filtro de papel Nobre modelo 102")} />
        </div>
        <div className="hero-showcase__caption"><strong>{t("Pequenos cuidados. Bons momentos.")}</strong><a href="#filtros-papel">{t("Explore a linha de filtros")} <Icon name="arrowRight" /></a></div>
      </div>
    </section>
  );
}
