import {
  getAPI
} from "./chunk-BHRZVVG2.js";
import {
  domain,
  id
} from "./chunk-PECO4ST5.js";
import "./chunk-7PCG3GZV.js";
import "./chunk-Q5TLOJAI.js";
import "./chunk-TZVAZAPU.js";
import "./chunk-HUBM7RA2.js";

// .svelte-kit/adapter-node/entries/endpoints/sitemap.xml/_server.js
import "cookie-universal";
async function GET() {
  var _a, _b;
  const resP = await getAPI(`es/products?store=${id}`);
  const products = (_a = resP == null ? void 0 : resP.data) == null ? void 0 : _a.map((product) => {
    product = {
      name: product._source.name.replace("&", ""),
      slug: product._source.slug,
      description: product._source.description,
      updatedAt: product._source.updatedAt
    };
    return product;
  });
  const resPages = await getAPI(`pages?store=${id}`);
  (_b = resPages == null ? void 0 : resPages.data) == null ? void 0 : _b.map((page) => {
    page = {
      name: page._source.name.replace("&", ""),
      slug: page._source.slug,
      description: page._source.description,
      updatedAt: page._source.updatedAt
    };
    return page;
  });
  if (!products)
    return new Response(void 0, { status: 404 });
  const body = sitemap(products);
  const headers = {
    "Cache-Control": "max-age=0, s-maxage=3600",
    "Content-Type": "application/xml"
  };
  return {
    headers,
    body
  };
}
var sitemap = (products, pages) => `<?xml version="1.0" encoding="UTF-8" ?>
      <urlset
        xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="https://www.w3.org/1999/xhtml"
        xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
      >
      <url>
        <loc>${domain}</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
      </url>
        ${products.map(
  (product) => `
              <url>
                <loc>${domain}/${product.slug}</loc>
                <changefreq>daily</changefreq>
                <priority>0.7</priority>
              </url>
            `
).join("")} 
          ${products.map(
  (product) => `
              <url>
                <loc>${domain}/${product.slug}</loc>
                <changefreq>daily</changefreq>
                <priority>0.7</priority>
              </url>
            `
).join("")}
      </urlset>
    `;
export {
  GET
};
//# sourceMappingURL=_server-KS5CXVJ2.js.map
