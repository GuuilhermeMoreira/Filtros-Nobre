import { contactUrl, resaleUrl } from "../commercial";
export default function Contact() {
  return <section className="contact" id="contato" aria-labelledby="contato-title"><div><p className="eyebrow">Vamos conversar</p><h2 id="contato-title">Leve a Nobre para o seu negócio.</h2><p>Informe os produtos e as quantidades que procura. Nossa equipe orienta você sobre apresentações e condições comerciais.</p></div><div className="contact__actions"><a className="button button--primary" href={contactUrl} target="_blank" rel="noopener noreferrer">Solicitar orçamento pelo WhatsApp ↗</a><a className="contact__resale" href={resaleUrl} target="_blank" rel="noopener noreferrer">Tenho interesse em revender</a></div></section>;
}
