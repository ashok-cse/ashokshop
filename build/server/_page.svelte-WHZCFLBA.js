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
  create_ssr_component,
  validate_component
} from "./chunk-TZVAZAPU.js";
import {
  __toESM
} from "./chunk-HUBM7RA2.js";

// .svelte-kit/adapter-node/entries/pages/(marketing)/p/privacy-policy/_page.svelte.js
var import_dayjs = __toESM(require_dayjs_min(), 1);
var import_hash_it = __toESM(require_hash_it_cjs(), 1);
var Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let seoProps = {
    title: `Privacy Policy`,
    description: `Privacy Policy`
  };
  return `${validate_component(SEO, "SEO").$$render($$result, Object.assign(seoProps), {}, {})}

<section class="${"min-h-screen p-3 sm:p-10"}"><div class="${"container mx-auto w-full max-w-6xl"}">

		<h1 class="${"mb-5 text-center font-serif text-2xl font-medium sm:mb-10 md:text-3xl lg:text-4xl"}">Privacy Policy
		</h1>

		<ul class="${"flex flex-col gap-5 text-sm text-gray-500 sm:text-base"}"><li>Your privacy is important to us. It is Misiki\u2019s policy to respect your privacy regarding any
				information we may collect from you across our website, https://misiki.in, and other sites
				we own and operate.
			</li>

			<li>We only ask for personal information when we truly need it to provide a service to you. We
				collect it by fair and lawful means, with your knowledge and consent. We also let you know
				why we\u2019re collecting it and how it will be used.
			</li>

			<li>We only retain collected information for as long as necessary to provide you with your
				requested service. What data we store, we\u2019ll protect within commercially acceptable means to
				prevent loss and theft, as well as unauthorized access, disclosure, copying, use or
				modification.
			</li>

			<li>We don\u2019t share any personally identifying information publicly or with third-parties, except
				when required to by law.
			</li>

			<li>Our website may link to external sites that are not operated by us. Please be aware that we
				have no control over the content and practices of these sites, and cannot accept
				responsibility or liability for their respective privacy policies.
			</li>

			<li>You are free to refuse our request for your personal information, with the understanding
				that we may be unable to provide you with some of your desired services.
			</li>

			<li>Your continued use of our website will be regarded as acceptance of our practices around
				privacy and personal information. If you have any questions about how we handle user data
				and personal information, feel free to contact us.
			</li>

			<li>This policy is effective as of 1 January 2020.</li></ul></div></section>`;
});
export {
  Page as default
};
//# sourceMappingURL=_page.svelte-WHZCFLBA.js.map
