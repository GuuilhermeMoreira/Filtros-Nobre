import { useLanguage } from "../i18n";
export default function QuickFacts() {
  const { t } = useLanguage();
  return <div className="catalog-intro" aria-label={t("Linhas de produtos")}><a href="#produtos"><span>{t("01 / CAFÉ")}</span><strong>{t("O filtro para cada preparo")}</strong></a><a href="#outros-produtos"><span>{t("02 / COZINHA")}</span><strong>{t("Praticidade no dia a dia")}</strong></a><a href="#marcas-proprias"><span>{t("03 / SUA MARCA")}</span><strong>{t("Filtros com a sua identidade")}</strong></a></div>;
}
