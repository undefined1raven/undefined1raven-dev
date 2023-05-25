<script>
	import isMobile from '../fn/isMobile';
	import LogoMin from '../deco/LogoMin.svelte';
	import { fly, scale } from 'svelte/transition';
	import ArrowIndi from '../deco/ArrowIndi.svelte';
	import Button from './Button.svelte';

	let primaryColor;
	let secondaryColor;
	let isExtended = false;

	function onGlobalClick(e) {
		if (e.target.id != 'mobileNavControlllerContainerI') {
			isExtended = false;
		}
	}

	export { primaryColor, secondaryColor };
</script>

<svelte:window on:click={onGlobalClick} />
{#if isMobile()}
	<div class="mobileNavContainer">
		<div
			on:click={() => {
				isExtended = !isExtended;
			}}
			id="mobileNavControlllerContainerI"
			class="mobileNavControlllerContainer"
			style="border-radius: {isExtended
				? '5px 5px 0 0'
				: '5px'}; border-color: {primaryColor}; background-color: #00000001;"
			transition:fly={{ x: '-20%', duration: 150, delay: 150 }}
		>
			<LogoMin
				id="mobileNavControlllerContainerI"
				color={primaryColor}
				size="65%"
				style="top: 50%; transform: translate(0, -50%); left: 2%;"
			/>
			<ArrowIndi
				id="mobileNavControlllerContainerI"
				color={isExtended ? `${primaryColor}70` : primaryColor}
				height="70%"
				style="top: 50%; transform: translate(0, -50%); left: 26%;"
			/>
			<ArrowIndi
				id="mobileNavControlllerContainerI"
				color={isExtended ? primaryColor : `${primaryColor}70`}
				height="70%"
				style="top: 50%; transform: translate(0, -50%) rotate(180deg); left: 31%;"
			/>
		</div>
		{#if isExtended}
			<div
				class="mobileNavMenuContainer mobileNavMenuComponent"
				style="border-color: {primaryColor}; background-color: #00000000;"
				transition:scale={{ x: '-10%', y: '-30%', duration: 100 }}
			>
				<Button
					className="mobileNavMenuComponent"
					left="9.943181818%"
					width="80.397727273%"
					height="16.438356164%"
					verticalFont="18px"
					borderRadius="5px"
					top="13.698630137%"
					color={primaryColor}
					borderColor={primaryColor}
					label="Projects"
				/>
				<Button
					className="mobileNavMenuComponent"
					left="9.943181818%"
					width="80.397727273%"
					height="16.438356164%"
					verticalFont="18px"
					borderRadius="5px"
					top="42.922374429%"
					color={primaryColor}
					borderColor={primaryColor}
					label="Skills"
				/>
				<Button
					className="mobileNavMenuComponent"
					left="9.943181818%"
					width="80.397727273%"
					height="16.438356164%"
					verticalFont="18px"
					borderRadius="5px"
					top="69.406392694%"
					color={primaryColor}
					borderColor={primaryColor}
					label="About Me & Contact"
				/>
			</div>
		{/if}
	</div>
{/if}

<style>
	.mobileNavMenuContainer {
		position: absolute;
		top: 8.8%;
		left: 1.111111111%;
		width: 97.777777778%;
		height: 34.21875%;
		border: solid 1px #6100ff;
		border-radius: 0 5px 5px 5px;
		transition: all linear 0.1s;
		backdrop-filter: blur(25px);
		z-index: 150;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.mobileNavControlllerContainer {
		position: absolute;
		top: 0.625%;
		left: 1.111111111%;
		width: 17.083333333%;
		height: 7.96875%;
		border: solid 1px #6100ff;
		transition: all linear 0.1s;
		z-index: 200;
	}
</style>
