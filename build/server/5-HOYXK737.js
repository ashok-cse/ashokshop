import {
  redirect
} from "./chunk-TBPX2CNA.js";
import "./chunk-TZVAZAPU.js";
import {
  __export
} from "./chunk-HUBM7RA2.js";

// .svelte-kit/adapter-node/entries/pages/(app)/my/_layout.ts.js
var layout_ts_exports = {};
__export(layout_ts_exports, {
  load: () => load,
  prerender: () => prerender
});
import Cookie from "cookie-universal";
Cookie();
var prerender = false;
async function load({ url, params, parent, fetch }) {
  const { me, cart, store } = await parent();
  if (!me) {
    throw redirect(302, `/auth/otp-login?ref=${url.pathname}${url.search}`);
  }
  const isHome = url.pathname === "/";
  let currentPage = +url.searchParams.get("page") || 1;
  let q = url.searchParams.get("q") || "";
  return {
    url: url.href,
    currentPage,
    q,
    isHome,
    me,
    cart,
    store
  };
}

// .svelte-kit/adapter-node/nodes/5.js
var index = 5;
var component = async () => (await import("./_layout.svelte-K7ISETCP.js")).default;
var file = "_app/immutable/components/pages/(app)/my/_layout.svelte-4f42770b.js";
var imports = ["_app/immutable/components/pages/(app)/my/_layout.svelte-4f42770b.js", "_app/immutable/chunks/index-98fbb2d4.js", "_app/immutable/chunks/PageTransitions-b3ab4072.js", "_app/immutable/chunks/index-7636af81.js", "_app/immutable/chunks/stores-ae48d658.js", "_app/immutable/chunks/singletons-44c3e40a.js", "_app/immutable/chunks/index-7c2e2153.js", "_app/immutable/chunks/BackToTop-70121a6a.js", "_app/immutable/chunks/store-9c7a7cc1.js", "_app/immutable/chunks/cookie-universal-common-1e0fc125.js", "_app/immutable/chunks/navigation-f5e1c401.js", "_app/immutable/chunks/lazyload.esm-618d6b5d.js", "_app/immutable/modules/pages/(app)/my/_layout.ts-70382913.js", "_app/immutable/chunks/navigation-f5e1c401.js", "_app/immutable/chunks/singletons-44c3e40a.js", "_app/immutable/chunks/index-7c2e2153.js", "_app/immutable/chunks/index-98fbb2d4.js", "_app/immutable/chunks/index-297b380d.js", "_app/immutable/chunks/cookie-universal-common-1e0fc125.js", "_app/immutable/chunks/_layout-63d4caa4.js"];
var stylesheets = ["_app/immutable/assets/_layout-e5da370a.css", "_app/immutable/assets/FlatToast-4da694a0.css", "_app/immutable/assets/PreloadingIndicator-6be07759.css", "_app/immutable/assets/MegaMenu-540c52e9.css", "_app/immutable/assets/PrimaryButton-5dcaa620.css", "_app/immutable/assets/PageTransitions-bc777b27.css", "_app/immutable/assets/BackToTop-21db51f6.css"];
export {
  component,
  file,
  imports,
  index,
  layout_ts_exports as shared,
  stylesheets
};
//# sourceMappingURL=5-HOYXK737.js.map
