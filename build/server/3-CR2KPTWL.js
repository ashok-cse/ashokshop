import {
  require_cookie
} from "./chunk-5UO6NJKZ.js";
import {
  getAPI
} from "./chunk-BHRZVVG2.js";
import {
  DOMAIN,
  stripePublishableKey
} from "./chunk-SF373CJS.js";
import {
  address,
  email,
  id,
  phone,
  websiteLegalName,
  websiteName
} from "./chunk-PECO4ST5.js";
import "./chunk-7PCG3GZV.js";
import "./chunk-Q5TLOJAI.js";
import "./chunk-TZVAZAPU.js";
import {
  __export,
  __toESM
} from "./chunk-HUBM7RA2.js";

// .svelte-kit/adapter-node/entries/pages/(app)/auth/_layout.ts.js
var layout_ts_exports = {};
__export(layout_ts_exports, {
  load: () => load,
  prerender: () => prerender
});
var import_cookie = __toESM(require_cookie(), 1);
import "cookie-universal";
var prerender = false;
async function load({ url, request, setHeaders }) {
  url.pathname === "/";
  let currentPage = +url.searchParams.get("page") || 1;
  let q = url.searchParams.get("q") || "";
  let cart, store, serializedCart, serializedStore;
  try {
    const res = await getAPI("carts/my", request.headers);
    if (res) {
      const cookieCart = {
        items: res == null ? void 0 : res.items,
        qty: res == null ? void 0 : res.qty,
        tax: res == null ? void 0 : res.tax,
        subtotal: res == null ? void 0 : res.subtotal,
        total: res == null ? void 0 : res.total,
        currencySymbol: res == null ? void 0 : res.currencySymbol,
        discount: res == null ? void 0 : res.discount,
        selfTakeout: res == null ? void 0 : res.selfTakeout,
        shipping: res == null ? void 0 : res.shipping,
        unavailableItems: res == null ? void 0 : res.unavailableItems,
        formattedAmount: res == null ? void 0 : res.formattedAmount
      };
      cart = cookieCart;
      serializedCart = import_cookie.default.serialize("cart", JSON.stringify(cookieCart) || "", {
        path: "/"
      });
    }
  } catch (e) {
  } finally {
  }
  try {
    const cookieStore = {
      id,
      domain: DOMAIN,
      logo: `/logo.png?tr=w-auto,h-56:w-auto,h-56`,
      address,
      phone,
      email,
      websiteName,
      websiteLegalName,
      stripePublishableKey
    };
    store = cookieStore;
    serializedStore = import_cookie.default.serialize("store", JSON.stringify(cookieStore) || "", {
      path: "/"
    });
  } catch (e) {
  } finally {
  }
  setHeaders({ cart: serializedCart });
  setHeaders({ store: serializedStore });
  return {
    url: url.href,
    currentPage,
    q,
    cart,
    store
  };
}

// .svelte-kit/adapter-node/nodes/3.js
var index = 3;
var component = async () => (await import("./_layout@.svelte-3R54IS3J.js")).default;
var file = "_app/immutable/components/pages/(app)/auth/_layout@.svelte-21a4ce2d.js";
var imports = ["_app/immutable/components/pages/(app)/auth/_layout@.svelte-21a4ce2d.js", "_app/immutable/chunks/index-98fbb2d4.js", "_app/immutable/chunks/PageTransitions-b3ab4072.js", "_app/immutable/chunks/index-7636af81.js", "_app/immutable/chunks/GoogleAnalytics-97a32634.js", "_app/immutable/chunks/toasts-d97c2a31.js", "_app/immutable/chunks/index-7c2e2153.js", "_app/immutable/chunks/index-4320d0cf.js", "_app/immutable/chunks/stores-ae48d658.js", "_app/immutable/chunks/singletons-44c3e40a.js", "_app/immutable/chunks/PreloadingIndicator-865eb969.js", "_app/immutable/modules/pages/(app)/auth/_layout.ts-e929eee0.js", "_app/immutable/chunks/api-fa739876.js", "_app/immutable/chunks/store-9c7a7cc1.js", "_app/immutable/chunks/index-7c2e2153.js", "_app/immutable/chunks/index-98fbb2d4.js", "_app/immutable/chunks/cookie-universal-common-1e0fc125.js", "_app/immutable/chunks/website-53ccb8f7.js", "_app/immutable/chunks/index-87090d37.js", "_app/immutable/chunks/index-86ffcb50.js", "_app/immutable/chunks/_layout-3556470f.js"];
var stylesheets = ["_app/immutable/assets/FlatToast-4da694a0.css", "_app/immutable/assets/PageTransitions-bc777b27.css", "_app/immutable/assets/PreloadingIndicator-6be07759.css"];
export {
  component,
  file,
  imports,
  index,
  layout_ts_exports as shared,
  stylesheets
};
//# sourceMappingURL=3-CR2KPTWL.js.map
