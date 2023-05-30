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
		<div class="contactCardsContainer" transition:fly={{ y: '40%', duration: 150, delay: 120 }}>
			<ContactCard
				primaryLabel="zlat.dominic.francisc@gmail.com"
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
				primaryLabel="Connect with me on LinkedIn"
				logo={LinkedLogo}
				buttonLabel="View Profile"
				left="34.555555556%"
				buttonHref="https://linkedin.com/in/dominic-zlat"
				color={lglobalTheme.primary}
			/>
			<ContactCard
				primaryLabel="Check out more of my work on Github"
				buttonLabel="View Github"
				buttonHref="https://github.com/undefined1raven"
				left="69.2222222%"
				logo={GithubLogo}
				color={lglobalTheme.primary}
			/>
		</div>
		<div class="aboutMeContainerActual" transition:fly={{ y: '-40%', duration: 150, delay: 120 }}>
			<Label
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
				text="I am not an alien. Trust me"
			/>
		</div>
	</div>
{/if}

<style>
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
