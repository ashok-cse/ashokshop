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

// .svelte-kit/adapter-node/entries/pages/(app)/category/_slug_/_page.server.ts.js
var page_server_ts_exports = {};
__export(page_server_ts_exports, {
  load: () => load
});
import "cookie-universal";
async function load({ params, parent, setHeaders }) {
  await parent();
  try {
    const { slug } = params;
    const category = await getAPI(`categories/${slug}`);
    if (category) {
      setHeaders({
        "cache-control": "public, max-age=300"
      });
      return { category };
    }
  } catch (e) {
    throw error(400, e == null ? void 0 : e.message);
  }
  throw error(404, "Category not found");
}

// .svelte-kit/adapter-node/nodes/14.js
var index = 14;
var component = async () => (await import("./_page.svelte-LAH2PJV4.js")).default;
var file = "_app/immutable/components/pages/(app)/category/_slug_/_page.svelte-9ee005b1.js";
var imports = ["_app/immutable/components/pages/(app)/category/_slug_/_page.svelte-9ee005b1.js", "_app/immutable/chunks/index-98fbb2d4.js", "_app/immutable/chunks/index-87090d37.js", "_app/immutable/chunks/hash-it.esm-eecb4324.js", "_app/immutable/chunks/LazyImg-7c4ba5e2.js", "_app/immutable/chunks/lazyload.esm-618d6b5d.js", "_app/immutable/chunks/PrimaryButton-057a081b.js", "_app/immutable/chunks/MobileFooter-9eb6b7d4.js", "_app/immutable/chunks/navigation-f5e1c401.js", "_app/immutable/chunks/singletons-44c3e40a.js", "_app/immutable/chunks/index-7c2e2153.js", "_app/immutable/chunks/stores-ae48d658.js", "_app/immutable/chunks/Pagination-61e395de.js", "_app/immutable/chunks/ProductCard-cb90170b.js", "_app/immutable/chunks/index-7636af81.js", "_app/immutable/chunks/api-fa739876.js", "_app/immutable/chunks/store-9c7a7cc1.js", "_app/immutable/chunks/cookie-universal-common-1e0fc125.js", "_app/immutable/chunks/website-53ccb8f7.js", "_app/immutable/chunks/MobileFilter-5c888ee1.js", "_app/immutable/chunks/index-d76ee782.js", "_app/immutable/chunks/toasts-d97c2a31.js"];
var stylesheets = ["_app/immutable/assets/PrimaryButton-5dcaa620.css", "_app/immutable/assets/FlatToast-4da694a0.css", "_app/immutable/assets/Checkbox-c1f7e2b3.css", "_app/immutable/assets/MobileFooter-2e009648.css", "_app/immutable/assets/Pagination-4c3425dd.css", "_app/immutable/assets/ProductCard-c94ea9b6.css", "_app/immutable/assets/MobileFilter-ee81cf4c.css"];
export {
  component,
  file,
  imports,
  index,
  page_server_ts_exports as server,
  stylesheets
};
//# sourceMappingURL=14-5KQTLTX7.js.map
