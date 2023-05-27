<script>
	import Skills from '../../components/Skills.svelte';
	import { fade } from 'svelte/transition';
	import globalTheme from '../../stores/globalTheme';
	import { onMount } from 'svelte';
	import MobileNav from '../../components/MobileNav.svelte';

	let lglobalTheme = {};

	onMount(() => {
		globalTheme.subscribe((theme) => {
			lglobalTheme = theme;
		});
	});
</script>

<div id="root">
	<div
		transition:fade={{ duration: 150 }}
		id="gradientBkg"
		style="background: radial-gradient(
	60.7% 60.73% at 50% 24.65%,
	{lglobalTheme.gradientColorPrimary} 0%,
	{lglobalTheme.gradientColorSecondary} 100%
	); transition: background ease-in-out 0.2s;"
	/>
	<Skills show={true} />
	<MobileNav
		on:onSelectionSelected={(e) => {
			if(e.detail === 'projects'){
				window.location.pathname = '';
			}
		}}
		secondaryColor={lglobalTheme.secondary}
		primaryColor={lglobalTheme.primary}
	/>
</div>

<style>
	#gradientBkg {
		position: absolute;
		top: 0%;
		left: 0%;
		width: 100%;
		height: 100%;
		background: radial-gradient(
			60.7% 60.73% at 50% 24.65%,
			rgba(97, 0, 220, 0.2) 0%,
			rgba(53, 0, 122, 0.1) 100%
		);
	}
	:global(body) {
		width: 100%;
		height: 100%;
		background-color: #000005;
		font-family: 'Electrolize', sans-serif;
		overflow: hidden;
	}
</style>
