import { c as create_ssr_component, e as escape, v as validate_component } from "../../../chunks/index2.js";
import { L as Label } from "../../../chunks/globalTheme.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let lglobalTheme = { primary: "#6100FF", secondary: "#35008B" };
  return `<div id="gradientBkg" style="${"background: radial-gradient( 60.7% 60.73% at 50% 24.65%, " + escape(lglobalTheme.gradientColorPrimary, true) + " 0%, " + escape(lglobalTheme.gradientColorSecondary, true) + " 100% ); transition: background ease-in-out 0.2s;"}"></div>
${validate_component(Label, "Skills").$$render($$result, { color: "#000", text: "piu" }, {}, {})}`;
});
export {
  Page as default
};
