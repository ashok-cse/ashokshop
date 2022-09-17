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

// .svelte-kit/adapter-node/entries/pages/(app)/new-arrivals/_page.ts.js
var page_ts_exports = {};
__export(page_ts_exports, {
  load: () => load
});
import "cookie-universal";
async function load({ url, params, fetch, parent, setHeaders }) {
  var _a;
  const { store } = await parent();
  let loading = false, newArrivals, products, productsCount;
  try {
    loading = true;
    const res1 = await getAPI(`categories/megamenu?store=${store == null ? void 0 : store.id}`);
    newArrivals = res1.filter((m) => {
      return m.name === "New Arrivals";
    });
    const res2 = await getAPI(`products?categories=${(_a = newArrivals[0]) == null ? void 0 : _a._id}&store=${store == null ? void 0 : store.id}`);
    products = res2 == null ? void 0 : res2.data;
    productsCount = res2 == null ? void 0 : res2.count;
  } catch (e) {
  } finally {
    loading = false;
  }
  setHeaders({
    "cache-control": "public, max-age=300"
  });
  return { newArrivals, products, productsCount };
}

// .svelte-kit/adapter-node/nodes/27.js
var index = 27;
var component = async () => (await import("./_page.svelte-3TLRO7DK.js")).default;
var file = "_app/immutable/components/pages/(app)/new-arrivals/_page.svelte-6a195166.js";
var imports = ["_app/immutable/components/pages/(app)/new-arrivals/_page.svelte-6a195166.js", "_app/immutable/chunks/index-98fbb2d4.js", "_app/immutable/chunks/index-54abeec4.js", "_app/immutable/chunks/index-87090d37.js", "_app/immutable/chunks/hash-it.esm-eecb4324.js", "_app/immutable/chunks/website-53ccb8f7.js", "_app/immutable/chunks/store-9c7a7cc1.js", "_app/immutable/chunks/index-7c2e2153.js", "_app/immutable/chunks/cookie-universal-common-1e0fc125.js", "_app/immutable/chunks/LazyImg-7c4ba5e2.js", "_app/immutable/chunks/lazyload.esm-618d6b5d.js", "_app/immutable/chunks/ProductCard-cb90170b.js", "_app/immutable/chunks/index-7636af81.js", "_app/immutable/chunks/api-fa739876.js", "_app/immutable/chunks/navigation-f5e1c401.js", "_app/immutable/chunks/singletons-44c3e40a.js", "_app/immutable/chunks/stores-ae48d658.js", "_app/immutable/chunks/PrimaryButton-057a081b.js", "_app/immutable/chunks/MobileFooter-9eb6b7d4.js", "_app/immutable/modules/pages/(app)/new-arrivals/_page.ts-9624c9fa.js", "_app/immutable/chunks/api-fa739876.js", "_app/immutable/chunks/store-9c7a7cc1.js", "_app/immutable/chunks/index-7c2e2153.js", "_app/immutable/chunks/index-98fbb2d4.js", "_app/immutable/chunks/cookie-universal-common-1e0fc125.js", "_app/immutable/chunks/website-53ccb8f7.js", "_app/immutable/chunks/_page-7b403c29.js"];
var stylesheets = ["_app/immutable/assets/FlatToast-4da694a0.css", "_app/immutable/assets/PrimaryButton-5dcaa620.css", "_app/immutable/assets/ProductCard-c94ea9b6.css", "_app/immutable/assets/MobileFooter-2e009648.css"];
export {
  component,
  file,
  imports,
  index,
  page_ts_exports as shared,
  stylesheets
};
//# sourceMappingURL=27-GCULX5VH.js.map
