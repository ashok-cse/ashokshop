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

// .svelte-kit/adapter-node/entries/pages/(app)/shop/_slug_/_page.server.ts.js
var page_server_ts_exports = {};
__export(page_server_ts_exports, {
  load: () => load,
  prerender: () => prerender
});
import "cookie-universal";
var prerender = false;
async function load({ parent, url, params, setHeaders }) {
  try {
    const { store } = await parent();
    const banners = await getAPI(`banners?pageId=${params.slug}&store=${store.id}`);
    const groupByBanners = await getAPI(`banners/group?pageId=${params.slug}&store=${store.id}`);
    if (banners || groupByBanners) {
      setHeaders({
        "cache-control": "public, max-age=300"
      });
      return { banners, groupByBanners };
    }
  } catch (e) {
    throw error(400, (e == null ? void 0 : e.message) || e);
  }
}

// .svelte-kit/adapter-node/nodes/32.js
var index = 32;
var component = async () => (await import("./_page.svelte-YAPAH5FX.js")).default;
var file = "_app/immutable/components/pages/(app)/shop/_slug_/_page.svelte-9b408716.js";
var imports = ["_app/immutable/components/pages/(app)/shop/_slug_/_page.svelte-9b408716.js", "_app/immutable/chunks/index-98fbb2d4.js", "_app/immutable/chunks/index-54abeec4.js", "_app/immutable/chunks/index-87090d37.js", "_app/immutable/chunks/hash-it.esm-eecb4324.js", "_app/immutable/chunks/website-53ccb8f7.js", "_app/immutable/chunks/LazyImg-7c4ba5e2.js", "_app/immutable/chunks/lazyload.esm-618d6b5d.js", "_app/immutable/chunks/MobileFooter-9eb6b7d4.js", "_app/immutable/chunks/navigation-f5e1c401.js", "_app/immutable/chunks/singletons-44c3e40a.js", "_app/immutable/chunks/index-7c2e2153.js", "_app/immutable/chunks/stores-ae48d658.js", "_app/immutable/chunks/PrimaryButton-057a081b.js", "_app/immutable/chunks/HeroBanners-2b34057f.js"];
var stylesheets = ["_app/immutable/assets/PrimaryButton-5dcaa620.css", "_app/immutable/assets/MobileFooter-2e009648.css"];
export {
  component,
  file,
  imports,
  index,
  page_server_ts_exports as server,
  stylesheets
};
//# sourceMappingURL=32-KDH43VJ7.js.map
