import {
  PageTransitions
} from "./chunk-XWRIQXOA.js";
import {
  Footer,
  Nav
} from "./chunk-5RDEH7I4.js";
import "./chunk-INLLZ5TS.js";
import "./chunk-BHRZVVG2.js";
import "./chunk-SF373CJS.js";
import "./chunk-PECO4ST5.js";
import "./chunk-7PCG3GZV.js";
import "./chunk-Q5TLOJAI.js";
import "./chunk-LMH4TTMN.js";
import "./chunk-A6YQOCTG.js";
import "./chunk-KVK6NGID.js";
import {
  create_ssr_component,
  validate_component
} from "./chunk-TZVAZAPU.js";
import "./chunk-HUBM7RA2.js";

// .svelte-kit/adapter-node/entries/pages/(app)/_layout.svelte.js
import "cookie-universal";
import "vanilla-lazyload";
var Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Nav, "Nav").$$render(
    $$result,
    {
      me: data.me,
      cart: data.cart,
      store: data.store,
      q: data.q
    },
    {},
    {}
  )}

${validate_component(PageTransitions, "PageTransitions").$$render($$result, { url: data.url }, {}, {
    default: () => {
      return `<div class="${"h-rem mt-20 w-full flex-1"}">${slots.default ? slots.default({}) : ``}</div>`;
    }
  })}

<div class="${"hidden sm:block"}">${validate_component(Footer, "Footer").$$render($$result, { me: data.me, cart: data.cart }, {}, {})}</div>`;
});
export {
  Layout as default
};
//# sourceMappingURL=_layout.svelte-2GXCFMTD.js.map
