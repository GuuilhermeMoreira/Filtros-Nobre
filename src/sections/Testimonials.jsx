import { useEffect, useState } from "react";

const testimonials = [
  {
    category: "A marca",
    quote: "A Filtros Nobre transmite confiança e cuidado em produtos que fazem parte da nossa rotina.",
    name: "Mariana Alves",
    role: "Cliente do varejo",
    image: "/assets/depoimento-mariana.jpg",
  },
  {
    category: "O serviço",
    quote: "Qualidade, praticidade e compromisso fazem a diferença em cada etapa do atendimento.",
    name: "Ricardo Mendes",
    role: "Parceiro comercial",
    image: "/assets/depoimento-ricardo.jpg",
  },
  {
    category: "Equipe comercial",
    quote: "Uma equipe atenciosa, ágil e sempre disponível para entender cada necessidade.",
    name: "Cláudia Nogueira",
    role: "Cliente empresarial",
    image: "/assets/depoimento-claudia.jpg",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      className="section testimonials"
      id="depoimentos"
      aria-labelledby="depoimentos-title"
    >
      <div className="testimonials__intro">
        <p className="eyebrow eyebrow--green">Depoimentos</p>
        <h2 id="depoimentos-title">Confiança construída em cada contato.</h2>
        <p>O cuidado com os produtos, o serviço e o relacionamento está presente em toda a experiência Filtros Nobre.</p>
      </div>

      <div className="testimonials__carousel" aria-roledescription="carrossel">
        <div className="testimonials__viewport">
          <div
            className="testimonials__track"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <article
                className="testimonial-card"
                aria-hidden={index !== activeIndex}
                key={testimonial.category}
              >
                <span className="testimonial-card__category">{testimonial.category}</span>
                <div className="testimonial-card__stars" aria-label="Avaliação positiva">★★★★★</div>
                <blockquote>“{testimonial.quote}”</blockquote>
                <div className="testimonial-card__person">
                  <img
                    src={testimonial.image}
                    alt={`Retrato ilustrativo de ${testimonial.name}`}
                    width="64"
                    height="64"
                    loading="lazy"
                  />
                  <p>
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.role}</span>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="testimonials__controls">
          <div className="testimonials__dots" aria-label="Escolher depoimento">
            {testimonials.map((testimonial, index) => (
              <button
                className={index === activeIndex ? "is-active" : ""}
                type="button"
                aria-label={`Ver depoimento de ${testimonial.name}`}
                aria-pressed={index === activeIndex}
                onClick={() => setActiveIndex(index)}
                key={testimonial.category}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
