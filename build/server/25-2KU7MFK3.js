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

// .svelte-kit/adapter-node/entries/pages/(app)/my/reviews/create/_page.ts.js
var page_ts_exports = {};
__export(page_ts_exports, {
  load: () => load,
  prerender: () => prerender
});
import "cookie-universal";
var prerender = false;
async function load({ url, params, fetch, context }) {
  let ref = url.searchParams.get("ref");
  let productId = url.searchParams.get("product");
  let product;
  try {
    product = await getAPI(`products/${productId}`);
  } catch (e) {
  } finally {
  }
  return {
    ref,
    product
  };
}

// .svelte-kit/adapter-node/nodes/25.js
var index = 25;
var component = async () => (await import("./_page.svelte-HSKORBV5.js")).default;
var file = "_app/immutable/components/pages/(app)/my/reviews/create/_page.svelte-91df54e7.js";
var imports = ["_app/immutable/components/pages/(app)/my/reviews/create/_page.svelte-91df54e7.js", "_app/immutable/chunks/index-98fbb2d4.js", "_app/immutable/chunks/index-54abeec4.js", "_app/immutable/chunks/index-87090d37.js", "_app/immutable/chunks/hash-it.esm-eecb4324.js", "_app/immutable/chunks/website-53ccb8f7.js", "_app/immutable/chunks/Textarea-b7f0dbdd.js", "_app/immutable/chunks/index-d76ee782.js", "_app/immutable/chunks/toasts-d97c2a31.js", "_app/immutable/chunks/index-7c2e2153.js", "_app/immutable/chunks/LazyImg-7c4ba5e2.js", "_app/immutable/chunks/lazyload.esm-618d6b5d.js", "_app/immutable/chunks/navigation-f5e1c401.js", "_app/immutable/chunks/singletons-44c3e40a.js", "_app/immutable/chunks/BackButton-ef3f7b54.js", "_app/immutable/chunks/api-fa739876.js", "_app/immutable/chunks/store-9c7a7cc1.js", "_app/immutable/chunks/cookie-universal-common-1e0fc125.js", "_app/immutable/chunks/PrimaryButton-057a081b.js", "_app/immutable/modules/pages/(app)/my/reviews/create/_page.ts-9074aa98.js", "_app/immutable/chunks/api-fa739876.js", "_app/immutable/chunks/store-9c7a7cc1.js", "_app/immutable/chunks/index-7c2e2153.js", "_app/immutable/chunks/index-98fbb2d4.js", "_app/immutable/chunks/cookie-universal-common-1e0fc125.js", "_app/immutable/chunks/website-53ccb8f7.js", "_app/immutable/chunks/_page-88fb9b64.js"];
var stylesheets = ["_app/immutable/assets/FlatToast-4da694a0.css", "_app/immutable/assets/PrimaryButton-5dcaa620.css"];
export {
  component,
  file,
  imports,
  index,
  page_ts_exports as shared,
  stylesheets
};
//# sourceMappingURL=25-2KU7MFK3.js.map
