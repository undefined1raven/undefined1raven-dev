<script>
	import { fly } from 'svelte/transition';
	import Button from './Button.svelte';
	import SkillsListEntry from './SkillsListEntry.svelte';
	import ReactLogo from '../deco/ReactLogo.svelte';
	import SvelteLogo from '../deco/SvelteLogo.svelte';
	import VueLogo from '../deco/VueLogo.svelte';
	import JS_CSS_Logos from '../deco/JS_CSS_Logos.svelte';
	import GenericLogo from '../deco/GenericLogo.svelte';
	import VercelLogo from '../deco/VercelLogo.svelte';
	import SocketIoLogo from '../deco/SocketIOLogo.svelte';
	import GitLogo from '../deco/GitLogo.svelte';
	import SnykLogo from '../deco/SnykLogo.svelte';
	import GitGuardianLogo from '../deco/GitGuardianLogo.svelte';
	import GithubLogo from '../deco/githubLogo.svelte';
	import MongoDbLogo from '../deco/MongoDB_Logo.svelte';
	import globalTheme from '../stores/globalTheme';
	import FirebaseRealtimeLogo from '../deco/FirebaseRealtimeLogo.svelte';
	import PlanetScaleLogo from '../deco/PlanetScaleLogo.svelte';
	import FrontendLogo from '../deco/FrontendLogo.svelte';
	import SecurityLogo from '../deco/SecurityLogo.svelte';
	import DevOpsLogo from '../deco/DevOpsLogo.svelte';
	import DatabasesLogo from '../deco/DatabasesLogo.svelte';
	import BackendLogo from '../deco/BackendLogo.svelte';
	import NewRelicLogo from '../deco/newRelicLogo.svelte';
	import { onDestroy, onMount } from 'svelte';
	import isMobile from '../fn/isMobile';
	import windowID from '../stores/windowID';
	import SkillsDeco from '../deco/SkillsDeco.svelte';

	let lwindowID = 'projects';

	let lglobalTheme = {};

	let expandState = {
		'Front-End': false,
		'Back-End': false,
		'Dev Ops': false,
		Security: false,
		Databases: false
	}; //used for mobile version

	var sourceArray = [];

	function assessSkillSetExtension(SID, SSID) {
		const skillArray = skillSetHash[SSID];
		if (expandState[SID]) {
			for (let ix = 0; ix < skillArray.length; ix++) {
				sourceArray.push(skillArray[ix]);
			}
		}
	}

	function genSourceArray() {
		sourceArray = [];
		sourceArray.push({ name: 'Front-End', logo: FrontendLogo });
		assessSkillSetExtension('Front-End', 'frontend');
		sourceArray.push({ name: 'Back-End', logo: BackendLogo });
		assessSkillSetExtension('Back-End', 'backend');
		sourceArray.push({ name: 'Security', logo: SecurityLogo });
		assessSkillSetExtension('Security', 'security');
		sourceArray.push({ name: 'Dev Ops', logo: DevOpsLogo });
		assessSkillSetExtension('Dev Ops', 'ops');
		sourceArray.push({ name: 'Databases', logo: DatabasesLogo });
		assessSkillSetExtension('Databases', 'databases');
	}

	var transitionDuration = 150;
	onMount(() => {
		if (isMobile()) {
			transitionDuration = 0;
		} else {
			transitionDuration = 150;
		}
		windowID.subscribe((WID) => {
			lwindowID = WID;
		});
		globalTheme.subscribe((theme) => {
			lglobalTheme = theme;
		});
		sourceArray = skillSetHash[selectedSkillSet];
		if (isMobile()) {
			genSourceArray();
		}
	});

	$: lwindowID == 'skills' ? (containerDisplay = 'flex') : (containerDisplay = 'none');

	var containerDisplay = 'none';
	let show = false;

	var selectedSkillSet = 'frontend';

	var frontendSkills = [
		{ name: 'React', logo: ReactLogo },
		{ name: 'Svelte / Svelte Kit', logo: SvelteLogo },
		{ name: 'Vue / Nuxt', logo: VueLogo },
		{ name: 'HTML / JS / CSS', logo: JS_CSS_Logos }
	];
	var backendSkills = [
		{ name: 'Express', logo: GenericLogo },
		{ name: 'Vercel Serverless', logo: VercelLogo },
		{ name: 'Socket.IO', logo: SocketIoLogo },
		{ name: 'Multi-factor Auth', logo: GenericLogo }
	];
	var securitySkills = [
		{ name: 'Snyk', logo: SnykLogo },
		{ name: 'Git Guardian', logo: GitGuardianLogo },
		{ name: 'Using Env Variables', logo: GenericLogo }
	];
	var devOpsSkills = [
		{ name: 'Github', logo: GithubLogo },
		{ name: 'Git', logo: GitLogo },
		{ name: 'Using Product-Specific Dashboards', logo: GenericLogo },
		{ name: 'New Relic', logo: NewRelicLogo }
	];
	var databasesSkills = [
		{ name: 'Mongo DB', logo: MongoDbLogo },
		{ name: 'Firebase Realtime', logo: FirebaseRealtimeLogo },
		{ name: 'Planet Scale', logo: PlanetScaleLogo }
	];
	var skillSetHash = {
		frontend: frontendSkills,
		backend: backendSkills,
		security: securitySkills,
		databases: databasesSkills,
		ops: devOpsSkills,
		transition: []
	};

	function updateDisplayedSkillSet(SID) {
		selectedSkillSet = 'transition';
		setTimeout(() => {
			selectedSkillSet = SID;
		}, 40);
	}

	$: genSourceArray(expandState);

	function listItemOnClickHandler(e) {
		if (expandState[e.detail] != undefined) {
			for (let key in expandState) {
				if (key != e.detail) {
					expandState[key] = false;
				}
			}
			expandState[e.detail] = !expandState[e.detail];
		}
	}

	export { show };
