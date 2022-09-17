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

// .svelte-kit/adapter-node/entries/pages/(app)/my/addresses/_id_/_page.server.ts.js
var page_server_ts_exports = {};
__export(page_server_ts_exports, {
  load: () => load
});
import "cookie-universal";
async function load({ params, parent, request }) {
  const { store } = await parent();
  const { id } = params;
  let address;
  if (params.id === "new") {
    address = { id: "new" };
  } else {
    address = await getAPI(`addresses/${id}`, request.headers);
  }
  const countries = await getAPI("countries", { store: store == null ? void 0 : store.id });
  const states = await getAPI("states", {
    limit: 300,
    page: 0,
    countryCode: address == null ? void 0 : address.country
  });
  if (address) {
    return { address, countries, states };
  }
  throw error(404, "Address not found");
}

// .svelte-kit/adapter-node/nodes/20.js
var index = 20;
var component = async () => (await import("./_page.svelte-JGJNKXE2.js")).default;
var file = "_app/immutable/components/pages/(app)/my/addresses/_id_/_page.svelte-e5faeb54.js";
var imports = ["_app/immutable/components/pages/(app)/my/addresses/_id_/_page.svelte-e5faeb54.js", "_app/immutable/chunks/index-98fbb2d4.js", "_app/immutable/chunks/index-54abeec4.js", "_app/immutable/chunks/index-87090d37.js", "_app/immutable/chunks/hash-it.esm-eecb4324.js", "_app/immutable/chunks/website-53ccb8f7.js", "_app/immutable/chunks/CtrlS-3947fa88.js", "_app/immutable/chunks/index-7636af81.js", "_app/immutable/chunks/Error-87be376e.js", "_app/immutable/chunks/Textbox-1996a4cc.js", "_app/immutable/chunks/index-d76ee782.js", "_app/immutable/chunks/toasts-d97c2a31.js", "_app/immutable/chunks/index-7c2e2153.js", "_app/immutable/chunks/api-fa739876.js", "_app/immutable/chunks/store-9c7a7cc1.js", "_app/immutable/chunks/cookie-universal-common-1e0fc125.js", "_app/immutable/chunks/navigation-f5e1c401.js", "_app/immutable/chunks/singletons-44c3e40a.js", "_app/immutable/chunks/ToggleSwitch-520c4e19.js", "_app/immutable/chunks/Textarea-b7f0dbdd.js", "_app/immutable/chunks/BackButton-ef3f7b54.js"];
var stylesheets = ["_app/immutable/assets/FlatToast-4da694a0.css", "_app/immutable/assets/ToggleSwitch-c705fe5b.css"];
export {
  component,
  file,
  imports,
  index,
  page_server_ts_exports as server,
  stylesheets
};
//# sourceMappingURL=20-63UGX2OM.js.map
