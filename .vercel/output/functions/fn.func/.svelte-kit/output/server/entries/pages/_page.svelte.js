import { c as create_ssr_component, d as add_attribute, e as escape, f as null_to_empty, h as createEventDispatcher, v as validate_component, o as onDestroy, m as missing_component } from "../../chunks/index2.js";
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
  return `${show ? `<svg${add_attribute("id", id ? id : "", 0)}${add_attribute("width", size ? size : "5vh", 0)}${add_attribute("height", size ? size : "5vh", 0)}${add_attribute("style", style ? style : "", 0)} viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="299" height="299"${add_attribute("stroke", color ? color : "#2400FF", 0)}></rect><rect x="73.9028" y="148.838" width="107.085" height="107.085" transform="rotate(-45 73.9028 148.838)"${add_attribute("stroke", color ? color : "#2400FF", 0)}></rect><rect x="74.1312" y="165.65" width="107.085" height="107.085" transform="rotate(-45 74.1312 165.65)"${add_attribute("stroke", color ? color : "#2400FF", 0)}></rect><rect x="73.7071" y="134.428" width="107.085" height="107.085" transform="rotate(-45 73.7071 134.428)"${add_attribute("stroke", color ? color : "#2400FF", 0)}></rect></svg>` : ``}`;
});
const Label_svelte_svelte_type_style_lang = "";
const css$9 = {
  code: ".label.svelte-s41se1{user-select:none;--webkit-user-select:none;position:absolute;display:flex;align-items:center;justify-content:center;top:0%;text-align:center}",
  map: null
};
function iu$1(val, valDefault) {
  return val != void 0 ? val : valDefault;
}
const Label = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  let { text } = $$props;
  let { className } = $$props;
  let { color } = $$props;
  let { style } = $$props;
  let { lightColor } = $$props;
  let { borderColor } = $$props;
  let { backgroundColor } = $$props;
  let { onClick } = $$props;
  let { onTouchStart } = $$props;
  let { onTouchEnd } = $$props;
  let { width } = $$props;
  let { height } = $$props;
  let { top } = $$props;
  let { tabletTop } = $$props;
  let { tabletLeft } = $$props;
  let { left } = $$props;
  let { horizontalFont } = $$props;
  let { verticalFont } = $$props;
  let { opacity } = $$props;
  let { backdropFilter } = $$props;
  let { borderRadius } = $$props;
  let { show = true } = $$props;
  let { tabletWidth } = $$props;
  let { desktopFont } = $$props;
  const root = document.documentElement;
  let fontSize = "2.4vh";
  let clientWidth = root.clientWidth;
  let clientHeight = root.clientHeight;
  function positionParser(mobilePosition, tabletPosition) {
    if (clientWidth > 1023 && tabletPosition != "auto") {
      return tabletPosition;
    } else {
      return mobilePosition;
    }
  }
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
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
  if ($$props.onTouchStart === void 0 && $$bindings.onTouchStart && onTouchStart !== void 0)
    $$bindings.onTouchStart(onTouchStart);
  if ($$props.onTouchEnd === void 0 && $$bindings.onTouchEnd && onTouchEnd !== void 0)
    $$bindings.onTouchEnd(onTouchEnd);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.top === void 0 && $$bindings.top && top !== void 0)
    $$bindings.top(top);
  if ($$props.tabletTop === void 0 && $$bindings.tabletTop && tabletTop !== void 0)
    $$bindings.tabletTop(tabletTop);
  if ($$props.tabletLeft === void 0 && $$bindings.tabletLeft && tabletLeft !== void 0)
    $$bindings.tabletLeft(tabletLeft);
  if ($$props.left === void 0 && $$bindings.left && left !== void 0)
    $$bindings.left(left);
  if ($$props.horizontalFont === void 0 && $$bindings.horizontalFont && horizontalFont !== void 0)
    $$bindings.horizontalFont(horizontalFont);
  if ($$props.verticalFont === void 0 && $$bindings.verticalFont && verticalFont !== void 0)
    $$bindings.verticalFont(verticalFont);
  if ($$props.opacity === void 0 && $$bindings.opacity && opacity !== void 0)
    $$bindings.opacity(opacity);
  if ($$props.backdropFilter === void 0 && $$bindings.backdropFilter && backdropFilter !== void 0)
    $$bindings.backdropFilter(backdropFilter);
  if ($$props.borderRadius === void 0 && $$bindings.borderRadius && borderRadius !== void 0)
    $$bindings.borderRadius(borderRadius);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.tabletWidth === void 0 && $$bindings.tabletWidth && tabletWidth !== void 0)
    $$bindings.tabletWidth(tabletWidth);
  if ($$props.desktopFont === void 0 && $$bindings.desktopFont && desktopFont !== void 0)
    $$bindings.desktopFont(desktopFont);
  $$result.css.add(css$9);
  return `
${show ? `<div${add_attribute("id", id, 0)} class="${escape(null_to_empty(`label ${className ? className : ""}`), true) + " svelte-s41se1"}" style="${"opacity: " + escape(iu$1(opacity, "1"), true) + "; font-size: " + escape(iu$1(fontSize, "2vh"), true) + "; left: " + escape(positionParser(iu$1(left, "auto"), iu$1(tabletLeft, "auto")), true) + "; top: " + escape(positionParser(iu$1(top, "auto"), iu$1(tabletTop, "auto")), true) + "; width: " + escape(positionParser(iu$1(width, "auto"), iu$1(tabletWidth, "auto")), true) + "; height: " + escape(iu$1(height, "auto"), true) + "; color: " + escape(iu$1(color, "#FFF"), true) + "; background-color: " + escape(iu$1(backgroundColor, "#2400FF00"), true) + "; border-radius: " + escape(parseFloat(iu$1(borderRadius, "0px").substring(0, iu$1(borderRadius, "0px").length - 2)) * 100 / 360 / 100 * clientHeight + "px;", true) + " backdrop-filter: " + escape(iu$1(backdropFilter, "blur(0px)"), true) + "; --webkit-backdrop-filter: " + escape(iu$1(backdropFilter, "blur(0px)"), true) + "; " + escape(iu$1(style, ""), true)}">${escape(text ? text : "")}
		${slots.default ? slots.default({}) : ``}</div>` : ``}`;
});
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
  return `
<div${add_attribute("id", id, 0)} class="${escape(null_to_empty(`button ${iu(className, "")}`), true) + " svelte-pt98vu"}" style="${"opacity: " + escape(iu(opacity, "1"), true) + "; font-size: " + escape(iu(fontSize, "2vh"), true) + "; left: " + escape(positionParser(iu(left, "auto"), iu(tabletLeft, "auto")), true) + "; top: " + escape(positionParser(iu(top, "auto"), iu(tabletTop, "auto")), true) + "; width: " + escape(iu(width, "auto"), true) + "; height: " + escape(iu(height, "auto"), true) + "; color: " + escape(iu(color, "#FFF"), true) + "; background-color: " + escape(iu(backgroundColor, "#0500FF00"), true) + "; border: solid 1px " + escape(iu(borderColor, "#0500FF"), true) + "; border-radius: " + escape(parseFloat(iu(borderRadius, "0px").substring(0, iu(borderRadius, "0px").length - 2)) * 100 / 360 / 100 * clientHeight + "px;", true) + "; backdrop-filter: " + escape(iu(backdropFilter, "blur(0px)"), true) + "; --webkit-backdrop-filter: " + escape(iu(backdropFilter, "blur(0px)"), true) + "; " + escape(iu(style, ""), true)}">${escape(label ? label : "")}
	${slots.default ? slots.default({}) : ``}
</div>`;
});
const LogoMin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "2vh" } = $$props;
  let { style = "" } = $$props;
  let { color = "#2400FF" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  return `<svg${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} style="${"position: absolute; " + escape(style, true)}" viewBox="0 0 52 62" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1.10554" y="30.6127" width="35.0285" height="35.0285" transform="rotate(-45 1.10554 30.6127)"${add_attribute("stroke", color, 0)}></rect><rect x="1.18172" y="36.2166" width="35.0285" height="35.0285" transform="rotate(-45 1.18172 36.2166)"${add_attribute("stroke", color, 0)}></rect><rect x="1.0406" y="25.8093" width="35.0285" height="35.0285" transform="rotate(-45 1.0406 25.8093)"${add_attribute("stroke", color, 0)}></rect></svg>`;
});
const Nav_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: ".navContainer.svelte-qqoesr{position:absolute;top:0.555555556%;left:0.3125%;width:14.739583333%;height:24.259259259%}.titleContainer.svelte-qqoesr{position:absolute;top:0%;left:0%;width:100%;height:38.167938931%;border:solid 1px #2400ff;display:flex;align-items:center;justify-content:center}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { primaryColor = "#2400FF" } = $$props;
  let { secondaryColor = "#1300AA" } = $$props;
  if ($$props.primaryColor === void 0 && $$bindings.primaryColor && primaryColor !== void 0)
    $$bindings.primaryColor(primaryColor);
  if ($$props.secondaryColor === void 0 && $$bindings.secondaryColor && secondaryColor !== void 0)
    $$bindings.secondaryColor(secondaryColor);
  $$result.css.add(css$7);
  return `<div class="navContainer svelte-qqoesr"><div class="titleContainer svelte-qqoesr" style="${"border-color: " + escape(primaryColor, true) + ";"}">${validate_component(Label, "Label").$$render(
    $$result,
    {
      text: "undefined1raven _dev_",
      width: "60.070671378%",
      color: primaryColor,
      style: "font-size: 2vh;",
      left: "33.085501859%",
      desktopFont: "15px"
    },
    {},
    {}
  )}
        ${validate_component(LogoMin, "LogoMin").$$render(
    $$result,
    {
      size: "7vh",
      style: "left: 5%;",
      color: primaryColor
    },
    {},
    {}
  )}</div>
    ${validate_component(Button, "Button").$$render(
    $$result,
    {
      label: "Projects",
      top: "46.564885496%",
      color: primaryColor,
      borderColor: primaryColor,
      backgroundColor: primaryColor + "20",
      width: "100%",
      height: "13.740458015%",
      desktopFont: "20px"
    },
    {},
    {}
  )}
    ${validate_component(Button, "Button").$$render(
    $$result,
    {
      label: "Contact",
      top: "66.41221374%",
      color: primaryColor,
      borderColor: primaryColor,
      backgroundColor: primaryColor + "00",
      width: "100%",
      height: "13.740458015%",
      desktopFont: "20px"
    },
    {},
    {}
  )}
    ${validate_component(Button, "Button").$$render(
    $$result,
    {
      label: "Skills",
      top: "86.259541985%",
      color: primaryColor,
      borderColor: primaryColor,
      backgroundColor: primaryColor + "00",
      width: "100%",
      height: "13.740458015%",
      desktopFont: "20px"
    },
    {},
    {}
  )}
</div>`;
});
const RingRelayLogoMin_svelte_svelte_type_style_lang = "";
const css$6 = {
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
  $$result.css.add(css$6);
  return `<svg${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} style="${"position: absolute; " + escape(style, true)}" viewBox="0 0 56 46" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.724107" width="32.0353" height="31.9222" transform="matrix(0.724107 -0.689687 0.724107 0.689687 0.199776 23.2834)"${add_attribute("fill", monochrome ? "#444" : "#6100DC", 0)} fill-opacity="0.2"${add_attribute("stroke", monochrome ? "#444" : "#6100DC", 0)} stroke-width="0.5"${add_attribute("opacity", opacities[0], 0)} class="svelte-1gs0khx"></rect><rect x="0.724107" width="32.0353" height="31.9222" transform="matrix(0.724107 -0.689687 0.724107 0.689687 8.43952 23.7934)"${add_attribute("fill", monochrome ? "#444" : "#6100DC", 0)} fill-opacity="0.2"${add_attribute("stroke", monochrome ? "#444" : "#6100DC", 0)} stroke-width="0.5"${add_attribute("opacity", opacities[1], 0)} class="svelte-1gs0khx"></rect><path d="M36.4576 22.7316C36.4576 27.0035 32.8145 30.5077 28.2685 30.5077C23.7226 30.5077 20.0794 27.0035 20.0794 22.7316C20.0794 18.4597 23.7226 14.9555 28.2685 14.9555C32.8145 14.9555 36.4576 18.4597 36.4576 22.7316Z"${add_attribute("stroke", monochrome ? "#444" : "#6100DC", 0)} stroke-width="0.5" class="svelte-1gs0khx"></path></svg>`;
});
const ProjectEagleLogo_svelte_svelte_type_style_lang = "";
const css$5 = {
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
  $$result.css.add(css$5);
  return `<svg${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} style="${"position: absolute; " + escape(style, true)}" viewBox="0 0 300 318" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="103.289" height="103.289" transform="matrix(0.726571 -0.687092 0.726571 0.687092 75 151.261)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)} fill-opacity="0.01"${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect x="43.8677" width="56.6038" height="1.3382"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[1], 0)} class="svelte-7pqnpm"></rect><rect width="55.0874" height="1.37719" transform="matrix(0.726571 -0.687092 0.726571 0.687092 0 39.1887)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)} class="svelte-7pqnpm"></rect><rect width="55.0874" height="1.37719" transform="matrix(0.726571 0.687092 -0.726571 0.687092 104.301 1.3383)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)} class="svelte-7pqnpm"></rect><rect y="97.6887" width="53.5281" height="1.41509" transform="rotate(-90 0 97.6887)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)} class="svelte-7pqnpm"></rect><rect width="55.0874" height="1.37719" transform="matrix(-0.726571 -0.687092 0.726571 -0.687092 40.0259 139.162)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[5], 0)} class="svelte-7pqnpm"></rect><rect x="43.8677" width="56.6038" height="1.3382"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[6], 0)} class="svelte-7pqnpm"></rect><rect width="55.0874" height="1.37719" transform="matrix(0.726571 -0.687092 0.726571 0.687092 0 39.1887)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[7], 0)} class="svelte-7pqnpm"></rect><rect width="56.99" height="1.37719" transform="matrix(0.726571 0.687092 -0.726571 0.687092 104.301 1.3383)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[8], 0)} class="svelte-7pqnpm"></rect><rect x="298.585" y="99.027" width="53.5281" height="1.41509" transform="rotate(-90 298.585 99.027)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[9], 0)} class="svelte-7pqnpm"></rect><rect x="199.528" y="1.3383" width="56.6038" height="1.3382"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[10], 0)} class="svelte-7pqnpm"></rect><rect width="55.0874" height="1.37719" transform="matrix(0.726571 -0.687092 0.726571 0.687092 155.661 40.5265)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[11], 0)} class="svelte-7pqnpm"></rect><rect width="55.0874" height="1.37719" transform="matrix(0.726571 0.687092 -0.726571 0.687092 259.964 2.67641)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[12], 0)} class="svelte-7pqnpm"></rect><rect width="55.0874" height="1.37719" transform="matrix(-0.726571 0.687092 -0.726571 -0.687092 299.987 102.65)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[13], 0)} class="svelte-7pqnpm"></rect><rect width="52.333" height="1.37719" transform="matrix(-0.726571 -0.687092 0.726571 -0.687092 193.855 141.446)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[14], 0)} class="svelte-7pqnpm"></rect><rect width="52.333" height="1.37719" transform="matrix(-0.726571 0.687092 -0.726571 -0.687092 143.741 105.326)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[15], 0)} class="svelte-7pqnpm"></rect><rect y="255.597" width="53.5281" height="1.41509" transform="rotate(-90 0 255.597)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[16], 0)} class="svelte-7pqnpm"></rect><rect x="100.459" y="298.408" width="56.6038" height="1.3382" transform="rotate(-180 100.459 298.408)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[17], 0)} class="svelte-7pqnpm"></rect><rect width="55.0874" height="1.37719" transform="matrix(-0.726571 0.687092 -0.726571 -0.687092 144.327 259.219)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[18], 0)} class="svelte-7pqnpm"></rect><rect width="55.0874" height="1.37719" transform="matrix(-0.726571 -0.687092 0.726571 -0.687092 40.0259 297.07)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[19], 0)} class="svelte-7pqnpm"></rect><rect width="55.0874" height="1.37719" transform="matrix(0.726571 -0.687092 0.726571 0.687092 0 197.097)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[20], 0)} class="svelte-7pqnpm"></rect><rect width="52.333" height="1.37719" transform="matrix(0.726571 0.687092 -0.726571 0.687092 105.718 160.585)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[21], 0)} class="svelte-7pqnpm"></rect><rect x="298.585" y="256.935" width="53.5281" height="1.41509" transform="rotate(-90 298.585 256.935)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[22], 0)} class="svelte-7pqnpm"></rect><path d="M198.114 161.923V160.585H215.095L213.68 161.923H198.114Z"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[23], 0)} class="svelte-7pqnpm"></path><path d="M198.114 140.511V141.85H215.095L213.68 140.511H198.114Z"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[24], 0)} class="svelte-7pqnpm"></path><path d="M101.886 160.584V159.246H83.49L85.023 160.584H101.886Z"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[25], 0)} class="svelte-7pqnpm"></path><path d="M101.886 140.511V141.85H84.9051L86.3202 140.511H101.886Z"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[26], 0)} class="svelte-7pqnpm"></path><path d="M157.076 101.703H155.661V85.645L157.076 86.9832V101.703Z"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></path><path d="M142.926 101.703H144.341V85.645L142.926 86.9832V101.703Z"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></path><path d="M157.076 200.731H155.661V216.789L157.076 215.451V200.731Z"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></path><path d="M142.926 200.731H144.341V216.789L142.926 215.451V200.731Z"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></path><rect width="52.333" height="1.37719" transform="matrix(0.726571 -0.687092 0.726571 0.687092 155.661 196.542)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect width="55.0874" height="1.37719" transform="matrix(0.726571 0.687092 -0.726571 0.687092 259.964 160.585)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect x="256.12" y="299.746" width="56.6038" height="1.3382" transform="rotate(-180 256.12 299.746)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect width="55.0874" height="1.37719" transform="matrix(-0.726571 0.687092 -0.726571 -0.687092 299.987 260.558)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect width="56.8487" height="1.37719" transform="matrix(-0.726571 -0.687092 0.726571 -0.687092 195.687 298.408)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect x="0.726571" width="38.9384" height="38.9384" transform="matrix(0.726571 -0.687092 0.726571 0.687092 121.19 151.055)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)} fill-opacity="0.5"${add_attribute("stroke", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect width="103.289" height="103.289" transform="matrix(0.726571 -0.687092 0.726571 0.687092 75 168.658)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)} fill-opacity="0.01"${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect x="43.8677" y="17.3967" width="56.6038" height="1.3382"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect width="55.0874" height="1.37719" transform="matrix(0.726571 -0.687092 0.726571 0.687092 0 56.5851)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect width="55.0874" height="1.37719" transform="matrix(0.726571 0.687092 -0.726571 0.687092 104.301 18.7348)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect y="115.086" width="53.5281" height="1.41509" transform="rotate(-90 0 115.086)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect width="55.0874" height="1.37719" transform="matrix(-0.726571 -0.687092 0.726571 -0.687092 40.0259 156.558)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect x="43.8677" y="17.3967" width="56.6038" height="1.3382"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect width="55.0874" height="1.37719" transform="matrix(0.726571 -0.687092 0.726571 0.687092 0 56.5851)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect width="56.99" height="1.37719" transform="matrix(0.726571 0.687092 -0.726571 0.687092 104.301 18.7348)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect x="298.585" y="116.424" width="53.5281" height="1.41509" transform="rotate(-90 298.585 116.424)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect x="199.528" y="18.7348" width="56.6038" height="1.3382"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect width="55.0874" height="1.37719" transform="matrix(0.726571 -0.687092 0.726571 0.687092 155.661 57.9234)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect width="55.0874" height="1.37719" transform="matrix(0.726571 0.687092 -0.726571 0.687092 259.964 20.0731)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect width="55.0874" height="1.37719" transform="matrix(-0.726571 0.687092 -0.726571 -0.687092 299.987 120.046)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect width="52.333" height="1.37719" transform="matrix(-0.726571 -0.687092 0.726571 -0.687092 193.855 158.843)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect width="52.333" height="1.37719" transform="matrix(-0.726571 0.687092 -0.726571 -0.687092 143.741 122.723)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect y="272.993" width="53.5281" height="1.41509" transform="rotate(-90 0 272.993)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect x="100.459" y="315.805" width="56.6038" height="1.3382" transform="rotate(-180 100.459 315.805)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect width="55.0874" height="1.37719" transform="matrix(-0.726571 0.687092 -0.726571 -0.687092 144.327 276.616)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect width="55.0874" height="1.37719" transform="matrix(-0.726571 -0.687092 0.726571 -0.687092 40.0259 314.466)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect width="55.0874" height="1.37719" transform="matrix(0.726571 -0.687092 0.726571 0.687092 0 214.493)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect width="52.333" height="1.37719" transform="matrix(0.726571 0.687092 -0.726571 0.687092 105.718 177.981)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect x="298.585" y="274.332" width="53.5281" height="1.41509" transform="rotate(-90 298.585 274.332)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><path d="M198.114 179.319V177.981H215.095L213.68 179.319H198.114Z"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></path><path d="M198.114 157.908V159.246H215.095L213.68 157.908H198.114Z"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></path><path d="M101.886 177.981V176.643H83.49L85.023 177.981H101.886Z"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></path><path d="M101.886 157.908V159.246H84.9051L86.3202 157.908H101.886Z"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></path><path d="M157.076 119.1H155.661V103.042L157.076 104.38V119.1Z"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></path><path d="M142.926 119.1H144.341V103.042L142.926 104.38V119.1Z"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></path><path d="M157.076 218.127H155.661V234.186L157.076 232.847V218.127Z"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></path><path d="M142.926 218.127H144.341V234.186L142.926 232.847V218.127Z"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></path><rect width="52.333" height="1.37719" transform="matrix(0.726571 -0.687092 0.726571 0.687092 155.661 213.939)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect width="55.0874" height="1.37719" transform="matrix(0.726571 0.687092 -0.726571 0.687092 259.964 177.981)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect x="256.12" y="317.143" width="56.6038" height="1.3382" transform="rotate(-180 256.12 317.143)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect width="55.0874" height="1.37719" transform="matrix(-0.726571 0.687092 -0.726571 -0.687092 299.987 277.954)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect width="56.8487" height="1.37719" transform="matrix(-0.726571 -0.687092 0.726571 -0.687092 195.687 315.805)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect><rect x="0.726571" width="38.9384" height="38.9384" transform="matrix(0.726571 -0.687092 0.726571 0.687092 121.19 168.452)"${add_attribute("fill", monochrome ? "#444" : "#0000FF", 0)} fill-opacity="0.5"${add_attribute("stroke", monochrome ? "#444" : "#0000FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-7pqnpm"></rect></svg>`;
});
const DroneBuzzLogo_svelte_svelte_type_style_lang = "";
const css$4 = {
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
  $$result.css.add(css$4);
  return `<svg${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} style="${"position: absolute; " + escape(style, true)}" viewBox="0 0 86 84" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_8_1080)"><mask id="mask0_8_1080" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="84" height="84"><path d="M83.9228 0.338028H0.746582V83.5143H83.9228V0.338028Z" fill="white" class="svelte-1pyxg36"></path></mask><g mask="url(#mask0_8_1080)"><path d="M42.002 134.418C73.0554 134.418 98.2291 109.244 98.2291 78.191C98.2291 47.1376 73.0554 21.9639 42.002 21.9639C10.9486 21.9639 -14.2251 47.1376 -14.2251 78.191C-14.2251 109.244 10.9486 134.418 42.002 134.418Z"${add_attribute("stroke", monochrome ? "#444" : "#5200FF", 0)}${add_attribute("opacity", opacities[0], 0)} class="svelte-1pyxg36"></path><path d="M42.6676 142.403C73.7209 142.403 98.8947 117.229 98.8947 86.1759C98.8947 55.1225 73.7209 29.9488 42.6676 29.9488C11.6142 29.9488 -13.5596 55.1225 -13.5596 86.1759C-13.5596 117.229 11.6142 142.403 42.6676 142.403Z"${add_attribute("stroke", monochrome ? "#444" : "#5200FF", 0)}${add_attribute("opacity", opacities[1], 0)} class="svelte-1pyxg36"></path><path d="M42.6676 149.723C73.7209 149.723 98.8947 124.549 98.8947 93.4954C98.8947 62.442 73.7209 37.2683 42.6676 37.2683C11.6142 37.2683 -13.5596 62.442 -13.5596 93.4954C-13.5596 124.549 11.6142 149.723 42.6676 149.723Z"${add_attribute("stroke", monochrome ? "#444" : "#5200FF", 0)}${add_attribute("opacity", opacities[2], 0)} class="svelte-1pyxg36"></path><path d="M42.6676 156.377C73.7209 156.377 98.8947 131.203 98.8947 100.15C98.8947 69.0961 73.7209 43.9224 42.6676 43.9224C11.6142 43.9224 -13.5596 69.0961 -13.5596 100.15C-13.5596 131.203 11.6142 156.377 42.6676 156.377Z"${add_attribute("stroke", monochrome ? "#444" : "#5200FF", 0)}${add_attribute("opacity", opacities[3], 0)} class="svelte-1pyxg36"></path><path d="M95.9005 108.467C126.954 108.467 152.128 83.2934 152.128 52.24C152.128 21.1866 126.954 -3.98714 95.9005 -3.98714C64.8471 -3.98714 39.6733 21.1866 39.6733 52.24C39.6733 83.2934 64.8471 108.467 95.9005 108.467Z"${add_attribute("stroke", monochrome ? "#444" : "#5200FF", 0)}${add_attribute("opacity", opacities[4], 0)} class="svelte-1pyxg36"></path><path d="M96.566 116.452C127.619 116.452 152.793 91.2783 152.793 60.2249C152.793 29.1715 127.619 3.99779 96.566 3.99779C65.5126 3.99779 40.3389 29.1715 40.3389 60.2249C40.3389 91.2783 65.5126 116.452 96.566 116.452Z"${add_attribute("stroke", monochrome ? "#444" : "#5200FF", 0)}${add_attribute("opacity", opacities[5], 0)} class="svelte-1pyxg36"></path><path d="M96.566 123.772C127.619 123.772 152.793 98.5978 152.793 67.5444C152.793 36.491 127.619 11.3173 96.566 11.3173C65.5126 11.3173 40.3389 36.491 40.3389 67.5444C40.3389 98.5978 65.5126 123.772 96.566 123.772Z"${add_attribute("stroke", monochrome ? "#444" : "#5200FF", 0)}${add_attribute("opacity", opacities[6], 0)} class="svelte-1pyxg36"></path><path d="M96.566 130.426C127.619 130.426 152.793 105.252 152.793 74.1985C152.793 43.1451 127.619 17.9714 96.566 17.9714C65.5126 17.9714 40.3389 43.1451 40.3389 74.1985C40.3389 105.252 65.5126 130.426 96.566 130.426Z"${add_attribute("stroke", monochrome ? "#444" : "#5200FF", 0)}${add_attribute("opacity", opacities[7], 0)} class="svelte-1pyxg36"></path><path d="M2.07771 155.046C33.1311 155.046 58.3048 129.872 58.3048 98.8187C58.3048 67.7653 33.1311 42.5916 2.07771 42.5916C-28.9757 42.5916 -54.1494 67.7653 -54.1494 98.8187C-54.1494 129.872 -28.9757 155.046 2.07771 155.046Z"${add_attribute("stroke", monochrome ? "#444" : "#5200FF", 0)}${add_attribute("opacity", opacities[8], 0)} class="svelte-1pyxg36"></path><path d="M2.74275 163.031C33.7961 163.031 58.9699 137.857 58.9699 106.804C58.9699 75.7502 33.7961 50.5765 2.74275 50.5765C-28.3106 50.5765 -53.4844 75.7502 -53.4844 106.804C-53.4844 137.857 -28.3106 163.031 2.74275 163.031Z"${add_attribute("stroke", monochrome ? "#444" : "#5200FF", 0)}${add_attribute("opacity", opacities[9], 0)} class="svelte-1pyxg36"></path><path d="M2.74275 170.35C33.7961 170.35 58.9699 145.176 58.9699 114.123C58.9699 83.0697 33.7961 57.896 2.74275 57.896C-28.3106 57.896 -53.4844 83.0697 -53.4844 114.123C-53.4844 145.176 -28.3106 170.35 2.74275 170.35Z"${add_attribute("stroke", monochrome ? "#444" : "#5200FF", 0)}${add_attribute("opacity", opacities[10], 0)} class="svelte-1pyxg36"></path><path d="M2.74275 177.004C33.7961 177.004 58.9699 151.831 58.9699 120.777C58.9699 89.7238 33.7961 64.5501 2.74275 64.5501C-28.3106 64.5501 -53.4844 89.7238 -53.4844 120.777C-53.4844 151.831 -28.3106 177.004 2.74275 177.004Z"${add_attribute("stroke", monochrome ? "#444" : "#5200FF", 0)}${add_attribute("opacity", opacities[11], 0)} class="svelte-1pyxg36"></path><path d="M-29.1967 22.6293C1.85667 22.6293 27.0304 -2.54449 27.0304 -33.5979C27.0304 -64.6513 1.85667 -89.825 -29.1967 -89.825C-60.2501 -89.825 -85.4238 -64.6513 -85.4238 -33.5979C-85.4238 -2.54449 -60.2501 22.6293 -29.1967 22.6293Z"${add_attribute("stroke", monochrome ? "#444" : "#5200FF", 0)}${add_attribute("opacity", opacities[12], 0)} class="svelte-1pyxg36"></path><path d="M-28.5312 30.6142C2.5222 30.6142 27.6959 5.44043 27.6959 -25.613C27.6959 -56.6663 2.5222 -81.8401 -28.5312 -81.8401C-59.5846 -81.8401 -84.7583 -56.6663 -84.7583 -25.613C-84.7583 5.44043 -59.5846 30.6142 -28.5312 30.6142Z"${add_attribute("stroke", monochrome ? "#444" : "#5200FF", 0)}${add_attribute("opacity", opacities[13], 0)} class="svelte-1pyxg36"></path><path d="M-28.5312 37.9337C2.5222 37.9337 27.6959 12.7599 27.6959 -18.2934C27.6959 -49.3468 2.5222 -74.5206 -28.5312 -74.5206C-59.5846 -74.5206 -84.7583 -49.3468 -84.7583 -18.2934C-84.7583 12.7599 -59.5846 37.9337 -28.5312 37.9337Z"${add_attribute("stroke", monochrome ? "#444" : "#5200FF", 0)}${add_attribute("opacity", opacities[14], 0)} class="svelte-1pyxg36"></path><path d="M-28.5312 44.5878C2.5222 44.5878 27.6959 19.414 27.6959 -11.6393C27.6959 -42.6927 2.5222 -67.8665 -28.5312 -67.8665C-59.5846 -67.8665 -84.7583 -42.6927 -84.7583 -11.6393C-84.7583 19.414 -59.5846 44.5878 -28.5312 44.5878Z"${add_attribute("stroke", monochrome ? "#444" : "#5200FF", 0)}${add_attribute("opacity", opacities[15], 0)} class="svelte-1pyxg36"></path><path d="M58.9014 23.4588L73.9782 34.1789L58.5376 41.9545L58.9014 23.4588Z"${add_attribute("fill", monochrome ? "#444" : "#4200FF", 0)} fill-opacity="0.8" class="svelte-1pyxg36"></path><path d="M60.2096 26.0557L75.2861 36.7759L59.8457 44.5514L60.2096 26.0557Z"${add_attribute("fill", monochrome ? "#444" : "#4200FF", 0)} fill-opacity="0.8" class="svelte-1pyxg36"></path><path d="M28.2926 15.4738L43.3692 26.194L27.9287 33.9696L28.2926 15.4738Z"${add_attribute("fill", monochrome ? "#444" : "#5200FF", 0)} fill-opacity="0.8" class="svelte-1pyxg36"></path><path d="M29.6007 18.0708L44.6773 28.7909L29.2368 36.5665L29.6007 18.0708Z"${add_attribute("fill", monochrome ? "#444" : "#5200FF", 0)} fill-opacity="0.8" class="svelte-1pyxg36"></path><path d="M18.5402 46.0827L33.6168 56.8028L18.1763 64.5784L18.5402 46.0827Z"${add_attribute("fill", monochrome ? "#444" : "#4200FF", 0)} fill-opacity="0.8" class="svelte-1pyxg36"></path><path d="M19.5617 48.6797L34.6383 59.3998L19.1978 67.1751L19.5617 48.6797Z"${add_attribute("fill", monochrome ? "#444" : "#4200FF", 0)} fill-opacity="0.8" class="svelte-1pyxg36"></path></g></g><defs><clipPath id="clip0_8_1080"><rect width="84.507" height="83.1762" fill="white" transform="translate(0.746582 0.338028)"></rect></clipPath></defs></svg>`;
});
const ProjectsNav_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".logoContainer.svelte-1ef118h{position:absolute;width:100%;height:30.115131579%}.projectsNavContainer.svelte-1ef118h{position:absolute;top:0.555555556%;left:94.479166667%;width:5.208333333%;height:28.148148148%}",
  map: null
};
const ProjectsNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { selectedProjectID } = $$props;
  let ringRelayMonochromeOverride = false;
  let projectEagleMonochromeOverride = false;
  let droneBuzzMonochromeOverride = false;
  if ($$props.selectedProjectID === void 0 && $$bindings.selectedProjectID && selectedProjectID !== void 0)
    $$bindings.selectedProjectID(selectedProjectID);
  $$result.css.add(css$3);
  return `<div class="projectsNavContainer svelte-1ef118h">
	<div class="logoContainer svelte-1ef118h" style="border: solid 0px #6100FF;">${validate_component(RingRelayLogoMin, "RingRelayLogoMin").$$render(
    $$result,
    {
      size: "95%",
      monochrome: !(selectedProjectID == "RingRelay") && !ringRelayMonochromeOverride,
      style: "top: 0%;",
      animated: ringRelayMonochromeOverride
    },
    {},
    {}
  )}</div>
	<div class="logoContainer svelte-1ef118h" style="border: solid 0px #444; top: 34.868421053%;">${validate_component(ProjectEagleLogo, "ProjectEagleLogo").$$render(
    $$result,
    {
      size: "95%",
      monochrome: !(selectedProjectID == "ProjectEagle") && !projectEagleMonochromeOverride,
      style: "top: 0%;",
      animated: projectEagleMonochromeOverride
    },
    {},
    {}
  )}</div>
	<div class="logoContainer svelte-1ef118h" style="border: solid 0px #444; top: 69.736842105%;">${validate_component(DroneBuzzLogo, "DroneBuzzLogo").$$render(
    $$result,
    {
      size: "100%",
      monochrome: !(selectedProjectID == "DroneBuzz") && !droneBuzzMonochromeOverride,
      style: "top: 0%;",
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
  return `<svg style="${"position: absolute; " + escape(style, true)}" xmlns="http://www.w3.org/2000/svg" width="2.7vh" height="2.7vh" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"${add_attribute("fill", color, 0)}></path></svg>`;
});
const ContactDock_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".contactDockBorderTop.svelte-8029zn{position:absolute;left:0%;top:0%;width:100%;height:1.960784314%}.contactDockContainer.svelte-8029zn{position:absolute;top:85.648148148%;left:50%;transform:translate(-50%);width:20.208333333%;height:9.444444444%;display:flex;align-items:center;justify-content:center}",
  map: null
};
const ContactDock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  $$result.css.add(css$2);
  return `<div class="contactDockContainer svelte-8029zn"><div class="contactDockBorderTop svelte-8029zn" style="${"background: radial-gradient(50% 50% at 50% 50%, " + escape(color, true) + " 0%, rgba(97, 0, 255, 0) 100%);"}"></div>
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
      width: "calc(47.680412371% - 16%)",
      height: "44.117647059%",
      left: "0%",
      top: "55.882352941%",
      color,
      style: "justify-content: end; padding-right: 16%;",
      borderColor: color,
      borderRadius: "3px"
    },
    {},
    {
      default: () => {
        return `<div>${validate_component(GithubLogo, "GithubLogo").$$render($$result, { color, style: "left: 12%; top: 20%;" }, {}, {})}</div>`;
      }
    }
  )}</a>
	<a href="https://linkedin.com/in/dominic-zlat-614253233" target="_blank">${validate_component(Button, "Button").$$render(
    $$result,
    {
      label: "LinkedIn",
      width: "calc(47.680412371% - 12%)",
      height: "44.117647059%",
      left: "52.319587629%",
      top: "55.882352941%",
      color,
      borderColor: color,
      style: "justify-content: end; padding-right: 12%;",
      borderRadius: "3px"
    },
    {},
    {
      default: () => {
        return `${validate_component(LinkedLogo, "LinkedLogo").$$render($$result, { color, style: "left: 12%;" }, {}, {})}`;
      }
    }
  )}</a>
</div>`;
});
const ProjectEntry_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".transitionAll2{transition:all linear 0.3s}.transitionAll1{transition:all linear 0.15s}@keyframes svelte-eokk6b-fadeIn{0%{opacity:0}100%{opacity:1}}.alignHorizontalAlign{left:50%;transform:translate(-50%)}.logoContainer.svelte-eokk6b{position:absolute;top:0%;left:50%;transform:translate(-50%);width:100%;height:41.551246537%}#title{letter-spacing:2vh;transform:translate(-50%);text-align:center}.projectOverviewContainer.svelte-eokk6b{position:absolute;top:9.814814815%;left:50%;transform:translate(-50%);width:45.729166667%;height:66.851851852%}#gradientBkg.svelte-eokk6b{position:absolute;top:0%;left:0%;width:100%;height:100%;background:radial-gradient(\n			60.7% 60.73% at 50% 24.65%,\n			rgba(97, 0, 220, 0.2) 0%,\n			rgba(53, 0, 122, 0.1) 100%\n		)}",
  map: null
};
const ProjectEntry = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { show } = $$props;
  let selectedProjectID = "RingRelay";
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
      appURL: "https://ring-relay.live"
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
      appURL: null
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
      appURL: "https://dronebuzz.vercel.app"
    }
  };
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  $$result.css.add(css$1);
  return `${show ? `<div id="gradientBkg" style="${"background: radial-gradient( 60.7% 60.73% at 50% 24.65%, " + escape(contentHash[selectedProjectID].gradientColorPrimary, true) + " 0%, " + escape(contentHash[selectedProjectID].gradientColorSecondary, true) + " 100% ); transition: background ease-in-out 0.2s;"}" class="svelte-eokk6b"></div>
	${validate_component(Nav, "Nav").$$render(
    $$result,
    {
      primaryColor: contentHash[selectedProjectID].themeColorPrimary
    },
    {},
    {}
  )}
	<div class="projectOverviewContainer svelte-eokk6b"><div class="logoContainer svelte-eokk6b">${validate_component(contentHash[selectedProjectID].deco || missing_component, "svelte:component").$$render(
    $$result,
    {
      size: "100%",
      style: "left: 50%; transform: translate(-50%); top: 0%;",
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
      text: contentHash[selectedProjectID].title,
      color: contentHash[selectedProjectID].themeColorPrimary,
      style: "font-size: 4.5vh;",
      left: "50%",
      top: "56.232686981%",
      width: "100%"
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
      style: "font-size: 2.5vh;",
      left: "50%",
      top: "71.191135734%",
      width: "100%"
    },
    {},
    {}
  )}
		<a${add_attribute("href", contentHash[selectedProjectID].appURL, 0)} target="_blank">${validate_component(Button, "Button").$$render(
    $$result,
    {
      color: contentHash[selectedProjectID].themeColorPrimary,
      top: "calc(78.947368421% + 10%)",
      left: "23.348519362%",
      desktopFont: "25px",
      borderColor: contentHash[selectedProjectID].themeColorPrimary,
      width: "25.056947608%",
      height: "8.033240997%",
      className: "transitionAll2",
      label: "Go to app"
    },
    {},
    {
      default: () => {
        return `${validate_component(Label, "Label").$$render(
          $$result,
          {
            show: contentHash[selectedProjectID].appURL === null,
            color: "#444",
            top: "72%",
            desktopFont: "14px",
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
      top: "calc(78.947368421% + 10%)",
      left: "51.480637813%",
      desktopFont: "25px",
      borderColor: contentHash[selectedProjectID].themeColorPrimary,
      width: "25.056947608%",
      height: "8.033240997%",
      className: "transitionAll2",
      label: "View Code"
    },
    {},
    {}
  )}</a>
		${validate_component(Button, "Button").$$render(
    $$result,
    {
      color: contentHash[selectedProjectID].themeColorPrimary,
      top: "calc(91.966759003% + 10%)",
      left: "23.348519362%",
      desktopFont: "25px",
      horizontalFont: "7.5vh",
      borderColor: contentHash[selectedProjectID].themeColorPrimary,
      width: "53.189066059%",
      className: "transitionAll2",
      height: "8.033240997%",
      label: "Details"
    },
    {},
    {}
  )}</div>
	${validate_component(ProjectsNav, "ProjectsNav").$$render($$result, { selectedProjectID }, {}, {})}
	${validate_component(ContactDock, "ContactDock").$$render(
    $$result,
    {
      color: contentHash[selectedProjectID].themeColorPrimary
    },
    {},
    {}
  )}` : ``}`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".introText{letter-spacing:0.1vh}#mainLogo{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}body{background-color:#000005;font-family:'Electrolize', sans-serif;overflow:hidden}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let iniAniDecoShowArr = [false, false, false, false, false];
  let introFinished = false;
  $$result.css.add(css);
  return `<div id="root">${validate_component(Logo, "Logo").$$render(
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
  )}
	${validate_component(ProjectEntry, "ProjectEntry").$$render($$result, { show: introFinished }, {}, {})}
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
