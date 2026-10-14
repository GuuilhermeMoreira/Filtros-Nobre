export const whatsappUrl = (message) => {
  const siteMessage = `Olá! Vim pelo site da Nobre. ${message.replace(/^Olá!\s*/, "")}`;
  return `https://wa.me/5511947110241?text=${encodeURIComponent(siteMessage)}`;
};
export const contactUrl = whatsappUrl("Gostaria de falar com a equipe comercial.");
export const privateLabelUrl = whatsappUrl("Olá! Tenho interesse em fabricar filtros de café com a minha marca. Gostaria de conhecer os modelos e as condições.");
export const resaleUrl = whatsappUrl("Olá! Tenho interesse em revender os produtos Nobre. Poderiam me enviar informações comerciais?");
