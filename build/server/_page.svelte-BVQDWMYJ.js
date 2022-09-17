import {
  TextboxFloating
} from "./chunk-V644343G.js";
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
import "./chunk-7PCG3GZV.js";
import "./chunk-Q5TLOJAI.js";
import {
  PrimaryButton
} from "./chunk-LMH4TTMN.js";
import {
  LazyImg
} from "./chunk-A6YQOCTG.js";
import {
  createEventDispatcher,
  create_ssr_component,
  escape,
  validate_component
} from "./chunk-TZVAZAPU.js";
import {
  __toESM
} from "./chunk-HUBM7RA2.js";

// .svelte-kit/adapter-node/entries/pages/(app)/auth/otp-login/_page.svelte.js
import Cookie from "cookie-universal";
var import_dayjs = __toESM(require_dayjs_min(), 1);
var import_hash_it = __toESM(require_hash_it_cjs(), 1);
import "vanilla-lazyload";
var SendOtp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { phone, loading, store } = $$props;
  let { ref = null } = $$props;
  if ($$props.phone === void 0 && $$bindings.phone && phone !== void 0)
    $$bindings.phone(phone);
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0)
    $$bindings.loading(loading);
  if ($$props.store === void 0 && $$bindings.store && store !== void 0)
    $$bindings.store(store);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div><h6 class="${"mb-3 text-center text-gray-600"}">Please Enter Mobile Number</h6>

	<form class="${"mb-8"}"><div class="${"flex items-baseline gap-1"}"><span class="${"text-sm"}">+91 </span>

			${validate_component(TextboxFloating, "TextboxFloating").$$render(
      $$result,
      {
        type: "tel",
        label: "Mobile Number",
        class: "mb-1 w-full",
        required: true,
        this: ref,
        value: phone
      },
      {
        this: ($$value) => {
          ref = $$value;
          $$settled = false;
        },
        value: ($$value) => {
          phone = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>

		<p class="${"mb-5 text-sm font-light text-gray-500"}">Ex. 9XXXXXXXXX</p>

		${validate_component(PrimaryButton, "PrimaryButton").$$render($$result, { loading, class: "w-full", type: "submit" }, {}, {
      default: () => {
        return `SEND OTP`;
      }
    })}</form></div>`;
  } while (!$$settled);
  return $$rendered;
});
var css = {
  code: ".frosted.svelte-vbphe6{-webkit-backdrop-filter:blur(15px);backdrop-filter:blur(15px);background-color:hsla(0,0%,100%,.75);background-image:url(/auth/login/bg-lighter.svg)}",
  map: null
};
var Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a, _b, _c, _d, _e;
  Cookie();
  let { data } = $$props;
  const seoProps = {
    title: "OTP Login",
    description: "OTP Login"
  };
  let phone, loading = false;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${validate_component(SEO, "SEO").$$render($$result, Object.assign(seoProps), {}, {})}

<div class="${"frosted container mx-auto flex w-full max-w-sm flex-col rounded-2xl border bg-cover bg-center bg-no-repeat px-4 py-10 shadow-2xl sm:px-8 svelte-vbphe6"}" style="${"background-image: url('/login/bg-lighter.svg');"}">
	<a href="${"/"}" aria-label="${"Click to route home"}" class="${"mx-auto mb-5 max-w-max"}" sveltekit:prefetch>${((_a = data.store) == null ? void 0 : _a.logo) ? `<div>${validate_component(LazyImg, "LazyImg").$$render(
    $$result,
    {
      src: (_b = data.store) == null ? void 0 : _b.logo,
      alt: ((_c = data.store) == null ? void 0 : _c.name) + " logo",
      height: "40",
      class: "h-10 w-auto flex-shrink-0 object-contain object-center"
    },
    {},
    {}
  )}</div>` : `${((_d = data.store) == null ? void 0 : _d.websiteName) ? `<h1 class="${"bg-gradient-to-br from-secondary-500 to-primary-500 bg-clip-text text-4xl font-extrabold text-transparent"}">${escape((_e = data.store) == null ? void 0 : _e.websiteName)}</h1>` : ``}`}</a>

	${`${validate_component(SendOtp, "SendOtp").$$render($$result, { loading, phone }, {}, {})}`}

	

	<p class="${"text-center text-sm text-gray-500"}">By clicking send OTP you are accepting our
		<a href="${"/p/terms"}" aria-label="${"Click to route terms & conditions"}" target="${"_blank"}" rel="${"noopener noreferrer"}" class="${"link whitespace-nowrap"}"><b>Terms &amp; Conditions</b></a></p></div>`;
});
export {
  Page as default
};
//# sourceMappingURL=_page.svelte-BVQDWMYJ.js.map
