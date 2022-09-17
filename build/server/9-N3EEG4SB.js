import {
  __export
} from "./chunk-HUBM7RA2.js";

// .svelte-kit/adapter-node/entries/pages/(app)/auth/otp-login/_page.ts.js
var page_ts_exports = {};
__export(page_ts_exports, {
  load: () => load,
  prerender: () => prerender
});
var prerender = false;
async function load({ url, params, fetch, parent, context }) {
  const ref = url.searchParams.get("ref");
  const { store, me } = await parent();
  return {
    me,
    store,
    ref
  };
}

// .svelte-kit/adapter-node/nodes/9.js
var index = 9;
var component = async () => (await import("./_page.svelte-BVQDWMYJ.js")).default;
var file = "_app/immutable/components/pages/(app)/auth/otp-login/_page.svelte-3cb73abd.js";
var imports = ["_app/immutable/components/pages/(app)/auth/otp-login/_page.svelte-3cb73abd.js", "_app/immutable/chunks/index-98fbb2d4.js", "_app/immutable/chunks/index-54abeec4.js", "_app/immutable/chunks/index-87090d37.js", "_app/immutable/chunks/hash-it.esm-eecb4324.js", "_app/immutable/chunks/website-53ccb8f7.js", "_app/immutable/chunks/LazyImg-7c4ba5e2.js", "_app/immutable/chunks/lazyload.esm-618d6b5d.js", "_app/immutable/chunks/index-d76ee782.js", "_app/immutable/chunks/toasts-d97c2a31.js", "_app/immutable/chunks/index-7c2e2153.js", "_app/immutable/chunks/navigation-f5e1c401.js", "_app/immutable/chunks/singletons-44c3e40a.js", "_app/immutable/chunks/PrimaryButton-057a081b.js", "_app/immutable/chunks/index-4320d0cf.js", "_app/immutable/chunks/TextboxFloating-e84430c0.js", "_app/immutable/chunks/cookie-universal-common-1e0fc125.js", "_app/immutable/chunks/api-fa739876.js", "_app/immutable/chunks/store-9c7a7cc1.js", "_app/immutable/modules/pages/(app)/auth/otp-login/_page.ts-d0d6125f.js", "_app/immutable/chunks/_page-277d5d62.js"];
var stylesheets = ["_app/immutable/assets/_page-cfe6b745.css", "_app/immutable/assets/FlatToast-4da694a0.css", "_app/immutable/assets/PrimaryButton-5dcaa620.css", "_app/immutable/assets/TextboxFloating-03b732b4.css"];
export {
  component,
  file,
  imports,
  index,
  page_ts_exports as shared,
  stylesheets
};
//# sourceMappingURL=9-N3EEG4SB.js.map
