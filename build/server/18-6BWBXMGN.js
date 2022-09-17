import {
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

// .svelte-kit/adapter-node/entries/pages/(app)/my/_page.server.ts.js
var page_server_ts_exports = {};
__export(page_server_ts_exports, {
  load: () => load
});
import "cookie-universal";
async function load({ request, parent, url }) {
  const { me, store } = await parent();
  try {
    const myOrders = await getAPI(`orders/my?store=${store == null ? void 0 : store.id}`, request.headers);
    const myWishlist = await getAPI(`wishlists/my?store=${store == null ? void 0 : store.id}`, request.headers);
    const myReviews = await getAPI(`reviews?store=${store == null ? void 0 : store.id}`, request.headers);
    return { me, myOrders, myWishlist, myReviews };
  } catch (e) {
    if (e.status === 401) {
      throw redirect(307, "/auth/otp-login");
    }
  }
}

// .svelte-kit/adapter-node/nodes/18.js
var index = 18;
var component = async () => (await import("./_page.svelte-WIYSIQ4X.js")).default;
var file = "_app/immutable/components/pages/(app)/my/_page.svelte-570af612.js";
var imports = ["_app/immutable/components/pages/(app)/my/_page.svelte-570af612.js", "_app/immutable/chunks/index-98fbb2d4.js", "_app/immutable/chunks/index-54abeec4.js", "_app/immutable/chunks/index-87090d37.js", "_app/immutable/chunks/hash-it.esm-eecb4324.js", "_app/immutable/chunks/website-53ccb8f7.js", "_app/immutable/chunks/MobileFooter-9eb6b7d4.js", "_app/immutable/chunks/navigation-f5e1c401.js", "_app/immutable/chunks/singletons-44c3e40a.js", "_app/immutable/chunks/index-7c2e2153.js", "_app/immutable/chunks/stores-ae48d658.js", "_app/immutable/chunks/LazyImg-7c4ba5e2.js", "_app/immutable/chunks/lazyload.esm-618d6b5d.js", "_app/immutable/chunks/index-7636af81.js"];
var stylesheets = ["_app/immutable/assets/MobileFooter-2e009648.css"];
export {
  component,
  file,
  imports,
  index,
  page_server_ts_exports as server,
  stylesheets
};
//# sourceMappingURL=18-6BWBXMGN.js.map
