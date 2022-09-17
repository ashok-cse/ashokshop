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

// .svelte-kit/adapter-node/entries/pages/(marketing)/faqs/_page.ts.js
var page_ts_exports = {};
__export(page_ts_exports, {
  load: () => load
});
import "cookie-universal";
async function load({ url, params, fetch, parent, setHeaders }) {
  const { store } = await parent();
  let loading = false, err, faqs, count;
  try {
    loading = true;
    const res = await getAPI(`faqs?store=${store == null ? void 0 : store.id}`);
    faqs = res == null ? void 0 : res.data;
    count = res == null ? void 0 : res.count;
  } catch (e) {
    err = e;
  } finally {
    loading = false;
  }
  setHeaders({
    "cache-control": "public, max-age=300"
  });
  return { loading, err, faqs, count };
}

// .svelte-kit/adapter-node/nodes/35.js
var index = 35;
var component = async () => (await import("./_page.svelte-VKKR55U3.js")).default;
var file = "_app/immutable/components/pages/(marketing)/faqs/_page.svelte-065c8d9b.js";
var imports = ["_app/immutable/components/pages/(marketing)/faqs/_page.svelte-065c8d9b.js", "_app/immutable/chunks/index-98fbb2d4.js", "_app/immutable/chunks/index-54abeec4.js", "_app/immutable/chunks/index-87090d37.js", "_app/immutable/chunks/hash-it.esm-eecb4324.js", "_app/immutable/chunks/website-53ccb8f7.js", "_app/immutable/chunks/Skeleton-a3211046.js", "_app/immutable/modules/pages/(marketing)/faqs/_page.ts-0f3c28f6.js", "_app/immutable/chunks/api-fa739876.js", "_app/immutable/chunks/store-9c7a7cc1.js", "_app/immutable/chunks/index-7c2e2153.js", "_app/immutable/chunks/index-98fbb2d4.js", "_app/immutable/chunks/cookie-universal-common-1e0fc125.js", "_app/immutable/chunks/website-53ccb8f7.js", "_app/immutable/chunks/_page-06ab17af.js"];
var stylesheets = ["_app/immutable/assets/Skeleton-12b4362d.css"];
export {
  component,
  file,
  imports,
  index,
  page_ts_exports as shared,
  stylesheets
};
//# sourceMappingURL=35-JH5C2HWD.js.map
