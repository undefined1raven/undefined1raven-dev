<script>
	import RingRelayLogoMin from '../deco/RingRelayLogoMin.svelte';
	import ProjectEagleLogo from '../deco/ProjectEagleLogo.svelte';
	import DroneBuzzLogo from '../deco/DroneBuzzLogo.svelte';
	import { createEventDispatcher, onMount } from 'svelte';
	const dispatch = createEventDispatcher();
	import { fly } from 'svelte/transition';
	import isMobile from '../fn/isMobile';

	const root = document.documentElement;

	let selectedProjectID;
	let ringRelayMonochromeOverride = false;
	let projectEagleMonochromeOverride = false;
	let droneBuzzMonochromeOverride = false;
	let projectNavLeft = '94.479166667%';

	function updateProjectNavLeft(screenSize) {
		let offset = 0;
		if(root.clientWidth < 1300 && !isMobile()){
			offset = 0.05 * root.clientWidth;
		}else{
			offset = -0.002 * root.clientWidth;
		}
		projectNavLeft =
			root.clientWidth -
			document.getElementById('projectsNav')?.clientWidth + offset +
			'px';
	}

	onMount(() => {
		updateProjectNavLeft();
	});

	export { selectedProjectID };
</script>

<svelte:window
	on:resize={() => {
		updateProjectNavLeft();
	}}
/>
<div
	class="projectsNavContainer"
	id="projectsNav"
	style="height: {isMobile() ? '38.148148148%' : '28.148148148%'};top: {isMobile() ? '74%' : '0.555555556%'}; left: {isMobile() ? '40%' : projectNavLeft}; transform: {isMobile() ? 'rotate(-90deg)' : 'none'};"
	transition:fly={{ x: '20%', duration: 200, delay: 150 }}
>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		class="logoContainer"
		style="border: solid 0px #6100FF;"
		on:click={() => dispatch('projectSelected', 'RingRelay')}
		on:mouseenter={() => {
			ringRelayMonochromeOverride = true;
		}}
		on:mouseleave={() => {
			ringRelayMonochromeOverride = false;
		}}
	>
		<RingRelayLogoMin
			size="95%"
			monochrome={!(selectedProjectID == 'RingRelay') && !ringRelayMonochromeOverride}
			style="top: 0%; transform: {isMobile() ? 'rotate(90deg)' : 'none'};"
			animated={ringRelayMonochromeOverride}
		/>
	</div>
	<div
		class="logoContainer"
		style="border: solid 0px #444; top: 34.868421053%;"
		on:click={() => dispatch('projectSelected', 'ProjectEagle')}
		on:mouseenter={() => {
			projectEagleMonochromeOverride = true;
		}}
		on:mouseleave={() => {
			projectEagleMonochromeOverride = false;
		}}
	>
		<ProjectEagleLogo
			size="95%"
			monochrome={!(selectedProjectID == 'ProjectEagle') && !projectEagleMonochromeOverride}
			style="top: 0%; transform: {isMobile() ? 'rotate(90deg)' : 'none'};"
			animated={projectEagleMonochromeOverride}
		/>
	</div>
	<div
		class="logoContainer"
		style="border: solid 0px #444; top: 69.736842105%;"
		on:click={() => dispatch('projectSelected', 'DroneBuzz')}
		on:mouseenter={() => (droneBuzzMonochromeOverride = true)}
		on:mouseleave={() => (droneBuzzMonochromeOverride = false)}
	>
		<DroneBuzzLogo
			size="100%"
			monochrome={!(selectedProjectID == 'DroneBuzz') && !droneBuzzMonochromeOverride}
			style="top: 0%; transform: {isMobile() ? 'rotate(90deg)' : 'none'};"
			animated={droneBuzzMonochromeOverride}
		/>
	</div>
</div>

<style>
	.logoContainer {
		position: absolute;
		width: 100%;
		height: 30.115131579%;
	}
	.projectsNavContainer {
		position: absolute;
		top: 0.555555556%;
		left: 94.479166667%;
		width: 5.208333333%;
		height: 28.148148148%;
		z-index: 100;
	}
	@media only screen and (max-width: 1300px) and (min-height: 550px) {
		.projectsNavContainer {
			width: 20%;
			left: 80%;
		}
	}
</style>
