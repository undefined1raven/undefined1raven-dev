<script>
	import Logo from '../deco/logo.svelte';
	import Label from '../components/Label.svelte';
	import Button from '../components/Button.svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import ProjectEntry from '../components/ProjectEntry.svelte';
	import isMobile from '../fn/isMobile';
	import SourceCodeSnippetDock from '../components/SourceCodeSnippetDock.svelte';
	import MobileNav from '../components/MobileNav.svelte';
	import globalTheme from '../stores/globalTheme';
	import Nav from '../components/Nav.svelte';
	import IntroSeq from '../components/IntroSeq.svelte';
	import ContactDock from '../components/ContactDock.svelte';
	import Skills from '../components/Skills.svelte';
	import windowID from '../stores/windowID';

	let lglobalTheme = { primary: '#6100FF', secondary: '#35008B' };
	let lwindowID = 'projects'; // projects || skills || contact

	onMount(() => {
		windowID.subscribe((WID) => {
			lwindowID = WID;
		});
		if (sessionStorage.getItem('introPlayed') != null) {
			introFinished = false;
		} else {
			introFinished = true;
		}
		globalTheme.subscribe((theme) => {
			lglobalTheme = theme;
		});
	});

	var introFinished = false;
</script>

<div id="root">
	{#if !introFinished}
		<IntroSeq
			on:introFinished={() => {
				introFinished = true;
			}}
		/>
	{/if}
	{#if introFinished}
		<div
			transition:fade={{ duration: 150 }}
			id="gradientBkg"
			style="background: radial-gradient(
	60.7% 60.73% at 50% 24.65%,
	{lglobalTheme.gradientColorPrimary} 0%,
	{lglobalTheme.gradientColorSecondary} 100%
	); transition: background ease-in-out 0.2s;"
		/>
	{/if}
	{#if lwindowID == 'projects'}
		<ProjectEntry show={introFinished} />
	{/if}
	{#if lwindowID == 'skills'}
		<Skills show={lwindowID == 'skills'} />
	{/if}

	<ContactDock show={introFinished} color={lglobalTheme.primary} />

	{#if introFinished}
		<Nav
			on:onSelectionSelected={(e) => {
				windowID.set(e.detail);
			}}
			primaryColor={lglobalTheme.primary}
		/>
		<MobileNav
			on:onSelectionSelected={(e) => {
				windowID.set(e.detail);
			}}
			secondaryColor={lglobalTheme.secondary}
			primaryColor={lglobalTheme.primary}
		/>
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
