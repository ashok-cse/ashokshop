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

// .svelte-kit/adapter-node/entries/pages/_layout.server.ts.js
var layout_server_ts_exports = {};
__export(layout_server_ts_exports, {
  load: () => load,
  prerender: () => prerender
});
var import_cookie = __toESM(require_cookie(), 1);
import "cookie-universal";
var prerender = false;
async function load({ url, request, setHeaders }) {
  const isDesktop = request.headers.get("sec-ch-ua-mobile") === "?0";
  const listOfPagesWithoutBackButton = [
    "/",
    "/categories",
    "/new-arrivals",
    "/my/wishlist",
    "/my",
    "/payment/success"
  ];
  const isShowBackButton = !listOfPagesWithoutBackButton.includes(url == null ? void 0 : url.pathname);
  url.pathname === "/";
  let currentPage = +url.searchParams.get("page") || 1;
  let q = url.searchParams.get("q") || "";
  let cart, store, me, serializedCart, serializedStore, serializedMe;
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
      setHeaders({ cart: serializedCart });
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
    setHeaders({ store: serializedStore });
  } catch (e) {
  } finally {
  }
  try {
    const ck = request.headers.get("cookie");
    const stringifiedMe = import_cookie.default.parse(ck).me;
    me = JSON.parse(stringifiedMe);
    serializedMe = import_cookie.default.serialize("me", stringifiedMe || "", {
      path: "/"
    });
    setHeaders({ me: serializedMe });
  } catch (e) {
  } finally {
  }
  return {
    url: url.href,
    currentPage,
    q,
    me,
    isDesktop,
    isShowBackButton,
    cart,
    store
  };
}

// .svelte-kit/adapter-node/nodes/0.js
var index = 0;
var component = async () => (await import("./_layout.svelte-CBEEHXRD.js")).default;
var file = "_app/immutable/components/pages/_layout.svelte-f34f07c0.js";
var imports = ["_app/immutable/components/pages/_layout.svelte-f34f07c0.js", "_app/immutable/chunks/index-98fbb2d4.js", "_app/immutable/chunks/GoogleAnalytics-97a32634.js", "_app/immutable/chunks/index-7636af81.js", "_app/immutable/chunks/toasts-d97c2a31.js", "_app/immutable/chunks/index-7c2e2153.js", "_app/immutable/chunks/index-4320d0cf.js", "_app/immutable/chunks/stores-ae48d658.js", "_app/immutable/chunks/singletons-44c3e40a.js", "_app/immutable/chunks/PreloadingIndicator-865eb969.js", "_app/immutable/chunks/BackToTop-70121a6a.js"];
var stylesheets = ["_app/immutable/assets/_layout-736b4641.css", "_app/immutable/assets/FlatToast-4da694a0.css", "_app/immutable/assets/PageTransitions-bc777b27.css", "_app/immutable/assets/PreloadingIndicator-6be07759.css", "_app/immutable/assets/BackToTop-21db51f6.css"];
export {
  component,
  file,
  imports,
  index,
  layout_server_ts_exports as server,
  stylesheets
};
//# sourceMappingURL=0-2QSLQOH7.js.map
