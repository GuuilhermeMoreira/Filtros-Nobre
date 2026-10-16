import { useLanguage } from "../i18n";
const principles = [
  ["Materiais adequados ao uso", "Cada produto começa pela escolha do material certo para a função que ele cumpre."],
  ["Processo sob controle", "Verificações ao longo da produção para manter o resultado consistente."],
  ["Embalagem que informa", "Quantidade, dimensões e orientações de uso claras para quem compra."],
  ["Escuta ativa", "Contato de clientes e parceiros alimenta a melhoria contínua dos produtos."],
];
export default function Quality() {
  const { t } = useLanguage();
  return (
    <section className="quality-principles" id="qualidade" aria-labelledby="qualidade-title">
      <div className="quality-principles__layout">
        <h2 id="qualidade-title">{t("Como pensamos qualidade")}</h2>
        <div className="quality-principles__grid">
          {principles.map(([title, description]) => (
            <article className="quality-principles__item" key={title}>
              <h3>{t(title)}</h3>
              <p>{t(description)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

