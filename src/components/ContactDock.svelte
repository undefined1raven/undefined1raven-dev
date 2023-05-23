<script>
	import Label from './Label.svelte';
	import Button from './Button.svelte';
	import { fly } from 'svelte/transition';
	import LinkedLogo from '../deco/linkedLogo.svelte';
	import GithubLogo from '../deco/githubLogo.svelte';
	import isMobile from '../fn/isMobile';
	import screenSize from '../stores/screenSize';
	import { onMount } from 'svelte';

	let lscreenSize;
	let isMinified = false;

	function setIsMinified() {
		if (!isMobile() && lscreenSize?.width > 600) {
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

	let color;

	export { color };
</script>

<div class="contactDockContainer" transition:fly={{ y: '20%', duration: 200, delay: 150 }} style="display: {isMinified ? 'none' : 'flex'};">
	<div
		class="contactDockBorderTop"
		style="background: radial-gradient(50% 50% at 50% 50%, {color} 0%, rgba(97, 0, 255, 0) 100%);"
	/>
	<Label desktopFont="18px" {color} text="Find me on" top="16.666666667%" />
	<a href="https://github.com/undefined1raven" target="_blank"
		><Button
			label={isMinified ? '' : 'Github'}
			width="calc(47.680412371% - 10%)"
			height="44.117647059%"
			left="0%"
			top="55.882352941%"
			{color}
			style="justify-content: {isMinified ? 'center' : 'end'}; padding-right: 10%;"
			borderColor={color}
			borderRadius="3px"><div><GithubLogo {color} style="left: {isMinified ? '35%' :'15%'}; top: 20%;" /></div></Button
		></a
	>
	<a href="https://linkedin.com/in/dominic-zlat-614253233" target="_blank"
		><Button
			label={isMinified ? '' : 'LinkedIn'}
			width="calc(47.680412371% - 10%)"
			height="44.117647059%"
			left="52.319587629%"
			top="55.882352941%"
			{color}
			borderColor={color}
			style="justify-content: {isMinified ? 'center' : 'end'}; padding-right: 10%;"
			borderRadius="3px"><LinkedLogo {color} style="left: {isMinified ? '35%' :'12%'};" /></Button
		></a
	>
</div>

<style>
	.contactDockBorderTop {
		position: absolute;
		left: 0%;
		top: 0%;
		width: 100%;
		height: 1.960784314%;
	}
	.contactDockContainer {
		position: absolute;
		top: 85.648148148%;
		left: 50%;
		transform: translate(-50%);
		width: 20.208333333%;
		height: 9.444444444%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	@media only screen and (max-width: 1300px) and (min-height: 550px) {
		.contactDockContainer {
			width: 40%;
		}
	}
</style>
