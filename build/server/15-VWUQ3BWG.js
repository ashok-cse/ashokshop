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

// .svelte-kit/adapter-node/entries/pages/(app)/checkout/add-address/_page.server.ts.js
var page_server_ts_exports = {};
__export(page_server_ts_exports, {
  load: () => load,
  prerender: () => prerender
});
import "cookie-universal";
var prerender = false;
async function load({ url }) {
  let ads = {};
  let addressId = url.searchParams.get("id");
  url.searchParams.get("prescription");
  if (addressId === "new") {
    ads = { id: "new" };
  } else {
    ads = await getAPI(`addresses/${addressId}`);
  }
  return {
    ads
  };
}

// .svelte-kit/adapter-node/nodes/15.js
var index = 15;
var component = async () => (await import("./_page.svelte-ACALPTZW.js")).default;
var file = "_app/immutable/components/pages/(app)/checkout/add-address/_page.svelte-39a59343.js";
var imports = ["_app/immutable/components/pages/(app)/checkout/add-address/_page.svelte-39a59343.js", "_app/immutable/chunks/index-98fbb2d4.js", "_app/immutable/chunks/index-54abeec4.js", "_app/immutable/chunks/index-87090d37.js", "_app/immutable/chunks/hash-it.esm-eecb4324.js", "_app/immutable/chunks/website-53ccb8f7.js", "_app/immutable/chunks/Textbox-1996a4cc.js", "_app/immutable/chunks/BackButton-ef3f7b54.js", "_app/immutable/chunks/navigation-f5e1c401.js", "_app/immutable/chunks/singletons-44c3e40a.js", "_app/immutable/chunks/index-7c2e2153.js", "_app/immutable/chunks/Error-87be376e.js", "_app/immutable/chunks/index-d76ee782.js", "_app/immutable/chunks/toasts-d97c2a31.js", "_app/immutable/chunks/PrimaryButton-057a081b.js", "_app/immutable/chunks/api-fa739876.js", "_app/immutable/chunks/store-9c7a7cc1.js", "_app/immutable/chunks/cookie-universal-common-1e0fc125.js"];
var stylesheets = ["_app/immutable/assets/FlatToast-4da694a0.css", "_app/immutable/assets/PrimaryButton-5dcaa620.css"];
export {
  component,
  file,
  imports,
  index,
  page_server_ts_exports as server,
  stylesheets
};
//# sourceMappingURL=15-VWUQ3BWG.js.map
