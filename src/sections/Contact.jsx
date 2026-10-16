import Icon from "../Icon";
import { useLanguage } from "../i18n";
import { contactUrl, resaleUrl } from "../commercial";
export default function Contact() {
  const { t } = useLanguage();
  return <section className="contact" id="contato" aria-labelledby="contato-title"><div><p className="eyebrow">{t("Vamos conversar")}</p><h2 id="contato-title">{t("Leve a Nobre para o seu negócio.")}</h2><p>{t("Informe os produtos e as quantidades que procura. Nossa equipe orienta você sobre apresentações e condições comerciais.")}</p></div><div className="contact__actions"><a className="button button--primary" href={t(contactUrl)} target="_blank" rel="noopener noreferrer">{t("Solicitar orçamento pelo WhatsApp")} <Icon name="arrowRight" /></a><a className="contact__resale" href={t(resaleUrl)} target="_blank" rel="noopener noreferrer">{t("Tenho interesse em revender")}</a></div></section>;
}
