<script>
	import { onMount } from 'svelte';
	import isMobile from '../fn/isMobile.ts';
	import { RangeScaler } from '../fn/RangeScaler.js';
	import screenSize from '../stores/screenSize';

	let id;
	let text;
	let className;
	let color;
	let style;
	let lightColor;
	let borderColor;
	let backgroundColor;
	let onClick;
	let onTouchStart;
	let onTouchEnd;
	let width;
	let height;
	let top;
	let tabletTop;
	let tabletLeft;
	let left;
	let horizontalFont;
	let verticalFont;
	let opacity;
	let backdropFilter;
	let borderRadius;
	let show = true;
	let tabletWidth;
	let desktopFont;

	const root = document.documentElement;
	let fontSize = '2.4vh';
	let clientWidth = root.clientWidth;
	let clientHeight = root.clientHeight;

	onMount(() => {
		fontController();
	});

	function onResize() {
		clientHeight = root.clientHeight;
		clientWidth = root.clientWidth;
		fontController();
		screenSize.update(() => {
			return { width: clientWidth, height: clientHeight };
		});
	}

	function iu(val, valDefault) {
		return val != undefined ? val : valDefault;
	} //shorthand for isUndefined. short name for readibility

	function positionParser(mobilePosition, tabletPosition) {
		if (clientWidth > 1023 && tabletPosition != 'auto') {
			return tabletPosition;
		} else {
			return mobilePosition;
		}
	}

	function fontController() {
		if (isMobile() == true) {
			let orientation = clientHeight > clientWidth ? 'portrait' : 'landscape';
			if (orientation == 'portrait') {
				if (verticalFont != undefined) {
					fontSize =
						(parseFloat(verticalFont.substring(0, verticalFont.length - 2)) * clientWidth) / 360 +
						'px';
				} else {
					fontSize = '1.4vh';
				}
			} else {
				if (horizontalFont != undefined) {
					fontSize =
						(parseFloat(horizontalFont.substring(0, horizontalFont.length - 2)) * clientWidth) /
							640 +
						'px';
				} else {
					fontSize = '2.8vh';
				}
			}
		} else {
			let rawFontSize;
			if (desktopFont != undefined) {
				rawFontSize =
					(parseFloat(desktopFont.substring(0, desktopFont.length - 2)) * clientHeight) / 1080;
				fontSize = rawFontSize + 'px';
			} else {
				fontSize = '18px';
			}
			if (clientWidth < 700 && rawFontSize && !isMobile()) {
				fontSize = parseFloat(rawFontSize - RangeScaler(rawFontSize, 10, 48, 0, 18)) + 'px';
			}
		}
	}

	export {
		lightColor,
		id,
		onClick,
		text,
		className,
		color,
		borderColor,
		backgroundColor,
		width,
		height,
		top,
		left,
		horizontalFont,
		verticalFont,
		opacity,
		style,
		tabletLeft,
		tabletTop,
		backdropFilter,
		borderRadius,
		onTouchStart,
		onTouchEnd,
		show,
		tabletWidth,
		desktopFont
	};
</script>

<svelte:window on:resize={onResize} />
{#if show}
	<div
		{id}
		on:touchstart={onTouchStart}
		on:touchend={onTouchEnd}
		on:click={onClick}
		class={`label ${className ? className : ''}`}
		style="
    opacity: {iu(opacity, '1')}; 
    font-size: {iu(fontSize, '2vh')}; 
    left: {positionParser(iu(left, 'auto'), iu(tabletLeft, 'auto'))}; 
    top: {positionParser(iu(top, 'auto'), iu(tabletTop, 'auto'))}; 
    width: {positionParser(iu(width, 'auto'), iu(tabletWidth, 'auto'))}; 
    height: {iu(height, 'auto')}; 
    color: {iu(color, '#FFF')}; 
    background-color: {iu(backgroundColor, '#2400FF00')};
	border: solid 1px {iu(borderColor, '#FFFFFF00')};
    border-radius: {((parseFloat(
			iu(borderRadius, '0px').substring(0, iu(borderRadius, '0px').length - 2)
		) *
			100) /
			360 /
			100) *
			clientHeight +
			'px;'}
    backdrop-filter: {iu(backdropFilter, 'blur(0px)')};
    --webkit-backdrop-filter: {iu(backdropFilter, 'blur(0px)')};
    {iu(style, '')}"
	>
		{text ? text : ''}
		<slot />
	</div>
{/if}

<style>
	.label {
		user-select: none;
		--webkit-user-select: none;
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		top: 0%;
		text-align: center;
	}
</style>
