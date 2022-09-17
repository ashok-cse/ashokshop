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
import "./chunk-SF373CJS.js";
import "./chunk-PECO4ST5.js";
import {
  LazyImg
} from "./chunk-A6YQOCTG.js";
import "./chunk-KVK6NGID.js";
import {
  add_attribute,
  create_ssr_component,
  each,
  escape,
  validate_component
} from "./chunk-TZVAZAPU.js";
import {
  __toESM
} from "./chunk-HUBM7RA2.js";

// .svelte-kit/adapter-node/entries/pages/(app)/categories/_page.svelte.js
var import_dayjs = __toESM(require_dayjs_min(), 1);
var import_hash_it = __toESM(require_hash_it_cjs(), 1);
import "vanilla-lazyload";
var Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let megaMenu;
  let { data } = $$props;
  let seoProps = {
    title: `Categories`,
    description: `Categories`
  };
  let bgColors = [
    "bg-fuchsia-200",
    "bg-blue-200",
    "bg-green-200",
    "bg-stone-200",
    "bg-indigo-200",
    "bg-amber-200",
    "bg-lime-200",
    "bg-orange-200",
    "bg-teal-200",
    "bg-cyan-200",
    "bg-yellow-200",
    "bg-gray-200"
  ];
  let showChild = [];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  megaMenu = data == null ? void 0 : data.megaMenu.filter((e) => {
    return e.name !== "New Arrivals";
  });
  return `${validate_component(SEO, "SEO").$$render($$result, Object.assign(seoProps), {}, {})}

<div><div class="${"mb-20"}">${megaMenu.length ? `<ul class="${"flex flex-col divide-y-2 divide-white tracking-wider"}">${each(megaMenu, (m, mx) => {
    var _a, _b;
    return `${m ? `<li>${((_a = m.children) == null ? void 0 : _a.length) ? `<button type="${"button"}" class="${"flex h-24 w-full items-end justify-between focus:outline-none " + escape(bgColors[mx], true)}"><div class="${"flex h-full w-full flex-1 items-center px-6"}"><div class="${"flex items-center gap-2"}"><h1 class="${"text-xl font-bold uppercase"}">${escape(m.name)}</h1>

											<button type="${"button"}" class="${"overflow-hidden rounded-full p-2 focus:outline-none"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6 flex-shrink-0 transition duration-300 " + escape(showChild[mx] ? "transform -rotate-180" : "", true)}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></button>
										</div></div>

									${m.imgCdn ? `<div class="${"flex-shrink-0"}"><img${add_attribute("src", m.imgCdn, 0)} alt="${""}" class="${"h-auto w-20"}">
										</div>` : ``}
								</button>` : `<a href="${"/" + escape(m.slug, true)}" class="${"flex h-24 w-full items-end justify-between " + escape(bgColors[mx], true)}"><div class="${"flex h-full w-full flex-1 items-center px-6"}"><h1 class="${"flex-1 text-xl font-bold uppercase"}">${escape(m.name)}
										</h1></div>

									${m.imgCdn ? `<div class="${"flex-shrink-0"}"><img${add_attribute("src", m.imgCdn, 0)} alt="${""}" class="${"h-auto w-20"}">
										</div>` : ``}
								</a>`}

							${showChild[mx] ? `${((_b = m.children) == null ? void 0 : _b.length) ? `<ul class="${"flex flex-col divide-y bg-white px-8"}">${each(m.children, (c) => {
      return `<li><a href="${"/" + escape(c.slug, true)}" class="${"flex items-center gap-4 py-3 font-medium"}">${c.imgCdn ? `<div class="${"h-12 w-12 flex-shrink-0 overflow-hidden rounded-full"}">${validate_component(LazyImg, "LazyImg").$$render(
        $$result,
        {
          src: c.imgCdn,
          alt: "",
          width: "48",
          height: "48",
          class: "h-full w-full"
        },
        {},
        {}
      )}
														</div>` : `<div class="${"h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-200"}"></div>`}

													<h6>${escape(c.name)}</h6></a>
											</li>`;
    })}
									</ul>` : ``}` : ``}
						</li>` : ``}`;
  })}</ul>` : `<div>No categories found</div>`}</div>

	

	<div class="${"block sm:hidden"}">${validate_component(MobileFooter, "MobileFooter").$$render($$result, {}, {}, {})}</div></div>`;
});
export {
  Page as default
};
//# sourceMappingURL=_page.svelte-FQCBKT26.js.map
