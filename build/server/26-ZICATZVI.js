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

// .svelte-kit/adapter-node/entries/pages/(app)/my/wishlist/_page.server.ts.js
var page_server_ts_exports = {};
__export(page_server_ts_exports, {
  load: () => load
});
import "cookie-universal";
async function load({ request }) {
  try {
    const wishlistedProducts = await getAPI(`wishlists/my`, request.headers);
    if (wishlistedProducts) {
      return { wishlistedProducts };
    }
    throw error(404, "Wishlist not found");
  } catch (e) {
    if (e.status === 401) {
      throw redirect(307, "/auth/otp-login");
    }
  }
}

// .svelte-kit/adapter-node/nodes/26.js
var index = 26;
var component = async () => (await import("./_page.svelte-A2OZ5G54.js")).default;
var file = "_app/immutable/components/pages/(app)/my/wishlist/_page.svelte-8f93aac2.js";
var imports = ["_app/immutable/components/pages/(app)/my/wishlist/_page.svelte-8f93aac2.js", "_app/immutable/chunks/index-98fbb2d4.js", "_app/immutable/chunks/index-54abeec4.js", "_app/immutable/chunks/index-87090d37.js", "_app/immutable/chunks/hash-it.esm-eecb4324.js", "_app/immutable/chunks/website-53ccb8f7.js", "_app/immutable/chunks/MobileFooter-9eb6b7d4.js", "_app/immutable/chunks/navigation-f5e1c401.js", "_app/immutable/chunks/singletons-44c3e40a.js", "_app/immutable/chunks/index-7c2e2153.js", "_app/immutable/chunks/stores-ae48d658.js", "_app/immutable/chunks/PrimaryButton-057a081b.js", "_app/immutable/chunks/api-fa739876.js", "_app/immutable/chunks/store-9c7a7cc1.js", "_app/immutable/chunks/cookie-universal-common-1e0fc125.js", "_app/immutable/chunks/LazyImg-7c4ba5e2.js", "_app/immutable/chunks/lazyload.esm-618d6b5d.js"];
var stylesheets = ["_app/immutable/assets/_page-ce1d138d.css", "_app/immutable/assets/PrimaryButton-5dcaa620.css", "_app/immutable/assets/MobileFooter-2e009648.css"];
export {
  component,
  file,
  imports,
  index,
  page_server_ts_exports as server,
  stylesheets
};
//# sourceMappingURL=26-ZICATZVI.js.map
