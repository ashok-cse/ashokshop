import {
  create_ssr_component
} from "./chunk-TZVAZAPU.js";

// .svelte-kit/adapter-node/chunks/BackToTop.js
var css = {
  code: ".back-to-top.svelte-1mzg1xq{bottom:70px;position:fixed;right:20px;transition:opacity .5s,visibility .5s;-webkit-user-select:none;-moz-user-select:none;user-select:none;z-index:99}",
  map: null
};
var BackToTop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { showOnPx = 150 } = $$props;
  if ($$props.showOnPx === void 0 && $$bindings.showOnPx && showOnPx !== void 0)
    $$bindings.showOnPx(showOnPx);
  $$result.css.add(css);
  return `

${``}`;
});

export {
  BackToTop
};
//# sourceMappingURL=chunk-PBMERFWP.js.map
