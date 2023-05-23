<script>
	import { fade, fly, scale } from 'svelte/transition';
	import { onMount } from 'svelte';
	import Nav from './Nav.svelte';
	import RingRelayLogoMin from '../deco/RingRelayLogoMin.svelte';
	import ProjectEagleLogo from '../deco/ProjectEagleLogo.svelte';
	import DroneBuzzLogo from '../deco/DroneBuzzLogo.svelte';
	import Label from './Label.svelte';
	import Button from './Button.svelte';
	import ProjectsNav from './ProjectsNav.svelte';
	import ContactDock from './ContactDock.svelte';
	import SourceCodeSnippetDock from '../components/SourceCodeSnippetDock.svelte';
	import RefreshDeco from '../deco/RefreshDeco.svelte';
	import getRandomInt from '../fn/getRandomInt';
	import screenSize from '../stores/screenSize';
	import isMobile from '../fn/isMobile';
	let show;
	let lscreenSize;
	let refreshAni; //triggers refresh animation on the source code extract button deco
	
	onMount(() => {
		screenSize.subscribe((val) => {
			lscreenSize = val;
		});
	});

	let sourceCodeSnippetSource = 0;
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
			gradientColorSecondary: 'rgba(53, 0, 122, 0.1)',
			repoURL: 'https://github.com/undefined1raven/Ring-Relay',
			appURL: 'https://ring-relay.live',
			sourceCodeExtractLabels: ['Crypto', 'Chat']
		},
		ProjectEagle: {
			title: 'PROJECT EAGLE',
			description:
				'Project Eagle aims to build a fully remote flyable custom UAV with the goal of achieving an autonomous system that can be managed from anywhere in the world using the web app',
			themeColorPrimary: '#0500FF',
			themeColorSecondary: '#030096',
			deco: ProjectEagleLogo,
			gradientColorPrimary: 'rgba(5, 0, 255, 0.2)',
			gradientColorSecondary: 'rgba(5, 0, 180, 0.1)',
			repoURL: 'https://github.com/undefined1raven/VultureLink',
			appURL: null,
			sourceCodeExtractLabels: ['Auth']
		},
		DroneBuzz: {
			title: 'Drone Buzz',
			description:
				'Drone Buzz is a mobile game where you are a drone trying to survive while completing objectives, upgrading and strategizing your path to victory ',
			themeColorPrimary: '#2400FF',
			themeColorSecondary: '#1C00C5',
			deco: DroneBuzzLogo,
			gradientColorPrimary: 'rgba(5, 0, 255, 0.2)',
			gradientColorSecondary: 'rgba(5, 0, 180, 0.1)',
			repoURL: 'https://github.com/undefined1raven/DroneBuzz',
			appURL: 'https://dronebuzz.vercel.app',
			sourceCodeExtractLabels: ['Enemy', 'Scorestreaks']
		}
	};
	export { show };
</script>

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
				animated={true}
			/>
		</div>
		<Label
			id="title"
			className="transitionAll1"
			text={contentHash[selectedProjectID].title}
			color={contentHash[selectedProjectID].themeColorPrimary}
			left="50%"
			top="56.232686981%"
			width="100%"
			desktopFont="50px"
			verticalFont="28px"
		/>
		<Label
			className="alignHorizontalAlign transitionAll1"
			id="description"
			text={contentHash[selectedProjectID].description}
			color={contentHash[selectedProjectID].themeColorPrimary}
			left="50%"
			top="71.191135734%"
			width="100%"
			desktopFont="28px"
			verticalFont="15px"
		/>
		<a href={contentHash[selectedProjectID].appURL} target="_blank"
			><Button
				color={contentHash[selectedProjectID].appURL != null
					? contentHash[selectedProjectID].themeColorPrimary
					: '#444'}
				top="calc(78.947368421% + 10%)"
				left="23.348519362%"
				desktopFont="25px"
				borderColor={contentHash[selectedProjectID].appURL != null
					? contentHash[selectedProjectID].themeColorPrimary
					: '#444'}
				width="25.056947608%"
				height="8.033240997%"
				className="transitionAll2"
				label="Go to app"
				><Label
					show={contentHash[selectedProjectID].appURL === null}
					color="#444"
					top="72%"
					desktopFont="14px"
					text="Available during hardware tests only"
				/></Button
			></a
		>
		<a href={contentHash[selectedProjectID].repoURL} target="_blank"
			><Button
				color={contentHash[selectedProjectID].themeColorPrimary}
				top="calc(78.947368421% + 10%)"
				left="51.480637813%"
				desktopFont="25px"
				borderColor={contentHash[selectedProjectID].themeColorPrimary}
				width="25.056947608%"
				height="8.033240997%"
				className="transitionAll2"
				label="View Code"
			/></a
		>
		<Button
			color={contentHash[selectedProjectID].themeColorPrimary}
			top="calc(91.966759003% + 10%)"
			left="23.348519362%"
			desktopFont="25px"
			horizontalFont="7.5vh"
			borderColor={contentHash[selectedProjectID].themeColorPrimary}
			width="53.189066059%"
			className="transitionAll2"
			height="8.033240997%"
			label="Details"
		/>
	</div>
	<ProjectsNav
		on:projectSelected={(e) => {
			selectedProjectID = e.detail;
			sourceCodeSnippetSource = getRandomInt(
				0,
				contentHash[selectedProjectID].sourceCodeExtractLabels.length
			);
		}}
		{selectedProjectID}
	/>
	<ContactDock color={contentHash[selectedProjectID].themeColorPrimary} />
	<SourceCodeSnippetDock
		color={contentHash[selectedProjectID].themeColorPrimary}
		source={`${selectedProjectID}.${sourceCodeSnippetSource}`}
	/>
	<div
		id="sourceCodeExtractButton"
		transition:fly={{ x: '-10%', y: '-10%', duration: 150, delay: 150 }}
		style="position: absolute; top: 26.296296296%; left: 0.3125%; width: 14.589583333%; height:
	3.518518519%; display: {lscreenSize?.width < 800 && !isMobile() ? 'none' : 'flex'}"
	>
		<Button
			label="Source Code Extract [{contentHash[selectedProjectID].sourceCodeExtractLabels[
				sourceCodeSnippetSource
			]}]"
			style="z-index: 500; border-bottom-left-radius: 0px; border-top-left-radius: 0px; justify-content: start; padding-left: 5%;"
			desktopFont={'15px'}
			top="0%"
			left="0%"
			opacity={isMobile() ? 0 : 1}
			className="transitionAll2"
			borderColor={contentHash[selectedProjectID].themeColorPrimary}
			color={contentHash[selectedProjectID].themeColorPrimary}
			width="95.5%"
			height="100%"
			backgroundColor="{contentHash[selectedProjectID].themeColorPrimary}20"
			backdropFilter="blur(5px)"
			onClick={() => {
				sourceCodeSnippetSource = getRandomInt(
					0,
					contentHash[selectedProjectID].sourceCodeExtractLabels.length
				);
				refreshAni.call();
			}}
			><RefreshDeco
				bind:refreshAni
				style="left: 85%;"
				color={contentHash[selectedProjectID].themeColorPrimary}
				size="3.2vh"
			/></Button
		>
	</div>
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
	@media only screen and (max-width: 1300px) and (min-height: 550px) {
		.projectOverviewContainer {
			width: 95%;
		}
		#sourceCodeExtractButton{
			width: 25% !important;
		}
	}
</style>
