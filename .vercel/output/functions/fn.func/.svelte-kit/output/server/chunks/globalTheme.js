import { c as create_ssr_component, b as add_attribute, e as escape, n as null_to_empty } from "./index2.js";
import { w as writable } from "./index.js";
const root = document.documentElement;
writable({ width: root.clientWidth, height: root.clientHeight });
const Label_svelte_svelte_type_style_lang = "";
const css = {
  code: ".label.svelte-s41se1{user-select:none;--webkit-user-select:none;position:absolute;display:flex;align-items:center;justify-content:center;top:0%;text-align:center}",
  map: null
};
function iu(val, valDefault) {
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
  const root2 = document.documentElement;
  let fontSize = "2.4vh";
  let clientWidth = root2.clientWidth;
  let clientHeight = root2.clientHeight;
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
  $$result.css.add(css);
  return `
${show ? `<div${add_attribute("id", id, 0)} class="${escape(null_to_empty(`label ${className ? className : ""}`), true) + " svelte-s41se1"}" style="${"opacity: " + escape(iu(opacity, "1"), true) + "; font-size: " + escape(iu(fontSize, "2vh"), true) + "; left: " + escape(positionParser(iu(left, "auto"), iu(tabletLeft, "auto")), true) + "; top: " + escape(positionParser(iu(top, "auto"), iu(tabletTop, "auto")), true) + "; width: " + escape(positionParser(iu(width, "auto"), iu(tabletWidth, "auto")), true) + "; height: " + escape(iu(height, "auto"), true) + "; color: " + escape(iu(color, "#FFF"), true) + "; background-color: " + escape(iu(backgroundColor, "#2400FF00"), true) + "; border: solid 1px " + escape(iu(borderColor, "#FFFFFF00"), true) + "; border-radius: " + escape(parseFloat(iu(borderRadius, "0px").substring(0, iu(borderRadius, "0px").length - 2)) * 100 / 360 / 100 * clientHeight + "px;", true) + " backdrop-filter: " + escape(iu(backdropFilter, "blur(0px)"), true) + "; --webkit-backdrop-filter: " + escape(iu(backdropFilter, "blur(0px)"), true) + "; " + escape(iu(style, ""), true)}">${escape(text ? text : "")}
		${slots.default ? slots.default({}) : ``}</div>` : ``}`;
});
const globalTheme = writable({ primary: "#6100FF", secondary: "#35008B", gradientColorPrimary: "rgba(97, 0, 220, 0.2)", gradientColorSecondary: "rgba(53, 0, 122, 0.1)" });
export {
  Label as L,
  globalTheme as g
};
