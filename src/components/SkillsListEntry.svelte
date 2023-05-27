<script>
	import { onMount } from 'svelte';
	import Label from './Label.svelte';
	import { fly, scale, fade } from 'svelte/transition';
	let label = '';
	let logo;
	let logoColor = '#6100FF';
	let ix = 0;
	let logoSize = '4vh';

	onMount(() => {
		console.log(JSON.stringify(logoColor));
	});

	export { label, logo, logoSize, ix, logoColor };
</script>

<div
	class="skillEntryContainer"
	style="border-color: {logoColor}"
	transition:fly={{ duration: 150, delay: (ix + 1) * 50, x: '-30%', y: '-50%' }}
>
	<div class="labelContainer" transition:fade={{ duration: 50 }}>
		<Label color="#FFF" desktopFont="20px" text={label} />
	</div>
	<div
		class="skillDeco"
		style="position: absolute; width: {logoSize}; height: {logoSize}"
		transition:scale={{ duration: 200 }}
	>
		<svelte:component this={logo} style="width: {logoSize}; height: {logoSize};" color={logoColor ? logoColor : '#6100FF'} size={'100%'} />
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
		width: 100%;
		border: solid 1px #6100ff;
	}
</style>
