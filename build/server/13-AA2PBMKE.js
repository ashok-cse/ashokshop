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

// .svelte-kit/adapter-node/entries/pages/(app)/categories/_page.ts.js
var page_ts_exports = {};
__export(page_ts_exports, {
  load: () => load
});
import "cookie-universal";
async function load({ url, params, fetch, parent, setHeaders }) {
  const { store } = await parent();
  let loading = false, megaMenu;
  try {
    loading = true;
    const res = await getAPI(`categories/megamenu?megamenu=true&store=${store == null ? void 0 : store.id}`);
    megaMenu = res;
  } catch (e) {
  } finally {
    loading = false;
  }
  setHeaders({
    "cache-control": "public, max-age=300"
  });
  return { megaMenu };
}

// .svelte-kit/adapter-node/nodes/13.js
var index = 13;
var component = async () => (await import("./_page.svelte-FQCBKT26.js")).default;
var file = "_app/immutable/components/pages/(app)/categories/_page.svelte-ba23afe2.js";
var imports = ["_app/immutable/components/pages/(app)/categories/_page.svelte-ba23afe2.js", "_app/immutable/chunks/index-98fbb2d4.js", "_app/immutable/chunks/index-54abeec4.js", "_app/immutable/chunks/index-87090d37.js", "_app/immutable/chunks/hash-it.esm-eecb4324.js", "_app/immutable/chunks/website-53ccb8f7.js", "_app/immutable/chunks/LazyImg-7c4ba5e2.js", "_app/immutable/chunks/lazyload.esm-618d6b5d.js", "_app/immutable/chunks/MobileFooter-9eb6b7d4.js", "_app/immutable/chunks/navigation-f5e1c401.js", "_app/immutable/chunks/singletons-44c3e40a.js", "_app/immutable/chunks/index-7c2e2153.js", "_app/immutable/chunks/stores-ae48d658.js", "_app/immutable/modules/pages/(app)/categories/_page.ts-87762cdd.js", "_app/immutable/chunks/api-fa739876.js", "_app/immutable/chunks/store-9c7a7cc1.js", "_app/immutable/chunks/index-7c2e2153.js", "_app/immutable/chunks/index-98fbb2d4.js", "_app/immutable/chunks/cookie-universal-common-1e0fc125.js", "_app/immutable/chunks/website-53ccb8f7.js", "_app/immutable/chunks/_page-4e07930c.js"];
var stylesheets = ["_app/immutable/assets/MobileFooter-2e009648.css"];
export {
  component,
  file,
  imports,
  index,
  page_ts_exports as shared,
  stylesheets
};
//# sourceMappingURL=13-AA2PBMKE.js.map
