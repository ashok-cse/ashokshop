import {
  date
} from "./chunk-INLLZ5TS.js";
import {
  getAPI
} from "./chunk-BHRZVVG2.js";
import "./chunk-SF373CJS.js";
import {
  description,
  domain,
  id,
  websiteName
} from "./chunk-PECO4ST5.js";
import "./chunk-7PCG3GZV.js";
import "./chunk-Q5TLOJAI.js";
import "./chunk-TZVAZAPU.js";
import "./chunk-HUBM7RA2.js";

// .svelte-kit/adapter-node/entries/endpoints/rss.xml/_server.js
import "cookie-universal";
async function GET() {
  var _a;
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
  if (!products)
    return new Response(void 0, { status: 404 });
  const body = xml(products);
  const headers = {
    "Cache-Control": "max-age=0, s-maxage=3600",
    "Content-Type": "application/xml"
  };
  return {
    headers,
    body
  };
}
var xml = (products) => `<rss xmlns:dc="https://purl.org/dc/elements/1.1/" xmlns:content="https://purl.org/rss/1.0/modules/content/" xmlns:atom="https://www.w3.org/2005/Atom" version="2.0">
  <channel>
    <title>${websiteName}</title>
    <link>${domain}</link>
    <description>${description}</description>
    ${products.map(
  (product) => `
        <item>
          <title>${(product == null ? void 0 : product.name) || ""}</title>
          <description>${(product == null ? void 0 : product.description) || ""}</description>
          <link>${domain}/${product == null ? void 0 : product.slug}/</link>
          <pubDate>${date(product == null ? void 0 : product.updatedAt)}</pubDate>
          <content:encoded>${product == null ? void 0 : product.previewHtml} 
            <div style="margin-top: 50px; font-style: italic;">
              <strong>
                <a href="${domain}/${product.slug}" aria-label="Click to keep reading">
                  Keep Reading
                </a>
              </strong>  
            </div>
          </content:encoded>
        </item>
      `
).join("")}
  </channel>
</rss>`;
export {
  GET
};
//# sourceMappingURL=_server-G2X5DTEE.js.map
