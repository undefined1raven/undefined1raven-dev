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
	import { onMount } from 'svelte';

	let lglobalTheme = {};

	onMount(() => {
		globalTheme.subscribe((theme) => {
			lglobalTheme = theme;
		});
	});

	let show = false;

	let selectedSkillSet = 'frontend';

	let frontendSkills = [
		{ name: 'React', logo: ReactLogo },
		{ name: 'Svelte / Svelte Kit', logo: SvelteLogo },
		{ name: 'Vue / Nuxt', logo: VueLogo },
		{ name: 'HTML / JS / CSS', logo: JS_CSS_Logos }
	];
	let backendSkills = [
		{ name: 'Express', logo: GenericLogo },
		{ name: 'Vercel Serverless', logo: VercelLogo },
		{ name: 'Socket.IO', logo: SocketIoLogo },
		{ name: 'Multi-factor Auth', logo: GenericLogo }
	];
	let securitySkills = [
		{ name: 'Snyk', logo: SnykLogo },
		{ name: 'Git Guardian', logo: GitGuardianLogo },
		{ name: 'Using Env Variables', logo: GenericLogo }
	];
	let devOpsSkills = [
		{ name: 'Github', logo: GithubLogo },
		{ name: 'Git', logo: GitLogo },
		{ name: 'Using Product-Specific Dashboards', logo: GenericLogo }
	];
	let databasesSkills = [
		{ name: 'Mongo DB', logo: MongoDbLogo },
		{ name: 'Firebase Realtime', logo: FirebaseRealtimeLogo },
		{ name: 'Planet Scale', logo: PlanetScaleLogo }
	];
	let skillSetHash = {
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

	export { show };
</script>

{#if show}
	<div class="skillsContainer">
		<div
			class="skillsMenuContainer"
			transition:fly={{ duration: 150, delay: 150, x: '-30%', y: '-20%' }}
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
				backgroundColor={selectedSkillSet == 'security' ? `${lglobalTheme.primary}20` : '#6100FF00'}
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
		<ul
			class="skillsContainerActual"
			transition:fly={{ duration: 150, delay: 150, x: '30%', y: '20%' }}
		>
			{#each skillSetHash[selectedSkillSet] as skill, ix}
				<SkillsListEntry
					{ix}
					logo={skill.logo}
					logoColor={lglobalTheme.primary}
					logoSize="6vh"
					label={skill.name}
				/>
			{/each}
		</ul>
	</div>
{/if}

<style>
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
	}
	.skillsMenuContainer {
		position: absolute;
		top: 13.425925926%;
		left: 19.427083333%;
		width: 12.239583333%;
		height: 20.833333333%;
		z-index: 7;
	}
</style>
