import {
  DesktopFilter,
  MobileFilter
} from "./chunk-66CC5YUB.js";
import {
  Pagination
} from "./chunk-TH6VNZHJ.js";
import {
  ProductCard
} from "./chunk-2SEEJJUQ.js";
import {
  MobileFooter
} from "./chunk-QEZRVTSU.js";
import {
  SEO
} from "./chunk-G5SNWW7L.js";
import {
  require_hash_it_cjs
} from "./chunk-PQIMBZ5K.js";
import {
  require_dayjs_min
} from "./chunk-KJTYIOR3.js";
import {
  sorts
} from "./chunk-SF373CJS.js";
import "./chunk-PECO4ST5.js";
import "./chunk-7PCG3GZV.js";
import "./chunk-Q5TLOJAI.js";
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
  each,
  escape,
  subscribe,
  validate_component
} from "./chunk-TZVAZAPU.js";
import {
  __toESM
} from "./chunk-HUBM7RA2.js";

// .svelte-kit/adapter-node/entries/pages/(app)/search/_page.svelte.js
var import_dayjs = __toESM(require_dayjs_min(), 1);
var import_hash_it = __toESM(require_hash_it_cjs(), 1);
import "vanilla-lazyload";
import "cookie-universal";
var css = {
  code: "@media(min-width:1024px){}",
  map: null
};
var Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { data } = $$props;
  let seoProps = {
    title: `Find best ${data.searchData || " "}`,
    metadescription: `Find best ${data.searchData || " "}`
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${validate_component(SEO, "SEO").$$render($$result, Object.assign(seoProps), {}, {})}

<div><div class="${"mb-20 flex w-full flex-col gap-5 lg:flex-row lg:gap-10 lg:p-10"}">${data.facets ? `${validate_component(DesktopFilter, "DesktopFilter").$$render(
    $$result,
    {
      facets: data.facets,
      query: data.query,
      class: "sticky top-[7.5rem] hidden lg:top-[5.5rem] lg:block"
    },
    {},
    {}
  )}

			${validate_component(MobileFilter, "MobileFilter").$$render(
    $$result,
    {
      facets: data.facets,
      class: "sticky top-[5rem] z-50 block lg:hidden"
    },
    {},
    {}
  )}` : ``}

		<div class="${"flex w-full px-3 sm:px-10 lg:px-0"}">${data.products ? `<div class="${"w-full"}">${data.products.length > 0 ? `<h1 class="${"mb-5 text-xl font-bold capitalize md:text-2xl"}">Showing results

							${data.searchData ? `for &quot;${escape(data.searchData)}&quot;` : ``}

							(${escape(data.count)})
						</h1>

						<div class="${"mb-4 hidden flex-wrap items-center justify-between md:flex"}"><label class="${"flex items-center gap-2"}"><span>Sort : </span>

								<select class="${"bg-transparent px-2 py-1 font-semibold hover:underline focus:outline-none"}">${each(sorts, (s) => {
    return `<option${add_attribute("value", s.val, 0)}>${escape(s.name)}</option>`;
  })}</select></label></div>

						<div class="${"mb-5 grid w-full grid-cols-2 items-start gap-3 sm:mb-10 sm:flex sm:flex-wrap sm:justify-between lg:mb-20 lg:gap-6"}">${each(data.products, (p, lx) => {
    return `${validate_component(ProductCard, "ProductCard").$$render($$result, { product: p }, {}, {})}`;
  })}</div>

						${validate_component(Pagination, "Pagination").$$render(
    $$result,
    {
      count: Math.ceil(data.count / 40),
      current: data.currentPage
    },
    {},
    {}
  )}` : `<div class="${"flex items-center justify-center"}" style="${"height: 60vh;"}"><div class="${"m-10 flex flex-col items-center justify-center text-center"}"><h1 class="${"mb-10 text-xl capitalize sm:text-2xl lg:text-3xl"}">Oops!!, No result found ${data.searchData ? `for &quot;${escape(data.searchData)}&quot;` : ``}</h1>

								<div class="${"mb-5"}">${validate_component(LazyImg, "LazyImg").$$render(
    $$result,
    {
      src: "/no/no-data-availible.png",
      alt: "no data availible",
      width: "80",
      height: "80",
      class: "h-20 w-20 text-xs"
    },
    {},
    {}
  )}</div>

								<p class="${"mb-5 text-center text-gray-500"}">No data found</p>

								${validate_component(PrimaryButton, "PrimaryButton").$$render($$result, { class: "text-sm" }, {}, {
    default: () => {
      return `Back to Home
								`;
    }
  })}</div></div>`}</div>` : ``}</div></div>

	<div class="${"block sm:hidden"}">${validate_component(MobileFooter, "MobileFooter").$$render($$result, {}, {}, {})}</div></div>`;
});
export {
  Page as default
};
//# sourceMappingURL=_page.svelte-6B5WERL3.js.map
