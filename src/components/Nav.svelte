<script>
	import Label from './Label.svelte';
	import { fly } from 'svelte/transition';
    import LogoMin from '../deco/LogoMin.svelte'
	let primaryColor = '#2400FF';
	let secondaryColor = '#1300AA';
	export { primaryColor, secondaryColor };
</script>

<div class="navContainer" transition:fly={{ x: '-20%', duration: 200, delay: 150 }}>
	<div class="titleContainer" style="border-color: {primaryColor};">
		<Label
			text="undefined1raven _dev_"
			width="60.070671378%"
			color={primaryColor}
			style="font-size: 2vh;"
			left="33.085501859%"
		/>
        <LogoMin size="7vh" style="left: 5%;" color={primaryColor}></LogoMin>
	</div>
</div>

<style>
	.navContainer {
		position: absolute;
		top: 0.555555556%;
		left: 0.3125%;
		width: 14.739583333%;
		height: 24.259259259%;
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
</style>
