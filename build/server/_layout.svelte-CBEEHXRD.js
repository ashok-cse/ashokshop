import {
  FlatToast,
  GoogleAnalytics,
  ToastContainer
} from "./chunk-4JTAQ5MF.js";
import {
  PreloadingIndicator
} from "./chunk-SKGFO7DG.js";
import {
  BackToTop
} from "./chunk-PBMERFWP.js";
import "./chunk-Q5TLOJAI.js";
import {
  navigating
} from "./chunk-KVK6NGID.js";
import {
  create_ssr_component,
  subscribe,
  validate_component
} from "./chunk-TZVAZAPU.js";
import "./chunk-HUBM7RA2.js";

// .svelte-kit/adapter-node/entries/pages/_layout.svelte.js
var Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $navigating, $$unsubscribe_navigating;
  $$unsubscribe_navigating = subscribe(navigating, (value) => $navigating = value);
  $$unsubscribe_navigating();
  return `${$navigating ? `${validate_component(PreloadingIndicator, "PreloadingIndicator").$$render($$result, {}, {}, {})}` : ``}

<section class="${"minimum-width relative flex min-h-screen flex-col bg-white antialiased"}"><div class="${"h-rem w-full flex-1"}">${slots.default ? slots.default({}) : ``}</div></section>

${validate_component(GoogleAnalytics, "GoogleAnalytics").$$render($$result, {}, {}, {})}

${validate_component(BackToTop, "BackToTop").$$render($$result, {}, {}, {})}

${validate_component(ToastContainer, "ToastContainer").$$render($$result, {}, {}, {
    default: ({ data }) => {
      return `${validate_component(FlatToast, "FlatToast").$$render($$result, { data }, {}, {})}`;
    }
  })}`;
});
export {
  Layout as default
};
//# sourceMappingURL=_layout.svelte-CBEEHXRD.js.map
