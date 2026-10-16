import { build } from "esbuild";
import { writeFile, unlink } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import assert from "node:assert/strict";

const temporaryModule = resolve(".language-verification.mjs");
try {
  const result = await build({
    stdin: { contents: 'export { default as App } from "./src/App.jsx"; export { LanguageProvider, translate } from "./src/i18n.jsx";', resolveDir: process.cwd() },
    bundle: true, write: false, format: "esm", platform: "node", jsx: "automatic",
    loader: { ".jpg": "dataurl", ".png": "dataurl" }, external: ["react", "react/jsx-runtime"],
  });
  await writeFile(temporaryModule, result.outputFiles[0].text);
  const { App, LanguageProvider, translate } = await import(pathToFileURL(temporaryModule));
  for (const [language, heading, product, greeting] of [
    ["pt-BR", "Mais praticidade.", "Filtros de papel", "Olá!"],
    ["en", "More convenience.", "Paper coffee filters", "Hello!"],
    ["es", "Más practicidad.", "Filtros de papel", "¡Hola!"],
  ]) {
    const html = renderToStaticMarkup(createElement(LanguageProvider, { initialLanguage: language }, createElement(App)));
    assert(html.includes(heading), `${language}: hero translation`);
    assert(html.includes(product), `${language}: product translation`);
    assert(new RegExp(`<option(?=[^>]*value="${language}")(?=[^>]*selected="")[^>]*>`).test(html), `${language}: selected language`);
    const links = [...html.matchAll(/href="(https:\/\/wa\.me\/[^\"]+)"/g)];
    assert.equal(links.length, 16);
    for (const [, raw] of links) {
      const url = new URL(raw.replaceAll("&amp;", "&"));
      assert.equal(url.pathname, "/5511947110241");
      assert(url.searchParams.get("text").startsWith(greeting), `${language}: WhatsApp greeting`);
    }
    if (language !== "pt-BR") {
      for (const portuguese of ["Solicitar orçamento", "Fabricação para marca própria", "Atendimento", "Aplicação", "30 unidades por cartucho", "A empresa", "Segunda a quinta-feira"]) {
        assert(!html.includes(portuguese), `${language}: untranslated ${portuguese}`);
      }
    }
    console.log(`${language}: conteúdo, seletor e 16 links de WhatsApp válidos.`);
  }
  assert.equal(translate("Solicitar orçamento de Filtros de papel pelo WhatsApp", "en"), "Request a quote for Paper coffee filters on WhatsApp");
  assert.equal(translate("Filtros Nobre. Todos os direitos reservados.", "es"), "Filtros Nobre. Todos los derechos reservados.");
} finally {
  await unlink(temporaryModule).catch(() => {});
}
