<script>
	import Logo from '../deco/logo.svelte';
	import Label from '../components/Label.svelte';
	import Button from '../components/Button.svelte';
	import { onMount } from 'svelte';
	import ProjectEntry from '../components/ProjectEntry.svelte';
	import isMobile from '../fn/isMobile';
	import SourceCodeSnippetDock from '../components/SourceCodeSnippetDock.svelte';
	import MobileNav from '../components/MobileNav.svelte';
	import globalTheme from '../stores/globalTheme';
	import Nav from '../components/Nav.svelte';

	let lglobalTheme = { primary: '#6100FF', secondary: '#35008B' };

	onMount(() => {
		globalTheme.subscribe((theme) => {
			lglobalTheme = theme;
		});
	});

	let iniAniDecoShowArr = [false, false, false, false, false];
	let introFinished = false;

	onMount(() => {
		setTimeout(() => {
			iniAniDecoShowArr[0] = true;
		}, 100);
		setTimeout(() => {
			iniAniDecoShowArr[1] = true;
		}, 200);
		setTimeout(() => {
			iniAniDecoShowArr[2] = true;
		}, 300);
		setTimeout(() => {
			iniAniDecoShowArr[3] = true;
		}, 400);
		setTimeout(() => {
			iniAniDecoShowArr.forEach((deco, ix) => {
				iniAniDecoShowArr[ix] = false;
			});
			introFinished = true;
		}, 800);
	});
</script>

<div id="root">
	<Logo id="mainLogo" color="#2400ff" size="30vh" show={iniAniDecoShowArr[3]} />
	<Logo
		id="mainLogo"
		color="#11007C"
		size="30vh"
		show={iniAniDecoShowArr[2] && !isMobile()}
		style="left: calc(25.833333333% + 8%);"
	/>
	<Logo
		id="mainLogo"
		color="#11007C"
		size="30vh"
		show={iniAniDecoShowArr[1] && !isMobile()}
		style="left: calc(9.479166667% + 8%);"
	/>
	<Logo
		id="mainLogo"
		color="#11007C"
		size="30vh"
		show={iniAniDecoShowArr[0] && !isMobile()}
		style="left: calc(-6.770833333% + 8%);"
	/>
	<Label
		className="introText"
		text="[raven@axq]>Link Established with host [xx.xvx.xxs.xa]"
		color="#2400FF"
		show={iniAniDecoShowArr[0]}
		top="2%"
		horizontalFont="5px"
		desktopFont="15px"
	/>
	<Label
		className="introText"
		text="[raven@axq]>[Requesting Deep Storage Link]"
		color="#2400FF"
		show={iniAniDecoShowArr[1]}
		top="5%"
		horizontalFont="5px"
		desktopFont="15px"
	/>
	<Label
		className="introText"
		text="[raven@axq]>[Running ini seq]"
		color="#2400FF"
		show={iniAniDecoShowArr[2]}
		top="8%"
		horizontalFont="5px"
		desktopFont="15px"
	/>
	<Label
		className="introText"
		text="[raven@axq]>[Loaded]"
		color="#2400FF"
		show={iniAniDecoShowArr[3]}
		horizontalFont="5px"
		top="11%"
		desktopFont="15px"
	/>
	<ProjectEntry show={introFinished} />
	{#if introFinished}
		<Nav primaryColor={lglobalTheme.primary} />
		<MobileNav secondaryColor={lglobalTheme.secondary} primaryColor={lglobalTheme.primary} />
	{/if}
	<Label
		text="[This page is currently under active dev]"
		color="#555"
		style="left: 50%; transform: translate(-50%);"
	/>
</div>

<style>
	:global(.introText) {
		letter-spacing: 0.1vh;
	}
	:global(#mainLogo) {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	:global(body) {
		width: 100%;
		height: 100%;
		background-color: #000005;
		font-family: 'Electrolize', sans-serif;
		overflow: hidden;
	}
</style>
