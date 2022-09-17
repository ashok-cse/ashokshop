import {
  error,
  redirect
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

// .svelte-kit/adapter-node/entries/pages/(app)/checkout/address/_page.server.ts.js
var page_server_ts_exports = {};
__export(page_server_ts_exports, {
  load: () => load,
  prerender: () => prerender
});
import "cookie-universal";
var prerender = false;
async function load({ request, url }) {
  var _a, _b;
  try {
    let err, myAddresses, selectedAddress;
    myAddresses = await getAPI("addresses/my", request.headers);
    selectedAddress = (_a = myAddresses == null ? void 0 : myAddresses.data[0]) == null ? void 0 : _a._id;
    let currentPage = +url.searchParams.get("page") || 1;
    let q = url.searchParams.get("q") || "";
    const cart = await getAPI("carts/refresh-cart", request.headers);
    if ((_b = myAddresses == null ? void 0 : myAddresses.data) == null ? void 0 : _b.length) {
      return {
        cart,
        myAddresses,
        selectedAddress,
        url: url.href,
        currentPage,
        q,
        err
      };
    } else {
      return {
        cart,
        myAddresses: [],
        selectedAddress,
        url: url.href,
        currentPage,
        q,
        err
      };
    }
  } catch (e) {
    if (e.status === 401) {
      throw redirect(307, `/auth/otp-login?ref=${url == null ? void 0 : url.pathname}`);
    } else {
      throw error(500, e == null ? void 0 : e.message);
    }
  }
}

// .svelte-kit/adapter-node/nodes/16.js
var index = 16;
var component = async () => (await import("./_page.svelte-JRTL26J2.js")).default;
var file = "_app/immutable/components/pages/(app)/checkout/address/_page.svelte-6eab8cbe.js";
var imports = ["_app/immutable/components/pages/(app)/checkout/address/_page.svelte-6eab8cbe.js", "_app/immutable/chunks/index-98fbb2d4.js", "_app/immutable/chunks/index-54abeec4.js", "_app/immutable/chunks/index-87090d37.js", "_app/immutable/chunks/hash-it.esm-eecb4324.js", "_app/immutable/chunks/website-53ccb8f7.js", "_app/immutable/chunks/Pricesummary-32467dcf.js", "_app/immutable/chunks/index-d76ee782.js", "_app/immutable/chunks/toasts-d97c2a31.js", "_app/immutable/chunks/index-7c2e2153.js", "_app/immutable/chunks/navigation-f5e1c401.js", "_app/immutable/chunks/singletons-44c3e40a.js", "_app/immutable/chunks/PrimaryButton-057a081b.js", "_app/immutable/chunks/Error-87be376e.js", "_app/immutable/chunks/api-fa739876.js", "_app/immutable/chunks/store-9c7a7cc1.js", "_app/immutable/chunks/cookie-universal-common-1e0fc125.js", "_app/immutable/chunks/CheckoutHeader-d93f52e0.js"];
var stylesheets = ["_app/immutable/assets/FlatToast-4da694a0.css", "_app/immutable/assets/PrimaryButton-5dcaa620.css", "_app/immutable/assets/CheckoutHeader-2c551ea8.css"];
export {
  component,
  file,
  imports,
  index,
  page_server_ts_exports as server,
  stylesheets
};
//# sourceMappingURL=16-IAO6QGKH.js.map
