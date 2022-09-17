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

// .svelte-kit/adapter-node/entries/pages/(app)/_page.server.ts.js
var page_server_ts_exports = {};
__export(page_server_ts_exports, {
  load: () => load
});
import "cookie-universal";
async function load({ params, query, parent, setHeaders }) {
  const { store } = await parent();
  const home = await getAPI(`home?store=${store == null ? void 0 : store.id}`);
  setHeaders({
    "cache-control": "public, max-age=300"
  });
  if (home) {
    return { home };
  }
  throw error(500, "Internal Server Error");
}

// .svelte-kit/adapter-node/nodes/7.js
var index = 7;
var component = async () => (await import("./_page.svelte-VQMAIP5B.js")).default;
var file = "_app/immutable/components/pages/(app)/_page.svelte-4713e632.js";
var imports = ["_app/immutable/components/pages/(app)/_page.svelte-4713e632.js", "_app/immutable/chunks/index-98fbb2d4.js", "_app/immutable/chunks/index-54abeec4.js", "_app/immutable/chunks/index-87090d37.js", "_app/immutable/chunks/hash-it.esm-eecb4324.js", "_app/immutable/chunks/website-53ccb8f7.js", "_app/immutable/chunks/HeroBanners-2b34057f.js", "_app/immutable/chunks/LazyImg-7c4ba5e2.js", "_app/immutable/chunks/lazyload.esm-618d6b5d.js", "_app/immutable/chunks/ProductCard-cb90170b.js", "_app/immutable/chunks/index-7636af81.js", "_app/immutable/chunks/api-fa739876.js", "_app/immutable/chunks/store-9c7a7cc1.js", "_app/immutable/chunks/index-7c2e2153.js", "_app/immutable/chunks/cookie-universal-common-1e0fc125.js", "_app/immutable/chunks/navigation-f5e1c401.js", "_app/immutable/chunks/singletons-44c3e40a.js", "_app/immutable/chunks/stores-ae48d658.js", "_app/immutable/chunks/MobileFooter-9eb6b7d4.js"];
var stylesheets = ["_app/immutable/assets/FlatToast-4da694a0.css", "_app/immutable/assets/ProductCard-c94ea9b6.css", "_app/immutable/assets/MobileFooter-2e009648.css"];
export {
  component,
  file,
  imports,
  index,
  page_server_ts_exports as server,
  stylesheets
};
//# sourceMappingURL=7-WYK6VVP2.js.map
