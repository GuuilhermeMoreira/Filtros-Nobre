import { build } from "esbuild";
import { writeFile, unlink, access } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import assert from "node:assert/strict";
const temporaryModule = resolve(".site-verification.mjs");
try {
  const result = await build({ entryPoints: ["src/App.jsx"], bundle: true, write: false, format: "esm", platform: "node", jsx: "automatic", loader: { ".jpg": "dataurl", ".png": "dataurl" }, external: ["react", "react/jsx-runtime"] });
  await writeFile(temporaryModule, result.outputFiles[0].text);
  const { default: App } = await import(pathToFileURL(temporaryModule));
  const html = renderToStaticMarkup(createElement(App));
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(new Set(ids).size, ids.length, "IDs duplicados");
  for (const [, anchor] of html.matchAll(/href="#([^"]+)"/g)) assert(ids.includes(anchor), `Âncora inexistente: ${anchor}`);
  for (const [, image] of html.matchAll(/src="(\/assets\/[^"]+)"/g)) await access(resolve(`public${image}`));
  assert(html.includes("Mais Nobre."));
  assert(html.indexOf('id="outros-produtos"') < html.indexOf('id="marcas-proprias"'));
  assert(ids.includes("panos-multiuso") && ids.includes("protetores-fogao"));
  let links = 0;
  for (const [, raw] of html.matchAll(/href="(https:\/\/wa\.me\/[^\"]+)"/g)) {
    const url = new URL(raw.replaceAll("&amp;", "&"));
    assert.equal(url.pathname, "/5511947110241");
    assert(url.searchParams.get("text")?.startsWith("Olá!"));
    links++;
  }
  assert(html.includes(encodeURIComponent("100 Pequeno")));
  assert(html.includes(encodeURIComponent("10 metros")));
  console.log(`Verificação concluída: ${ids.length} IDs, âncoras e imagens válidas; ${links} links comerciais conferidos.`);
} finally {
  await unlink(temporaryModule).catch(() => {});
}
