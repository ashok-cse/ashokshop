import {
  PreloadingIndicator
} from "./chunk-SKGFO7DG.js";
import {
  navigating
} from "./chunk-KVK6NGID.js";
import {
  create_ssr_component,
  subscribe,
  validate_component
} from "./chunk-TZVAZAPU.js";
import "./chunk-HUBM7RA2.js";

// .svelte-kit/adapter-node/entries/pages/(app)/autosuggest/_layout@.svelte.js
var Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $navigating, $$unsubscribe_navigating;
  $$unsubscribe_navigating = subscribe(navigating, (value) => $navigating = value);
  $$unsubscribe_navigating();
  return `${$navigating ? `${validate_component(PreloadingIndicator, "PreloadingIndicator").$$render($$result, {}, {}, {})}` : ``}

${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
//# sourceMappingURL=_layout@.svelte-6T5G3SLW.js.map
