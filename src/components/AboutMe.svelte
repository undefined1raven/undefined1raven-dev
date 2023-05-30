<script>
	import { onMount } from 'svelte';
	import windowID from '../stores/windowID';
	import globalTheme from '../stores/globalTheme';
	import { scale, fly } from 'svelte/transition';
	import ContactCard from './ContactCard.svelte';
	import GithubLogo from '../deco/githubLogo.svelte';
	import LinkedLogo from '../deco/linkedLogo.svelte';
	import EmailDeco from '../deco/EmailDeco.svelte';
	import screenSize from '../stores/screenSize';
	import Label from './Label.svelte';
	import isMobile from '../fn/isMobile';
	import AboutMeDeco from '../deco/AboutMeDeco.svelte';

	let lscreenSize = {};
	let lglobalTheme = {};
	let lwindowID = {};
	onMount(() => {
		windowID.subscribe((WID) => {
			lwindowID = WID;
		});
		globalTheme.subscribe((gt) => {
			lglobalTheme = gt;
		});
		screenSize.subscribe((ss) => {
			lscreenSize = ss;
		});
	});
</script>

{#if lwindowID == 'contact'}
	<div class="aboutMeContainer">
		{#if isMobile()}
			<Label
				color={lglobalTheme.primary}
				verticalFont="20px"
				top="0.625%"
				left="23%"
				style="display: flex; border-left: solid 1px {lglobalTheme.primary}; padding-left: 3.5%; letter-spacing: 0.6vh;"
				height="7.96875%"
				text="About Me"
			/>
			<div
				id="mobileLn"
				style="background: radial-gradient(
		250.04% 3194999.83% at 0% 100%,
		{lglobalTheme.primary} 0%,
		rgba(97, 0, 255, 0) 45%
	); z-index: 2;"
			/>
		{/if}
		<div
			class="contactCardsContainer"
			transition:fly={{ x: '-40%', y: '40%', duration: 150, delay: 120 }}
			style="height: {isMobile() ? '15.111111111%' : '26.111111111%'}; top: {isMobile()
				? '66%'
				: '42.314814815%'};"
		>
			<ContactCard
				primaryLabel={isMobile() ? 'Copy to clipboard' : 'zlat.dominic.francisc@gmail.com'}
				left="0%"
				logo={EmailDeco}
				primaryLabelDesktopFontSize={lscreenSize.width < 800 ? '10px' : '20px'}
				onButtonAction={() => {
					navigator.clipboard
						.writeText('zlat.dominic.francisc@gmail.com')
						.then()
						.catch(() => {});
				}}
				buttonLabel="Copy To Clipboard"
				color={lglobalTheme.primary}
			/>
			<ContactCard
				primaryLabel={isMobile() ? 'View LinkedIn' : 'Connect with me on LinkedIn'}
				logo={LinkedLogo}
				buttonLabel="View Profile"
				left="34.555555556%"
				buttonHref="https://linkedin.com/in/dominic-zlat"
				color={lglobalTheme.primary}
			/>
			<ContactCard
				primaryLabel={isMobile() ? 'View Github' : 'Check out more of my work on Github'}
				buttonLabel="View Github"
				buttonHref="https://github.com/undefined1raven"
				left="69.2222222%"
				logo={GithubLogo}
				color={lglobalTheme.primary}
			/>
		</div>
		<div
			class="aboutMeContainerActual"
			transition:fly={{ x: '40%', y: '-40%', duration: 150, delay: 120 }}
			style="top: {isMobile() ? '-2.5%' : '13.518518519%'}; height: {isMobile()
				? '60%'
				: '23.333333333%'}; left: {isMobile() ? '5%' : '26.5625%'}; width: {isMobile()
				? '90%'
				: '46.876%'};"
		>
			<Label
				show={!isMobile()}
				text="About Me"
				color={lglobalTheme.primary}
				backgroundColor="{lglobalTheme.primary}20"
				width="22.222222222%"
				height="15.079365079%"
				desktopFont="20px"
				borderRadius="5px"
			/>
			<Label
				width="100%"
				height="77.777777778%"
				top="29.230769231%"
				left="0%"
				backgroundColor="{lglobalTheme.primary}10"
				borderRadius="5px"
				desktopFont="19px"
				color={lglobalTheme.primary}
				verticalFont="14px"
				text="I am not an alien. Trust me"
			/>
		</div>
		<AboutMeDeco
			opacity="0.5"
			style="left: 50%; top: {isMobile() ? '75%' : '68%'}; transform: translate(-50%);"
			height="35%"
			width="50%"
			color={lglobalTheme.primary}
		/>
		<AboutMeDeco
			opacity="0.5"
			style="left: 30%; top: {isMobile() ? '75%' : '68%'}; transform: translate(-50%);"
			height="35%"
			width="50%"
			color={lglobalTheme.primary}
		/>
		<AboutMeDeco
			opacity="0.5"
			style="left: 70%; top: {isMobile() ? '75%' : '68%'}; transform: translate(-50%);"
			height="35%"
			width="50%"
			color={lglobalTheme.primary}
		/>
	</div>
{/if}

<style>
	#mobileLn {
		position: absolute;
		top: 11.3125%;
		left: 0.3125%;
		width: 99.375%;
		height: 0.1vh;
		background: radial-gradient(
				250.04% 3194999.83% at 0% 100%,
				#6100ff 0%,
				rgba(97, 0, 255, 0) 100%
			)
			/* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
	}
	.aboutMeContainerActual {
		position: absolute;
		left: 26.5625%;
		top: 13.518518519%;
		width: 46.875%;
		height: 23.333333333%;
	}
	.contactCardsContainer {
		position: absolute;
		top: 42.314814815%;
		left: 26.5625%;
		width: 46.875%;
		height: 26.111111111%;
	}
	@media only screen and (max-width: 1300px) and (min-height: 550px) {
		.contactCardsContainer {
			width: 90%;
			left: 5.5625%;
		}
	}
</style>
