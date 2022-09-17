import {
  Skeleton
} from "./chunk-XK2Z4KWT.js";
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
  add_classes,
  create_ssr_component,
  each,
  escape,
  validate_component
} from "./chunk-TZVAZAPU.js";
import {
  __toESM
} from "./chunk-HUBM7RA2.js";

// .svelte-kit/adapter-node/entries/pages/(marketing)/faqs/_page.svelte.js
var import_dayjs = __toESM(require_dayjs_min(), 1);
var import_hash_it = __toESM(require_hash_it_cjs(), 1);
var Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let seoProps = {
    title: `Frequently Asked Questions`,
    description: `Frequently Asked Questions`
  };
  let show = [];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(SEO, "SEO").$$render($$result, Object.assign(seoProps), {}, {})}

<section class="${"min-h-screen p-3 sm:p-10"}"><div class="${"container mx-auto w-full max-w-6xl"}">${data.loading ? `<div class="${"flex flex-col gap-5"}">${each({ length: 3 }, (_) => {
    return `${validate_component(Skeleton, "Skeleton").$$render($$result, {}, {}, {})}`;
  })}</div>` : `${data.count > 0 ? `

			<div><h1 class="${"mb-5 text-center font-serif text-2xl font-medium sm:mb-10 md:text-3xl lg:text-4xl"}">Frequently Asked Questions
				</h1>

				<div class="${"divide-y overflow-hidden rounded-md border"}">${each(data.faqs, (f, fx) => {
    return `<div${add_classes((show[fx] ? "text-primary-500" : "").trim())}><button type="${"button"}" class="${"flex w-full cursor-pointer items-start justify-between p-4 text-left focus:outline-none sm:p-6"}"><span class="${"flex-1 text-base font-medium md:text-lg"}">${escape(f.question)}</span>

								<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 transition duration-300 sm:h-6 " + escape(
      show[fx] ? "text-primary-500 transform rotate-45 transition duration-300" : "",
      true
    )}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M12 4v16m8-8H4"}"></path></svg></button>

							${show[fx] ? `<div class="${"prose animate-dropdown px-4 pb-4 text-sm text-gray-500 first-letter:uppercase sm:px-6 sm:pb-6 md:text-base"}"><!-- HTML_TAG_START -->${f.answer}<!-- HTML_TAG_END -->
								</div>` : ``}
						</div>`;
  })}</div></div>` : ``}`}</div></section>`;
});
export {
  Page as default
};
//# sourceMappingURL=_page.svelte-VKKR55U3.js.map
