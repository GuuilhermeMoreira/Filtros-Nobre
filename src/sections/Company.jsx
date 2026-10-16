import { useLanguage } from "../i18n";
export default function Company() {
  const { t } = useLanguage();
  return (
    <section className="section section--split" id="empresa" aria-labelledby="empresa-title">
      <div className="section__copy">
        <p className="eyebrow">{t("A empresa")}</p>
        <h2 id="empresa-title">{t("A indústria que cuida da marca do cliente com consistência.")}</h2>
        <p>{t("A Filtros Nobre fabrica filtros de café para marcas próprias de clientes e comercializa sua linha Nobre. Estamos em Capela do Alto, São Paulo, e atendemos empresas de todo o Brasil.")}</p>
        <p>{t("Desde 2011, nossa história está ligada aos filtros de café e aos produtos que fazem parte da rotina da cozinha.")}</p>
        <p>{t("Nossa equipe reúne profissionais treinados e experientes para acompanhar seu pedido e orientar você na escolha dos produtos.")}</p>
      </div>
      <div className="note-panel">
        <h3>{t("Indústria e marca Nobre")}</h3>
        <ul className="check-list">
          <li>{t("Fabricação de filtros com a marca do cliente.")}</li>
          <li>{t("Embalagens personalizadas e acompanhamento comercial.")}</li>
          <li>{t("Linha Nobre para compradores e revendedores.")}</li>
        </ul>
      </div>
    </section>
  );
}
