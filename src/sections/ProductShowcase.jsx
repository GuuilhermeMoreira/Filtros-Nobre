import Icon from "../Icon";
import { useLanguage } from "../i18n";
import { resaleUrl } from "../commercial";

export default function ProductShowcase() {
  const { t } = useLanguage();
  return (
    <section className="product-showcase" aria-labelledby="showcase-title">
      <div className="product-showcase__layout">
        <div className="product-showcase__copy">
          <p className="eyebrow">{t("Uma linha, muitas possibilidades")}</p>
          <h2 id="showcase-title">{t("A linha Nobre no seu negócio.")}</h2>
          <p className="product-showcase__description">{t("Do café à cozinha, produtos que fazem parte de cada dia. Conheça as opções da linha Nobre e converse com nossa equipe sobre revenda.")}</p>
          <a className="button button--primary" href={t(resaleUrl)} target="_blank" rel="noopener noreferrer">
            {t("Fale com nossa equipe")} <Icon name="arrowRight" />
          </a>
        </div>
        <div className="product-showcase__visual">
          <img src="/assets/linha-produtos-nobre.png" alt={t("Linha Nobre com filtros de café, protetores de fogão, panos multiuso, filme PVC e papel-alumínio")} width="1254" height="1254" loading="lazy" decoding="async" />
        </div>
      </div>
    </section>
  );
}
