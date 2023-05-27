import { c as create_ssr_component, b as add_attribute, d as createEventDispatcher, e as escape, n as null_to_empty, o as onDestroy, v as validate_component, m as missing_component } from "../../chunks/index2.js";
import { L as Label, g as globalTheme } from "../../chunks/globalTheme.js";
import { w as writable } from "../../chunks/index.js";
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size } = $$props;
  let { id } = $$props;
  let { style } = $$props;
  let { show } = $$props;
  let { color } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  return `${show ? `<svg class="deco"${add_attribute("id", id ? id : "", 0)}${add_attribute("width", size ? size : "5vh", 0)}${add_attribute("height", size ? size : "5vh", 0)}${add_attribute("style", style ? style : "", 0)} viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="299" height="299"${add_attribute("stroke", color ? color : "#2400FF", 0)}></rect><rect x="73.9028" y="148.838" width="107.085" height="107.085" transform="rotate(-45 73.9028 148.838)"${add_attribute("stroke", color ? color : "#2400FF", 0)}></rect><rect x="74.1312" y="165.65" width="107.085" height="107.085" transform="rotate(-45 74.1312 165.65)"${add_attribute("stroke", color ? color : "#2400FF", 0)}></rect><rect x="73.7071" y="134.428" width="107.085" height="107.085" transform="rotate(-45 73.7071 134.428)"${add_attribute("stroke", color ? color : "#2400FF", 0)}></rect></svg>` : ``}`;
});
function isMobile() {
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
    navigator.userAgent
  ) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
    navigator.userAgent.substr(0, 4)
  )) {
    return true;
  } else {
    return false;
  }
}
const Button_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: ".button.svelte-pt98vu{user-select:none;--webkit-user-select:none;position:absolute;display:flex;align-items:center;justify-content:center;top:0%;transition:all linear 0.1s}",
  map: null
};
function iu(val, valDefault) {
  return val != void 0 ? val : valDefault;
}
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { id } = $$props;
  let { label } = $$props;
  let { className } = $$props;
  let { color } = $$props;
  let { style } = $$props;
  let { lightColor } = $$props;
  let { borderColor } = $$props;
  let { backgroundColor } = $$props;
  let { onClick } = $$props;
  let { width } = $$props;
  let { height } = $$props;
  let { top } = $$props;
  let { left } = $$props;
  let { horizontalFont } = $$props;
  let { verticalFont } = $$props;
  let { desktopFont } = $$props;
  let { backdropFilter } = $$props;
  let { opacity } = $$props;
  let { tabletTop } = $$props;
  let { tabletLeft } = $$props;
  let { borderRadius } = $$props;
  let fontSize = "2.4vh";
  const root = document.documentElement;
  let clientWidth = root.clientWidth;
  let clientHeight = root.clientHeight;
  let lbackgroundColor;
  function positionParser(mobilePosition, tabletPosition) {
    if (clientWidth > 1050 && tabletPosition != "auto") {
      return tabletPosition;
    } else {
      return mobilePosition;
    }
  }
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.lightColor === void 0 && $$bindings.lightColor && lightColor !== void 0)
    $$bindings.lightColor(lightColor);
  if ($$props.borderColor === void 0 && $$bindings.borderColor && borderColor !== void 0)
    $$bindings.borderColor(borderColor);
  if ($$props.backgroundColor === void 0 && $$bindings.backgroundColor && backgroundColor !== void 0)
    $$bindings.backgroundColor(backgroundColor);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.top === void 0 && $$bindings.top && top !== void 0)
    $$bindings.top(top);
  if ($$props.left === void 0 && $$bindings.left && left !== void 0)
    $$bindings.left(left);
  if ($$props.horizontalFont === void 0 && $$bindings.horizontalFont && horizontalFont !== void 0)
    $$bindings.horizontalFont(horizontalFont);
  if ($$props.verticalFont === void 0 && $$bindings.verticalFont && verticalFont !== void 0)
    $$bindings.verticalFont(verticalFont);
  if ($$props.desktopFont === void 0 && $$bindings.desktopFont && desktopFont !== void 0)
    $$bindings.desktopFont(desktopFont);
  if ($$props.backdropFilter === void 0 && $$bindings.backdropFilter && backdropFilter !== void 0)
    $$bindings.backdropFilter(backdropFilter);
  if ($$props.opacity === void 0 && $$bindings.opacity && opacity !== void 0)
    $$bindings.opacity(opacity);
  if ($$props.tabletTop === void 0 && $$bindings.tabletTop && tabletTop !== void 0)
    $$bindings.tabletTop(tabletTop);
  if ($$props.tabletLeft === void 0 && $$bindings.tabletLeft && tabletLeft !== void 0)
    $$bindings.tabletLeft(tabletLeft);
  if ($$props.borderRadius === void 0 && $$bindings.borderRadius && borderRadius !== void 0)
    $$bindings.borderRadius(borderRadius);
  $$result.css.add(css$8);
  lbackgroundColor = backgroundColor;
  return `
<div${add_attribute("id", id, 0)} class="${escape(null_to_empty(`button ${iu(className, "")}`), true) + " svelte-pt98vu"}" style="${"opacity: " + escape(iu(opacity, "1"), true) + "; font-size: " + escape(iu(fontSize, "2vh"), true) + "; left: " + escape(positionParser(iu(left, "auto"), iu(tabletLeft, "auto")), true) + "; top: " + escape(positionParser(iu(top, "auto"), iu(tabletTop, "auto")), true) + "; width: " + escape(iu(width, "auto"), true) + "; height: " + escape(iu(height, "auto"), true) + "; color: " + escape(iu(color, "#FFF"), true) + "; background-color: " + escape(iu(lbackgroundColor, "#0500FF00"), true) + "; border: solid 1px " + escape(iu(borderColor, "#0500FF"), true) + "; border-radius: " + escape(parseFloat(iu(borderRadius, "0px").substring(0, iu(borderRadius, "0px").length - 2)) * 100 / 360 / 100 * clientHeight + "px;", true) + "; backdrop-filter: " + escape(iu(backdropFilter, "blur(0px)"), true) + "; --webkit-backdrop-filter: " + escape(iu(backdropFilter, "blur(0px)"), true) + "; " + escape(iu(style, ""), true)}">${escape(label ? label : "")}
	${slots.default ? slots.default({}) : ``}
</div>`;
});
const RingRelayLogoMin_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: "rect.svelte-1gs0khx,path.svelte-1gs0khx{transition:opacity ease-in-out 0.5s, fill linear 0.2s}",
  map: null
};
const RingRelayLogoMin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "5vh" } = $$props;
  let { monochrome = false } = $$props;
  let { style = "" } = $$props;
  let { animated = false } = $$props;
  let opacities = [];
  let interval;
  onDestroy(() => {
    clearInterval(interval);
  });
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.monochrome === void 0 && $$bindings.monochrome && monochrome !== void 0)
    $$bindings.monochrome(monochrome);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.animated === void 0 && $$bindings.animated && animated !== void 0)
    $$bindings.animated(animated);
  $$result.css.add(css$7);
  return `<svg class="deco"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} style="${"position: absolute; " + escape(style, true)}" viewBox="0 0 56 46" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.724107" width="32.0353" height="31.9222" transform="matrix(0.724107 -0.689687 0.724107 0.689687 0.199776 23.2834)"${add_attribute("fill", monochrome ? "#444" : "#6100DC", 0)} fill-opacity="0.2"${add_attribute("stroke", monochrome ? "#444" : "#6100DC", 0)} stroke-width="0.5"${add_attribute("opacity", opacities[0], 0)} class="svelte-1gs0khx"></rect><rect x="0.724107" width="32.0353" height="31.9222" transform="matrix(0.724107 -0.689687 0.724107 0.689687 8.43952 23.7934)"${add_attribute("fill", monochrome ? "#444" : "#6100DC", 0)} fill-opacity="0.2"${add_attribute("stroke", monochrome ? "#444" : "#6100DC", 0)} stroke-width="0.5"${add_attribute("opacity", opacities[1], 0)} class="svelte-1gs0khx"></rect><path d="M36.4576 22.7316C36.4576 27.0035 32.8145 30.5077 28.2685 30.5077C23.7226 30.5077 20.0794 27.0035 20.0794 22.7316C20.0794 18.4597 23.7226 14.9555 28.2685 14.9555C32.8145 14.9555 36.4576 18.4597 36.4576 22.7316Z"${add_attribute("stroke", monochrome ? "#444" : "#6100DC", 0)} stroke-width="0.5" class="svelte-1gs0khx"></path></svg>`;
});
const ProjectEagleLogo_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: "rect.svelte-7pqnpm,path.svelte-7pqnpm{transition:all linear 0.2s}",
  map: null
};
const ProjectEagleLogo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "5vh" } = $$props;
  let { monochrome = false } = $$props;
  let { style = "" } = $$props;
  let { animated = false } = $$props;
  let opacities = [];
  let interval;
  onDestroy(() => {
    clearInterval(interval);
  });
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.monochrome === void 0 && $$bindings.monochrome && monochrome !== void 0)
    $$bindings.monochrome(monochrome);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.animated === void 0 && $$bindings.animated && animated !== void 0)
    $$bindings.animated(animated);
  $$result.css.add(css$6);
  return `<svg${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} class="deco" style="${"position: absolute; " + escape(style, true)}" viewBox="0 0 300 318" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="103.289" height="103.289" transform="matrix(0.726571 -0.687092 0.726571 0.687092 75 151.261)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)} fill-opacity="0.01"${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect x="43.8677" width="56.6038" height="1.3382"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[1], 0)} class="svelte-7pqnpm"></rect><rect width="55.0874" height="1.37719" transform="matrix(0.726571 -0.687092 0.726571 0.687092 0 39.1887)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)} class="svelte-7pqnpm"></rect><rect width="55.0874" height="1.37719" transform="matrix(0.726571 0.687092 -0.726571 0.687092 104.301 1.3383)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)} class="svelte-7pqnpm"></rect><rect y="97.6887" width="53.5281" height="1.41509" transform="rotate(-90 0 97.6887)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)} class="svelte-7pqnpm"></rect><rect width="55.0874" height="1.37719" transform="matrix(-0.726571 -0.687092 0.726571 -0.687092 40.0259 139.162)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[5], 0)} class="svelte-7pqnpm"></rect><rect x="43.8677" width="56.6038" height="1.3382"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[6], 0)} class="svelte-7pqnpm"></rect><rect width="55.0874" height="1.37719" transform="matrix(0.726571 -0.687092 0.726571 0.687092 0 39.1887)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[7], 0)} class="svelte-7pqnpm"></rect><rect width="56.99" height="1.37719" transform="matrix(0.726571 0.687092 -0.726571 0.687092 104.301 1.3383)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[8], 0)} class="svelte-7pqnpm"></rect><rect x="298.585" y="99.027" width="53.5281" height="1.41509" transform="rotate(-90 298.585 99.027)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[9], 0)} class="svelte-7pqnpm"></rect><rect x="199.528" y="1.3383" width="56.6038" height="1.3382"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[10], 0)} class="svelte-7pqnpm"></rect><rect width="55.0874" height="1.37719" transform="matrix(0.726571 -0.687092 0.726571 0.687092 155.661 40.5265)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[11], 0)} class="svelte-7pqnpm"></rect><rect width="55.0874" height="1.37719" transform="matrix(0.726571 0.687092 -0.726571 0.687092 259.964 2.67641)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[12], 0)} class="svelte-7pqnpm"></rect><rect width="55.0874" height="1.37719" transform="matrix(-0.726571 0.687092 -0.726571 -0.687092 299.987 102.65)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[13], 0)} class="svelte-7pqnpm"></rect><rect width="52.333" height="1.37719" transform="matrix(-0.726571 -0.687092 0.726571 -0.687092 193.855 141.446)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[14], 0)} class="svelte-7pqnpm"></rect><rect width="52.333" height="1.37719" transform="matrix(-0.726571 0.687092 -0.726571 -0.687092 143.741 105.326)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[15], 0)} class="svelte-7pqnpm"></rect><rect y="255.597" width="53.5281" height="1.41509" transform="rotate(-90 0 255.597)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[16], 0)} class="svelte-7pqnpm"></rect><rect x="100.459" y="298.408" width="56.6038" height="1.3382" transform="rotate(-180 100.459 298.408)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[17], 0)} class="svelte-7pqnpm"></rect><rect width="55.0874" height="1.37719" transform="matrix(-0.726571 0.687092 -0.726571 -0.687092 144.327 259.219)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[18], 0)} class="svelte-7pqnpm"></rect><rect width="55.0874" height="1.37719" transform="matrix(-0.726571 -0.687092 0.726571 -0.687092 40.0259 297.07)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[19], 0)} class="svelte-7pqnpm"></rect><rect width="55.0874" height="1.37719" transform="matrix(0.726571 -0.687092 0.726571 0.687092 0 197.097)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[20], 0)} class="svelte-7pqnpm"></rect><rect width="52.333" height="1.37719" transform="matrix(0.726571 0.687092 -0.726571 0.687092 105.718 160.585)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[21], 0)} class="svelte-7pqnpm"></rect><rect x="298.585" y="256.935" width="53.5281" height="1.41509" transform="rotate(-90 298.585 256.935)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[22], 0)} class="svelte-7pqnpm"></rect><path d="M198.114 161.923V160.585H215.095L213.68 161.923H198.114Z"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[23], 0)} class="svelte-7pqnpm"></path><path d="M198.114 140.511V141.85H215.095L213.68 140.511H198.114Z"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[24], 0)} class="svelte-7pqnpm"></path><path d="M101.886 160.584V159.246H83.49L85.023 160.584H101.886Z"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[25], 0)} class="svelte-7pqnpm"></path><path d="M101.886 140.511V141.85H84.9051L86.3202 140.511H101.886Z"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[26], 0)} class="svelte-7pqnpm"></path><path d="M157.076 101.703H155.661V85.645L157.076 86.9832V101.703Z"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></path><path d="M142.926 101.703H144.341V85.645L142.926 86.9832V101.703Z"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></path><path d="M157.076 200.731H155.661V216.789L157.076 215.451V200.731Z"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></path><path d="M142.926 200.731H144.341V216.789L142.926 215.451V200.731Z"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></path><rect width="52.333" height="1.37719" transform="matrix(0.726571 -0.687092 0.726571 0.687092 155.661 196.542)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect width="55.0874" height="1.37719" transform="matrix(0.726571 0.687092 -0.726571 0.687092 259.964 160.585)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect x="256.12" y="299.746" width="56.6038" height="1.3382" transform="rotate(-180 256.12 299.746)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect width="55.0874" height="1.37719" transform="matrix(-0.726571 0.687092 -0.726571 -0.687092 299.987 260.558)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect width="56.8487" height="1.37719" transform="matrix(-0.726571 -0.687092 0.726571 -0.687092 195.687 298.408)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect x="0.726571" width="38.9384" height="38.9384" transform="matrix(0.726571 -0.687092 0.726571 0.687092 121.19 151.055)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)} fill-opacity="0.5"${add_attribute("stroke", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect width="103.289" height="103.289" transform="matrix(0.726571 -0.687092 0.726571 0.687092 75 168.658)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)} fill-opacity="0.01"${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect x="43.8677" y="17.3967" width="56.6038" height="1.3382"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect width="55.0874" height="1.37719" transform="matrix(0.726571 -0.687092 0.726571 0.687092 0 56.5851)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect width="55.0874" height="1.37719" transform="matrix(0.726571 0.687092 -0.726571 0.687092 104.301 18.7348)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect y="115.086" width="53.5281" height="1.41509" transform="rotate(-90 0 115.086)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect width="55.0874" height="1.37719" transform="matrix(-0.726571 -0.687092 0.726571 -0.687092 40.0259 156.558)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect x="43.8677" y="17.3967" width="56.6038" height="1.3382"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect width="55.0874" height="1.37719" transform="matrix(0.726571 -0.687092 0.726571 0.687092 0 56.5851)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect width="56.99" height="1.37719" transform="matrix(0.726571 0.687092 -0.726571 0.687092 104.301 18.7348)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect x="298.585" y="116.424" width="53.5281" height="1.41509" transform="rotate(-90 298.585 116.424)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect x="199.528" y="18.7348" width="56.6038" height="1.3382"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect width="55.0874" height="1.37719" transform="matrix(0.726571 -0.687092 0.726571 0.687092 155.661 57.9234)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect width="55.0874" height="1.37719" transform="matrix(0.726571 0.687092 -0.726571 0.687092 259.964 20.0731)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect width="55.0874" height="1.37719" transform="matrix(-0.726571 0.687092 -0.726571 -0.687092 299.987 120.046)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect width="52.333" height="1.37719" transform="matrix(-0.726571 -0.687092 0.726571 -0.687092 193.855 158.843)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect width="52.333" height="1.37719" transform="matrix(-0.726571 0.687092 -0.726571 -0.687092 143.741 122.723)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect y="272.993" width="53.5281" height="1.41509" transform="rotate(-90 0 272.993)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect x="100.459" y="315.805" width="56.6038" height="1.3382" transform="rotate(-180 100.459 315.805)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect width="55.0874" height="1.37719" transform="matrix(-0.726571 0.687092 -0.726571 -0.687092 144.327 276.616)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect width="55.0874" height="1.37719" transform="matrix(-0.726571 -0.687092 0.726571 -0.687092 40.0259 314.466)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect width="55.0874" height="1.37719" transform="matrix(0.726571 -0.687092 0.726571 0.687092 0 214.493)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect width="52.333" height="1.37719" transform="matrix(0.726571 0.687092 -0.726571 0.687092 105.718 177.981)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect x="298.585" y="274.332" width="53.5281" height="1.41509" transform="rotate(-90 298.585 274.332)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><path d="M198.114 179.319V177.981H215.095L213.68 179.319H198.114Z"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></path><path d="M198.114 157.908V159.246H215.095L213.68 157.908H198.114Z"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></path><path d="M101.886 177.981V176.643H83.49L85.023 177.981H101.886Z"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></path><path d="M101.886 157.908V159.246H84.9051L86.3202 157.908H101.886Z"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></path><path d="M157.076 119.1H155.661V103.042L157.076 104.38V119.1Z"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></path><path d="M142.926 119.1H144.341V103.042L142.926 104.38V119.1Z"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></path><path d="M157.076 218.127H155.661V234.186L157.076 232.847V218.127Z"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></path><path d="M142.926 218.127H144.341V234.186L142.926 232.847V218.127Z"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></path><rect width="52.333" height="1.37719" transform="matrix(0.726571 -0.687092 0.726571 0.687092 155.661 213.939)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect width="55.0874" height="1.37719" transform="matrix(0.726571 0.687092 -0.726571 0.687092 259.964 177.981)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect x="256.12" y="317.143" width="56.6038" height="1.3382" transform="rotate(-180 256.12 317.143)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect width="55.0874" height="1.37719" transform="matrix(-0.726571 0.687092 -0.726571 -0.687092 299.987 277.954)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect width="56.8487" height="1.37719" transform="matrix(-0.726571 -0.687092 0.726571 -0.687092 195.687 315.805)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect x="0.726571" width="38.9384" height="38.9384" transform="matrix(0.726571 -0.687092 0.726571 0.687092 121.19 168.452)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)} fill-opacity="0.5"${add_attribute("stroke", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect></svg>`;
});
const DroneBuzzLogo_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "path.svelte-1pyxg36{transition:opacity linear 0.4s, fill linear 0.2s}",
  map: null
};
const DroneBuzzLogo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "5vh" } = $$props;
  let { monochrome = false } = $$props;
  let { style = "" } = $$props;
  let { animated = false } = $$props;
  let opacities = [];
  let interval;
  onDestroy(() => {
    clearInterval(interval);
  });
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.monochrome === void 0 && $$bindings.monochrome && monochrome !== void 0)
    $$bindings.monochrome(monochrome);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.animated === void 0 && $$bindings.animated && animated !== void 0)
    $$bindings.animated(animated);
  $$result.css.add(css$5);
  return `<svg class="deco"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} style="${"position: absolute; " + escape(style, true)}" viewBox="0 0 86 84" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_8_1080)"><mask id="mask0_8_1080" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="84" height="84"><path d="M83.9228 0.338028H0.746582V83.5143H83.9228V0.338028Z" fill="white" class="svelte-1pyxg36"></path></mask><g mask="url(#mask0_8_1080)"><path d="M42.002 134.418C73.0554 134.418 98.2291 109.244 98.2291 78.191C98.2291 47.1376 73.0554 21.9639 42.002 21.9639C10.9486 21.9639 -14.2251 47.1376 -14.2251 78.191C-14.2251 109.244 10.9486 134.418 42.002 134.418Z"${add_attribute("stroke", monochrome ? "#444" : "#5200FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-1pyxg36"></path><path d="M42.6676 142.403C73.7209 142.403 98.8947 117.229 98.8947 86.1759C98.8947 55.1225 73.7209 29.9488 42.6676 29.9488C11.6142 29.9488 -13.5596 55.1225 -13.5596 86.1759C-13.5596 117.229 11.6142 142.403 42.6676 142.403Z"${add_attribute("stroke", monochrome ? "#444" : "#5200FF", 0)}${add_attribute("opacity", opacities[1], 0)} class="svelte-1pyxg36"></path><path d="M42.6676 149.723C73.7209 149.723 98.8947 124.549 98.8947 93.4954C98.8947 62.442 73.7209 37.2683 42.6676 37.2683C11.6142 37.2683 -13.5596 62.442 -13.5596 93.4954C-13.5596 124.549 11.6142 149.723 42.6676 149.723Z"${add_attribute("stroke", monochrome ? "#444" : "#5200FF", 0)}${add_attribute("opacity", opacities[2], 0)} class="svelte-1pyxg36"></path><path d="M42.6676 156.377C73.7209 156.377 98.8947 131.203 98.8947 100.15C98.8947 69.0961 73.7209 43.9224 42.6676 43.9224C11.6142 43.9224 -13.5596 69.0961 -13.5596 100.15C-13.5596 131.203 11.6142 156.377 42.6676 156.377Z"${add_attribute("stroke", monochrome ? "#444" : "#5200FF", 0)}${add_attribute("opacity", opacities[3], 0)} class="svelte-1pyxg36"></path><path d="M95.9005 108.467C126.954 108.467 152.128 83.2934 152.128 52.24C152.128 21.1866 126.954 -3.98714 95.9005 -3.98714C64.8471 -3.98714 39.6733 21.1866 39.6733 52.24C39.6733 83.2934 64.8471 108.467 95.9005 108.467Z"${add_attribute("stroke", monochrome ? "#444" : "#5200FF", 0)}${add_attribute("opacity", opacities[4], 0)} class="svelte-1pyxg36"></path><path d="M96.566 116.452C127.619 116.452 152.793 91.2783 152.793 60.2249C152.793 29.1715 127.619 3.99779 96.566 3.99779C65.5126 3.99779 40.3389 29.1715 40.3389 60.2249C40.3389 91.2783 65.5126 116.452 96.566 116.452Z"${add_attribute("stroke", monochrome ? "#444" : "#5200FF", 0)}${add_attribute("opacity", opacities[5], 0)} class="svelte-1pyxg36"></path><path d="M96.566 123.772C127.619 123.772 152.793 98.5978 152.793 67.5444C152.793 36.491 127.619 11.3173 96.566 11.3173C65.5126 11.3173 40.3389 36.491 40.3389 67.5444C40.3389 98.5978 65.5126 123.772 96.566 123.772Z"${add_attribute("stroke", monochrome ? "#444" : "#5200FF", 0)}${add_attribute("opacity", opacities[6], 0)} class="svelte-1pyxg36"></path><path d="M96.566 130.426C127.619 130.426 152.793 105.252 152.793 74.1985C152.793 43.1451 127.619 17.9714 96.566 17.9714C65.5126 17.9714 40.3389 43.1451 40.3389 74.1985C40.3389 105.252 65.5126 130.426 96.566 130.426Z"${add_attribute("stroke", monochrome ? "#444" : "#5200FF", 0)}${add_attribute("opacity", opacities[7], 0)} class="svelte-1pyxg36"></path><path d="M2.07771 155.046C33.1311 155.046 58.3048 129.872 58.3048 98.8187C58.3048 67.7653 33.1311 42.5916 2.07771 42.5916C-28.9757 42.5916 -54.1494 67.7653 -54.1494 98.8187C-54.1494 129.872 -28.9757 155.046 2.07771 155.046Z"${add_attribute("stroke", monochrome ? "#444" : "#5200FF", 0)}${add_attribute("opacity", opacities[8], 0)} class="svelte-1pyxg36"></path><path d="M2.74275 163.031C33.7961 163.031 58.9699 137.857 58.9699 106.804C58.9699 75.7502 33.7961 50.5765 2.74275 50.5765C-28.3106 50.5765 -53.4844 75.7502 -53.4844 106.804C-53.4844 137.857 -28.3106 163.031 2.74275 163.031Z"${add_attribute("stroke", monochrome ? "#444" : "#5200FF", 0)}${add_attribute("opacity", opacities[9], 0)} class="svelte-1pyxg36"></path><path d="M2.74275 170.35C33.7961 170.35 58.9699 145.176 58.9699 114.123C58.9699 83.0697 33.7961 57.896 2.74275 57.896C-28.3106 57.896 -53.4844 83.0697 -53.4844 114.123C-53.4844 145.176 -28.3106 170.35 2.74275 170.35Z"${add_attribute("stroke", monochrome ? "#444" : "#5200FF", 0)}${add_attribute("opacity", opacities[10], 0)} class="svelte-1pyxg36"></path><path d="M2.74275 177.004C33.7961 177.004 58.9699 151.831 58.9699 120.777C58.9699 89.7238 33.7961 64.5501 2.74275 64.5501C-28.3106 64.5501 -53.4844 89.7238 -53.4844 120.777C-53.4844 151.831 -28.3106 177.004 2.74275 177.004Z"${add_attribute("stroke", monochrome ? "#444" : "#5200FF", 0)}${add_attribute("opacity", opacities[11], 0)} class="svelte-1pyxg36"></path><path d="M-29.1967 22.6293C1.85667 22.6293 27.0304 -2.54449 27.0304 -33.5979C27.0304 -64.6513 1.85667 -89.825 -29.1967 -89.825C-60.2501 -89.825 -85.4238 -64.6513 -85.4238 -33.5979C-85.4238 -2.54449 -60.2501 22.6293 -29.1967 22.6293Z"${add_attribute("stroke", monochrome ? "#444" : "#5200FF", 0)}${add_attribute("opacity", opacities[12], 0)} class="svelte-1pyxg36"></path><path d="M-28.5312 30.6142C2.5222 30.6142 27.6959 5.44043 27.6959 -25.613C27.6959 -56.6663 2.5222 -81.8401 -28.5312 -81.8401C-59.5846 -81.8401 -84.7583 -56.6663 -84.7583 -25.613C-84.7583 5.44043 -59.5846 30.6142 -28.5312 30.6142Z"${add_attribute("stroke", monochrome ? "#444" : "#5200FF", 0)}${add_attribute("opacity", opacities[13], 0)} class="svelte-1pyxg36"></path><path d="M-28.5312 37.9337C2.5222 37.9337 27.6959 12.7599 27.6959 -18.2934C27.6959 -49.3468 2.5222 -74.5206 -28.5312 -74.5206C-59.5846 -74.5206 -84.7583 -49.3468 -84.7583 -18.2934C-84.7583 12.7599 -59.5846 37.9337 -28.5312 37.9337Z"${add_attribute("stroke", monochrome ? "#444" : "#5200FF", 0)}${add_attribute("opacity", opacities[14], 0)} class="svelte-1pyxg36"></path><path d="M-28.5312 44.5878C2.5222 44.5878 27.6959 19.414 27.6959 -11.6393C27.6959 -42.6927 2.5222 -67.8665 -28.5312 -67.8665C-59.5846 -67.8665 -84.7583 -42.6927 -84.7583 -11.6393C-84.7583 19.414 -59.5846 44.5878 -28.5312 44.5878Z"${add_attribute("stroke", monochrome ? "#444" : "#5200FF", 0)}${add_attribute("opacity", opacities[15], 0)} class="svelte-1pyxg36"></path><path d="M58.9014 23.4588L73.9782 34.1789L58.5376 41.9545L58.9014 23.4588Z"${add_attribute("fill", monochrome ? "#444" : "#4200FF", 0)} fill-opacity="0.8" class="svelte-1pyxg36"></path><path d="M60.2096 26.0557L75.2861 36.7759L59.8457 44.5514L60.2096 26.0557Z"${add_attribute("fill", monochrome ? "#444" : "#4200FF", 0)} fill-opacity="0.8" class="svelte-1pyxg36"></path><path d="M28.2926 15.4738L43.3692 26.194L27.9287 33.9696L28.2926 15.4738Z"${add_attribute("fill", monochrome ? "#444" : "#5200FF", 0)} fill-opacity="0.8" class="svelte-1pyxg36"></path><path d="M29.6007 18.0708L44.6773 28.7909L29.2368 36.5665L29.6007 18.0708Z"${add_attribute("fill", monochrome ? "#444" : "#5200FF", 0)} fill-opacity="0.8" class="svelte-1pyxg36"></path><path d="M18.5402 46.0827L33.6168 56.8028L18.1763 64.5784L18.5402 46.0827Z"${add_attribute("fill", monochrome ? "#444" : "#4200FF", 0)} fill-opacity="0.8" class="svelte-1pyxg36"></path><path d="M19.5617 48.6797L34.6383 59.3998L19.1978 67.1751L19.5617 48.6797Z"${add_attribute("fill", monochrome ? "#444" : "#4200FF", 0)} fill-opacity="0.8" class="svelte-1pyxg36"></path></g></g><defs><clipPath id="clip0_8_1080"><rect width="84.507" height="83.1762" fill="white" transform="translate(0.746582 0.338028)"></rect></clipPath></defs></svg>`;
});
const ProjectsNav_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".logoContainer.svelte-1iy50r6{position:absolute;width:100%;height:30.115131579%}.projectsNavContainer.svelte-1iy50r6{position:absolute;top:0.555555556%;left:94.479166667%;width:5.208333333%;height:28.148148148%;z-index:100}@media only screen and (max-width: 1300px) and (min-height: 550px){.projectsNavContainer.svelte-1iy50r6{width:20%;left:80%}}",
  map: null
};
const ProjectsNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { selectedProjectID } = $$props;
  let ringRelayMonochromeOverride = false;
  let projectEagleMonochromeOverride = false;
  let droneBuzzMonochromeOverride = false;
  let projectNavLeft = "94.479166667%";
  if ($$props.selectedProjectID === void 0 && $$bindings.selectedProjectID && selectedProjectID !== void 0)
    $$bindings.selectedProjectID(selectedProjectID);
  $$result.css.add(css$4);
  return `
<div class="projectsNavContainer svelte-1iy50r6" id="projectsNav" style="${"height: " + escape(isMobile() ? "38.148148148%" : "28.148148148%", true) + ";top: " + escape(isMobile() ? "74%" : "0.555555556%", true) + "; left: " + escape(isMobile() ? "40%" : projectNavLeft, true) + "; transform: " + escape(isMobile() ? "rotate(-90deg)" : "none", true) + ";"}">
	<div class="logoContainer svelte-1iy50r6" style="border: solid 0px #6100FF;">${validate_component(RingRelayLogoMin, "RingRelayLogoMin").$$render(
    $$result,
    {
      size: "95%",
      monochrome: !(selectedProjectID == "RingRelay") && !ringRelayMonochromeOverride,
      style: "top: 0%; transform: " + (isMobile() ? "rotate(90deg)" : "none") + ";",
      animated: ringRelayMonochromeOverride
    },
    {},
    {}
  )}</div>
	<div class="logoContainer svelte-1iy50r6" style="border: solid 0px #444; top: 34.868421053%;">${validate_component(ProjectEagleLogo, "ProjectEagleLogo").$$render(
    $$result,
    {
      size: "95%",
      monochrome: !(selectedProjectID == "ProjectEagle") && !projectEagleMonochromeOverride,
      style: "top: 0%; transform: " + (isMobile() ? "rotate(90deg)" : "none") + ";",
      animated: projectEagleMonochromeOverride
    },
    {},
    {}
  )}</div>
	<div class="logoContainer svelte-1iy50r6" style="border: solid 0px #444; top: 69.736842105%;">${validate_component(DroneBuzzLogo, "DroneBuzzLogo").$$render(
    $$result,
    {
      size: "100%",
      monochrome: !(selectedProjectID == "DroneBuzz") && !droneBuzzMonochromeOverride,
      style: "top: 0%; transform: " + (isMobile() ? "rotate(90deg)" : "none") + ";",
      animated: droneBuzzMonochromeOverride
    },
    {},
    {}
  )}</div>
</div>`;
});
const LinkedLogo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color } = $$props;
  let { style = "" } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  return `<svg style="${"position: absolute; " + escape(style, true)}" xmlns="http://www.w3.org/2000/svg" width="2.7vh" height="2.7vh" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"${add_attribute("fill", color ? color : "#FFF", 0)}></path></svg>`;
});
const GithubLogo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color } = $$props;
  let { style = "" } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  return `<svg class="deco" style="${"position: absolute; " + escape(style, true)}" xmlns="http://www.w3.org/2000/svg" width="2.7vh" height="2.7vh" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"${add_attribute("fill", color, 0)}></path></svg>`;
});
const ContactDock_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".contactDockBorderTop.svelte-1skztn4{position:absolute;left:0%;top:0%;width:100%;height:1.960784314%}.contactDockContainer.svelte-1skztn4{position:absolute;top:85.648148148%;left:50%;transform:translate(-50%);width:20.208333333%;height:9.444444444%;display:flex;align-items:center;justify-content:center;z-index:5}@media only screen and (max-width: 1300px) and (min-height: 550px){.contactDockContainer.svelte-1skztn4{width:40%}}",
  map: null
};
const ContactDock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { show = true } = $$props;
  let { color } = $$props;
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  $$result.css.add(css$3);
  return `${show ? `<div class="contactDockContainer svelte-1skztn4" style="${"display: " + escape("flex", true) + ";"}"><div class="contactDockBorderTop svelte-1skztn4" style="${"background: radial-gradient(50% 50% at 50% 50%, " + escape(color, true) + " 0%, rgba(97, 0, 255, 0) 100%);"}"></div>
		${validate_component(Label, "Label").$$render(
    $$result,
    {
      desktopFont: "18px",
      color,
      text: "Find me on",
      top: "16.666666667%"
    },
    {},
    {}
  )}
		<a href="https://github.com/undefined1raven" target="_blank">${validate_component(Button, "Button").$$render(
    $$result,
    {
      label: "Github",
      width: "calc(47.680412371% - 10%)",
      height: "44.117647059%",
      left: "0%",
      top: "55.882352941%",
      color,
      style: "justify-content: end; padding-right: 10%;",
      borderColor: color,
      borderRadius: "3px"
    },
    {},
    {
      default: () => {
        return `<div>${validate_component(GithubLogo, "GithubLogo").$$render(
          $$result,
          {
            color,
            style: "left: 15%; top: 20%;"
          },
          {},
          {}
        )}</div>`;
      }
    }
  )}</a>
		<a href="https://linkedin.com/in/dominic-zlat-614253233" target="_blank">${validate_component(Button, "Button").$$render(
    $$result,
    {
      label: "LinkedIn",
      width: "calc(47.680412371% - 10%)",
      height: "44.117647059%",
      left: "52.319587629%",
      top: "55.882352941%",
      color,
      borderColor: color,
      style: "justify-content: end; padding-right: 10%;",
      borderRadius: "3px"
    },
    {},
    {
      default: () => {
        return `${validate_component(LinkedLogo, "LinkedLogo").$$render(
          $$result,
          {
            color,
            style: "left: 12%;"
          },
          {},
          {}
        )}`;
      }
    }
  )}</a></div>` : ``}`;
});
function RingRelayCryptoSnippet() {
  return `function ab2str(buf) {
    return String.fromCharCode.apply(null, new Uint8Array(buf));
}

function btoaTobuf(base64) {
    let binStr = window.atob(base64)//base64 to binary string
    let bytes = new Uint8Array(binStr.length);
    for (let ix = 0; ix < binStr.length; ix++) {
        bytes[ix] = binStr.charCodeAt(ix);
    }
    return bytes.buffer;
}

function str2ab(str) {
    const buf = new ArrayBuffer(str.length);
    const bufView = new Uint8Array(buf);
    for (let i = 0, strLen = str.length; i < strLen; i++) {
        bufView[i] = str.charCodeAt(i);
    }
    return buf;
}

export const getKeyPair = () => {
    const keyPairPromise = window.crypto.subtle.generateKey(
        {
            name: "RSA-OAEP",
            modulusLength: 4096,
            publicExponent: new Uint8Array([1, 0, 1]),
            hash: "SHA-256",
        },
        true,
        ["encrypt", "decrypt"]
    )
    return keyPairPromise;
}

export const keyToPem = async (key) => {
    const exported = await window.crypto.subtle.exportKey('pkcs8', key);
    const exps = ab2str(exported);
    const easb64 = window.btoa(exps);
    return "-----BEGIN PRIVATE KEY-----
$.{easb64}
-----END PRIVATE KEY-----";
}

export const getSigningKeyPair = async () => {
    const keyPairPromise = await window.crypto.subtle.generateKey(
        {
            name: "ECDSA",
            namedCurve: "P-521",
        },
        true,
        ["sign", "verify"]
    );
    return keyPairPromise;
}

export const pemToKey = ((pem, algo) => {
    try {
        // fetch the part of the PEM string between header and footer
        const pemHeader = "-----BEGIN PRIVATE KEY-----";
        const pemFooter = "-----END PRIVATE KEY-----";
        const pemContents = pem.substring(
            pemHeader.length,
            pem.length - pemFooter.length
        );
        // base64 decode the string to get the binary data
        const binaryDerString = window.atob(pemContents);
        // convert from a binary string to an ArrayBuffer
        const binaryDer = str2ab(binaryDerString);

        var importKeyArgs = 0;
        if (algo == undefined || algo == 'RSA') {
            importKeyArgs = { algo: { name: 'RSA-OAEP', hash: 'SHA-256' }, ops: ['decrypt'] };
        } else if (algo == 'ECDSA') {
            importKeyArgs = { algo: { name: 'ECDSA', namedCurve: 'P-521' }, ops: ['sign'] };
        }
        if (importKeyArgs != 0) {
            return window.crypto.subtle.importKey(
                "pkcs8",
                binaryDer,
                importKeyArgs.algo,
                true,
                importKeyArgs.ops
            );
        } else {
            return 'Valid algo arg not provided (RSA/ECDSA)'
        }
    } catch (e) { return e }
})

export const sign = async (privateKey, encryptedMessage) => {
    const signature = await window.crypto.subtle.sign(
        {
            name: "ECDSA",
            hash: { name: "SHA-512" },
        },
        privateKey,
        new TextEncoder().encode(encryptedMessage)
    )

    return { base64: window.btoa(ab2str(signature)), buffer: signature };

}

export const JSONtoKey = ((jwk, algo) => {
    var importKeyArgs = 0;
    if (algo == undefined || algo == 'RSA') {
        importKeyArgs = { algo: { name: 'RSA-OAEP', hash: 'SHA-256' }, ops: ['encrypt'] };
    } else if (algo == 'ECDSA') {
        importKeyArgs = { algo: { name: 'ECDSA', namedCurve: 'P-521' }, ops: ['verify'] };
    }
    if (importKeyArgs != 0) {

        return window.crypto.subtle.importKey(
            "jwk",
            jwk,
            importKeyArgs.algo,
            true,
            importKeyArgs.ops
        );
    }
})

export const verify = async (publicSigningKey, encryptedMessage, signature) => {
    let sigCheck = await window.crypto.subtle.verify({ name: 'ECDSA', hash: 'SHA-512' }, publicSigningKey, btoaTobuf(signature), str2ab(encryptedMessage))
    return sigCheck;
}

export const encryptMessage = async (key, plaintext) => {
    let encoded = new TextEncoder().encode(plaintext)
    let ciphertext = await window.crypto.subtle.encrypt(
        {
            name: "RSA-OAEP"
        },
        key,
        encoded
    );

    return { buffer: ciphertext, base64: window.btoa(ab2str(ciphertext)) };
}

export const decryptMessage = async (key, ciphertext, cipherEncoding, returnBuffer) => {
    try {
        let cipherActual;
        if (cipherEncoding == 'base64') {
            cipherActual = btoaTobuf(ciphertext);
        }
        if (cipherEncoding == 'buffer') {
            cipherActual = ciphertext;
        }
        let decrypted = await window.crypto.subtle.decrypt(
            {
                name: "RSA-OAEP"
            },
            key,
            cipherActual
        );
        if (returnBuffer) {
            return decrypted;
        } else {
            return new TextDecoder().decode(decrypted);
        }

    } catch (e) { console.log(e) }
}

function getKeyMaterial(password) {
    const enc = new TextEncoder();
    return window.crypto.subtle.importKey(
        "raw",
        enc.encode(password),
        "PBKDF2",
        false,
        ["deriveBits", "deriveKey"]
    );
}

function getKey(keyMaterial, salt) {
    return window.crypto.subtle.deriveKey(
        {
            "name": "PBKDF2",
            salt: salt,
            "iterations": 100000,
            "hash": "SHA-256"
        },
        keyMaterial,
        { "name": "AES-GCM", "length": 256 },
        true,
        ["encrypt", "decrypt"]
    );
}

export const symmetricEncrypt = async (salt, iv, plain, password) => {
    let keyMaterial = await getKeyMaterial(password);
    let key = await getKey(keyMaterial, salt);
    let encoded = new TextEncoder().encode(plain);

    let ciphertext = await window.crypto.subtle.encrypt(
        {
            name: "AES-GCM",
            iv: iv
        },
        key,
        encoded
    );

    return { buffer: ciphertext, base64: window.btoa(ab2str(ciphertext)) };
}

export const symmetricDecrypt = async (password, salt, iv, ciphertext) => {

    let keyMaterial = await getKeyMaterial(password);
    let key = await getKey(keyMaterial, salt);

    try {
        let decrypted = await window.crypto.subtle.decrypt(
            {
                name: "AES-GCM",
                iv: iv
            },
            key,
            ciphertext
        );

        return new TextDecoder().decode(decrypted);
    } catch (e) {
        return 'error';
    }
}`;
}
function RingRelayChatSnippet() {
  return ` function imageOpsOnMessageHandler(e) {
        if (e.data.eid == 'onDecrypted') {
            if (e.data.status == 'Success') {
                setDecryptedImageData((prev) => { return [...prev, { ...e.data.msg }] });
            }
        }
        if (e.data.eid == 'onEncrypted') {
            if (e.data.status == 'Success') {
                setImageMessagePayload(e.data.payload);
            }
        }
    }

    const startImageDecrypt = (rawMsg, encryptedOwnImagaDataChunks, encryptedRemoteImagaDataChunks, pubSigningKey, privateKey, ownPUBSK) => {
        let imageDecryptorWorker = new Worker('./imageOps.js');
        setImageDecryptors(prev => [...prev, { MID: rawMsg.MID, worker: imageDecryptorWorker }])

        imageDecryptorWorker.postMessage({
            eid: 'onDecryptStart',
            MID: rawMsg.MID,
            rawMsg: rawMsg,
            encryptedOwnImagaDataChunks: encryptedOwnImagaDataChunks,
            encryptedRemoteImagaDataChunks: encryptedRemoteImagaDataChunks,
            pubSigningKey: pubSigningKey,
            privateKey: privateKey,
            ownPUBSK: ownPUBSK,
        });

        imageDecryptorWorker.onmessage = (e) => {
            imageOpsOnMessageHandler(e)
        }
    }

    const atomicDecrypt = async (rawMsg, ownPUBSK, privateKey, pubSigningKey, rawMsgArr) => {
        if (rawMsg.typeOverride == 'none' || rawMsg.typeOverride == undefined) {
            if (rawMsg.type == 'tx') {
                return verify(ownPUBSK, rawMsg.remoteContent, rawMsg.signature).then(async (ownSigStatus) => {
                    return await decryptMessage(privateKey, rawMsg.ownContent, 'base64').then(plain => {
                        try {
                            let messageContentsObj = JSON.parse(plain);
                            if (messageContentsObj.content.length > 0 && messageContentsObj.contentType == 'text' || messageContentsObj.contentType == 'color' || messageContentsObj.contentType == 'location') {
                                return { ...rawMsg, content: messageContentsObj.content, contentType: messageContentsObj.contentType, signed: (ownSigStatus) ? 'self' : 'no_self' }
                            } else {
                                return { ...rawMsg, content: plain, signed: (ownSigStatus) ? 'self' : 'no_self' }
                            }
                        } catch (e) {
                            return { ...rawMsg, content: plain, signed: (ownSigStatus) ? 'self' : 'no_self' }
                        }
                    })
                });
            } else {
                return verify(pubSigningKey, rawMsg.remoteContent, rawMsg.signature).then(async (sigStatus) => {
                    return await decryptMessage(privateKey, rawMsg.remoteContent, 'base64').then(plain => {
                        try {
                            let messageContentsObj = JSON.parse(plain);
                            if (messageContentsObj.content.length > 0 && messageContentsObj.contentType == 'text' || messageContentsObj.contentType == 'color' || messageContentsObj.contentType == 'location') {
                                return { ...rawMsg, content: messageContentsObj.content, contentType: messageContentsObj.contentType, signed: sigStatus }
                            } else {
                                return { ...rawMsg, content: plain, signed: sigStatus }
                            }
                        } catch (e) {
                            return { ...rawMsg, content: plain, signed: sigStatus }
                        }
                    })
                })
            }
        } else if (rawMsg.typeOverride.split('.')[0] == 'image') {
            if (rawMsg.typeOverride.split('.')[1] == 0) {

                axios.post('|{DomainGetter('devx')} api / dbop ? getImageData', { AT: localStorage.getItem('AT'), CIP: localStorage.getItem('CIP'), MID: rawMsg.MID }).then(res => {
                    if (res.data.imageChunks != undefined && res.data.error == undefined) {
                        let encryptedImageChunks = [];

                        encryptedImageChunks.push({ ...rawMsg });


                        res.data.imageChunks.forEach(imageChunk => {
                            encryptedImageChunks.push({ ...imageChunk });
                        })

                        let encryptedOwnImagaDataChunks = '';
                        let encryptedRemoteImagaDataChunks = '';

                        encryptedImageChunks.sort((a, b) => { return parseInt(a.tx) - parseInt(b.tx) })

                        encryptedImageChunks.forEach(chunk => {
                            encryptedOwnImagaDataChunks += chunk.ownContent;
                            encryptedRemoteImagaDataChunks += chunk.remoteContent;
                        });

                        startImageDecrypt(rawMsg, encryptedOwnImagaDataChunks, encryptedRemoteImagaDataChunks, pubSigningKey, privateKey, ownPUBSK);
                    }
                }).catch(e => {

                })

                return { ...rawMsg, content: '[Decrypting Image]', contentType: 'image', signed: (false) ? 'self' : 'no_self' }
            } else {
                return { ...rawMsg, content: '', contentType: 'image', signed: (false) ? 'self' : 'no_self', hide: true }
            }
        }
    }

    const initialFetch = (rawMsgArr) => {
        if (rawMsgArr.length > 0) {
            let lastTXMID = ''
            for (let ix = 0; ix < rawMsgArr.length; ix++) {
                if (rawMsgArr[ix].type == 'tx') {
                    lastTXMID = rawMsgArr[ix].MID;
                }
            }
            try {
                if (localStorage.getItem('PUBSK - |{props.chatObj.remoteUID} ') != undefined) {
                    pemToKey(localStorage.getItem(privateKeyID)).then(privateKey => {
                        JSONtoKey(JSON.parse(localStorage.getItem('OWN-PUBSK')), 'ECDSA').then(ownPUBSK => {
                            window.crypto.subtle.importKey('jwk', publicSigningKeyJWK, { name: 'ECDSA', namedCurve: 'P-521' }, true, ['verify']).then(pubSigningKey => {
                                let promiseArray = [];
                                for (let ix = 0; ix < rawMsgArr.length; ix++) {
                                    promiseArray.push(atomicDecrypt(rawMsgArr[ix], ownPUBSK, privateKey, pubSigningKey, rawMsgArr));
                                }
                                Promise.all(promiseArray).then(msgArr => {
                                    setMsgArray({ ini: true, array: [...msgArr] });
                                    filterDeletedMessages('91');
                                    setChatLoadingLabel({ opacity: 0, label: '[Done]' });
                                    scrollToBottom();
                                })
                            }).catch(e => {
                                setMsgArray({ ini: true, array: rawMsgArr });
                            })
                        })
                    })
                }
            } catch (e) { }
        } else {
            setChatLoadingLabel({ opacity: 1, label: '[No Messages]' })
        }
    }

    const bx = (bufstr) => {
        let buf = new buffer.Buffer(bufstr);
        return (buf)
    }

    const getMessagesAndUpdateChat = () => {
        setChatLoadingLabel({ opacity: 1, label: '[Fetching Conversation]' });
        axios.post('|{DomainGetter('devx')} api / dbop ? getMessages', { AT: localStorage.getItem('AT'), CIP: localStorage.getItem('CIP'), targetUID: props.chatObj.remoteUID, count: msgCount.count }).then(res => {
            if (res.data['error'] == undefined) {
                setChatLoadingLabel({ opacity: 1, label: '[Decrypting Conversation]' });
                let rawMsgArr = res.data.messages;

                // inflate(bx(rawMsgArr), (jsx) => {
                // })
                rawMsgArr.sort((a, b) => { return parseInt(a.tx) - parseInt(b.tx) })
                setMSUID(res.data.MSUID);
                setPKSH(res.data.PKSH);
                setSPKSH(res.data.SPKSH);
                setConversationStartUnix(res.data.lastTX);
                initialFetch(rawMsgArr);
                let lastRXMID = ''
                for (let ix = 0; ix < rawMsgArr.length; ix++) {
                    if (rawMsgArr[ix].type == 'rx') {
                        lastRXMID = rawMsgArr[ix].MID;
                    }
                }
                if (lastRXMID != '') {
                    axios.post('|{DomainGetter('devx')} api / dbop ? setLastSeenMessage', { AT: localStorage.getItem('AT'), CIP: localStorage.getItem('CIP'), MID: lastRXMID, MSUID: res.data.MSUID });
                }
            }

        });
    }


    useEffect(() => {
        setFetchingOlderMessages(true);
        scrollToTop();
        axios.post('|{DomainGetter('devx')} api / dbop ? getMessages', { AT: localStorage.getItem('AT'), CIP: localStorage.getItem('CIP'), MSUID: MSUID, count: 30, offset: msgCount.count, targetUID: props.chatObj.remoteUID }).then(async (resx) => {
            if (resx.data.error == undefined) {
                let rawMsgPrependArr = resx.data.messages;
                rawMsgPrependArr.sort((a, b) => { return parseInt(a.tx) - parseInt(b.tx) });
                if (resx.data.start) {
                    setScrolledToStart(resx.data.start);
                }
                if (localStorage.getItem('PUBSK - |{props.chatObj.remoteUID} ') != undefined) {
                    pemToKey(localStorage.getItem(privateKeyID)).then((privateKey) => {
                        JSONtoKey(JSON.parse(localStorage.getItem('OWN-PUBSK')), 'ECDSA').then((ownPUBSK) => {
                            window.crypto.subtle.importKey('jwk', publicSigningKeyJWK, { name: 'ECDSA', namedCurve: 'P-521' }, true, ['verify']).then(async (pubSigningKey) => {
                                let promiseArray = [];
                                for (let ix = 0; ix < rawMsgPrependArr.length; ix++) {
                                    promiseArray.push(atomicDecrypt(rawMsgPrependArr[ix], ownPUBSK, privateKey, pubSigningKey));
                                }
                                Promise.all(promiseArray).then(oldMsgArr => {
                                    let firstMIDBeforeUpdate = msgArray.array[0]?.MID;
                                    setMsgArray({ ini: true, array: [...oldMsgArr, ...msgArray.array] })
                                    setTimeout(() => {
                                        if (document.getElementById(firstMIDBeforeUpdate)) {
                                            document.getElementById(firstMIDBeforeUpdate).scrollIntoView(true);
                                            let latestTop = document.getElementById('msgsList').scrollTop;
                                            document.getElementById('msgsList').scrollTo({ top: latestTop - 40 });
                                        }
                                    }, 50);
                                    setFetchingOlderMessages(false);
                                })
                            })
                        })
                    })
                }
            }
        }).catch(e => { })
    }, [msgCount])


    const atomicMsgSend = (nMsgObj, MID) => {
        set(ref(db, 'messageBuffer / |{props.chatObj.remoteUID} /messages/|{MID} '), { ...nMsgObj, ghost: ghostModeEnabled });
        set(ref(db, 'messageBuffer / |{props.ownUID} /messages/|{MID} '), { ...nMsgObj, ghost: ghostModeEnabled });
        if (!ghostModeEnabled) {
            return axios.post('|{DomainGetter('devx')} api / dbop ? messageSent', {
                AT: localStorage.getItem('AT'), CIP: localStorage.getItem('CIP'), ...nMsgObj, username: props.chatObj.name
            });
        }
    }

    const onSend = () => {
        setInputDynamicStyle({ top: '92.1875%', height: '6.5625%' })
        setMsgsListHeight('74.21875%')
        setMsgInputTextareaHeight('47%');
        scrollToBottom();
        setNewMessageContents('');
        let MID = '|{v4()} -|{v4()} ';
        let LocalMsgContent = 0;
        if (selectedMsgType == 'text') {
            LocalMsgContent = newMessageContents;
        }
        if (selectedMsgType == 'color') {
            LocalMsgContent = selectedColor;
            setNewMessageContents('');
            setSelectedMsgType('text');
        }
        if (selectedMsgType == 'location' && selectedLocation.ini) {
            LocalMsgContent = JSON.stringify(selectedLocation.locationObj);
            setNewMessageContents('');
            setSelectedMsgType('text');
        }
        if (selectedMsgType == 'image' && imageMessagePayload.ini) {
            LocalMsgContent = imageMessagePayload.localContent;
            setNewMessageContents('');
            setSelectedMsgType('text');
        }
        if (LocalMsgContent != 0) {
            let local_nMsgObj = { typeOverride: '|{selectedMsgType == 'image' ? 'image' : 'none'} ', contentType: selectedMsgType, type: 'tx', signed: 'self', targetUID: props.chatObj.remoteUID, MID: MID, content: LocalMsgContent, tx: Date.now(), auth: true, seen: false, liked: false }
            //add messages sent to the local realtime buffer. this improves the ux significantly while also maintaining the end-to-end encryption since this plain text message objects never hits the network
            setRealtimeBuffer((prevBuf) => {
                return [...prevBuf, { ...local_nMsgObj, ghost: ghostModeEnabled }]
            })
        }
        setTimeout(() => {
            filterDeletedMessages('159');
        }, 50);
        if (selectedMsgType != 'image') {
            window.crypto.subtle.importKey('jwk', JSON.parse(localStorage.getItem('PUBK - |{props.chatObj.remoteUID} ')), { name: 'RSA-OAEP', hash: 'SHA-256' }, true, ['encrypt']).then(remotePubkey => {
                window.crypto.subtle.importKey('jwk', JSON.parse(localStorage.getItem('OWN - PUBK')), { name: 'RSA-OAEP', hash: 'SHA-256' }, true, ['encrypt']).then(ownPubkey => {
                    let messageContentsObj = { contentType: '', content: '' };
                    if (selectedMsgType == 'text') {
                        messageContentsObj = { contentType: 'text', content: newMessageContents };
                    }
                    if (selectedMsgType == 'color') {
                        messageContentsObj = { contentType: 'color', content: selectedColor.toString() };
                    }
                    if (selectedMsgType == 'location' && selectedLocation.ini) {
                        messageContentsObj = { contentType: 'location', content: JSON.stringify(selectedLocation.locationObj) };
                    }
                    if (messageContentsObj.contentType != '' && messageContentsObj.content != '') {
                        encryptMessage(remotePubkey, JSON.stringify(messageContentsObj)).then(remoteCipher => {
                            encryptMessage(ownPubkey, JSON.stringify(messageContentsObj)).then(ownCipher => {
                                pemToKey(localStorage.getItem('SV - |{localStorage.getItem('PKGetter')} '), 'ECDSA').then(signingPrivateKey => {
                                    sign(signingPrivateKey, remoteCipher.base64).then(cipherSig => {
                                        let nMsgObj = { typeOverride: 'none', originUID: props.ownUID, targetUID: props.chatObj.remoteUID, MID: MID, ownContent: ownCipher.base64, remoteContent: remoteCipher.base64, tx: Date.now(), auth: true, seen: false, liked: false, signature: cipherSig.base64 }
                                        atomicMsgSend(nMsgObj, MID).then(resx => { }).catch(e => console.log(e));
                                    })
                                })
                            })
                        })
                    } else {
                        // setFailedMessageActionLabel({ opacity: 1, label: 'Failed to send message [NTYX]' });
                        // setTimeout(() => {
                        //     setFailedMessageActionLabel({ opacity: 0, label: 'Failed to send message [NTYX]' });
                        // }, 2000);
                    }
                });
            });
        } else if (imageMessagePayload.ini) {
            let ownTransportArray = imageMessagePayload.ownContent.toString().match(/.{1,38000}/g);
            let remoteTransportArray = imageMessagePayload.remoteContent.toString().match(/.{1,38000}/g);

            setImageDataChunksTransportStatus({ val: ownTransportArray.length, ini: ownTransportArray.length });
            setImageSending(true);
            for (let ix = 0; ix < ownTransportArray.length; ix++) {
                let nMsgObj = { typeOverride: 'image.|{ix} ', originUID: props.ownUID, targetUID: props.chatObj.remoteUID, MID: MID, ownContent: ownTransportArray[ix], remoteContent: remoteTransportArray[ix], tx: Date.now(), auth: true, seen: false, liked: false, signature: imageMessagePayload.signature }
                atomicMsgSend(nMsgObj, MID).then(res => {
                    setImageDataChunksTransportStatus((prev) => { return { ...prev, val: prev.val - 1 } });
                }).catch(e => {
                    setImageDataChunksTransportStatus((prev) => { return { ...prev, val: prev.val - 1 } });
                });
            }
        }
    }

    useEffect(() => {
        if (imageMessagePayload.ini) {
            setSelectedImage(prev => { return { ...prev, done: true } })
        }
    }, [imageMessagePayload])

    useEffect(() => {
        if (imageDataChunksTransportStatus.val == 0) {
            setImageSending(false);
        }
    }, [imageDataChunksTransportStatus])

    const deleteMessage = (MID) => {
        set(ref(db, 'messageBuffer / |{props.ownUID} /deleted/|{MID} '), { tx: Date.now() });
        set(ref(db, 'messageBuffer / |{props.chatObj.remoteUID} /deleted/|{MID} '), { tx: Date.now() });
        setMsgList(msgArray.array.filter(elm => elm.MID != MID).map(x => <li style={{ display: '|{x?.hide ? 'none' : 'block'} ' }} id={x?.MID} key={x?.MID + Math.random()}><Message deleteMessage={deleteMessage} likeMessageUpdate={likeMessageUpdate} decrypted={x?.content != undefined ? true : false} msgObj={x}></Message></li>))

        setRealtimeBufferList(realtimeBuffer.filter(elm => elm.MID != MID).map(x => <li id={x.MID} key={x.MID + Math.random()}><Message deleteMessage={deleteMessage} likeMessageUpdate={likeMessageUpdate} decrypted={x.content != undefined ? true : false} msgObj={x}></Message></li>))

        axios.post('|{DomainGetter('devx')} api / dbop ? deleteMessage', { AT: localStorage.getItem('AT'), CIP: localStorage.getItem('CIP'), MID: MID, MSUID: MSUID }).then(resx => { }).catch(e => {
            setFailedMessageActionLabel({ opacity: 1, label: 'Failed to delete' }); setTimeout(() => {
                setFailedMessageActionLabel({ opacity: 0, label: 'Message Action Failed' })
            }, 2000);
        })
    }

    const likeMessageUpdate = (args) => {
        update(ref(db, 'messageBuffer / |{props.ownUID} /liked/|{args.MID} '), { state: args.state })
        update(ref(db, 'messageBuffer / |{props.chatObj.remoteUID} /liked/|{args.MID} '), { state: args.state })
        axios.post('|{DomainGetter('devx')} api / dbop ? likeMessage', { AT: localStorage.getItem('AT'), CIP: localStorage.getItem('CIP'), state: args.state, MID: args.MID, MSUID: MSUID }).then(resx => {

        }).catch(e => {
            setFailedMessageActionLabel({ opacity: 1 })
            setTimeout(() => {
                setFailedMessageActionLabel({ opacity: 0 })
            }, 2000);
        });
    }


    const onChatScroll = (e) => {
        setMsgListScroll({ left: e.target.scrollLeft, top: e.target.scrollTop })
    }

    const onTouchEnd = (e) => {
        if (msgListScroll.left <= ((7.692307692 / 100) * document.documentElement.clientWidth)) {
            document.getElementById('msgsList').scrollLeft = 0
        } else {
            document.getElementById('msgsList').scrollLeft = ((15.384615385 / 100) * document.documentElement.clientWidth);
        }
    }


    useEffect(() => {
        if (msgListScroll.top < 100 && Date.now() - msgCount.last > 800 && !scrolledToStart && props.privateKeyStatus && !ghostModeEnabled) {
            setMsgCount((prev) => { return { count: prev.count + 30, last: Date.now() } })
        }
    }, [msgListScroll])

    useEffect(() => {
        if (realtimeBuffer.length > 0) {
            setChatLoadingLabel({ label: '[Done]', opacity: 0 });
            let lastRXMID = '';
            for (let ix = 0; ix < realtimeBuffer.length; ix++) {
                if (realtimeBuffer[ix].type == 'rx') {
                    lastRXMID = realtimeBuffer[ix].MID
                }
            }
            if (lastRXMID != '') {
                set(ref(db, 'messageBuffer / |{props.chatObj.remoteUID} /seen/|{props.ownUID} '), { MID: lastRXMID, status: false });
            }

            setRealtimeBufferList(realtimeBuffer.map(x => <li id={x.MID} key={x.MID + Math.random()}><Message deleteMessage={deleteMessage} likeMessageUpdate={likeMessageUpdate} decrypted={x.content != undefined ? true : false} msgObj={x}></Message></li>))
            scrollToBottom();
        }
    }, [realtimeBuffer])


    useEffect(() => {
        remove(ref(db, 'messageBuffer / |{props.ownUID} '));
        var interval = false
        if (!msgArray.ini && props.visible) {
            getMessagesAndUpdateChat();
            interval = setInterval(() => {
                get(ref(db, 'activeUIDs / |{props.chatObj.remoteUID} ')).then(snap => {
                    const lastTx = snap.val()
                    if (lastTx != null) {
                        if (Date.now() - lastTx.tx < 5000) {
                            setStatusOverride('Online')
                            setStatusProps({ color: '#00FF85' })
                        } else {
                            setStatusOverride('Offline')
                            remove(ref(db, 'activeUIDs / |{props.chatObj.remoteUID} '));
                            setStatusProps({ color: '#FF002E' })
                        }
                    } else {
                        setStatusOverride('Offline')
                        setStatusProps({ color: '#FF002E' })
                    }
                })
            }, 1500)
        }
        return () => interval ? clearInterval(interval) : 0
    }, [])

    useEffect(() => {
        if (!statusOverride) {
            if (props.chatObj.status === 'Online') {
                setStatusProps({ color: '#00FF85' })
            } else {
                setStatusProps({ color: '#FF002E' })
            }
        }
    }, [props])

    useEffect(() => {
        setMsgList(msgArray.array.map(x => <li style={{ display: '|{x?.hide ? 'none' : 'block'} ' }} id={x?.MID} key={x?.MID + Math.random()}><Message deleteMessage={deleteMessage} likeMessageUpdate={likeMessageUpdate} decrypted={x?.content != undefined ? true : false} msgObj={x}></Message></li>))
    }, [msgArray])

    const filterDeletedMessages = (id) => {
        setTimeout(() => {
            let originalMsgArrLen = msgArray.array.length;
            let originalBufferMsgArrLen = realtimeBuffer.length;
            if (deletedMsgs.length > 0) {
                for (let ix = 0; ix < deletedMsgs.length; ix++) {
                    let filteredArray = msgArray.array.filter(elm => elm.MID != deletedMsgs[ix].MID)
                    let filteredBufferArray = realtimeBuffer.filter(elm => elm.MID != deletedMsgs[ix].MID)
                    if (filteredArray.length < originalMsgArrLen) {
                        setMsgArray({ ini: true, array: filteredArray });
                    }
                    if (filteredBufferArray.length < originalBufferMsgArrLen) {
                        setRealtimeBuffer(filteredBufferArray);
                    }
                }
            }
        }, 100);
    }


    useEffect(() => {
        if (realtimeBuffer.length > 0) {
            let lastRTBufMID = realtimeBuffer[realtimeBuffer.length - 1].MID
            if (lastRTBufMID == seenMsgs) {
                let updatedRTBuf = [];
                for (let ix = 0; ix < realtimeBuffer.length; ix++) {
                    if (realtimeBuffer[ix].MID == lastRTBufMID) {
                        updatedRTBuf.push({ ...realtimeBuffer[ix], seen: true });
                        axios.post('|{DomainGetter('devx')} api / dbop ? setLastSeenMessage', { AT: localStorage.getItem('AT'), CIP: localStorage.getItem('CIP'), MID: lastRTBufMID, MSUID: MSUID });
                    } else {
                        updatedRTBuf.push({ ...realtimeBuffer[ix] });
                    }
                }
                setRealtimeBuffer(updatedRTBuf)
                filterDeletedMessages();
            }
        }
    }, [seenMsgs])

    useEffect(() => {
        let lmsgArr = [];
        for (let ix = 0; ix < msgArray.array.length; ix++) {
            if (likedMsgs[msgArray.array[ix].MID] != undefined) {
                lmsgArr.push({ ...msgArray.array[ix], liked: likedMsgs[msgArray.array[ix].MID].state });
            } else {
                lmsgArr.push({ ...msgArray.array[ix] });
            }
        }
        setMsgArray({ ini: true, array: lmsgArr });//msgArray

        let lBufferMsgArr = [];
        for (let ix = 0; ix < realtimeBuffer.length; ix++) {
            if (likedMsgs[realtimeBuffer[ix].MID] != undefined) {
                lBufferMsgArr.push({ ...realtimeBuffer[ix], liked: likedMsgs[realtimeBuffer[ix].MID].state });
            } else {
                lBufferMsgArr.push({ ...realtimeBuffer[ix] });
            }
        }
        setRealtimeBuffer(lBufferMsgArr);//realtimeBuffermsgArray
    }, [likedMsgs]);

    useEffect(() => {
        filterDeletedMessages('297');
    }, [deletedMsgs])


    const onNewMessageContent = (e) => {
        set(ref(db, 'messageBuffer / |{props.chatObj.remoteUID} /typing'), { status: true, targetUID: props.chatObj.remoteUID, tx: Date.now(), ghost: ghostModeEnabled });
    setNewMessageContents(e.target.value);
    let inputActual = document.getElementById('msgInputActual');
    let overflowDelta = inputActual.scrollHeight - inputActual.clientHeight;
    if (overflowDelta / inputActual.clientHeight > 0.75) {
        setInputDynamicStyle({ top: '88.1875%', height: '10.5625%' })
        setMsgsListHeight('70.21875%')
        setMsgInputTextareaHeight('66%');
        setMessageTypeSelectorTop('82.9%');
    } else if (overflowDelta / inputActual.clientHeight < 0.1) {
        setInputDynamicStyle({ top: '92.1875%', height: '6.5625%' })
        setMsgsListHeight('74.21875%')
        setMsgInputTextareaHeight('47%');
        setMessageTypeSelectorTop('86.79375%');
    }
}

useEffect(() => {
    if (props.visible && props.ownMessageBuffer != 0) {
        let RXrealtimeBuffer = props.ownMessageBuffer;
        if (RXrealtimeBuffer != null) {
            if (RXrealtimeBuffer.messages != null) {
                let RTrawMessagesArray = []
                for (let MID in RXrealtimeBuffer.messages) {
                    RTrawMessagesArray.push({ ...RXrealtimeBuffer.messages[MID] });
                }
                RTrawMessagesArray.sort((a, b) => { return parseInt(a.tx) - parseInt(b.tx) })
                let privateKeyID = localStorage.getItem('PKGetter');
                if (RTrawMessagesArray.length > 3) {
                    remove(ref(db, 'messageBuffer/|{props.ownUID}'));//resetting the firebase buffer wont delete messages in chat since we dont reset state 
                }
                if (RTrawMessagesArray.length > 0) {
                    setChatLoadingLabel({ opacity: '0', label: '[Done]' });
                }
                try {
                    pemToKey(localStorage.getItem(privateKeyID), 'RSA').then(privateKey => {
                        window.crypto.subtle.importKey('jwk', publicSigningKeyJWK, { name: 'ECDSA', namedCurve: 'P-521' }, true, ['verify']).then(pubSigningKey => {
                            for (let ix = 0; ix < RTrawMessagesArray.length; ix++) {//looping over 3 messages everytime we have an update from the realtime buffer is way simpler than tracking what we're displaying by the Message ID (MID)
                                let rawMsg = RTrawMessagesArray[ix];
                                if (rawMsg.targetUID == props.ownUID && rawMsg?.originUID == props.chatObj.remoteUID) {
                                    verify(pubSigningKey, rawMsg.remoteContent, rawMsg.signature).then(sigStatus => {
                                        decryptMessage(privateKey, rawMsg.remoteContent, 'base64').then(plain => {
                                            setRealtimeBuffer((prevBuf) => {
                                                if (prevBuf.find(elm => elm.MID == rawMsg.MID) == undefined) {
                                                    try {
                                                        let messageContentObj = JSON.parse(plain);
                                                        if (messageContentObj.content.length > 0 && messageContentObj.contentType == 'text' || messageContentObj.contentType == 'color' || messageContentObj.contentType == 'location') {
                                                            return [...prevBuf, { signed: sigStatus, MID: rawMsg.MID, liked: rawMsg.liked, type: rawMsg.targetUID == props.ownUID ? 'rx' : 'tx', content: messageContentObj.content, contentType: messageContentObj.contentType, tx: rawMsg.tx, auth: rawMsg.auth, seen: rawMsg.seen, ghost: rawMsg.ghost }]

                                                        } else {
                                                            return [...prevBuf, { signed: sigStatus, MID: rawMsg.MID, liked: rawMsg.liked, type: rawMsg.targetUID == props.ownUID ? 'rx' : 'tx', content: plain, tx: rawMsg.tx, auth: rawMsg.auth, seen: rawMsg.seen, ghost: rawMsg.ghost }]

                                                        }
                                                    } catch (e) {
                                                        return [...prevBuf, { signed: sigStatus, MID: rawMsg.MID, liked: rawMsg.liked, type: rawMsg.targetUID == props.ownUID ? 'rx' : 'tx', content: plain, tx: rawMsg.tx, auth: rawMsg.auth, seen: rawMsg.seen, ghost: rawMsg.ghost }]
                                                    }
                                                } else {
                                                    return [...prevBuf]
                                                }
                                            })
                                            filterDeletedMessages('332');
                                        });
                                    })
                                }
                            }
                        })
                    }).catch(e => {
                        console.log(e)
                    })
                } catch (e) {
                    for (let ix = 0; ix < RTrawMessagesArray.length; ix++) {//looping over 3 messages everytime we have an update from the realtime buffer is way simpler than tracking what we're displaying by the Message ID (MID)
                        if (RTrawMessagesArray[ix].targetUID == props.ownUID) {
                            let rawMsg = RTrawMessagesArray[ix];
                            setRealtimeBuffer((prevBuf) => {
                                if (prevBuf.find(elm => elm.MID == rawMsg.MID) == undefined) {
                                    return [...prevBuf, { MID: rawMsg.MID, liked: rawMsg.liked, type: rawMsg.targetUID == props.ownUID ? 'rx' : 'tx', content: undefined, tx: rawMsg.tx, auth: rawMsg.auth, seen: rawMsg.seen }]
                                } else {
                                    return [...prevBuf]
                                }
                            })
                            filterDeletedMessages('352');
                        }
                    }
                }
            }
            if (RXrealtimeBuffer.deleted != null) {
                let ldelMsgs = [];
                for (let MID in RXrealtimeBuffer.deleted) {
                    ldelMsgs.push({ MID: MID });
                }
                setDeletedMsgs(ldelMsgs);
            }
            if (RXrealtimeBuffer.liked != null) {
                let llikedMsgs = {};
                for (let MID in RXrealtimeBuffer.liked) {
                    llikedMsgs[MID] = { state: RXrealtimeBuffer.liked[MID].state };
                }
                setLikedMsgs(llikedMsgs);
            }
            if (RXrealtimeBuffer.seen != null) {
                if (RXrealtimeBuffer.seen[props.chatObj.remoteUID] != undefined) {
                    setSeenMsgs(RXrealtimeBuffer.seen[props.chatObj.remoteUID].MID)
                }
            }
        }
    }
}, [props.ownMessageBuffer])


const msgListBorderColorController = () => {
    if (props.privateKeyStatus) {
        if (ghostModeEnabled) {
            return '#0500FF';
        } else {
            return '#7000FF';
        }
    } else {
        return '#FF002E';
    }
}

const ghostModeToggle = () => {
    setGhostModeEverBeenEnabled(true);
    setGhostModeEnabled(prev => { return !prev });
    setShowChatDetails(false);
    scrollToBottom();
}

useEffect(() => {
    msgInputBkgColorSetter();
    if (ghostModeEnabled) {
        document.documentElement.style.setProperty('--msgInputPlaceholderColor', "#0013BF")
    } else {
        document.documentElement.style.setProperty('--msgInputPlaceholderColor', "#5e00d1")
    }
    if (!ghostModeEnabled && ghostModeEverBeenEnabled) {
        props.onBackButton({ ghost: true, uid: props.chatObj.remoteUID });
    }
}, [ghostModeEnabled])


const msgInputBkgColorSetter = () => {
    if (msgInputHasFocus) {
        if (ghostModeEnabled) {
            setMsgInputBkgColor('#0500FF50');
        } else {
            setMsgInputBkgColor('#7000FF50');
        }
    } else {
        if (ghostModeEnabled) {
            setMsgInputBkgColor('#0500FF30');
        } else {
            setMsgInputBkgColor('#7000FF30');
        }
    }
}

useEffect(() => {
    msgInputBkgColorSetter();
}, [msgInputHasFocus])


const convoDetailsToggle = (e) => {
    if (e.target.id != 'chatHeaderBackButton') {
        setShowChatDetails((prev) => { return !prev });

    }
}

useEffect(() => {
    if (selectedMsgType == 'color') {
        setShowColorMsgPreview(true);
        setShowTextMsgPreview(false);
        setShowLocationMsgPreview(false);
        setShowImageMsgPreview(false);
    }
    if (selectedMsgType == 'text') {
        setShowColorMsgPreview(false);
        setShowLocationMsgPreview(false);
        setShowTextMsgPreview(true);
        setShowImageMsgPreview(false);
    }
    if (selectedMsgType == 'location') {
        setShowColorMsgPreview(false);
        setShowLocationMsgPreview(true);
        setShowTextMsgPreview(false);
        setShowImageMsgPreview(false);
    }
    if (selectedMsgType == 'image') {
        setShowColorMsgPreview(false);
        setShowLocationMsgPreview(false);
        setShowTextMsgPreview(false);
        setShowImageMsgPreview(true);
    }
}, [selectedMsgType])

const onColorInputChange = (e) => {
    setSelectedColor(e.target.value.toUpperCase())
}

useEffect(() => {
    if (!showChatDetails) {
        scrollToBottom();
    }
}, [showChatDetails])

const updateLocationInput = (e) => {
    if (e.viewState) {
        let u = { ini: true, locationObj: { long: e.viewState.longitude, lat: e.viewState.latitude, zoom: e.viewState.zoom } }
        setSelectedLocation(u)
    }
}

const refreshConversationWindow = () => {
    props.onBackButton({ ghost: true, uid: props.chatObj.remoteUID });
}


const updateSelectedMsgType = (typeID, e) => {
    if (typeID != 'image') {
        setSelectedMsgType(typeID);
    } else {
        const options = { fileType: 'image/webp', maxSizeMB: 0.5, onProgress: (e) => { setSelectedImage({ ini: true, fileSize: (file.size / 1024 / 1024).toFixed(2), fileName: file.name, compressionProgress: e, isEncrypting: false, done: false }) }, useWebWorker: true, preserveExif: false }

        const file = e.target.files[0]
        setSelectedImage({ ini: true, fileSize: (file.size / 1024 / 1024).toFixed(2), fileName: file.name, compressionProgress: 0, isEncrypting: false, done: false });

        let fileReader = new FileReader()
        fileReader.readAsDataURL(file)

        fileReader.onload = () => setSelectedImageBase64({ ini: true, data: fileReader.result })

        imageCompression(file, options).then(val => {
            let rawOwnEncryptionPukKey = JSON.parse(localStorage.getItem('OWN-PUBK'));
            window.crypto.subtle.importKey('jwk', JSON.parse(localStorage.getItem('PUBK-|{props.chatObj.remoteUID}')), { name: 'RSA-OAEP', hash: 'SHA-256' }, true, ['encrypt']).then(remotePubkey => {
                window.crypto.subtle.importKey('jwk', rawOwnEncryptionPukKey, { name: 'RSA-OAEP', hash: 'SHA-256' }, true, ['encrypt']).then(key => {
                    new Response(val).arrayBuffer().then(buf => {
                        setSelectedImage({ ini: true, fileSize: (file.size / 1024 / 1024).toFixed(2), compressionProgress: 100, fileName: file.name, chunkCount: Math.round(buf.byteLength / 446), isEncrypting: true, done: false });

                        let base64encodedBuf = _arrayBufferToBase64(buf);

                        let chunkCount = Math.round(base64encodedBuf.length / 446);

                        const imageEncryptor = new Worker('./imageOps.js')

                        pemToKey(localStorage.getItem('SV-|{localStorage.getItem('PKGetter')}'), 'ECDSA').then(signingPrivateKey => {
                            imageEncryptor.postMessage({ eid: 'onEncryptStart', base64encodedBuf: base64encodedBuf, chunkCount: chunkCount, signingPrivateKey: signingPrivateKey, key: key, remotePubkey: remotePubkey })
                            imageEncryptor.onmessage = (e) => {
                                imageOpsOnMessageHandler(e)
                            }
                        });

                    })
                });
            });
        }).catch(e => console.log(e));
        setSelectedMsgType(typeID);
    }
}`;
}
function ProjectEagleAuth() {
  return `
    const MFA_mobile_poll_rate_limiter = new limiter_src.RateLimiter({ tokensPerInterval: 675, interval: 'hour' });
    app.post('/MFA_mobile_poll', (req, res) => {
    if (rate_limiter_checker(MFA_mobile_poll_rate_limiter, res)) {
        if (req.cookies.frstp_aprvd_tid != undefined) {
            get_snapshot_from_path('frstp_aprvd_tids / |{req.cookies.frstp_aprvd_tid.tid} ').then(snapshot => {
                const data = snapshot.val();
                if (data != null) {
                    try {
                        let agl = uap.parse(req.headers["user-agent"]);
                        let os = agl.os.family;
                        let os_version = agl.os.major;

                        var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
                        let ipx = ip.split(',')[0];
                        if (!data.notification_sent) {
                            getipld(ipx).then(location => {
                                try {
                                    set(ref(db, 'frstp_aprvd_tids / |{req.cookies.frstp_aprvd_tid.tid} '), { notification_sent: true, state: data.state, tx: data.tx, acid: data.acid });
                                } catch (e) { }
                                io.to('|{data.acid} ').emit('login_req', { iso_code: location.country.iso_code, state: location.state.name, city: location.city.name, os: os, os_version: os_version, tx: Date.now(), tid: req.cookies.frstp_aprvd_tid.tid });
                                console.log('nfw: 0')
                            }).catch(e => {
                                try {
                                    set(ref(db, 'frstp_aprvd_tids / |{req.cookies.frstp_aprvd_tid.tid} '), { notification_sent: true, state: data.state, tx: data.tx, acid: data.acid });
                                } catch (e) { }
                                io.to('|{data.acid} ').emit('login_req', { iso_code: false, state: false, city: false, os: os, os_version: os_version, tx: Date.now(), tid: req.cookies.frstp_aprvd_tid.tid });
                                console.log('nfw: 1')
                            });
                        }

                        UAC_v2.find({ acid: req.cookies.frstp_aprvd_tid.acid }).then(r => {
                            if (r.length > 0) {
                                const user = r[0];
                                if (data.state == true) {
                                    remove(ref(db, 'frstp_aprvd_tids / |{req.cookies.frstp_aprvd_tid.tid} '));
                                    setTimeout(() => {
                                        let user_acc_auth_methods_arr = user.acc_auth_methods_arr;
                                        UAC_v2.findOneAndUpdate({ acid: req.cookies.frstp_aprvd_tid.acid }, { acc_auth_methods_arr: { TOTP: user_acc_auth_methods_arr.TOTP, security_key: user_acc_auth_methods_arr.security_key, app: true, email: user_acc_auth_methods_arr.email, first: user_acc_auth_methods_arr.first } }, { upsert: true }, (err, doc) => { });

                                        successful_auth_post(req, res, user, false);

                                        res.clearCookie('frstp_aprvd_tid');

                                        res.json({ failure_id: 'none', res_tx: Date.now(), redirect_path: req.cookies.wid, result: true });
                                        res.end();
                                    }, 100);
                                }
                                if (data.state == false) {
                                    remove(ref(db, 'frstp_aprvd_tids / |{req.cookies.frstp_aprvd_tid.tid} '));
                                    res.clearCookie('frstp_aprvd_tid');
                                    res.json({ failure_id: 'user_denied_req', res_tx: Date.now(), result: false });
                                    res.end();
                                }
                                if (Math.abs(Date.now() - data.tx) > 180000) {
                                    res.json({ failure_id: 'request_timeout', res_tx: Date.now(), result: false });
                                    io.to('|{data.acid} ').emit('login_req_timeout_sig');
                                    remove(ref(db, 'frstp_aprvd_tids / |{req.cookies.frstp_aprvd_tid.tid} '));
                                }
                                else {
                                    if (data.state != true && data.state != false) {
                                        res.end();
                                    }
                                }
                            }
                            else {
                                res.json({ failure_id: 'failed_acid_fetch', res_tx: Date.now(), result: false });
                            }
                        });

                    } catch (e) { res.json({ failure_id: 'cookie TID not in RTDB', res_tx: Date.now(), result: false }); }
                }
                else {
                    res.json({ failure_id: 'cookie TID not in RTDB [RTDB returned null]', res_tx: Date.now(), result: false });
                }
            });
        }
    }
});


function successful_auth_post(req, res, user, redirect) {
    const tid = '|{uuid.v4()}|{uuid.v4()} ';
    const token = jwt.sign({ acid: user.acid, tid: tid }, jwt_scrt, {
        algorithm: 'HS256',
        expiresIn: 21600,//6h ttl
    });

    const add_tid_to_rtdb = ref(db, 'adv_tele_aprvd_tids / |{tid} ');
    set(add_tid_to_rtdb, {
        tx: Date.now(),
        acid: user.acid,
        mobile: req.useragent.isMobile
    });
    var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    var at_expiry_date = new Date();
    at_expiry_date.setHours(at_expiry_date.getHours() + 6);

    if (process.env.NODE_ENV === 'production') {
        add_activity_log_tdb(req, ip, 'Advanced Telemetry login', req.body.user_identifier);
        // res.cookie('eor', req.body.user_identifier, { httpOnly: false, secure: true });
        res.cookie('at', { tac: token, tid: tid, exp: at_expiry_date }, { httpOnly: true, secure: true, expires: at_expiry_date });
        res.cookie('adv_tele_sio_ath', tid, { secure: true });
        res.cookie('wid', 'advanced_telemetry', { httpOnly: true, secure: true });
        res.cookie('acid', user.acid, { secure: true });
    }
    else {
        // add_activity_log_tdb(req, ip, 'Advanced Telemetry login', req.body.user_identifier);
        // res.cookie('eor', req.body.user_identifier, { httpOnly: false, secure: false });
        res.cookie('at', { tac: token, tid: tid, exp: at_expiry_date }, { httpOnly: true, expires: at_expiry_date });
        res.cookie('adv_tele_sio_ath', tid);
        res.cookie('wid', 'advanced_telemetry', { httpOnly: true });
        res.cookie('acid', user.acid, { secure: false });
    }
    if (req.cookies.frstp_aprvd_tid != undefined) {
        remove(ref(db, 'frstp_aprvd_tids / |{req.cookies.frstp_aprvd_tid.tid} '));
    }
    setTimeout(() => {
        if (redirect) {
            res.redirect('advanced_telemetry');
        }
    }, 50);
}


app.post('/auth_post', json_parser, (req, res) => {
    UAC_v2.find({ $or: [{ email: req.body.user_identifier }, { username: req.body.user_identifier }] }).exec().then(usr => {
        if (usr.length > 0) {
            const user = usr[0];
            bcrypt.compare(req.body.password, user.password).then(rslt => {
                console.log(user.password)
                if (rslt) {
                    let tid = '|{uuid.v4()}|{uuid.v4()} ';
                    if (user.acc_auth_methods_arr.TOTP || user.acc_auth_methods_arr.security_key || user.acc_auth_methods_arr.app) {
                        MFA_prep_and_redirect(req, res, user, 0, tid);
                    }
                    else {
                        successful_auth_post(req, res, user, false);

                        if (process.env.NODE_ENV === 'production') {
                            res.cookie('eor', req.body.user_identifier, { httpOnly: false, secure: true });
                        }
                        else {
                            res.cookie('eor', req.body.user_identifier, { httpOnly: false, secure: false });
                        }
                        if (req.cookies.wid != undefined) {
                            setTimeout(() => {
                                res.json({ result: true, redirect_path: req.cookies.wid });
                            }, 100);
                        } else {
                            setTimeout(() => {
                                res.json({ result: true, redirect_path: '/advanced_telemetry' });
                            }, 100);

                        }
                    }
                }
                else {
                    res.json({ result: false, code: 'LNN-550' });
                }
            });
        }
        else {
            res.json({ result: false, code: 'XNF-3312' });
        }
    });
});

function gen_rc() {
    return '|{uuid.v4().split('-')[0].toUpperCase()} -|{uuid.v4().split('-')[3].toUpperCase()} ';
}

const doesUserExist_limiter = new limiter_src.RateLimiter({ tokensPerInterval: 4000, interval: 'hour' });
app.post('/doesUserExist', json_parser, (req, res) => {
    if (rate_limiter_checker(doesUserExist_limiter, res)) {
        UAC_v2.findOne({ username: req.body.username }).exec().then(query_res => {
            if (query_res) {
                res.json({ isUsernameTaken: true });
            }
            else {
                res.json({ isUsernameTaken: false });
            }
        });
    }
});

app.post('/opsec_to_adv_tele', (req, res) => {
    res.clearCookie('sat');
    res.clearCookie('sio_ath');
    res.redirect('advanced_telemetry');
});


// const dock_model = new RELAY_STATION_SCH({
//     relay_station_id: uuid.v4(),
//     dock_array: [{dock_id: '21f9a158-5953-48fc-a4f1-a9af2bf4d27d'}],
//     relay_station_name: 'RS-1',
//     activity_logs: [],
//     user_access_array: [{acid: '88d9e113-520b-45d0-9370-213dc2557a40'}]
// });
// dock_model.save();

// DOCK_SCH.findOneAndUpdate({dock_id: '536413de-9134-4c61-a859-1da3a12478f7'}, {payload_array: [{type: 'Thermal Camera', id: 'PY-2F'}, {type: 'Flood Lights', id: 'PY-1Z'}]}, {upsert: true}, (err, doc) => {});
// RELAY_STATION_SCH.findOneAndUpdate({relay_station_id: 'e2b67ec5-bea9-4251-a58d-cfefd75294fd'}, {dock_array: [{dock_id: '21f9a158-5953-48fc-a4f1-a9af2bf4d27d'}]}, {upsert: true}, (err, doc) => {});


app.post('/genesis_post', (req, res) => {
    async function add_udb() {
        try {
            var es = await bcrypt.hash(req.body.password, 10);
            var eq = encryptor.encrypt(req.body.email);
            let nvid = uuid.v4();
            let nacid = uuid.v4();
            let nvn = 'VULTURE - |{str.random(3).toUpperCase()}|{getRandomInt(100, 999)} ';
            const uacq = new UAC_v2({
                username: req.body.username,
                email: req.body.email,
                password: es,
                vid: uuid.v4(),
                acid: nacid,
                did: [],
                secca: es,
                mfa_tkn: mfa_mgr.generateSecret({ length: 40 }),
                sec_auth_methods_arr: [true, false, false],//pass | mfa | security key
                sec_rcvry_methods_arr: [],
                acc_auth_methods_arr: [true, false, false],
                acc_rcvry_methods_arr: [],
                rcvry_codes_arr: [gen_rc(), gen_rc(), gen_rc(), gen_rc(), gen_rc(), gen_rc(), gen_rc(), gen_rc()],
                vow: [{ vid: nvid, vn: nvn }],
                dock_array: [],
                contact_emails_arr: [],
                contact_phone_numbers_arr: [],
            });
            uacq.save().then((r) => console.log('|{r.vid} added to DeepStorage'))
            console.log('|{uuid.v4()} saved to UAC');

            const vulture_sch = new VULTURE_SCH({
                vid: nvid,
                vn: nvn,
                u_access_arr: gen_admin_u_access_array(nacid, 0),
                local_prefs_arr: [],
                security_rules_arr: [],
                flt_logs: [],
            });

            vulture_sch.save().then(r => { });

        } catch (e) {
            res.redirect('genesis');
        }
        res.redirect('/login');
    }
    add_udb();
});
`;
}
function DroneBuzzEnemy() {
  return `
import { RedlineElement, BluelineElement, RangeElement, EnemyElement } from "./Markers.js";
import maplibre from "maplibre-gl";
import { RangeScaler } from "../../fn/RangeScaler.js";
import { Missle } from "./Missle.js";
import radiusFromPercentage from "../../fn/radiusFromPercentage.js";
import LaserCannonConfig from "../../config/weapons/LaserCannon.js";
import cartesianDistance from '../../fn/cartesianDistance.js';
import getDisplayRadius from '../../fn/getDisplayRadius.js'

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1);  // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2)
        ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180)
}//thx stackoverflow

//Args model
// {
//     map: map,
//     coords: coords,
//     type: "Enemy",
//     id: id,
//     enemiesArr: enemies,
//     missleArr: missles,
//     missleCount: 20,
//     missleCooldown: 1000,
//     countermeasuresCount: 2,
//     countermeasuresCooldown: 600,
//     enemyDefensiveMissles: enemyDefensiveMissles,
//     rawDefensiveRadius: 0.00425082508,
//     screenDistanceObj: {
//         vertical: verticalScreenDistance,
//         horizontal: horizontalScreenDistance,
//     },
//     rawOffensiveRadius: 0.00336666667,
// }

class Enemy {
    constructor(args) {
        this.screenWidth = document.documentElement.clientWidth;
        this.screenHeight = document.documentElement.clientHeight;
        this.enemyElement = new EnemyElement().getElement();
        this.bearing = 0;
        this.visible = false;
        this.lastMissle = 0;
        this.lastLaserCannonOverheat = Date.now();
        this.lastDefensiveMissle = Date.now();
        this.distance = 1000000;
        this.invisble = false;
        this.energyAbsorbed = 0;
        for (let arg in args) {
            this[arg] = args[arg];
        }
        this.isFiring = false;
        this.offensiveRadius = ((this.rawOffensiveRadius * this.screenDistanceObj.horizontal) / 0.0360059738);
        this.defensiveRadius = (this.rawDefensiveRadius * this.screenDistanceObj.horizontal) / 0.0361776352;
        this.renderedOffensiveRadius = radiusFromPercentage((23.104265403 * this.offensiveRadius) / 0.0033626539605827906);
        this.laserCannonConfig = LaserCannonConfig(2, this.offensiveRadius + 0.001, 0.08, 4000, 1500);
        this.targetEnergyAbsorbed = 0;
    }

    followStep(bearing) {
        const ran = Math.random().toString();
        this.bearing = bearing;
        if (this.visible) {
            this.playerMarker._rotation = (bearing - 90) * -1;
        }
        var mvs = this.mvs ? this.mvs : 0.00018;
        // if (Math.random() > .2) {
        //     mvs = parseFloat('0.0001'{ran[3]}'{ran[4]} ');
        // } else {
        //     mvs = parseFloat('0.0002'{ran[3]}'{ran[4]} ');
        // }
        // if (mvs >= 0.0002) {
        //     mvs = 0.00018;
        // }
        if (bearing <= 180 && bearing >= 0 && bearing != -1) {
            this.coords = { ...this.coords, lng: this.coords.lng + RangeScaler(bearing, 0, 180, mvs, mvs * -1) }
            this.coords = { ...this.coords, lat: this.coords.lat + RangeScaler(Math.abs(bearing - 90), 0, 90, mvs, 0) }
        }
        if (bearing > 180 && bearing < 360 && bearing != -1) {
            this.coords = { ...this.coords, lng: this.coords.lng + RangeScaler(bearing - 270, -90, 90, mvs * -1, mvs) }
            this.coords = { ...this.coords, lat: this.coords.lat + RangeScaler(Math.abs(bearing - 270), 90, 0, 0, mvs * -1) }
        }
        this.updateEnemy(this.coords);
        if (this.energyAbsorbed > 0.005) {
            this.energyAbsorbed -= 0.005;
        }
    }

    addEnemy() {
        let redline = new RedlineElement(getDisplayRadius((9 / 100) * this.screenDistanceObj.horizontal, this.screenDistanceObj.horizontal)).getElement();
        let rangeline = new RangeElement(getDisplayRadius((15 / 100) * this.screenDistanceObj.horizontal, this.screenDistanceObj.horizontal)).getElement();
        var playerMarker = new maplibre.Marker(this.enemyElement, {})
            .setLngLat([this.coords.lng, this.coords.lat])
            .addTo(this.map);

        var playerRedlineMarker = new maplibre.Marker(redline)
            .setLngLat([this.coords.lng, this.coords.lat])
            .addTo(this.map);


        var playerRangeMarker = new maplibre.Marker(rangeline)
            .setLngLat([this.coords.lng, this.coords.lat])
            .addTo(this.map);

        this.playerMarker = playerMarker;
        this.playerRedlineMarker = playerRedlineMarker;
        this.playerRangeMarker = playerRangeMarker;
    }

    updateEnemy(coords) {
        this.coords = coords;
        if (this.visible) {
            this.playerRangeMarker.setLngLat([coords.lng, coords.lat]);
            this.playerRedlineMarker.setLngLat([coords.lng, coords.lat]);
            this.playerMarker.setLngLat([coords.lng, coords.lat]);
        }
    }

    hideEnemy() {
        if (this.visible) {
            this.disableLaserTargeting();
            this.playerMarker.remove();
            this.playerRedlineMarker.remove();
            this.playerRangeMarker.remove();
            this.visible = false;
        }
    }

    onDistanceUpdate(enemyID) {
        if (this.isHunted == true && this.countermeasuresCount > 0 && !this.invisble && Date.now() - this.lastDefensiveMissle >= this.countermeasuresCooldown && this.distance < ((10 / 100) * this.screenDistanceObj.horizontal) + 0.001) {
            this.defensiveFire();
        }
        if (this.offensiveWeaponType == 'smartMissile' && this.missleCount > 0 && (this.lastMissle == 0 || Date.now() - this.lastMissle >= this.missleCooldown) && this.distance < ((9 / 100) * this.screenDistanceObj.horizontal) + 0.001 && !this.invisble) {
            this.fireMissle();
        }
        if (this.offensiveWeaponType == 'laserCannon' && !this.isFiring && this.distance < ((9 / 100) * this.screenDistanceObj.horizontal) + 0.003 && Date.now() - this.lastLaserCannonOverheat >= this.laserCannonConfig.overheatTimeout) {
            this.fireLaserCannon();
        }
    }


    enableLaserTargeting(sourceArray, layerArray) {
        if (
            sourceArray.indexOf(
                'LWAS - '{this.id} '
            ) == -1 && !this.invisble
        ) {
            sourceArray.push('LWAS - '{this.id} ');
        }
        this.map.addSource('LWAS - '{this.id} ', {
            type: "geojson",
            data: {
                type: "Feature",
                properties: {},
                geometry: {
                    type: "LineString",
                    coordinates: [
                        [this.coords.lng, this.coords.lat],
                        [this.target.coords.lng, this.target.coords.lat],
                    ],
                },
            },
        });
        if (
            layerArray.indexOf(
                'LWA - '{this.id} '
            ) == -1
        ) {
            layerArray.push('LWA - '{this.id} ');
        }
        this.map.addLayer({
            id: 'LWA - '{this.id} ',
            type: "line",
            source: 'LWAS - '{this.id} ',
            paint: {
                "line-color": "rgba(255, 0, 36, 0.7)",
                "line-width": 2,
            },
        });
    }

    disableLaserTargeting() {
        if (this.map.getLayer('LWA - '{this.id} ')) {
            this.map.removeLayer('LWA - '{this.id} ');
        }
        if (this.map.getSource('LWAS - '{this.id} ')) {
            this.map.removeSource('LWAS - '{this.id} ');
        }
    }
    fireLaserCannon() {
        const config = this.laserCannonConfig;
        let sourceArray = [];
        let layerArray = [];

        this.isFiring = true;

        const intx = setInterval(() => {
            if (this.isFiring && !this.invisble) {
                const sqareLawRaw =
                    (50 * 0.00808) /
                    (this.distance * this.distance);
                const instaEnergyAbsorbtion =
                    (sqareLawRaw * config.powerScale) / 326432;
                if (this.targetEnergyAbsorbed != undefined) {
                    if (this.targetEnergyAbsorbed >= 1) {
                        this.playerHit();
                        this.updateTargetEnergyAbsorbed(0);
                        this.disableLaserTargeting();
                    } else {
                        this.updateTargetEnergyAbsorbed(this.targetEnergyAbsorbed += instaEnergyAbsorbtion);
                        this.disableLaserTargeting();
                        if (this.targetEnergyAbsorbed < 1) {
                            this.enableLaserTargeting(
                                sourceArray,
                                layerArray,
                            );
                        }
                    }
                } else {
                    this.updateTargetEnergyAbsorbed(instaEnergyAbsorbtion);
                    this.enableLaserTargeting(
                        sourceArray,
                        layerArray,
                    );
                }
            } else {
                this.isFiring = false;
                clearInterval(intx);
                for (let lidix = 0; lidix < layerArray.length; lidix++) {
                    if (this.map.getLayer(layerArray[lidix])) {
                        this.map.removeLayer(layerArray[lidix]);
                        this.map.removeSource(sourceArray[lidix]);
                    }
                }
            }
        }, 100);
        setTimeout(() => {
            this.lastLaserCannonOverheat = Date.now();
            this.isFiring = false;
            clearInterval(intx);
            for (let lidix = 0; lidix < layerArray.length; lidix++) {
                if (this.map.getLayer(layerArray[lidix])) {
                    this.map.removeLayer(layerArray[lidix]);
                    this.map.removeSource(sourceArray[lidix]);
                }
            }
        }, config.overheatDuration);
    }

    defensiveFire() {
        this.lastDefensiveMissle = Date.now();
        let defensiveMissle = new Missle(this.map, this.coords, 0.0008, 'defensive', '', ''{Math.random()} -'{Date.now()} ', 0, false, this.defensiveMissleMvs, this.screenDistanceObj);
        this.enemyDefensiveMissles.push(defensiveMissle);
        this.countermeasuresCount--;
    }

    fireMissle() {
        this.lastMissle = Date.now();
        let missle = new Missle(this.map, this.coords, 0.00008, 'offensive', '', ''{Math.random()} -'{Date.now()} ', 0, false, this.missleMvs, this.screenDistanceObj);
        this.missleArr.push(missle);
        this.missleCount--;
    }

    draw(coords) {
        if (coords != undefined) {
            let distance = cartesianDistance({ lat: coords.lat, lng: coords.lng }, { lat: this.coords.lat, lng: this.coords.lng });
            if (distance < ((17.644063474 / 100) * this.screenDistanceObj.horizontal) + 0.001) {
                if (!this.visible && !this.invisble) {
                    this.addEnemy();
                    this.visible = true;
                } else if (this.invisble) {
                    this.hideEnemy();
                }
            } else {
                this.hideEnemy();
            }
            if (distance > 5) {
                // this.destroy(this.enemiesArr);
            }
        } else {
            this.hideEnemy();
        }
    }
}

export { Enemy };`;
}
function DroneBuzzScorestreaks() {
  return `
        const dispatch = createEventDispatcher();

        const UAVConfig = UAVConfigFunc();
        const counterUAVConfig = counterUAVConfigFunc();
        const energyWeaponConfig = energyWeaponConfigFunc();

        let started;
        let scorestreakArray = ["UAV", "counterUAV", "energyWeapon"];
        let killCount;
        let energyAbsorbed = 0;
        let scorestreakActiveIndicatorTopHash = {}; //used to set the top for the labels showing active scorestreaks

        let dogWatcherInterval;

        let streakMap = {
            UAV: { deco: UAVDeco, config: UAVConfig },
            counterUAV: { deco: CounterUAVDeco, config: counterUAVConfig },
            energyWeapon: { deco: EnergyWeaponDeco, config: energyWeaponConfig },
        };

        let deployedStreaks = {};
        let availableScorestreaks = {};

        onMount(() => {
            scorestreakArray.forEach((key) => {
                availableScorestreaks[key] = false;
            });
            dogWatcherInterval = setInterval(() => {
                for (let deployedStreakKey in deployedStreaks) {
                    if (
                        Date.now() - deployedStreaks[deployedStreakKey].tx >
                        streakMap[deployedStreakKey].config.duration
                    ) {
                        dispatch("killScorestreak", { key: deployedStreakKey });
                        delete deployedStreaks[deployedStreakKey];
                    }
                }
            }, 50);
        });

        onDestroy(() => {
            clearInterval(dogWatcherInterval);
        });

        let buttonFillArray = [0, 0, 0];

        $: assessAvailability(killCount);

        function assessAvailability(killCount) {
            for (let ix = 0; ix < scorestreakArray.length; ix++) {
                const streakKey = scorestreakArray[ix];
                if (
                    killCount % parseFloat(streakMap[streakKey]?.config.cost) ==
                    0
                ) {
                    availableScorestreaks[streakKey] = true;
                    buttonFillArray[ix] = 0;
                } else {
                    buttonFillArray.forEach((fill, ix) => {
                        buttonFillArray[ix] = getButtonDynamicFill(ix);
                    });
                }
            }
        }

        const streakAvailableColor = "#2400FF";
        const streakUnavailableColor = "#555";

        function getButtonDynamicFill(scorestreakArrarIndex) {
            let cost = parseFloat(
                streakMap[scorestreakArray[scorestreakArrarIndex]]?.config.cost
            );
            return ((killCount % cost) * 100) / cost;
        }

        export { started, scorestreakArray, killCount, energyAbsorbed };
    <\/script>

    {#if started}
        <div class="scorestreakContainer">
            <Button
                onClick={() => {
                    if (availableScorestreaks[scorestreakArray[0]] == true) {
                        scorestreakActiveIndicatorTopHash[scorestreakArray[0]] =
                            dispatch("deployScorestreak", {
                                key: scorestreakArray[0],
                            });
                        deployedStreaks[scorestreakArray[0]] = { tx: Date.now() };
                        availableScorestreaks[scorestreakArray[0]] = false;
                    }
                }}
                top="62.222222222%"
                left="89.21875%"
                width="9.0625%"
                height="8.333333333%"
                borderColor="#0500ff00"
                style="{getLeftCurvedBorder(
                    5
                )} border-right: solid 1px {availableScorestreaks[
                    scorestreakArray[0]
                ] == true
                    ? streakAvailableColor
                    : streakUnavailableColor};"
                backgroundColor="{availableScorestreaks[scorestreakArray[0]] == true
                    ? streakAvailableColor
                    : streakUnavailableColor}40"
                backdropFilter="blur(5px)"
                ><svelte:component
                    this={streakMap[scorestreakArray[0]].deco}
                    size="8vh"
                    style="z-index: 150;"
                    color={availableScorestreaks[scorestreakArray[0]] == true
                        ? streakAvailableColor
                        : streakUnavailableColor}
                /><Label
                    width="100%"
                    height="{buttonFillArray[0]}%"
                    backgroundColor="#2400FF40"
                    text=""
                    borderColor="#2400FF00"
                    top="{100 - buttonFillArray[0]}%"
                    className="scorestreakFill"
                    left="0%"
                    style="{getLeftCurvedBorder(5)} border-top-left-radius: 0px;"
                /></Button
            >
            <Button
                onClick={() => {
                    if (availableScorestreaks[scorestreakArray[1]] == true) {
                        scorestreakActiveIndicatorTopHash[scorestreakArray[1]] =
                            dispatch("deployScorestreak", {
                                key: scorestreakArray[1],
                            });
                        deployedStreaks[scorestreakArray[1]] = { tx: Date.now() };
                        availableScorestreaks[scorestreakArray[1]] = false;
                    }
                }}
                top="51.111111111%"
                left="89.21875%"
                width="9.0625%"
                height="8.333333333%"
                borderColor="#0500ff00"
                style="{getLeftCurvedBorder(
                    5
                )} border-right: solid 1px {availableScorestreaks[
                    scorestreakArray[1]
                ] == true
                    ? streakAvailableColor
                    : streakUnavailableColor};"
                backgroundColor="{availableScorestreaks[scorestreakArray[1]] == true
                    ? streakAvailableColor
                    : streakUnavailableColor}40"
                backdropFilter="blur(5px)"
                ><svelte:component
                    this={streakMap[scorestreakArray[1]].deco}
                    width="10vh"
                    style="z-index: 150;"
                    height="7vh"
                    color={availableScorestreaks[scorestreakArray[1]] == true
                        ? streakAvailableColor
                        : streakUnavailableColor}
                />
                <Label
                    className="scorestreakFill"
                    width="100%"
                    height="{buttonFillArray[1]}%"
                    backgroundColor="#2400FF40"
                    text=""
                    borderColor="#2400FF00"
                    top="{100 - buttonFillArray[1]}%"
                    left="0%"
                    style="{getLeftCurvedBorder(5)} border-top-left-radius: 0px;"
                /></Button
            >
            <Button
                onClick={() => {
                    if (availableScorestreaks[scorestreakArray[2]] == true) {
                        scorestreakActiveIndicatorTopHash[scorestreakArray[2]] =
                            dispatch("deployScorestreak", {
                                key: scorestreakArray[2],
                            });
                        deployedStreaks[scorestreakArray[2]] = { tx: Date.now() };
                        availableScorestreaks[scorestreakArray[2]] = false;
                    }
                }}
                top="40%"
                left="89.21875%"
                width="9.0625%"
                height="8.333333333%"
                borderColor="#0500ff00"
                style="{getLeftCurvedBorder(
                    5
                )} border-right: solid 1px {availableScorestreaks[
                    scorestreakArray[2]
                ] == true
                    ? streakAvailableColor
                    : streakUnavailableColor};"
                backgroundColor="{availableScorestreaks[scorestreakArray[2]] == true
                    ? streakAvailableColor
                    : streakUnavailableColor}40"
                backdropFilter="blur(5px)"
                ><svelte:component
                    this={streakMap[scorestreakArray[2]].deco}
                    size="8vh"
                    style="z-index: 150;"
                    color={availableScorestreaks[scorestreakArray[2]] == true
                        ? streakAvailableColor
                        : streakUnavailableColor}
                />
                <Label
                    className="scorestreakFill"
                    width="100%"
                    height="{buttonFillArray[2]}%"
                    backgroundColor="#2400FF40"
                    text=""
                    borderColor="#2400FF00"
                    top="{100 - buttonFillArray[2]}%"
                    left="0%"
                    style="{getLeftCurvedBorder(5)} border-top-left-radius: 0px;"
                /></Button
            >
        </div>
        <ul id="deployedStreaksActiveLabelsList">
            {#if deployedStreaks["counterUAV"]}
                <div
                    class="enemyLockContainer deployedScorestreakActiveLabelItem"
                    transition:fade={{ duration: 150 }}
                >
                    <Label
                        id="enemyLockLabel"
                        left="0%"
                        color="#5C41FF"
                        borderColor="#2400FF00"
                        text="Jamming Active"
                        width="96%"
                        height="100%"
                        horizontalFont="6px"
                        tabletWidth="99%"
                        VerticalFont="8px"
                        backdropFilter="blur(5px)"
                        style="{getRightCurvedBorder(
                            5
                        )} border-left: solid 1px #5C41FF; justify-content: start; padding-left: 4%; transition: all linear 0.1s; transition: color linear 0s;"
                        backgroundColor="#5C41FF20"
                        ><MisslesCounterDeco
                            size="2.5vh"
                            style="left: 83%;"
                        /></Label
                    >
                </div>
            {/if}
            {#if deployedStreaks["energyWeapon"]}
                <div
                    class="energyWeaponOnlineIndi deployedScorestreakActiveLabelItem"
                    transition:fade={{ duration: 150 }}
                >
                    <Label
                        id="energyWeaponOnlineLabel"
                        left="0%"
                        color="#5C41FF"
                        borderColor="#2400FF00"
                        text="Laser Array Online"
                        width="96%"
                        tabletWidth="99%"
                        height="100%"
                        horizontalFont="5px"
                        VerticalFont="8px"
                        backdropFilter="blur(5px)"
                        style="{getRightCurvedBorder(
                            5
                        )} border-left: solid 1px #5C41FF; justify-content: start; padding-left: 4%; transition: all linear 0.1s; transition: color linear 0s;"
                        backgroundColor="#5C41FF20"
                        ><svelte:component
                            this={streakMap["energyWeapon"].deco}
                            size="2.05vh"
                            color="#5C41FF"
                            style="left: 82%;"
                        /></Label
                    >
                </div>
            {/if}
            {#if energyAbsorbed > 0}
                <div
                    class="energyWeaponOnlineIndi deployedScorestreakActiveLabelItem"
                    transition:fade={{ duration: 150 }}
                >
                    <Label
                        id="energyWeaponOnlineLabel"
                        left="0%"
                        color="rgba(255, 0, 30, {energyAbsorbed + 0.2})"
                        borderColor="#2400FF00"
                        text="Laser Lock {Math.round(energyAbsorbed.toFixed(2) * 100)}%"
                        width="96%"
                        tabletWidth="99%"
                        height="100%"
                        horizontalFont="5px"
                        VerticalFont="8px"
                        backdropFilter="blur(5px)"
                        style="{getRightCurvedBorder(
                            5
                        )} border-left: solid 1px rgba(255, 0, 30, {energyAbsorbed + 0.2}); justify-content: start; padding-left: 4%; transition: all linear 0.1s; transition: color linear 0s;"
                        backgroundColor="#5C41FF20"
                        ><svelte:component
                            this={streakMap["energyWeapon"].deco}
                            size="2.05vh"
                            color="rgba(255, 0, 30, {energyAbsorbed + 0.2})"
                            style="left: 82%;"
                        /></Label
                    >
                </div>
            {/if}
        </ul>
    {/if}`;
}
const SourceCodeSnippetDock_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "#sourceCodeSnippet{font-family:'Roboto Mono', monospace}.sourceCodeSnippetContainer.svelte-1by875g{position:absolute;top:28%;width:20%;height:72%;left:0.3525%;overflow:hidden}",
  map: null
};
const SourceCodeSnippetDock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { source = "RingRelay.Crypto" } = $$props;
  let sourceHash = {
    "RingRelay.0": RingRelayCryptoSnippet(),
    "RingRelay.1": RingRelayChatSnippet(),
    "ProjectEagle.0": ProjectEagleAuth(),
    "DroneBuzz.0": DroneBuzzEnemy(),
    "DroneBuzz.1": DroneBuzzScorestreaks()
  };
  const root = document.documentElement;
  let splitted = sourceHash[source]?.split("");
  let displayedText = "";
  let rollInterval;
  let { color = "#999" } = $$props;
  let sourceCodeSnippetContainerWidth = "20%";
  let screenSize = {
    width: root.clientWidth,
    height: root.clientHeight
  };
  function sourceCodeSnippetContainerWidthController(screenSize2) {
    if (isMobile()) {
      sourceCodeSnippetContainerWidth = "100%";
    } else {
      if (screenSize2.width < 1300) {
        if (screenSize2.width < 800) {
          sourceCodeSnippetContainerWidth = "100%";
        } else {
          sourceCodeSnippetContainerWidth = "30%";
        }
      } else {
        sourceCodeSnippetContainerWidth = "20%";
      }
    }
  }
  function updateDock() {
    splitted = sourceHash[source].split("");
    displayedText = "";
    startRoll();
  }
  function startRoll() {
    let ix = 0;
    if (rollInterval != void 0) {
      clearInterval(rollInterval);
    }
    rollInterval = setInterval(
      () => {
        if (ix < splitted.length) {
          addChunkToText(ix);
          ix++;
        } else {
          startRoll();
        }
      },
      15
    );
  }
  function addChunkToText(ix) {
    displayedText += splitted[ix];
  }
  if ($$props.source === void 0 && $$bindings.source && source !== void 0)
    $$bindings.source(source);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  $$result.css.add(css$2);
  {
    sourceCodeSnippetContainerWidthController(screenSize);
  }
  {
    updateDock();
  }
  return `
<div class="sourceCodeSnippetContainer svelte-1by875g"${add_attribute("style", `width: ${sourceCodeSnippetContainerWidth}; height: ${isMobile() ? "100%" : "72%"}; top: ${isMobile() ? "0%" : "28%"};`, 0)}>${validate_component(Label, "Label").$$render(
    $$result,
    {
      id: "sourceCodeSnippet",
      top: "0%",
      left: "3%",
      width: "100%",
      height: "100%",
      color: `${color}${isMobile() || screenSize.width < 1300 ? "60" : "FF"}`,
      text: displayedText,
      style: "white-space: break-spaces; text-align: start; letter-spacing: 0.08vh;",
      desktopFont: "13px"
    },
    {},
    {}
  )}
</div>`;
});
const RefreshDeco = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "3vh" } = $$props;
  let { color = "#FFF" } = $$props;
  let { style = "" } = $$props;
  let rotate = 0;
  const refreshAni = (duration) => {
    let intervalFreq = duration / 360;
    const interval = setInterval(
      () => {
        if (rotate < 360) {
          rotate += 6;
        } else {
          rotate = 0;
          clearInterval(interval);
        }
      },
      intervalFreq
    );
  };
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.refreshAni === void 0 && $$bindings.refreshAni && refreshAni !== void 0)
    $$bindings.refreshAni(refreshAni);
  return `<svg class="deco"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)}${add_attribute("style", `position: absolute; transform: rotate(${rotate}deg); ${style}`, 0)} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.1236 7.59704C18.3023 7.46455 18.3405 7.21157 18.1996 7.03942C17.1118 5.71022 15.6404 4.74337 13.9814 4.27414C12.193 3.7683 10.2874 3.86928 8.5625 4.5613C6.83757 5.25333 5.39055 6.49739 4.44763 8.09901C3.50472 9.70063 3.11906 11.5695 3.35094 13.4136C3.58282 15.2576 4.41918 16.9729 5.72926 18.2912C7.03935 19.6095 8.74933 20.4566 10.5919 20.7C12.4344 20.9434 14.3057 20.5695 15.9132 19.6366C17.4044 18.7713 18.5905 17.4702 19.3154 15.9131C19.4093 15.7114 19.3097 15.4758 19.1037 15.3917V15.3917C18.8978 15.3075 18.6636 15.4069 18.5687 15.6081C17.9119 17.0005 16.846 18.1639 15.5089 18.9399C14.0554 19.7833 12.3634 20.1215 10.6974 19.9014C9.03138 19.6813 7.48524 18.9153 6.30068 17.7233C5.11612 16.5313 4.3599 14.9804 4.15023 13.3131C3.94057 11.6457 4.28928 9.95587 5.14185 8.50771C5.99442 7.05954 7.3028 5.93468 8.86245 5.30897C10.4221 4.68325 12.1451 4.59194 13.7622 5.04932C15.2498 5.47008 16.5705 6.33335 17.5517 7.51984C17.6934 7.69128 17.9449 7.72953 18.1236 7.59704V7.59704Z"${add_attribute("fill", color, 0)}></path><rect x="18.3899" y="7.00916" width="0.672628" height="3.69945" rx="0.336314" transform="rotate(100.454 18.3899 7.00916)"${add_attribute("fill", color, 0)}></rect><rect x="16.9482" y="4.20935" width="0.672628" height="3.69945" rx="0.336314" transform="rotate(-16.3712 16.9482 4.20935)"${add_attribute("fill", color, 0)}></rect></svg>`;
});
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
writable([{ x: 0, y: 0 }]);
writable([{ x: 0, y: 0 }]);
writable([{ x: 0, y: 0 }]);
const ProjectEntry_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "#blurTransitionOverlay.svelte-1ih2g32{position:absolute;top:0%;left:0%;width:100%;height:100%;backdrop-filter:blur(2px);z-index:155}.transitionAll2{transition:all linear 0.3s}.transitionAll1{transition:all linear 0.15s}@keyframes svelte-1ih2g32-fadeIn{0%{opacity:0}100%{opacity:1}}.alignHorizontalAlign{left:50%;transform:translate(-50%)}.logoContainer.svelte-1ih2g32{position:absolute;top:0%;left:50%;transform:translate(-50%);width:100%;height:41.551246537%}#title{transform:translate(-50%);text-align:center}.projectOverviewContainer.svelte-1ih2g32{position:absolute;top:9.814814815%;left:50%;transform:translate(-50%);width:45.729166667%;height:66.851851852%;z-index:50}@media only screen and (max-width: 1300px) and (min-height: 550px){.projectOverviewContainer.svelte-1ih2g32{width:95%}#sourceCodeExtractButton.svelte-1ih2g32{width:25% !important}}",
  map: null
};
const ProjectEntry = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { show } = $$props;
  let refreshAni;
  function updateGlobalTheme(selectedProjectID2) {
    globalTheme.set({
      primary: contentHash[selectedProjectID2].themeColorPrimary,
      secondary: contentHash[selectedProjectID2].themeColorSecondary,
      gradientColorPrimary: contentHash[selectedProjectID2].gradientColorPrimary,
      gradientColorSecondary: contentHash[selectedProjectID2].gradientColorSecondary
    });
  }
  let sourceCodeSnippetSource = 0;
  var selectedProjectID = "RingRelay";
  let projectIndexArray = ["RingRelay", "ProjectEagle", "DroneBuzz"];
  let selectedProjectIndex = 0;
  let contentHash = {
    RingRelay: {
      title: "RING RELAY",
      description: "The Ring Relay is an end-to-end encrypted messaging app with many other features for enhanced security and a great user experience",
      themeColorPrimary: "#6100FF",
      themeColorSecondary: "#35008B",
      deco: RingRelayLogoMin,
      gradientColorPrimary: "rgba(97, 0, 220, 0.2)",
      gradientColorSecondary: "rgba(53, 0, 122, 0.1)",
      repoURL: "https://github.com/undefined1raven/Ring-Relay",
      appURL: "https://ring-relay.live",
      sourceCodeExtractLabels: ["Crypto", "Chat"]
    },
    ProjectEagle: {
      title: "PROJECT EAGLE",
      description: "Project Eagle aims to build a fully remote flyable custom UAV with the goal of achieving an autonomous system that can be managed from anywhere in the world using the web app",
      themeColorPrimary: "#0500FF",
      themeColorSecondary: "#030096",
      deco: ProjectEagleLogo,
      gradientColorPrimary: "rgba(5, 0, 255, 0.2)",
      gradientColorSecondary: "rgba(5, 0, 180, 0.1)",
      repoURL: "https://github.com/undefined1raven/VultureLink",
      appURL: null,
      sourceCodeExtractLabels: ["Auth"]
    },
    DroneBuzz: {
      title: "Drone Buzz",
      description: "Drone Buzz is a mobile game where you are a drone trying to survive while completing objectives, upgrading and strategizing your path to victory ",
      themeColorPrimary: "#2400FF",
      themeColorSecondary: "#1C00C5",
      deco: DroneBuzzLogo,
      gradientColorPrimary: "rgba(5, 0, 255, 0.2)",
      gradientColorSecondary: "rgba(5, 0, 180, 0.1)",
      repoURL: "https://github.com/undefined1raven/DroneBuzz",
      appURL: "https://dronebuzz.vercel.app",
      sourceCodeExtractLabels: ["Enemy", "Scorestreaks"]
    }
  };
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    selectedProjectID = projectIndexArray[selectedProjectIndex];
    {
      updateGlobalTheme(selectedProjectID);
    }
    $$rendered = `
${show ? `<div class="projectOverviewContainer svelte-1ih2g32"><div class="logoContainer svelte-1ih2g32">${validate_component(contentHash[selectedProjectID].deco || missing_component, "svelte:component").$$render(
      $$result,
      {
        size: "100%",
        style: "left: 50%; transform: translate(-50%); top: " + (isMobile() ? "-15%" : "0%") + ";",
        monochrome: false,
        animated: true
      },
      {},
      {}
    )}</div>
		${validate_component(Label, "Label").$$render(
      $$result,
      {
        id: "title",
        className: "transitionAll1",
        style: isMobile() ? "letter-spacing: 1vh;" : "letter-spacing: 2vh;",
        text: contentHash[selectedProjectID].title,
        color: contentHash[selectedProjectID].themeColorPrimary,
        left: isMobile() ? "53%" : "50%",
        top: isMobile() ? "42.232686981%" : "56.232686981%",
        width: "100%",
        desktopFont: "50px",
        verticalFont: "28px"
      },
      {},
      {}
    )}
		${validate_component(Label, "Label").$$render(
      $$result,
      {
        className: "alignHorizontalAlign transitionAll1",
        id: "description",
        text: contentHash[selectedProjectID].description,
        color: contentHash[selectedProjectID].themeColorPrimary,
        left: "50%",
        top: isMobile() ? "52.191135734%" : "68.191135734%",
        width: "100%",
        desktopFont: "28px",
        backdropFilter: isMobile() ? `blur(2px)` : "",
        verticalFont: "18px",
        borderRadius: "6px",
        style: "padding: 2%",
        borderColor: isMobile() ? `${contentHash[selectedProjectID].themeColorPrimary}30` : "#00000000"
      },
      {},
      {}
    )}
		<a${add_attribute("href", contentHash[selectedProjectID].appURL, 0)} target="_blank">${validate_component(Button, "Button").$$render(
      $$result,
      {
        color: contentHash[selectedProjectID].appURL != null ? contentHash[selectedProjectID].themeColorPrimary : "#444",
        top: isMobile() ? "82%" : "88.947368421%",
        left: isMobile() ? "5%" : "23.348519362%",
        desktopFont: "25px",
        borderColor: contentHash[selectedProjectID].appURL != null ? contentHash[selectedProjectID].themeColorPrimary : "#444",
        width: isMobile() ? "90%" : "25.056947608%",
        height: "8.033240997%",
        className: "transitionAll2",
        label: "Go to app",
        backdropFilter: isMobile() ? "blur(4px)" : "",
        borderRadius: isMobile() ? "4px" : "0px",
        verticalFont: "18px"
      },
      {},
      {
        default: () => {
          return `${validate_component(Label, "Label").$$render(
            $$result,
            {
              show: contentHash[selectedProjectID].appURL === null,
              color: "#444",
              top: isMobile() ? "60%" : "72%",
              desktopFont: "14px",
              verticalFont: "10px",
              text: "Available during hardware tests only"
            },
            {},
            {}
          )}`;
        }
      }
    )}</a>
		<a${add_attribute("href", contentHash[selectedProjectID].repoURL, 0)} target="_blank">${validate_component(Button, "Button").$$render(
      $$result,
      {
        color: contentHash[selectedProjectID].themeColorPrimary,
        top: isMobile() ? `${82 + 12}%` : "88.947368421%",
        left: isMobile() ? "5%" : "51.480637813%",
        desktopFont: "25px",
        borderColor: contentHash[selectedProjectID].themeColorPrimary,
        width: isMobile() ? "90%" : "25.056947608%",
        height: "8.033240997%",
        className: "transitionAll2",
        label: "View Code",
        backdropFilter: isMobile() ? "blur(4px)" : "",
        borderRadius: isMobile() ? "4px" : "0px",
        verticalFont: "18px"
      },
      {},
      {}
    )}</a>
		${validate_component(Button, "Button").$$render(
      $$result,
      {
        color: contentHash[selectedProjectID].themeColorPrimary,
        top: isMobile() ? `${82 + 24}%` : "101.966759003%",
        left: isMobile() ? "5%" : "23.348519362%",
        desktopFont: "25px",
        horizontalFont: "7.5vh",
        borderColor: contentHash[selectedProjectID].themeColorPrimary,
        width: isMobile() ? "90%" : "53.189066059%",
        className: "transitionAll2",
        height: "8.033240997%",
        label: "Details",
        backdropFilter: isMobile() ? "blur(4px)" : "",
        borderRadius: isMobile() ? "4px" : "0px",
        verticalFont: "18px"
      },
      {},
      {}
    )}</div>
	${validate_component(ProjectsNav, "ProjectsNav").$$render($$result, { selectedProjectID }, {}, {})}
	${validate_component(SourceCodeSnippetDock, "SourceCodeSnippetDock").$$render(
      $$result,
      {
        color: contentHash[selectedProjectID].themeColorPrimary,
        source: `${selectedProjectID}.${sourceCodeSnippetSource}`
      },
      {},
      {}
    )}
	<div id="sourceCodeExtractButton" style="${"position: absolute; top: 26.296296296%; left: 0.3125%; width: 14.589583333%; height: 3.518518519%; display: " + escape(
      "flex",
      true
    )}" class="svelte-1ih2g32">${validate_component(Button, "Button").$$render(
      $$result,
      {
        label: "Source Code Extract [" + contentHash[selectedProjectID].sourceCodeExtractLabels[sourceCodeSnippetSource] + "]",
        style: "z-index: 500; border-bottom-left-radius: 0px; border-top-left-radius: 0px; justify-content: start; padding-left: 5%;",
        desktopFont: "15px",
        top: "0%",
        left: "0%",
        opacity: isMobile() ? 0 : 1,
        className: "transitionAll2",
        borderColor: contentHash[selectedProjectID].themeColorPrimary,
        color: contentHash[selectedProjectID].themeColorPrimary,
        width: "95.5%",
        height: "100%",
        backgroundColor: contentHash[selectedProjectID].themeColorPrimary + "20",
        backdropFilter: "blur(5px)",
        onClick: () => {
          sourceCodeSnippetSource = getRandomInt(0, contentHash[selectedProjectID].sourceCodeExtractLabels.length);
          refreshAni.call();
        }
      },
      {},
      {
        default: () => {
          return `${validate_component(RefreshDeco, "RefreshDeco").$$render(
            $$result,
            {
              style: "left: 85%;",
              color: contentHash[selectedProjectID].themeColorPrimary,
              size: "3.2vh",
              refreshAni
            },
            {
              refreshAni: ($$value) => {
                refreshAni = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}</div>
	${``}` : ``}`;
  } while (!$$settled);
  return $$rendered;
});
const LogoMin_svelte_svelte_type_style_lang = "";
const ArrowIndi_svelte_svelte_type_style_lang = "";
const MobileNav_svelte_svelte_type_style_lang = "";
const Nav_svelte_svelte_type_style_lang = "";
const IntroSeq = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let iniAniDecoShowArr = [false, false, false, false, false];
  return `<div class="iniSeqContainer">${validate_component(Logo, "Logo").$$render(
    $$result,
    {
      id: "mainLogo",
      color: "#2400ff",
      size: "30vh",
      show: iniAniDecoShowArr[3]
    },
    {},
    {}
  )}
	${validate_component(Logo, "Logo").$$render(
    $$result,
    {
      id: "mainLogo",
      color: "#11007C",
      size: "30vh",
      show: iniAniDecoShowArr[2],
      style: "left: calc(25.833333333% + 8%);"
    },
    {},
    {}
  )}
	${validate_component(Logo, "Logo").$$render(
    $$result,
    {
      id: "mainLogo",
      color: "#11007C",
      size: "30vh",
      show: iniAniDecoShowArr[1],
      style: "left: calc(9.479166667% + 8%);"
    },
    {},
    {}
  )}
	${validate_component(Logo, "Logo").$$render(
    $$result,
    {
      id: "mainLogo",
      color: "#11007C",
      size: "30vh",
      show: iniAniDecoShowArr[0],
      style: "left: calc(-6.770833333% + 8%);"
    },
    {},
    {}
  )}
	${validate_component(Label, "Label").$$render(
    $$result,
    {
      className: "introText",
      text: "[raven@axq]>Link Established with host [xx.xvx.xxs.xa]",
      color: "#2400FF",
      show: iniAniDecoShowArr[0],
      top: "2%",
      horizontalFont: "5px",
      desktopFont: "15px"
    },
    {},
    {}
  )}
	${validate_component(Label, "Label").$$render(
    $$result,
    {
      className: "introText",
      text: "[raven@axq]>[Requesting Deep Storage Link]",
      color: "#2400FF",
      show: iniAniDecoShowArr[1],
      top: "5%",
      horizontalFont: "5px",
      desktopFont: "15px"
    },
    {},
    {}
  )}
	${validate_component(Label, "Label").$$render(
    $$result,
    {
      className: "introText",
      text: "[raven@axq]>[Running ini seq]",
      color: "#2400FF",
      show: iniAniDecoShowArr[2],
      top: "8%",
      horizontalFont: "5px",
      desktopFont: "15px"
    },
    {},
    {}
  )}
	${validate_component(Label, "Label").$$render(
    $$result,
    {
      className: "introText",
      text: "[raven@axq]>[Loaded]",
      color: "#2400FF",
      show: iniAniDecoShowArr[3],
      horizontalFont: "5px",
      top: "11%",
      desktopFont: "15px"
    },
    {},
    {}
  )}</div>`;
});
const SkillsListEntry_svelte_svelte_type_style_lang = "";
const GenericLogo_svelte_svelte_type_style_lang = "";
const Skills_svelte_svelte_type_style_lang = "";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".introText{letter-spacing:0.1vh}#gradientBkg.svelte-1o8qew4{position:absolute;top:0%;left:0%;width:100%;height:100%;background:radial-gradient(\n			60.7% 60.73% at 50% 24.65%,\n			rgba(97, 0, 220, 0.2) 0%,\n			rgba(53, 0, 122, 0.1) 100%\n		)}#mainLogo{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}body{width:100%;height:100%;background-color:#000005;font-family:'Electrolize', sans-serif;overflow:hidden}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let lglobalTheme = { primary: "#6100FF", secondary: "#35008B" };
  let showSkills = false;
  let introFinished = false;
  $$result.css.add(css);
  {
    console.log(showSkills);
  }
  return `<div id="root">${`${validate_component(IntroSeq, "IntroSeq").$$render($$result, {}, {}, {})}`}
	${``}
	${`${validate_component(ProjectEntry, "ProjectEntry").$$render($$result, { show: introFinished }, {}, {})}`}

	${validate_component(ContactDock, "ContactDock").$$render(
    $$result,
    {
      show: introFinished,
      color: lglobalTheme.primary
    },
    {},
    {}
  )}

	${``}
	${validate_component(Label, "Label").$$render(
    $$result,
    {
      text: "[This page is currently under active dev]",
      color: "#555",
      style: "left: 50%; transform: translate(-50%);"
    },
    {},
    {}
  )}
</div>`;
});
export {
  Page as default
};
