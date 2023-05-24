<script>
	import isMobile from '../fn/isMobile';
	import LogoMin from '../deco/LogoMin.svelte';
	import { fly } from 'svelte/transition';
	import ArrowIndi from '../deco/ArrowIndi.svelte';

	let primaryColor;
	let isExtended = false;

	export { primaryColor };
</script>

{#if isMobile()}
	<div class="mobileNavContainer">
		<div
			on:click={() => {
				isExtended = !isExtended;
			}}
			class="mobileNavControlllerContainer"
			style="border-radius: {isExtended
				? '5px 5px 0 0'
				: '5px'}; border-color: {primaryColor}; background-color: #00000001;"
			transition:fly={{ x: '-20%', duration: 150, delay: 150 }}
		>
			<LogoMin
				color={primaryColor}
				size="65%"
				style="top: 50%; transform: translate(0, -50%); left: 2%;"
			/>
			<ArrowIndi
				color={isExtended ? `${primaryColor}70` : primaryColor}
				height="70%"
				style="top: 50%; transform: translate(0, -50%); left: 26%;"
			/>
			<ArrowIndi
				color={isExtended ? primaryColor : `${primaryColor}70`}
				height="70%"
				style="top: 50%; transform: translate(0, -50%) rotate(180deg); left: 31%;"
			/>
		</div>
		{#if isExtended}
			<div class="mobileNavMenuContainer" transition:fly={{ y: '-30%', duration: 100 }} />
		{/if}
	</div>
{/if}

<style>
	.mobileNavMenuContainer {
		position: absolute;
		top: 8.4375%;
		left: 1.111111111%;
		width: 97.777777778%;
		height: 34.21875%;
		border: solid 1px #6100ff;
		border-radius: 0 5px 5px 5px;
		transition: all linear 0.1s;
		backdrop-filter: blur(2px);
		z-index: 150;
		background: radial-gradient(
				100.91% 100.91% at 49.15% 0%,
				rgba(97, 0, 255, 0.1) 0%,
				rgba(97, 0, 255, 0.15) 0.01%,
				rgba(66, 0, 255, 0.15) 100%
			)
			/* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
	}
	.mobileNavControlllerContainer {
		position: absolute;
		top: 0.625%;
		left: 1.111111111%;
		width: 17.083333333%;
		height: 7.96875%;
		border: solid 1px #6100ff;
		transition: all linear 0.1s;
	}
</style>
