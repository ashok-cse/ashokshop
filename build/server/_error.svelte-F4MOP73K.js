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
  create_ssr_component,
  escape,
  subscribe,
  validate_component
} from "./chunk-TZVAZAPU.js";
import "./chunk-HUBM7RA2.js";

// .svelte-kit/adapter-node/entries/pages/_error.svelte.js
import "vanilla-lazyload";
var css = {
  code: "h1.svelte-rplo89{color:#252932;font-size:150px;font-weight:700;line-height:150px;text-shadow:rgba(61,61,61,.3) 1px 1px,rgba(61,61,61,.2) 2px 2px,rgba(61,61,61,.3) 3px 3px}",
  map: null
};
var Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a, _b, _c, _d, _e;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<div class="${"flex h-[70vh] flex-col items-center justify-center text-center sm:h-[92vh]"}">${((_a = $page.error) == null ? void 0 : _a.status) === 404 ? `<div class="${"container"}"><div class="${"flex justify-center text-center"}">${validate_component(LazyImg, "LazyImg").$$render(
    $$result,
    {
      src: "/error/404.svg",
      alt: " ",
      width: "240",
      class: "mb-5 h-auto w-60 object-contain"
    },
    {},
    {}
  )}</div>

			<div class="${"layout"}"><div class="${"flex flex-col items-center justify-center text-center"}"><h1 class="${"svelte-rplo89"}">404</h1>

					<h2 class="${"headline my-3"}">Sorry, page not found</h2></div></div></div>` : `${((_b = $page.error) == null ? void 0 : _b.status) === 403 ? `<div class="${"container"}"><div class="${"layout"}"><div class="${"flex justify-center text-center"}">${validate_component(LazyImg, "LazyImg").$$render(
    $$result,
    {
      src: "/error/404.svg",
      alt: "",
      width: "240",
      class: "mb-5 h-auto w-60 object-contain"
    },
    {},
    {}
  )}</div>

				<div class="${"text-center"}"><h1 class="${"svelte-rplo89"}">403</h1>

					<h2 class="${"headline my-3"}">Sorry, access denied.</h2></div></div></div>` : `${((_c = $page.error) == null ? void 0 : _c.status) === 500 ? `<div class="${"container"}"><div class="${"layout"}"><div class="${"flex justify-center text-center"}">${validate_component(LazyImg, "LazyImg").$$render(
    $$result,
    {
      src: "/error/404.svg",
      alt: "",
      width: "240",
      class: "mb-5 h-auto w-60 object-contain"
    },
    {},
    {}
  )}</div>

				<div class="${"flex flex-col gap-5 text-center"}"><h1 class="${"svelte-rplo89"}">500</h1>

					<h2 class="${"headline my-3"}">Sorry, the server is down.</h2></div></div></div>` : `<div class="${"container"}"><div class="${"layout"}"><div class="${"flex justify-center text-center"}">${validate_component(LazyImg, "LazyImg").$$render(
    $$result,
    {
      src: "/error/404.svg",
      alt: "",
      width: "240",
      class: "mb-5 h-auto w-60 object-contain"
    },
    {},
    {}
  )}</div>

				<div class="${"flex flex-col gap-5 text-center"}"><h1 class="${"svelte-rplo89"}">${escape(((_d = $page.error) == null ? void 0 : _d.status) || 500)}</h1>

					<h2 class="${"headline my-3"}">${escape((_e = $page.error) == null ? void 0 : _e.message)}</h2></div></div></div>`}`}`}

	<div class="${"mt-5 sm:mt-10"}"><a href="${"/"}" aria-label="${"Click here to go back home"}" sveltekit:prefetch>${validate_component(PrimaryButton, "PrimaryButton").$$render($$result, { class: "px-10" }, {}, {
    default: () => {
      return `Home`;
    }
  })}</a></div></div>`;
});
export {
  Error as default
};
//# sourceMappingURL=_error.svelte-F4MOP73K.js.map
