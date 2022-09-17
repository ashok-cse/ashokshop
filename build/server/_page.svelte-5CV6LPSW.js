import {
  SEO
} from "./chunk-G5SNWW7L.js";
import {
  require_hash_it_cjs
} from "./chunk-PQIMBZ5K.js";
import {
  require_dayjs_min
} from "./chunk-KJTYIOR3.js";
import "./chunk-SF373CJS.js";
import "./chunk-PECO4ST5.js";
import {
  PrimaryButton
} from "./chunk-LMH4TTMN.js";
import {
  LazyImg
} from "./chunk-A6YQOCTG.js";
import {
  page
} from "./chunk-KVK6NGID.js";
import {
  add_attribute,
  create_ssr_component,
  subscribe,
  validate_component
} from "./chunk-TZVAZAPU.js";
import {
  __toESM
} from "./chunk-HUBM7RA2.js";

// .svelte-kit/adapter-node/entries/pages/(app)/payment/failure/_page.svelte.js
var import_dayjs = __toESM(require_dayjs_min(), 1);
var import_hash_it = __toESM(require_hash_it_cjs(), 1);
import "vanilla-lazyload";
var Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a;
  let paymentUrl;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let seoProps = { title: `Failure`, description: `Failure` };
  paymentUrl = (_a = $page == null ? void 0 : $page.url) == null ? void 0 : _a.searchParams.get("ref");
  $$unsubscribe_page();
  return `${validate_component(SEO, "SEO").$$render($$result, Object.assign(seoProps), {}, {})}

<div class="${"min-h-screen w-full"}"><div class="${"flex flex-col items-center justify-center gap-5 py-20 text-center"}"><div>${validate_component(LazyImg, "LazyImg").$$render(
    $$result,
    {
      src: "/no/cancle.png",
      alt: "failed",
      class: "h-auto w-20 object-contain object-top"
    },
    {},
    {}
  )}</div>

		<h1 class="${"text-xl font-bold sm:text-2xl md:text-3xl"}">Payment Failed!</h1>

		<a${add_attribute("href", paymentUrl, 0)} aria-label="${"Click to go back to payment methode"}" sveltekit:prefetch>${validate_component(PrimaryButton, "PrimaryButton").$$render($$result, { class: "uppercase" }, {}, {
    default: () => {
      return `Pay Again`;
    }
  })}</a></div></div>`;
});
export {
  Page as default
};
//# sourceMappingURL=_page.svelte-5CV6LPSW.js.map
