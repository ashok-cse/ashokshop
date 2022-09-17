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

// .svelte-kit/adapter-node/entries/pages/(app)/checkout/payment-options/_page.server.ts.js
var page_server_ts_exports = {};
__export(page_server_ts_exports, {
  load: () => load,
  prerender: () => prerender
});
import "cookie-universal";
var prerender = false;
async function load({ params, parent, url, request }) {
  const { me, cart } = await parent();
  try {
    let addressId = url.searchParams.get("address");
    const paymentMethods = [
      {
        active: true,
        name: "Cash on Delivery",
        value: "cod",
        img: "https://cdn-icons-png.flaticon.com/512/2331/2331895.png",
        color: "",
        position: 1,
        key: "",
        text: "Pay the full amount when item is delivered",
        type: "cod",
        imgCdn: "https://cdn-icons-png.flaticon.com/512/2331/2331895.png"
      },
      {
        active: true,
        name: "Online with Cashfree",
        value: "cashfree",
        img: "https://misiki.s3.ap-south-1.amazonaws.com/img/cashfree.jpg",
        color: "",
        position: 2,
        key: "",
        text: "Pay the full amount with online / UPI / Wallets / Credit Cards / Debit Cards",
        type: "pg",
        imgCdn: "https://ik.imagekit.io/3wzatecz51w3i/s3/img/cashfree.jpg"
      },
      {
        active: true,
        name: "Online with Razorpay",
        value: "razorpay",
        img: "/razorpay-icon.jpg",
        color: "",
        position: 3,
        key: "",
        text: "Pay the full amount with online / UPI / Wallets / Credit Cards / Debit Cards",
        type: "pg",
        imgCdn: "/razorpay-icon.jpg"
      }
    ];
    const address = await getAPI(`addresses/${addressId}`, request.headers);
    if (paymentMethods) {
      return { paymentMethods, address, addressId, me, cart };
    }
  } catch (e) {
    throw error(400, e == null ? void 0 : e.message);
  }
  throw error(500, "Internal Server Error");
}

// .svelte-kit/adapter-node/nodes/17.js
var index = 17;
var component = async () => (await import("./_page.svelte-WJY5P5QO.js")).default;
var file = "_app/immutable/components/pages/(app)/checkout/payment-options/_page.svelte-0cbf0086.js";
var imports = ["_app/immutable/components/pages/(app)/checkout/payment-options/_page.svelte-0cbf0086.js", "_app/immutable/chunks/index-98fbb2d4.js", "_app/immutable/chunks/index-54abeec4.js", "_app/immutable/chunks/index-87090d37.js", "_app/immutable/chunks/hash-it.esm-eecb4324.js", "_app/immutable/chunks/website-53ccb8f7.js", "_app/immutable/chunks/index-d76ee782.js", "_app/immutable/chunks/toasts-d97c2a31.js", "_app/immutable/chunks/index-7c2e2153.js", "_app/immutable/chunks/Error-87be376e.js", "_app/immutable/chunks/Pricesummary-32467dcf.js", "_app/immutable/chunks/navigation-f5e1c401.js", "_app/immutable/chunks/singletons-44c3e40a.js", "_app/immutable/chunks/PrimaryButton-057a081b.js", "_app/immutable/chunks/LazyImg-7c4ba5e2.js", "_app/immutable/chunks/lazyload.esm-618d6b5d.js", "_app/immutable/chunks/CheckoutHeader-d93f52e0.js", "_app/immutable/chunks/api-fa739876.js", "_app/immutable/chunks/store-9c7a7cc1.js", "_app/immutable/chunks/cookie-universal-common-1e0fc125.js"];
var stylesheets = ["_app/immutable/assets/PrimaryButton-5dcaa620.css", "_app/immutable/assets/FlatToast-4da694a0.css", "_app/immutable/assets/CheckoutHeader-2c551ea8.css"];
export {
  component,
  file,
  imports,
  index,
  page_server_ts_exports as server,
  stylesheets
};
//# sourceMappingURL=17-X3ABG2BD.js.map
