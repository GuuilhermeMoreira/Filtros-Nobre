import { useLanguage } from "../i18n";
import { productImages } from "../productImages";
import { privateLabelUrl } from "../commercial";
export default function Quality() {
  const { t } = useLanguage();
  return (
    <section className="section section--split section--soft" id="qualidade" aria-labelledby="qualidade-title">
      <div className="section__copy">
        <p className="eyebrow">{t("Produto e qualidade")}</p>
        <h2 id="qualidade-title">{t("Conheça o filtro que vai levar sua marca.")}</h2>
        <p>{t("No catálogo Nobre, os filtros de papel são produzidos com fibras vegetais, nos modelos 100, 102 e 103. O filtro reutilizável TNT 103 é produzido em polipropileno.")}</p>
        <p>{t("Converse com nossa equipe sobre as especificações do modelo escolhido e as informações técnicas para seu pedido.")}</p>
        <a className="button button--outline" href={t(privateLabelUrl)} target="_blank" rel="noopener noreferrer">{t("Consultar informações técnicas")}</a>
      </div>
      <figure className="factory-product"><img src={productImages.filter102} alt={t("Embalagem Nobre de filtros de papel modelo 102, com 30 unidades")} loading="lazy" /><figcaption>{t("Modelo 102 da linha Nobre.")}</figcaption></figure>
    </section>
  );
}

