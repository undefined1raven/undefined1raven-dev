<script>
	import { fade, fly, scale } from 'svelte/transition';
	import Nav from './Nav.svelte';
	import RingRelayLogoMin from '../deco/RingRelayLogoMin.svelte';
	import ProjectEagleLogo from '../deco/ProjectEagleLogo.svelte';
	import Label from './Label.svelte';
	import Button from './Button.svelte';
	import ProjectsNav from './ProjectsNav.svelte';
	let show;
	let primaryColor = '#6100DC';
	let secondaryColor;

	let selectedProjectID = 'RingRelay';
	let contentHash = {
		RingRelay: {
			title: 'RING RELAY',
			description:
				'The Ring Relay is an end-to-end encrypted messaging app with many other features for enhanced security and a great user experience',
			themeColorPrimary: '#6100FF',
			themeColorSecondary: '#35008B',
			deco: RingRelayLogoMin,
			gradientColorPrimary: 'rgba(97, 0, 220, 0.2)',
			gradientColorSecondary: 'rgba(53, 0, 122, 0.1)'
		},
		ProjectEagle: {
			title: 'EAGLE',
			description:
				'Project Eagle aims to build a fully remote flyable custom UAV with the goal of achieving an autonomous system that can be managed from anywhere in the world using the web app',
			themeColorPrimary: '#0500FF',
			themeColorSecondary: '#030096',
			deco: ProjectEagleLogo,
			gradientColorPrimary: 'rgba(5, 0, 255, 0.2)',
			gradientColorSecondary: 'rgba(5, 0, 180, 0.1)'
		}
	};
	export { show };
</script>

<svelte:window
	on:click={() => (selectedProjectID == 'ProjectEagle' ? selectedProjectID = 'RingRelay' : selectedProjectID = 'ProjectEagle')}
/>
{#if show}
	<div
		transition:fade={{ duration: 150 }}
		id="gradientBkg"
		style="background: radial-gradient(
		60.7% 60.73% at 50% 24.65%,
		{contentHash[selectedProjectID].gradientColorPrimary} 0%,
		{contentHash[selectedProjectID].gradientColorSecondary} 100%
	); transition: background ease-in-out 0.2s;"
	/>
	<Nav primaryColor={contentHash[selectedProjectID].themeColorPrimary} />
	<div class="projectOverviewContainer" transition:fly={{ y: '-10%', duration: 150, delay: 150 }}>
		<div class="logoContainer" transition:fade={{ duration: 100 }}>
			<svelte:component
				this={contentHash[selectedProjectID].deco}
				size="100%"
				style="left: 50%; transform: translate(-50%); top: 0%;"
				monochrome={false}
			/>
		</div>
		<Label
			id="title"
			className="transitionAll1"
			text={contentHash[selectedProjectID].title}
			color={contentHash[selectedProjectID].themeColorPrimary}
			style="font-size: 4.5vh;"
			left="50%"
			top="56.232686981%"
			width="100%"
		/>
		<Label
			className="alignHorizontalAlign transitionAll1"
			id="description"
			text={contentHash[selectedProjectID].description}
			color={contentHash[selectedProjectID].themeColorPrimary}
			style="font-size: 2.5vh;"
			left="50%"
			top="71.191135734%"
			width="100%"
		/>
		<a href="https://ring-relay.live" about="_blank"
			><Button
				color={contentHash[selectedProjectID].themeColorPrimary}
				top="calc(78.947368421% + 7%)"
				left="23.348519362%"
				horizontalFont="7.5vh"
				borderColor={contentHash[selectedProjectID].themeColorPrimary}
				width="25.056947608%"
				height="8.033240997%"
				className="transitionAll2"
				label="Go to app"
			/></a
		>
		<a href="https://github.com/undefined1raven/Ring-Relay" about="_blank"
			><Button
				color={contentHash[selectedProjectID].themeColorPrimary}
				top="calc(78.947368421% + 7%)"
				left="51.480637813%"
				horizontalFont="7.5vh"
				borderColor={contentHash[selectedProjectID].themeColorPrimary}
				width="25.056947608%"
				height="8.033240997%"
				className="transitionAll2"
				label="View Code"
			/></a
		>
		<Button
			color={contentHash[selectedProjectID].themeColorPrimary}
			top="calc(91.966759003% + 7%)"
			left="23.348519362%"
			horizontalFont="7.5vh"
			borderColor={contentHash[selectedProjectID].themeColorPrimary}
			width="53.189066059%"
			className="transitionAll2"
			height="8.033240997%"
			label="Details"
		/>
	</div>
	<ProjectsNav></ProjectsNav>
{/if}

<style>
	:global(.transitionAll2) {
		transition: all linear 0.3s;
	}
	:global(.transitionAll1) {
		transition: all linear 0.15s;
	}
	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	:global(.alignHorizontalAlign) {
		left: 50%;
		transform: translate(-50%);
	}
	.logoContainer {
		position: absolute;
		top: 0%;
		left: 50%;
		transform: translate(-50%);
		width: 100%;
		height: 41.551246537%;
	}
	:global(#title) {
		letter-spacing: 2vh;
		transform: translate(-50%);
		text-align: center;
	}
	.projectOverviewContainer {
		position: absolute;
		top: 9.814814815%;
		left: 50%;
		transform: translate(-50%);
		width: 45.729166667%;
		height: 66.851851852%;
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
</style>
