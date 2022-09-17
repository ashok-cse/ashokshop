import {
  error,
  redirect
} from "./chunk-TBPX2CNA.js";
import {
  post
} from "./chunk-BHRZVVG2.js";
import "./chunk-PECO4ST5.js";
import "./chunk-7PCG3GZV.js";
import "./chunk-Q5TLOJAI.js";
import "./chunk-TZVAZAPU.js";
import {
  __export
} from "./chunk-HUBM7RA2.js";

// .svelte-kit/adapter-node/entries/pages/(app)/payment/success/_page.server.ts.js
var page_server_ts_exports = {};
__export(page_server_ts_exports, {
  load: () => load,
  prerender: () => prerender
});
import "cookie-universal";
var prerender = false;
async function load({ url, request }) {
  let orderId = url.searchParams.get("id");
  let status = url.searchParams.get("status");
  let paymentMode = url.searchParams.get("provider");
  let loading, err, order;
  try {
    loading = true;
    request.headers.set("content-type", "application/json");
    const res = await post(
      `orders/pay-sucess-page-hit`,
      {
        paymentMode,
        status,
        orderId
      },
      request.headers
    );
    order = res;
  } catch (e) {
    if (e.status === 401) {
      throw redirect(307, "/auth/otp-login");
    }
    err = e;
    throw error(400, (e == null ? void 0 : e.message) || e);
  } finally {
    loading = false;
  }
  return { loading, status, paymentMode, order, err };
}

// .svelte-kit/adapter-node/nodes/29.js
var index = 29;
var component = async () => (await import("./_page.svelte-7D3CG3GM.js")).default;
var file = "_app/immutable/components/pages/(app)/payment/success/_page.svelte-8f324ee0.js";
var imports = ["_app/immutable/components/pages/(app)/payment/success/_page.svelte-8f324ee0.js", "_app/immutable/chunks/index-98fbb2d4.js", "_app/immutable/chunks/index-54abeec4.js", "_app/immutable/chunks/index-87090d37.js", "_app/immutable/chunks/hash-it.esm-eecb4324.js", "_app/immutable/chunks/website-53ccb8f7.js", "_app/immutable/chunks/LazyImg-7c4ba5e2.js", "_app/immutable/chunks/lazyload.esm-618d6b5d.js", "_app/immutable/chunks/PrimaryButton-057a081b.js", "_app/immutable/chunks/index-d76ee782.js", "_app/immutable/chunks/toasts-d97c2a31.js", "_app/immutable/chunks/index-7c2e2153.js", "_app/immutable/chunks/store-9c7a7cc1.js", "_app/immutable/chunks/cookie-universal-common-1e0fc125.js", "_app/immutable/chunks/WhiteButton-f1fdabd9.js"];
var stylesheets = ["_app/immutable/assets/_page-db56256e.css", "_app/immutable/assets/PrimaryButton-5dcaa620.css", "_app/immutable/assets/FlatToast-4da694a0.css", "_app/immutable/assets/WhiteButton-5dcaa620.css"];
export {
  component,
  file,
  imports,
  index,
  page_server_ts_exports as server,
  stylesheets
};
//# sourceMappingURL=29-B2CT3G2N.js.map
