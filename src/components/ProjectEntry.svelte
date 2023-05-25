<script>
	import { fade, fly, scale } from 'svelte/transition';
	import { onMount } from 'svelte';
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
	import globalTheme from '../stores/globalTheme';
	import { touchStart, touchMove, touchEnd } from '../stores/touchGestures';
	import { RangeScaler } from '../fn/RangeScaler';
	let show;
	let lscreenSize;
	let refreshAni; //triggers refresh animation on the source code extract button deco

	let ltouchStart = { x: 0, y: 0 };
	let ltouchMove = { x: 0, y: 0 };
	let ltouchEnd = { x: 0, y: 0 };
	let nextProjectPreview = false;
	let transitionOverlayBackdropFilterBlurValue = 0;

	onMount(() => {
		screenSize.subscribe((val) => {
			lscreenSize = val;
		});
		touchStart.subscribe((touches) => {
			ltouchStart = { x: touches[0].clientX, y: touches[0].clientY };
		});
		touchMove.subscribe((touches) => {
			let sideScrollThreshold = 0.32 * document.documentElement.clientWidth;
			let xTouchDelta = ltouchMove.x - ltouchStart.x;
			let swipeCompletionPercentage = (sideScrollThreshold * 100) / Math.abs(xTouchDelta);
			ltouchMove = { x: touches[0].clientX, y: touches[0].clientY };
			transitionOverlayBackdropFilterBlurValue = RangeScaler(
				swipeCompletionPercentage,
				0,
				100,
				0,
				14
			);
			if (!nextProjectPreview && Math.abs(xTouchDelta) > 0) {
				nextProjectPreview = true;
				swipeAction(xTouchDelta);
			}
		});
		touchEnd.subscribe((touches) => {
			if (touches.length > 0) {
				ltouchEnd = { x: touches[0].clientX, y: touches[0].clientY };
			}
			onTouchMoveUpdate();
			nextProjectPreview = false;
			transitionOverlayBackdropFilterBlurValue = 0;
		});
	});

	function swipeAction(xTouchDelta) {
		if (xTouchDelta > 0) {
			if (selectedProjectIndex - 1 < 0) {
				//index underflow protection
				selectedProjectIndex = projectIndexArray.length - 1;
			} else {
				selectedProjectIndex--;
			}
		} else {
			if (selectedProjectIndex + 1 > projectIndexArray.length - 1) {
				//index overflow protection
				selectedProjectIndex = 0;
			} else {
				selectedProjectIndex++;
			}
		}
	}

	function onTouchMoveUpdate() {
		let sideScrollThreshold = 0.32 * document.documentElement.clientWidth;
		let xTouchDelta = ltouchMove.x - ltouchStart.x;
		if (Math.abs(xTouchDelta) > sideScrollThreshold) {
			swipeAction(xTouchDelta);
		}
	}

	$: selectedProjectID = projectIndexArray[selectedProjectIndex];

	function updateGlobalTheme(selectedProjectID) {
		globalTheme.set({
			primary: contentHash[selectedProjectID].themeColorPrimary,
			secondary: contentHash[selectedProjectID].themeColorSecondary,
			gradientColorPrimary: contentHash[selectedProjectID].gradientColorPrimary,
			gradientColorSecondary: contentHash[selectedProjectID].gradientColorSecondary
		});
	}

	$: updateGlobalTheme(selectedProjectID);

	let sourceCodeSnippetSource = 0;
	var selectedProjectID = 'RingRelay';
	let projectIndexArray = ['RingRelay', 'ProjectEagle', 'DroneBuzz'];
	let selectedProjectIndex = 0;
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

<svelte:window
	on:touchend={(e) => {
		touchEnd.set(e.touches);
	}}
	on:touchmove={(e) => {
		touchMove.set(e.touches);
	}}
	on:touchstart={(e) => {
		touchStart.set(e.touches);
	}}
