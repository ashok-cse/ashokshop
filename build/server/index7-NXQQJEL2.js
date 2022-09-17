import {
  require_cookie
} from "./chunk-5UO6NJKZ.js";
import "./chunk-7PCG3GZV.js";
import "./chunk-Q5TLOJAI.js";
import "./chunk-TZVAZAPU.js";
import {
  __toESM
} from "./chunk-HUBM7RA2.js";

// .svelte-kit/adapter-node/chunks/index7.js
var import_cookie = __toESM(require_cookie(), 1);
import "cookie-universal";
var handle = async ({ event, resolve }) => {
  const request = event.request;
  request.headers.delete("connection");
  const response = await resolve(event);
  return response;
};
var getSession = ({ locals }) => {
};
export {
  getSession,
  handle
};
//# sourceMappingURL=index7-NXQQJEL2.js.map
