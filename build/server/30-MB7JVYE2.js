import {
  error
} from "./chunk-TBPX2CNA.js";
import {
  getAPI
} from "./chunk-BHRZVVG2.js";
import "./chunk-PECO4ST5.js";
import "./chunk-7PCG3GZV.js";
import "./chunk-Q5TLOJAI.js";
import "./chunk-TZVAZAPU.js";
import {
  __export
} from "./chunk-HUBM7RA2.js";

// .svelte-kit/adapter-node/entries/pages/(app)/product/_slug_/_page.server.ts.js
var page_server_ts_exports = {};
__export(page_server_ts_exports, {
  load: () => load
});
import "cookie-universal";
async function load({ params, parent, setHeaders }) {
  const { store } = await parent();
  const { slug } = params;
  let product = null;
  let relatedProducts = [];
  try {
    product = await getAPI(`products/${slug}`);
    relatedProducts = await getAPI(
      `products/frequently-bought-together?store=${store == null ? void 0 : store.id}&groupId=${product == null ? void 0 : product.groupId}`
    );
    if (!product)
      throw error(404, "Product not found");
    setHeaders({
      "cache-control": "public, max-age=300"
    });
  } catch (e) {
  } finally {
    return { product, relatedProducts };
  }
}

// .svelte-kit/adapter-node/nodes/30.js
var index = 30;
var component = async () => (await import("./_page.svelte-DN7D6EAJ.js")).default;
var file = "_app/immutable/components/pages/(app)/product/_slug_/_page.svelte-6d482098.js";
var imports = ["_app/immutable/components/pages/(app)/product/_slug_/_page.svelte-6d482098.js", "_app/immutable/chunks/index-98fbb2d4.js", "_app/immutable/chunks/hash-it.esm-eecb4324.js", "_app/immutable/chunks/api-fa739876.js", "_app/immutable/chunks/store-9c7a7cc1.js", "_app/immutable/chunks/index-7c2e2153.js", "_app/immutable/chunks/cookie-universal-common-1e0fc125.js", "_app/immutable/chunks/website-53ccb8f7.js", "_app/immutable/chunks/stores-ae48d658.js", "_app/immutable/chunks/singletons-44c3e40a.js", "_app/immutable/chunks/index-d76ee782.js", "_app/immutable/chunks/index-87090d37.js", "_app/immutable/chunks/toasts-d97c2a31.js", "_app/immutable/chunks/index-7636af81.js", "_app/immutable/chunks/LazyImg-7c4ba5e2.js", "_app/immutable/chunks/lazyload.esm-618d6b5d.js", "_app/immutable/chunks/PrimaryButton-057a081b.js", "_app/immutable/chunks/Textbox-1996a4cc.js", "_app/immutable/chunks/Textarea-b7f0dbdd.js", "_app/immutable/chunks/navigation-f5e1c401.js", "_app/immutable/chunks/Skeleton-a3211046.js", "_app/immutable/chunks/WhiteButton-f1fdabd9.js", "_app/immutable/chunks/ProductCard-cb90170b.js"];
var stylesheets = ["_app/immutable/assets/_page-42f5963a.css", "_app/immutable/assets/Checkbox-c1f7e2b3.css", "_app/immutable/assets/FlatToast-4da694a0.css", "_app/immutable/assets/PrimaryButton-5dcaa620.css", "_app/immutable/assets/Skeleton-12b4362d.css", "_app/immutable/assets/WhiteButton-5dcaa620.css", "_app/immutable/assets/ProductCard-c94ea9b6.css"];
export {
  component,
  file,
  imports,
  index,
  page_server_ts_exports as server,
  stylesheets
};
//# sourceMappingURL=30-MB7JVYE2.js.map
