<script>
	import RingRelayLogoMin from '../deco/RingRelayLogoMin.svelte';
	import ProjectEagleLogo from '../deco/ProjectEagleLogo.svelte';
	import DroneBuzzLogo from '../deco/DroneBuzzLogo.svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	import { fly } from 'svelte/transition';

	let selectedProjectID;

	let ringRelayMonochromeOverride = false;
	let projectEagleMonochromeOverride = false;
	let droneBuzzMonochromeOverride = false;

	let monochromeOverrideHash = { RingRelay: false, ProjectEagle: false, DroneBuzz: false };
	export { selectedProjectID };
</script>

<div class="projectsNavContainer" transition:fly={{ x: '20%', duration: 200, delay: 150 }}>
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
			style="top: 0%;"
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
			style="top: 0%;"
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
			style="top: 0%;"
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
	}
	@media only screen and (max-width: 1300px) and (min-height: 550px) {
		.projectsNavContainer {
			width: 20%;
			left: 85%;
		}
	}
</style>
