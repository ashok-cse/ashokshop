import {
  create_ssr_component
} from "./chunk-TZVAZAPU.js";

// .svelte-kit/adapter-node/chunks/PageTransitions.js
var css = {
  code: ".transition-outer.svelte-1bh66kf{display:grid;grid-template:1fr 1fr}.transition-inner.svelte-1bh66kf{grid-column:1;grid-row:1}",
  map: null
};
var PageTransitions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { url = "" } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  $$result.css.add(css);
  return `




<div class="${"transition-outer svelte-1bh66kf"}"><div class="${"transition-inner svelte-1bh66kf"}" style="${"flex flex-col items-center justify-center text-center"}">${slots.default ? slots.default({}) : ``}</div>
</div>`;
});

export {
  PageTransitions
};
//# sourceMappingURL=chunk-XWRIQXOA.js.map