/>
{#if show}
	<div class="projectOverviewContainer" transition:fly={{ y: '-10%', duration: 150, delay: 150 }}>
		<div class="logoContainer" transition:fade={{ duration: 100 }}>
			<svelte:component
				this={contentHash[selectedProjectID].deco}
				size="100%"
				style="left: 50%; transform: translate(-50%); top: {isMobile() ? '-15%' : '0%'};"
				monochrome={false}
				animated={true}
			/>
		</div>
		<Label
			id="title"
			className="transitionAll1"
			style={isMobile() ? 'letter-spacing: 1vh;' : 'letter-spacing: 2vh;'}
			text={contentHash[selectedProjectID].title}
			color={contentHash[selectedProjectID].themeColorPrimary}
			left={isMobile() ? '53%' : '50%'}
			top={isMobile() ? '42.232686981%' : '56.232686981%'}
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
			top={isMobile() ? '52.191135734%' : '68.191135734%'}
			width="100%"
			desktopFont="28px"
			backdropFilter={isMobile() ? `blur(2px)` : ''}
			verticalFont="18px"
			borderRadius="6px"
			style="padding: 2%"
			borderColor={isMobile()
				? `${contentHash[selectedProjectID].themeColorPrimary}30`
				: '#00000000'}
		/>
		<a href={contentHash[selectedProjectID].appURL} target="_blank"
			><Button
				color={contentHash[selectedProjectID].appURL != null
					? contentHash[selectedProjectID].themeColorPrimary
					: '#444'}
				top={isMobile() ? '82%' : '88.947368421%'}
				left={isMobile() ? '5%' : '23.348519362%'}
				desktopFont="25px"
				borderColor={contentHash[selectedProjectID].appURL != null
					? contentHash[selectedProjectID].themeColorPrimary
					: '#444'}
				width={isMobile() ? '90%' : '25.056947608%'}
				height="8.033240997%"
				className="transitionAll2"
				label="Go to app"
				backdropFilter={isMobile() ? 'blur(4px)' : ''}
				borderRadius={isMobile() ? '4px' : '0px'}
				verticalFont="18px"
				><Label
					show={contentHash[selectedProjectID].appURL === null}
					color="#444"
					top={isMobile() ? '60%' : '72%'}
					desktopFont="14px"
					verticalFont="10px"
					text="Available during hardware tests only"
				/></Button
			></a
		>
		<a href={contentHash[selectedProjectID].repoURL} target="_blank"
			><Button
				color={contentHash[selectedProjectID].themeColorPrimary}
				top={isMobile() ? `${82 + 12}%` : '88.947368421%'}
				left={isMobile() ? '5%' : '51.480637813%'}
				desktopFont="25px"
				borderColor={contentHash[selectedProjectID].themeColorPrimary}
				width={isMobile() ? '90%' : '25.056947608%'}
				height="8.033240997%"
				className="transitionAll2"
				label="View Code"
				backdropFilter={isMobile() ? 'blur(4px)' : ''}
				borderRadius={isMobile() ? '4px' : '0px'}
				verticalFont="18px"
			/></a
		>
		<Button
			color={contentHash[selectedProjectID].themeColorPrimary}
			top={isMobile() ? `${82 + 24}%` : '101.966759003%'}
			left={isMobile() ? '5%' : '23.348519362%'}
			desktopFont="25px"
			horizontalFont="7.5vh"
			borderColor={contentHash[selectedProjectID].themeColorPrimary}
			width={isMobile() ? '90%' : '53.189066059%'}
			className="transitionAll2"
			height="8.033240997%"
			label="Details"
			backdropFilter={isMobile() ? 'blur(4px)' : ''}
			borderRadius={isMobile() ? '4px' : '0px'}
			verticalFont="18px"
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
	{#if transitionOverlayBackdropFilterBlurValue > 0}
		<div
			id="blurTransitionOverlay"
			style="backdrop-filter: blur({transitionOverlayBackdropFilterBlurValue}px);"
		/>
	{/if}
{/if}

<style>
	#blurTransitionOverlay {
		position: absolute;
		top: 0%;
		left: 0%;
		width: 100%;
		height: 100%;
		backdrop-filter: blur(2px);
		z-index: 155;
	}
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
		z-index: 50;
	}
	@media only screen and (max-width: 1300px) and (min-height: 550px) {
		.projectOverviewContainer {
			width: 95%;
		}
		#sourceCodeExtractButton {
			width: 25% !important;
		}
	}
</style>
