<script>
	import { onMount } from 'svelte';
	import Label from './Label.svelte';
	import { createEventDispatcher } from 'svelte';
	import { fly, scale, fade } from 'svelte/transition';
	import isMobile from '../fn/isMobile';
	import screenSize from '../stores/screenSize';

	let lscreenSize = {};
	let containerWidth = '99.5%';

	onMount(() => {
		screenSize.subscribe((screenSizeActual) => {
			lscreenSize = screenSizeActual;
			if (isMobile()) {
				containerWidth = '99.5%';
			} else {
				if (lscreenSize.width < 1000) {
					containerWidth = '97%';
				} else {
					containerWidth = '99.5%';
				}
			}
		});
	});

	const dispatch = createEventDispatcher();
	let label = '';
	let logo;
	let logoColor = '#6100FF';
	let ix = 0;
	let logoSize = '4vh';
	let labelColor = '#FFF';

	export { label, logo, logoSize, ix, logoColor, labelColor };
</script>

<div
	on:click={() => {
		dispatch('listItemOnClick', label);
	}}
	class="skillEntryContainer"
	style="border-color: {logoColor}; width: {containerWidth};"
	transition:fly={{
		duration: isMobile() ? 50 : 150,
		delay: isMobile() ? 10 : (ix + 1) * 50,
		x: '-30%',
		y: '-50%'
	}}
>
	<div class="labelContainer" transition:fade={{ duration: 50 }}>
		<Label
			style="text-align: start;"
			color={labelColor}
			verticalFont="17px"
			desktopFont="20px"
			text={label}
		/>
	</div>
	<div
		class="skillDeco"
		style="position: absolute; width: {logoSize}; height: {logoSize}"
		transition:scale={{ duration: 200 }}
	>
		<svelte:component
			this={logo}
			style="width: {logoSize}; height: {logoSize};"
			color={logoColor ? logoColor : '#6100FF'}
			size={'100%'}
		/>
	</div>
</div>

<style>
	.labelContainer {
		position: absolute;
		left: 10%;
		height: 100%;
		width: 70%;
		display: flex;
		align-items: center;
		justify-content: start;
	}
	:global(.skillDeco) {
		position: absolute;
		left: 1.5%;
	}
	.skillEntryContainer {
		position: relative;
		margin-bottom: 2%;
		border-radius: 15px;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 13.202614379%;
		width: 99.5%;
		border: solid 1px #6100ff;
		backdrop-filter: blur(2px);
	}
	@media only screen and (max-width: 1000px) and (min-height: 600px) {
		.skillEntryContainer {
			height: 10%;
		}
		.labelContainer {
			left: 20%;
		}
	}
</style>
