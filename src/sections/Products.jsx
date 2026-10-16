import { useLanguage } from "../i18n";
import { productImages } from "../productImages";
import { useState } from "react";
import { whatsappUrl, resaleUrl } from "../commercial";

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
    benefit: "Formato pequeno: uma opção para quem procura o modelo 100 para o preparo do café.",
    image: productImages.filter100,
  },
  {
    label: "102 Médio",
    primary: "102",
    unit: "c/30",
    detail: "Médio | 30 unidades",
    benefit: "Formato médio: uma opção para o preparo diário com o modelo 102.",
    image: productImages.filter102,
  },
  {
    label: "103 Grande",
    primary: "103",
    unit: "c/30",
    detail: "Grande | 30 unidades",
    benefit: "Formato grande: escolha o modelo 103 quando precisar de um filtro de tamanho maior.",
    image: productImages.filter103,
  },
];


const filters = [
  { slug: "filtros-papel", title: "Filtros de papel", tag: "Linha Nobre · 3 modelos", material: "Fibras vegetais", quantity: "30 unidades por cartucho", application: "Preparo de café coado", variants: filterVariants },
  { slug: "filtro-tnt", title: "Filtro de café TNT 103 Grande", tag: "Linha Nobre · Reutilizável", material: "Polipropileno", quantity: "30 unidades por cartucho", application: "Preparo de café coado. Pode ser lavado até cinco vezes.", image: productImages.filterTnt },
];
const complementary = [
  { slug: "filme-pvc", title: "Filme de PVC transparente", tag: "Conservação", text: "Para proteger e conservar alimentos. Rolos de 28 cm de largura, nas apresentações de 10, 15 e 30 metros.", variants: pvcVariants },
  { slug: "papel-aluminio", title: "Papel-alumínio", image: productImages.aluminum, tag: "Cozinha", text: "Para embrulhar, assar e conservar alimentos. Consulte as apresentações disponíveis." },
  { slug: "protetores-fogao", title: "Protetores de fogão", tag: "Proteção", image: productImages.stoveProtector, text: "Folhas protetoras de alumínio para o fogão. Embalagem com 12 unidades de 27 × 27 cm." },
  { slug: "panos-multiuso", title: "Panos multiuso", tag: "Limpeza", image: productImages.cleaningCloths, text: "Panos azuis para a limpeza do dia a dia. Embalagem com 5 unidades de 50 × 28 cm." },
];
function ProductCard({ product }) {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const variant = product.variants?.[activeIndex];
  const image = variant?.image ?? product.image;
  const message = `Olá! Gostaria de solicitar um orçamento para ${product.title}${variant ? `, opção ${variant.label}${variant.size ? ` (${variant.size})` : ""}` : ""} da linha Nobre. Poderiam me enviar informações comerciais?`;
  return (
    <article id={product.slug} className={`product-card${!image ? " product-card--text" : ""}`}>
      {image && <div className="product-card__media">
        <img key={image} src={image} alt={t(`${product.title} Nobre${variant ? `, ${variant.label}` : ""}`)} loading="lazy" />
        {product.variants && <div className="product-carousel__options" role="group" aria-label={t(`Escolha a apresentação de ${product.title}`)}>
          {product.variants.map((option, index) => <button key={option.label} type="button" className={index === activeIndex ? "is-active" : ""} aria-pressed={index === activeIndex} onClick={() => setActiveIndex(index)}>{t(option.label)}</button>)}
        </div>}
      </div>}
      <div className="product-card__body">
        <span className="product-card__tag">{t(product.tag)}</span>
        <h3>{t(product.title)}</h3>
        {product.material ? <dl className="product-specs">
          <div><dt>{t("Modelo")}</dt><dd>{variant?.label ?? "103 Grande"}</dd></div>
          <div><dt>{t("Material")}</dt><dd>{t(product.material)}</dd></div>
          <div><dt>{t("Cartucho")}</dt><dd>{t(product.quantity)}</dd></div>
          <div><dt>{t("Aplicação")}</dt><dd>{t(product.application)}</dd></div>
        </dl> : <p>{t(product.text)}</p>}
        {product.material && <p className="product-benefit" aria-live="polite"><strong>{t("Para o seu dia a dia")}</strong>{variant?.benefit ?? "Pode ser lavado até cinco vezes, permitindo reutilizar o filtro em novos preparos."}</p>}
        {variant?.size && <p className="product-selection" aria-live="polite">{t("Apresentação: ")}{t(variant.size)}</p>}
        <a className="product-card__quote" href={t(whatsappUrl(message))} target="_blank" rel="noopener noreferrer" aria-label={t(`Solicitar orçamento de ${product.title}${variant ? ` ${variant.label}` : ""} pelo WhatsApp`)}>{t("Solicitar orçamento ")}<span aria-hidden="true">→</span></a>
      </div>
    </article>
  );
}
export default function Products() {
  const { t } = useLanguage();
  return (
    <section className="section product-section" id="produtos" aria-labelledby="produtos-title">
      <div className="section__header product-section__header"><div><p className="eyebrow">{t("Modelos de filtros")}</p><h2 id="produtos-title">{t("Um bom café começa com a escolha do filtro.")}</h2></div><p>{t("Papel ou TNT: conheça os modelos, compare as apresentações e solicite um orçamento direto com nossa equipe.")}</p></div>
      <div className="product-grid filter-grid">{filters.map(product => <ProductCard key={product.slug} product={product} />)}</div>
      <div className="resale-callout"><div><h3>{t("A marca Nobre no seu comércio.")}</h3><p>{t("Interessado em comprar para revenda? Fale com nossa equipe comercial.")}</p></div><a className="button button--outline" href={t(resaleUrl)} target="_blank" rel="noopener noreferrer">{t("Quero revender Nobre")}</a></div>
    </section>
  );
}
export function OtherProducts() {
  const { t } = useLanguage();
  return (
    <section className="section product-section section--soft" id="outros-produtos" aria-labelledby="outros-title">
      <div className="section__header"><p className="eyebrow">{t("Outros produtos Nobre")}</p><h2 id="outros-title">{t("Da conservação à limpeza.")}</h2><p>{t("Produtos Nobre para acompanhar os cuidados de cada dia.")}</p></div>
      <div className="product-grid complementary-grid">{complementary.map(product => <ProductCard key={product.slug} product={product} />)}</div>
    </section>
  );
}


