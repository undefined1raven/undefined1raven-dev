<script>
	import Label from './Label.svelte';
	import Button from './Button.svelte';
	import { fly } from 'svelte/transition';
	import LogoMin from '../deco/LogoMin.svelte';
	import screenSize from '../stores/screenSize';
	import isMobile from '../fn/isMobile';
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	let lscreenSize;
	let isMinified = false;

	function setIsMinified() {
		if (!isMobile() && lscreenSize?.width > 800) {
			isMinified = false;
		} else {
			isMinified = true;
		}
	}
	onMount(() => {
		screenSize.subscribe((val) => {
			lscreenSize = val;
			setIsMinified();
		});
	});

	function onSectionSelected(SID) {
		dispatch('onSelectionSelected', SID);
	}

	let primaryColor = '#2400FF';
	let secondaryColor = '#1300AA';
	export { primaryColor, secondaryColor };
</script>

<div
	class="navContainer"
	transition:fly={{ x: '-20%', duration: 200, delay: 150 }}
	style="display: {isMobile() ? 'none' : 'flex'};"
>
	<div class="titleContainer" style="border-color: {primaryColor};">
		<Label
			text={isMinified ? '' : 'undefined1raven _dev_'}
			width="60.070671378%"
			color={primaryColor}
			style="font-size: 2vh;"
			left="33.085501859%"
			desktopFont="15px"
		/>
		<LogoMin size="7vh" style="left: {isMinified ? 'auto' : '5%'};" color={primaryColor} />
	</div>
	<Button
		onClick={() => onSectionSelected('projects')}
		label="Projects"
		top="46.564885496%"
		color={primaryColor}
		borderColor={primaryColor}
		backgroundColor="{primaryColor}20"
		width="100%"
		height="13.740458015%"
		desktopFont="20px"
	/>
	<Button
		onClick={() => onSectionSelected('skills')}
		label="Skills"
		top="66.41221374%"
		color={primaryColor}
		borderColor={primaryColor}
		backgroundColor="{primaryColor}00"
		width="100%"
		height="13.740458015%"
		desktopFont="20px"
	/>
	<Button
		onClick={() => onSectionSelected('contact')}
		label="About Me & Contact"
		top="86.259541985%"
		color={primaryColor}
		borderColor={primaryColor}
		backgroundColor="{primaryColor}00"
		width="100%"
		height="13.740458015%"
		desktopFont="20px"
	/>
</div>

<style>
	.navContainer {
		position: absolute;
		top: 0.555555556%;
		left: 0.3125%;
		width: 14.739583333%;
		height: 24.259259259%;
		z-index: 250;
	}
	.titleContainer {
		position: absolute;
		top: 0%;
		left: 0%;
		width: 100%;
		height: 38.167938931%;
		border: solid 1px #2400ff;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	@media only screen and (max-width: 1300px) and (min-height: 550px) {
		.navContainer {
			width: 25%;
		}
	}
	@media only screen and (max-width: 800px) and (min-height: 550px) {
		.navContainer {
			width: 15%;
		}
	}
</style>
