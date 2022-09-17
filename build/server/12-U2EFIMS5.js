import {
  error,
  redirect
} from "./chunk-TBPX2CNA.js";
import {
  require_cookie
} from "./chunk-5UO6NJKZ.js";
import {
  getAPI
} from "./chunk-BHRZVVG2.js";
import "./chunk-PECO4ST5.js";
import "./chunk-7PCG3GZV.js";
import "./chunk-Q5TLOJAI.js";
import "./chunk-TZVAZAPU.js";
import {
  __export,
  __toESM
} from "./chunk-HUBM7RA2.js";

// .svelte-kit/adapter-node/entries/pages/(app)/cart/_page.server.ts.js
var page_server_ts_exports = {};
__export(page_server_ts_exports, {
  load: () => load
});
var import_cookie = __toESM(require_cookie(), 1);
import "cookie-universal";
async function load({ url, request, setHeaders }) {
  let cart, loading = false;
  try {
    loading = true;
    const res = await getAPI("carts/refresh-cart", request.headers);
    if (res) {
      const cookieCart = {
        items: res == null ? void 0 : res.items,
        qty: +(res == null ? void 0 : res.qty),
        tax: +(res == null ? void 0 : res.tax),
        subtotal: +(res == null ? void 0 : res.subtotal),
        total: +(res == null ? void 0 : res.total),
        currencySymbol: res == null ? void 0 : res.currencySymbol,
        discount: res == null ? void 0 : res.discount,
        selfTakeout: res == null ? void 0 : res.selfTakeout,
        shipping: res == null ? void 0 : res.shipping,
        unavailableItems: res == null ? void 0 : res.unavailableItems,
        formattedAmount: res == null ? void 0 : res.formattedAmount
      };
      const str = import_cookie.default.serialize("cart", JSON.stringify(cookieCart), { path: "/" });
      setHeaders({ "set-cookie": str });
      cart = cookieCart;
    }
  } catch (e) {
    console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzz", e);
    if ((e == null ? void 0 : e.status) === 401) {
      throw redirect(307, "/auth/otp-login");
    }
    throw error(400, (e == null ? void 0 : e.message) || e);
  } finally {
    loading = false;
  }
  setHeaders({
    "cache-control": "public, max-age=200"
  });
  return { loadingCart: loading, cart };
}

// .svelte-kit/adapter-node/nodes/12.js
var index = 12;
var component = async () => (await import("./_page.svelte-H3D524FB.js")).default;
var file = "_app/immutable/components/pages/(app)/cart/_page.svelte-1b574ede.js";
var imports = ["_app/immutable/components/pages/(app)/cart/_page.svelte-1b574ede.js", "_app/immutable/chunks/index-98fbb2d4.js", "_app/immutable/chunks/index-54abeec4.js", "_app/immutable/chunks/index-87090d37.js", "_app/immutable/chunks/hash-it.esm-eecb4324.js", "_app/immutable/chunks/website-53ccb8f7.js", "_app/immutable/chunks/api-fa739876.js", "_app/immutable/chunks/store-9c7a7cc1.js", "_app/immutable/chunks/index-7c2e2153.js", "_app/immutable/chunks/cookie-universal-common-1e0fc125.js", "_app/immutable/chunks/stores-ae48d658.js", "_app/immutable/chunks/singletons-44c3e40a.js", "_app/immutable/chunks/PrimaryButton-057a081b.js", "_app/immutable/chunks/navigation-f5e1c401.js", "_app/immutable/chunks/index-d76ee782.js", "_app/immutable/chunks/toasts-d97c2a31.js", "_app/immutable/chunks/Pricesummary-32467dcf.js", "_app/immutable/chunks/Textbox-1996a4cc.js", "_app/immutable/chunks/Skeleton-a3211046.js", "_app/immutable/chunks/index-7636af81.js", "_app/immutable/chunks/ProductCard-cb90170b.js", "_app/immutable/chunks/LazyImg-7c4ba5e2.js", "_app/immutable/chunks/lazyload.esm-618d6b5d.js", "_app/immutable/chunks/Error-87be376e.js", "_app/immutable/chunks/index-86ffcb50.js"];
var stylesheets = ["_app/immutable/assets/PrimaryButton-5dcaa620.css", "_app/immutable/assets/FlatToast-4da694a0.css", "_app/immutable/assets/Skeleton-12b4362d.css", "_app/immutable/assets/ProductCard-c94ea9b6.css"];
export {
  component,
  file,
  imports,
  index,
  page_server_ts_exports as server,
  stylesheets
};
//# sourceMappingURL=12-U2EFIMS5.js.map
