const steps = [
  ["01", "Defina seu produto", "Escolha o modelo e informe a quantidade desejada."],
  ["02", "Aprove a embalagem", "Defina a apresentação da sua marca e aprove a arte antes da produção."],
  ["03", "Combine produção e entrega", "Nossa equipe confirma as condições do pedido e orienta os próximos passos."],
];
export default function Moments() {
  return (
    <section className="section process" id="contratacao" aria-labelledby="contratacao-title">
      <div className="section__header"><p className="eyebrow">Como funciona</p><h2 id="contratacao-title">Da escolha do filtro ao seu pedido.</h2></div>
      <div className="process__steps">{steps.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>
  );
}
