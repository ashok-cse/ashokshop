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
import {
  page
} from "./chunk-KVK6NGID.js";
import {
  create_ssr_component,
  subscribe,
  validate_component
} from "./chunk-TZVAZAPU.js";
import "./chunk-HUBM7RA2.js";

// .svelte-kit/adapter-node/entries/pages/(marketing)/_layout.svelte.js
import "cookie-universal";
import "vanilla-lazyload";
var Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<div class="${"h-rem w-full flex-1"}">${validate_component(Nav, "Nav").$$render($$result, { me: $page.data.me, cart: $page.data.cart }, {}, {})}

	<div class="${"mt-20"}">${slots.default ? slots.default({}) : ``}</div></div>

<div class="${"hidden sm:block"}">${validate_component(Footer, "Footer").$$render($$result, { me: $page.data.me, cart: $page.data.cart }, {}, {})}</div>`;
});
export {
  Layout as default
};
//# sourceMappingURL=_layout.svelte-ZCAQHU2Y.js.map