</script>

<div style="display: {containerDisplay};">
	{#if !isMobile()}
		<SkillsDeco color={lglobalTheme.primary} opacity="0.1" width="100%" height="100%" />
		<SkillsDeco color={lglobalTheme.primary} opacity="0.1" width="100%" height="100%" />
		<SkillsDeco color={lglobalTheme.primary} opacity="0.1" width="100%" height="100%" />
		<SkillsDeco color={lglobalTheme.primary} opacity="0.1" width="100%" height="100%" />
		<SkillsDeco color={lglobalTheme.primary} opacity="0.1" width="100%" height="100%" />
		<SkillsDeco color={lglobalTheme.primary} opacity="0.1" width="100%" height="100%" />
	{/if}
	{#if isMobile()}
		<div
			id="mobileLn"
			style="background: radial-gradient(
			250.04% 3194999.83% at 0% 100%,
			{lglobalTheme.primary} 0%,
			rgba(97, 0, 255, 0) 100%
		); z-index: 2;"
		/>
	{/if}
	<div class="skillsContainer" style="display: {containerDisplay};">
		{#if !isMobile() && show}
			<div
				class="skillsMenuContainer"
				transition:fly={{
					duration: transitionDuration,
					delay: transitionDuration,
					x: '-30%',
					y: '-20%'
				}}
			>
				<Button
					onClick={() => {
						updateDisplayedSkillSet('frontend');
					}}
					label="Front-end"
					color={selectedSkillSet == 'frontend' ? '#FFF' : `${lglobalTheme.primary}`}
					width="100%"
					height="20%"
					borderColor={lglobalTheme.primary}
					backgroundColor={selectedSkillSet == 'frontend' ? '#6100FF40' : '#6100FF00'}
					desktopFont="20px"
					borderRadius="5px"
				/>
				<Button
					onClick={() => {
						updateDisplayedSkillSet('backend');
					}}
					label="Back-end"
					top="26.666666667%"
					color={selectedSkillSet == 'backend' ? '#FFF' : `${lglobalTheme.primary}`}
					width="100%"
					height="20%"
					borderColor={lglobalTheme.primary}
					backgroundColor={selectedSkillSet == 'backend' ? '#6100FF40' : '#6100FF00'}
					desktopFont="20px"
					borderRadius="5px"
				/>
				<Button
					onClick={() => {
						updateDisplayedSkillSet('security');
					}}
					label="Security"
					top="53.333333333%"
					color={selectedSkillSet == 'security' ? '#FFF' : `${lglobalTheme.primary}`}
					width="100%"
					height="20%"
					borderColor={lglobalTheme.primary}
					backgroundColor={selectedSkillSet == 'security'
						? `${lglobalTheme.primary}20`
						: '#6100FF00'}
					desktopFont="20px"
					borderRadius="5px"
				/>
				<Button
					label="Dev Ops"
					top="80%"
					onClick={() => {
						updateDisplayedSkillSet('ops');
					}}
					color={selectedSkillSet == 'ops' ? '#FFF' : `${lglobalTheme.primary}`}
					width="100%"
					height="20%"
					borderColor={lglobalTheme.primary}
					backgroundColor={selectedSkillSet == 'ops' ? `${lglobalTheme.primary}20` : '#6100FF00'}
					desktopFont="20px"
					borderRadius="5px"
				/>
				<Button
					label="Databases"
					top="107%"
					onClick={() => {
						updateDisplayedSkillSet('databases');
					}}
					color={selectedSkillSet == 'databases' ? '#FFF' : `${lglobalTheme.primary}`}
					width="100%"
					height="20%"
					borderColor={lglobalTheme.primary}
					backgroundColor={selectedSkillSet == 'databases'
						? `${lglobalTheme.primary}20`
						: '#6100FF00'}
					desktopFont="20px"
					borderRadius="5px"
				/>
			</div>
		{/if}
		{#if show}
			<ul
				class="skillsContainerActual"
				transition:fly={{
					duration: transitionDuration,
					delay: transitionDuration,
					x: '30%',
					y: '20%'
				}}
			>
				{#each isMobile() ? sourceArray : skillSetHash[selectedSkillSet] as skill, ix}
					{#if skill.name != 'empty' && show}
						<SkillsListEntry
							on:listItemOnClick={listItemOnClickHandler}
							{ix}
							labelColor={expandState[skill.name] != undefined ? '#FFF' : '#AAA'}
							logo={skill.logo}
							logoColor={lglobalTheme.primary}
							logoSize="6vh"
							label={skill.name}
						/>
					{/if}
				{/each}
			</ul>
		{/if}
	</div>
</div>

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
	.skillsContainerActual {
		position: absolute;
		top: 13.425925926%;
		left: 32.34375%;
		width: 41.822916667%;
		height: 70.833333333%;
		border-radius: 15px;
		padding: 0;
		margin: 0;
		z-index: 5;
		overflow: scroll;
	}
	.skillsContainerActual::-webkit-scrollbar {
		width: 0vh;
		height: 0vh;
	}
	.skillsMenuContainer {
		position: absolute;
		top: 13.425925926%;
		left: 19.427083333%;
		width: 12.239583333%;
		height: 20.833333333%;
		z-index: 7;
	}
	@media only screen and (max-width: 1000px) and (min-height: 600px) {
		.skillsContainerActual {
			width: 97.777777778%;
			left: 1.111111111%;
			height: 87%;
		}
	}
</style>
