import { productImages } from "../productImages";
import { privateLabelUrl } from "../commercial";
export default function Quality() {
  return (
    <section className="section section--split section--soft" id="qualidade" aria-labelledby="qualidade-title">
      <div className="section__copy">
        <p className="eyebrow">Produto e qualidade</p>
        <h2 id="qualidade-title">Conheça o filtro que vai levar sua marca.</h2>
        <p>No catálogo Nobre, os filtros de papel são produzidos com fibras vegetais, nos modelos 100, 102 e 103. O filtro reutilizável TNT 103 é produzido em polipropileno.</p>
        <p>Converse com nossa equipe sobre as especificações do modelo escolhido e as informações técnicas para seu pedido.</p>
        <a className="button button--outline" href={privateLabelUrl} target="_blank" rel="noopener noreferrer">Consultar informações técnicas</a>
      </div>
      <figure className="factory-product"><img src={productImages.filter102} alt="Embalagem Nobre de filtros de papel modelo 102, com 30 unidades" loading="lazy" /><figcaption>Modelo 102 da linha Nobre.</figcaption></figure>
    </section>
  );
}

