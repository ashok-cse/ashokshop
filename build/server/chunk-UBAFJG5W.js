import {
  create_ssr_component,
  each,
  escape
} from "./chunk-TZVAZAPU.js";

// .svelte-kit/adapter-node/chunks/Error.js
var Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { err } = $$props;
  if ($$props.err === void 0 && $$bindings.err && err !== void 0)
    $$bindings.err(err);
  return `${err ? `<div class="${"my-2 text-xs font-medium text-red-600"}">${(err == null ? void 0 : err.length) ? `${each(err, (e) => {
    return `<span>${escape(e.message)}</span>`;
  })}` : `${err.message ? `<span>${escape(err.message)}</span>` : `<span>${escape(JSON.stringify(err, null, 2))}</span>`}`}</div>` : ``}`;
});

export {
  Error
};
//# sourceMappingURL=chunk-UBAFJG5W.js.map
