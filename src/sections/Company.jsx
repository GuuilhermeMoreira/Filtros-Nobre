import { useLanguage } from "../i18n";
import Icon from "../Icon";
import { contactUrl } from "../commercial";
import { history } from "../company-history";
import useHistoryScroll from "../useHistoryScroll";
export default function Company() {
  const { t, language } = useLanguage();
  const { sectionRef, frameRef, introRef, viewportRef, trackRef } = useHistoryScroll(language);
  return (
    <section ref={sectionRef} className="company-history" id="empresa" aria-labelledby="empresa-title">
      <div ref={frameRef} className="company-history__frame">
        <div ref={introRef} className="company-history__intro">
          <p className="eyebrow">{t("Nossa trajetória")}</p>
          <h2 id="empresa-title">{t("Uma história de trabalho, coragem e evolução")}</h2>
          <p className="company-history__lead">{t("A história do Grupo Filtros Nobre nasceu da experiência na indústria, da parceria, do esforço familiar e da busca constante por crescimento e qualidade.")}</p>
          <a className="button button--primary" href={t(contactUrl)} target="_blank" rel="noopener noreferrer">
            {t("Fale com nossa equipe")} <Icon name="arrowRight" />
          </a>
        </div>
        <div ref={viewportRef} className="company-history__viewport">
        <ol ref={trackRef} className="company-history__timeline" aria-label={t("Retrospectiva da nossa história")}>
          {history.map(({ date, title, text }) => (
            <li className="company-history__milestone" key={date}>
              <span className="company-history__date">{t(date)}</span>
              <h3>{t(title)}</h3>
              <p>{t(text)}</p>
            </li>
          ))}
        </ol>
        </div>
      </div>
    </section>
  );
}
