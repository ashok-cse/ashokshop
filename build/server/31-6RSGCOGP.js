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

// .svelte-kit/adapter-node/entries/pages/(app)/search/_page.server.ts.js
var page_server_ts_exports = {};
__export(page_server_ts_exports, {
  load: () => load,
  prerender: () => prerender
});
import "cookie-universal";
var prerender = false;
async function load({ url, setHeaders, parent }) {
  const { store } = await parent();
  let loading = false, err, count, products, facets, ressss, fl = {};
  let currentPage = +url.searchParams.get("page") || 1;
  let sort = url.searchParams.get("sort");
  let searchData = url.searchParams.get("q");
  let query = url.searchParams;
  query.forEach(function(value, key) {
    fl[key] = value;
  });
  try {
    loading = true;
    const res = await getAPI(`es/products?${query.toString()}&store=${store == null ? void 0 : store.id}`);
    ressss = res;
    products = res == null ? void 0 : res.data;
    products = products.map((p) => {
      let p1;
      p1 = { ...p._source };
      p1.id = p._id;
      return p1;
    });
    count = res == null ? void 0 : res.count;
    facets = res == null ? void 0 : res.facets;
    err = !(res == null ? void 0 : res.count) ? "No result Not Found" : null;
  } catch (e) {
    err = e;
    throw error(400, (e == null ? void 0 : e.message) || e || "No results found");
  } finally {
    loading = false;
  }
  setHeaders({
    "cache-control": "public, max-age=300"
  });
  return {
    loading,
    err,
    currentPage,
    sort,
    products,
    count,
    facets,
    query: query.toString(),
    searchData,
    fl,
    ressss
  };
}

// .svelte-kit/adapter-node/nodes/31.js
var index = 31;
var component = async () => (await import("./_page.svelte-6B5WERL3.js")).default;
var file = "_app/immutable/components/pages/(app)/search/_page.svelte-abb008ca.js";
var imports = ["_app/immutable/components/pages/(app)/search/_page.svelte-abb008ca.js", "_app/immutable/chunks/index-98fbb2d4.js", "_app/immutable/chunks/index-54abeec4.js", "_app/immutable/chunks/index-87090d37.js", "_app/immutable/chunks/hash-it.esm-eecb4324.js", "_app/immutable/chunks/website-53ccb8f7.js", "_app/immutable/chunks/navigation-f5e1c401.js", "_app/immutable/chunks/singletons-44c3e40a.js", "_app/immutable/chunks/index-7c2e2153.js", "_app/immutable/chunks/stores-ae48d658.js", "_app/immutable/chunks/LazyImg-7c4ba5e2.js", "_app/immutable/chunks/lazyload.esm-618d6b5d.js", "_app/immutable/chunks/PrimaryButton-057a081b.js", "_app/immutable/chunks/store-9c7a7cc1.js", "_app/immutable/chunks/cookie-universal-common-1e0fc125.js", "_app/immutable/chunks/ProductCard-cb90170b.js", "_app/immutable/chunks/index-7636af81.js", "_app/immutable/chunks/api-fa739876.js", "_app/immutable/chunks/MobileFilter-5c888ee1.js", "_app/immutable/chunks/index-d76ee782.js", "_app/immutable/chunks/toasts-d97c2a31.js", "_app/immutable/chunks/MobileFooter-9eb6b7d4.js", "_app/immutable/chunks/Pagination-61e395de.js"];
var stylesheets = ["_app/immutable/assets/FlatToast-4da694a0.css", "_app/immutable/assets/PrimaryButton-5dcaa620.css", "_app/immutable/assets/Checkbox-c1f7e2b3.css", "_app/immutable/assets/ProductCard-c94ea9b6.css", "_app/immutable/assets/MobileFilter-ee81cf4c.css", "_app/immutable/assets/MobileFooter-2e009648.css", "_app/immutable/assets/Pagination-4c3425dd.css"];
export {
  component,
  file,
  imports,
  index,
  page_server_ts_exports as server,
  stylesheets
};
//# sourceMappingURL=31-6RSGCOGP.js.map
