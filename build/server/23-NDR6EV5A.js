import {
  require_dayjs_min
} from "./chunk-KJTYIOR3.js";
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
  __export,
  __toESM
} from "./chunk-HUBM7RA2.js";

// .svelte-kit/adapter-node/entries/pages/(app)/my/profile/_page.server.ts.js
var page_server_ts_exports = {};
__export(page_server_ts_exports, {
  load: () => load
});
var import_dayjs = __toESM(require_dayjs_min(), 1);
import "cookie-universal";
async function load({ request, parent }) {
  const { me, store } = await parent();
  let profile = {};
  try {
    const data = await getAPI(`users/me`, request.headers);
    data.dob = data.dob ? (0, import_dayjs.default)(data.dob).format("YYYY-MM-DD") : null;
    profile = data || {
      email: me.email,
      firstName: me.firstName || "",
      lastName: me.lastName || ""
    };
  } catch (e) {
    throw error(401, "You are not authorized to access this page.");
  } finally {
  }
  if (profile) {
    return { profile, store };
  }
  throw redirect(307, "Please login again");
}

// .svelte-kit/adapter-node/nodes/23.js
var index = 23;
var component = async () => (await import("./_page.svelte-7QVOITYY.js")).default;
var file = "_app/immutable/components/pages/(app)/my/profile/_page.svelte-4ec249cd.js";
var imports = ["_app/immutable/components/pages/(app)/my/profile/_page.svelte-4ec249cd.js", "_app/immutable/chunks/index-98fbb2d4.js", "_app/immutable/chunks/index-54abeec4.js", "_app/immutable/chunks/index-87090d37.js", "_app/immutable/chunks/hash-it.esm-eecb4324.js", "_app/immutable/chunks/website-53ccb8f7.js", "_app/immutable/chunks/index-d76ee782.js", "_app/immutable/chunks/toasts-d97c2a31.js", "_app/immutable/chunks/index-7c2e2153.js", "_app/immutable/chunks/api-fa739876.js", "_app/immutable/chunks/store-9c7a7cc1.js", "_app/immutable/chunks/cookie-universal-common-1e0fc125.js", "_app/immutable/chunks/lazyload.esm-618d6b5d.js", "_app/immutable/chunks/Textbox-1996a4cc.js", "_app/immutable/chunks/Skeleton-a3211046.js", "_app/immutable/chunks/CtrlS-3947fa88.js", "_app/immutable/chunks/index-7636af81.js", "_app/immutable/chunks/stores-ae48d658.js", "_app/immutable/chunks/singletons-44c3e40a.js"];
var stylesheets = ["_app/immutable/assets/_page-9e079fe8.css", "_app/immutable/assets/FlatToast-4da694a0.css", "_app/immutable/assets/Skeleton-12b4362d.css"];
export {
  component,
  file,
  imports,
  index,
  page_server_ts_exports as server,
  stylesheets
};
//# sourceMappingURL=23-NDR6EV5A.js.map
